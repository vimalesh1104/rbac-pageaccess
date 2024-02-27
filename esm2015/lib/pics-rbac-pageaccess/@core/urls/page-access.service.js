import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessManagementConfig } from '../../@core/urls/access-management-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/data-store.service";
export class PageAccessService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this.isfull = false;
        this.ishide = false;
        this.isread = false;
        this.isreadwrite = false;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    /**
     * when user selected policy
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPolicy(access, id, policyGroupData, selectedFieldData, pageData) {
        const fullArray = [];
        for (const value of id) {
            const selectedData = policyGroupData.filter(key => key.id === value);
            const formObj = {
                id: '',
                description: '',
                policygroupname: '',
                pageConfigs: [],
                assetConfigs: []
            };
            this.setPolicyObj(formObj, selectedData, value);
            this.loadAccessForPage(access, selectedData, formObj, value, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, value, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected Persona
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPersona(access, personaId, id, roleAddedData, selectedFieldData, pageData) {
        const fullArray = [];
        // const personaId = this.rbacForm.get('roleid').value;
        // const personaId = this.rbacForm.get('roleid').value;
        const formObj = {
            id: '',
            rolekey: '',
            rolename: '',
            description: '',
            effectivedate: '',
            pageConfigs: [],
            assetConfigs: [],
            rolePolicyGroupConfigs: []
        };
        for (const item of personaId) {
            const selectedData = roleAddedData.filter(key => key.id === item);
            this.setRoleObj(formObj, selectedData, item, id);
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected User
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByUser(access, userId, id, roleids, userList, selectedFieldData, pageData) {
        const fullArray = [];
        for (const item of userId) {
            const selectedData = userList.filter(key => key.id === item);
            const formObj = Object.assign({}, selectedData[0]);
            formObj.pageConfigs = [];
            formObj.assetConfigs = [];
            formObj.policyGroupConfigs = [];
            formObj.roleConfigs = [];
            console.log('======');
            this.setUserObj(formObj, selectedData, item, id, roleids);
            console.log('======1');
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            console.log('======2');
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * Fetch access list for dashboard access
     * @param access
     * @param assetDashBoardConfigs
     * @param formObj
     * @param id
     */
    loadAccessForPage(access, selectedData, formObj, id, pageData) {
        const existPageConfigs = selectedData[0]['pageConfigs'];
        for (const item of access.pageLevelData) {
            const selectedModule = pageData.filter(key => key.id === item['pageid']);
            const pageAccess = access.pageLevelData.filter(key => key.pageid === item['pageid']);
            this.pageAccessCheck(pageAccess);
            const pageKey = {
                id: null,
                isactive: true,
                isfull: this.isfull,
                ishide: this.ishide,
                isread: this.isread,
                isreadwrite: this.isreadwrite,
                pageid: item['pageid'],
                policygroupid: id,
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            if (existPageConfigs.length) {
                const existIds = existPageConfigs.map(p => p.pageid);
                const chkPage = existIds.includes(item['pageid']);
                if (chkPage) {
                    const index = existIds.indexOf(item['pageid']);
                    if (index > -1) {
                        //if found
                        pageKey.id = existPageConfigs[index]['id'];
                        pageKey.isactive = false;
                        formObj.pageConfigs.push(pageKey);
                        existPageConfigs.splice(index, 1);
                    }
                }
                const d = Object.assign({}, pageKey);
                d.id = null;
                d.isactive = true;
                formObj.pageConfigs.push(d);
            }
            else {
                formObj.pageConfigs.push(pageKey);
            }
        }
        // still existconfig length
        if (existPageConfigs.length) {
            existPageConfigs.map(t => {
                t.isactive = false;
                formObj.pageConfigs.push(t);
                return t;
            });
        }
    }
    pageAccessCheck(pageAccess) {
        if (pageAccess[0].pageAccess === '1') {
            this.isfull = true;
        }
        else if (pageAccess[0].pageAccess === '4') {
            this.ishide = true;
        }
        else if (pageAccess[0].pageAccess === '3') {
            this.isread = true;
        }
        else if (pageAccess[0].pageAccess === '2') {
            this.isreadwrite = true;
        }
    }
    setPolicyObj(formObj, selectedData, id) {
        formObj.id = id;
        formObj.description = selectedData[0]['description'];
        formObj.policygroupname = selectedData[0]['policygroupname'];
    }
    loadAccessForFields(access, selectedData, formObj, id, selectedFieldData, pageData) {
        // console.log(selectedData)
        const assetConfigs = selectedData[0]['assetConfigs'].filter(key => key.modulekey !== null);
        // console.log('------------')
        const selectedModule = pageData.filter(key => key.id === access.fpages[0]['id']);
        // console.log(access.fieldLevelData)
        selectedFieldData =
            access.fieldLevelData !== null ? this.setSelectedFieldPage(access.fieldLevelData, selectedFieldData) : [];
        // console.log(selectedData, assetConfigs)
        for (const selectedField of selectedFieldData) {
            if (selectedField.access === null) {
                // continue;
            }
            console.log(selectedField);
            let isfull = false;
            let ishide = false;
            let isread = false;
            let isreadwrite = false;
            if (selectedField.access === '2' || selectedField.access === '1') {
                isfull = true;
            }
            else if (selectedField.access === '4') {
                ishide = true;
            }
            else if (selectedField.access === '3') {
                isread = true;
            }
            else if (selectedField.access === '2') {
                isreadwrite = true;
            }
            const aConfigs = {
                id: selectedField['id'] ? selectedField['id'] : null,
                isactive: true,
                isfull: isfull,
                ishide: ishide,
                isread: isread,
                isreadwrite: isreadwrite,
                assetid: selectedField['assetid'],
                policygroupid: id,
                pageid: selectedField['pageId'] ? selectedField['pageId'] : access.fpages[0]['id'],
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            this.checkExistAsset(assetConfigs, selectedField, aConfigs, formObj);
        }
    }
    checkExistAsset(assetConfigs, selectedField, aConfigs, formObj) {
        if (assetConfigs.length) {
            const existIds = assetConfigs.map(p => p.assetid);
            const chkPage = existIds.includes(selectedField['assetid']);
            if (chkPage) {
                const index = existIds.indexOf(selectedField['assetid']);
                if (index > -1) {
                    //if found
                    aConfigs.id = assetConfigs[index]['id'];
                    aConfigs.isactive = false;
                    formObj.assetConfigs.push(aConfigs);
                    assetConfigs.splice(index, 1);
                }
            }
            const d = Object.assign({}, aConfigs);
            d.isactive = true;
            d.id = null;
            formObj.assetConfigs.push(d);
        }
        else {
            formObj.assetConfigs.push(aConfigs);
        }
    }
    setRoleObj(formObj, selectedData, roleid, policyid) {
        formObj.id = roleid;
        formObj.rolekey = selectedData[0]['rolekey'];
        formObj.rolename = selectedData[0]['rolename'];
        formObj.effectivedate = selectedData[0]['effectivedate'];
        formObj.description = selectedData[0]['description'];
        // loop the policy group
        const id = policyid;
        const existRolePolicyConfig = selectedData[0]['rolePolicyGroupConfigs'];
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                roleid: roleid // role id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.rolePolicyGroupConfigs.push(rpolicyConfig);
        }
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.rolePolicyGroupConfigs.push(t);
                return t;
            });
        }
    }
    setUserObj(formObj, selectedData, userId, id, roleids) {
        // loop the policy group
        const existRolePolicyConfig = selectedData[0]['policyGroupConfigs'];
        this.getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj);
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.policyGroupConfigs.push(t);
                return t;
            });
        }
        // loop the role group
        // const roleids = this.rbacForm.get('roleid').value;
        const existRoleId = selectedData[0]['roleConfigs'];
        for (const role of existRoleId) {
            const chkRoleData = roleids.includes(role['roleid']);
            const roleGrp = {
                id: role['id'],
                isactive: false,
                isdefaultrole: role['isdefaultrole'],
                userid: userId,
                roleid: role['roleid'],
                effectivedate: role['effectivedate']
            };
            if (chkRoleData) {
                const index1 = roleids.indexOf(role['roleid']);
                if (index1 > -1) {
                    //if found
                    roleids.splice(index1, 1);
                }
                roleGrp.isactive = true;
            }
            formObj.roleConfigs.push(roleGrp);
        }
        // check new roles group ids
        if (roleids.length) {
            for (const roleId of roleids) {
                const roleGrp = {
                    id: null,
                    isactive: true,
                    isdefaultrole: false,
                    userid: userId,
                    roleid: roleId,
                    effectivedate: new Date()
                };
                formObj.roleConfigs.push(roleGrp);
            }
        }
    }
    getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj) {
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                userid: userId // user id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.policyGroupConfigs.push(rpolicyConfig);
        }
    }
    setSelectedFieldPage(updateArray, selectedFieldData) {
        // console.log('=========>', updateArray, selectedFieldData)
        if (updateArray === null || updateArray === void 0 ? void 0 : updateArray.length) {
            if ((selectedFieldData === null || selectedFieldData === void 0 ? void 0 : selectedFieldData.length) >= updateArray.length) {
                selectedFieldData = this.updateDuplicatesinArray([...selectedFieldData], [...updateArray]);
                return selectedFieldData;
            }
            else {
                selectedFieldData = [...updateArray];
                return selectedFieldData;
            }
        }
    }
    updateDuplicatesinArray(origArr, updatingArr) {
        const updatingArrids = new Set(updatingArr.map(ele => ele.assetid));
        return [...updatingArr, ...origArr.filter(ele => !updatingArrids.has(ele.assetid))];
    }
    getMostFrequentEle(arr) {
        const hashMap = arr.reduce((acc, val) => {
            acc[String(val)] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(hashMap).reduce((a, b) => (hashMap[a] > hashMap[b] ? a : b));
    }
    getAccessArrayOnClick(pagesFromField, pageData, selectedFieldData, savedPageAccessPatching, existingValue) {
        var _a, _b, _c, _d;
        const accessArray = [];
        for (let i = 0; i < (pagesFromField === null || pagesFromField === void 0 ? void 0 : pagesFromField.length); i++) {
            const pageName = pageData.filter(key => key.id === pagesFromField[i]);
            const fieldLevelExist = selectedFieldData.filter(ele => ele.pageId == pagesFromField[i]);
            const pageAccessValue = this.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i);
            accessArray.push(new FormGroup({
                pageName: new FormControl((_a = pageName[0]) === null || _a === void 0 ? void 0 : _a.pagename),
                pageid: new FormControl(pagesFromField[i]),
                pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                validity: new FormControl((((_b = existingValue[i]) === null || _b === void 0 ? void 0 : _b.validity) && String(existingValue[i].validity)) || '0'),
                condition: new FormControl((((_c = existingValue[i]) === null || _c === void 0 ? void 0 : _c.condition) && existingValue[i].condition) || 'always'),
                fallbackTo: new FormControl((((_d = existingValue[i]) === null || _d === void 0 ? void 0 : _d.condition) && existingValue[i].fallbackTo) || 'n')
            }));
        }
        return accessArray;
    }
    checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i) {
        var _a, _b;
        let pageAccessValue;
        if ((fieldLevelExist === null || fieldLevelExist === void 0 ? void 0 : fieldLevelExist.length) && savedPageAccessPatching) {
            pageAccessValue = this.getMostFrequentEle((_a = fieldLevelExist === null || fieldLevelExist === void 0 ? void 0 : fieldLevelExist.filter(ele => (ele.pageId = pagesFromField[i]))) === null || _a === void 0 ? void 0 : _a.map(e => (e.access ? Number(e.access) : 0)));
        }
        else {
            pageAccessValue = (_b = existingValue === null || existingValue === void 0 ? void 0 : existingValue.find(ele => ele.pageid === pagesFromField[i])) === null || _b === void 0 ? void 0 : _b.pageAccess;
        }
        return pageAccessValue;
    }
    getAccess(access) {
        let accessField;
        accessField = '2';
        if (access === null || access === void 0 ? void 0 : access.isreadwrite) {
            accessField = '2';
        }
        else if (access === null || access === void 0 ? void 0 : access.ishide) {
            accessField = '4';
        }
        else if (access === null || access === void 0 ? void 0 : access.isread) {
            accessField = '3';
        }
        else if (access === null || access === void 0 ? void 0 : access.isfull) {
            accessField = '5';
        }
        return accessField;
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getAssetByPageId(pId) {
        return this.httpService.get(`${AccessManagementConfig.EndPoint.Asset.getPageAsset}/${pId}`);
    }
    createAsset(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.post(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAsset}`, asset);
    }
    getAssetById(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = AccessManagementConfig.EndPoint.Asset.getUserAsset;
        }
        else if (selectedAccess === 'role') {
            url = AccessManagementConfig.EndPoint.Asset.getRoleAsset;
        }
        else {
            url = AccessManagementConfig.EndPoint.Asset.getPolicyGroupAsset;
        }
        return this.httpService.get(`${url}/${selectedId}`);
    }
    getPolicyGroupPage(policygroupid) {
        return this.httpService.get(`/policygroup/${policygroupid}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    getDynamicPage(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.get(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    updateDynamicPage(selectedAccess, selectedId, pageData) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.put(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`, pageData);
    }
    createAccess(fieldLevelAccess, accessBy, payload, userId, roleId, policyId) {
        let url;
        const createUrl = fieldLevelAccess
            ? AccessManagementConfig.EndPoint.Asset.getAsset
            : AccessManagementConfig.EndPoint.Page.getPage;
        // check only policy group
        if (accessBy === '3') {
            url = `${AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroup}${policyId ? policyId : '0'}${createUrl}`;
        }
        // check persona with policy group
        if (accessBy === '2') {
            url = `${AccessManagementConfig.EndPoint.Role.getRole}${roleId ? roleId : '0'}${createUrl}`;
        }
        // check user, persona with policy group
        if (accessBy === '1') {
            url = `${AccessManagementConfig.EndPoint.User.getUser}${userId ? userId : '0'}${createUrl}`;
        }
        return this.httpService.post(url, payload);
    }
    getApplicationAccess() {
        return this.httpService.get('/applicationaccess/');
    }
}
PageAccessService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageAccessService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
PageAccessService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageAccessService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1hY2Nlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL3BhZ2UtYWNjZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFNdkYsTUFBTSxPQUFPLGlCQUFpQjtJQVM1QixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFSbkQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQ3JFLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN0QixNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxF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QUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLENBQUM7U0FDN0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyRCxDQUFDOzsrR0F4Z0JVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB9IGZyb20gJy4uLy4uL0Bjb3JlL3VybHMvYWNjZXNzLW1hbmFnZW1lbnQtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlQWNjZXNzU2VydmljZSB7XHJcbiAgaXNmdWxsID0gZmFsc2U7XHJcbiAgaXNoaWRlID0gZmFsc2U7XHJcbiAgaXNyZWFkID0gZmFsc2U7XHJcbiAgaXNyZWFkd3JpdGUgPSBmYWxzZTtcclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge1xyXG4gIC8vICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxcclxuICAvLyB9XHJcbiAgaHR0cFNlcnZpY2U6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICAvKipcclxuICAgKiB3aGVuIHVzZXIgc2VsZWN0ZWQgcG9saWN5XHJcbiAgICogQHBhcmFtIGFjY2VzcyBSYXcgdmFsdXIgb2YgUkJhYyBmb3JtXHJcbiAgICogQHJldHVybnMgZm9ybSBhcnJheSBvZiBEQVxyXG4gICAqIEBjaGlsZEZ1bmN0aW9uIG9mIHNhdmVSYmFjXHJcbiAgICovXHJcbiAgYWNjZXNzQnlQb2xpY3koYWNjZXNzLCBpZCwgcG9saWN5R3JvdXBEYXRhLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBmdWxsQXJyYXkgPSBbXTtcclxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaWQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gcG9saWN5R3JvdXBEYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSB2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGZvcm1PYmogPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBwb2xpY3lncm91cG5hbWU6ICcnLFxyXG4gICAgICAgIHBhZ2VDb25maWdzOiBbXSxcclxuICAgICAgICBhc3NldENvbmZpZ3M6IFtdXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2V0UG9saWN5T2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgdmFsdWUpO1xyXG4gICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCB2YWx1ZSwgcGFnZURhdGEpO1xyXG4gICAgICBpZiAoYWNjZXNzLmZpZWxkTGV2ZWxEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvckZpZWxkcyhhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgdmFsdWUsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZnVsbEFycmF5LnB1c2goZm9ybU9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bGxBcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHdoZW4gdXNlciBzZWxlY3RlZCBQZXJzb25hXHJcbiAgICogQHBhcmFtIGFjY2VzcyBSYXcgdmFsdXIgb2YgUkJhYyBmb3JtXHJcbiAgICogQHJldHVybnMgZm9ybSBhcnJheSBvZiBEQVxyXG4gICAqIEBjaGlsZEZ1bmN0aW9uIG9mIHNhdmVSYmFjXHJcbiAgICovXHJcbiAgYWNjZXNzQnlQZXJzb25hKGFjY2VzcywgcGVyc29uYUlkLCBpZCwgcm9sZUFkZGVkRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKSB7XHJcbiAgICBjb25zdCBmdWxsQXJyYXkgPSBbXTtcclxuICAgIC8vIGNvbnN0IHBlcnNvbmFJZCA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlaWQnKS52YWx1ZTtcclxuICAgIC8vIGNvbnN0IHBlcnNvbmFJZCA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlaWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IGZvcm1PYmogPSB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgcm9sZWtleTogJycsXHJcbiAgICAgIHJvbGVuYW1lOiAnJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBlZmZlY3RpdmVkYXRlOiAnJyxcclxuICAgICAgcGFnZUNvbmZpZ3M6IFtdLFxyXG4gICAgICBhc3NldENvbmZpZ3M6IFtdLFxyXG4gICAgICByb2xlUG9saWN5R3JvdXBDb25maWdzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcGVyc29uYUlkKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IHJvbGVBZGRlZERhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGl0ZW0pO1xyXG4gICAgICB0aGlzLnNldFJvbGVPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCBpdGVtLCBpZCk7XHJcbiAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvclBhZ2UoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGl0ZW0sIHBhZ2VEYXRhKTtcclxuICAgICAgaWYgKGFjY2Vzcy5maWVsZExldmVsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JGaWVsZHMoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGl0ZW0sIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZnVsbEFycmF5LnB1c2goZm9ybU9iaik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVsbEFycmF5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogd2hlbiB1c2VyIHNlbGVjdGVkIFVzZXJcclxuICAgKiBAcGFyYW0gYWNjZXNzIFJhdyB2YWx1ciBvZiBSQmFjIGZvcm1cclxuICAgKiBAcmV0dXJucyBmb3JtIGFycmF5IG9mIERBXHJcbiAgICogQGNoaWxkRnVuY3Rpb24gb2Ygc2F2ZVJiYWNcclxuICAgKi9cclxuICBhY2Nlc3NCeVVzZXIoYWNjZXNzLCB1c2VySWQsIGlkLCByb2xlaWRzLCB1c2VyTGlzdCwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKSB7XHJcbiAgICBjb25zdCBmdWxsQXJyYXkgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdXNlcklkKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IHVzZXJMaXN0LmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBpdGVtKTtcclxuICAgICAgY29uc3QgZm9ybU9iaiA9IHsgLi4uc2VsZWN0ZWREYXRhWzBdIH07XHJcbiAgICAgIGZvcm1PYmoucGFnZUNvbmZpZ3MgPSBbXTtcclxuICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MgPSBbXTtcclxuICAgICAgZm9ybU9iai5wb2xpY3lHcm91cENvbmZpZ3MgPSBbXTtcclxuICAgICAgZm9ybU9iai5yb2xlQ29uZmlncyA9IFtdO1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09PT09Jyk7XHJcbiAgICAgIHRoaXMuc2V0VXNlck9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIGl0ZW0sIGlkLCByb2xlaWRzKTtcclxuICAgICAgY29uc29sZS5sb2coJz09PT09PTEnKTtcclxuICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaXRlbSwgcGFnZURhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09PT09MicpO1xyXG4gICAgICBpZiAoYWNjZXNzLmZpZWxkTGV2ZWxEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvckZpZWxkcyhhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaXRlbSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBmdWxsQXJyYXkucHVzaChmb3JtT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVsbEFycmF5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYWNjZXNzIGxpc3QgZm9yIGRhc2hib2FyZCBhY2Nlc3NcclxuICAgKiBAcGFyYW0gYWNjZXNzXHJcbiAgICogQHBhcmFtIGFzc2V0RGFzaEJvYXJkQ29uZmlnc1xyXG4gICAqIEBwYXJhbSBmb3JtT2JqXHJcbiAgICogQHBhcmFtIGlkXHJcbiAgICovXHJcbiAgbG9hZEFjY2Vzc0ZvclBhZ2UoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGlkLCBwYWdlRGF0YSkge1xyXG4gICAgY29uc3QgZXhpc3RQYWdlQ29uZmlncyA9IHNlbGVjdGVkRGF0YVswXVsncGFnZUNvbmZpZ3MnXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhY2Nlc3MucGFnZUxldmVsRGF0YSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE1vZHVsZSA9IHBhZ2VEYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgIGNvbnN0IHBhZ2VBY2Nlc3MgPSBhY2Nlc3MucGFnZUxldmVsRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5wYWdlaWQgPT09IGl0ZW1bJ3BhZ2VpZCddKTtcclxuICAgICAgdGhpcy5wYWdlQWNjZXNzQ2hlY2socGFnZUFjY2Vzcyk7XHJcbiAgICAgIGNvbnN0IHBhZ2VLZXkgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgaXNmdWxsOiB0aGlzLmlzZnVsbCxcclxuICAgICAgICBpc2hpZGU6IHRoaXMuaXNoaWRlLFxyXG4gICAgICAgIGlzcmVhZDogdGhpcy5pc3JlYWQsXHJcbiAgICAgICAgaXNyZWFkd3JpdGU6IHRoaXMuaXNyZWFkd3JpdGUsXHJcbiAgICAgICAgcGFnZWlkOiBpdGVtWydwYWdlaWQnXSxcclxuICAgICAgICBwb2xpY3lncm91cGlkOiBpZCxcclxuICAgICAgICBtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydtb2R1bGVrZXknXSxcclxuICAgICAgICBzdWJtb2R1bGVrZXk6IHNlbGVjdGVkTW9kdWxlWzBdWydzdWJtb2R1bGVrZXknXVxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICBpZiAoZXhpc3RQYWdlQ29uZmlncy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBleGlzdElkcyA9IGV4aXN0UGFnZUNvbmZpZ3MubWFwKHAgPT4gcC5wYWdlaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICAgIHBhZ2VLZXkuaWQgPSBleGlzdFBhZ2VDb25maWdzW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgICAgcGFnZUtleS5pc2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2gocGFnZUtleSk7XHJcbiAgICAgICAgICAgIGV4aXN0UGFnZUNvbmZpZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZCA9IHsgLi4ucGFnZUtleSB9O1xyXG4gICAgICAgIGQuaWQgPSBudWxsO1xyXG4gICAgICAgIGQuaXNhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGZvcm1PYmoucGFnZUNvbmZpZ3MucHVzaChkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2gocGFnZUtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHN0aWxsIGV4aXN0Y29uZmlnIGxlbmd0aFxyXG4gICAgaWYgKGV4aXN0UGFnZUNvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgIGV4aXN0UGFnZUNvbmZpZ3MubWFwKHQgPT4ge1xyXG4gICAgICAgIHQuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2godCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBwYWdlQWNjZXNzQ2hlY2socGFnZUFjY2Vzcykge1xyXG4gICAgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzEnKSB7XHJcbiAgICAgIHRoaXMuaXNmdWxsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnNCcpIHtcclxuICAgICAgdGhpcy5pc2hpZGUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlQWNjZXNzWzBdLnBhZ2VBY2Nlc3MgPT09ICczJykge1xyXG4gICAgICB0aGlzLmlzcmVhZCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzInKSB7XHJcbiAgICAgIHRoaXMuaXNyZWFkd3JpdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRQb2xpY3lPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCBpZCkge1xyXG4gICAgZm9ybU9iai5pZCA9IGlkO1xyXG4gICAgZm9ybU9iai5kZXNjcmlwdGlvbiA9IHNlbGVjdGVkRGF0YVswXVsnZGVzY3JpcHRpb24nXTtcclxuICAgIGZvcm1PYmoucG9saWN5Z3JvdXBuYW1lID0gc2VsZWN0ZWREYXRhWzBdWydwb2xpY3lncm91cG5hbWUnXTtcclxuICB9XHJcblxyXG4gIGxvYWRBY2Nlc3NGb3JGaWVsZHMoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGlkLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0YSlcclxuICAgIGNvbnN0IGFzc2V0Q29uZmlncyA9IHNlbGVjdGVkRGF0YVswXVsnYXNzZXRDb25maWdzJ10uZmlsdGVyKGtleSA9PiBrZXkubW9kdWxla2V5ICE9PSBudWxsKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0nKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRNb2R1bGUgPSBwYWdlRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gYWNjZXNzLmZwYWdlc1swXVsnaWQnXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY2Nlc3MuZmllbGRMZXZlbERhdGEpXHJcbiAgICBzZWxlY3RlZEZpZWxkRGF0YSA9XHJcbiAgICAgIGFjY2Vzcy5maWVsZExldmVsRGF0YSAhPT0gbnVsbCA/IHRoaXMuc2V0U2VsZWN0ZWRGaWVsZFBhZ2UoYWNjZXNzLmZpZWxkTGV2ZWxEYXRhLCBzZWxlY3RlZEZpZWxkRGF0YSkgOiBbXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkRGF0YSwgYXNzZXRDb25maWdzKVxyXG4gICAgZm9yIChjb25zdCBzZWxlY3RlZEZpZWxkIG9mIHNlbGVjdGVkRmllbGREYXRhKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRmllbGQpO1xyXG4gICAgICBsZXQgaXNmdWxsID0gZmFsc2U7XHJcbiAgICAgIGxldCBpc2hpZGUgPSBmYWxzZTtcclxuICAgICAgbGV0IGlzcmVhZCA9IGZhbHNlO1xyXG4gICAgICBsZXQgaXNyZWFkd3JpdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzInIHx8IHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMScpIHtcclxuICAgICAgICBpc2Z1bGwgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnNCcpIHtcclxuICAgICAgICBpc2hpZGUgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMycpIHtcclxuICAgICAgICBpc3JlYWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMicpIHtcclxuICAgICAgICBpc3JlYWR3cml0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYUNvbmZpZ3MgPSB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkRmllbGRbJ2lkJ10gPyBzZWxlY3RlZEZpZWxkWydpZCddIDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBpc2Z1bGw6IGlzZnVsbCxcclxuICAgICAgICBpc2hpZGU6IGlzaGlkZSxcclxuICAgICAgICBpc3JlYWQ6IGlzcmVhZCxcclxuICAgICAgICBpc3JlYWR3cml0ZTogaXNyZWFkd3JpdGUsXHJcbiAgICAgICAgYXNzZXRpZDogc2VsZWN0ZWRGaWVsZFsnYXNzZXRpZCddLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGlkLFxyXG4gICAgICAgIHBhZ2VpZDogc2VsZWN0ZWRGaWVsZFsncGFnZUlkJ10gPyBzZWxlY3RlZEZpZWxkWydwYWdlSWQnXSA6IGFjY2Vzcy5mcGFnZXNbMF1bJ2lkJ10sXHJcbiAgICAgICAgbW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnbW9kdWxla2V5J10sXHJcbiAgICAgICAgc3VibW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnc3VibW9kdWxla2V5J11cclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgdGhpcy5jaGVja0V4aXN0QXNzZXQoYXNzZXRDb25maWdzLCBzZWxlY3RlZEZpZWxkLCBhQ29uZmlncywgZm9ybU9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrRXhpc3RBc3NldChhc3NldENvbmZpZ3MsIHNlbGVjdGVkRmllbGQsIGFDb25maWdzLCBmb3JtT2JqKSB7XHJcbiAgICBpZiAoYXNzZXRDb25maWdzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBleGlzdElkcyA9IGFzc2V0Q29uZmlncy5tYXAocCA9PiBwLmFzc2V0aWQpO1xyXG4gICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoc2VsZWN0ZWRGaWVsZFsnYXNzZXRpZCddKTtcclxuICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2Yoc2VsZWN0ZWRGaWVsZFsnYXNzZXRpZCddKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgYUNvbmZpZ3MuaWQgPSBhc3NldENvbmZpZ3NbaW5kZXhdWydpZCddO1xyXG4gICAgICAgICAgYUNvbmZpZ3MuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzLnB1c2goYUNvbmZpZ3MpO1xyXG4gICAgICAgICAgYXNzZXRDb25maWdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGQgPSB7IC4uLmFDb25maWdzIH07XHJcbiAgICAgIGQuaXNhY3RpdmUgPSB0cnVlO1xyXG4gICAgICBkLmlkID0gbnVsbDtcclxuICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MucHVzaChkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzLnB1c2goYUNvbmZpZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Um9sZU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIHJvbGVpZCwgcG9saWN5aWQpIHtcclxuICAgIGZvcm1PYmouaWQgPSByb2xlaWQ7XHJcbiAgICBmb3JtT2JqLnJvbGVrZXkgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVrZXknXTtcclxuICAgIGZvcm1PYmoucm9sZW5hbWUgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVuYW1lJ107XHJcbiAgICBmb3JtT2JqLmVmZmVjdGl2ZWRhdGUgPSBzZWxlY3RlZERhdGFbMF1bJ2VmZmVjdGl2ZWRhdGUnXTtcclxuICAgIGZvcm1PYmouZGVzY3JpcHRpb24gPSBzZWxlY3RlZERhdGFbMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAvLyBsb29wIHRoZSBwb2xpY3kgZ3JvdXBcclxuICAgIGNvbnN0IGlkID0gcG9saWN5aWQ7XHJcbiAgICBjb25zdCBleGlzdFJvbGVQb2xpY3lDb25maWcgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVQb2xpY3lHcm91cENvbmZpZ3MnXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpZCkge1xyXG4gICAgICBjb25zdCBycG9saWN5Q29uZmlnID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGl0ZW0sIC8vIGdyb3VwIHBvbGljeSBpZFxyXG4gICAgICAgIHJvbGVpZDogcm9sZWlkIC8vIHJvbGUgaWRcclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgaWYgKGV4aXN0Um9sZVBvbGljeUNvbmZpZy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBleGlzdElkcyA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAocCA9PiBwLnBvbGljeWdyb3VwaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhpdGVtKTtcclxuICAgICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBleGlzdElkcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgICBycG9saWN5Q29uZmlnLmlkID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgICAgZXhpc3RSb2xlUG9saWN5Q29uZmlnLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvcm1PYmoucm9sZVBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHJwb2xpY3lDb25maWcpO1xyXG4gICAgfVxyXG4gICAgLy8gc3RpbGwgZXhpc3Rjb25maWcgbGVuZ3RoXHJcbiAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHQgPT4ge1xyXG4gICAgICAgIHQuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtT2JqLnJvbGVQb2xpY3lHcm91cENvbmZpZ3MucHVzaCh0KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgdXNlcklkLCBpZCwgcm9sZWlkcykge1xyXG4gICAgLy8gbG9vcCB0aGUgcG9saWN5IGdyb3VwXHJcbiAgICBjb25zdCBleGlzdFJvbGVQb2xpY3lDb25maWcgPSBzZWxlY3RlZERhdGFbMF1bJ3BvbGljeUdyb3VwQ29uZmlncyddO1xyXG4gICAgdGhpcy5nZXRDaGVja1BvbGljeUNvbmZpZyhpZCwgdXNlcklkLCBleGlzdFJvbGVQb2xpY3lDb25maWcsIGZvcm1PYmopO1xyXG4gICAgLy8gc3RpbGwgZXhpc3Rjb25maWcgbGVuZ3RoXHJcbiAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHQgPT4ge1xyXG4gICAgICAgIHQuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtT2JqLnBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGxvb3AgdGhlIHJvbGUgZ3JvdXBcclxuICAgIC8vIGNvbnN0IHJvbGVpZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZWlkJykudmFsdWU7XHJcbiAgICBjb25zdCBleGlzdFJvbGVJZCA9IHNlbGVjdGVkRGF0YVswXVsncm9sZUNvbmZpZ3MnXTtcclxuICAgIGZvciAoY29uc3Qgcm9sZSBvZiBleGlzdFJvbGVJZCkge1xyXG4gICAgICBjb25zdCBjaGtSb2xlRGF0YSA9IHJvbGVpZHMuaW5jbHVkZXMocm9sZVsncm9sZWlkJ10pO1xyXG4gICAgICBjb25zdCByb2xlR3JwID0ge1xyXG4gICAgICAgIGlkOiByb2xlWydpZCddLFxyXG4gICAgICAgIGlzYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc2RlZmF1bHRyb2xlOiByb2xlWydpc2RlZmF1bHRyb2xlJ10sXHJcbiAgICAgICAgdXNlcmlkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZWlkOiByb2xlWydyb2xlaWQnXSxcclxuICAgICAgICBlZmZlY3RpdmVkYXRlOiByb2xlWydlZmZlY3RpdmVkYXRlJ11cclxuICAgICAgfTtcclxuICAgICAgaWYgKGNoa1JvbGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXgxID0gcm9sZWlkcy5pbmRleE9mKHJvbGVbJ3JvbGVpZCddKTtcclxuICAgICAgICBpZiAoaW5kZXgxID4gLTEpIHtcclxuICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgIHJvbGVpZHMuc3BsaWNlKGluZGV4MSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvbGVHcnAuaXNhY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1PYmoucm9sZUNvbmZpZ3MucHVzaChyb2xlR3JwKTtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIG5ldyByb2xlcyBncm91cCBpZHNcclxuICAgIGlmIChyb2xlaWRzLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGNvbnN0IHJvbGVJZCBvZiByb2xlaWRzKSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZUdycCA9IHtcclxuICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBpc2RlZmF1bHRyb2xlOiBmYWxzZSxcclxuICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxyXG4gICAgICAgICAgcm9sZWlkOiByb2xlSWQsXHJcbiAgICAgICAgICBlZmZlY3RpdmVkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3JtT2JqLnJvbGVDb25maWdzLnB1c2gocm9sZUdycCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Q2hlY2tQb2xpY3lDb25maWcoaWQsIHVzZXJJZCwgZXhpc3RSb2xlUG9saWN5Q29uZmlnLCBmb3JtT2JqKSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaWQpIHtcclxuICAgICAgY29uc3QgcnBvbGljeUNvbmZpZyA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBwb2xpY3lncm91cGlkOiBpdGVtLCAvLyBncm91cCBwb2xpY3kgaWRcclxuICAgICAgICB1c2VyaWQ6IHVzZXJJZCAvLyB1c2VyIGlkXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGNoZWNrIGV4aXN0IHBhZ2UgbGVuZ3RoXHJcbiAgICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RJZHMgPSBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHAgPT4gcC5wb2xpY3lncm91cGlkKTtcclxuICAgICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgICAgcnBvbGljeUNvbmZpZy5pZCA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZ1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3JtT2JqLnBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHJwb2xpY3lDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRTZWxlY3RlZEZpZWxkUGFnZSh1cGRhdGVBcnJheSwgc2VsZWN0ZWRGaWVsZERhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PT0+JywgdXBkYXRlQXJyYXksIHNlbGVjdGVkRmllbGREYXRhKVxyXG4gICAgaWYgKHVwZGF0ZUFycmF5Py5sZW5ndGgpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkRmllbGREYXRhPy5sZW5ndGggPj0gdXBkYXRlQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRGaWVsZERhdGEgPSB0aGlzLnVwZGF0ZUR1cGxpY2F0ZXNpbkFycmF5KFsuLi5zZWxlY3RlZEZpZWxkRGF0YV0sIFsuLi51cGRhdGVBcnJheV0pO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEZpZWxkRGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxlY3RlZEZpZWxkRGF0YSA9IFsuLi51cGRhdGVBcnJheV07XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkRmllbGREYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZUR1cGxpY2F0ZXNpbkFycmF5KG9yaWdBcnI6IGFueVtdLCB1cGRhdGluZ0FycjogYW55W10pOiBhbnlbXSB7XHJcbiAgICBjb25zdCB1cGRhdGluZ0FycmlkcyA9IG5ldyBTZXQodXBkYXRpbmdBcnIubWFwKGVsZSA9PiBlbGUuYXNzZXRpZCkpO1xyXG4gICAgcmV0dXJuIFsuLi51cGRhdGluZ0FyciwgLi4ub3JpZ0Fyci5maWx0ZXIoZWxlID0+ICF1cGRhdGluZ0Fycmlkcy5oYXMoZWxlLmFzc2V0aWQpKV07XHJcbiAgfVxyXG4gIGdldE1vc3RGcmVxdWVudEVsZShhcnIpIHtcclxuICAgIGNvbnN0IGhhc2hNYXAgPSBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICBhY2NbU3RyaW5nKHZhbCldID0gKGFjY1t2YWxdIHx8IDApICsgMTtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNoTWFwKS5yZWR1Y2UoKGEsIGIpID0+IChoYXNoTWFwW2FdID4gaGFzaE1hcFtiXSA/IGEgOiBiKSk7XHJcbiAgfVxyXG4gIGdldEFjY2Vzc0FycmF5T25DbGljayhwYWdlc0Zyb21GaWVsZCwgcGFnZURhdGEsIHNlbGVjdGVkRmllbGREYXRhLCBzYXZlZFBhZ2VBY2Nlc3NQYXRjaGluZywgZXhpc3RpbmdWYWx1ZSkge1xyXG4gICAgY29uc3QgYWNjZXNzQXJyYXk6IGFueSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlc0Zyb21GaWVsZD8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcGFnZU5hbWUgPSBwYWdlRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gcGFnZXNGcm9tRmllbGRbaV0pO1xyXG4gICAgICBjb25zdCBmaWVsZExldmVsRXhpc3QgPSBzZWxlY3RlZEZpZWxkRGF0YS5maWx0ZXIoZWxlID0+IGVsZS5wYWdlSWQgPT0gcGFnZXNGcm9tRmllbGRbaV0pO1xyXG4gICAgICBjb25zdCBwYWdlQWNjZXNzVmFsdWUgPSB0aGlzLmNoZWNrRmllbGRMZXZlbEV4aXN0KFxyXG4gICAgICAgIGZpZWxkTGV2ZWxFeGlzdCxcclxuICAgICAgICBzYXZlZFBhZ2VBY2Nlc3NQYXRjaGluZyxcclxuICAgICAgICBwYWdlc0Zyb21GaWVsZCxcclxuICAgICAgICBleGlzdGluZ1ZhbHVlLFxyXG4gICAgICAgIGlcclxuICAgICAgKTtcclxuICAgICAgYWNjZXNzQXJyYXkucHVzaChcclxuICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgIHBhZ2VOYW1lOiBuZXcgRm9ybUNvbnRyb2wocGFnZU5hbWVbMF0/LnBhZ2VuYW1lKSxcclxuICAgICAgICAgIHBhZ2VpZDogbmV3IEZvcm1Db250cm9sKHBhZ2VzRnJvbUZpZWxkW2ldKSxcclxuICAgICAgICAgIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbChwYWdlQWNjZXNzVmFsdWUgPyBwYWdlQWNjZXNzVmFsdWUgOiAnMicpLFxyXG4gICAgICAgICAgdmFsaWRpdHk6IG5ldyBGb3JtQ29udHJvbCgoZXhpc3RpbmdWYWx1ZVtpXT8udmFsaWRpdHkgJiYgU3RyaW5nKGV4aXN0aW5nVmFsdWVbaV0udmFsaWRpdHkpKSB8fCAnMCcpLFxyXG4gICAgICAgICAgY29uZGl0aW9uOiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LmNvbmRpdGlvbiAmJiBleGlzdGluZ1ZhbHVlW2ldLmNvbmRpdGlvbikgfHwgJ2Fsd2F5cycpLFxyXG4gICAgICAgICAgZmFsbGJhY2tUbzogbmV3IEZvcm1Db250cm9sKChleGlzdGluZ1ZhbHVlW2ldPy5jb25kaXRpb24gJiYgZXhpc3RpbmdWYWx1ZVtpXS5mYWxsYmFja1RvKSB8fCAnbicpXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhY2Nlc3NBcnJheTtcclxuICB9XHJcblxyXG4gIGNoZWNrRmllbGRMZXZlbEV4aXN0KGZpZWxkTGV2ZWxFeGlzdCwgc2F2ZWRQYWdlQWNjZXNzUGF0Y2hpbmcsIHBhZ2VzRnJvbUZpZWxkLCBleGlzdGluZ1ZhbHVlLCBpKSB7XHJcbiAgICBsZXQgcGFnZUFjY2Vzc1ZhbHVlOiBhbnk7XHJcbiAgICBpZiAoZmllbGRMZXZlbEV4aXN0Py5sZW5ndGggJiYgc2F2ZWRQYWdlQWNjZXNzUGF0Y2hpbmcpIHtcclxuICAgICAgcGFnZUFjY2Vzc1ZhbHVlID0gdGhpcy5nZXRNb3N0RnJlcXVlbnRFbGUoXHJcbiAgICAgICAgZmllbGRMZXZlbEV4aXN0Py5maWx0ZXIoZWxlID0+IChlbGUucGFnZUlkID0gcGFnZXNGcm9tRmllbGRbaV0pKT8ubWFwKGUgPT4gKGUuYWNjZXNzID8gTnVtYmVyKGUuYWNjZXNzKSA6IDApKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFnZUFjY2Vzc1ZhbHVlID0gZXhpc3RpbmdWYWx1ZT8uZmluZChlbGUgPT4gZWxlLnBhZ2VpZCA9PT0gcGFnZXNGcm9tRmllbGRbaV0pPy5wYWdlQWNjZXNzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZ2VBY2Nlc3NWYWx1ZTtcclxuICB9XHJcbiAgZ2V0QWNjZXNzKGFjY2Vzcykge1xyXG4gICAgbGV0IGFjY2Vzc0ZpZWxkOiBhbnk7XHJcbiAgICBhY2Nlc3NGaWVsZCA9ICcyJztcclxuICAgIGlmIChhY2Nlc3M/LmlzcmVhZHdyaXRlKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzInO1xyXG4gICAgfSBlbHNlIGlmIChhY2Nlc3M/LmlzaGlkZSkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICc0JztcclxuICAgIH0gZWxzZSBpZiAoYWNjZXNzPy5pc3JlYWQpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMyc7XHJcbiAgICB9IGVsc2UgaWYgKGFjY2Vzcz8uaXNmdWxsKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY2Vzc0ZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JnYW5pemF0aW9uUGFnZShvcmdJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Pcmdhbml6YXRpb24uZ2V0T3JnYW5pemF0aW9uLnJlcGxhY2UoJ3tvcmdJZH0nLCBvcmdJZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXNzZXRCeVBhZ2VJZChwSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0UGFnZUFzc2V0fS8ke3BJZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFzc2V0KHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSwgYXNzZXQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gYG9yZy91c2VyLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9IGBhY2Nlc3MtY29udHJvbC9yb2xlLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYHBsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KGAvJHt1cmx9LyR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldH1gLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBnZXRBc3NldEJ5SWQoc2VsZWN0ZWRBY2Nlc3M6IHN0cmluZywgc2VsZWN0ZWRJZDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldFVzZXJBc3NldDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldFJvbGVBc3NldDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0UG9saWN5R3JvdXBBc3NldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHt1cmx9LyR7c2VsZWN0ZWRJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFBvbGljeUdyb3VwUGFnZShwb2xpY3lncm91cGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgL3BvbGljeWdyb3VwLyR7cG9saWN5Z3JvdXBpZH0ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHluYW1pY1BhZ2Uoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSAnb3JnL3VzZXInO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9ICdhY2Nlc3MtY29udHJvbC9yb2xlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9ICdwbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeWdyb3VwJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgLyR7dXJsfS8ke3NlbGVjdGVkSWR9JHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZX1gKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUR5bmFtaWNQYWdlKHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSwgcGFnZURhdGE6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gJ29yZy91c2VyJztcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSAnYWNjZXNzLWNvbnRyb2wvcm9sZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSAncGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lncm91cCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYC8ke3VybH0vJHtzZWxlY3RlZElkfSR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9YCwgcGFnZURhdGEpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQWNjZXNzKGZpZWxkTGV2ZWxBY2Nlc3M6IGJvb2xlYW4sIGFjY2Vzc0J5OiBzdHJpbmcsIHBheWxvYWQ6IGFueSwgdXNlcklkOiBhbnksIHJvbGVJZDogYW55LCBwb2xpY3lJZDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBjb25zdCBjcmVhdGVVcmwgPSBmaWVsZExldmVsQWNjZXNzXHJcbiAgICAgID8gQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldFxyXG4gICAgICA6IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlO1xyXG4gICAgLy8gY2hlY2sgb25seSBwb2xpY3kgZ3JvdXBcclxuICAgIGlmIChhY2Nlc3NCeSA9PT0gJzMnKSB7XHJcbiAgICAgIHVybCA9IGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUG9saWN5R3JvdXAuZ2V0UG9saWN5R3JvdXB9JHtwb2xpY3lJZCA/IHBvbGljeUlkIDogJzAnfSR7Y3JlYXRlVXJsfWA7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayBwZXJzb25hIHdpdGggcG9saWN5IGdyb3VwXHJcbiAgICBpZiAoYWNjZXNzQnkgPT09ICcyJykge1xyXG4gICAgICB1cmwgPSBgJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlJvbGUuZ2V0Um9sZX0ke3JvbGVJZCA/IHJvbGVJZCA6ICcwJ30ke2NyZWF0ZVVybH1gO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgdXNlciwgcGVyc29uYSB3aXRoIHBvbGljeSBncm91cFxyXG4gICAgaWYgKGFjY2Vzc0J5ID09PSAnMScpIHtcclxuICAgICAgdXJsID0gYCR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Vc2VyLmdldFVzZXJ9JHt1c2VySWQgPyB1c2VySWQgOiAnMCd9JHtjcmVhdGVVcmx9YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QodXJsLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGdldEFwcGxpY2F0aW9uQWNjZXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KCcvYXBwbGljYXRpb25hY2Nlc3MvJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
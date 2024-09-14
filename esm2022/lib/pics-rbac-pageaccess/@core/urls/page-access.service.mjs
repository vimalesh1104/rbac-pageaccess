import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessManagementConfig } from '../../@core/urls/access-management-url.config';
import { DataBaseConfig } from './rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/data-store.service";
export class PageAccessService {
    _storeservice;
    isfull = false;
    hide = false;
    isread = false;
    isreadwrite = false;
    // constructor(private httpService: HttpService) {
    //    // This is intentional
    // }
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
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
            const formObj = { ...selectedData[0] };
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
                hide: this.hide,
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
                const d = { ...pageKey };
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
            this.hide = true;
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
            let hide = false;
            let isread = false;
            let isreadwrite = false;
            if (selectedField.access === '2' || selectedField.access === '1') {
                isfull = true;
            }
            else if (selectedField.access === '4') {
                hide = true;
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
                hide: hide,
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
            const d = { ...aConfigs };
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
        if (updateArray?.length) {
            if (selectedFieldData?.length >= updateArray.length) {
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
        const accessArray = [];
        for (let i = 0; i < pagesFromField?.length; i++) {
            const pageName = pageData.filter(key => key.id === pagesFromField[i]);
            const fieldLevelExist = selectedFieldData.filter(ele => ele.pageId == pagesFromField[i]);
            const pageAccessValue = this.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i);
            if (!existingValue[i]) {
                const activeVersion = pageName[0]?.activeVersion;
                let tableSchemaConfig = activeVersion?.tableschemaconfig;
                tableSchemaConfig = typeof tableSchemaConfig === 'string' ? JSON.parse(tableSchemaConfig) : tableSchemaConfig;
                accessArray.push(new FormGroup({
                    pageName: new FormControl(pageName[0]?.pagename),
                    pageid: new FormControl(pagesFromField[i]),
                    // pageAccess: new FormControl('3'),
                    pageAccessCreate: new FormControl(false),
                    pageAccessRead: new FormControl(true),
                    pageAccessUpdate: new FormControl(false),
                    pageAccessDelete: new FormControl({ value: false, disabled: pageName[0]?.activeVersion?.templatejson }),
                    pageAccessNone: new FormControl(false),
                    validity: new FormControl('0'),
                    condition: new FormControl('always'),
                    fallbackTo: new FormControl('n'),
                    accessdata: new FormControl('all')
                }));
            }
            else {
                accessArray.push(new FormGroup({
                    pageName: new FormControl(pageName[0]?.pagename),
                    pageid: new FormControl(pagesFromField[i]),
                    // pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                    pageAccessCreate: new FormControl(pageAccessValue?.pageAccessCreate || false),
                    pageAccessRead: new FormControl(this.getPageReadAccess(pageAccessValue)),
                    pageAccessUpdate: new FormControl(pageAccessValue?.pageAccessUpdate || false),
                    pageAccessDelete: new FormControl({ value: pageAccessValue?.pageAccessDelete || false, disabled: pageName[0]?.activeVersion?.templatejson }),
                    pageAccessNone: new FormControl(pageAccessValue.pageAccessNone || false),
                    validity: new FormControl((pageAccessValue?.validity && String(pageAccessValue?.validity)) || '0'),
                    condition: new FormControl((pageAccessValue?.condition && pageAccessValue?.condition) || 'always'),
                    fallbackTo: new FormControl((pageAccessValue?.condition && pageAccessValue?.fallbackTo) || 'n'),
                    accessdata: new FormControl(pageAccessValue?.accessData || 'all')
                }));
            }
        }
        return accessArray;
    }
    getPageReadAccess(pageAccessValue) {
        if (pageAccessValue?.pageAccessCreate || pageAccessValue?.pageAccessUpdate || pageAccessValue?.pageAccessDelete) {
            return { value: true, disabled: true };
        }
        else {
            return pageAccessValue.pageAccessRead || false;
        }
    }
    getFieldReadAccess(fieldAccessValue) {
        if ((!fieldAccessValue?.c || !fieldAccessValue?.u || !fieldAccessValue?.r) && !fieldAccessValue?.hide) {
            return true;
        }
        else {
            return fieldAccessValue.r || false;
        }
    }
    getReadFormAccess(pageAccess) {
        if (pageAccess?.c || pageAccess?.u || pageAccess?.d) {
            return { value: true, disabled: true };
        }
        else {
            return pageAccess.r || false;
        }
    }
    checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i) {
        let pageAccessValue;
        if (fieldLevelExist?.length && savedPageAccessPatching) {
            pageAccessValue = this.getMostFrequentEle(fieldLevelExist?.filter(ele => (ele.pageId = pagesFromField[i]))?.map(e => (e.access ? Number(e.access) : 0)));
        }
        else {
            pageAccessValue = existingValue?.find(ele => ele.pageid === pagesFromField[i]);
        }
        return pageAccessValue;
    }
    // This function for field level access
    getAccess(access, fieldPageLevel) {
        let accessField;
        if (fieldPageLevel.length > 0) {
            accessField = {
                'c': access?.c,
                'r': this.getFieldReadAccess(access),
                'u': access?.u,
                'hide': access?.hide
            };
        }
        else {
            accessField = {
                'r': (!access?.hide && !access?.r) ? true : access.r,
                'hide': access?.hide
            };
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
    updateAssetOnDeselect(selectedAccess, selectedId, asset) {
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
        return this.httpService.patch(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAssetDeselect}`, asset);
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
    checkObjectType(schema, table) {
        return this.httpService.get(`${DataBaseConfig.EndPoint.Database.checkObjectType}/${schema}/${table}`);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1hY2Nlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL3BhZ2UtYWNjZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBS25ELE1BQU0sT0FBTyxpQkFBaUI7SUFTUjtJQVJwQixNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2YsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNiLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLGtEQUFrRDtJQUNsRCw0QkFBNEI7SUFDNUIsSUFBSTtJQUNKLFdBQVcsQ0FBTTtJQUNqQixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQ3JFLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN0QixNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUNyRSxNQUFNLE9BQU8sR0FBRztnQkFDZCxFQUFFLEVBQUUsRUFBRTtnQkFDTixXQUFXLEVBQUUsRUFBRTtnQkFDZixlQUFlLEVBQUUsRUFBRTtnQkFDbkIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsWUFBWSxFQUFFLEVBQUU7YUFDakIsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDN0Y7WUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZUFBZSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQy9FLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQix1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELE1BQU0sT0FBTyxHQUFHO1lBQ2QsRUFBRSxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHNCQUFzQixFQUFFLEVBQUU7U0FDM0IsQ0FBQztRQUVGLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLE1BQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzVGO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFFBQVE7UUFDN0UsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXJCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ3pCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzdELE1BQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN6QixPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUMxQixPQUFPLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM1RjtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVE7UUFDM0QsTUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sT0FBTyxHQUFHO2dCQUNkLEVBQUUsRUFBRSxJQUFJO2dCQUNSLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN6QyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQzthQUNoRCxDQUFDO1lBQ0YsMEJBQTBCO1lBQzFCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUMzQixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksT0FBTyxFQUFFO29CQUNYLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNkLFVBQVU7d0JBQ1YsT0FBTyxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNsQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNuQztpQkFDRjtnQkFDRCxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztTQUNGO1FBQ0QsMkJBQTJCO1FBQzNCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzNCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsZUFBZSxDQUFDLFVBQVU7UUFDeEIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjthQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7YUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDRCxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELG1CQUFtQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQ2hGLDRCQUE0QjtRQUM1QixNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUMzRiw4QkFBOEI7UUFDOUIsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLHFDQUFxQztRQUNyQyxpQkFBaUI7WUFDZixNQUFNLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVHLDBDQUEwQztRQUMxQyxLQUFLLE1BQU0sYUFBYSxJQUFJLGlCQUFpQixFQUFFO1lBQzdDLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ2pDLFlBQVk7YUFDYjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNqQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBRXhCLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ2hFLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDZjtpQkFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN2QyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNmO2lCQUFNLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFDRCxNQUFNLFFBQVEsR0FBRztnQkFDZixFQUFFLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3BELFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixPQUFPLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDakMsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLE1BQU0sRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xGLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN6QyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQzthQUNoRCxDQUFDO1lBQ0YsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBQ0QsZUFBZSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU87UUFDNUQsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDZCxVQUFVO29CQUNWLFFBQVEsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1lBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ1osT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQ2hELE9BQU8sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELHdCQUF3QjtRQUN4QixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDcEIsTUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNyQixNQUFNLGFBQWEsR0FBRztnQkFDcEIsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVTthQUMxQixDQUFDO1lBQ0YsMEJBQTBCO1lBQzFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksT0FBTyxFQUFFO29CQUNYLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNkLFVBQVU7d0JBQ1YsYUFBYSxDQUFDLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEQscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDcEQ7UUFDRCwyQkFBMkI7UUFDM0IsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7WUFDaEMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDbkIsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsT0FBTztRQUNuRCx3QkFBd0I7UUFDeEIsTUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSwyQkFBMkI7UUFDM0IsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7WUFDaEMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDbkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0Qsc0JBQXNCO1FBQ3RCLHFEQUFxRDtRQUNyRCxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsS0FBSyxNQUFNLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDOUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLE9BQU8sR0FBRztnQkFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDZCxRQUFRLEVBQUUsS0FBSztnQkFDZixhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3JDLENBQUM7WUFDRixJQUFJLFdBQVcsRUFBRTtnQkFDZixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDZixVQUFVO29CQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRCxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN6QjtZQUNELE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsNEJBQTRCO1FBQzVCLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsTUFBTSxPQUFPLEdBQUc7b0JBQ2QsRUFBRSxFQUFFLElBQUk7b0JBQ1IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsYUFBYSxFQUFFLEtBQUs7b0JBQ3BCLE1BQU0sRUFBRSxNQUFNO29CQUNkLE1BQU0sRUFBRSxNQUFNO29CQUNkLGFBQWEsRUFBRSxJQUFJLElBQUksRUFBRTtpQkFDMUIsQ0FBQztnQkFDRixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQUNELG9CQUFvQixDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsT0FBTztRQUM3RCxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNyQixNQUFNLGFBQWEsR0FBRztnQkFDcEIsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVTthQUMxQixDQUFDO1lBQ0YsMEJBQTBCO1lBQzFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksT0FBTyxFQUFFO29CQUNYLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNkLFVBQVU7d0JBQ1YsYUFBYSxDQUFDLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEQscUJBQXFCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBQ0Qsb0JBQW9CLENBQUMsV0FBVyxFQUFFLGlCQUFpQjtRQUNqRCw0REFBNEQ7UUFDNUQsSUFBSSxXQUFXLEVBQUUsTUFBTSxFQUFFO1lBQ3ZCLElBQUksaUJBQWlCLEVBQUUsTUFBTSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25ELGlCQUFpQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDM0YsT0FBTyxpQkFBaUIsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7Z0JBQ3JDLE9BQU8saUJBQWlCLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUFDRCx1QkFBdUIsQ0FBQyxPQUFjLEVBQUUsV0FBa0I7UUFDeEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sQ0FBQyxHQUFHLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsR0FBRztRQUNwQixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNELHFCQUFxQixDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsYUFBYTtRQUN2RyxNQUFNLFdBQVcsR0FBUSxFQUFFLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQy9DLGVBQWUsRUFDZix1QkFBdUIsRUFDdkIsY0FBYyxFQUNkLGFBQWEsRUFDYixDQUFDLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUM7Z0JBQ2pELElBQUksaUJBQWlCLEdBQUcsYUFBYSxFQUFFLGlCQUFpQixDQUFDO2dCQUN6RCxpQkFBaUIsR0FBRyxPQUFPLGlCQUFpQixLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUcsV0FBVyxDQUFDLElBQUksQ0FDZCxJQUFJLFNBQVMsQ0FBQztvQkFDWixRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztvQkFDaEQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsb0NBQW9DO29CQUNwQyxnQkFBZ0IsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ3hDLGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ3JDLGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDeEMsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxDQUFDO29CQUN2RyxjQUFjLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUN0QyxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDO29CQUM5QixTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO29CQUNwQyxVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDO29CQUNoQyxVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO2lCQUNuQyxDQUFDLENBQ0gsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLFdBQVcsQ0FBQyxJQUFJLENBQ2QsSUFBSSxTQUFTLENBQUM7b0JBQ1osUUFBUSxFQUFFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7b0JBQ2hELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLHdFQUF3RTtvQkFDeEUsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFLGdCQUFnQixJQUFJLEtBQUssQ0FBQztvQkFDN0UsY0FBYyxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDeEUsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFLGdCQUFnQixJQUFJLEtBQUssQ0FBQztvQkFDN0UsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixJQUFJLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsQ0FBQztvQkFDNUksY0FBYyxFQUFFLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDO29CQUN4RSxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxlQUFlLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7b0JBQ2xHLFNBQVMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxTQUFTLElBQUksZUFBZSxFQUFFLFNBQVMsQ0FBQyxJQUFJLFFBQVEsQ0FBQztvQkFDbEcsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsZUFBZSxFQUFFLFNBQVMsSUFBSSxlQUFlLEVBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDO29CQUMvRixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFLFVBQVUsSUFBSSxLQUFLLENBQUM7aUJBQ2xFLENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxlQUFlO1FBQy9CLElBQUksZUFBZSxFQUFFLGdCQUFnQixJQUFJLGVBQWUsRUFBRSxnQkFBZ0IsSUFBSSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7WUFDL0csT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3hDO2FBQ0k7WUFDSCxPQUFPLGVBQWUsQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLGdCQUFnQjtRQUNqQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRTtZQUNyRyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQ0k7WUFDSCxPQUFPLGdCQUFnQixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsVUFBVTtRQUMxQixJQUFJLFVBQVUsRUFBRSxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxFQUFFO1lBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN4QzthQUNJO1lBQ0gsT0FBTyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxDQUFDO1FBQzdGLElBQUksZUFBb0IsQ0FBQztRQUN6QixJQUFJLGVBQWUsRUFBRSxNQUFNLElBQUksdUJBQXVCLEVBQUU7WUFDdEQsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FDdkMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUcsQ0FBQztTQUNIO2FBQU07WUFDTCxlQUFlLEdBQUcsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsdUNBQXVDO0lBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsY0FBYztRQUM5QixJQUFJLFdBQWdCLENBQUM7UUFDckIsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixXQUFXLEdBQUc7Z0JBQ1osR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNkLEdBQUcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO2FBQ3JCLENBQUE7U0FDRjthQUNJO1lBQ0gsV0FBVyxHQUFHO2dCQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJO2FBQ3JCLENBQUE7U0FDRjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFRO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxXQUFXLENBQUMsY0FBbUIsRUFBRSxVQUFlLEVBQUUsS0FBVTtRQUMxRCxJQUFJLEdBQVEsQ0FBQztRQUNiLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUM3QixHQUFHLEdBQUcsWUFBWSxVQUFVLEVBQUUsQ0FBQztTQUNoQzthQUFNLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUNwQyxHQUFHLEdBQUcsdUJBQXVCLFVBQVUsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTCxHQUFHLEdBQUcsc0NBQXNDLFVBQVUsRUFBRSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxjQUFtQixFQUFFLFVBQWUsRUFBRSxLQUFVO1FBQ3BFLElBQUksR0FBUSxDQUFDO1FBQ2IsSUFBSSxjQUFjLEtBQUssTUFBTSxFQUFFO1lBQzdCLEdBQUcsR0FBRyxZQUFZLFVBQVUsRUFBRSxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxjQUFjLEtBQUssTUFBTSxFQUFFO1lBQ3BDLEdBQUcsR0FBRyx1QkFBdUIsVUFBVSxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNMLEdBQUcsR0FBRyxzQ0FBc0MsVUFBVSxFQUFFLENBQUM7U0FDMUQ7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsWUFBWSxDQUFDLGNBQXNCLEVBQUUsVUFBZTtRQUNsRCxJQUFJLEdBQVEsQ0FBQztRQUNiLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUM3QixHQUFHLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDMUQ7YUFBTSxJQUFJLGNBQWMsS0FBSyxNQUFNLEVBQUU7WUFDcEMsR0FBRyxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQzFEO2FBQU07WUFDTCxHQUFHLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztTQUNqRTtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsYUFBa0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsYUFBYSxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRUQsY0FBYyxDQUFDLGNBQW1CLEVBQUUsVUFBZTtRQUNqRCxJQUFJLEdBQVEsQ0FBQztRQUNiLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRTtZQUM3QixHQUFHLEdBQUcsVUFBVSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxjQUFjLEtBQUssTUFBTSxFQUFFO1lBQ3BDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztTQUM3QjthQUFNO1lBQ0wsR0FBRyxHQUFHLG9DQUFvQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFVLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxjQUFtQixFQUFFLFVBQWUsRUFBRSxRQUFhO1FBQ25FLElBQUksR0FBUSxDQUFDO1FBQ2IsSUFBSSxjQUFjLEtBQUssTUFBTSxFQUFFO1lBQzdCLEdBQUcsR0FBRyxVQUFVLENBQUM7U0FDbEI7YUFBTSxJQUFJLGNBQWMsS0FBSyxNQUFNLEVBQUU7WUFDcEMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO1NBQzdCO2FBQU07WUFDTCxHQUFHLEdBQUcsb0NBQW9DLENBQUM7U0FDNUM7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFFRCxZQUFZLENBQUMsZ0JBQXlCLEVBQUUsUUFBZ0IsRUFBRSxPQUFZLEVBQUUsTUFBVyxFQUFFLE1BQVcsRUFBRSxRQUFhO1FBQzdHLElBQUksR0FBUSxDQUFDO1FBQ2IsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCO1lBQ2hDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDaEQsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2pELDBCQUEwQjtRQUMxQixJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUU7WUFDcEIsR0FBRyxHQUFHLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQztTQUMvRztRQUNELGtDQUFrQztRQUNsQyxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUU7WUFDcEIsR0FBRyxHQUFHLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQztTQUM3RjtRQUNELHdDQUF3QztRQUN4QyxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUU7WUFDcEIsR0FBRyxHQUFHLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsQ0FBQztTQUM3RjtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFDM0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN2RyxDQUFDO3dHQXJsQlUsaUJBQWlCOzRHQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB9IGZyb20gJy4uLy4uL0Bjb3JlL3VybHMvYWNjZXNzLW1hbmFnZW1lbnQtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFCYXNlQ29uZmlnIH0gZnJvbSAnLi9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUFjY2Vzc1NlcnZpY2Uge1xyXG4gIGlzZnVsbCA9IGZhbHNlO1xyXG4gIGhpZGUgPSBmYWxzZTtcclxuICBpc3JlYWQgPSBmYWxzZTtcclxuICBpc3JlYWR3cml0ZSA9IGZhbHNlO1xyXG4gIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7XHJcbiAgLy8gICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbFxyXG4gIC8vIH1cclxuICBodHRwU2VydmljZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlID0gcmVzWydIVFRQU0VSVklDRSddXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHdoZW4gdXNlciBzZWxlY3RlZCBwb2xpY3lcclxuICAgKiBAcGFyYW0gYWNjZXNzIFJhdyB2YWx1ciBvZiBSQmFjIGZvcm1cclxuICAgKiBAcmV0dXJucyBmb3JtIGFycmF5IG9mIERBXHJcbiAgICogQGNoaWxkRnVuY3Rpb24gb2Ygc2F2ZVJiYWNcclxuICAgKi9cclxuICBhY2Nlc3NCeVBvbGljeShhY2Nlc3MsIGlkLCBwb2xpY3lHcm91cERhdGEsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSk6IGFueVtdIHtcclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBpZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGEgPSBwb2xpY3lHcm91cERhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IHZhbHVlKTtcclxuICAgICAgY29uc3QgZm9ybU9iaiA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHBvbGljeWdyb3VwbmFtZTogJycsXHJcbiAgICAgICAgcGFnZUNvbmZpZ3M6IFtdLFxyXG4gICAgICAgIGFzc2V0Q29uZmlnczogW11cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zZXRQb2xpY3lPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvclBhZ2UoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIHZhbHVlLCBwYWdlRGF0YSk7XHJcbiAgICAgIGlmIChhY2Nlc3MuZmllbGRMZXZlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCB2YWx1ZSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBmdWxsQXJyYXkucHVzaChmb3JtT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVsbEFycmF5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogd2hlbiB1c2VyIHNlbGVjdGVkIFBlcnNvbmFcclxuICAgKiBAcGFyYW0gYWNjZXNzIFJhdyB2YWx1ciBvZiBSQmFjIGZvcm1cclxuICAgKiBAcmV0dXJucyBmb3JtIGFycmF5IG9mIERBXHJcbiAgICogQGNoaWxkRnVuY3Rpb24gb2Ygc2F2ZVJiYWNcclxuICAgKi9cclxuICBhY2Nlc3NCeVBlcnNvbmEoYWNjZXNzLCBwZXJzb25hSWQsIGlkLCByb2xlQWRkZWREYXRhLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpIHtcclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IFtdO1xyXG4gICAgLy8gY29uc3QgcGVyc29uYUlkID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVpZCcpLnZhbHVlO1xyXG4gICAgLy8gY29uc3QgcGVyc29uYUlkID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVpZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgZm9ybU9iaiA9IHtcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgICByb2xla2V5OiAnJyxcclxuICAgICAgcm9sZW5hbWU6ICcnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIGVmZmVjdGl2ZWRhdGU6ICcnLFxyXG4gICAgICBwYWdlQ29uZmlnczogW10sXHJcbiAgICAgIGFzc2V0Q29uZmlnczogW10sXHJcbiAgICAgIHJvbGVQb2xpY3lHcm91cENvbmZpZ3M6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwZXJzb25hSWQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gcm9sZUFkZGVkRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gaXRlbSk7XHJcbiAgICAgIHRoaXMuc2V0Um9sZU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIGl0ZW0sIGlkKTtcclxuICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaXRlbSwgcGFnZURhdGEpO1xyXG4gICAgICBpZiAoYWNjZXNzLmZpZWxkTGV2ZWxEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvckZpZWxkcyhhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaXRlbSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTtcclxuICAgICAgfVxyXG4gICAgICBmdWxsQXJyYXkucHVzaChmb3JtT2JqKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdWxsQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB3aGVuIHVzZXIgc2VsZWN0ZWQgVXNlclxyXG4gICAqIEBwYXJhbSBhY2Nlc3MgUmF3IHZhbHVyIG9mIFJCYWMgZm9ybVxyXG4gICAqIEByZXR1cm5zIGZvcm0gYXJyYXkgb2YgREFcclxuICAgKiBAY2hpbGRGdW5jdGlvbiBvZiBzYXZlUmJhY1xyXG4gICAqL1xyXG4gIGFjY2Vzc0J5VXNlcihhY2Nlc3MsIHVzZXJJZCwgaWQsIHJvbGVpZHMsIHVzZXJMaXN0LCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpIHtcclxuICAgIGNvbnN0IGZ1bGxBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB1c2VySWQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gdXNlckxpc3QuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGl0ZW0pO1xyXG4gICAgICBjb25zdCBmb3JtT2JqID0geyAuLi5zZWxlY3RlZERhdGFbMF0gfTtcclxuICAgICAgZm9ybU9iai5wYWdlQ29uZmlncyA9IFtdO1xyXG4gICAgICBmb3JtT2JqLmFzc2V0Q29uZmlncyA9IFtdO1xyXG4gICAgICBmb3JtT2JqLnBvbGljeUdyb3VwQ29uZmlncyA9IFtdO1xyXG4gICAgICBmb3JtT2JqLnJvbGVDb25maWdzID0gW107XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0nKTtcclxuICAgICAgdGhpcy5zZXRVc2VyT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgaXRlbSwgaWQsIHJvbGVpZHMpO1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09PT09MScpO1xyXG4gICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBwYWdlRGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0yJyk7XHJcbiAgICAgIGlmIChhY2Nlc3MuZmllbGRMZXZlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBcnJheS5wdXNoKGZvcm1PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdWxsQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhY2Nlc3MgbGlzdCBmb3IgZGFzaGJvYXJkIGFjY2Vzc1xyXG4gICAqIEBwYXJhbSBhY2Nlc3NcclxuICAgKiBAcGFyYW0gYXNzZXREYXNoQm9hcmRDb25maWdzXHJcbiAgICogQHBhcmFtIGZvcm1PYmpcclxuICAgKiBAcGFyYW0gaWRcclxuICAgKi9cclxuICBsb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaWQsIHBhZ2VEYXRhKSB7XHJcbiAgICBjb25zdCBleGlzdFBhZ2VDb25maWdzID0gc2VsZWN0ZWREYXRhWzBdWydwYWdlQ29uZmlncyddO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFjY2Vzcy5wYWdlTGV2ZWxEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTW9kdWxlID0gcGFnZURhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGl0ZW1bJ3BhZ2VpZCddKTtcclxuICAgICAgY29uc3QgcGFnZUFjY2VzcyA9IGFjY2Vzcy5wYWdlTGV2ZWxEYXRhLmZpbHRlcihrZXkgPT4ga2V5LnBhZ2VpZCA9PT0gaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICB0aGlzLnBhZ2VBY2Nlc3NDaGVjayhwYWdlQWNjZXNzKTtcclxuICAgICAgY29uc3QgcGFnZUtleSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBpc2Z1bGw6IHRoaXMuaXNmdWxsLFxyXG4gICAgICAgIGhpZGU6IHRoaXMuaGlkZSxcclxuICAgICAgICBpc3JlYWQ6IHRoaXMuaXNyZWFkLFxyXG4gICAgICAgIGlzcmVhZHdyaXRlOiB0aGlzLmlzcmVhZHdyaXRlLFxyXG4gICAgICAgIHBhZ2VpZDogaXRlbVsncGFnZWlkJ10sXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaWQsXHJcbiAgICAgICAgbW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnbW9kdWxla2V5J10sXHJcbiAgICAgICAgc3VibW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnc3VibW9kdWxla2V5J11cclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgaWYgKGV4aXN0UGFnZUNvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RJZHMgPSBleGlzdFBhZ2VDb25maWdzLm1hcChwID0+IHAucGFnZWlkKTtcclxuICAgICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICAgIGlmIChjaGtQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2YoaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgICBwYWdlS2V5LmlkID0gZXhpc3RQYWdlQ29uZmlnc1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICAgIHBhZ2VLZXkuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKHBhZ2VLZXkpO1xyXG4gICAgICAgICAgICBleGlzdFBhZ2VDb25maWdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGQgPSB7IC4uLnBhZ2VLZXkgfTtcclxuICAgICAgICBkLmlkID0gbnVsbDtcclxuICAgICAgICBkLmlzYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2goZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKHBhZ2VLZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzdGlsbCBleGlzdGNvbmZpZyBsZW5ndGhcclxuICAgIGlmIChleGlzdFBhZ2VDb25maWdzLmxlbmd0aCkge1xyXG4gICAgICBleGlzdFBhZ2VDb25maWdzLm1hcCh0ID0+IHtcclxuICAgICAgICB0LmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcGFnZUFjY2Vzc0NoZWNrKHBhZ2VBY2Nlc3MpIHtcclxuICAgIGlmIChwYWdlQWNjZXNzWzBdLnBhZ2VBY2Nlc3MgPT09ICcxJykge1xyXG4gICAgICB0aGlzLmlzZnVsbCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzQnKSB7XHJcbiAgICAgIHRoaXMuaGlkZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzMnKSB7XHJcbiAgICAgIHRoaXMuaXNyZWFkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnMicpIHtcclxuICAgICAgdGhpcy5pc3JlYWR3cml0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFBvbGljeU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIGlkKSB7XHJcbiAgICBmb3JtT2JqLmlkID0gaWQ7XHJcbiAgICBmb3JtT2JqLmRlc2NyaXB0aW9uID0gc2VsZWN0ZWREYXRhWzBdWydkZXNjcmlwdGlvbiddO1xyXG4gICAgZm9ybU9iai5wb2xpY3lncm91cG5hbWUgPSBzZWxlY3RlZERhdGFbMF1bJ3BvbGljeWdyb3VwbmFtZSddO1xyXG4gIH1cclxuXHJcbiAgbG9hZEFjY2Vzc0ZvckZpZWxkcyhhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgaWQsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWREYXRhKVxyXG4gICAgY29uc3QgYXNzZXRDb25maWdzID0gc2VsZWN0ZWREYXRhWzBdWydhc3NldENvbmZpZ3MnXS5maWx0ZXIoa2V5ID0+IGtleS5tb2R1bGVrZXkgIT09IG51bGwpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLScpXHJcbiAgICBjb25zdCBzZWxlY3RlZE1vZHVsZSA9IHBhZ2VEYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBhY2Nlc3MuZnBhZ2VzWzBdWydpZCddKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjY2Vzcy5maWVsZExldmVsRGF0YSlcclxuICAgIHNlbGVjdGVkRmllbGREYXRhID1cclxuICAgICAgYWNjZXNzLmZpZWxkTGV2ZWxEYXRhICE9PSBudWxsID8gdGhpcy5zZXRTZWxlY3RlZEZpZWxkUGFnZShhY2Nlc3MuZmllbGRMZXZlbERhdGEsIHNlbGVjdGVkRmllbGREYXRhKSA6IFtdO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWREYXRhLCBhc3NldENvbmZpZ3MpXHJcbiAgICBmb3IgKGNvbnN0IHNlbGVjdGVkRmllbGQgb2Ygc2VsZWN0ZWRGaWVsZERhdGEpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRGaWVsZCk7XHJcbiAgICAgIGxldCBpc2Z1bGwgPSBmYWxzZTtcclxuICAgICAgbGV0IGhpZGUgPSBmYWxzZTtcclxuICAgICAgbGV0IGlzcmVhZCA9IGZhbHNlO1xyXG4gICAgICBsZXQgaXNyZWFkd3JpdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzInIHx8IHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnMScpIHtcclxuICAgICAgICBpc2Z1bGwgPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRmllbGQuYWNjZXNzID09PSAnNCcpIHtcclxuICAgICAgICBoaWRlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzMnKSB7XHJcbiAgICAgICAgaXNyZWFkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzInKSB7XHJcbiAgICAgICAgaXNyZWFkd3JpdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFDb25maWdzID0ge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZEZpZWxkWydpZCddID8gc2VsZWN0ZWRGaWVsZFsnaWQnXSA6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgaXNmdWxsOiBpc2Z1bGwsXHJcbiAgICAgICAgaGlkZTogaGlkZSxcclxuICAgICAgICBpc3JlYWQ6IGlzcmVhZCxcclxuICAgICAgICBpc3JlYWR3cml0ZTogaXNyZWFkd3JpdGUsXHJcbiAgICAgICAgYXNzZXRpZDogc2VsZWN0ZWRGaWVsZFsnYXNzZXRpZCddLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGlkLFxyXG4gICAgICAgIHBhZ2VpZDogc2VsZWN0ZWRGaWVsZFsncGFnZUlkJ10gPyBzZWxlY3RlZEZpZWxkWydwYWdlSWQnXSA6IGFjY2Vzcy5mcGFnZXNbMF1bJ2lkJ10sXHJcbiAgICAgICAgbW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnbW9kdWxla2V5J10sXHJcbiAgICAgICAgc3VibW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnc3VibW9kdWxla2V5J11cclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgdGhpcy5jaGVja0V4aXN0QXNzZXQoYXNzZXRDb25maWdzLCBzZWxlY3RlZEZpZWxkLCBhQ29uZmlncywgZm9ybU9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoZWNrRXhpc3RBc3NldChhc3NldENvbmZpZ3MsIHNlbGVjdGVkRmllbGQsIGFDb25maWdzLCBmb3JtT2JqKSB7XHJcbiAgICBpZiAoYXNzZXRDb25maWdzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBleGlzdElkcyA9IGFzc2V0Q29uZmlncy5tYXAocCA9PiBwLmFzc2V0aWQpO1xyXG4gICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoc2VsZWN0ZWRGaWVsZFsnYXNzZXRpZCddKTtcclxuICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2Yoc2VsZWN0ZWRGaWVsZFsnYXNzZXRpZCddKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgYUNvbmZpZ3MuaWQgPSBhc3NldENvbmZpZ3NbaW5kZXhdWydpZCddO1xyXG4gICAgICAgICAgYUNvbmZpZ3MuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzLnB1c2goYUNvbmZpZ3MpO1xyXG4gICAgICAgICAgYXNzZXRDb25maWdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGQgPSB7IC4uLmFDb25maWdzIH07XHJcbiAgICAgIGQuaXNhY3RpdmUgPSB0cnVlO1xyXG4gICAgICBkLmlkID0gbnVsbDtcclxuICAgICAgZm9ybU9iai5hc3NldENvbmZpZ3MucHVzaChkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzLnB1c2goYUNvbmZpZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Um9sZU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIHJvbGVpZCwgcG9saWN5aWQpIHtcclxuICAgIGZvcm1PYmouaWQgPSByb2xlaWQ7XHJcbiAgICBmb3JtT2JqLnJvbGVrZXkgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVrZXknXTtcclxuICAgIGZvcm1PYmoucm9sZW5hbWUgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVuYW1lJ107XHJcbiAgICBmb3JtT2JqLmVmZmVjdGl2ZWRhdGUgPSBzZWxlY3RlZERhdGFbMF1bJ2VmZmVjdGl2ZWRhdGUnXTtcclxuICAgIGZvcm1PYmouZGVzY3JpcHRpb24gPSBzZWxlY3RlZERhdGFbMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAvLyBsb29wIHRoZSBwb2xpY3kgZ3JvdXBcclxuICAgIGNvbnN0IGlkID0gcG9saWN5aWQ7XHJcbiAgICBjb25zdCBleGlzdFJvbGVQb2xpY3lDb25maWcgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVQb2xpY3lHcm91cENvbmZpZ3MnXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpZCkge1xyXG4gICAgICBjb25zdCBycG9saWN5Q29uZmlnID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIHBvbGljeWdyb3VwaWQ6IGl0ZW0sIC8vIGdyb3VwIHBvbGljeSBpZFxyXG4gICAgICAgIHJvbGVpZDogcm9sZWlkIC8vIHJvbGUgaWRcclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgaWYgKGV4aXN0Um9sZVBvbGljeUNvbmZpZy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBleGlzdElkcyA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZy5tYXAocCA9PiBwLnBvbGljeWdyb3VwaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoa1BhZ2UgPSBleGlzdElkcy5pbmNsdWRlcyhpdGVtKTtcclxuICAgICAgICBpZiAoY2hrUGFnZSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBleGlzdElkcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgICBycG9saWN5Q29uZmlnLmlkID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgICAgZXhpc3RSb2xlUG9saWN5Q29uZmlnLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvcm1PYmoucm9sZVBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHJwb2xpY3lDb25maWcpO1xyXG4gICAgfVxyXG4gICAgLy8gc3RpbGwgZXhpc3Rjb25maWcgbGVuZ3RoXHJcbiAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHQgPT4ge1xyXG4gICAgICAgIHQuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtT2JqLnJvbGVQb2xpY3lHcm91cENvbmZpZ3MucHVzaCh0KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgdXNlcklkLCBpZCwgcm9sZWlkcykge1xyXG4gICAgLy8gbG9vcCB0aGUgcG9saWN5IGdyb3VwXHJcbiAgICBjb25zdCBleGlzdFJvbGVQb2xpY3lDb25maWcgPSBzZWxlY3RlZERhdGFbMF1bJ3BvbGljeUdyb3VwQ29uZmlncyddO1xyXG4gICAgdGhpcy5nZXRDaGVja1BvbGljeUNvbmZpZyhpZCwgdXNlcklkLCBleGlzdFJvbGVQb2xpY3lDb25maWcsIGZvcm1PYmopO1xyXG4gICAgLy8gc3RpbGwgZXhpc3Rjb25maWcgbGVuZ3RoXHJcbiAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHQgPT4ge1xyXG4gICAgICAgIHQuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3JtT2JqLnBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGxvb3AgdGhlIHJvbGUgZ3JvdXBcclxuICAgIC8vIGNvbnN0IHJvbGVpZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZWlkJykudmFsdWU7XHJcbiAgICBjb25zdCBleGlzdFJvbGVJZCA9IHNlbGVjdGVkRGF0YVswXVsncm9sZUNvbmZpZ3MnXTtcclxuICAgIGZvciAoY29uc3Qgcm9sZSBvZiBleGlzdFJvbGVJZCkge1xyXG4gICAgICBjb25zdCBjaGtSb2xlRGF0YSA9IHJvbGVpZHMuaW5jbHVkZXMocm9sZVsncm9sZWlkJ10pO1xyXG4gICAgICBjb25zdCByb2xlR3JwID0ge1xyXG4gICAgICAgIGlkOiByb2xlWydpZCddLFxyXG4gICAgICAgIGlzYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc2RlZmF1bHRyb2xlOiByb2xlWydpc2RlZmF1bHRyb2xlJ10sXHJcbiAgICAgICAgdXNlcmlkOiB1c2VySWQsXHJcbiAgICAgICAgcm9sZWlkOiByb2xlWydyb2xlaWQnXSxcclxuICAgICAgICBlZmZlY3RpdmVkYXRlOiByb2xlWydlZmZlY3RpdmVkYXRlJ11cclxuICAgICAgfTtcclxuICAgICAgaWYgKGNoa1JvbGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXgxID0gcm9sZWlkcy5pbmRleE9mKHJvbGVbJ3JvbGVpZCddKTtcclxuICAgICAgICBpZiAoaW5kZXgxID4gLTEpIHtcclxuICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgIHJvbGVpZHMuc3BsaWNlKGluZGV4MSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvbGVHcnAuaXNhY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1PYmoucm9sZUNvbmZpZ3MucHVzaChyb2xlR3JwKTtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIG5ldyByb2xlcyBncm91cCBpZHNcclxuICAgIGlmIChyb2xlaWRzLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGNvbnN0IHJvbGVJZCBvZiByb2xlaWRzKSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZUdycCA9IHtcclxuICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBpc2RlZmF1bHRyb2xlOiBmYWxzZSxcclxuICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxyXG4gICAgICAgICAgcm9sZWlkOiByb2xlSWQsXHJcbiAgICAgICAgICBlZmZlY3RpdmVkYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3JtT2JqLnJvbGVDb25maWdzLnB1c2gocm9sZUdycCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0Q2hlY2tQb2xpY3lDb25maWcoaWQsIHVzZXJJZCwgZXhpc3RSb2xlUG9saWN5Q29uZmlnLCBmb3JtT2JqKSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaWQpIHtcclxuICAgICAgY29uc3QgcnBvbGljeUNvbmZpZyA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBwb2xpY3lncm91cGlkOiBpdGVtLCAvLyBncm91cCBwb2xpY3kgaWRcclxuICAgICAgICB1c2VyaWQ6IHVzZXJJZCAvLyB1c2VyIGlkXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGNoZWNrIGV4aXN0IHBhZ2UgbGVuZ3RoXHJcbiAgICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RJZHMgPSBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHAgPT4gcC5wb2xpY3lncm91cGlkKTtcclxuICAgICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgICAgcnBvbGljeUNvbmZpZy5pZCA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZ1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3JtT2JqLnBvbGljeUdyb3VwQ29uZmlncy5wdXNoKHJwb2xpY3lDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRTZWxlY3RlZEZpZWxkUGFnZSh1cGRhdGVBcnJheSwgc2VsZWN0ZWRGaWVsZERhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PT0+JywgdXBkYXRlQXJyYXksIHNlbGVjdGVkRmllbGREYXRhKVxyXG4gICAgaWYgKHVwZGF0ZUFycmF5Py5sZW5ndGgpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkRmllbGREYXRhPy5sZW5ndGggPj0gdXBkYXRlQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRGaWVsZERhdGEgPSB0aGlzLnVwZGF0ZUR1cGxpY2F0ZXNpbkFycmF5KFsuLi5zZWxlY3RlZEZpZWxkRGF0YV0sIFsuLi51cGRhdGVBcnJheV0pO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEZpZWxkRGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxlY3RlZEZpZWxkRGF0YSA9IFsuLi51cGRhdGVBcnJheV07XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkRmllbGREYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZUR1cGxpY2F0ZXNpbkFycmF5KG9yaWdBcnI6IGFueVtdLCB1cGRhdGluZ0FycjogYW55W10pOiBhbnlbXSB7XHJcbiAgICBjb25zdCB1cGRhdGluZ0FycmlkcyA9IG5ldyBTZXQodXBkYXRpbmdBcnIubWFwKGVsZSA9PiBlbGUuYXNzZXRpZCkpO1xyXG4gICAgcmV0dXJuIFsuLi51cGRhdGluZ0FyciwgLi4ub3JpZ0Fyci5maWx0ZXIoZWxlID0+ICF1cGRhdGluZ0Fycmlkcy5oYXMoZWxlLmFzc2V0aWQpKV07XHJcbiAgfVxyXG4gIGdldE1vc3RGcmVxdWVudEVsZShhcnIpIHtcclxuICAgIGNvbnN0IGhhc2hNYXAgPSBhcnIucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xyXG4gICAgICBhY2NbU3RyaW5nKHZhbCldID0gKGFjY1t2YWxdIHx8IDApICsgMTtcclxuICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNoTWFwKS5yZWR1Y2UoKGEsIGIpID0+IChoYXNoTWFwW2FdID4gaGFzaE1hcFtiXSA/IGEgOiBiKSk7XHJcbiAgfVxyXG4gIGdldEFjY2Vzc0FycmF5T25DbGljayhwYWdlc0Zyb21GaWVsZCwgcGFnZURhdGEsIHNlbGVjdGVkRmllbGREYXRhLCBzYXZlZFBhZ2VBY2Nlc3NQYXRjaGluZywgZXhpc3RpbmdWYWx1ZSkge1xyXG4gICAgY29uc3QgYWNjZXNzQXJyYXk6IGFueSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlc0Zyb21GaWVsZD8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcGFnZU5hbWUgPSBwYWdlRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gcGFnZXNGcm9tRmllbGRbaV0pO1xyXG4gICAgICBjb25zdCBmaWVsZExldmVsRXhpc3QgPSBzZWxlY3RlZEZpZWxkRGF0YS5maWx0ZXIoZWxlID0+IGVsZS5wYWdlSWQgPT0gcGFnZXNGcm9tRmllbGRbaV0pO1xyXG4gICAgICBjb25zdCBwYWdlQWNjZXNzVmFsdWUgPSB0aGlzLmNoZWNrRmllbGRMZXZlbEV4aXN0KFxyXG4gICAgICAgIGZpZWxkTGV2ZWxFeGlzdCxcclxuICAgICAgICBzYXZlZFBhZ2VBY2Nlc3NQYXRjaGluZyxcclxuICAgICAgICBwYWdlc0Zyb21GaWVsZCxcclxuICAgICAgICBleGlzdGluZ1ZhbHVlLFxyXG4gICAgICAgIGlcclxuICAgICAgKTtcclxuICAgICAgaWYgKCFleGlzdGluZ1ZhbHVlW2ldKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IHBhZ2VOYW1lWzBdPy5hY3RpdmVWZXJzaW9uO1xyXG4gICAgICAgIGxldCB0YWJsZVNjaGVtYUNvbmZpZyA9IGFjdGl2ZVZlcnNpb24/LnRhYmxlc2NoZW1hY29uZmlnO1xyXG4gICAgICAgIHRhYmxlU2NoZW1hQ29uZmlnID0gdHlwZW9mIHRhYmxlU2NoZW1hQ29uZmlnID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UodGFibGVTY2hlbWFDb25maWcpIDogdGFibGVTY2hlbWFDb25maWc7XHJcbiAgICAgICAgICBhY2Nlc3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICBwYWdlTmFtZTogbmV3IEZvcm1Db250cm9sKHBhZ2VOYW1lWzBdPy5wYWdlbmFtZSksXHJcbiAgICAgICAgICAgICAgcGFnZWlkOiBuZXcgRm9ybUNvbnRyb2wocGFnZXNGcm9tRmllbGRbaV0pLFxyXG4gICAgICAgICAgICAgIC8vIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbCgnMycpLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3NDcmVhdGU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcbiAgICAgICAgICAgICAgcGFnZUFjY2Vzc1JlYWQ6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuICAgICAgICAgICAgICBwYWdlQWNjZXNzVXBkYXRlOiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG4gICAgICAgICAgICAgIHBhZ2VBY2Nlc3NEZWxldGU6IG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiBmYWxzZSwgZGlzYWJsZWQ6IHBhZ2VOYW1lWzBdPy5hY3RpdmVWZXJzaW9uPy50ZW1wbGF0ZWpzb24gfSksXHJcbiAgICAgICAgICAgICAgcGFnZUFjY2Vzc05vbmU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcbiAgICAgICAgICAgICAgdmFsaWRpdHk6IG5ldyBGb3JtQ29udHJvbCgnMCcpLFxyXG4gICAgICAgICAgICAgIGNvbmRpdGlvbjogbmV3IEZvcm1Db250cm9sKCdhbHdheXMnKSxcclxuICAgICAgICAgICAgICBmYWxsYmFja1RvOiBuZXcgRm9ybUNvbnRyb2woJ24nKSxcclxuICAgICAgICAgICAgICBhY2Nlc3NkYXRhOiBuZXcgRm9ybUNvbnRyb2woJ2FsbCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjY2Vzc0FycmF5LnB1c2goXHJcbiAgICAgICAgICBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgcGFnZU5hbWU6IG5ldyBGb3JtQ29udHJvbChwYWdlTmFtZVswXT8ucGFnZW5hbWUpLFxyXG4gICAgICAgICAgICBwYWdlaWQ6IG5ldyBGb3JtQ29udHJvbChwYWdlc0Zyb21GaWVsZFtpXSksXHJcbiAgICAgICAgICAgIC8vIHBhZ2VBY2Nlc3M6IG5ldyBGb3JtQ29udHJvbChwYWdlQWNjZXNzVmFsdWUgPyBwYWdlQWNjZXNzVmFsdWUgOiAnMicpLFxyXG4gICAgICAgICAgICBwYWdlQWNjZXNzQ3JlYXRlOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlPy5wYWdlQWNjZXNzQ3JlYXRlIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgcGFnZUFjY2Vzc1JlYWQ6IG5ldyBGb3JtQ29udHJvbCh0aGlzLmdldFBhZ2VSZWFkQWNjZXNzKHBhZ2VBY2Nlc3NWYWx1ZSkpLFxyXG4gICAgICAgICAgICBwYWdlQWNjZXNzVXBkYXRlOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlPy5wYWdlQWNjZXNzVXBkYXRlIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgcGFnZUFjY2Vzc0RlbGV0ZTogbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IHBhZ2VBY2Nlc3NWYWx1ZT8ucGFnZUFjY2Vzc0RlbGV0ZSB8fCBmYWxzZSwgZGlzYWJsZWQ6IHBhZ2VOYW1lWzBdPy5hY3RpdmVWZXJzaW9uPy50ZW1wbGF0ZWpzb24gfSksXHJcbiAgICAgICAgICAgIHBhZ2VBY2Nlc3NOb25lOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlLnBhZ2VBY2Nlc3NOb25lIHx8IGZhbHNlKSxcclxuICAgICAgICAgICAgdmFsaWRpdHk6IG5ldyBGb3JtQ29udHJvbCgocGFnZUFjY2Vzc1ZhbHVlPy52YWxpZGl0eSAmJiBTdHJpbmcocGFnZUFjY2Vzc1ZhbHVlPy52YWxpZGl0eSkpIHx8ICcwJyksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogbmV3IEZvcm1Db250cm9sKChwYWdlQWNjZXNzVmFsdWU/LmNvbmRpdGlvbiAmJiBwYWdlQWNjZXNzVmFsdWU/LmNvbmRpdGlvbikgfHwgJ2Fsd2F5cycpLFxyXG4gICAgICAgICAgICBmYWxsYmFja1RvOiBuZXcgRm9ybUNvbnRyb2woKHBhZ2VBY2Nlc3NWYWx1ZT8uY29uZGl0aW9uICYmIHBhZ2VBY2Nlc3NWYWx1ZT8uZmFsbGJhY2tUbykgfHwgJ24nKSxcclxuICAgICAgICAgICAgYWNjZXNzZGF0YTogbmV3IEZvcm1Db250cm9sKHBhZ2VBY2Nlc3NWYWx1ZT8uYWNjZXNzRGF0YSB8fCAnYWxsJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY2Vzc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVJlYWRBY2Nlc3MocGFnZUFjY2Vzc1ZhbHVlKSB7XHJcbiAgICBpZiAocGFnZUFjY2Vzc1ZhbHVlPy5wYWdlQWNjZXNzQ3JlYXRlIHx8IHBhZ2VBY2Nlc3NWYWx1ZT8ucGFnZUFjY2Vzc1VwZGF0ZSB8fCBwYWdlQWNjZXNzVmFsdWU/LnBhZ2VBY2Nlc3NEZWxldGUpIHtcclxuICAgICAgcmV0dXJuIHsgdmFsdWU6IHRydWUsIGRpc2FibGVkOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBhZ2VBY2Nlc3NWYWx1ZS5wYWdlQWNjZXNzUmVhZCB8fCBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZpZWxkUmVhZEFjY2VzcyhmaWVsZEFjY2Vzc1ZhbHVlKSB7XHJcbiAgICBpZiAoKCFmaWVsZEFjY2Vzc1ZhbHVlPy5jIHx8ICFmaWVsZEFjY2Vzc1ZhbHVlPy51IHx8ICFmaWVsZEFjY2Vzc1ZhbHVlPy5yKSAmJiAhZmllbGRBY2Nlc3NWYWx1ZT8uaGlkZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmllbGRBY2Nlc3NWYWx1ZS5yIHx8IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVhZEZvcm1BY2Nlc3MocGFnZUFjY2Vzcykge1xyXG4gICAgaWYgKHBhZ2VBY2Nlc3M/LmMgfHwgcGFnZUFjY2Vzcz8udSB8fCBwYWdlQWNjZXNzPy5kKSB7XHJcbiAgICAgIHJldHVybiB7IHZhbHVlOiB0cnVlLCBkaXNhYmxlZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBwYWdlQWNjZXNzLnIgfHwgZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ZpZWxkTGV2ZWxFeGlzdChmaWVsZExldmVsRXhpc3QsIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLCBwYWdlc0Zyb21GaWVsZCwgZXhpc3RpbmdWYWx1ZSwgaSkge1xyXG4gICAgbGV0IHBhZ2VBY2Nlc3NWYWx1ZTogYW55O1xyXG4gICAgaWYgKGZpZWxkTGV2ZWxFeGlzdD8ubGVuZ3RoICYmIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nKSB7XHJcbiAgICAgIHBhZ2VBY2Nlc3NWYWx1ZSA9IHRoaXMuZ2V0TW9zdEZyZXF1ZW50RWxlKFxyXG4gICAgICAgIGZpZWxkTGV2ZWxFeGlzdD8uZmlsdGVyKGVsZSA9PiAoZWxlLnBhZ2VJZCA9IHBhZ2VzRnJvbUZpZWxkW2ldKSk/Lm1hcChlID0+IChlLmFjY2VzcyA/IE51bWJlcihlLmFjY2VzcykgOiAwKSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhZ2VBY2Nlc3NWYWx1ZSA9IGV4aXN0aW5nVmFsdWU/LmZpbmQoZWxlID0+IGVsZS5wYWdlaWQgPT09IHBhZ2VzRnJvbUZpZWxkW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlQWNjZXNzVmFsdWU7XHJcbiAgfVxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gZm9yIGZpZWxkIGxldmVsIGFjY2Vzc1xyXG4gIGdldEFjY2VzcyhhY2Nlc3MsIGZpZWxkUGFnZUxldmVsKSB7XHJcbiAgICBsZXQgYWNjZXNzRmllbGQ6IGFueTtcclxuICAgIGlmIChmaWVsZFBhZ2VMZXZlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0ge1xyXG4gICAgICAgICdjJzogYWNjZXNzPy5jLFxyXG4gICAgICAgICdyJzogdGhpcy5nZXRGaWVsZFJlYWRBY2Nlc3MoYWNjZXNzKSxcclxuICAgICAgICAndSc6IGFjY2Vzcz8udSxcclxuICAgICAgICAnaGlkZSc6IGFjY2Vzcz8uaGlkZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSB7XHJcbiAgICAgICAgJ3InOiAoIWFjY2Vzcz8uaGlkZSAmJiAhYWNjZXNzPy5yKSA/IHRydWUgOiBhY2Nlc3MucixcclxuICAgICAgICAnaGlkZSc6IGFjY2Vzcz8uaGlkZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY2Vzc0ZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JnYW5pemF0aW9uUGFnZShvcmdJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Pcmdhbml6YXRpb24uZ2V0T3JnYW5pemF0aW9uLnJlcGxhY2UoJ3tvcmdJZH0nLCBvcmdJZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXNzZXRCeVBhZ2VJZChwSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0UGFnZUFzc2V0fS8ke3BJZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFzc2V0KHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSwgYXNzZXQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gYG9yZy91c2VyLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9IGBhY2Nlc3MtY29udHJvbC9yb2xlLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYHBsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KGAvJHt1cmx9LyR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldH1gLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBc3NldE9uRGVzZWxlY3Qoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55LCBhc3NldDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSBgb3JnL3VzZXIvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gYGFjY2Vzcy1jb250cm9sL3JvbGUvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSBgcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lncm91cC8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKGAvJHt1cmx9LyR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldERlc2VsZWN0fWAsIGFzc2V0KTtcclxuICB9XHJcblxyXG4gIGdldEFzc2V0QnlJZChzZWxlY3RlZEFjY2Vzczogc3RyaW5nLCBzZWxlY3RlZElkOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0VXNlckFzc2V0O1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0Um9sZUFzc2V0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRQb2xpY3lHcm91cEFzc2V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke3VybH0vJHtzZWxlY3RlZElkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9saWN5R3JvdXBQYWdlKHBvbGljeWdyb3VwaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAvcG9saWN5Z3JvdXAvJHtwb2xpY3lncm91cGlkfSR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICBnZXREeW5hbWljUGFnZShzZWxlY3RlZEFjY2VzczogYW55LCBzZWxlY3RlZElkOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9ICdvcmcvdXNlcic7XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAncm9sZScpIHtcclxuICAgICAgdXJsID0gJ2FjY2Vzcy1jb250cm9sL3JvbGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gJ3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAvJHt1cmx9LyR7c2VsZWN0ZWRJZH0ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRHluYW1pY1BhZ2Uoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55LCBwYWdlRGF0YTogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSAnb3JnL3VzZXInO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9ICdhY2Nlc3MtY29udHJvbC9yb2xlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9ICdwbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeWdyb3VwJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgLyR7dXJsfS8ke3NlbGVjdGVkSWR9JHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZX1gLCBwYWdlRGF0YSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBY2Nlc3MoZmllbGRMZXZlbEFjY2VzczogYm9vbGVhbiwgYWNjZXNzQnk6IHN0cmluZywgcGF5bG9hZDogYW55LCB1c2VySWQ6IGFueSwgcm9sZUlkOiBhbnksIHBvbGljeUlkOiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGNvbnN0IGNyZWF0ZVVybCA9IGZpZWxkTGV2ZWxBY2Nlc3NcclxuICAgICAgPyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldEFzc2V0XHJcbiAgICAgIDogQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2U7XHJcbiAgICAvLyBjaGVjayBvbmx5IHBvbGljeSBncm91cFxyXG4gICAgaWYgKGFjY2Vzc0J5ID09PSAnMycpIHtcclxuICAgICAgdXJsID0gYCR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Qb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cH0ke3BvbGljeUlkID8gcG9saWN5SWQgOiAnMCd9JHtjcmVhdGVVcmx9YDtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIHBlcnNvbmEgd2l0aCBwb2xpY3kgZ3JvdXBcclxuICAgIGlmIChhY2Nlc3NCeSA9PT0gJzInKSB7XHJcbiAgICAgIHVybCA9IGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUm9sZS5nZXRSb2xlfSR7cm9sZUlkID8gcm9sZUlkIDogJzAnfSR7Y3JlYXRlVXJsfWA7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayB1c2VyLCBwZXJzb25hIHdpdGggcG9saWN5IGdyb3VwXHJcbiAgICBpZiAoYWNjZXNzQnkgPT09ICcxJykge1xyXG4gICAgICB1cmwgPSBgJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlcn0ke3VzZXJJZCA/IHVzZXJJZCA6ICcwJ30ke2NyZWF0ZVVybH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh1cmwsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXBwbGljYXRpb25BY2Nlc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoJy9hcHBsaWNhdGlvbmFjY2Vzcy8nKTtcclxuICB9XHJcblxyXG4gIGNoZWNrT2JqZWN0VHlwZShzY2hlbWE6IHN0cmluZywgdGFibGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAke0RhdGFCYXNlQ29uZmlnLkVuZFBvaW50LkRhdGFiYXNlLmNoZWNrT2JqZWN0VHlwZX0vJHtzY2hlbWF9LyR7dGFibGV9YClcclxuICB9XHJcbn1cclxuIl19
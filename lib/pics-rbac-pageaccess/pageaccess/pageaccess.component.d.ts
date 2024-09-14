import { ChangeDetectorRef, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../@core/service/alert.service';
import { AuthService } from '../@core/service/auth.service';
import { DataStoreService } from '../@core/service/data-store.service';
import { PageAccessService } from '../@core/urls/page-access.service';
import { RBACINFO } from '../@core/urls/rbac-url.config';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export declare class PageaccessComponent implements OnInit {
    private formBuilder;
    cdRef: ChangeDetectorRef;
    private _storeservice;
    private router;
    private alert;
    rbacForm: FormGroup;
    userList: any[];
    policyGroupData: any[];
    roleAddedData: any[];
    dataLevelAccess: boolean;
    pageLevelAccess: boolean;
    multiPageAccess: boolean;
    fieldLevelAccess: boolean;
    moduleList: any[];
    subModuleList: any[];
    pageData: any[];
    pagesList: any[];
    loadedPagesList: any[];
    selectedPageData: any[];
    fData: any[];
    moduleDropdownSettings: {};
    submoduleDropdownSettings: {};
    pageDropdownSettings: {};
    pageAccessDropdownSettings: {};
    fieldAccessDropdownSettings: {};
    AddComponent: any;
    fieldLevelClick: boolean;
    editPage: boolean;
    selectedFieldData: any[];
    organisationid: any;
    existingSelectedFieldData: any[];
    savedPageAccessPatching: boolean;
    savedFieldPagesPatching: any[];
    selectedPageLevelData: any[];
    selectedPageAccessChanges: any[];
    isRunCond: boolean;
    selectedAccess: string;
    updatePage: boolean;
    selectedId: number;
    selectedName: string;
    assetList: any;
    policyGroupPages: Array<any>;
    policyGroupRolePages: Array<any>;
    selectedRole: string;
    conditions: Array<any>;
    permissions: Array<any>;
    dataAccess: Array<any>;
    showFieldValidity: boolean;
    pageAccessService: PageAccessService;
    orgSubs: Subscription;
    orgId: any;
    environment: any;
    RBACORG: RBACINFO;
    PERMISSION: any;
    authService: AuthService;
    pId: any;
    fullArray: any;
    mergedAsset: any;
    httpService: any;
    permissionUpdatedPages: Array<any>;
    fieldPageLevel: [];
    fieldLevelCheckCount: any;
    pagelevelaccesssavedisable: boolean;
    pagelevelaccesscount: any;
    selectedPages: Array<number>;
    previousSelection: Array<number>;
    isPageDeselectSave: boolean;
    deselectedItemIds: Array<number>;
    isRemoveAllFields: boolean;
    deselectAssetIds: Array<number>;
    enablesave: boolean;
    pagelevelaccesscountdisable: boolean;
    showFieldGrid: boolean;
    getPageList: boolean;
    disabledPages: Array<number>;
    oldPageAccessValues: any[];
    grantedPages: any[];
    filterText: string;
    filteredItems: any[];
    selectedPageDataFilter: any;
    additionalConditions: any;
    private validationPopup;
    modalService: NgbModal;
    constructor(injector: Injector, formBuilder: FormBuilder, cdRef: ChangeDetectorRef, _storeservice: DataStoreService, router: Router, alert: AlertService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadRbacForm(): void;
    accessBy(evt: any): void;
    userDropdown(evt: any): void;
    roleDropdown(evt: any): void;
    policyDropdown(evt: any): void;
    dropDownSelectedValues(evt: any): void;
    getOrganizationPage(): void;
    getFallbackPermission(fAccess: any): any[];
    getSelectedPages(_selectedPages?: any, _pageConfig?: any, _assetconfig?: any): void;
    getGrantedPages(): void;
    onFilterPages(event: any): void;
    removeValue(e: any, item: any): void;
    onControlChanges(): void;
    checkExistingGrantedPolicyPages(rolePages: any, policyGroupPages: any): any;
    checkExistingGrantedRolePages(policyPages: any, policyGroupRolePages: any): any;
    policyGroupCondition(data: any, policyGroup: any): void;
    getConfiguredAssetData(selectedAccess: any, selectedId: any): void;
    loadPages(tempPageData: any, action: any, pageids: any, pageConfig: any, fieldConfig: any): void;
    populatePage(action: any, selected?: any, event?: any, pageConfig?: any, fieldConfig?: any, pageids?: any): void;
    removeAllPopulatePage(): void;
    showLevelAccess(id: any): void;
    fPagesCheckLength(fpages: any, pageIds: any): void;
    getPageLevelList(action?: any, pageConfig?: any): Promise<void>;
    getVersionAccessArray(existSelectedPageId: any, pId: any, i: any, accessArray: any, pageName: any, setAccess: any, pageConfig: any): void;
    getPageAccessArray(pId: any, i: any, accessArray: any, pageName: any, setAccess: any, pageConfig: any): void;
    forActionClick(action: any, pId: any, accessArray: any): void;
    checkAccessType(data: any): any;
    getFieldLevelList(action?: any, fieldConfig?: any): void;
    checkFieldLevelCondition(fieldLevel: any, pAccessId: any): void;
    fieldVersionCheck(fieldLevel: any, pAccessId: any): void;
    fieldConfigCheck(fieldConfig: any, accessArray: any): void;
    getMergedAsset(accessArray: any): void;
    getAccessArrayCheck(data: any, formValue: any, accessArray: any): void;
    checkMergedAsset(data: any): void;
    getAccessByAsset(accessArray: any): void;
    mergeAsset(arr1: any, arr2: any): any;
    submitAlert(): void;
    saveRbac(): void;
    getPageLevelByArray(pageLevelData: any): void;
    getFieldLevelByAsset(fieldLevelData: any): void;
    setPolicyLevelPagePatching(pageConfig: any, assetconfig: any): void;
    setPolicyLevelFieldPatching(pageConfig: any, assetconfig: any, from?: any): void;
    getDataBasedOnPolicy(from?: any): void;
    getCheckPageConfig(pageConfig: any): void;
    getDataBasedOnRole(from?: any): void;
    getOrgId(pageConfig: any): void;
    getCheckRolePolicyGroup(pageConfig: any): void;
    getRoleAndPolicyData(from?: any): void;
    getCheckPolicyLevelField(pageConfig: any): void;
    resetForm(id?: any, clear?: any): void;
    redirectList(): void;
    saveAccessPatching(): void;
    changeFieldAccess(_event: any, index: number, selectedPrivilege: string): void;
    changePageAccess(index: any, selectedPrivilege: any): void;
    setDefaultPageAccess(pageAccessData: FormArray, i: number): void;
    checkObjectType(schema: string, table: string): Promise<unknown>;
    showPopup(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageaccessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageaccessComponent, "lib-pageaccess", never, {}, {}, never, never, false, never>;
}

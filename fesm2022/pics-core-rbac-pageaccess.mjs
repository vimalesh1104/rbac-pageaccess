import * as i0 from '@angular/core';
import { Injectable, Directive, Input, EventEmitter, Component, Output, ViewChild, NgModule, Pipe, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject, forkJoin } from 'rxjs';
import * as i1$1 from '@angular/forms';
import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tap, mergeMap, map } from 'rxjs/operators';
import * as i1$2 from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as i1 from 'ngxf-uploader';
import { NgxfUploaderModule } from 'ngxf-uploader';
import * as i3 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i7 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i8 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i9 from 'primeng/tooltip';
import { TooltipModule } from 'primeng/tooltip';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i9$1 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i10 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i11 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i12 from 'primeng/inputnumber';
import { InputNumberModule } from 'primeng/inputnumber';
import * as i13 from 'primeng/inputtextarea';
import { InputTextareaModule } from 'primeng/inputtextarea';
import * as i14 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import * as i17 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import * as i5$2 from 'devextreme-angular';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';
import * as i1$3 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import CustomStore from 'devextreme/data/custom_store';
import { exportDataGrid as exportDataGrid$1 } from 'devextreme/excel_exporter';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import * as ExcelJS from 'exceljs/dist/exceljs.min.js';
import { saveAs } from 'file-saver-es';
import * as jsPDF from 'jspdf';
import * as moment from 'moment';
import * as i6 from 'devextreme-angular/ui/nested';
import * as i7$1 from 'devextreme-angular/core';
import * as i8$1 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i6$1 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import * as i4 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import * as i5$3 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

class RbacPageaccessService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPageaccessService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPageaccessService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPageaccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
}
class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}
class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
}
// export class AccessManagementConfig {
//   public static EndPoint = {
//     Organization: {
//       getOrganizationList: '/org/organization/all',
//       getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
//     }
//   };
// }
let AccessManagementConfig$2 = class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets/',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };
};
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
class DataBaseConfig {
    static EndPoint = {
        Database: {
            checkObjectType: '/database/checkObjectType',
        }
    };
}

class Store {
    state$;
    _state$;
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AppConstants {
    static errorMessage = 'Something went wrong!';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
}

class DynamicTabPageConfig {
    static EndPoint = {
        Page: {
            getActivePage: '/platform/page-designer/pageversion/{id}',
            getPage: '/platform/page-designer/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/solution/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/solution/formresponse/create',
            patchFormResponse: '/solution/formresponse',
            updateFormResponse: '/pagedata/'
        },
        Narrative: {
            getIncidentListById: '/incident/listBySourceId/{id}'
        },
        Notification: {
            createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
        },
        Finance: {
            exportDocument: '/integrated/exportDocuments/',
            uploadDocument: 'document/upload',
            getUniqueId: '/uniqueIdLogic/'
        },
        Attachments: {
            createAttachment: '/solution/formresponse-attachment/create'
        }
    };
}

class DynamicTabPageService {
    uploadService;
    _storeservice;
    isPageDesign = new BehaviorSubject(false);
    observePage = this.isPageDesign.asObservable();
    httpService;
    constructor(uploadService, _storeservice) {
        this.uploadService = uploadService;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getActivePage(tabPageId, permission) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission ? '?applyPermissions=true' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    getResponseByPageId(responseId, pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
            .replace('{responseId}', responseId)
            .replace('{pageId}', pageId));
    }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', history?.state?.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: DataStoreService }]; } });

class PageHeaderURL {
    static EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
        }
    };
}

class PageHeaderService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAuthorizedPages(orgid) {
        return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageHeaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AuthURL {
    static EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser'
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}

class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i3.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i3.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    type;
    message;
}
class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
let AccessManagementConfig$1 = class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
};

class AuthState {
    user;
}

class AuthStore extends Store {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        super(new AuthState());
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    // constructor(private httpService: HttpService) {
    // }
    addAuthInfo(user) {
        this.setState({ ...this.state, user });
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    token = null;
    constructor() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class StorageService {
    Storage;
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}

class LocalService extends StorageService {
    constructor() {
        super(window.sessionStorage);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthService {
    _storeservice;
    store;
    _router;
    credentialsService;
    localstore;
    sharedInfo;
    alertService;
    dynamicTabPageService;
    pageHeaderService;
    httpService;
    constructor(_storeservice, injector, store, _router, credentialsService, localstore) {
        this._storeservice = _storeservice;
        this.store = store;
        this._router = _router;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
        this.alertService = injector.get(AlertService);
        this.dynamicTabPageService = injector.get(DynamicTabPageService);
        this.pageHeaderService = injector.get(PageHeaderService);
    }
    orgInfo = new BehaviorSubject('');
    currentOrgInfo = this.orgInfo.asObservable();
    currentMenu = new BehaviorSubject('');
    currentMenuInfo = this.currentMenu.asObservable();
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    getCurrentMenu(data) {
        this.currentMenu.next(data);
    }
    getUserOrgList() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
    }
    getUnNotified() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
    }
    updateUnNotified(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
    }
    updateWorkerAvailability(data) {
        return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
    }
    getWorkerAvailability() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
    }
    getMstrToken() {
        return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(res => {
            return res;
        });
    }
    login(email, password, otp) {
        const body = {
            email: email,
            password: password,
            secret: otp ? otp : ''
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            return this.getUserInfo();
        }));
    }
    refreshToken(platform = 'aws') {
        const email = sessionStorage.getItem('email');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const body = {
            email,
            refreshToken
        };
        if (platform === 'aws') {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                console.log('new token generated...', res['data'].idToken.jwtToken);
                return [res['data'].idToken.jwtToken];
            }));
        }
        else {
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
                this.credentialsService.setCredentials(res['data'].token);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                return [res['data'].token];
            }));
        }
    }
    resetLoggedIn() {
        this.httpService
            .post(AuthURL.EndPoints.auth.user.logout, {
            email: sessionStorage.getItem('email')
        })
            .subscribe(() => {
            console.log('Logged in flag reset successful.');
        });
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    getUserInfo() {
        return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
            this.store.addAuthInfo(user['data']);
            return user;
        }));
    }
    getUserRole(id) {
        return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(res => {
            return res;
        });
    }
    routeToDynamicPage(orgid) {
        return this.httpService
            .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
            .pipe((res) => {
            return res;
        });
    }
    getAuthMe() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
    getRoleKey() {
        const user = this.localstore.getObj('user');
        if (user && user.role) {
            return user.role.rolekey;
        }
    }
    isAdmin() {
        return 'ADM' === this.getRoleKey();
    }
    getOrgID() {
        const user = this.localstore.getObj('user');
        if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
            return user.userWorkInfo.organization.id;
        }
        else {
            return '';
        }
    }
    conformMail(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
    }
    changePassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
    }
    setSharedMessage(data) {
        this.sharedInfo = data;
    }
    getSharedMessage() {
        return this.sharedInfo;
    }
    async checkDynamicPagePermission(pageId) {
        const dynamicPages = await this.getAuthorizedPages();
        if (pageId) {
            this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
                if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
                    this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
                }
                else {
                    this.alertService.error(`You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`);
                }
            });
        }
        else {
            this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
        }
    }
    getCurrentOrg() {
        return this.getUserOrgList()
            .toPromise()
            .then(response => {
            return response['data'][0].id;
        });
    }
    async getAuthorizedPages() {
        const orgId = await this.getCurrentOrg();
        return this.pageHeaderService
            .getAuthorizedPages(orgId)
            .toPromise()
            .then(response => {
            const dynamicPage = response['data'].filter(page => {
                return (page.activeVersion &&
                    (page.activeVersion.gridconfig || page.activeVersion.templatejson || this.getCustomPage(page)));
            });
            return dynamicPage.map(page => ({
                id: page.activeVersion.id,
                name: page.activeVersion.pagename,
                activeVersion: page.activeVersion
            }));
        }, _error => this.alertService.error(AppConstants.errorMessage));
    }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter(x => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, deps: [{ token: DataStoreService }, { token: i0.Injector }, { token: AuthStore }, { token: i3.Router }, { token: CredentialsService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: DataStoreService }, { type: i0.Injector }, { type: AuthStore }, { type: i3.Router }, { type: CredentialsService }, { type: LocalService }]; } });

class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getAssetDeselect: 'assetDeselect',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };
}

class PageAccessService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AccessManagementCommonService {
    _storeservice;
    urlData;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    set clickableData(data) {
        this.urlData = data;
    }
    get clickableData() {
        return this.urlData;
    }
    getUserList(orgid) {
        return this.httpService.get(AccessManagementConfig.EndPoint.User.getUserorgList + orgid);
    }
    getPolicyGroupList(orgid) {
        return this.httpService.get(AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroupList.replace('{organizationid}', String(orgid)));
    }
    getRoleList(orgid) {
        return this.httpService.get(AccessManagementConfig.EndPoint.Role.getRoleList.replace('{orgid}', String(orgid)));
    }
    getOrganizationList() {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganizationList);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccessManagementCommonService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccessManagementCommonService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccessManagementCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    permissions;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ManageAccessRadioComponent {
    formBuilder;
    cdRef;
    accessManagementService;
    _storeservice;
    rbacForm;
    userList = [];
    policyGroupData = [];
    roleAddedData = [];
    userDropDown = false;
    roleDropDown = false;
    policyDropDown = false;
    accessBy = new EventEmitter();
    policyDropdown = new EventEmitter();
    roleDropdown = new EventEmitter();
    userDropdown = new EventEmitter();
    dropDownSelectedValues = new EventEmitter();
    reloadForm;
    userDropdownSettings = {};
    roleDropdownSettings = {};
    policyDropdownSettings = {};
    orgSubs;
    orgId;
    environment;
    RBACORG = new RBACINFO();
    constructor(formBuilder, cdRef, accessManagementService, _storeservice) {
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this.accessManagementService = accessManagementService;
        this._storeservice = _storeservice;
        // this.orgSubs = this.authService.orgInfo.subscribe(o => {
        //   this.orgId = o;
        //   console.log(this.orgId, 'manageaccessradio comp');
        //   if (this.orgId) {
        //     this.loadDropdowns();
        //   }
        // });
        // this.orgSubs =  this._storeservice.currentStore.subscribe((res: any) => {
        //   if (res['RBACORG'] && res['RBACORG'] !== '') {
        //     this.RBACORG = res['RBACORG'];
        //     console.log(this.RBACORG, 'RBACORG Event Scheduler');
        //     this.environment = this.RBACORG['environment'];
        //     this.orgId = parseInt(this.RBACORG['orgID']);
        //     if(this.environment){
        //       this.loadDropdowns();
        //     }
        //   }
        // });
    }
    ngOnInit() {
        this.loadForm();
        this.userDropdownSettings = {
            singleSelection: false,
            text: 'Select User',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'displayname',
            searchBy: ['displayname']
        };
        this.roleDropdownSettings = {
            singleSelection: false,
            text: 'Select Persona',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'name',
            searchBy: ['name']
        };
        this.policyDropdownSettings = {
            singleSelection: false,
            text: 'Select Policy',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'policygroupname',
            searchBy: ['policygroupname']
        };
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Event Scheduler');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.loadDropdowns();
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    loadDropdowns() {
        this.loadUsername();
        this.getPersona();
        this.getPolicyGroup();
    }
    loadForm() {
        this.rbacForm = this.formBuilder.group({
            id: new FormControl(null),
            accessBy: new FormControl(null),
            userId: new FormControl('', Validators.required),
            policyId: new FormControl(null, Validators.required),
            roleId: new FormControl(null, Validators.required)
        });
    }
    loadUsername() {
        this.accessManagementService.getUserList(this.orgId).subscribe(res => {
            this.userList = res['data'] && res['data'].length ? res['data'] : [];
            this.userList.forEach(a => (a.displayname = `${a.firstname} ${a.lastname}`));
            this.userDropdown.emit(this.userList);
        });
    }
    getPolicyGroup() {
        this.accessManagementService.getPolicyGroupList(this.orgId).subscribe(res => {
            this.policyGroupData = res['data'] && res['data'].length ? res['data'] : [];
            this.policyDropdown.emit(this.policyGroupData);
        });
    }
    getPersona() {
        this.accessManagementService.getRoleList(this.orgId).subscribe(res => {
            console.log(this.orgId);
            this.roleAddedData = res['data'] && res['data'].length ? res['data'] : [];
            this.roleDropdown.emit(this.roleAddedData);
        });
    }
    showDorpdowns(id) {
        if (id === '1') {
            this.userDropDown = true;
            this.roleDropDown = this.policyDropDown = false;
        }
        else if (id === '2') {
            this.userDropDown = false;
            this.roleDropDown = true;
            this.policyDropDown = false;
        }
        else if (id === '3') {
            this.userDropDown = this.roleDropDown = false;
            this.policyDropDown = true;
        }
        this.accessBy.emit(id);
        this.resetForm(id);
    }
    // edit functionalites based on policy group
    getDataBasedOnPolicy() {
        const policyids = this.rbacForm.get('policyId').value;
        const roleIds = this.rbacForm.get('roleId').value;
        const userIds = this.rbacForm.get('userId').value;
        const selectedValue = {
            userid: userIds ? userIds.map(key => key.id) : null,
            roleid: roleIds ? roleIds.map(key => key.id) : null,
            policyid: policyids ? policyids.map(key => key.id) : null,
            from: 'policy'
        };
        if (this.rbacForm.get('roleId').value !== null || this.rbacForm.get('userId').value !== null) {
            this.dropDownSelectedValues.emit(selectedValue);
            return;
        }
        if (policyids.length) {
            this.dropDownSelectedValues.emit(selectedValue);
        }
        else {
            this.resetForm('3');
            this.rbacForm.get('accessBy').setValue('3');
        }
    }
    getDataBasedOnRole() {
        const roleIds = this.rbacForm.get('roleId').value;
        const userIds = this.rbacForm.get('userId').value;
        const policyIds = this.rbacForm.get('policyId').value;
        const selectedValue = {
            userid: userIds ? userIds.map(key => key.id) : null,
            roleid: roleIds ? roleIds.map(key => key.id) : null,
            policyid: policyIds ? policyIds.map(key => key.id) : null,
            from: 'role'
        };
        if (this.rbacForm.get('userId').value !== null) {
            this.dropDownSelectedValues.emit(selectedValue);
            return;
        }
        if (roleIds.length) {
            let existPolicyIds = [];
            // loop the role ids
            for (const roleId of roleIds) {
                const roleData = this.roleAddedData.filter(key => key.id === roleId.id);
                const getPolicyIds = roleData[0]['rolePolicyGroupConfigs'].map(pId => pId.policygroupid);
                existPolicyIds.push(getPolicyIds);
            }
            const myNewArray = [].concat(...existPolicyIds);
            const uniquePolicy = [...new Set(myNewArray)];
            existPolicyIds = uniquePolicy;
            // set policy group values
            const pList = this.policyGroupData.filter(key => existPolicyIds.includes(key.id));
            this.rbacForm.get('policyId').setValue(pList);
            const policyIdValues = this.rbacForm.get('policyId').value;
            selectedValue.roleid = roleIds ? roleIds.map(key => key.id) : null;
            selectedValue.policyid = policyIdValues ? policyIdValues.map(key => key.id) : null;
            this.dropDownSelectedValues.emit(selectedValue);
        }
        else {
            this.resetForm('2');
            this.rbacForm.get('accessBy').setValue('2');
        }
    }
    getRoleAndPolicyData() {
        const userIds = this.rbacForm.get('userId').value;
        if (userIds.length) {
            let existPolicyIds = [];
            let existRoleIds = [];
            // loop the role ids
            for (const userId of userIds) {
                const userData = this.userList.filter(key => key.id === userId.id);
                const getPolicyIds = userData[0]['policyGroupConfigs'].map(pId => pId.policygroupid);
                existPolicyIds.push(getPolicyIds);
                const getRoleIds = userData[0]['roleConfigs'].map(pId => pId.roleid);
                existRoleIds.push(getRoleIds);
            }
            const myNewPolicyAry = [].concat(...existPolicyIds);
            const uniquePolicy = [...new Set(myNewPolicyAry)];
            existPolicyIds = uniquePolicy;
            // set policy group values
            const pList = this.policyGroupData.filter(key => existPolicyIds.includes(key.id));
            this.rbacForm.get('policyId').setValue(pList);
            const myNewRoleAry = [].concat(...existRoleIds);
            const uniqueRole = [...new Set(myNewRoleAry)];
            existRoleIds = uniqueRole;
            // set role values
            const rList = this.roleAddedData.filter(key => existRoleIds.includes(key.id));
            this.rbacForm.get('roleId').setValue(rList);
            const roleIds = this.rbacForm.get('roleId').value;
            const policyIds = this.rbacForm.get('policyId').value;
            const selectedValue = {
                userid: userIds ? userIds.map(key => key.id) : null,
                roleid: roleIds ? roleIds.map(key => key.id) : null,
                policyid: policyIds ? policyIds.map(key => key.id) : null,
                from: 'user'
            };
            this.dropDownSelectedValues.emit(selectedValue);
        }
        else {
            this.resetForm('1');
            this.rbacForm.get('accessBy').setValue('1');
        }
    }
    resetForm(id = null) {
        this.rbacForm.reset();
        if (id !== null) {
            this.rbacForm.get('accessBy').setValue(id);
            this.accessBy.emit(id);
        }
    }
    getOrgPages(type) {
        const roleIds = this.rbacForm.get('roleId').value;
        const userIds = this.rbacForm.get('userId').value;
        const policyIds = this.rbacForm.get('policyId').value;
        let name;
        if (roleIds) {
            name = this.roleAddedData.filter(role => role.id === roleIds)[0].name;
        }
        else if (userIds) {
            name = this.userList.filter(user => user.id === userIds)[0].name;
        }
        else {
            name = this.policyGroupData.filter(policygroup => policygroup.id === policyIds)[0].policygroupname;
        }
        const selectedValue = {
            userid: userIds,
            roleid: roleIds,
            policyid: policyIds,
            from: type,
            name: name,
        };
        this.dropDownSelectedValues.emit(selectedValue);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManageAccessRadioComponent, deps: [{ token: i1$1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: AccessManagementCommonService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ManageAccessRadioComponent, selector: "app-manage-access-radio", inputs: { reloadForm: "reloadForm" }, outputs: { accessBy: "accessBy", policyDropdown: "policyDropdown", roleDropdown: "roleDropdown", userDropdown: "userDropdown", dropDownSelectedValues: "dropDownSelectedValues" }, ngImport: i0, template: "<form [formGroup]=\"rbacForm\" class=\"manage-access-radio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"strip_head toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Manage Access By</span>\r\n      </div>\r\n      <mat-radio-group formControlName=\"accessBy\">\r\n        <mat-radio-button value=\"3\" (click)=\"showDorpdowns('3')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP\">Policy\r\n          Group</mat-radio-button>\r\n        <mat-radio-button value=\"2\" (click)=\"showDorpdowns('2')\"\r\n          fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE\">Role</mat-radio-button>\r\n        <mat-radio-button value=\"1\" (click)=\"showDorpdowns('1')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME\">User\r\n          Name</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"userDropDown\">\r\n      <p class=\"radio-title\">Select User\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"userList\" placeholder=\"Select User\" formControlName=\"userId\"\r\n        styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME_USER\" optionLabel=\"displayname\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('user')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.displayname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.displayname }}\r\n          </div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.displayname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('userId').errors\">\r\n        <div *ngIf=\"rbacForm.get('userId').invalid && rbacForm.get('userId').touched\" class=\"p-error block mt-1\">User selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"roleDropDown\">\r\n      <p class=\"radio-title\">Select Role\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"roleAddedData\" placeholder=\"Select Role\" formControlName=\"roleId\"\r\n        fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE_ROLE\" styleClass=\"w-100\" optionLabel=\"name\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('role')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.name }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('roleId').errors\">\r\n        <div *ngIf=\"rbacForm.get('roleId').invalid && rbacForm.get('roleId').touched\" class=\"p-error block mt-1\">Role selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"policyDropDown\">\r\n      <p class=\"radio-title\">Select Policy Group\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"policyGroupData\" placeholder=\"Select Policy Group\"\r\n        formControlName=\"policyId\" styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP_POLICY\"\r\n        optionLabel=\"policygroupname\" optionValue=\"id\" [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\"\r\n        (onChange)=\"getOrgPages('policy')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.policygroupname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{\r\n            item?.policygroupname }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.policygroupname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('policyId').errors\">\r\n        <div *ngIf=\"rbacForm.get('policyId').invalid && rbacForm.get('policyId').touched\" class=\"p-error block mt-1\">Policy Group selection is required </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br />\r\n", styles: [".mat-radio-group .mat-radio-button{padding-right:10px;font-family:Roboto,sans-serif!important}.radio-title{color:var(--label-text);font-size:var(--font-14);font-weight:600;margin-bottom:10px}:host ::ng-deep .selected-list .c-btn{font-size:var(--base-font-size)}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}\n"], dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5$1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i5$1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "component", type: i7.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "directive", type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i9.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManageAccessRadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-manage-access-radio', template: "<form [formGroup]=\"rbacForm\" class=\"manage-access-radio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"strip_head toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Manage Access By</span>\r\n      </div>\r\n      <mat-radio-group formControlName=\"accessBy\">\r\n        <mat-radio-button value=\"3\" (click)=\"showDorpdowns('3')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP\">Policy\r\n          Group</mat-radio-button>\r\n        <mat-radio-button value=\"2\" (click)=\"showDorpdowns('2')\"\r\n          fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE\">Role</mat-radio-button>\r\n        <mat-radio-button value=\"1\" (click)=\"showDorpdowns('1')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME\">User\r\n          Name</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"userDropDown\">\r\n      <p class=\"radio-title\">Select User\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"userList\" placeholder=\"Select User\" formControlName=\"userId\"\r\n        styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME_USER\" optionLabel=\"displayname\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('user')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.displayname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.displayname }}\r\n          </div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.displayname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('userId').errors\">\r\n        <div *ngIf=\"rbacForm.get('userId').invalid && rbacForm.get('userId').touched\" class=\"p-error block mt-1\">User selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"roleDropDown\">\r\n      <p class=\"radio-title\">Select Role\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"roleAddedData\" placeholder=\"Select Role\" formControlName=\"roleId\"\r\n        fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE_ROLE\" styleClass=\"w-100\" optionLabel=\"name\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('role')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.name }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('roleId').errors\">\r\n        <div *ngIf=\"rbacForm.get('roleId').invalid && rbacForm.get('roleId').touched\" class=\"p-error block mt-1\">Role selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"policyDropDown\">\r\n      <p class=\"radio-title\">Select Policy Group\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"policyGroupData\" placeholder=\"Select Policy Group\"\r\n        formControlName=\"policyId\" styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP_POLICY\"\r\n        optionLabel=\"policygroupname\" optionValue=\"id\" [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\"\r\n        (onChange)=\"getOrgPages('policy')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.policygroupname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{\r\n            item?.policygroupname }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.policygroupname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('policyId').errors\">\r\n        <div *ngIf=\"rbacForm.get('policyId').invalid && rbacForm.get('policyId').touched\" class=\"p-error block mt-1\">Policy Group selection is required </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br />\r\n", styles: [".mat-radio-group .mat-radio-button{padding-right:10px;font-family:Roboto,sans-serif!important}.radio-title{color:var(--label-text);font-size:var(--font-14);font-weight:600;margin-bottom:10px}:host ::ng-deep .selected-list .c-btn{font-size:var(--base-font-size)}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: AccessManagementCommonService }, { type: DataStoreService }]; }, propDecorators: { accessBy: [{
                type: Output
            }], policyDropdown: [{
                type: Output
            }], roleDropdown: [{
                type: Output
            }], userDropdown: [{
                type: Output
            }], dropDownSelectedValues: [{
                type: Output
            }], reloadForm: [{
                type: Input
            }] } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class PageaccessComponent {
    formBuilder;
    cdRef;
    _storeservice;
    router;
    alert;
    rbacForm;
    userList = [];
    policyGroupData = [];
    roleAddedData = [];
    dataLevelAccess = false;
    pageLevelAccess = false;
    multiPageAccess = false;
    fieldLevelAccess = false;
    moduleList = [];
    subModuleList = [];
    pageData = [];
    pagesList = [];
    loadedPagesList = [];
    selectedPageData = [];
    fData = [];
    moduleDropdownSettings = {};
    submoduleDropdownSettings = {};
    pageDropdownSettings = {};
    pageAccessDropdownSettings = {};
    fieldAccessDropdownSettings = {};
    AddComponent;
    fieldLevelClick = false;
    editPage = false;
    selectedFieldData = [];
    organisationid;
    existingSelectedFieldData;
    savedPageAccessPatching;
    savedFieldPagesPatching;
    selectedPageLevelData;
    selectedPageAccessChanges = [];
    isRunCond = true;
    selectedAccess;
    updatePage;
    selectedId;
    selectedName;
    assetList;
    policyGroupPages = [];
    policyGroupRolePages = [];
    selectedRole = '';
    conditions = [];
    permissions = [];
    dataAccess = [];
    showFieldValidity;
    pageAccessService;
    orgSubs;
    orgId;
    environment;
    RBACORG = new RBACINFO();
    PERMISSION;
    authService;
    pId;
    fullArray;
    mergedAsset;
    httpService;
    permissionUpdatedPages = [];
    fieldPageLevel;
    fieldLevelCheckCount;
    pagelevelaccesssavedisable = true;
    pagelevelaccesscount;
    selectedPages = [];
    previousSelection = [];
    isPageDeselectSave = false;
    deselectedItemIds = [];
    isRemoveAllFields = false;
    deselectAssetIds = [];
    enablesave = true;
    pagelevelaccesscountdisable = true;
    showFieldGrid = true;
    getPageList = false;
    disabledPages = [];
    oldPageAccessValues = [];
    grantedPages = [];
    filterText;
    filteredItems = [];
    selectedPageDataFilter;
    additionalConditions;
    validationPopup;
    modalService;
    constructor(injector, formBuilder, cdRef, _storeservice, router, alert) {
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this._storeservice = _storeservice;
        this.router = router;
        this.alert = alert;
        this.pageAccessService = injector.get(PageAccessService);
        this.authService = injector.get(AuthService);
        this.modalService = injector.get(NgbModal);
        this.updatePage = false;
        this.showFieldValidity = false;
        this.conditions = [
            {
                name: 'Days',
                key: 'days'
            },
            {
                name: 'Always',
                key: 'always'
            }
        ];
        this.permissions = [
            {
                name: 'R',
                key: 'r'
            },
            {
                name: 'RW',
                key: 'rw'
            },
            {
                name: 'None',
                key: 'n'
            }
        ];
        this.dataAccess = [
            {
                name: 'All',
                key: 'all'
            },
            {
                name: 'Assigned',
                key: 'asg'
            },
            {
                name: 'Owner',
                key: 'cb'
            }
        ];
        this.fieldLevelCheckCount = [];
        this.pagelevelaccesscount = [];
        // this.orgSubs = this.authService.orgInfo.subscribe(org => {
        //   this.orgId = org;
        //   if (this.orgId) {
        //     this.getOrganizationPage();
        //   }
        // });
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Event Scheduler');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                this.httpService = res['HTTPSERVICE'];
                if (this.environment) {
                    this.getOrganizationPage();
                    this.loadRbacForm();
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    loadRbacForm() {
        this.rbacForm = this.formBuilder.group({
            id: new FormControl(null),
            accessBy: new FormControl(null),
            userid: new FormControl(''),
            policyid: new FormControl(null),
            roleid: new FormControl(null),
            provideAccess: new FormControl(null),
            pageAccess: new FormControl('2'),
            validity: new FormControl(null),
            accessdata: new FormControl(null),
            module: new FormControl(null),
            submodule: new FormControl(null),
            pageList: new FormControl(null),
            ppages: new FormControl(null),
            fpages: new FormControl(null),
            fieldLevelData: new FormArray([]),
            pageLevelData: new FormArray([])
        });
    }
    accessBy(evt) {
        this.pagesList = [];
        this.rbacForm.patchValue({ accessBy: evt });
        this.resetForm(evt);
        this.rbacForm.patchValue({ provideAccess: '1' });
    }
    userDropdown(evt) {
        this.userList = evt;
    }
    roleDropdown(evt) {
        this.roleAddedData = evt;
    }
    policyDropdown(evt) {
        this.policyGroupData = evt;
    }
    dropDownSelectedValues(evt) {
        this.disabledPages = [];
        this.getPageList = true;
        this.enablesave = false;
        this.selectedRole = '';
        this.updatePage = false;
        this.selectedAccess = evt.from;
        this.selectedName = evt.name;
        this.filterText = '';
        this.rbacForm.patchValue({ userid: evt.userid });
        this.rbacForm.patchValue({ roleid: evt.roleid });
        this.rbacForm.patchValue({ policyid: evt.policyid });
        if (this.pagesList.length === 0) {
            this.getOrganizationPage();
        }
        this.getSelectedPages();
        if (evt.from === 'role') {
            this.selectedRole = evt.roleid;
        }
    }
    getOrganizationPage() {
        if (this.orgId) {
            this.pageAccessService.getOrganizationPage(this.orgId).subscribe(res => {
                const data = res['data']['data'];
                if (data && data?.length) {
                    this.pageData = data?.filter(a => a.activeVersion);
                    this.loadedPagesList = this.pageData.map(x => {
                        return {
                            id: x.activeVersion.pageid,
                            pagename: x.isEnable ? x.activeVersion.pagename : `${x.activeVersion.pagename} (Inactive)`,
                            isEnable: x.isEnable,
                            activeVersion: x.activeVersion,
                            disabled: false
                        };
                    });
                }
            });
        }
    }
    getFallbackPermission(fAccess) {
        if (fAccess?.value?.pageAccess === '2' || fAccess?.value?.access === '2') {
            return this.permissions.filter(a => a.key !== 'rw');
        }
        else {
            return this.permissions;
        }
    }
    getSelectedPages(_selectedPages, _pageConfig, _assetconfig) {
        //this.policyGroupPages = [];
        this.updatePage = false;
        this.getPageList = true;
        this.rbacForm.get('provideAccess').setValue(null);
        if (this.selectedAccess === 'user') {
            this.selectedId = this.rbacForm.getRawValue().userid;
        }
        else if (this.selectedAccess === 'role') {
            this.selectedId = this.rbacForm.getRawValue().roleid;
        }
        else {
            this.selectedId = this.rbacForm.getRawValue().policyid;
            this.selectedAccess = 'policygroup';
        }
        if (!this.fieldLevelAccess && this.permissionUpdatedPages.length) {
            this.getPageList = true;
        }
        this.getGrantedPages();
    }
    getGrantedPages() {
        if (this.getPageList) {
            this.pageAccessService.getDynamicPage(this.selectedAccess, this.selectedId).subscribe(res => {
                this.grantedPages = [];
                this.getPageList = false;
                if (this.selectedAccess === 'role') {
                    this.grantedPages = res['data'].rolePages;
                    this.policyGroupPages = res['data'].policyGroupPages;
                    const selectedPages = this.checkExistingGrantedPolicyPages(this.grantedPages, this.policyGroupPages);
                    this.pagesList = [...this.loadedPagesList.map(page => {
                            return {
                                ...page,
                                disabled: this.disabledPages.some(id => id === page.id),
                            };
                        })];
                    // added this below line for bug OR-1338
                    // this.pagesList = this.pagesList.filter(e => !e.disabled);
                    const enablePages = selectedPages.filter(e => !e.disabled);
                    this.rbacForm.patchValue({ pageList: enablePages });
                }
                else if (this.selectedAccess === 'policygroup') {
                    this.grantedPages = res['data'].policyGroupPages;
                    this.policyGroupRolePages = res['data'].policyGroupRolePages;
                    const selectedPages = this.checkExistingGrantedRolePages(this.grantedPages, this.policyGroupRolePages);
                    this.pagesList = this.loadedPagesList.map(page => ({
                        ...page,
                        disabled: this.disabledPages.some(id => id === page.id),
                    }));
                    // added this below line for bug OR-1338
                    // this.pagesList = this.pagesList.filter(e => !e.disabled);
                    const enablePages = selectedPages.filter(e => !e.disabled);
                    this.rbacForm.patchValue({ pageList: enablePages });
                }
                else {
                    this.grantedPages = res['data'];
                    this.pagesList = this.loadedPagesList;
                    const pagesArrayIds = this.grantedPages.map(granted => granted.page.id);
                    const enablePages = this.pagesList.filter(page => pagesArrayIds.includes(page.id));
                    this.rbacForm.patchValue({ pageList: enablePages });
                }
                // this.loadPages([], null, [], [], this.assetList);
                if (this.grantedPages.length) {
                    this.updatePage = true;
                    const pageData = this.grantedPages.filter(page => page.page).map(a => a.page);
                    pageData.forEach(x => (x.pagename = x?.activeVersion?.pagename || ''));
                    const uniquePageData = [...new Map(pageData.map(item => [item['id'], item])).values()];
                    const pageIDs = uniquePageData.map(a => a['id']);
                    const pageConfigData = this.grantedPages.map(a => {
                        return {
                            id: a.id,
                            // isfull: a.full,
                            hide: a.hide,
                            // isread: a.read,
                            // isreadwrite: a.readwrite,
                            accessdata: a.accessData,
                            conditions: a.conditions,
                            page: a.page,
                            c: a?.c,
                            r: a?.r,
                            u: a?.u,
                            d: a?.d
                        };
                    });
                    this.loadPages(uniquePageData, null, pageIDs, pageConfigData, this.assetList);
                    //this.onControlChanges();
                    this.oldPageAccessValues = this.rbacForm.get('pageLevelData').value.map(x => ({ ...x }));
                    // } else {
                    //   this.removeAllPopulatePage()
                }
                else {
                    this.loadPages([], null, [], [], this.assetList);
                }
            });
        }
        else {
            this.updatePage = true;
            const pageLevelData = this.rbacForm.get('pageLevelData');
            if (pageLevelData && pageLevelData.controls.length > 0) {
                pageLevelData.controls.forEach((control, index) => {
                    const currentId = control.value.pageid;
                    const originalEntry = this.oldPageAccessValues.find(o => o.pageid === currentId);
                    if (originalEntry) {
                        control.patchValue({
                            pageAccess: originalEntry.pageAccess,
                            fallbackTo: originalEntry.fallbackTo,
                            condition: originalEntry.condition,
                            validity: originalEntry.validity,
                            accessdata: originalEntry.accessdata
                        });
                    }
                    else {
                        control.patchValue({
                            pageAccess: control?.value?.pageAccess ? control.value.pageAccess : '2',
                            fallbackTo: 'n',
                            condition: 'always',
                            validity: '1',
                            accessdata: 'all'
                        });
                    }
                });
            }
            else {
                this.pageLevelAccess = false;
            }
        }
    }
    onFilterPages(event) {
        this.filterText = event.filter;
    }
    removeValue(e, item) {
        e.stopPropagation();
        const filteredPages = this.rbacForm.value.pageList.filter((s) => s.id !== Number(item.id));
        this.rbacForm.patchValue({
            pageList: filteredPages
        });
        this.populatePage('click', true, null);
        this.selectedPageData = this.rbacForm.value.pageList.filter(page => !page.disabled);
    }
    onControlChanges() {
        const pageLevelAccessFormControl = this.rbacForm.get('pageLevelData');
        pageLevelAccessFormControl.controls.forEach(control => {
            control.valueChanges.pipe(map((value) => {
                console.log('Value Changed');
                if (this.permissionUpdatedPages.some(pageId => pageId === value.pageid)) {
                    this.permissionUpdatedPages = this.permissionUpdatedPages.filter(pageId => pageId !== value.pageid);
                    this.permissionUpdatedPages.push(value.pageid);
                }
                else {
                    this.permissionUpdatedPages.push(value.pageid);
                }
            })).subscribe();
        });
    }
    checkExistingGrantedPolicyPages(rolePages, policyGroupPages) {
        let selectedPages;
        const rolePageIds = rolePages.map(page => page.page.id);
        selectedPages = this.loadedPagesList.filter(key => rolePageIds.includes(key.id));
        for (const page of this.loadedPagesList) {
            for (const policyGroups of policyGroupPages) {
                for (const pages of policyGroups.policygrouppage) {
                    if (pages.page[0].id === page.id) {
                        this.disabledPages.push(pages.page[0].id);
                        selectedPages.push({ ...page, disabled: true });
                    }
                }
            }
        }
        return selectedPages;
    }
    checkExistingGrantedRolePages(policyPages, policyGroupRolePages) {
        let selectedPages;
        const policyPageIds = policyPages.map(page => page.page.id);
        selectedPages = this.loadedPagesList.filter(key => policyPageIds.includes(key.id));
        for (const page of this.loadedPagesList) {
            for (const policyGroups of policyGroupRolePages) {
                for (const pages of policyGroups.rolepage) {
                    if (pages.page[0].id === page.id) {
                        this.disabledPages.push(pages.page[0].id);
                        selectedPages.push({ ...page, disabled: true });
                    }
                }
            }
        }
        return selectedPages;
    }
    policyGroupCondition(data, policyGroup) {
        const policyGroupPages = data?.data && data?.data.length ? data?.data : [];
        const uniquePolicyGroupPages = [...new Map(policyGroupPages.map(item => [item['page']['id'], item])).values()];
        this.policyGroupData = (this.policyGroupData.length && this.policyGroupData) || uniquePolicyGroupPages;
        this.policyGroupPages.push({
            name: this.policyGroupData.find(pgd => pgd.policygroup.id === policyGroup.policygroupid)?.policygroup
                ?.policygroupname,
            data: uniquePolicyGroupPages
        });
    }
    getConfiguredAssetData(selectedAccess, selectedId) {
        this.pageAccessService.getAssetById(selectedAccess, selectedId).subscribe((res) => {
            this.assetList = res['data'].map(a => {
                return {
                    pageid: this.pId,
                    _id: a?.id,
                    id: a?.assetid,
                    // isfull: a.full,
                    hide: a.hide,
                    // isread: a.read,
                    // isreadwrite: a.readwrite,
                    conditions: a.conditions,
                    accessdata: a.accessData,
                    c: a?.c,
                    r: a?.r,
                    u: a?.u,
                };
            });
        });
    }
    loadPages(tempPageData, action, pageids, pageConfig, fieldConfig) {
        this.pageData = tempPageData || [];
        this.pageData.forEach(a => (a.pagename = tempPageData.length && tempPageData.filter(b => b.id === a.id)[0]?.activeVersion?.pagename));
        this.populatePage(action, true, null, pageConfig, fieldConfig, pageids);
    }
    populatePage(action, selected, event, pageConfig, fieldConfig, pageids) {
        // if (event) {
        //   if (Array.isArray(event) && selected) {
        //     this.permissionUpdatedPages = event.map(page => page.id)
        //   }
        //   else if (!Array.isArray(event) && selected) {
        //     this.permissionUpdatedPages.push(event.id);
        //   }
        //   else {
        //     this.permissionUpdatedPages = this.permissionUpdatedPages.filter(id => id !== event.id);
        //   }
        // }
        //if (event && event.value.length) {
        //this.rbacForm.patchValue({ pageList: event.value });
        //}
        if (event) {
            const previousSelection = this.selectedPageData;
            let currentSelection = event.value;
            // push value in permissionupdatedPages when new page is selected
            if (event?.itemValue?.id && !this.permissionUpdatedPages.some(pageId => pageId === event.itemValue.id)) {
                this.permissionUpdatedPages.push(event.itemValue.id);
            }
            if (!(event.hasOwnProperty('itemValue') && event.itemValue)) {
                //select-all or de-select-all action
                let deSelectAllPages = false;
                let selectAllPages = false;
                //Edge Case 1: All page options are selected from the dropdown
                if (currentSelection.length === this.pagesList.length) {
                    selectAllPages = true;
                }
                //Edge Case 2: All page options were previously selected and now all of then are getting de-selected
                if (currentSelection.length === 0 && previousSelection.length === this.pagesList.length) {
                    deSelectAllPages = true;
                }
                //If Edge Case 1 or Edge Case 2 happen, then this.filterText needs to be cleared
                if (selectAllPages || deSelectAllPages) {
                    this.filterText = '';
                }
                if (this.filterText && this.filterText !== '') {
                    this.filteredItems = this.pagesList.filter(item => item.pagename.toLowerCase().includes(this.filterText.toLowerCase()));
                    if (currentSelection.length === 0) {
                        //Edge Case 3.1 : Deselect-all in filtered view
                        currentSelection = this.selectedPageData.filter(selectedItem => !this.filteredItems.some(filteredItem => filteredItem.id === selectedItem.id));
                    }
                    else {
                        //Edge Case 3.2 :Select-all in filtered view
                        const newSelections = this.filteredItems.filter((item) => !this.selectedPageData.some((prevItem) => prevItem.id === item.id));
                        currentSelection = [...this.selectedPageData, ...newSelections];
                    }
                }
            }
            this.rbacForm.patchValue({ pageList: currentSelection });
        }
        const pageIds = this.rbacForm.get('pageList').value;
        const id = pageIds.map(key => key.id);
        let provideAccess = this.rbacForm.get('provideAccess').value;
        // Logic to handle the deselected item of Pages field
        if (!selected) {
            this.isPageDeselectSave = true;
            const newlyDeselected = this.previousSelection.filter(item => !id.includes(item));
            this.deselectedItemIds = [...new Set([...this.deselectedItemIds, ...newlyDeselected])];
            const fpagesValue = this.rbacForm.get('fpages').value;
            if (fpagesValue && newlyDeselected.includes(fpagesValue)) {
                this.rbacForm.controls['fpages'].setValue(null);
                this.showFieldGrid = false;
            }
        }
        else {
            this.isPageDeselectSave = false;
        }
        this.previousSelection = [...id];
        if (id?.length) {
            this.isRemoveAllFields = false;
            if (!provideAccess) {
                this.rbacForm.patchValue({ provideAccess: '1' });
                this.pageLevelAccess = this.multiPageAccess = true;
                this.fieldLevelAccess = false;
                provideAccess = '1';
            }
            // Filter out pages with lookup keys "RBTP" or "DR"
            const hideRBTPpageIds = this.grantedPages
                .filter(item => item?.page?.lookup?.key === "RBTP" || item?.page?.lookup?.key === "DR")
                .map(element => element.pageid);
            // Filter out pages that are not disabled and not in the hideRBTPpageIds array
            this.selectedPageDataFilter = pageIds.filter(page => !page.disabled && !hideRBTPpageIds.includes(page.id));
            // Pageids from api
            this.selectedPageData = pageIds.filter(page => !page.disabled);
            this.pagelevelaccesscount = pageIds;
            if ((this.pagelevelaccesscount || this.pagelevelaccesscount.length > 0) && !this.enablesave) {
                this.pagelevelaccesscountdisable = false;
            }
            if (provideAccess === '1') {
                this.rbacForm.patchValue({ ppages: pageIds });
                if (fieldConfig?.length) {
                    this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(fieldConfig?.map(ele => {
                        return {
                            fieldName: ele?.description,
                            access: this.checkAccessType(ele),
                            assetid: ele?.assetid,
                            pageId: ele?.id
                        };
                    }), this.selectedFieldData);
                }
            }
            else if (provideAccess === '2' && pageids && pageids.length) {
                if (fieldConfig !== null) {
                    const pList = this.pageData.filter(key => key.id === pageids[0]);
                    this.rbacForm.patchValue({ fpages: pList });
                    this.getFieldLevelList(action, fieldConfig);
                }
                else {
                    const pId = this.selectedPageData.filter(ele => ele.id === pageIds[0]?.id);
                    this.rbacForm.patchValue({ fpages: pId });
                    this.getFieldLevelList(action, fieldConfig);
                }
            }
            this.getPageLevelList(action, pageConfig);
        }
        else {
            if (action === 'click') {
                this.pagelevelaccesscountdisable = false;
            }
            else {
                this.pagelevelaccesscountdisable = true;
            }
            this.removeAllPopulatePage();
            this.isRemoveAllFields = true;
        }
    }
    removeAllPopulatePage() {
        this.selectedPageData = [];
        this.pageLevelAccess = false;
        this.fieldLevelAccess = false;
        this.multiPageAccess = true;
        this.pagelevelaccesscount = [];
        this.pagelevelaccesssavedisable = true;
        this.filterText = '';
        const f = this.rbacForm.controls['fieldLevelData'];
        f.controls = [];
        const p = this.rbacForm.controls['pageLevelData'];
        p.controls = [];
        this.rbacForm.get('ppages').setValue(null);
        this.rbacForm.get('fpages').setValue(null);
        this.rbacForm.get('provideAccess').setValue(null);
        this.rbacForm.get('pageLevelData').setValue([]);
        this.rbacForm.get('fieldLevelData').setValue([]);
    }
    showLevelAccess(id) {
        const f = this.rbacForm.controls['fieldLevelData'];
        if (f.getRawValue()?.length) {
            this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(f.getRawValue(), this.selectedFieldData);
        }
        f.controls = [];
        const pageIds = this.rbacForm.get('pageList').value;
        if (pageIds != null) {
            if (id === '1') {
                this.pageLevelAccess = true;
                this.multiPageAccess = true;
                this.fieldLevelAccess = false;
                this.pagelevelaccesscount = pageIds;
                if (pageIds?.length) {
                    this.pagelevelaccesssavedisable = false;
                    if (!this.rbacForm.get('ppages').value) {
                        this.rbacForm.get('ppages').patchValue(pageIds);
                    }
                }
                this.getSelectedPages();
            }
            else if (id === '3') {
                this.pageLevelAccess = false;
                this.dataLevelAccess = true;
                this.multiPageAccess = true;
                this.fieldLevelAccess = false;
                this.pagelevelaccesscount = pageIds;
                if (pageIds?.length) {
                    this.pagelevelaccesssavedisable = false;
                    if (!this.rbacForm.get('ppages').value) {
                        this.rbacForm.get('ppages').patchValue(pageIds);
                    }
                }
                this.getSelectedPages();
            }
            else {
                this.getConfiguredAssetData(this.selectedAccess, this.selectedId);
                this.pageLevelAccess = false;
                this.multiPageAccess = false;
                this.fieldLevelAccess = true;
                this.fieldLevelCheckCount = [];
                const fpages = this.rbacForm.get('fpages').value;
                this.fPagesCheckLength(fpages, pageIds);
                if (this.fieldLevelCheckCount && this.fieldLevelCheckCount?.length > 0) {
                    this.getFieldLevelList('click');
                }
            }
        }
    }
    fPagesCheckLength(fpages, pageIds) {
        if (!fpages || !fpages?.length) {
            if (pageIds?.length) {
                const p = [pageIds];
                this.rbacForm.get('fpages').setValue(p);
            }
        }
    }
    async getPageLevelList(action = null, pageConfig = null) {
        const accessArray = this.rbacForm.get('pageLevelData');
        const formValue = this.rbacForm.getRawValue();
        const pAccessId = this.rbacForm.get('pageList').value.filter(page => !page.disabled);
        const pId = pAccessId?.map(key => key?.pageid || key?.id);
        // first check exist page config
        if (pageConfig !== null) {
            // check selected value length
            if (formValue.pageLevelData.length) {
                accessArray.clear();
            }
            for (const pAccessElement of pAccessId) {
                const id = pAccessElement.id;
                const activeVersion = pAccessElement.activeVersion;
                let tableSchemaConfig = activeVersion.tableschemaconfig;
                tableSchemaConfig = typeof tableSchemaConfig === 'string' ? JSON.parse(tableSchemaConfig) : tableSchemaConfig;
                const objectType = tableSchemaConfig?.objectType ? tableSchemaConfig.objectType : 'table';
            }
            const filterdPageConfigArray = pId
                .map(id => pageConfig.find(key => key?.page?.id === id))
                .filter(config => config !== undefined);
            for (let i = 0; i < pId.length; i++) {
                let setAccess = '';
                setAccess = filterdPageConfigArray[i];
                const pageName = this.loadedPagesList.filter(key => key.id === pId[i]);
                this.getPageAccessArray(pId, i, accessArray, pageName, setAccess, pageConfig);
            }
        }
        this.forActionClick(action, pId, accessArray);
    }
    getVersionAccessArray(existSelectedPageId, pId, i, accessArray, pageName, setAccess, pageConfig) {
        const checkPid = existSelectedPageId.includes(pId[i]);
        if (!checkPid) {
            accessArray.push(new FormGroup({
                pageName: new FormControl(pageName[0]['activeVersion']['pagename']),
                pageid: new FormControl(pId[i]),
                pageAccess: new FormControl(setAccess),
                validity: new FormControl((pageConfig[i]?.conditions && pageConfig[i].conditions.value) || '1'),
                accessdata: new FormControl((pageConfig[i]?.accessdata && pageConfig[i].accessdata.value) || 'all'),
                condition: new FormControl(pageConfig[i]?.conditions ? 'days' : 'always'),
                fallbackTo: new FormControl((pageConfig[i]?.conditions && pageConfig[i].conditions.fallbackTo) || 'n')
            }));
        }
    }
    getPageAccessArray(pId, i, accessArray, pageName, setAccess, pageConfig) {
        accessArray.push(new FormGroup({
            pageName: new FormControl(pageName[0]['pagename']),
            pageid: new FormControl(pId[i]),
            // pageAccess: new FormControl(setAccess),
            pageAccessCreate: new FormControl(setAccess.c || false),
            pageAccessRead: new FormControl(this.pageAccessService.getReadFormAccess(setAccess)),
            pageAccessUpdate: new FormControl(setAccess.u || false),
            pageAccessDelete: new FormControl({ value: setAccess.d || false, disabled: pageName[0]?.activeVersion?.templatejson }),
            pageAccessNone: new FormControl(setAccess.hide || false),
            validity: new FormControl((setAccess.conditions && setAccess.conditions !== 'always' && setAccess.conditions.value) ? setAccess.conditions.value : '1'),
            condition: new FormControl(setAccess.conditions && setAccess.conditions !== 'always' ? 'days' : 'always'),
            fallbackTo: new FormControl((setAccess.conditions && setAccess.conditions !== 'always' && setAccess.conditions.fallbackTo) ? setAccess.conditions.fallbackTo : 'n'),
            accessdata: new FormControl((setAccess.accessdata && setAccess.accessdata) || 'all'),
        }));
    }
    forActionClick(action, pId, accessArray) {
        if (action === 'click') {
            const existingValue = this.selectedPageLevelData?.length ? this.selectedPageLevelData : accessArray.getRawValue();
            let pagesFromField = Array.from(new Set([...this.selectedFieldData].map(ele => ele.pageId))).filter(ele => ele);
            if (pId?.length) {
                pagesFromField = pId;
            }
            if (pagesFromField?.length) {
                for (let i = 0; i < pagesFromField?.length; i++) {
                    const pageName = this.pagesList.filter(key => key.id === pagesFromField[i]);
                    if (!existingValue[i]) {
                        const id = pageName[0]?.id;
                        const activeVersion = pageName[0]?.activeVersion;
                        let tableSchemaConfig = activeVersion?.tableschemaconfig;
                        tableSchemaConfig = typeof tableSchemaConfig === 'string' ? JSON.parse(tableSchemaConfig) : tableSchemaConfig;
                        const objectType = tableSchemaConfig?.objectType ? tableSchemaConfig.objectType : 'table';
                    }
                }
                accessArray.controls = [];
                accessArray.controls = this.pageAccessService.getAccessArrayOnClick(pagesFromField, this.pagesList, this.selectedFieldData, this.savedPageAccessPatching, existingValue);
                this.savedPageAccessPatching = false;
            }
            else {
                this.savedPageAccessPatching = false;
                accessArray.controls = [];
            }
        }
    }
    checkAccessType(data) {
        if (data?.isfull) {
            return '2';
        }
        else if (data?.ishide) {
            return '4';
        }
        else if (data?.isread) {
            return '3';
        }
        else if (data?.isreadwrite) {
            return '2';
        }
    }
    getFieldLevelList(action = null, fieldConfig = null) {
        const accessArray = this.rbacForm.get('fieldLevelData');
        const formValue = this.rbacForm.getRawValue();
        const pAccessId = this.rbacForm.get('fpages').value;
        const pageIds = this.rbacForm.get('pageList').value;
        // Fieldpagelevel is a variable is the length of the form page and all page other than grid page
        this.fieldLevelCheckCount = pageIds.filter(x => (x.id === (pAccessId && pAccessId[0]?.id)) || x.id === pAccessId);
        const fieldLevel = pageIds.filter(x => (x.id === (pAccessId && pAccessId[0]?.id)) || x.id === pAccessId);
        this.fieldPageLevel = fieldLevel.filter(a => a.activeVersion !== null && a.activeVersion.gridconfig == null)
            .map(a => {
            return {
                id: a.activeVersion.pageid,
                pagename: a.activeVersion.pagename,
                activeVersion: a.activeVersion
            };
        });
        //console.log(this.fieldPageLevel);
        this.checkFieldLevelCondition(fieldLevel, pAccessId);
        this.fieldConfigCheck(fieldConfig, accessArray);
        if (action === 'click') {
            accessArray.controls = [];
            this.pageAccessService.getAssetByPageId(this.pId).subscribe(res => {
                const data = res['data'];
                this.getAccessArrayCheck(data, formValue, accessArray);
            });
        }
        this.showFieldGrid = true;
    }
    checkFieldLevelCondition(fieldLevel, pAccessId) {
        if (fieldLevel.length > 0) {
            this.showFieldValidity = fieldLevel[0].templatejson ? true : false;
            this.fieldVersionCheck(fieldLevel, pAccessId);
        }
        else {
            this.showFieldValidity = pAccessId[0].templatejson ? true : false;
            if (pAccessId[0]['version']) {
                this.pId = pAccessId[0].pageid;
            }
            else {
                this.pId = pAccessId && pAccessId?.length ? pAccessId[0]['id'] : null;
            }
        }
    }
    fieldVersionCheck(fieldLevel, pAccessId) {
        if (fieldLevel[0]['version']) {
            this.pId = fieldLevel[0].pageid;
        }
        else {
            if (Array.isArray(pAccessId)) {
                this.pId = pAccessId && pAccessId?.length ? pAccessId[0]['id'] : null;
            }
            else {
                this.pId = pAccessId;
            }
        }
    }
    fieldConfigCheck(fieldConfig, accessArray) {
        if (fieldConfig !== null) {
            accessArray.controls = [];
            this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(fieldConfig?.map(ele => {
                return {
                    fieldName: ele?.description,
                    access: this.checkAccessType(ele),
                    assetid: ele.assetid,
                    pageId: ele.id
                };
            }), this.selectedFieldData);
            this.existingSelectedFieldData = [...this.selectedFieldData];
            this.pageAccessService.getAssetByPageId(this.pId).subscribe(res => {
                const data = res['data'];
                this.mergedAsset = this.mergeAsset(data, this.assetList);
                if (this.mergedAsset.includes(undefined)) {
                    this.mergedAsset = data;
                    if (this.mergedAsset.length !== data?.length) {
                        this.mergedAsset = data;
                    }
                }
                this.fData = data;
                this.getMergedAsset(accessArray);
            });
        }
    }
    getMergedAsset(accessArray) {
        for (let i = 0; i < this.mergedAsset.length; i++) {
            const access = this.pageAccessService.getAccess(this.mergedAsset[i], this.fieldPageLevel);
            accessArray.push(new FormGroup({
                fieldName: new FormControl(access[i]['displayname']),
                //access: new FormControl('2'),
                assetid: new FormControl(access[i]['id']),
                pageId: new FormControl(this.pId),
                validity: new FormControl(this.mergedAsset[i].conditions ? this.mergedAsset[i].conditions.value : '1'),
                accessdata: new FormControl((this.mergedAsset[i]?.accessdata && this.mergedAsset[i].accessdata.value) || 'all'),
                condition: new FormControl(this.mergedAsset[i].conditions ? 'days' : 'always'),
                fallbackTo: new FormControl(this.mergedAsset[i].conditions ? this.mergedAsset[i].conditions.fallbackTo : ''),
                fieldAccessCreate: new FormControl(access[i].c),
                fieldAccessRead: new FormControl(access[i].r),
                fieldAccessUpdate: new FormControl(access[i].u),
                fieldAccessHide: new FormControl(access[i].hide),
            }));
        }
    }
    getAccessArrayCheck(data, formValue, accessArray) {
        if (data?.length) {
            this.mergedAsset = this.assetList ? this.mergeAsset(data, this.assetList) : data;
            this.checkMergedAsset(data);
            if (formValue.fieldLevelData.length) {
                this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(formValue.fieldLevelData, this.selectedFieldData);
            }
            let access = null;
            if (this.savedFieldPagesPatching?.length) {
                access = this.savedFieldPagesPatching.find(ele => ele.pageid === this.pId)?.access;
                this.savedFieldPagesPatching = this.savedFieldPagesPatching.filter(ele => ele.pageid !== this.pId);
            }
            this.fData = data;
            const existingFieldDataMap = {};
            if (!access && this.selectedFieldData?.length) {
                this.assetList
                    ?.filter(ele => ele.pageId === this.pId)
                    ?.forEach(ele => {
                    existingFieldDataMap[ele.assetid] = ele.access;
                });
            }
            this.getAccessByAsset(accessArray);
        }
        else {
            accessArray.controls = [];
        }
    }
    checkMergedAsset(data) {
        if (this.mergedAsset.includes(undefined)) {
            this.mergedAsset = data;
            if (this.mergedAsset.length !== data.length) {
                this.mergedAsset = data;
            }
        }
    }
    getAccessByAsset(accessArray) {
        for (const asset of this.mergedAsset) {
            const assetAccess = this.pageAccessService.getAccess(asset, this.fieldPageLevel);
            accessArray.push(new FormGroup({
                fieldName: new FormControl(asset['displayname']),
                //access: new FormControl(assetAccess ? assetAccess : '2'),
                assetid: new FormControl(asset['id']),
                pageId: new FormControl(this.pId),
                fieldAccessCreate: new FormControl(assetAccess?.c || false),
                fieldAccessRead: new FormControl(this.pageAccessService.getReadFormAccess(assetAccess)),
                fieldAccessUpdate: new FormControl(assetAccess?.u || false),
                fieldAccessHide: new FormControl(assetAccess?.hide || false),
                validity: new FormControl(asset.conditions ? asset.conditions.value : '1'),
                //accessdata: new FormControl((asset?.accessdata && asset.accessdata) || 'all'),
                condition: new FormControl(asset.conditions ? 'days' : 'always'),
                fallbackTo: new FormControl(asset.conditions ? asset.conditions.fallbackTo : '')
            }));
        }
    }
    mergeAsset(arr1, arr2) {
        return arr1.map((item, _i) => {
            for (const value of arr2) {
                if (item.id === value.id) {
                    return Object.assign({}, item, value);
                }
            }
        });
    }
    submitAlert() {
        if (!this.fieldLevelAccess && this.permissionUpdatedPages.length) {
            $('#submitAlert').modal('show');
        }
        else {
            this.saveRbac();
            //this.pagelevelaccesssavedisable = true;
            //this.pagelevelaccesscountdisable = true;
        }
    }
    saveRbac() {
        this.getPageList = true;
        const access = this.rbacForm.getRawValue();
        const userid = this.rbacForm.get('userid').value;
        const roleId = this.rbacForm.get('roleid').value;
        const policyId = this.rbacForm.get('policyid').value;
        if ((this.isPageDeselectSave && this.deselectedItemIds.length > 0) || this.isRemoveAllFields) {
            let selectedId;
            if (this.selectedAccess === 'user') {
                selectedId = this.rbacForm.getRawValue().userid;
            }
            else if (this.selectedAccess === 'role') {
                selectedId = this.rbacForm.getRawValue().roleid;
            }
            else {
                selectedId = this.rbacForm.getRawValue().policyid;
                this.selectedAccess = 'policygroup';
            }
            // Collect asset id's for all deselected page id's
            const deselectedAssets = forkJoin(this.deselectedItemIds.map(id => this.pageAccessService.getAssetByPageId(id).pipe(map(res => res['data'].map(item => ({ assetid: item.id }))))));
            // Make a single API call with all deselected asset IDs
            deselectedAssets.pipe(map(assetIdResponses => [].concat(...assetIdResponses))).subscribe(allDeselectedAssetIds => {
                this.pageAccessService.updateAssetOnDeselect(this.selectedAccess, selectedId, allDeselectedAssetIds).subscribe(() => {
                    this.getConfiguredAssetData(this.selectedAccess, selectedId);
                    this.deselectedItemIds = [];
                });
            });
        }
        const fieldLevelData = access.fieldLevelData;
        this.getFieldLevelByAsset(fieldLevelData);
        let selectedId;
        if (this.selectedAccess === 'user') {
            selectedId = this.rbacForm.getRawValue().userid;
        }
        else if (this.selectedAccess === 'role') {
            selectedId = this.rbacForm.getRawValue().roleid;
        }
        else {
            selectedId = this.rbacForm.getRawValue().policyid;
            this.selectedAccess = 'policygroup';
        }
        const pAccess = this.rbacForm.get('provideAccess').value;
        if (pAccess === '2') {
            this.pageAccessService.createAsset(this.selectedAccess, selectedId, this.fullArray).subscribe(_res => {
                if (this.fieldLevelAccess) {
                    this.getConfiguredAssetData(this.selectedAccess, selectedId);
                    this.alert.success('Field Access Updated Successfully');
                }
            });
        }
        this.getPageLevelByArray(access.pageLevelData);
        if (this.selectedAccess === 'policy') {
            this.selectedAccess = 'policygroup';
        }
        if (pAccess === '1') {
            this.pageAccessService.updateDynamicPage(this.selectedAccess, this.selectedId, this.fullArray).subscribe(_res => {
                this.permissionUpdatedPages = [];
                if (!this.fieldLevelAccess) {
                    this.getSelectedPages();
                    this.alert.success('Access Updated Successfully');
                }
            }, _err => this.alert.error(AppConstants.errorMessage));
        }
        //if (this.updatePage) {
        //  if (this.selectedAccess === 'policy') {
        //    this.selectedAccess = 'policygroup';
        //  }
        //  this.pageAccessService.updateDynamicPage(this.selectedAccess, this.selectedId, this.fullArray).subscribe(
        //    _res => {
        //      this.permissionUpdatedPages = [];
        //      if (!this.fieldLevelAccess) {
        //        this.getSelectedPages();
        //        this.alert.success('Access Updated Successfully');
        //      }
        //    },
        //    _err => this.alert.error(AppConstants.errorMessage)
        //  );
        //} else {
        //  this.pageAccessService
        //    .createAccess(this.fieldLevelAccess, access.accessBy, this.fullArray, userid, roleId, policyId)
        //    .subscribe(
        //      _result => {
        //        this.permissionUpdatedPages = [];
        //        this.getSelectedPages();
        //        this.alert.success('Access Saved Successfully');
        //      },
        //      _error => this.alert.error(AppConstants.errorMessage)
        //    );
        //}
    }
    getPageLevelByArray(pageLevelData) {
        this.fullArray = pageLevelData.map(x => {
            return {
                page: x?.pageid,
                overrideAssetPermissions: this.permissionUpdatedPages.some(pageId => pageId === x?.pageid) || false,
                c: x?.pageAccessCreate || false,
                r: x?.pageAccessRead || false,
                u: x?.pageAccessUpdate || false,
                d: x?.pageAccessDelete || false,
                none: x?.pageAccessNone || false,
                accessdata: x?.accessdata,
                conditions: x?.condition !== 'always'
                    ? {
                        attribute: 'created',
                        condition: 'lte',
                        value: x?.validity ? x.validity : null,
                        value_type: 'variable',
                        fallbackTo: x?.fallbackTo ? x.fallbackTo : null,
                        type: 'timestamp'
                    }
                    : x.condition
            };
        });
    }
    getFieldLevelByAsset(fieldLevelData) {
        this.fullArray = fieldLevelData.map(x => {
            const assetData = this.assetList?.filter(a => a.id === x.assetid && a);
            return {
                pageid: this.pId,
                id: assetData ? assetData[0]?._id : null,
                asset: x.assetid,
                // readwrite: x?.access === '2' ? true : false,
                // read: x?.access === '3' ? true : false,
                // none: x?.access === '4' ? true : false,
                // full: x?.access === '5' ? true : false,
                c: x?.fieldAccessCreate,
                r: x?.fieldAccessRead,
                u: x?.fieldAccessUpdate,
                none: x?.fieldAccessHide,
                conditions: x.condition !== 'always'
                    ?
                        {
                            attribute: 'created',
                            condition: 'lte',
                            value: x?.validity ? x.validity : null,
                            value_type: 'variable',
                            fallbackTo: x?.fallbackTo ? x.fallbackTo : null,
                            type: 'timestamp'
                        } : x.condition,
                //accessdata: x?.accessdata ? x.accessdata : null,
            };
        });
    }
    // edit functionalites based on policy group
    setPolicyLevelPagePatching(pageConfig, assetconfig) {
        const pageIds = pageConfig.map(key => key.pageid);
        const selectedModules = [];
        const uniquePage = [...new Set(pageIds)];
        const selectedPages = uniquePage;
        this.rbacForm.patchValue({ provideAccess: '1' });
        this.pageLevelAccess = this.multiPageAccess = true;
        this.fieldLevelAccess = false;
        const m = this.rbacForm.get('module').value;
        if (m !== '' && m !== null) {
            const newModule = m.concat(selectedModules);
            const uniqueNewModule = [...new Set(newModule)];
            this.rbacForm.get('module').setValue(uniqueNewModule);
        }
        else {
            this.rbacForm.patchValue({ module: selectedModules });
        }
        this.getSelectedPages(selectedPages, pageConfig, assetconfig);
    }
    setPolicyLevelFieldPatching(pageConfig, assetconfig, from = null) {
        const mKey = assetconfig.filter(key => key.modulekey !== null && key.modulekey !== '' && key.isactive !== '' && key.isactive !== null);
        const mmkey = mKey.map(key => key.modulekey);
        const modules = this.moduleList.filter(key => mmkey.includes(key.refKey));
        const pageId = assetconfig.filter(key => key.pageid !== null);
        const pageIds = pageId.map(key => key.pageid);
        let selectedModules;
        selectedModules = [...new Set(modules)];
        const uniquePage = [...new Set(pageIds)];
        const selectedPages = uniquePage;
        this.rbacForm.patchValue({ provideAccess: '2' });
        this.pageLevelAccess = this.multiPageAccess = false;
        this.fieldLevelAccess = true;
        if (from === 'field') {
            const m = this.rbacForm.get('module').value;
            if (m !== '') {
                const mk = selectedModules.concat(m);
                selectedModules = mk;
                this.rbacForm.patchValue({ module: selectedModules });
            }
            const sm = this.rbacForm.get('submodule').value;
            if (sm !== '') {
                this.rbacForm.patchValue({ module: selectedModules });
            }
        }
        else {
            this.rbacForm.patchValue({ module: selectedModules });
        }
        this.getSelectedPages(selectedPages, pageConfig, assetconfig);
    }
    getDataBasedOnPolicy(from = null) {
        const policyids = this.rbacForm.get('policyid').value.map(a => a.id);
        if (policyids.length) {
            this.editPage = true;
            this.pageLevelAccess = false;
            this.fieldLevelAccess = false;
            const f = this.rbacForm.controls['fieldLevelData'];
            f.controls = [];
            const p = this.rbacForm.controls['pageLevelData'];
            p.controls = [];
            for (let j = 0; j < policyids.length; j++) {
                const pageConfig = this.policyGroupData.filter(key => key.id === policyids[j]);
                if (from === 'field') {
                    this.editPage = false;
                    if (pageConfig[0].assetConfigs.length) {
                        this.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs, from);
                    }
                    else if (policyids.length === j + 1) {
                        this.showLevelAccess('2');
                    }
                }
                else {
                    this.getCheckPageConfig(pageConfig);
                }
            }
        }
        else {
            this.resetForm('3');
            this.rbacForm.patchValue({ accessBy: '3' });
        }
    }
    getCheckPageConfig(pageConfig) {
        if (pageConfig[0].pageConfigs.length) {
            this.fieldLevelClick = true;
            this.setPolicyLevelPagePatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
        }
        else if (pageConfig[0].assetConfigs.length) {
            const pAccess = this.rbacForm.get('provideAccess').value;
            if (pAccess !== '1') {
                this.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
            }
        }
    }
    getDataBasedOnRole(from = null) {
        const roleIds = this.rbacForm.get('roleid').value.map(a => a.id);
        if (roleIds.length) {
            this.editPage = true;
            this.pageLevelAccess = false;
            this.fieldLevelAccess = false;
            const f = this.rbacForm.controls['fieldLevelData'];
            f.controls = [];
            const p = this.rbacForm.controls['pageLevelData'];
            p.controls = [];
            // loop the role ids
            for (let j = 0; j < roleIds.length; j++) {
                const pageConfig = this.roleAddedData.filter(key => key.id === roleIds[j]);
                this.getOrgId(pageConfig);
                if (from === 'field') {
                    this.editPage = false;
                    if (pageConfig[0].assetConfigs.length) {
                        this.setPolicyLevelFieldPatching(pageConfig[0].rolePolicyGroupConfigs, pageConfig[0].assetConfigs, from);
                    }
                    else if (roleIds.length === j + 1) {
                        this.showLevelAccess('2');
                    }
                }
                else {
                    this.getCheckRolePolicyGroup(pageConfig);
                }
            }
        }
        else {
            this.resetForm('2');
            this.rbacForm.patchValue({ accessBy: '2' });
        }
    }
    getOrgId(pageConfig) {
        if (pageConfig?.length) {
            this.organisationid = pageConfig[0]?.organizationid;
        }
    }
    getCheckRolePolicyGroup(pageConfig) {
        if (pageConfig[0].rolePolicyGroupConfigs.length) {
            this.setPolicyLevelPagePatching(pageConfig[0].rolePolicyGroupConfigs, pageConfig[0].assetConfigs);
        }
        else if (pageConfig[0].assetConfigs.length) {
            const pAccess = this.rbacForm.get('provideAccess').value;
            if (pAccess !== '1') {
                this.setPolicyLevelFieldPatching(pageConfig[0].rolePolicyGroupConfigs, pageConfig[0].assetConfigs);
            }
        }
    }
    getRoleAndPolicyData(from = null) {
        const userIds = this.rbacForm.get('userid').value.map(a => a.id);
        if (userIds.length) {
            this.editPage = true;
            this.pageLevelAccess = false;
            this.fieldLevelAccess = false;
            const f = this.rbacForm.controls['fieldLevelData'];
            f.controls = [];
            const p = this.rbacForm.controls['pageLevelData'];
            p.controls = [];
            // loop the role ids
            for (let j = 0; j < userIds.length; j++) {
                const pageConfig = this.userList.filter(key => key.id === userIds[j]);
                if (from === 'field') {
                    this.editPage = false;
                    if (pageConfig[0].assetConfigs.length) {
                        this.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs, from);
                    }
                    else if (userIds.length === j + 1) {
                        this.showLevelAccess('2');
                    }
                }
                else {
                    this.getCheckPolicyLevelField(pageConfig);
                }
            }
        }
        else {
            this.resetForm('1');
            this.rbacForm.patchValue({ accessBy: '1' });
        }
    }
    getCheckPolicyLevelField(pageConfig) {
        if (pageConfig[0].pageConfigs.length) {
            this.setPolicyLevelPagePatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
        }
        else if (pageConfig[0].assetConfigs.length) {
            const pAccess = this.rbacForm.get('provideAccess').value;
            if (pAccess !== '1') {
                this.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
            }
        }
    }
    resetForm(id = null, clear = null) {
        this.subModuleList = this.pageData = this.selectedPageData = [];
        this.fieldLevelCheckCount = [];
        this.pagelevelaccesscount = [];
        this.pagelevelaccesssavedisable = true;
        this.pageLevelAccess = this.fieldLevelAccess = false;
        this.enablesave = true;
        this.pagelevelaccesscountdisable = true;
        const f = this.rbacForm.controls['fieldLevelData'];
        f.controls = [];
        const p = this.rbacForm.controls['pageLevelData'];
        p.controls = [];
        this.policyGroupPages = [];
        this.selectedAccess = '';
        this.selectedName = '';
        this.permissionUpdatedPages = [];
        this.filterText = '';
        this.rbacForm.reset();
        if (id !== null) {
            this.rbacForm.patchValue({ accessBy: id });
        }
        else if (clear !== null) {
            this.AddComponent.resetForm();
        }
    }
    redirectList() {
        this.router.navigateByUrl('/pages/rbac/page-access/page-access-list');
    }
    saveAccessPatching() {
        this.savedFieldPagesPatching = [];
        this.savedPageAccessPatching = false;
        if (this.rbacForm.get('provideAccess')?.value === '2') {
            this.savedPageAccessPatching = true;
        }
        else {
            const ppId = this.rbacForm.get('pageLevelData').value;
            this.savedFieldPagesPatching = [];
            if (ppId?.length) {
                ppId.forEach(element => {
                    const selectedObj = { pageid: element?.pageid, access: element?.pageAccess };
                    this.savedFieldPagesPatching.push(selectedObj);
                });
            }
        }
        this.alert.success('Temporarily saved Data for changes');
    }
    changeFieldAccess(_event, index, selectedPrivilege) {
        const accessArray = this.rbacForm.get('pageLevelData');
        const fieldLevelDataControl = this.rbacForm.get('fieldLevelData');
        const selectedValue = fieldLevelDataControl.at(index).value;
        if (!this.fieldPageLevel?.length) {
            if (selectedPrivilege === 'r') {
                selectedValue.fieldAccessRead ?
                    fieldLevelDataControl.controls[index].get('fieldAccessHide').patchValue(false) :
                    fieldLevelDataControl.controls[index].get('fieldAccessHide').patchValue(true);
                ;
            }
            else {
                selectedValue.fieldAccessHide ?
                    fieldLevelDataControl.controls[index].get('fieldAccessRead').patchValue(false) :
                    fieldLevelDataControl.controls[index].get('fieldAccessRead').patchValue(true);
                ;
            }
        }
        else {
            if (selectedPrivilege === 'c' || selectedPrivilege === 'u') {
                fieldLevelDataControl.controls[index].get('fieldAccessRead').patchValue(true);
                fieldLevelDataControl.controls[index].get('fieldAccessHide').patchValue(false);
                selectedValue.fieldAccessCreate || selectedValue.fieldAccessUpdate
                    ? fieldLevelDataControl.controls[index].get('fieldAccessRead').disable()
                    : fieldLevelDataControl.controls[index].get('fieldAccessRead').enable();
            }
            else if (selectedPrivilege === 'r') {
                selectedValue.fieldAccessRead ?
                    fieldLevelDataControl.controls[index].get('fieldAccessHide').patchValue(false) :
                    fieldLevelDataControl.controls[index].get('fieldAccessHide').patchValue(true);
                ;
            }
            else {
                selectedValue.fieldAccessHide ?
                    fieldLevelDataControl.controls[index].get('fieldAccessRead').patchValue(false) :
                    fieldLevelDataControl.controls[index].get('fieldAccessRead').patchValue(true);
                ;
                fieldLevelDataControl.controls[index].get('fieldAccessCreate').patchValue(false);
                fieldLevelDataControl.controls[index].get('fieldAccessUpdate').patchValue(false);
                fieldLevelDataControl.controls[index].get('fieldAccessRead').enable();
            }
        }
        // const pageIndex = this.rbacForm
        //   .get('pageLevelData')
        //   .value.findIndex(el => el.pageid === this.rbacForm.get('fieldLevelData').value[0].pageId);
        // if (pageIndex > -1) {
        //   accessArray.push(
        //     new FormGroup({
        //       pageName: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageName),
        //       pageid: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageid),
        //       validity: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].validity),
        //       fallbackTo: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].fallbackTo),
        //       condition: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].condition),
        //       pageAccessCreate: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageAccessCreate),
        //       pageAccessRead: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageAccessRead),
        //       pageAccessUpdate: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageAccessUpdate),
        //       pageAccessDelete: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageAccessDelete),
        //       pageAccessNone: new FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageAccessNone),
        //     })
        //   );
        //   accessArray.removeAt(pageIndex);
        //   const isExist = this.selectedPageAccessChanges.findIndex(
        //     el => el.pageid === this.rbacForm.get('pageLevelData').value[pageIndex].pageid
        //   );
        //   if (isExist > -1) {
        //     this.selectedPageAccessChanges.splice(isExist, 1);
        //   }
        // }
    }
    changePageAccess(index, selectedPrivilege) {
        const pageLevelData = this.rbacForm.get('pageLevelData');
        const selectedValue = pageLevelData.at(index).value;
        const pageName = this.loadedPagesList.filter(key => key.id === selectedValue.pageid);
        if (pageName[0]?.activeVersion?.templatejson) {
            /*delete will be disabled for Business Driven Page */
            pageLevelData.controls[index].get('pageAccessDelete').disable();
            if (selectedPrivilege === 'c' || selectedPrivilege === 'u') {
                pageLevelData.controls[index].get('pageAccessRead').patchValue(true);
                selectedValue.pageAccessUpdate || selectedValue.pageAccessCreate
                    ? pageLevelData.controls[index].get('pageAccessRead').disable()
                    : pageLevelData.controls[index].get('pageAccessRead').enable();
                pageLevelData.controls[index].get('pageAccessNone').patchValue(false);
            }
            else if (selectedPrivilege === 'r') {
                selectedValue.pageAccessRead ?
                    pageLevelData.controls[index].get('pageAccessNone').patchValue(false) :
                    pageLevelData.controls[index].get('pageAccessNone').patchValue(true);
                ;
            }
            else {
                selectedValue.pageAccessNone
                    ? pageLevelData.controls[index].get('pageAccessRead').patchValue(false)
                    : pageLevelData.controls[index].get('pageAccessRead').patchValue(true);
                pageLevelData.controls[index].get('pageAccessCreate').patchValue(false);
                pageLevelData.controls[index].get('pageAccessUpdate').patchValue(false);
                pageLevelData.controls[index].get('pageAccessRead').enable();
            }
        }
        else {
            if (selectedPrivilege === 'c' || selectedPrivilege === 'u' || selectedPrivilege === 'd') {
                pageLevelData.controls[index].get('pageAccessRead').patchValue(true);
                selectedValue.pageAccessUpdate || selectedValue.pageAccessCreate || selectedValue.pageAccessDelete
                    ? pageLevelData.controls[index].get('pageAccessRead').disable()
                    : pageLevelData.controls[index].get('pageAccessRead').enable();
                pageLevelData.controls[index].get('pageAccessNone').patchValue(false);
            }
            else if (selectedPrivilege === 'r') {
                selectedValue.pageAccessRead ?
                    pageLevelData.controls[index].get('pageAccessNone').patchValue(false) :
                    pageLevelData.controls[index].get('pageAccessNone').patchValue(true);
                ;
            }
            else {
                selectedValue.pageAccessNone
                    ? pageLevelData.controls[index].get('pageAccessRead').patchValue(false)
                    : pageLevelData.controls[index].get('pageAccessRead').patchValue(true);
                pageLevelData.controls[index].get('pageAccessCreate').patchValue(false);
                pageLevelData.controls[index].get('pageAccessUpdate').patchValue(false);
                pageLevelData.controls[index].get('pageAccessDelete').patchValue(false);
                pageLevelData.controls[index].get('pageAccessRead').enable();
            }
        }
        const isExist = this.selectedPageAccessChanges?.findIndex(el => el?.pageid === selectedValue.pageid);
        if (isExist > -1) {
            this.selectedPageAccessChanges[isExist].pageAccess = selectedValue.pageAccess;
        }
        else {
            this.selectedPageAccessChanges.push(selectedValue);
        }
        if (selectedValue.pageAccess === '4') {
            this.setDefaultPageAccess(pageLevelData, index);
        }
        if (this.permissionUpdatedPages.some(pageId => pageId === selectedValue.pageid)) {
            this.permissionUpdatedPages = this.permissionUpdatedPages.filter(pageId => pageId !== selectedValue.pageid);
        }
        this.permissionUpdatedPages.push(selectedValue.pageid);
    }
    setDefaultPageAccess(pageAccessData, i) {
        pageAccessData.at(i).get('condition').setValue('always');
        pageAccessData.at(i).get('validity').setValue('1');
        // pageAccessData.at(i).get('accessdata').setValue('all');
        pageAccessData.at(i).get('fallbackTo').setValue('n');
    }
    checkObjectType(schema, table) {
        return new Promise((resolve) => {
            this.pageAccessService.checkObjectType(schema, table).subscribe(res => {
                resolve(res.data);
            });
        });
    }
    showPopup() {
        this.modalService.open(this.validationPopup);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageaccessComponent, deps: [{ token: i0.Injector }, { token: i1$1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: DataStoreService }, { token: i3.Router }, { token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: PageaccessComponent, selector: "lib-pageaccess", viewQueries: [{ propertyName: "AddComponent", first: true, predicate: ManageAccessRadioComponent, descendants: true }, { propertyName: "validationPopup", first: true, predicate: ["validationPopup"], descendants: true }], ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"row rbac-card\">\r\n  <div class=\"col-12\">\r\n    <mat-card class=\"mat-card\">\r\n      <mat-card-content class=\"p-2\">\r\n        <form [formGroup]=\"rbacForm\">\r\n          <app-manage-access-radio (accessBy)=\"accessBy($event)\" (userDropdown)=\"userDropdown($event)\"\r\n            (roleDropdown)=\"roleDropdown($event)\" (policyDropdown)=\"policyDropdown($event)\"\r\n            (dropDownSelectedValues)=\"dropDownSelectedValues($event)\"></app-manage-access-radio>\r\n          <h3 class=\"radio-title mt-1 mb-2 pa-title\">Page Access Management</h3>\r\n          <mat-card class=\"mat-card\">\r\n            <mat-card-content class=\"p-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"false\">\r\n                  <label class=\"radio-title\">Modules</label>\r\n                  <!-- <angular2-multiselect [data]=\"moduleList\" [settings]=\"moduleDropdownSettings\"\r\n                    onSelect=\"loadSubModule('click')\" onDeSelect=\"removeSubModule($event)\"\r\n                    onSelectAll=\"loadSubModule('click')\" onDeSelectAll=\"removeAllSubModule()\"\r\n                    formControlName=\"module\"></angular2-multiselect> -->\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"false\">\r\n                  <label class=\"radio-title\">Sub Modules</label>\r\n                  <!-- <angular2-multiselect [data]=\"subModuleList\" [settings]=\"submoduleDropdownSettings\"\r\n                    onSelect=\"loadSubModulePage('click')\" onDeSelect=\"removeSubModulePage($event, 'submodule')\"\r\n                    onSelectAll=\"loadSubModulePage('click')\" onDeSelectAll=\"removeAllSubModulePage()\"\r\n                    formControlName=\"submodule\">\r\n                  </angular2-multiselect> -->\r\n                </div>\r\n\r\n                <div class=\"col-lg-7 mb-3\">\r\n                  <p-accordion class=\"w-full policygroup-accordion\" iconPos=\"endVal\">\r\n                    <p-accordionTab>\r\n                      <ng-template pTemplate=\"header\">\r\n                        <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                          <span class=\"font-bold\">\r\n                            <label aria-labelledby=\"policyGroupList\" for=\"policyGroupList\"\r\n                              class=\"mb-0 referral-form-labels\">Pages\r\n\r\n                              <span *ngIf=\"selectedPageData.length > 0\"\r\n                                class=\"pg-count ml-2\">{{selectedPageData.length}}</span>\r\n                            </label>\r\n                          </span>\r\n                        </span>\r\n                      </ng-template>\r\n                      <!-- <angular2-multiselect [data]=\"pagesList\" [settings]=\"pageDropdownSettings\"\r\n                        (onSelect)=\"populatePage('click',true,$event)\" fieldKey=\"SETTINGS_PAG_ACC_PAGE\"\r\n                        (onDeSelect)=\"populatePage('click',false,$event)\"\r\n                        (onSelectAll)=\"populatePage('click',true,$event)\" (onDeSelectAll)=\"removeAllPopulatePage()\"\r\n                        formControlName=\"pageList\"></angular2-multiselect> -->\r\n                      <p-multiSelect [options]=\"pagesList\" formControlName=\"pageList\" fieldKey=\"SETTINGS_PAG_ACC_PAGE\"\r\n                        defaultLabel=\"Select Pages\" display=\"chip\" optionLabel=\"pagename\" [autoDisplayFirst]=\"false\"\r\n                        styleClass=\"policygroup-v2 w-100\" (onChange)=\"populatePage('click',true,$event)\" [resetFilterOnHide]=\"true\"\r\n                        (onFilter)= \"onFilterPages($event)\">\r\n                        <ng-template let-value pTemplate=\"selectedItems\">\r\n                          <div *ngFor=\"let option of value\">\r\n                            <div #selectedpg class=\"p-multiselect-token\" [ngClass]=\"option.disabled ? 'disabled' : '' \"\r\n                              id=\"{{option.id}}\">\r\n                              <span class=\"policygroupname\" pTooltip=\"{{option?.pagename}}\" tooltipPosition=\"top\">\r\n                                {{ option.pagename }}\r\n                              </span>\r\n                              <em class=\"pi pi-times-circle ml-2 clear-icon right-sec\" *ngIf=\"!option.disabled\"\r\n                                role=\"button\" (click)=\"removeValue($event, selectedpg)\"></em>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"!value || value.length === 0\">Select Pages</div>\r\n                        </ng-template>\r\n                      </p-multiSelect>\r\n                    </p-accordionTab>\r\n                  </p-accordion>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n                  <label class=\"radio-title d-block required\">Provide Access by </label>\r\n                  <mat-radio-group formControlName=\"provideAccess\" (change)=\"showLevelAccess($event.value)\">\r\n                    <mat-radio-button value=\"1\" fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL\">Page\r\n                      Level&nbsp;&nbsp;</mat-radio-button>\r\n                    <mat-radio-button value=\"2\" fieldKey=\"SETTINGS_PAG_ACC_PAG_FIELD_LEVEL\">Field\r\n                      Level</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-6 col-12 mb-3\" *ngIf=\"fieldLevelAccess\">\r\n                  <label class=\"radio-title\">Select Page</label>\r\n                  <br />\r\n                  <p-dropdown id=\"selectpage\" ariaLabelledBy=\"selectpage\" [options]=\"selectedPageDataFilter\"\r\n                    fieldKey=\"SETTINGS_PAG_ACC_PAGE\" [filter]=\"true\"\r\n                    [showClear]=\"fieldLevelCheckCount && fieldLevelCheckCount?.length\" [resetFilterOnHide]=\"true\"\r\n                    (onChange)=\"getFieldLevelList('click')\" formControlName=\"fpages\" optionLabel=\"pagename\"\r\n                    optionValue=\"id\" placeholder=\"Select a page\" class=\"dd-stand-size\">\r\n                    <ng-template let-item pTemplate=\"selectedItem\">\r\n                      <div pTooltip=\"{{item?.pagename}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.pagename\r\n                        }}</div>\r\n                    </ng-template>\r\n                    <ng-template let-object pTemplate=\"item\">\r\n                      {{ object.pagename }}\r\n                    </ng-template>\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"pageLevelAccess\" class=\"row\">\r\n                <div class=\"col-12 mt-3 pageLevelAccessTable\">\r\n                  <table aria-describedby=\"pageLevelAccessTable\" class=\"table table-bordered\">\r\n                    <col />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 25%\" *ngIf=\"false\" />\r\n                    <col style=\"width: 20%\" />\r\n                    <thead>\r\n                      <th class=\"text-left\">Page Name</th>\r\n                      <th scope=\"col\" class=\"text-center\">Create</th>\r\n                      <th scope=\"col\" class=\"text-center\">Read</th>\r\n                      <th scope=\"col\" class=\"text-center\">Update1</th>\r\n                      <th scope=\"col\" class=\"text-center\">Delete</th>\r\n                      <th scope=\"col\" class=\"text-center\">None</th>\r\n                      <th class=\"text-center\" *ngIf=\"false\">Validity</th>\r\n                      <th class=\"text-center\">Data Access</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <ng-container formArrayName=\"pageLevelData\"\r\n                        *ngFor=\"let fAccess of rbacForm.get('pageLevelData')['controls']; let i = index\">\r\n                        <tr [formGroup]=\"rbacForm.get('pageLevelData')['controls'][i]\">\r\n                          <td class=\"text-left\">\r\n                            <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                              formControlName=\"pageName\" placeholder=\"pageleveldata\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'c')\"\r\n                                formControlName=\"pageAccessCreate\" type=\"checkbox\" value=\"1\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'r')\" formControlName=\"pageAccessRead\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ\" type=\"checkbox\" value=\"2\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'u')\"\r\n                                formControlName=\"pageAccessUpdate\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE\" type=\"checkbox\" value=\"5\">\r\n                                <a href=\"javascript:void(0)\" (click) = \"showPopup()\" >Conditional</a>\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'d')\"\r\n                                formControlName=\"pageAccessDelete\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE_DELETE\" type=\"checkbox\" value=\"6\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'n')\" formControlName=\"pageAccessNone\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_NONE\" type=\"checkbox\" value=\"4\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"false\" >\r\n                            <ng-container *ngIf=\"\r\n                                  rbacForm.get('pageList')?.value[i]?.activeVersion?.gridconfig ||\r\n                                  rbacForm.get('pageList')?.value[i]?.gridconfig\r\n                                \">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" [disabled]=\"fAccess?.value?.pageAccess === '4'\"\r\n                                optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <p-inputNumber type=\"number\" class=\"validity\"\r\n                                *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [readonly]=\"fAccess?.value?.pageAccess === '4'\" [min]=\"1\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_VALIDITY\" formControlName=\"validity\"\r\n                                mode=\"decimal\"></p-inputNumber>\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.pageAccess === '3' || fAccess?.value?.pageAccess === '4'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </ng-container>\r\n                          </td>\r\n                          <td class=\"text-center\" >\r\n                            <ng-container *ngIf=\"\r\n                              rbacForm.get('pageList')?.value[i]?.activeVersion?.gridconfig ||\r\n                              rbacForm.get('pageList')?.value[i]?.gridconfig\r\n                              \">\r\n                              <p-dropdown [options]=\"dataAccess\" styleClass=\"condition\"\r\n                                formControlName=\"accessdata\"\r\n                                placeholder=\"Select a permission\"\r\n                                optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                            </ng-container>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\"\r\n                *ngIf=\"showFieldGrid && fieldLevelCheckCount?.length > 0 && fieldLevelAccess && fieldPageLevel?.length > 0\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table aria-describedby=\"fieldLevelAccessTable\" class=\"table table-bordered\">\r\n                      <col />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col *ngIf=\"false\" />\r\n                      <col />\r\n                      <thead>\r\n                        <th class=\"text-left\">Field Name</th>\r\n                        <th class=\"text-center\">Create</th>\r\n                        <th class=\"text-center\">Read</th>\r\n                        <th class=\"text-center\">Update</th>\r\n                        <th class=\"text-center\">None</th>\r\n                        <th class=\"text-center\" *ngIf=\"showFieldValidity && false\">Validity</th>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container formArrayName=\"fieldLevelData\"\r\n                          *ngFor=\"let fAccess of rbacForm.get('fieldLevelData')['controls']; let i = index\">\r\n                          <tr [formGroupName]=\"i\">\r\n                            <td class=\"text-left\">\r\n                              {{ fData[i]['displayname'] }}\r\n                              <span class=\"pi pi-info-circle asset-path-info\" pTooltip=\"Asset Path: {{ fData[i]['assetpath'] }}\" tooltipPosition=\"right\" ></span>\r\n                              <input type=\"hidden\" formControlName=\"assetid\" value=\"{{ fData[i]['id'] }}\" />\r\n                              <input type=\"hidden\" formControlName=\"pageId\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessCreate\" (change)=\"changeFieldAccess($event, i, 'c')\"\r\n                                  type=\"checkbox\" value=\"3\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessRead\" (change)=\"changeFieldAccess($event, i, 'r')\"\r\n                                  type=\"checkbox\" value=\"2\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessUpdate\" (change)=\"changeFieldAccess($event, i, 'u')\"\r\n                                  type=\"checkbox\" value=\"\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessHide\" (change)=\"changeFieldAccess($event, i, 'h')\"\r\n                                  type=\"checkbox\" value=\"4\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\" *ngIf=\"showFieldValidity && false\">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\"\r\n                                [disabled]=\"fAccess?.value?.access === '4'\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <input type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [min]=\"1\" formControlName=\"validity\" [readonly]=\"fAccess?.value?.access === '4'\"\r\n                                style=\"width: 50px; margin-left: 15px\" pInputText />\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.access === '4' || fAccess?.value?.access === '3'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- This code for field access for grid page -->\r\n              <div class=\"row\"\r\n                *ngIf=\"showFieldGrid && fieldLevelCheckCount?.length > 0 && fieldLevelAccess && fieldPageLevel?.length === 0\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table aria-describedby=\"fieldLevelAccessTable\" class=\"table table-bordered\">\r\n                      <col />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col *ngIf=\"false\" />\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"text-left\">Field Name</th>\r\n                          <th class=\"text-center\">Read</th>\r\n                          <!-- <th class=\"text-center\">Write</th> -->\r\n                          <th class=\"text-center\">None</th>\r\n                          <th class=\"text-center\" *ngIf=\"showFieldValidity && false\">Validity</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container formArrayName=\"fieldLevelData\"\r\n                          *ngFor=\"let fAccess of rbacForm.get('fieldLevelData')['controls']; let i = index\">\r\n                          <tr [formGroupName]=\"i\">\r\n                            <td class=\"text-left\">\r\n                              {{ fData[i]['displayname'] }}\r\n                              <input type=\"hidden\" formControlName=\"assetid\" value=\"{{ fData[i]['id'] }}\" />\r\n                              <input type=\"hidden\" formControlName=\"pageId\" name=\"permissiongroup_{{i}}\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessRead\" (change)=\"changeFieldAccess($event, i,'r')\" type=\"checkbox\">\r\n                              </label>\r\n                            </td>\r\n                            <!-- <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\" value=\"2\" />\r\n                            </td> -->\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessHide\" (change)=\"changeFieldAccess($event, i, 'h')\" type=\"checkbox\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\" *ngIf=\"showFieldValidity && false\">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\"\r\n                                [disabled]=\"fAccess?.value?.access === '4'\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <input type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [min]=\"1\" formControlName=\"validity\" [readonly]=\"fAccess?.value?.access === '4'\"\r\n                                style=\"width: 50px; margin-left: 15px\" pInputText />\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.access === '4' || fAccess?.value?.access === '3'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </form>\r\n        <div class=\"mt-3\" *ngIf=\"policyGroupPages.length && !fieldLevelAccess && selectedAccess === 'role'\">\r\n          <p-accordion class=\"w-full dynamic-search\" iconPos=\"endVal\">\r\n            <p-accordionTab>\r\n              <ng-template pTemplate=\"header\">\r\n                <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                  <span class=\"font-bold\">Policy Groups associated with {{ selectedName }} Role</span>\r\n                </span>\r\n              </ng-template>\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-content>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 mt-1\" *ngFor=\"let policyGroup of policyGroupPages\">\r\n                      <div class=\"radio-title mb-2\">Policy Group: {{ policyGroup?.policygroup?.policygroupname }}</div>\r\n                      <!-- It shows associated Roles -->\r\n                      <div class=\"table-responsive\">\r\n                        <table id=\"policyGroupTable\" aria-describedby=\"policyGroupTable\" class=\"table table-bordered\">\r\n                          <col />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\" class=\"text-left\">Page Name</th>\r\n                              <th scope=\"col\" class=\"text-center\">Create</th>\r\n                              <th scope=\"col\" class=\"text-center\">Read</th>\r\n                              <th scope=\"col\" class=\"text-center\">Update</th>\r\n                              <th scope=\"col\" class=\"text-center\">Delete</th>\r\n                              <th scope=\"col\" class=\"text-center\">None</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let page of policyGroup?.policygrouppage\">\r\n                              <tr>\r\n                                <td class=\"text-left\">\r\n                                  <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                                    title=\"page?.page?.activeVersion?.pagename\"\r\n                                    [value]=\"page?.page[0]?.activeVersion?.pagename\" />\r\n                                </td>\r\n\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.c\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.r\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.u\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.d\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.hide\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"policyGroupPages?.length === 0\">\r\n                              <tr>\r\n                                <td class=\"text-center\" colspan=\"4\">No pages associated with Policy Group.</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </p-accordionTab>\r\n          </p-accordion>\r\n\r\n        </div>\r\n        <div class=\"mt-3\" *ngIf=\"policyGroupRolePages.length && !fieldLevelAccess && selectedAccess === 'policygroup'\">\r\n          <p-accordion class=\"w-full dynamic-search\" iconPos=\"endVal\">\r\n            <p-accordionTab>\r\n              <ng-template pTemplate=\"header\">\r\n                <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                  <span class=\"font-bold\">Roles associated with {{ selectedName }} Policy Group</span>\r\n                </span>\r\n              </ng-template>\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-content>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 mt-1\" *ngFor=\"let role of policyGroupRolePages\">\r\n                      <div class=\"radio-title mb-2\">Role: {{ role?.role?.name }}</div>\r\n                      <!-- It shows associated policygroups -->\r\n                      <div class=\"table-responsive\">\r\n                        <table id=\"policyGroupTable\" aria-describedby=\"policyGroupTable\" class=\"table table-bordered\">\r\n                          <col />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\" class=\"text-left\">Page Name</th>\r\n                              <th scope=\"col\" class=\"text-center\">Create</th>\r\n                              <th scope=\"col\" class=\"text-center\">Read</th>\r\n                              <th scope=\"col\" class=\"text-center\">Update</th>\r\n                              <th scope=\"col\" class=\"text-center\">Delete</th>\r\n                              <th scope=\"col\" class=\"text-center\">None</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let page of role?.rolepage\">\r\n                              <tr>\r\n                                <td class=\"text-left\">\r\n                                  <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                                    title=\"page?.page?.activeVersion?.pagename\"\r\n                                    [value]=\"page?.page[0]?.activeVersion?.pagename\" />\r\n                                </td>\r\n\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.c\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.r\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.u\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.d\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.hide\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"policyGroupRolePages?.length === 0\">\r\n                              <tr>\r\n                                <td class=\"text-center\" colspan=\"4\">No pages associated with Role.</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </p-accordionTab>\r\n          </p-accordion>\r\n\r\n        </div>\r\n        <div class=\"text-right mt-3\" *ngIf=\"multiPageAccess\">\r\n          <!-- <button class=\"btn btn-primary mr-2\" fieldKey=\"SETTINGS_PAG_ACC_BACK\" (click)=\"redirectList()\">Back</button> -->\r\n          <!-- <button class=\"btn btn-cancel mr-2\" fieldKey=\"SETTINGS_PAG_ACC_CLEAR\" (click)=\"resetForm()\">Clear</button> -->\r\n          <button class=\"btn btn-primary\" fieldKey=\"SETTINGS_PAG_ACC_SAVE\" (click)=\"submitAlert()\"\r\n            [disabled]=\"(pagelevelaccesssavedisable && pagelevelaccesscountdisable) || (enablesave && pagelevelaccesscount && pagelevelaccesscount?.length > 0)\">Save</button>\r\n        </div>\r\n        <div class=\"text-right mt-3\" *ngIf=\"!multiPageAccess\">\r\n          <!-- <button class=\"btn btn-primary mr-2\" fieldKey=\"SETTINGS_PAG_ACC_BACK\" (click)=\"redirectList()\">Back</button> -->\r\n          <!-- <button class=\"btn btn-cancel mr-2\" fieldKey=\"SETTINGS_PAG_ACC_CLEAR\" (click)=\"resetForm()\">Clear</button> -->\r\n          <button class=\"btn btn-primary\" fieldKey=\"SETTINGS_PAG_ACC_SAVE\" (click)=\"submitAlert()\"\r\n            [disabled]=\"((multiPageAccess) || (fieldLevelCheckCount && fieldLevelCheckCount?.length === 0) || (enablesave && fieldLevelCheckCount && fieldLevelCheckCount?.length > 0) || (!pagelevelaccesscount || pagelevelaccesscount?.length === 0))\">Save</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"submitAlert\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>Field Level Access is already present for this Page. Modifying the Page Level Access will remove all Field\r\n          Level\r\n          Access. Do you want to proceed?</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"saveRbac()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"getSelectedPages()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #validationPopup let-modal>\r\n  <div class=\"modal-body p-3\">\r\n    <div class=\"reset-password-div\">\r\n      <textarea rows=\"3\" cols=\"30\" pInputTextarea\r\n        placeholder=\"Add Condition\" maxlength=\"4000\" class=\"form-control no-resize\"\r\n        [(ngModel)]=\"additionalConditions\">\r\n      </textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer p-3\">\r\n    <p-button label=\"Save\" styleClass=\"btn px-3 py-1 mr-2 \"> </p-button>\r\n    <p-button label=\"Cancel\" styleClass=\"btn px-3 py-1 mr-2 \"> </p-button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".mat-card-content .mat-radio-group .mat-radio-button{padding-right:10px;font-family:Roboto,sans-serif!important}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}:host ::ng-deep .p-dropdown.nobg{background-color:transparent;border:none}:host ::ng-deep .p-dropdown.nobg:hover,:host ::ng-deep .p-dropdown.nobg:focus{background-color:transparent!important;border:none!important}.pageLevelAccessTable table thead tr th,.pageLevelAccessTable table tbody tr td{vertical-align:middle;color:var(--text-dark)}.pageLevelAccessTable table thead tr th input,.pageLevelAccessTable table tbody tr td input{background:var(--bg-light);color:var(--text-dark);font-size:var(--font-15)!important}.pageLevelAccessTable table thead tr th a:hover,.pageLevelAccessTable table tbody tr td a:hover{text-decoration:none}:host ::ng-deep .p-inputnumber-input{width:50px;margin-left:15px}@media screen and (max-width: 990px){:host ::ng-deep .selected-list .c-list{width:calc(100% - 35px)!important}.pageLevelAccessTable{width:100%;overflow:auto}.pageLevelAccessTable .table{margin-bottom:60px}}:host ::ng-deep .dynamic-search .p-component{font-size:var(--font-13)}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary);font-size:var(--font-16);font-weight:400}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}:host ::ng-deep .policygroup-v2 .selected-list .c-list .c-token{background-color:#f6fcff;color:#000;border:1px solid #D9D9D9;width:100%;margin:3px 0}:host ::ng-deep .policygroup-v2 .selected-list .c-list .c-token .c-remove{position:absolute;right:12px;top:50%;transform:translateY(-50%);width:10px;height:10px;margin-top:-5px;opacity:.8}:host ::ng-deep .policygroup-v2 .selected-list .c-list .c-token .c-remove svg{fill:#000;border:1px solid #000;border-radius:100%;width:14px;height:14px;padding:2px}:host ::ng-deep .policygroup-v2 .clear-all{display:none}:host ::ng-deep .rbac-card .dd-stand-size .p-dropdown{width:100%!important}:host ::ng-deep .pa-title{margin-top:-5px}.radio-button-container{position:relative;cursor:pointer;-webkit-user-select:none;user-select:none}.radio-button-container input{position:absolute;opacity:0;cursor:pointer;text-indent:-9000px}.checkmark{position:absolute;top:0;left:-10.5px;height:18px;width:18px;background-color:#0000;border-radius:50%;border:2px solid #D6D5D5;transition:all .3s}.radio-button-container:hover input~.checkmark{border-color:var(--primary)}.radio-button-container:focus input~.checkmark{outline:0;box-shadow:0 0 0 .2rem #0086d1}.radio-button-container input:checked~.checkmark{background-color:#0000;border-color:var(--primary)}.checkmark:after{content:\"\";position:absolute;display:none}.radio-button-container input:checked~.checkmark:after{display:block}.radio-button-container .checkmark:after{top:3px;left:3px;width:8px;height:8px;border-radius:50%;background:var(--primary)}.radio-button-container input[type=radio]:disabled+span.checkmark{opacity:.8;pointer-events:none}.g-checkbox{margin-bottom:0}:host ::ng-deep .p-multiselect-label>div{width:calc(33% - 5px);display:inline-block;margin:0 5px 0 0}.asset-path-info{position:relative;top:2px;cursor:default;margin-left:3px}\n"], dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1$1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1$1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { kind: "directive", type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i9.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i7.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i9$1.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "raised", "rounded", "text", "plain", "severity", "outlined", "link", "size", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "component", type: i10.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i10.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "directive", type: i11.InputText, selector: "[pInputText]" }, { kind: "component", type: i12.InputNumber, selector: "p-inputNumber", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabelledBy", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "disabled"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "directive", type: i13.InputTextarea, selector: "[pInputTextarea]", inputs: ["autoResize"], outputs: ["onResize"] }, { kind: "component", type: i14.MultiSelect, selector: "p-multiSelect", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }, { kind: "component", type: i17.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i17.MatCardContent, selector: "mat-card-content" }, { kind: "directive", type: i5$1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i5$1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: ManageAccessRadioComponent, selector: "app-manage-access-radio", inputs: ["reloadForm"], outputs: ["accessBy", "policyDropdown", "roleDropdown", "userDropdown", "dropDownSelectedValues"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PageaccessComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pageaccess', template: "<app-alert></app-alert>\r\n<div class=\"row rbac-card\">\r\n  <div class=\"col-12\">\r\n    <mat-card class=\"mat-card\">\r\n      <mat-card-content class=\"p-2\">\r\n        <form [formGroup]=\"rbacForm\">\r\n          <app-manage-access-radio (accessBy)=\"accessBy($event)\" (userDropdown)=\"userDropdown($event)\"\r\n            (roleDropdown)=\"roleDropdown($event)\" (policyDropdown)=\"policyDropdown($event)\"\r\n            (dropDownSelectedValues)=\"dropDownSelectedValues($event)\"></app-manage-access-radio>\r\n          <h3 class=\"radio-title mt-1 mb-2 pa-title\">Page Access Management</h3>\r\n          <mat-card class=\"mat-card\">\r\n            <mat-card-content class=\"p-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"false\">\r\n                  <label class=\"radio-title\">Modules</label>\r\n                  <!-- <angular2-multiselect [data]=\"moduleList\" [settings]=\"moduleDropdownSettings\"\r\n                    onSelect=\"loadSubModule('click')\" onDeSelect=\"removeSubModule($event)\"\r\n                    onSelectAll=\"loadSubModule('click')\" onDeSelectAll=\"removeAllSubModule()\"\r\n                    formControlName=\"module\"></angular2-multiselect> -->\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"false\">\r\n                  <label class=\"radio-title\">Sub Modules</label>\r\n                  <!-- <angular2-multiselect [data]=\"subModuleList\" [settings]=\"submoduleDropdownSettings\"\r\n                    onSelect=\"loadSubModulePage('click')\" onDeSelect=\"removeSubModulePage($event, 'submodule')\"\r\n                    onSelectAll=\"loadSubModulePage('click')\" onDeSelectAll=\"removeAllSubModulePage()\"\r\n                    formControlName=\"submodule\">\r\n                  </angular2-multiselect> -->\r\n                </div>\r\n\r\n                <div class=\"col-lg-7 mb-3\">\r\n                  <p-accordion class=\"w-full policygroup-accordion\" iconPos=\"endVal\">\r\n                    <p-accordionTab>\r\n                      <ng-template pTemplate=\"header\">\r\n                        <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                          <span class=\"font-bold\">\r\n                            <label aria-labelledby=\"policyGroupList\" for=\"policyGroupList\"\r\n                              class=\"mb-0 referral-form-labels\">Pages\r\n\r\n                              <span *ngIf=\"selectedPageData.length > 0\"\r\n                                class=\"pg-count ml-2\">{{selectedPageData.length}}</span>\r\n                            </label>\r\n                          </span>\r\n                        </span>\r\n                      </ng-template>\r\n                      <!-- <angular2-multiselect [data]=\"pagesList\" [settings]=\"pageDropdownSettings\"\r\n                        (onSelect)=\"populatePage('click',true,$event)\" fieldKey=\"SETTINGS_PAG_ACC_PAGE\"\r\n                        (onDeSelect)=\"populatePage('click',false,$event)\"\r\n                        (onSelectAll)=\"populatePage('click',true,$event)\" (onDeSelectAll)=\"removeAllPopulatePage()\"\r\n                        formControlName=\"pageList\"></angular2-multiselect> -->\r\n                      <p-multiSelect [options]=\"pagesList\" formControlName=\"pageList\" fieldKey=\"SETTINGS_PAG_ACC_PAGE\"\r\n                        defaultLabel=\"Select Pages\" display=\"chip\" optionLabel=\"pagename\" [autoDisplayFirst]=\"false\"\r\n                        styleClass=\"policygroup-v2 w-100\" (onChange)=\"populatePage('click',true,$event)\" [resetFilterOnHide]=\"true\"\r\n                        (onFilter)= \"onFilterPages($event)\">\r\n                        <ng-template let-value pTemplate=\"selectedItems\">\r\n                          <div *ngFor=\"let option of value\">\r\n                            <div #selectedpg class=\"p-multiselect-token\" [ngClass]=\"option.disabled ? 'disabled' : '' \"\r\n                              id=\"{{option.id}}\">\r\n                              <span class=\"policygroupname\" pTooltip=\"{{option?.pagename}}\" tooltipPosition=\"top\">\r\n                                {{ option.pagename }}\r\n                              </span>\r\n                              <em class=\"pi pi-times-circle ml-2 clear-icon right-sec\" *ngIf=\"!option.disabled\"\r\n                                role=\"button\" (click)=\"removeValue($event, selectedpg)\"></em>\r\n                            </div>\r\n                          </div>\r\n                          <div *ngIf=\"!value || value.length === 0\">Select Pages</div>\r\n                        </ng-template>\r\n                      </p-multiSelect>\r\n                    </p-accordionTab>\r\n                  </p-accordion>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n                  <label class=\"radio-title d-block required\">Provide Access by </label>\r\n                  <mat-radio-group formControlName=\"provideAccess\" (change)=\"showLevelAccess($event.value)\">\r\n                    <mat-radio-button value=\"1\" fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL\">Page\r\n                      Level&nbsp;&nbsp;</mat-radio-button>\r\n                    <mat-radio-button value=\"2\" fieldKey=\"SETTINGS_PAG_ACC_PAG_FIELD_LEVEL\">Field\r\n                      Level</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-6 col-12 mb-3\" *ngIf=\"fieldLevelAccess\">\r\n                  <label class=\"radio-title\">Select Page</label>\r\n                  <br />\r\n                  <p-dropdown id=\"selectpage\" ariaLabelledBy=\"selectpage\" [options]=\"selectedPageDataFilter\"\r\n                    fieldKey=\"SETTINGS_PAG_ACC_PAGE\" [filter]=\"true\"\r\n                    [showClear]=\"fieldLevelCheckCount && fieldLevelCheckCount?.length\" [resetFilterOnHide]=\"true\"\r\n                    (onChange)=\"getFieldLevelList('click')\" formControlName=\"fpages\" optionLabel=\"pagename\"\r\n                    optionValue=\"id\" placeholder=\"Select a page\" class=\"dd-stand-size\">\r\n                    <ng-template let-item pTemplate=\"selectedItem\">\r\n                      <div pTooltip=\"{{item?.pagename}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.pagename\r\n                        }}</div>\r\n                    </ng-template>\r\n                    <ng-template let-object pTemplate=\"item\">\r\n                      {{ object.pagename }}\r\n                    </ng-template>\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"pageLevelAccess\" class=\"row\">\r\n                <div class=\"col-12 mt-3 pageLevelAccessTable\">\r\n                  <table aria-describedby=\"pageLevelAccessTable\" class=\"table table-bordered\">\r\n                    <col />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 25%\" *ngIf=\"false\" />\r\n                    <col style=\"width: 20%\" />\r\n                    <thead>\r\n                      <th class=\"text-left\">Page Name</th>\r\n                      <th scope=\"col\" class=\"text-center\">Create</th>\r\n                      <th scope=\"col\" class=\"text-center\">Read</th>\r\n                      <th scope=\"col\" class=\"text-center\">Update1</th>\r\n                      <th scope=\"col\" class=\"text-center\">Delete</th>\r\n                      <th scope=\"col\" class=\"text-center\">None</th>\r\n                      <th class=\"text-center\" *ngIf=\"false\">Validity</th>\r\n                      <th class=\"text-center\">Data Access</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <ng-container formArrayName=\"pageLevelData\"\r\n                        *ngFor=\"let fAccess of rbacForm.get('pageLevelData')['controls']; let i = index\">\r\n                        <tr [formGroup]=\"rbacForm.get('pageLevelData')['controls'][i]\">\r\n                          <td class=\"text-left\">\r\n                            <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                              formControlName=\"pageName\" placeholder=\"pageleveldata\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'c')\"\r\n                                formControlName=\"pageAccessCreate\" type=\"checkbox\" value=\"1\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'r')\" formControlName=\"pageAccessRead\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ\" type=\"checkbox\" value=\"2\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'u')\"\r\n                                formControlName=\"pageAccessUpdate\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE\" type=\"checkbox\" value=\"5\">\r\n                                <a href=\"javascript:void(0)\" (click) = \"showPopup()\" >Conditional</a>\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'d')\"\r\n                                formControlName=\"pageAccessDelete\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE_DELETE\" type=\"checkbox\" value=\"6\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <label class=\"g-checkbox\">\r\n                              <input (change)=\"changePageAccess(i,'n')\" formControlName=\"pageAccessNone\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_NONE\" type=\"checkbox\" value=\"4\">\r\n                            </label>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"false\" >\r\n                            <ng-container *ngIf=\"\r\n                                  rbacForm.get('pageList')?.value[i]?.activeVersion?.gridconfig ||\r\n                                  rbacForm.get('pageList')?.value[i]?.gridconfig\r\n                                \">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" [disabled]=\"fAccess?.value?.pageAccess === '4'\"\r\n                                optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <p-inputNumber type=\"number\" class=\"validity\"\r\n                                *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [readonly]=\"fAccess?.value?.pageAccess === '4'\" [min]=\"1\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_VALIDITY\" formControlName=\"validity\"\r\n                                mode=\"decimal\"></p-inputNumber>\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.pageAccess === '3' || fAccess?.value?.pageAccess === '4'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </ng-container>\r\n                          </td>\r\n                          <td class=\"text-center\" >\r\n                            <ng-container *ngIf=\"\r\n                              rbacForm.get('pageList')?.value[i]?.activeVersion?.gridconfig ||\r\n                              rbacForm.get('pageList')?.value[i]?.gridconfig\r\n                              \">\r\n                              <p-dropdown [options]=\"dataAccess\" styleClass=\"condition\"\r\n                                formControlName=\"accessdata\"\r\n                                placeholder=\"Select a permission\"\r\n                                optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                            </ng-container>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\"\r\n                *ngIf=\"showFieldGrid && fieldLevelCheckCount?.length > 0 && fieldLevelAccess && fieldPageLevel?.length > 0\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table aria-describedby=\"fieldLevelAccessTable\" class=\"table table-bordered\">\r\n                      <col />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col *ngIf=\"false\" />\r\n                      <col />\r\n                      <thead>\r\n                        <th class=\"text-left\">Field Name</th>\r\n                        <th class=\"text-center\">Create</th>\r\n                        <th class=\"text-center\">Read</th>\r\n                        <th class=\"text-center\">Update</th>\r\n                        <th class=\"text-center\">None</th>\r\n                        <th class=\"text-center\" *ngIf=\"showFieldValidity && false\">Validity</th>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container formArrayName=\"fieldLevelData\"\r\n                          *ngFor=\"let fAccess of rbacForm.get('fieldLevelData')['controls']; let i = index\">\r\n                          <tr [formGroupName]=\"i\">\r\n                            <td class=\"text-left\">\r\n                              {{ fData[i]['displayname'] }}\r\n                              <span class=\"pi pi-info-circle asset-path-info\" pTooltip=\"Asset Path: {{ fData[i]['assetpath'] }}\" tooltipPosition=\"right\" ></span>\r\n                              <input type=\"hidden\" formControlName=\"assetid\" value=\"{{ fData[i]['id'] }}\" />\r\n                              <input type=\"hidden\" formControlName=\"pageId\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessCreate\" (change)=\"changeFieldAccess($event, i, 'c')\"\r\n                                  type=\"checkbox\" value=\"3\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessRead\" (change)=\"changeFieldAccess($event, i, 'r')\"\r\n                                  type=\"checkbox\" value=\"2\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessUpdate\" (change)=\"changeFieldAccess($event, i, 'u')\"\r\n                                  type=\"checkbox\" value=\"\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessHide\" (change)=\"changeFieldAccess($event, i, 'h')\"\r\n                                  type=\"checkbox\" value=\"4\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\" *ngIf=\"showFieldValidity && false\">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\"\r\n                                [disabled]=\"fAccess?.value?.access === '4'\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <input type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [min]=\"1\" formControlName=\"validity\" [readonly]=\"fAccess?.value?.access === '4'\"\r\n                                style=\"width: 50px; margin-left: 15px\" pInputText />\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.access === '4' || fAccess?.value?.access === '3'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- This code for field access for grid page -->\r\n              <div class=\"row\"\r\n                *ngIf=\"showFieldGrid && fieldLevelCheckCount?.length > 0 && fieldLevelAccess && fieldPageLevel?.length === 0\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table aria-describedby=\"fieldLevelAccessTable\" class=\"table table-bordered\">\r\n                      <col />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col *ngIf=\"false\" />\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"text-left\">Field Name</th>\r\n                          <th class=\"text-center\">Read</th>\r\n                          <!-- <th class=\"text-center\">Write</th> -->\r\n                          <th class=\"text-center\">None</th>\r\n                          <th class=\"text-center\" *ngIf=\"showFieldValidity && false\">Validity</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container formArrayName=\"fieldLevelData\"\r\n                          *ngFor=\"let fAccess of rbacForm.get('fieldLevelData')['controls']; let i = index\">\r\n                          <tr [formGroupName]=\"i\">\r\n                            <td class=\"text-left\">\r\n                              {{ fData[i]['displayname'] }}\r\n                              <input type=\"hidden\" formControlName=\"assetid\" value=\"{{ fData[i]['id'] }}\" />\r\n                              <input type=\"hidden\" formControlName=\"pageId\" name=\"permissiongroup_{{i}}\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessRead\" (change)=\"changeFieldAccess($event, i,'r')\" type=\"checkbox\">\r\n                              </label>\r\n                            </td>\r\n                            <!-- <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\" value=\"2\" />\r\n                            </td> -->\r\n                            <td class=\"text-center\">\r\n                              <label class=\"g-checkbox\">\r\n                                <input formControlName=\"fieldAccessHide\" (change)=\"changeFieldAccess($event, i, 'h')\" type=\"checkbox\">\r\n                              </label>\r\n                            </td>\r\n                            <td class=\"text-center\" *ngIf=\"showFieldValidity && false\">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\"\r\n                                [disabled]=\"fAccess?.value?.access === '4'\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <input type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [min]=\"1\" formControlName=\"validity\" [readonly]=\"fAccess?.value?.access === '4'\"\r\n                                style=\"width: 50px; margin-left: 15px\" pInputText />\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.access === '4' || fAccess?.value?.access === '3'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </form>\r\n        <div class=\"mt-3\" *ngIf=\"policyGroupPages.length && !fieldLevelAccess && selectedAccess === 'role'\">\r\n          <p-accordion class=\"w-full dynamic-search\" iconPos=\"endVal\">\r\n            <p-accordionTab>\r\n              <ng-template pTemplate=\"header\">\r\n                <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                  <span class=\"font-bold\">Policy Groups associated with {{ selectedName }} Role</span>\r\n                </span>\r\n              </ng-template>\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-content>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 mt-1\" *ngFor=\"let policyGroup of policyGroupPages\">\r\n                      <div class=\"radio-title mb-2\">Policy Group: {{ policyGroup?.policygroup?.policygroupname }}</div>\r\n                      <!-- It shows associated Roles -->\r\n                      <div class=\"table-responsive\">\r\n                        <table id=\"policyGroupTable\" aria-describedby=\"policyGroupTable\" class=\"table table-bordered\">\r\n                          <col />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\" class=\"text-left\">Page Name</th>\r\n                              <th scope=\"col\" class=\"text-center\">Create</th>\r\n                              <th scope=\"col\" class=\"text-center\">Read</th>\r\n                              <th scope=\"col\" class=\"text-center\">Update</th>\r\n                              <th scope=\"col\" class=\"text-center\">Delete</th>\r\n                              <th scope=\"col\" class=\"text-center\">None</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let page of policyGroup?.policygrouppage\">\r\n                              <tr>\r\n                                <td class=\"text-left\">\r\n                                  <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                                    title=\"page?.page?.activeVersion?.pagename\"\r\n                                    [value]=\"page?.page[0]?.activeVersion?.pagename\" />\r\n                                </td>\r\n\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.c\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.r\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.u\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.d\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.hide\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"policyGroupPages?.length === 0\">\r\n                              <tr>\r\n                                <td class=\"text-center\" colspan=\"4\">No pages associated with Policy Group.</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </p-accordionTab>\r\n          </p-accordion>\r\n\r\n        </div>\r\n        <div class=\"mt-3\" *ngIf=\"policyGroupRolePages.length && !fieldLevelAccess && selectedAccess === 'policygroup'\">\r\n          <p-accordion class=\"w-full dynamic-search\" iconPos=\"endVal\">\r\n            <p-accordionTab>\r\n              <ng-template pTemplate=\"header\">\r\n                <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                  <span class=\"font-bold\">Roles associated with {{ selectedName }} Policy Group</span>\r\n                </span>\r\n              </ng-template>\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-content>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 mt-1\" *ngFor=\"let role of policyGroupRolePages\">\r\n                      <div class=\"radio-title mb-2\">Role: {{ role?.role?.name }}</div>\r\n                      <!-- It shows associated policygroups -->\r\n                      <div class=\"table-responsive\">\r\n                        <table id=\"policyGroupTable\" aria-describedby=\"policyGroupTable\" class=\"table table-bordered\">\r\n                          <col />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <col style=\"width: 100px\" />\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\" class=\"text-left\">Page Name</th>\r\n                              <th scope=\"col\" class=\"text-center\">Create</th>\r\n                              <th scope=\"col\" class=\"text-center\">Read</th>\r\n                              <th scope=\"col\" class=\"text-center\">Update</th>\r\n                              <th scope=\"col\" class=\"text-center\">Delete</th>\r\n                              <th scope=\"col\" class=\"text-center\">None</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let page of role?.rolepage\">\r\n                              <tr>\r\n                                <td class=\"text-left\">\r\n                                  <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                                    title=\"page?.page?.activeVersion?.pagename\"\r\n                                    [value]=\"page?.page[0]?.activeVersion?.pagename\" />\r\n                                </td>\r\n\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.c\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.r\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.u\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.d\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <label class=\"g-checkbox\">\r\n                                    <input disabled [checked]=\"page?.hide\" type=\"checkbox\">\r\n                                  </label>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"policyGroupRolePages?.length === 0\">\r\n                              <tr>\r\n                                <td class=\"text-center\" colspan=\"4\">No pages associated with Role.</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </p-accordionTab>\r\n          </p-accordion>\r\n\r\n        </div>\r\n        <div class=\"text-right mt-3\" *ngIf=\"multiPageAccess\">\r\n          <!-- <button class=\"btn btn-primary mr-2\" fieldKey=\"SETTINGS_PAG_ACC_BACK\" (click)=\"redirectList()\">Back</button> -->\r\n          <!-- <button class=\"btn btn-cancel mr-2\" fieldKey=\"SETTINGS_PAG_ACC_CLEAR\" (click)=\"resetForm()\">Clear</button> -->\r\n          <button class=\"btn btn-primary\" fieldKey=\"SETTINGS_PAG_ACC_SAVE\" (click)=\"submitAlert()\"\r\n            [disabled]=\"(pagelevelaccesssavedisable && pagelevelaccesscountdisable) || (enablesave && pagelevelaccesscount && pagelevelaccesscount?.length > 0)\">Save</button>\r\n        </div>\r\n        <div class=\"text-right mt-3\" *ngIf=\"!multiPageAccess\">\r\n          <!-- <button class=\"btn btn-primary mr-2\" fieldKey=\"SETTINGS_PAG_ACC_BACK\" (click)=\"redirectList()\">Back</button> -->\r\n          <!-- <button class=\"btn btn-cancel mr-2\" fieldKey=\"SETTINGS_PAG_ACC_CLEAR\" (click)=\"resetForm()\">Clear</button> -->\r\n          <button class=\"btn btn-primary\" fieldKey=\"SETTINGS_PAG_ACC_SAVE\" (click)=\"submitAlert()\"\r\n            [disabled]=\"((multiPageAccess) || (fieldLevelCheckCount && fieldLevelCheckCount?.length === 0) || (enablesave && fieldLevelCheckCount && fieldLevelCheckCount?.length > 0) || (!pagelevelaccesscount || pagelevelaccesscount?.length === 0))\">Save</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"submitAlert\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>Field Level Access is already present for this Page. Modifying the Page Level Access will remove all Field\r\n          Level\r\n          Access. Do you want to proceed?</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"saveRbac()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"getSelectedPages()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #validationPopup let-modal>\r\n  <div class=\"modal-body p-3\">\r\n    <div class=\"reset-password-div\">\r\n      <textarea rows=\"3\" cols=\"30\" pInputTextarea\r\n        placeholder=\"Add Condition\" maxlength=\"4000\" class=\"form-control no-resize\"\r\n        [(ngModel)]=\"additionalConditions\">\r\n      </textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer p-3\">\r\n    <p-button label=\"Save\" styleClass=\"btn px-3 py-1 mr-2 \"> </p-button>\r\n    <p-button label=\"Cancel\" styleClass=\"btn px-3 py-1 mr-2 \"> </p-button>\r\n  </div>\r\n</ng-template>\r\n", styles: [".mat-card-content .mat-radio-group .mat-radio-button{padding-right:10px;font-family:Roboto,sans-serif!important}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}:host ::ng-deep .p-dropdown.nobg{background-color:transparent;border:none}:host ::ng-deep .p-dropdown.nobg:hover,:host ::ng-deep .p-dropdown.nobg:focus{background-color:transparent!important;border:none!important}.pageLevelAccessTable table thead tr th,.pageLevelAccessTable table tbody tr td{vertical-align:middle;color:var(--text-dark)}.pageLevelAccessTable table thead tr th input,.pageLevelAccessTable table tbody tr td input{background:var(--bg-light);color:var(--text-dark);font-size:var(--font-15)!important}.pageLevelAccessTable table thead tr th a:hover,.pageLevelAccessTable table tbody tr td a:hover{text-decoration:none}:host ::ng-deep .p-inputnumber-input{width:50px;margin-left:15px}@media screen and (max-width: 990px){:host ::ng-deep .selected-list .c-list{width:calc(100% - 35px)!important}.pageLevelAccessTable{width:100%;overflow:auto}.pageLevelAccessTable .table{margin-bottom:60px}}:host ::ng-deep .dynamic-search .p-component{font-size:var(--font-13)}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary);font-size:var(--font-16);font-weight:400}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}:host ::ng-deep .policygroup-v2 .selected-list .c-list .c-token{background-color:#f6fcff;color:#000;border:1px solid #D9D9D9;width:100%;margin:3px 0}:host ::ng-deep .policygroup-v2 .selected-list .c-list .c-token .c-remove{position:absolute;right:12px;top:50%;transform:translateY(-50%);width:10px;height:10px;margin-top:-5px;opacity:.8}:host ::ng-deep .policygroup-v2 .selected-list .c-list .c-token .c-remove svg{fill:#000;border:1px solid #000;border-radius:100%;width:14px;height:14px;padding:2px}:host ::ng-deep .policygroup-v2 .clear-all{display:none}:host ::ng-deep .rbac-card .dd-stand-size .p-dropdown{width:100%!important}:host ::ng-deep .pa-title{margin-top:-5px}.radio-button-container{position:relative;cursor:pointer;-webkit-user-select:none;user-select:none}.radio-button-container input{position:absolute;opacity:0;cursor:pointer;text-indent:-9000px}.checkmark{position:absolute;top:0;left:-10.5px;height:18px;width:18px;background-color:#0000;border-radius:50%;border:2px solid #D6D5D5;transition:all .3s}.radio-button-container:hover input~.checkmark{border-color:var(--primary)}.radio-button-container:focus input~.checkmark{outline:0;box-shadow:0 0 0 .2rem #0086d1}.radio-button-container input:checked~.checkmark{background-color:#0000;border-color:var(--primary)}.checkmark:after{content:\"\";position:absolute;display:none}.radio-button-container input:checked~.checkmark:after{display:block}.radio-button-container .checkmark:after{top:3px;left:3px;width:8px;height:8px;border-radius:50%;background:var(--primary)}.radio-button-container input[type=radio]:disabled+span.checkmark{opacity:.8;pointer-events:none}.g-checkbox{margin-bottom:0}:host ::ng-deep .p-multiselect-label>div{width:calc(33% - 5px);display:inline-block;margin:0 5px 0 0}.asset-path-info{position:relative;top:2px;cursor:default;margin-left:3px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: DataStoreService }, { type: i3.Router }, { type: AlertService }]; }, propDecorators: { AddComponent: [{
                type: ViewChild,
                args: [ManageAccessRadioComponent]
            }], validationPopup: [{
                type: ViewChild,
                args: ['validationPopup', { static: false }]
            }] } });

class RbacPageaccessComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    accessEvent;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.accessEvent.subscribe(val => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPageaccessComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RbacPageaccessComponent, selector: "rbac-pageaccess", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", accessEvent: "accessEvent" }, ngImport: i0, template: `
   <lib-pageaccess></lib-pageaccess>
  `, isInline: true, dependencies: [{ kind: "component", type: PageaccessComponent, selector: "lib-pageaccess" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacPageaccessComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rbac-pageaccess', template: `
   <lib-pageaccess></lib-pageaccess>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], accessEvent: [{
                type: Input
            }] } });

class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class MicrostrategyService {
    http;
    alertService;
    permissionStore;
    _storeservice;
    dossierList;
    RBACORG;
    environment;
    constructor(http, alertService, permissionStore, _storeservice) {
        this.http = http;
        this.alertService = alertService;
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getAuthToken() {
        const body = {
            username: this.environment.mstrUsername,
            password: this.environment.mstrPassword,
            loginMode: 1
        };
        return this.http.post(`${this.environment.mstrURL}/api/auth/login`, body, {
            withCredentials: true,
            headers: { 'Content-type': 'application/json' },
            observe: 'response'
        });
    }
    getDossier(projectId, dossierId, pageNo) {
        const permissions = this.permissionStore.state;
        const projectUrl = `${this.environment.mstrURL}/app/${projectId}`;
        const dossierUrl = `${projectUrl}/${dossierId}/${pageNo}`;
        microstrategy.dossier
            .create({
            placeholder: document.getElementById('dossierContainer'),
            url: dossierUrl,
            navigationBar: {
                enabled: true,
                gotoLibrary: permissions?.ANA_LIBRARY,
                title: true,
                toc: true,
                reset: true,
                reprompt: true,
                share: true,
                comment: true,
                notification: true,
                filter: true,
                options: true,
                search: true,
                bookmark: true
            },
            enableCustomAuthentication: true,
            enableResponsive: false,
            containerWidth: 400,
            containerHeight: 400,
            customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
            getLoginToken: async () => {
                const response = await this.getAuthToken().toPromise();
                return response.headers.get('x-mstr-authtoken');
            }
        })
            .catch((_err) => this.alertService.error(`Failed to connect ${this.environment.mstrURL}`));
    }
    async getLibraryDetails() {
        const token = await this.getAuthToken().toPromise();
        const authtoken = token.headers.get('x-mstr-authtoken');
        const headerInfo = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-MSTR-AuthToken': authtoken ? authtoken : '',
            'X-MSTR-ProjectID': this.environment.mstrProjectID
        };
        return this.http
            .get(`${this.environment.mstrURL}/api/library`, {
            withCredentials: true,
            headers: headerInfo
        })
            .toPromise()
            .then((response) => {
            return response.map((mstr) => ({
                id: mstr.target.id,
                projectId: mstr.projectId,
                name: mstr.target.name
            }));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, deps: [{ token: i1$2.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

class RbacService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllPolicyGroupList(policyGroupId) {
        const endPoint = policyGroupId
            ? `${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${policyGroupId}`
            : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
        return this.httpService.get(endPoint);
    }
    getPolicyGroupById(id) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
    }
    getPolicyGroupsByManagementGroup(policyGroupId) {
        return this.httpService.get(`/org/policyGroup/managementgroup/${policyGroupId}`);
    }
    createPolicyGroup(data) {
        return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
    }
    updatePolicyGroup(id, item) {
        return this.httpService.put(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`, item);
    }
    deletePolicyGroup(id) {
        return this.httpService.delete(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`);
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    deleteRole(id) {
        return this.httpService.delete(`${RoleConfig.EndPoint.role.getAllUserRole}/${id}`);
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
    createRole(data) {
        return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
    }
    updateRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleId}`, data);
    }
    getLandingPage(id) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getLandingPage}/${id}`);
    }
    createPolicyGroupForRole(roleId, data) {
        return this.httpService.post(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    updatePolicyGroupForRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    getReportDashbaord() {
        return this.httpService.get(`${RoleConfig.EndPoint.role.dossier}`);
    }
    getPermissionRoleById(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    getPermissionsTree(applicationid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PrimengModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule], exports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, imports: [CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule, CommonModule,
            AccordionModule,
            TabMenuModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            CheckboxModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            DropdownModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            CardModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            AlertModule,
            ConfirmDialogModule,
            TreeSelectModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            TabViewModule,
            SidebarModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PrimengModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        AlertModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule
                    ],
                    exports: [
                        CommonModule,
                        AccordionModule,
                        TabMenuModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        DropdownModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        CardModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        AlertModule,
                        ConfirmDialogModule,
                        TreeSelectModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        TabViewModule,
                        SidebarModule
                    ]
                }]
        }] });

class FilterPipe {
    transform(value, input) {
        if (input) {
            return value.filter(val => val.toLowerCase().indexOf(input.toLowerCase()) >= 0);
        }
        else {
            return value;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, name: "FilterPipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'FilterPipe'
                }]
        }] });

class MaskPipe {
    transform(value, showSsnMask) {
        if (showSsnMask === true) {
            if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return '***-**-' + String(value).substring(String(value).length - 4);
            }
            else {
                return '';
            }
        }
        else {
            const cleaned = ('' + value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            else if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
            }
            else {
                return '';
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, name: "ssnMask" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ssnMask' }]
        }] });

class SharedPipesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe], imports: [CommonModule], exports: [MaskPipe, FilterPipe] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, providers: [MaskPipe, FilterPipe], imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [MaskPipe, FilterPipe],
                    exports: [MaskPipe, FilterPipe],
                    providers: [MaskPipe, FilterPipe]
                }]
        }] });

class GridListService {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class GridListComponent {
    router;
    auth;
    localstorage;
    dataGrid;
    dataList = [];
    dataSource;
    columns;
    updateGrid;
    totalCount;
    page;
    isShow;
    remoteOperations;
    enableExport;
    showHeaderFilter;
    exportPageName;
    narrativeData;
    set pageSize(value) {
        if (value) {
            this.currentPageSize = value;
        }
        else {
            this.currentPageSize = 20;
        }
    }
    currentPage = new EventEmitter();
    pageIndex = new EventEmitter();
    currentSize = new EventEmitter();
    editTableRow = new EventEmitter();
    viewTableRow = new EventEmitter();
    deleteTableRow = new EventEmitter();
    openExternalLink = new EventEmitter();
    openpopupLink = new EventEmitter();
    routeTo = new EventEmitter();
    openPopup = new EventEmitter();
    duplicateRow = new EventEmitter();
    sortOrder = new EventEmitter();
    filterSearchValue = new EventEmitter();
    filterBuilderPopup = new EventEmitter();
    filterPanel = new EventEmitter();
    multipleFilterValues = new EventEmitter();
    downloadTableRow = new EventEmitter();
    toggleRow = new EventEmitter();
    outComeTableRow = new EventEmitter();
    downloadFormResponseFiles = new EventEmitter();
    deleteFormResponseFiles = new EventEmitter();
    rowSelection = new EventEmitter();
    navigate = new EventEmitter();
    multipleFilterValueToAPI = new EventEmitter();
    selectedRowsData = new EventEmitter();
    dataField;
    columnHeader;
    popupPosition;
    filterValue;
    customOperations;
    fields;
    customStore;
    tempColumns;
    Organization;
    dUrl;
    rdUrl;
    rUrl;
    user;
    displayMode;
    currentPageSize;
    currentFilter;
    headerFilterData;
    constructor(router, auth, localstorage) {
        this.router = router;
        this.auth = auth;
        this.localstorage = localstorage;
        /**
         * initiating the grid list
         */
        this.loadGWithParam();
        /**
         * fetching login details from local storage
         */
        this.user = this.localstorage.getObj('user');
        this.displayMode = 'compact';
        this.currentFilter = 'auto';
    }
    ngOnInit() {
        this.rUrl = this.router.url.split('/');
        this.tempColumns = this.columns;
        if (this.columns && this.columns.gridConfigFormArray) {
            this.columnHeader = this.columns.gridConfigFormArray.map(column => column.header);
            this.columns = this.columns.gridConfigFormArray;
        }
        else {
            this.columnHeader = this.columns.map(column => column.header);
        }
        this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
        this.filterValue = [];
        this.customOperations = [];
    }
    /**
     * re-render the grid when input data is changed.
     */
    ngOnChanges() {
        this.loadGWithParam();
    }
    /**
     * Rendering data grid condition wise that login user is admin or not
     */
    loadGWithParam() {
        if (!this.auth.isAdmin()) {
            this.loadGrid({ value: !this.Organization ? this.auth.getOrgID() : this.Organization }, false);
        }
        else {
            this.loadGrid({ value: this.Organization ? this.Organization : 'Select-ALL' }, false);
        }
    }
    ngAfterViewInit() {
        /**
         * Datagrid even listener we can customize column event
         */
        this.dataGrid.onRowClick.subscribe(row => {
            this.selectedRowsData.emit(row);
        });
        this.dataGrid.onOptionChanged.subscribe(e => {
            if (e.name === 'columns' && e.fullName.endsWith('filterValues')) {
                const colIndex = Number(e.fullName
                    .match(/\[\d+\]/)[0]
                    .replace('[', '')
                    .replace(']', ''));
                e.component.columnOption(colIndex, 'filterValues');
                this.multipleFilterValues.emit(e);
            }
            // Search
            if (e.name === 'columns' && e.fullName.endsWith('filterValue')) {
                console.log(e);
                this.filterSearchValue.emit(e);
            }
            // filter Builder Popup
            if (e.name === 'filterBuilderPopup') {
                console.log('filterBuilderPopup');
                console.log(e);
                this.filterBuilderPopup.emit(e);
            }
            // filter Panel - enable or disable
            if (e.name === 'filterPanel') {
                console.log(e.value);
                this.filterPanel.emit(e);
            }
            // Sorting
            if (e.name === 'columns' && e.fullName.endsWith('sortOrder')) {
                this.sortOrder.emit(e);
            }
            // Paging
            if (e.name === 'paging') {
                this.currentPage.emit(e.value);
            }
            // pageIndex
            if (e.fullName === 'paging.pageIndex') {
                this.pageIndex.emit(e.value);
            }
            // pageSize
            if (e.fullName === 'paging.pageSize') {
                this.currentSize.emit(e.value);
            }
        });
    }
    /**
     * Generating data grid and restructuring data for Developer grid
     * @param orgID origination details
     * @param load optional boolean is for checking data should load organization respective or all
     */
    loadGrid(orgID, load = true) {
        this.Organization = orgID.value;
        if (load) {
            this.currentPage.emit(orgID.value === 'Select-ALL' ? 'all' : orgID.value);
        }
        if (this.dataList?.length && this.rUrl && this.rUrl[2] === 'view-dashboard') {
            this.dUrl = 'view-dashboard/dashboard';
            this.router.navigateByUrl(`pages/${this.dUrl}/${this.dataList[0]['id']}`);
        }
        this.customStore = new CustomStore({
            load: _opts => {
                this.multipleFilterValueToAPI.emit(_opts.filter);
                return Promise.resolve(this.dataList);
            },
            totalCount: _opts => {
                return Promise.resolve(this.totalCount);
            }
        });
    }
    getRouter(data) {
        this.routeTo.emit(data);
    }
    navigateTo(data) {
        this.navigate.emit(data);
    }
    popup(data) {
        this.openPopup.emit(data);
    }
    downloadData(evt) {
        this.downloadTableRow.emit(evt);
    }
    editData(evt) {
        this.editTableRow.emit(evt);
    }
    editDataMyApplciation(evt) {
        this.editTableRow.emit(evt);
    }
    editAppeal(evt) {
        this.editTableRow.emit(evt);
    }
    onSelectionChanged(evt) {
        this.rowSelection.emit(evt);
    }
    viewData(evt) {
        this.viewTableRow.emit(evt);
    }
    deleteData(evt) {
        this.deleteTableRow.emit(evt);
    }
    duplicateDate(evt) {
        this.duplicateRow.emit(evt);
    }
    openLink(evt) {
        this.openExternalLink.emit(evt);
    }
    openPopupLink(evt) {
        this.openpopupLink.emit(evt);
    }
    activeUser(evt) {
        this.toggleRow.emit(evt);
    }
    getVisabilityByChoosableProp(chooser, visible) {
        if (chooser) {
            return visible;
        }
        else {
            return true;
        }
    }
    getSortOrder(defaultSortColumn, defaultSortType, columnDef) {
        if (defaultSortColumn && defaultSortType) {
            return defaultSortColumn === columnDef ? defaultSortType : '';
        }
        return '';
    }
    outComeData(evt) {
        this.outComeTableRow.emit(evt);
    }
    downloadFormResponseAttachments(evt) {
        this.downloadFormResponseFiles.emit(evt);
    }
    deleteFormResponseAttachments(evt) {
        this.deleteFormResponseFiles.emit(evt);
    }
    onRowPrepared(e) {
        if (e.rowType == 'data' && e.data.isnew) {
            const element = e.rowElement;
            element.classList.add('isnew');
        }
    }
    onCellPrepared(e) {
        if (e.rowType == 'data') {
            if (e.column.dataField === 'notice') {
                const element = e.cellElement;
                e.cellElement.innerHTML = '';
                const livetext = document.createElement('div');
                this.checkOncellprepare(e, livetext);
                element.appendChild(livetext);
            }
            else if (e.column.dataField === 'notificationEventChannels') {
                const element = e.cellElement;
                e.cellElement.innerHTML = '';
                const livetext = document.createElement('div');
                let ele = '';
                e.data.notificationEventChannels.map(t => {
                    if (t.templatename) {
                        ele += `<label>${t.templatename}&nbsp;(<b>${t.templatechannel}</b>)</label>,`;
                    }
                });
                livetext.innerHTML = ele;
                element.appendChild(livetext);
            }
            else if (e.column.dataField === 'link') {
                const element = e.cellElement;
                e.cellElement.innerHTML = '';
                const livetext = document.createElement('div');
                livetext.innerHTML = `<img  src="${e.data.link ? e.data?.link?.split('?')[0] : ''}"style="max-width: 45px; cursor: pointer"/>`;
                element.appendChild(livetext);
            }
            this.checkCellprepare(e);
        }
    }
    checkCellprepare(e) {
        if (e.column.dataField === 'status' && e.data['tabname'] === 'RECORDS' && e.data['status'] === 'NO MATCH') {
            const element = e.cellElement;
            const livetext = document.createElement('span');
            livetext.classList.add('ml-2');
            livetext.innerHTML = `<em class="fa fa-info-circle" aria-hidden="true" title="${e.data?.execution_error?.error}" ></em>`;
            if (e.data?.execution_error?.error) {
                element.appendChild(livetext);
            }
        }
    }
    checkOncellprepare(e, livetext) {
        if (e.value !== 'No Data Found') {
            livetext.innerHTML = `<a class="btn-link loginLabel" href="${e.value}" target="_blank">Click Here<a>`;
        }
        else {
            livetext.innerHTML = 'No Data Found';
        }
    }
    onExporting(e) {
        const pageName = this.localstorage.getObj('FILE EXPORT NAME');
        const currentDate = moment().format('YYYY-MM-DD');
        let fileName;
        if (pageName) {
            fileName = `${pageName} Versions ${currentDate}`;
        }
        else if (this.exportPageName) {
            fileName = `${this.exportPageName}-${currentDate}`;
        }
        else {
            fileName = `Dynamic-Pages ${currentDate}`;
        }
        if (e.format === 'pdf') {
            const doc = new jsPDF.jsPDF();
            exportDataGrid({
                jsPDFDocument: doc,
                component: e.component
            }).then(() => {
                doc.save(`${fileName}.pdf`);
            });
        }
        else if (e.format === 'xlsx') {
            e.fileName = fileName;
        }
        else if (e.format === 'csv') {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Main sheet');
            exportDataGrid$1({
                component: e.component,
                worksheet: worksheet
            }).then(function () {
                workbook.csv.writeBuffer().then(function (buffer) {
                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), `${fileName}.csv`);
                });
            });
            e.cancel = true;
        }
    }
    contentReady = e => {
        const reorderColumns = e.component.instance().getVisibleColumns();
        console.log(reorderColumns, 'reorderColumns');
    };
    customizeHeaderFilterData(options) {
        options.dataSource.postProcess = results => {
            results.map(x => {
                x.text = x[options.dataSource.group[0].selector];
                x.value = [options.dataSource.group[0].selector, '=', x[options.dataSource.group[0].selector]];
                return x;
            });
            console.log(results, 'update customizeHeaderFilterData');
            return results;
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, deps: [{ token: i3.Router }, { token: AuthService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GridListComponent, selector: "app-grid-list", inputs: { dataList: "dataList", dataSource: "dataSource", columns: "columns", updateGrid: "updateGrid", totalCount: "totalCount", page: "page", isShow: "isShow", remoteOperations: "remoteOperations", enableExport: "enableExport", showHeaderFilter: "showHeaderFilter", exportPageName: "exportPageName", pageSize: "pageSize" }, outputs: { currentPage: "currentPage", pageIndex: "pageIndex", currentSize: "currentSize", editTableRow: "editTableRow", viewTableRow: "viewTableRow", deleteTableRow: "deleteTableRow", openExternalLink: "openExternalLink", openpopupLink: "openpopupLink", routeTo: "routeTo", openPopup: "openPopup", duplicateRow: "duplicateRow", sortOrder: "sortOrder", filterSearchValue: "filterSearchValue", filterBuilderPopup: "filterBuilderPopup", filterPanel: "filterPanel", multipleFilterValues: "multipleFilterValues", downloadTableRow: "downloadTableRow", toggleRow: "toggleRow", outComeTableRow: "outComeTableRow", downloadFormResponseFiles: "downloadFormResponseFiles", deleteFormResponseFiles: "deleteFormResponseFiles", rowSelection: "rowSelection", navigate: "navigate", multipleFilterValueToAPI: "multipleFilterValueToAPI", selectedRowsData: "selectedRowsData" }, providers: [GridListService], viewQueries: [{ propertyName: "dataGrid", first: true, predicate: DxDataGridComponent, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<dx-data-grid\r\n  id=\"gridContainer\"\r\n  [dataSource]=\"customStore\"\r\n  [allowColumnReordering]=\"true\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [showBorders]=\"true\"\r\n  [rowAlternationEnabled]=\"updateGrid?.rowSelection ? false : true\"\r\n  [showColumnLines]=\"true\"\r\n  [showRowLines]=\"true\"\r\n  [filterValue]=\"filterValue\"\r\n  [remoteOperations]=\"remoteOperations ? remoteOperations : false\"\r\n  [hoverStateEnabled]=\"updateGrid?.rowSelection\"\r\n  (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onCellPrepared)=\"onCellPrepared($event)\"\r\n  (onContentReady)=\"contentReady($event)\"\r\n  (onExporting)=\"onExporting($event)\">\r\n  <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n  <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n  <dxo-paging [pageSize]=\"currentPageSize\"></dxo-paging>\r\n  <dxo-pager\r\n    [visible]=\"true\"\r\n    [allowedPageSizes]=\"[10, 25, 50, 100]\"\r\n    [showPageSizeSelector]=\"true\"\r\n    [showInfo]=\"true\"\r\n    [showNavigationButtons]=\"true\"></dxo-pager>\r\n  <!--end pagination-->\r\n\r\n  <dxo-export [enabled]=\"enableExport\" [formats]=\"['xlsx', 'csv']\"></dxo-export>\r\n\r\n  <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n  <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n\r\n  <dxo-filter-row [visible]=\"showHeaderFilter\" [applyFilter]=\"currentFilter\"></dxo-filter-row>\r\n  <dxo-header-filter [visible]=\"true\" [allowSearch]=\"false\"></dxo-header-filter>\r\n  <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n  <ng-container *ngFor=\"let column of columns; let i = index\">\r\n    <ng-container *ngIf=\"column?.hide !== true\">\r\n      <ng-container *ngIf=\"column?.link; else noLink\">\r\n        <dxi-column\r\n          [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n          [allowHiding]=\"!column?.Choosable\"\r\n          [fixed]=\"column?.fixed\"\r\n          [dataField]=\"column?.columnDef\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [caption]=\"column?.header\"\r\n          [allowFiltering]=\"column?.filter\"\r\n          cellTemplate=\"cellTemplate\"\r\n          [allowSorting]=\"column?.sort\"\r\n          [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n      </ng-container>\r\n      <ng-template #noLink>\r\n        <ng-container *ngIf=\"column?.icon; else noIcon\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            cellTemplate=\"iconTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noIcon>\r\n        <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy, HH:mm\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MDY'\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext !== 'MDY' && column?.datetext !== 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            [format]=\"column?.removeTime ? 'MM/dd/yyyy' : 'MM/dd/yyyy, hh:mm a'\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noDate>\r\n        <dxi-column\r\n          [dataField]=\"column.columnDef\"\r\n          [caption]=\"column.header\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [allowFiltering]=\"column.filter\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n        <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status';\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            cellTemplate=\"statusTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container\r\n    *ngIf=\"\r\n      updateGrid &&\r\n      (updateGrid?.externalLink ||\r\n        updateGrid?.openPopup ||\r\n        updateGrid?.edit ||\r\n        updateGrid?.editMyApplication ||\r\n        updateGrid?.editAppeal ||\r\n        updateGrid?.editBilling ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.download ||\r\n        updateGrid?.showDownload ||\r\n        updateGrid?.showDelete ||\r\n        updateGrid?.pdf)\r\n    \">\r\n    <dxi-column\r\n      [width]=\"100\"\r\n      [allowFiltering]=\"false\"\r\n      [allowSorting]=\"false\"\r\n      caption=\"Action\"\r\n      cellTemplate=\"editCellTemplate\"></dxi-column>\r\n    <!-- Action label added for admin grid -->\r\n\r\n    <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.externalLink\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openLink(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Appeal\"\r\n        *ngIf=\"updateGrid?.appeal\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Appeal\"\r\n        (click)=\"navigateTo(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDownload && !updateGrid?.isNewlyUploaded\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download File\"\r\n        (click)=\"downloadFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em> </a\r\n      >&nbsp;&nbsp;\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDelete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete File\"\r\n        (click)=\"deleteFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.openPopup\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openPopupLink(d)\">\r\n        <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.duplicate\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Copy\"\r\n        (click)=\"duplicateDate(d)\">\r\n        <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\"\r\n          ><span class=\"sr-only\">Copy</span></em\r\n        >\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.download\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download\"\r\n        (click)=\"downloadData(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.edit && !d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editData(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editMyApplication && d?.data?.application_status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editDataMyApplciation(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editAppeal && d?.data?.status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editBilling && d?.data?.status === 'Waiting for approval'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"View\"\r\n        *ngIf=\"updateGrid?.view\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"View\"\r\n        (click)=\"viewData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"delete\"\r\n        *ngIf=\"updateGrid?.delete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete\"\r\n        (click)=\"deleteData(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.outcome && d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"View\"\r\n        (click)=\"outComeData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a href=\"javascript:void(0)\" title=\"pdf\" *ngIf=\"updateGrid?.pdf\" class=\"no-bg\" matTooltip=\"PDF\">\r\n        <em class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <button\r\n        *ngIf=\"updateGrid?.toggle\"\r\n        class=\"no-bg\"\r\n        [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\"\r\n        (click)=\"activeUser(d)\">\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n      <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n    <a href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n      d.value !== 'null' ? d.value : ''\r\n    }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n    <em class=\"fa fa-book\" (click)=\"popup(d.value)\" aria-hidden=\"true\"></em>\r\n  </div>\r\n</dx-data-grid>\r\n<!-- <ng-template #callNarrativePopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"narrativeData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeNarrativePopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template> -->\r\n", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:#0079fe}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew{background-color:#f2f2f2}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew td{font-weight:700}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5$2.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "syncLookupFilterValues", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExporting", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "syncLookupFilterValuesChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { kind: "component", type: i6.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "recursive", "selectByClick", "deferred", "mode", "selectAllMode", "showCheckBoxesMode"] }, { kind: "component", type: i6.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }, { kind: "component", type: i6.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "allowSelectAll", "dataSource", "groupInterval", "height", "search", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { kind: "component", type: i6.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "svgToCanvas", "allowExportSelectedData", "texts"] }, { kind: "component", type: i6.DxoFilterBuilderComponent, selector: "dxo-filter-builder", inputs: ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"], outputs: ["valueChange"] }, { kind: "component", type: i6.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "enableBodyScroll", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { kind: "component", type: i6.DxoFilterPanelComponent, selector: "dxo-filter-panel", inputs: ["customizeText", "filterEnabled", "texts", "visible"], outputs: ["filterEnabledChange"] }, { kind: "component", type: i6.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { kind: "component", type: i6.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { kind: "component", type: i6.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "label", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { kind: "component", type: i6.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { kind: "directive", type: i7$1.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { kind: "directive", type: i8$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-grid-list', providers: [GridListService], template: "<dx-data-grid\r\n  id=\"gridContainer\"\r\n  [dataSource]=\"customStore\"\r\n  [allowColumnReordering]=\"true\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [showBorders]=\"true\"\r\n  [rowAlternationEnabled]=\"updateGrid?.rowSelection ? false : true\"\r\n  [showColumnLines]=\"true\"\r\n  [showRowLines]=\"true\"\r\n  [filterValue]=\"filterValue\"\r\n  [remoteOperations]=\"remoteOperations ? remoteOperations : false\"\r\n  [hoverStateEnabled]=\"updateGrid?.rowSelection\"\r\n  (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onCellPrepared)=\"onCellPrepared($event)\"\r\n  (onContentReady)=\"contentReady($event)\"\r\n  (onExporting)=\"onExporting($event)\">\r\n  <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n  <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n  <dxo-paging [pageSize]=\"currentPageSize\"></dxo-paging>\r\n  <dxo-pager\r\n    [visible]=\"true\"\r\n    [allowedPageSizes]=\"[10, 25, 50, 100]\"\r\n    [showPageSizeSelector]=\"true\"\r\n    [showInfo]=\"true\"\r\n    [showNavigationButtons]=\"true\"></dxo-pager>\r\n  <!--end pagination-->\r\n\r\n  <dxo-export [enabled]=\"enableExport\" [formats]=\"['xlsx', 'csv']\"></dxo-export>\r\n\r\n  <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n  <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n\r\n  <dxo-filter-row [visible]=\"showHeaderFilter\" [applyFilter]=\"currentFilter\"></dxo-filter-row>\r\n  <dxo-header-filter [visible]=\"true\" [allowSearch]=\"false\"></dxo-header-filter>\r\n  <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n  <ng-container *ngFor=\"let column of columns; let i = index\">\r\n    <ng-container *ngIf=\"column?.hide !== true\">\r\n      <ng-container *ngIf=\"column?.link; else noLink\">\r\n        <dxi-column\r\n          [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n          [allowHiding]=\"!column?.Choosable\"\r\n          [fixed]=\"column?.fixed\"\r\n          [dataField]=\"column?.columnDef\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [caption]=\"column?.header\"\r\n          [allowFiltering]=\"column?.filter\"\r\n          cellTemplate=\"cellTemplate\"\r\n          [allowSorting]=\"column?.sort\"\r\n          [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n      </ng-container>\r\n      <ng-template #noLink>\r\n        <ng-container *ngIf=\"column?.icon; else noIcon\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            cellTemplate=\"iconTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noIcon>\r\n        <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy, HH:mm\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MDY'\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext !== 'MDY' && column?.datetext !== 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            [format]=\"column?.removeTime ? 'MM/dd/yyyy' : 'MM/dd/yyyy, hh:mm a'\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noDate>\r\n        <dxi-column\r\n          [dataField]=\"column.columnDef\"\r\n          [caption]=\"column.header\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [allowFiltering]=\"column.filter\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n        <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status';\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            cellTemplate=\"statusTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container\r\n    *ngIf=\"\r\n      updateGrid &&\r\n      (updateGrid?.externalLink ||\r\n        updateGrid?.openPopup ||\r\n        updateGrid?.edit ||\r\n        updateGrid?.editMyApplication ||\r\n        updateGrid?.editAppeal ||\r\n        updateGrid?.editBilling ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.download ||\r\n        updateGrid?.showDownload ||\r\n        updateGrid?.showDelete ||\r\n        updateGrid?.pdf)\r\n    \">\r\n    <dxi-column\r\n      [width]=\"100\"\r\n      [allowFiltering]=\"false\"\r\n      [allowSorting]=\"false\"\r\n      caption=\"Action\"\r\n      cellTemplate=\"editCellTemplate\"></dxi-column>\r\n    <!-- Action label added for admin grid -->\r\n\r\n    <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.externalLink\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openLink(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Appeal\"\r\n        *ngIf=\"updateGrid?.appeal\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Appeal\"\r\n        (click)=\"navigateTo(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDownload && !updateGrid?.isNewlyUploaded\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download File\"\r\n        (click)=\"downloadFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em> </a\r\n      >&nbsp;&nbsp;\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDelete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete File\"\r\n        (click)=\"deleteFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.openPopup\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openPopupLink(d)\">\r\n        <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.duplicate\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Copy\"\r\n        (click)=\"duplicateDate(d)\">\r\n        <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\"\r\n          ><span class=\"sr-only\">Copy</span></em\r\n        >\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.download\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download\"\r\n        (click)=\"downloadData(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.edit && !d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editData(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editMyApplication && d?.data?.application_status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editDataMyApplciation(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editAppeal && d?.data?.status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editBilling && d?.data?.status === 'Waiting for approval'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"View\"\r\n        *ngIf=\"updateGrid?.view\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"View\"\r\n        (click)=\"viewData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"delete\"\r\n        *ngIf=\"updateGrid?.delete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete\"\r\n        (click)=\"deleteData(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.outcome && d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"View\"\r\n        (click)=\"outComeData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a href=\"javascript:void(0)\" title=\"pdf\" *ngIf=\"updateGrid?.pdf\" class=\"no-bg\" matTooltip=\"PDF\">\r\n        <em class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <button\r\n        *ngIf=\"updateGrid?.toggle\"\r\n        class=\"no-bg\"\r\n        [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\"\r\n        (click)=\"activeUser(d)\">\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n      <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n    <a href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n      d.value !== 'null' ? d.value : ''\r\n    }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n    <em class=\"fa fa-book\" (click)=\"popup(d.value)\" aria-hidden=\"true\"></em>\r\n  </div>\r\n</dx-data-grid>\r\n<!-- <ng-template #callNarrativePopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"narrativeData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeNarrativePopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template> -->\r\n", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:#0079fe}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew{background-color:#f2f2f2}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew td{font-weight:700}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.Router }, { type: AuthService }, { type: LocalService }]; }, propDecorators: { dataGrid: [{
                type: ViewChild,
                args: [DxDataGridComponent, { static: false }]
            }], dataList: [{
                type: Input
            }], dataSource: [{
                type: Input
            }], columns: [{
                type: Input
            }], updateGrid: [{
                type: Input
            }], totalCount: [{
                type: Input
            }], page: [{
                type: Input
            }], isShow: [{
                type: Input
            }], remoteOperations: [{
                type: Input
            }], enableExport: [{
                type: Input
            }], showHeaderFilter: [{
                type: Input
            }], exportPageName: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], currentPage: [{
                type: Output
            }], pageIndex: [{
                type: Output
            }], currentSize: [{
                type: Output
            }], editTableRow: [{
                type: Output
            }], viewTableRow: [{
                type: Output
            }], deleteTableRow: [{
                type: Output
            }], openExternalLink: [{
                type: Output
            }], openpopupLink: [{
                type: Output
            }], routeTo: [{
                type: Output
            }], openPopup: [{
                type: Output
            }], duplicateRow: [{
                type: Output
            }], sortOrder: [{
                type: Output
            }], filterSearchValue: [{
                type: Output
            }], filterBuilderPopup: [{
                type: Output
            }], filterPanel: [{
                type: Output
            }], multipleFilterValues: [{
                type: Output
            }], downloadTableRow: [{
                type: Output
            }], toggleRow: [{
                type: Output
            }], outComeTableRow: [{
                type: Output
            }], downloadFormResponseFiles: [{
                type: Output
            }], deleteFormResponseFiles: [{
                type: Output
            }], rowSelection: [{
                type: Output
            }], navigate: [{
                type: Output
            }], multipleFilterValueToAPI: [{
                type: Output
            }], selectedRowsData: [{
                type: Output
            }] } });

class MaterialUIModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule], exports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, imports: [CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule, CommonModule,
            MatBottomSheetModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatIconModule,
            MatInputModule,
            MatNativeDateModule,
            MatMenuModule,
            MatRadioModule,
            MatSelectModule,
            MatStepperModule,
            MatTooltipModule,
            MatDialogModule,
            MatTabsModule,
            MatCheckboxModule,
            MatSlideToggleModule,
            MatSortModule,
            MatTableModule,
            MatFormFieldModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaterialUIModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ],
                    exports: [
                        CommonModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatIconModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatMenuModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatStepperModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatTabsModule,
                        MatCheckboxModule,
                        MatSlideToggleModule,
                        MatSortModule,
                        MatTableModule,
                        MatFormFieldModule
                    ]
                }]
        }] });

class GridListModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, declarations: [GridListComponent], imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1$3.NgxMaskModule], exports: [GridListComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GridListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [GridListComponent],
                    imports: [
                        CommonModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [GridListComponent]
                }]
        }] });

class OrganizationDropdownComponent {
    accessManagementService;
    auth;
    isShow;
    Organization;
    changeOrganization = new EventEmitter();
    orgList;
    constructor(accessManagementService, auth) {
        this.accessManagementService = accessManagementService;
        this.auth = auth;
        // This is intentional
    }
    ngOnInit() {
        this.getOrgList();
    }
    /**
     * @description returning selected organization details on event emitter
     * @param orgID organization id
     */
    onSelectionChange(orgID) {
        this.changeOrganization.emit(orgID);
    }
    /**
     * @description fetch organization list from backend
     */
    getOrgList() {
        this.accessManagementService.getOrganizationList().subscribe(res => {
            if (res['data'] && res['data'].length) {
                this.orgList = res['data'].sort((a, b) => a.organizationname?.localeCompare(b.organizationname));
            }
        });
    }
    /**
     * @description check isAdmin or not
     */
    get displayCondn() {
        return this.auth.isAdmin() && this.isShow;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationDropdownComponent, deps: [{ token: AccessManagementCommonService }, { token: AuthService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: OrganizationDropdownComponent, selector: "app-organization-dropdown", inputs: { isShow: "isShow", Organization: "Organization" }, outputs: { changeOrganization: "changeOrganization" }, ngImport: i0, template: "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ng-container *ngIf=\"displayCondn\">\r\n      <div class=\"d-block pull-left w-100 my-2\">\r\n        <p class=\"org-title\">Organization Name</p>\r\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n          <mat-select\r\n            placeholder=\"Organization\"\r\n            [(ngModel)]=\"Organization\"\r\n            (selectionChange)=\"onSelectionChange($event)\">\r\n            <mat-option value=\"Select-ALL\"> Select-ALL </mat-option>\r\n            <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\">\r\n              {{ org.organizationname }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [".org-title{margin:0;font-size:12px!important;color:#0079fe}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i5$3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i6$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-organization-dropdown', template: "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ng-container *ngIf=\"displayCondn\">\r\n      <div class=\"d-block pull-left w-100 my-2\">\r\n        <p class=\"org-title\">Organization Name</p>\r\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n          <mat-select\r\n            placeholder=\"Organization\"\r\n            [(ngModel)]=\"Organization\"\r\n            (selectionChange)=\"onSelectionChange($event)\">\r\n            <mat-option value=\"Select-ALL\"> Select-ALL </mat-option>\r\n            <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\">\r\n              {{ org.organizationname }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [".org-title{margin:0;font-size:12px!important;color:#0079fe}\n"] }]
        }], ctorParameters: function () { return [{ type: AccessManagementCommonService }, { type: AuthService }]; }, propDecorators: { isShow: [{
                type: Input
            }], Organization: [{
                type: Input
            }], changeOrganization: [{
                type: Output
            }] } });

class OrganizationDropdownModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: OrganizationDropdownModule, declarations: [OrganizationDropdownComponent], imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule, i1$3.NgxMaskModule], exports: [OrganizationDropdownComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationDropdownModule, imports: [CommonModule,
            MaterialUIModule,
            NgxPaginationModule,
            DxDataGridModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMaskModule.forRoot()] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: OrganizationDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [OrganizationDropdownComponent],
                    imports: [
                        CommonModule,
                        MaterialUIModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [OrganizationDropdownComponent]
                }]
        }] });

class ManageAccessRadioModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManageAccessRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ManageAccessRadioModule, declarations: [ManageAccessRadioComponent], imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMatSelectSearchModule,
            // AngularMultiSelectModule,
            DirectivesModule, i1$3.NgxMaskModule, DropdownModule,
            TooltipModule], exports: [ManageAccessRadioComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManageAccessRadioModule, imports: [CommonModule,
            NgxPaginationModule,
            DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            FormsModule,
            ReactiveFormsModule,
            NgxfUploaderModule,
            NgxMatSelectSearchModule,
            // AngularMultiSelectModule,
            DirectivesModule,
            NgxMaskModule.forRoot(),
            DropdownModule,
            TooltipModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ManageAccessRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ManageAccessRadioComponent],
                    imports: [
                        CommonModule,
                        NgxPaginationModule,
                        DxDataGridModule,
                        MaterialUIModule,
                        SharedPipesModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgxfUploaderModule,
                        NgxMatSelectSearchModule,
                        // AngularMultiSelectModule,
                        DirectivesModule,
                        NgxMaskModule.forRoot(),
                        DropdownModule,
                        TooltipModule
                    ],
                    exports: [ManageAccessRadioComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
                }]
        }] });

class ShareDataService {
    data = new BehaviorSubject('');
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShareDataService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShareDataService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShareDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class PicsRbacPageaccessModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPageaccessModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPageaccessModule, declarations: [PageaccessComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            GridListModule,
            TableModule,
            InputTextModule,
            InputNumberModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            MaterialUIModule,
            // AngularMultiSelectModule,
            NgxMatSelectSearchModule,
            PrimengModule,
            OrganizationDropdownModule,
            ManageAccessRadioModule], exports: [PageaccessComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPageaccessModule, providers: [RbacService, MicrostrategyService, HttpClient, AuthService, AuthStore, AlertService,
            ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
            PageAccessService, DynamicTabPageService, ShareDataService, AccessManagementCommonService], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            GridListModule,
            TableModule,
            InputTextModule,
            InputNumberModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            MaterialUIModule,
            // AngularMultiSelectModule,
            NgxMatSelectSearchModule,
            PrimengModule,
            OrganizationDropdownModule,
            ManageAccessRadioModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacPageaccessModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageaccessComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        // HttpClientModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        GridListModule,
                        TableModule,
                        InputTextModule,
                        InputNumberModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule,
                        MaterialUIModule,
                        // AngularMultiSelectModule,
                        NgxMatSelectSearchModule,
                        PrimengModule,
                        OrganizationDropdownModule,
                        ManageAccessRadioModule,
                    ],
                    exports: [PageaccessComponent],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                    providers: [RbacService, MicrostrategyService, HttpClient, AuthService, AuthStore, AlertService,
                        ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
                        PageAccessService, DynamicTabPageService, ShareDataService, AccessManagementCommonService]
                }]
        }] });

class CardiRbacPageaccessModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiRbacPageaccessModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CardiRbacPageaccessModule, declarations: [RbacPageaccessComponent], imports: [PicsRbacPageaccessModule], exports: [RbacPageaccessComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiRbacPageaccessModule, imports: [PicsRbacPageaccessModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardiRbacPageaccessModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacPageaccessComponent,
                    ],
                    imports: [
                        PicsRbacPageaccessModule,
                    ],
                    exports: [
                        RbacPageaccessComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of rbac-pageaccess
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardiRbacPageaccessModule, RbacPageaccessComponent, RbacPageaccessService };
//# sourceMappingURL=pics-core-rbac-pageaccess.mjs.map

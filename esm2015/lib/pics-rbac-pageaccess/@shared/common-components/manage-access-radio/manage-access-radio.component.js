import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RBACINFO } from '../../../@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../@core/urls/access-management-common.service";
import * as i3 from "../../../@core/service/data-store.service";
import * as i4 from "@angular/material/radio";
import * as i5 from "primeng/dropdown";
import * as i6 from "../../../@core/directives/permission.directive";
import * as i7 from "@angular/common";
import * as i8 from "primeng/api";
import * as i9 from "primeng/tooltip";
export class ManageAccessRadioComponent {
    constructor(formBuilder, cdRef, accessManagementService, _storeservice) {
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this.accessManagementService = accessManagementService;
        this._storeservice = _storeservice;
        this.userList = [];
        this.policyGroupData = [];
        this.roleAddedData = [];
        this.userDropDown = false;
        this.roleDropDown = false;
        this.policyDropDown = false;
        this.accessBy = new EventEmitter();
        this.policyDropdown = new EventEmitter();
        this.roleDropdown = new EventEmitter();
        this.userDropdown = new EventEmitter();
        this.dropDownSelectedValues = new EventEmitter();
        this.userDropdownSettings = {};
        this.roleDropdownSettings = {};
        this.policyDropdownSettings = {};
        this.RBACORG = new RBACINFO();
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
            userId: new FormControl(''),
            policyId: new FormControl(null),
            roleId: new FormControl(null)
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
}
ManageAccessRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ManageAccessRadioComponent, deps: [{ token: i1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i2.AccessManagementCommonService }, { token: i3.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ManageAccessRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ManageAccessRadioComponent, selector: "app-manage-access-radio", inputs: { reloadForm: "reloadForm" }, outputs: { accessBy: "accessBy", policyDropdown: "policyDropdown", roleDropdown: "roleDropdown", userDropdown: "userDropdown", dropDownSelectedValues: "dropDownSelectedValues" }, ngImport: i0, template: "<form [formGroup]=\"rbacForm\" class=\"manage-access-radio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"strip_head toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Manage Access By</span>\r\n      </div>\r\n      <mat-radio-group formControlName=\"accessBy\">\r\n        <mat-radio-button value=\"3\" (click)=\"showDorpdowns('3')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP\">Policy\r\n          Group</mat-radio-button>\r\n        <mat-radio-button value=\"2\" (click)=\"showDorpdowns('2')\"\r\n          fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE\">Role</mat-radio-button>\r\n        <mat-radio-button value=\"1\" (click)=\"showDorpdowns('1')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME\">User\r\n          Name</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"userDropDown\">\r\n      <p class=\"radio-title\">Select User</p>\r\n      <p-dropdown inputId=\"role\" [options]=\"userList\" placeholder=\"Select User\" formControlName=\"userId\"\r\n        styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME_USER\" optionLabel=\"displayname\" optionValue=\"id\"\r\n        [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('user')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.displayname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.displayname }}\r\n          </div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.displayname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"roleDropDown\">\r\n      <p class=\"radio-title\">Select Role</p>\r\n      <p-dropdown inputId=\"role\" [options]=\"roleAddedData\" placeholder=\"Select Role\" formControlName=\"roleId\"\r\n        fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE_ROLE\" styleClass=\"w-100\" optionLabel=\"name\" optionValue=\"id\"\r\n        [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('role')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.name }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"policyDropDown\">\r\n      <p class=\"radio-title\">Select Policy Group</p>\r\n      <p-dropdown inputId=\"role\" [options]=\"policyGroupData\" placeholder=\"Select Policy Group\"\r\n        formControlName=\"policyId\" styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP_POLICY\"\r\n        optionLabel=\"policygroupname\" optionValue=\"id\" [filter]=\"true\" ariaFilterLabel=\"null\"\r\n        (onChange)=\"getOrgPages('policy')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.policygroupname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{\r\n            item?.policygroupname }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.policygroupname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br />\r\n", styles: [".mat-radio-group .mat-radio-button{padding-right:10px;font-family:\"Roboto\",sans-serif!important}.radio-title{color:var(--label-text);font-size:var(--font-14);font-weight:600;margin-bottom:10px}:host ::ng-deep .selected-list .c-btn{font-size:var(--base-font-size)}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}\n"], components: [{ type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i5.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i6.PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i9.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ManageAccessRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-manage-access-radio',
                    templateUrl: './manage-access-radio.component.html',
                    styleUrls: ['./manage-access-radio.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i2.AccessManagementCommonService }, { type: i3.DataStoreService }]; }, propDecorators: { accessBy: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFjY2Vzcy1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1wYWdlYWNjZXNzL3NyYy9saWIvcGljcy1yYmFjLXBhZ2VhY2Nlc3MvQHNoYXJlZC9jb21tb24tY29tcG9uZW50cy9tYW5hZ2UtYWNjZXNzLXJhZGlvL21hbmFnZS1hY2Nlc3MtcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0BzaGFyZWQvY29tbW9uLWNvbXBvbmVudHMvbWFuYWdlLWFjY2Vzcy1yYWRpby9tYW5hZ2UtYWNjZXNzLXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBS3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFNL0QsTUFBTSxPQUFPLDBCQUEwQjtJQXNCckMsWUFDVSxXQUF3QixFQUN6QixLQUF3QixFQUN4Qix1QkFBc0QsRUFDckQsYUFBK0I7UUFIL0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUErQjtRQUNyRCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUF4QnpDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIsaUJB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ZXJWaWV3Q2hlY2tlZCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWNjZXNzTWFuYWdlbWVudENvbW1vblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LWNvbW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tYW5hZ2UtYWNjZXNzLXJhZGlvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFuYWdlLWFjY2Vzcy1yYWRpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWFuYWdlLWFjY2Vzcy1yYWRpby5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VBY2Nlc3NSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuICByYmFjRm9ybTogRm9ybUdyb3VwO1xyXG4gIHVzZXJMaXN0OiBhbnlbXSA9IFtdO1xyXG4gIHBvbGljeUdyb3VwRGF0YTogYW55W10gPSBbXTtcclxuICByb2xlQWRkZWREYXRhOiBhbnlbXSA9IFtdO1xyXG4gIHVzZXJEcm9wRG93biA9IGZhbHNlO1xyXG4gIHJvbGVEcm9wRG93biA9IGZhbHNlO1xyXG4gIHBvbGljeURyb3BEb3duID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGFjY2Vzc0J5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHBvbGljeURyb3Bkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJvbGVEcm9wZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSB1c2VyRHJvcGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgZHJvcERvd25TZWxlY3RlZFZhbHVlcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIHJlbG9hZEZvcm06IGJvb2xlYW47XHJcbiAgdXNlckRyb3Bkb3duU2V0dGluZ3MgPSB7fTtcclxuICByb2xlRHJvcGRvd25TZXR0aW5ncyA9IHt9O1xyXG4gIHBvbGljeURyb3Bkb3duU2V0dGluZ3MgPSB7fTtcclxuICBvcmdTdWJzOiBTdWJzY3JpcHRpb247XHJcbiAgb3JnSWQ6IGFueTtcclxuICBlbnZpcm9ubWVudDogYW55O1xyXG4gIFJCQUNPUkc6IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwdWJsaWMgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIGFjY2Vzc01hbmFnZW1lbnRTZXJ2aWNlOiBBY2Nlc3NNYW5hZ2VtZW50Q29tbW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSxcclxuICAgIC8vIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICAvLyB0aGlzLm9yZ1N1YnMgPSB0aGlzLmF1dGhTZXJ2aWNlLm9yZ0luZm8uc3Vic2NyaWJlKG8gPT4ge1xyXG4gICAgLy8gICB0aGlzLm9yZ0lkID0gbztcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5vcmdJZCwgJ21hbmFnZWFjY2Vzc3JhZGlvIGNvbXAnKTtcclxuICAgIC8vICAgaWYgKHRoaXMub3JnSWQpIHtcclxuICAgIC8vICAgICB0aGlzLmxvYWREcm9wZG93bnMoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyB0aGlzLm9yZ1N1YnMgPSAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAvLyAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgIC8vICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLlJCQUNPUkcsICdSQkFDT1JHIEV2ZW50IFNjaGVkdWxlcicpO1xyXG4gICAgLy8gICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLlJCQUNPUkdbJ2Vudmlyb25tZW50J107XHJcbiAgICAvLyAgICAgdGhpcy5vcmdJZCA9IHBhcnNlSW50KHRoaXMuUkJBQ09SR1snb3JnSUQnXSk7XHJcbiAgICAvLyAgICAgaWYodGhpcy5lbnZpcm9ubWVudCl7XHJcbiAgICAvLyAgICAgICB0aGlzLmxvYWREcm9wZG93bnMoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRGb3JtKCk7XHJcbiAgICB0aGlzLnVzZXJEcm9wZG93blNldHRpbmdzID0ge1xyXG4gICAgICBzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICB0ZXh0OiAnU2VsZWN0IFVzZXInLFxyXG4gICAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXHJcbiAgICAgIGVuYWJsZVNlYXJjaEZpbHRlcjogdHJ1ZSxcclxuICAgICAgbGFiZWxLZXk6ICdkaXNwbGF5bmFtZScsXHJcbiAgICAgIHNlYXJjaEJ5OiBbJ2Rpc3BsYXluYW1lJ11cclxuICAgIH07XHJcbiAgICB0aGlzLnJvbGVEcm9wZG93blNldHRpbmdzID0ge1xyXG4gICAgICBzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICB0ZXh0OiAnU2VsZWN0IFBlcnNvbmEnLFxyXG4gICAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXHJcbiAgICAgIGVuYWJsZVNlYXJjaEZpbHRlcjogdHJ1ZSxcclxuICAgICAgbGFiZWxLZXk6ICduYW1lJyxcclxuICAgICAgc2VhcmNoQnk6IFsnbmFtZSddXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wb2xpY3lEcm9wZG93blNldHRpbmdzID0ge1xyXG4gICAgICBzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICB0ZXh0OiAnU2VsZWN0IFBvbGljeScsXHJcbiAgICAgIHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcclxuICAgICAgdW5TZWxlY3RBbGxUZXh0OiAnVW5TZWxlY3QgQWxsJyxcclxuICAgICAgZW5hYmxlU2VhcmNoRmlsdGVyOiB0cnVlLFxyXG4gICAgICBsYWJlbEtleTogJ3BvbGljeWdyb3VwbmFtZScsXHJcbiAgICAgIHNlYXJjaEJ5OiBbJ3BvbGljeWdyb3VwbmFtZSddXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vcmdTdWJzID0gIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5SQkFDT1JHLCAnUkJBQ09SRyBFdmVudCBTY2hlZHVsZXInKTtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddO1xyXG4gICAgICAgIHRoaXMub3JnSWQgPSBwYXJzZUludCh0aGlzLlJCQUNPUkdbJ29yZ0lEJ10pO1xyXG4gICAgICAgIGlmKHRoaXMuZW52aXJvbm1lbnQpe1xyXG4gICAgICAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm9yZ1N1YnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG4gIGxvYWREcm9wZG93bnMoKSB7XHJcbiAgICB0aGlzLmxvYWRVc2VybmFtZSgpO1xyXG4gICAgdGhpcy5nZXRQZXJzb25hKCk7XHJcbiAgICB0aGlzLmdldFBvbGljeUdyb3VwKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkRm9ybSgpIHtcclxuICAgIHRoaXMucmJhY0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgaWQ6IG5ldyBGb3JtQ29udHJvbChudWxsKSxcclxuICAgICAgYWNjZXNzQnk6IG5ldyBGb3JtQ29udHJvbChudWxsKSxcclxuICAgICAgdXNlcklkOiBuZXcgRm9ybUNvbnRyb2woJycpLFxyXG4gICAgICBwb2xpY3lJZDogbmV3IEZvcm1Db250cm9sKG51bGwpLFxyXG4gICAgICByb2xlSWQ6IG5ldyBGb3JtQ29udHJvbChudWxsKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkVXNlcm5hbWUoKSB7XHJcbiAgICB0aGlzLmFjY2Vzc01hbmFnZW1lbnRTZXJ2aWNlLmdldFVzZXJMaXN0KHRoaXMub3JnSWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLnVzZXJMaXN0ID0gcmVzWydkYXRhJ10gJiYgcmVzWydkYXRhJ10ubGVuZ3RoID8gcmVzWydkYXRhJ10gOiBbXTtcclxuICAgICAgdGhpcy51c2VyTGlzdC5mb3JFYWNoKGEgPT4gKGEuZGlzcGxheW5hbWUgPSBgJHthLmZpcnN0bmFtZX0gJHthLmxhc3RuYW1lfWApKTtcclxuICAgICAgdGhpcy51c2VyRHJvcGRvd24uZW1pdCh0aGlzLnVzZXJMaXN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9saWN5R3JvdXAoKSB7XHJcbiAgICB0aGlzLmFjY2Vzc01hbmFnZW1lbnRTZXJ2aWNlLmdldFBvbGljeUdyb3VwTGlzdCh0aGlzLm9yZ0lkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5wb2xpY3lHcm91cERhdGEgPSByZXNbJ2RhdGEnXSAmJiByZXNbJ2RhdGEnXS5sZW5ndGggPyByZXNbJ2RhdGEnXSA6IFtdO1xyXG4gICAgICB0aGlzLnBvbGljeURyb3Bkb3duLmVtaXQodGhpcy5wb2xpY3lHcm91cERhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXJzb25hKCkge1xyXG4gICAgdGhpcy5hY2Nlc3NNYW5hZ2VtZW50U2VydmljZS5nZXRSb2xlTGlzdCh0aGlzLm9yZ0lkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5vcmdJZCk7XHJcbiAgICAgIHRoaXMucm9sZUFkZGVkRGF0YSA9IHJlc1snZGF0YSddICYmIHJlc1snZGF0YSddLmxlbmd0aCA/IHJlc1snZGF0YSddIDogW107XHJcbiAgICAgIHRoaXMucm9sZURyb3Bkb3duLmVtaXQodGhpcy5yb2xlQWRkZWREYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0RvcnBkb3ducyhpZCkge1xyXG4gICAgaWYgKGlkID09PSAnMScpIHtcclxuICAgICAgdGhpcy51c2VyRHJvcERvd24gPSB0cnVlO1xyXG4gICAgICB0aGlzLnJvbGVEcm9wRG93biA9IHRoaXMucG9saWN5RHJvcERvd24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoaWQgPT09ICcyJykge1xyXG4gICAgICB0aGlzLnVzZXJEcm9wRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJvbGVEcm9wRG93biA9IHRydWU7XHJcbiAgICAgIHRoaXMucG9saWN5RHJvcERvd24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoaWQgPT09ICczJykge1xyXG4gICAgICB0aGlzLnVzZXJEcm9wRG93biA9IHRoaXMucm9sZURyb3BEb3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucG9saWN5RHJvcERvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hY2Nlc3NCeS5lbWl0KGlkKTtcclxuICAgIHRoaXMucmVzZXRGb3JtKGlkKTtcclxuICB9XHJcblxyXG4gIC8vIGVkaXQgZnVuY3Rpb25hbGl0ZXMgYmFzZWQgb24gcG9saWN5IGdyb3VwXHJcbiAgZ2V0RGF0YUJhc2VkT25Qb2xpY3koKSB7XHJcbiAgICBjb25zdCBwb2xpY3lpZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHJvbGVJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZUlkJykudmFsdWU7XHJcbiAgICBjb25zdCB1c2VySWRzID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3VzZXJJZCcpLnZhbHVlO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHtcclxuICAgICAgdXNlcmlkOiB1c2VySWRzID8gdXNlcklkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsLFxyXG4gICAgICByb2xlaWQ6IHJvbGVJZHMgPyByb2xlSWRzLm1hcChrZXkgPT4ga2V5LmlkKSA6IG51bGwsXHJcbiAgICAgIHBvbGljeWlkOiBwb2xpY3lpZHMgPyBwb2xpY3lpZHMubWFwKGtleSA9PiBrZXkuaWQpIDogbnVsbCxcclxuICAgICAgZnJvbTogJ3BvbGljeSdcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVJZCcpLnZhbHVlICE9PSBudWxsIHx8IHRoaXMucmJhY0Zvcm0uZ2V0KCd1c2VySWQnKS52YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duU2VsZWN0ZWRWYWx1ZXMuZW1pdChzZWxlY3RlZFZhbHVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvbGljeWlkcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blNlbGVjdGVkVmFsdWVzLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlc2V0Rm9ybSgnMycpO1xyXG4gICAgICB0aGlzLnJiYWNGb3JtLmdldCgnYWNjZXNzQnknKS5zZXRWYWx1ZSgnMycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUJhc2VkT25Sb2xlKCkge1xyXG4gICAgY29uc3Qgcm9sZUlkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlSWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHVzZXJJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWU7XHJcbiAgICBjb25zdCBwb2xpY3lJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB7XHJcbiAgICAgIHVzZXJpZDogdXNlcklkcyA/IHVzZXJJZHMubWFwKGtleSA9PiBrZXkuaWQpIDogbnVsbCxcclxuICAgICAgcm9sZWlkOiByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsLFxyXG4gICAgICBwb2xpY3lpZDogcG9saWN5SWRzID8gcG9saWN5SWRzLm1hcChrZXkgPT4ga2V5LmlkKSA6IG51bGwsXHJcbiAgICAgIGZyb206ICdyb2xlJ1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blNlbGVjdGVkVmFsdWVzLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyb2xlSWRzLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZXhpc3RQb2xpY3lJZHMgPSBbXTtcclxuICAgICAgLy8gbG9vcCB0aGUgcm9sZSBpZHNcclxuICAgICAgZm9yIChjb25zdCByb2xlSWQgb2Ygcm9sZUlkcykge1xyXG4gICAgICAgIGNvbnN0IHJvbGVEYXRhID0gdGhpcy5yb2xlQWRkZWREYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSByb2xlSWQuaWQpO1xyXG4gICAgICAgIGNvbnN0IGdldFBvbGljeUlkcyA9IHJvbGVEYXRhWzBdWydyb2xlUG9saWN5R3JvdXBDb25maWdzJ10ubWFwKHBJZCA9PiBwSWQucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgZXhpc3RQb2xpY3lJZHMucHVzaChnZXRQb2xpY3lJZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG15TmV3QXJyYXkgPSBbXS5jb25jYXQoLi4uZXhpc3RQb2xpY3lJZHMpO1xyXG4gICAgICBjb25zdCB1bmlxdWVQb2xpY3kgPSBbLi4ubmV3IFNldChteU5ld0FycmF5KV07XHJcbiAgICAgIGV4aXN0UG9saWN5SWRzID0gdW5pcXVlUG9saWN5O1xyXG4gICAgICAvLyBzZXQgcG9saWN5IGdyb3VwIHZhbHVlc1xyXG4gICAgICBjb25zdCBwTGlzdCA9IHRoaXMucG9saWN5R3JvdXBEYXRhLmZpbHRlcihrZXkgPT4gZXhpc3RQb2xpY3lJZHMuaW5jbHVkZXMoa2V5LmlkKSk7XHJcbiAgICAgIHRoaXMucmJhY0Zvcm0uZ2V0KCdwb2xpY3lJZCcpLnNldFZhbHVlKHBMaXN0KTtcclxuICAgICAgY29uc3QgcG9saWN5SWRWYWx1ZXMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgICAgc2VsZWN0ZWRWYWx1ZS5yb2xlaWQgPSByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsO1xyXG4gICAgICBzZWxlY3RlZFZhbHVlLnBvbGljeWlkID0gcG9saWN5SWRWYWx1ZXMgPyBwb2xpY3lJZFZhbHVlcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsO1xyXG4gICAgICB0aGlzLmRyb3BEb3duU2VsZWN0ZWRWYWx1ZXMuZW1pdChzZWxlY3RlZFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVzZXRGb3JtKCcyJyk7XHJcbiAgICAgIHRoaXMucmJhY0Zvcm0uZ2V0KCdhY2Nlc3NCeScpLnNldFZhbHVlKCcyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSb2xlQW5kUG9saWN5RGF0YSgpIHtcclxuICAgIGNvbnN0IHVzZXJJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWU7XHJcbiAgICBpZiAodXNlcklkcy5sZW5ndGgpIHtcclxuICAgICAgbGV0IGV4aXN0UG9saWN5SWRzID0gW107XHJcbiAgICAgIGxldCBleGlzdFJvbGVJZHMgPSBbXTtcclxuICAgICAgLy8gbG9vcCB0aGUgcm9sZSBpZHNcclxuICAgICAgZm9yIChjb25zdCB1c2VySWQgb2YgdXNlcklkcykge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdGhpcy51c2VyTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gdXNlcklkLmlkKTtcclxuICAgICAgICBjb25zdCBnZXRQb2xpY3lJZHMgPSB1c2VyRGF0YVswXVsncG9saWN5R3JvdXBDb25maWdzJ10ubWFwKHBJZCA9PiBwSWQucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgZXhpc3RQb2xpY3lJZHMucHVzaChnZXRQb2xpY3lJZHMpO1xyXG4gICAgICAgIGNvbnN0IGdldFJvbGVJZHMgPSB1c2VyRGF0YVswXVsncm9sZUNvbmZpZ3MnXS5tYXAocElkID0+IHBJZC5yb2xlaWQpO1xyXG4gICAgICAgIGV4aXN0Um9sZUlkcy5wdXNoKGdldFJvbGVJZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG15TmV3UG9saWN5QXJ5ID0gW10uY29uY2F0KC4uLmV4aXN0UG9saWN5SWRzKTtcclxuICAgICAgY29uc3QgdW5pcXVlUG9saWN5ID0gWy4uLm5ldyBTZXQobXlOZXdQb2xpY3lBcnkpXTtcclxuICAgICAgZXhpc3RQb2xpY3lJZHMgPSB1bmlxdWVQb2xpY3k7XHJcbiAgICAgIC8vIHNldCBwb2xpY3kgZ3JvdXAgdmFsdWVzXHJcbiAgICAgIGNvbnN0IHBMaXN0ID0gdGhpcy5wb2xpY3lHcm91cERhdGEuZmlsdGVyKGtleSA9PiBleGlzdFBvbGljeUlkcy5pbmNsdWRlcyhrZXkuaWQpKTtcclxuICAgICAgdGhpcy5yYmFjRm9ybS5nZXQoJ3BvbGljeUlkJykuc2V0VmFsdWUocExpc3QpO1xyXG5cclxuICAgICAgY29uc3QgbXlOZXdSb2xlQXJ5ID0gW10uY29uY2F0KC4uLmV4aXN0Um9sZUlkcyk7XHJcbiAgICAgIGNvbnN0IHVuaXF1ZVJvbGUgPSBbLi4ubmV3IFNldChteU5ld1JvbGVBcnkpXTtcclxuICAgICAgZXhpc3RSb2xlSWRzID0gdW5pcXVlUm9sZTtcclxuICAgICAgLy8gc2V0IHJvbGUgdmFsdWVzXHJcbiAgICAgIGNvbnN0IHJMaXN0ID0gdGhpcy5yb2xlQWRkZWREYXRhLmZpbHRlcihrZXkgPT4gZXhpc3RSb2xlSWRzLmluY2x1ZGVzKGtleS5pZCkpO1xyXG4gICAgICB0aGlzLnJiYWNGb3JtLmdldCgncm9sZUlkJykuc2V0VmFsdWUockxpc3QpO1xyXG4gICAgICBjb25zdCByb2xlSWRzID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVJZCcpLnZhbHVlO1xyXG4gICAgICBjb25zdCBwb2xpY3lJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHtcclxuICAgICAgICB1c2VyaWQ6IHVzZXJJZHMgPyB1c2VySWRzLm1hcChrZXkgPT4ga2V5LmlkKSA6IG51bGwsXHJcbiAgICAgICAgcm9sZWlkOiByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsLFxyXG4gICAgICAgIHBvbGljeWlkOiBwb2xpY3lJZHMgPyBwb2xpY3lJZHMubWFwKGtleSA9PiBrZXkuaWQpIDogbnVsbCxcclxuICAgICAgICBmcm9tOiAndXNlcidcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5kcm9wRG93blNlbGVjdGVkVmFsdWVzLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlc2V0Rm9ybSgnMScpO1xyXG4gICAgICB0aGlzLnJiYWNGb3JtLmdldCgnYWNjZXNzQnknKS5zZXRWYWx1ZSgnMScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRGb3JtKGlkID0gbnVsbCkge1xyXG4gICAgdGhpcy5yYmFjRm9ybS5yZXNldCgpO1xyXG4gICAgaWYgKGlkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmJhY0Zvcm0uZ2V0KCdhY2Nlc3NCeScpLnNldFZhbHVlKGlkKTtcclxuICAgICAgdGhpcy5hY2Nlc3NCeS5lbWl0KGlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0T3JnUGFnZXModHlwZSkge1xyXG4gICAgY29uc3Qgcm9sZUlkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlSWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHVzZXJJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWU7XHJcbiAgICBjb25zdCBwb2xpY3lJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgIGxldCBuYW1lOiBzdHJpbmc7XHJcbiAgICBpZiAocm9sZUlkcykge1xyXG4gICAgICBuYW1lID0gdGhpcy5yb2xlQWRkZWREYXRhLmZpbHRlcihyb2xlID0+IHJvbGUuaWQgPT09IHJvbGVJZHMpWzBdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VySWRzKSB7XHJcbiAgICAgIG5hbWUgPSB0aGlzLnVzZXJMaXN0LmZpbHRlcih1c2VyID0+IHVzZXIuaWQgPT09IHVzZXJJZHMpWzBdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbmFtZSA9IHRoaXMucG9saWN5R3JvdXBEYXRhLmZpbHRlcihwb2xpY3lncm91cCA9PiBwb2xpY3lncm91cC5pZCA9PT0gcG9saWN5SWRzKVswXS5wb2xpY3lncm91cG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHtcclxuICAgICAgdXNlcmlkOiB1c2VySWRzLFxyXG4gICAgICByb2xlaWQ6IHJvbGVJZHMsXHJcbiAgICAgIHBvbGljeWlkOiBwb2xpY3lJZHMsXHJcbiAgICAgIGZyb206IHR5cGUsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZHJvcERvd25TZWxlY3RlZFZhbHVlcy5lbWl0KHNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cInJiYWNGb3JtXCIgY2xhc3M9XCJtYW5hZ2UtYWNjZXNzLXJhZGlvXCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3RyaXBfaGVhZCB0b2dnbGVsZWZ0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXBvcnRfaGVhZCBmb250LXdlaWdodC1ib2xkXCI+TWFuYWdlIEFjY2VzcyBCeTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwiYWNjZXNzQnlcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIjNcIiAoY2xpY2spPVwic2hvd0RvcnBkb3ducygnMycpXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19QT0xJQ1lfR1JPVVBcIj5Qb2xpY3lcclxuICAgICAgICAgIEdyb3VwPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiMlwiIChjbGljayk9XCJzaG93RG9ycGRvd25zKCcyJylcIlxyXG4gICAgICAgICAgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19ST0xFXCI+Um9sZTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIjFcIiAoY2xpY2spPVwic2hvd0RvcnBkb3ducygnMScpXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19VU0VSTkFNRVwiPlVzZXJcclxuICAgICAgICAgIE5hbWU8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC0xMiBtdC0zXCIgKm5nSWY9XCJ1c2VyRHJvcERvd25cIj5cclxuICAgICAgPHAgY2xhc3M9XCJyYWRpby10aXRsZVwiPlNlbGVjdCBVc2VyPC9wPlxyXG4gICAgICA8cC1kcm9wZG93biBpbnB1dElkPVwicm9sZVwiIFtvcHRpb25zXT1cInVzZXJMaXN0XCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgVXNlclwiIGZvcm1Db250cm9sTmFtZT1cInVzZXJJZFwiXHJcbiAgICAgICAgc3R5bGVDbGFzcz1cInctMTAwXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19VU0VSTkFNRV9VU0VSXCIgb3B0aW9uTGFiZWw9XCJkaXNwbGF5bmFtZVwiIG9wdGlvblZhbHVlPVwiaWRcIlxyXG4gICAgICAgIFtmaWx0ZXJdPVwidHJ1ZVwiIGFyaWFGaWx0ZXJMYWJlbD1cIm51bGxcIiAob25DaGFuZ2UpPVwiZ2V0T3JnUGFnZXMoJ3VzZXInKVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbSBwVGVtcGxhdGU9XCJzZWxlY3RlZEl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgcFRvb2x0aXA9XCJ7e2l0ZW0/LmRpc3BsYXluYW1lfX1cIiB0b29sdGlwUG9zaXRpb249XCJ0b3BcIiBjbGFzcz1cInRleHQtdHJ1bmNhdGVcIj4ge3sgaXRlbT8uZGlzcGxheW5hbWUgfX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1vYmplY3QgcFRlbXBsYXRlPVwiaXRlbVwiPlxyXG4gICAgICAgICAge3sgb2JqZWN0LmRpc3BsYXluYW1lIH19XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9wLWRyb3Bkb3duPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLTEyIG10LTNcIiAqbmdJZj1cInJvbGVEcm9wRG93blwiPlxyXG4gICAgICA8cCBjbGFzcz1cInJhZGlvLXRpdGxlXCI+U2VsZWN0IFJvbGU8L3A+XHJcbiAgICAgIDxwLWRyb3Bkb3duIGlucHV0SWQ9XCJyb2xlXCIgW29wdGlvbnNdPVwicm9sZUFkZGVkRGF0YVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJvbGVcIiBmb3JtQ29udHJvbE5hbWU9XCJyb2xlSWRcIlxyXG4gICAgICAgIGZpZWxkS2V5PVwiU0VUVElOR1NfUEFHX0FDQ19BQ0NFU1NfUk9MRV9ST0xFXCIgc3R5bGVDbGFzcz1cInctMTAwXCIgb3B0aW9uTGFiZWw9XCJuYW1lXCIgb3B0aW9uVmFsdWU9XCJpZFwiXHJcbiAgICAgICAgW2ZpbHRlcl09XCJ0cnVlXCIgYXJpYUZpbHRlckxhYmVsPVwibnVsbFwiIChvbkNoYW5nZSk9XCJnZXRPcmdQYWdlcygncm9sZScpXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtIHBUZW1wbGF0ZT1cInNlbGVjdGVkSXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBwVG9vbHRpcD1cInt7aXRlbT8ubmFtZX19XCIgdG9vbHRpcFBvc2l0aW9uPVwidG9wXCIgY2xhc3M9XCJ0ZXh0LXRydW5jYXRlXCI+IHt7IGl0ZW0/Lm5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtb2JqZWN0IHBUZW1wbGF0ZT1cIml0ZW1cIj5cclxuICAgICAgICAgIHt7IG9iamVjdC5uYW1lIH19XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9wLWRyb3Bkb3duPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLTEyIG10LTNcIiAqbmdJZj1cInBvbGljeURyb3BEb3duXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicmFkaW8tdGl0bGVcIj5TZWxlY3QgUG9saWN5IEdyb3VwPC9wPlxyXG4gICAgICA8cC1kcm9wZG93biBpbnB1dElkPVwicm9sZVwiIFtvcHRpb25zXT1cInBvbGljeUdyb3VwRGF0YVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFBvbGljeSBHcm91cFwiXHJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicG9saWN5SWRcIiBzdHlsZUNsYXNzPVwidy0xMDBcIiBmaWVsZEtleT1cIlNFVFRJTkdTX1BBR19BQ0NfQUNDRVNTX1BPTElDWV9HUk9VUF9QT0xJQ1lcIlxyXG4gICAgICAgIG9wdGlvbkxhYmVsPVwicG9saWN5Z3JvdXBuYW1lXCIgb3B0aW9uVmFsdWU9XCJpZFwiIFtmaWx0ZXJdPVwidHJ1ZVwiIGFyaWFGaWx0ZXJMYWJlbD1cIm51bGxcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJnZXRPcmdQYWdlcygncG9saWN5JylcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW0gcFRlbXBsYXRlPVwic2VsZWN0ZWRJdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IHBUb29sdGlwPVwie3tpdGVtPy5wb2xpY3lncm91cG5hbWV9fVwiIHRvb2x0aXBQb3NpdGlvbj1cInRvcFwiIGNsYXNzPVwidGV4dC10cnVuY2F0ZVwiPiB7e1xyXG4gICAgICAgICAgICBpdGVtPy5wb2xpY3lncm91cG5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtb2JqZWN0IHBUZW1wbGF0ZT1cIml0ZW1cIj5cclxuICAgICAgICAgIHt7IG9iamVjdC5wb2xpY3lncm91cG5hbWUgfX1cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3AtZHJvcGRvd24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9mb3JtPlxyXG48YnIgLz5cclxuIl19
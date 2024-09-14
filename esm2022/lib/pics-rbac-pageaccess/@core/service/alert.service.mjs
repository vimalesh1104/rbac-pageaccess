import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AlertService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class Alert {
    type;
    message;
}
export class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
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
export class UserRoleDto {
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
export class UserDto {
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
export class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLHVCQUF1QixDQUFDOzs7QUFHN0IsTUFBTSxPQUFPLFlBQVk7SUFJSDtJQUhaLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO0lBQy9CLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUVyQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxrRkFBa0Y7UUFDbEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDN0Isc0NBQXNDO29CQUN0QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCx1QkFBdUI7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ25ELElBQUksQ0FBQyxLQUFL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QixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sc0JBQXNCO0lBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDdkIsWUFBWSxFQUFFO1lBQ1osbUJBQW1CLEVBQUUsdUJBQXVCO1lBQzVDLGVBQWUsRUFBRSx5R0FBeUc7U0FDM0g7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG4gIGV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8QWxlcnQ+KCk7XHJcbiAgICBwcml2YXRlIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlcyBvbiByb3V0ZSBjaGFuZ2UgdW5sZXNzICdrZWVwQWZ0ZXJSb3V0ZUNoYW5nZScgZmxhZyBpcyB0cnVlXHJcbiAgICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIC8vIG9ubHkga2VlcCBmb3IgYSBzaW5nbGUgcm91dGUgY2hhbmdlXHJcbiAgICAgICAgICAgIHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsZXJ0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuU3VjY2VzcywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5FcnJvciwgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoQWxlcnRUeXBlLkluZm8sIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5XYXJuaW5nLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxlcnQodHlwZTogQWxlcnRUeXBlLCBtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5rZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGtlZXBBZnRlclJvdXRlQ2hhbmdlO1xyXG4gICAgICB0aGlzLnN1YmplY3QubmV4dCg8QWxlcnQ+eyB0eXBlOiB0eXBlLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAvLyBjbGVhciBhbGVydHNcclxuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoPGFueT57fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgRHluYW1pY09iamVjdCB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBBbGVydFR5cGUge1xyXG4gICAgU3VjY2VzcyxcclxuICAgIEVycm9yLFxyXG4gICAgSW5mbyxcclxuICAgIFdhcm5pbmdcclxuICB9XHJcbiAgZXhwb3J0IGNsYXNzIEFsZXJ0IHtcclxuICAgIHR5cGUhOiBBbGVydFR5cGU7XHJcbiAgICBtZXNzYWdlITogc3RyaW5nO1xyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIEluc2lnaHRzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNlcmllczogU2VyaWVzW107XHJcbiAgfVxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2VyaWVzIHtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtb250aDogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBTdGF0dXMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBVc2VyR3JvdXBEdG8ge1xyXG4gICAgaWQ/OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlckdyb3VwRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlUGFnZUR0byB7XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICByb3V0ZT86IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbiAgICBpc21lbnU/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlclJvbGVQYWdlRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRHRvIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaW9yaXR5PzogbnVtYmVyO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbiAgICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcclxuICAgIGRlZmF1bHRwYWdlaWQ/OiBudW1iZXI7XHJcbiAgICBwYXJlbnRpZD86IG51bWJlciB8IG51bGw7XHJcbiAgICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyUm9sZUR0bz4pIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIHByaW9yaXR5PzogbnVtYmVyO1xyXG4gICAgb3JkZXI/OiBudW1iZXI7XHJcbiAgICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcclxuICAgIGRlZmF1bHRwYWdlaWQ/OiBudW1iZXI7XHJcbiAgICBwYXJlbnRpZD86IG51bWJlciB8IG51bGw7XHJcbiAgICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbDxVc2VyRHRvPikge1xyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL29yZy9vcmdhbml6YXRpb24vYWxsJyxcclxuICAgICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuIl19
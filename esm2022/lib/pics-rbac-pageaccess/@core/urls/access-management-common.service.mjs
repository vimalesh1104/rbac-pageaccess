import { Injectable } from '@angular/core';
import { AccessManagementConfig } from '../urls/access-management-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/data-store.service";
export class AccessManagementCommonService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccessManagementCommonService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccessManagementCommonService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AccessManagementCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLW1hbmFnZW1lbnQtY29tbW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1wYWdlYWNjZXNzL3NyYy9saWIvcGljcy1yYmFjLXBhZ2VhY2Nlc3MvQGNvcmUvdXJscy9hY2Nlc3MtbWFuYWdlbWVudC1jb21tb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFNOUUsTUFBTSxPQUFPLDZCQUE2QjtJQUdwQjtJQUZaLE9BQU8sQ0FBTTtJQUNyQixXQUFXLENBQUs7SUFDaEIsWUFBb0IsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3JELElBQUcsR0FBRyxFQUFDO2dCQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsSUFBSSxhQUFhLENBQUMsSUFBUztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQUs7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFHLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7d0dBbENVLDZCQUE2Qjs0R0FBN0IsNkJBQTZCLGNBRjVCLE1BQU07OzRGQUVQLDZCQUE2QjtrQkFIekMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY2Vzc01hbmFnZW1lbnRDb25maWcgfSBmcm9tICcuLi91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbW1vblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgdXJsRGF0YTogYW55O1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZihyZXMpe1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldCBjbGlja2FibGVEYXRhKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy51cmxEYXRhID0gZGF0YTtcclxuICB9XHJcbiAgZ2V0IGNsaWNrYWJsZURhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51cmxEYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckxpc3Qob3JnaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0VXNlcm9yZ0xpc3QgKyBvcmdpZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb2xpY3lHcm91cExpc3Qob3JnaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Qb2xpY3lHcm91cC5nZXRQb2xpY3lHcm91cExpc3QucmVwbGFjZSgne29yZ2FuaXphdGlvbmlkfScsIFN0cmluZyhvcmdpZCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um9sZUxpc3Qob3JnaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlJvbGUuZ2V0Um9sZUxpc3QucmVwbGFjZSgne29yZ2lkfScsIFN0cmluZyhvcmdpZCkpKTtcclxuICB9XHJcblxyXG4gIGdldE9yZ2FuaXphdGlvbkxpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Pcmdhbml6YXRpb24uZ2V0T3JnYW5pemF0aW9uTGlzdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
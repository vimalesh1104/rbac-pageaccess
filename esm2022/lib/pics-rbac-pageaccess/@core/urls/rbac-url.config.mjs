export class RoleConfig {
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
export class UserConfig {
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
export class AttachmentConfig {
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
export class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
export class PermissionsURL {
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
export class AccessManagementConfig {
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
}
export class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
export class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}
export class DataBaseConfig {
    static EndPoint = {
        Database: {
            checkObjectType: '/database/checkObjectType',
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxVQUFVO0lBQ2QsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixJQUFJLEVBQUU7WUFDSixjQUFjLEVBQUUsc0JBQXNCO1lBQ3RDLFVBQVUsRUFBRSw2QkFBNkI7WUFDekMsY0FBYyxFQUFFLDRCQUE0QjtZQUM1QyxjQUFjLEVBQUUsc0JBQXNCO1lBQ3RDLGFBQWEsRUFBRSwyQ0FBMkM7WUFDMUQsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDOztBQUdKLE1BQU0sT0FBTyxVQUFVO0lBQ2QsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixJQUFJLEVBQUU7WUFDSixjQUFjLEVBQUUsV0FBVztZQUMzQix3QkFBd0IsRUFBRSxxQ0FBcUM7WUFDL0QsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtZQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7U0FDN0M7UUFDRCxRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUUsZUFBZTtZQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7WUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtTQUNoRDtLQUNGLENBQUM7O0FBRUosTUFBTSxPQUFPLGdCQUFnQjtJQUNwQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFdBQVcsRUFBRTtZQUNYLHFCQUFxQixFQUFFLDBCQUEwQjtZQUNqRCxpQkFBaUIsRUFBRSw4Q0FBOEM7WUFDakUsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLGNBQWMsRUFBRSx3QkFBd0I7WUFDeEMsYUFBYSxFQUFFLGlCQUFpQjtTQUNqQztLQUNGLENBQUM7O0FBRUosTUFBTSxPQUFPLGlCQUFpQjtJQUNyQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFdBQVcsRUFBRTtZQUNYLGtCQUFrQixFQUFFLHFDQUFxQztZQUN6RCxxQkFBcUIsRUFBRSx5Q0FBeUM7WUFDaEUsaUJBQWlCLEVBQUUscUNBQXFDO1lBQ3hELGtCQUFrQixFQUFFLG1FQUFtRTtTQUN4RjtLQUNGLENBQUM7O0FBRUosTUFBTSxPQUFPLGNBQWM7SUFDbEIsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUN4QixVQUFVLEVBQUU7WUFDVixrQkFBa0IsRUFBRSxzQ0FBc0M7WUFDMUQsY0FBYyxFQUFFLGlDQUFpQztZQUNqRCxhQUFhLEVBQUUsaUNBQWlDO1lBQ2hELGdCQUFnQixFQUFFLG1DQUFtQztZQUNyRCxzQkFBc0IsRUFBRSwyQ0FBMkM7WUFDbkUsaUJBQWlCLEVBQUUscURBQXFEO1lBQ3hFLGtCQUFrQixFQUFFLGlEQUFpRDtZQUNyRSwwQkFBMEIsRUFBRSx3REFBd0Q7U0FDckY7UUFDRCxJQUFJLEVBQUU7WUFDSixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLGdCQUFnQixFQUFFLHlCQUF5QjtZQUMzQyxXQUFXLEVBQUUscUNBQXFDO1NBQ25EO0tBQ0YsQ0FBQzs7QUFFSix3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CLHNCQUFzQjtBQUN0QixzREFBc0Q7QUFDdEQsbUlBQW1JO0FBQ25JLFFBQVE7QUFDUixPQUFPO0FBQ1AsSUFBSTtBQUVKLE1BQU0sT0FBTyxzQkFBc0I7SUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixZQUFZLEVBQUU7WUFDWixtQkFBbUIsRUFBRSwrQ0FBK0M7WUFDcEUsZUFBZSxFQUNiLHlHQUF5RztTQUM1RztRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxPQUFPO1NBQ2pCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsUUFBUSxFQUFFLE9BQU87WUFDakIsWUFBWSxFQUFFLDJDQUEyQztZQUN6RCxZQUFZLEVBQUUsNkNBQTZDO1lBQzNELFlBQVksRUFBRSw4Q0FBOEM7WUFDNUQsbUJBQW1CLEVBQUUsb0RBQW9EO1NBQzFFO1FBQ0QsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLFlBQVk7WUFDckIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsY0FBYyxFQUFFLHlCQUF5QjtTQUMxQztRQUNELFdBQVcsRUFBRTtZQUNYLGNBQWMsRUFBRSxzQ0FBc0M7WUFDdEQsa0JBQWtCLEVBQUUsbUVBQW1FO1NBQ3hGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxXQUFXLEVBQUUsMkNBQTJDO1NBQ3pEO0tBQ0YsQ0FBQzs7QUFFSixNQUFNLE9BQU8sUUFBUTtJQUNuQixPQUFPLEdBQUUsRUFBRSxDQUFDO0lBQ1osUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLE1BQU0sQ0FBTztJQUNiLEtBQUssQ0FBTztJQUNaLFdBQVcsQ0FBZTtDQUMzQjtBQUNELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQVksQ0FBVTtJQUN0QixZQUFZLENBQVU7SUFDdEIsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsQ0FBVTtJQUN2QixhQUFhLENBQVU7SUFDdkIsUUFBUSxDQUFTO0NBQ2xCO0FBRUQsTUFBTSxPQUFPLGNBQWM7SUFDbEIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUUsMkJBQTJCO1NBQzdDO0tBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSb2xlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcm9sZToge1xyXG4gICAgICBnZXRBbGxVc2VyUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXHJcbiAgICAgIGdldExhbmRpbmdQYWdlOiAnL3BsYXRmb3JtL21lbnUvYXBwbGljYXRpb24nLFxyXG4gICAgICBhZGRQb2xpY3lHcm91cDogJy9hY2Nlc3MtY29udHJvbC9yb2xlJyxcclxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcclxuICAgICAgZG9zc2llcjogJy9kb3NzaWVyJ1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXHJcbiAgICAgIGdldEFsbFVzZXJBY3RpdmVJbmFjdGl2ZTogJy9vcmcvdXNlcj9pbmNsdWRlSW5hY3RpdmVVc2Vycz10cnVlJyxcclxuICAgICAgYWN0aXZhdGVVc2VyOiAnL29yZy91c2VyL2FjdGl2YXRlJyxcclxuICAgICAgY3JlYXRlVXNlcjogJy9vcmcvdXNlci9jcmVhdGUnLFxyXG4gICAgICB1c2VyUm9sZTogJy9vcmcvdXNlci9yb2xlJyxcclxuICAgICAgbWFuYWdlbWVudGdyb3VwOiAnL29yZy90ZWFtL21hbmFnZW1lbnRncm91cCcsXHJcbiAgICAgIGdldEFsbFVzZXJPcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgUHJvdmlkZXI6IHtcclxuICAgICAgZ2V0UHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlcicsXHJcbiAgICAgIHNlYXJjaFByb3ZpZGVyTGlzdDogJy9yZWYvcHJvdmlkZXIvc2VhcmNoJyxcclxuICAgICAgYWRkUHJvdmlkZXJVc2VyOiAnL3JlZi9wcm92aWRlci9jcmVhdGUvYWNjb3VudCdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcclxuICAgICAgR2V0Q2F0ZWdvcnlMb29rdXA6ICcvcGxhdGZvcm0vbWFzdGVyL2xvb2t1cC9sb29rdXBieWNhdGVnb3J5bmFtZScsXHJcbiAgICAgIFVwbG9hZEtleTogJy9jb21tb24vZmlsZXMvdXBsb2FkLWtleScsXHJcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxyXG4gICAgICBQb3N0QXR0YWNobWVudDogJy9yZWYvYXR0YWNobWVudC9jcmVhdGUnLFxyXG4gICAgICBQdXRBdHRhY2htZW50OiAnL3JlZi9hdHRhY2htZW50J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgcG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxyXG4gICAgICBnZXRBbGxQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9hbGwnLFxyXG4gICAgICBjcmVhdGVQb2xpY3lHcm91cDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeUdyb3VwJyxcclxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNVUkwge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnRzID0ge1xyXG4gICAgcGVybWlzc2lvbjoge1xyXG4gICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICBwYWdlUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UnLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve2lkfScsXHJcbiAgICAgIGNyZWF0ZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9jcmVhdGUnLFxyXG4gICAgICB1cGRhdGVEZWxldGVQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24ve3Blcm1pc3Npb25pZH0nLFxyXG4gICAgICBnZXRQZXJtaXNzaW9uVHJlZTogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2Uve3BhZ2VpZH0ve3BhcmVudGlkfScsXHJcbiAgICAgIGdldFBlcm1pc3Npb25UeXBlczogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3R5cGUve2FwcGxpY2F0aW9uaWR9JyxcclxuICAgICAgYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWU6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9hcHBsaWNhdGlvbi97YXBwbGljYXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBjcmVhdGVQYWdlOiAnL3BsYXRmb3JtL21lbnUvY3JlYXRlJyxcclxuICAgICAgdXBkYXRlRGVsZXRlUGFnZTogJy9wbGF0Zm9ybS9tZW51L3twYWdlaWR9JyxcclxuICAgICAgQWxsUGFnZVRyZWU6ICcvcGxhdGZvcm0vbWVudS90cmVlL3thcHBsaWNhdGlvbmlkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbi8vIGV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuLy8gICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4vLyAgICAgT3JnYW5pemF0aW9uOiB7XHJcbi8vICAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvb3JnL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4vLyAgICAgICBnZXRPcmdhbml6YXRpb246ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246XHJcbiAgICAgICAgJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9LFxyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRQYWdlOiAnL3BhZ2UnXHJcbiAgICB9LFxyXG4gICAgQXNzZXQ6IHtcclxuICAgICAgZ2V0QXNzZXQ6ICdhc3NldCcsXHJcbiAgICAgIGdldFBhZ2VBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldHBhZ2VieWlkJyxcclxuICAgICAgZ2V0VXNlckFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0VXNlckFzc2V0cycsXHJcbiAgICAgIGdldFJvbGVBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFJvbGVBc3NldHMvJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFBvbGljeUdyb3VwQXNzZXRzJ1xyXG4gICAgfSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgZ2V0VXNlcjogJy9vcmcvdXNlci8nLFxyXG4gICAgICBnZXRVc2VyTGlzdDogJy9vcmcvdXNlci9hbGwnLFxyXG4gICAgICBnZXRVc2Vyb3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJ1xyXG4gICAgfSxcclxuICAgIFBvbGljeUdyb3VwOiB7XHJcbiAgICAgIGdldFBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgUm9sZToge1xyXG4gICAgICBnZXRSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvJyxcclxuICAgICAgZ2V0Um9sZUxpc3Q6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9vcmdhbml6YXRpb24ve29yZ2lkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSQkFDSU5GTyB7XHJcbiAgYXBpSG9zdCA9Jyc7XHJcbiAgdG9rZW5LZXkgPSAnJztcclxuICBvdGhlcnM/OiBhbnk7XHJcbiAgb3JnSUQ/OiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ/OiBFbnZpcm9ubWVudDtcclxufVxyXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIG1zdHJVc2VybmFtZT86IHN0cmluZztcclxuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgbXN0clVSTD86IHN0cmluZztcclxuICBtc3RyUHJvamVjdElEPzogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFCYXNlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgRGF0YWJhc2U6IHtcclxuICAgICAgY2hlY2tPYmplY3RUeXBlOiAnL2RhdGFiYXNlL2NoZWNrT2JqZWN0VHlwZScsXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLW1hbmFnZW1lbnQtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHNCQUFzQjtJQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ3ZCLFlBQVksRUFBRTtZQUNaLG1CQUFtQixFQUFFLCtDQUErQztZQUNwRSxlQUFlLEVBQ2IseUdBQXlHO1NBQzVHO1FBQ0QsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsT0FBTztZQUNqQixnQkFBZ0IsRUFBRSxlQUFlO1lBQ2pDLFlBQVksRUFBRSwyQ0FBMkM7WUFDekQsWUFBWSxFQUFFLDZDQUE2QztZQUMzRCxZQUFZLEVBQUUsNkNBQTZDO1lBQzNELG1CQUFtQixFQUFFLG9EQUFvRDtTQUMxRTtRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLGNBQWMsRUFBRSx5QkFBeUI7U0FDMUM7UUFDRCxXQUFXLEVBQUU7WUFDWCxjQUFjLEVBQUUsc0NBQXNDO1lBQ3RELGtCQUFrQixFQUFFLG1FQUFtRTtTQUN4RjtRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsV0FBVyxFQUFFLDJDQUEyQztTQUN6RDtLQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWNjZXNzTWFuYWdlbWVudENvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIE9yZ2FuaXphdGlvbjoge1xyXG4gICAgICBnZXRPcmdhbml6YXRpb25MaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24vYWxsJyxcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uOlxyXG4gICAgICAgICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnSWR9P3JldHVyblVzZXJQYWdlPWZhbHNlJmV4Y2x1ZGVOb0FjdGl2ZVZlcnNpb25QYWdlcz10cnVlJ1xyXG4gICAgfSxcclxuICAgIFBhZ2U6IHtcclxuICAgICAgZ2V0UGFnZTogJy9wYWdlJ1xyXG4gICAgfSxcclxuICAgIEFzc2V0OiB7XHJcbiAgICAgIGdldEFzc2V0OiAnYXNzZXQnLFxyXG4gICAgICBnZXRBc3NldERlc2VsZWN0OiAnYXNzZXREZXNlbGVjdCcsXHJcbiAgICAgIGdldFBhZ2VBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldHBhZ2VieWlkJyxcclxuICAgICAgZ2V0VXNlckFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0VXNlckFzc2V0cycsXHJcbiAgICAgIGdldFJvbGVBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFJvbGVBc3NldHMnLFxyXG4gICAgICBnZXRQb2xpY3lHcm91cEFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0UG9saWN5R3JvdXBBc3NldHMnXHJcbiAgICB9LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRVc2VyOiAnL29yZy91c2VyLycsXHJcbiAgICAgIGdldFVzZXJMaXN0OiAnL29yZy91c2VyL2FsbCcsXHJcbiAgICAgIGdldFVzZXJvcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgUG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXA6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC8nLFxyXG4gICAgICBnZXRQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfSdcclxuICAgIH0sXHJcbiAgICBSb2xlOiB7XHJcbiAgICAgIGdldFJvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS8nLFxyXG4gICAgICBnZXRSb2xlTGlzdDogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19
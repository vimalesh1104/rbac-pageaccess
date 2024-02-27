export class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLW1hbmFnZW1lbnQtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHNCQUFzQjs7QUFDbkIsK0JBQVEsR0FBRztJQUN2QixZQUFZLEVBQUU7UUFDWixtQkFBbUIsRUFBRSwrQ0FBK0M7UUFDcEUsZUFBZSxFQUNiLHlHQUF5RztLQUM1RztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsUUFBUSxFQUFFLE9BQU87UUFDakIsWUFBWSxFQUFFLDJDQUEyQztRQUN6RCxZQUFZLEVBQUUsNkNBQTZDO1FBQzNELFlBQVksRUFBRSw2Q0FBNkM7UUFDM0QsbUJBQW1CLEVBQUUsb0RBQW9EO0tBQzFFO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLFlBQVk7UUFDckIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsY0FBYyxFQUFFLHlCQUF5QjtLQUMxQztJQUNELFdBQVcsRUFBRTtRQUNYLGNBQWMsRUFBRSxzQ0FBc0M7UUFDdEQsa0JBQWtCLEVBQUUsbUVBQW1FO0tBQ3hGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUUsMkNBQTJDO0tBQ3pEO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbkxpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi9hbGwnLFxyXG4gICAgICBnZXRPcmdhbml6YXRpb246XHJcbiAgICAgICAgJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL3tvcmdJZH0/cmV0dXJuVXNlclBhZ2U9ZmFsc2UmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnXHJcbiAgICB9LFxyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRQYWdlOiAnL3BhZ2UnXHJcbiAgICB9LFxyXG4gICAgQXNzZXQ6IHtcclxuICAgICAgZ2V0QXNzZXQ6ICdhc3NldCcsXHJcbiAgICAgIGdldFBhZ2VBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldHBhZ2VieWlkJyxcclxuICAgICAgZ2V0VXNlckFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0VXNlckFzc2V0cycsXHJcbiAgICAgIGdldFJvbGVBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFJvbGVBc3NldHMnLFxyXG4gICAgICBnZXRQb2xpY3lHcm91cEFzc2V0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvYXNzZXQvZ2V0UG9saWN5R3JvdXBBc3NldHMnXHJcbiAgICB9LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBnZXRVc2VyOiAnL29yZy91c2VyLycsXHJcbiAgICAgIGdldFVzZXJMaXN0OiAnL29yZy91c2VyL2FsbCcsXHJcbiAgICAgIGdldFVzZXJvcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXHJcbiAgICB9LFxyXG4gICAgUG9saWN5R3JvdXA6IHtcclxuICAgICAgZ2V0UG9saWN5R3JvdXA6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC8nLFxyXG4gICAgICBnZXRQb2xpY3lHcm91cExpc3Q6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lHcm91cC9vcmdhbml6YXRpb24ve29yZ2FuaXphdGlvbmlkfSdcclxuICAgIH0sXHJcbiAgICBSb2xlOiB7XHJcbiAgICAgIGdldFJvbGU6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS8nLFxyXG4gICAgICBnZXRSb2xlTGlzdDogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9J1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19
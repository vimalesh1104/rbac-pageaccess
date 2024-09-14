export class DynamicTabPageConfig {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0Bjb3JlL3VybHMvZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxvQkFBb0I7SUFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUN2QixJQUFJLEVBQUU7WUFDSixhQUFhLEVBQUUsMENBQTBDO1lBQ3pELE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxtQkFBbUIsRUFBRSwwREFBMEQ7WUFDL0Usa0JBQWtCLEVBQUUsK0JBQStCO1lBQ25ELGlCQUFpQixFQUFFLHdCQUF3QjtZQUMzQyxrQkFBa0IsRUFBRSxZQUFZO1NBQ2pDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsbUJBQW1CLEVBQUUsK0JBQStCO1NBQ3JEO1FBQ0QsWUFBWSxFQUFFO1lBQ1osa0JBQWtCLEVBQUUscURBQXFEO1NBQzFFO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLDhCQUE4QjtZQUM5QyxjQUFjLEVBQUUsaUJBQWlCO1lBQ2pDLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0I7UUFDRCxXQUFXLEVBQUU7WUFDWCxnQkFBZ0IsRUFBRSwwQ0FBMEM7U0FDN0Q7S0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJQYWdlQ29uZmlnIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xyXG4gICAgUGFnZToge1xyXG4gICAgICBnZXRBY3RpdmVQYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZXZlcnNpb24ve2lkfScsXHJcbiAgICAgIGdldFBhZ2U6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlJyxcclxuICAgICAgZ2V0UGFnZUJ5SWQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL3tpZH0nLFxyXG4gICAgICBnZXRSZXNwb25zZUJ5UGFnZUlkOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS97cmVzcG9uc2VJZH0vZ2V0QnlQYWdlSWQve3BhZ2VJZH0nLFxyXG4gICAgICBjcmVhdGVGb3JtUmVzcG9uc2U6ICcvc29sdXRpb24vZm9ybXJlc3BvbnNlL2NyZWF0ZScsXHJcbiAgICAgIHBhdGNoRm9ybVJlc3BvbnNlOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZScsXHJcbiAgICAgIHVwZGF0ZUZvcm1SZXNwb25zZTogJy9wYWdlZGF0YS8nXHJcbiAgICB9LFxyXG4gICAgTmFycmF0aXZlOiB7XHJcbiAgICAgIGdldEluY2lkZW50TGlzdEJ5SWQ6ICcvaW5jaWRlbnQvbGlzdEJ5U291cmNlSWQve2lkfSdcclxuICAgIH0sXHJcbiAgICBOb3RpZmljYXRpb246IHtcclxuICAgICAgY3JlYXRlU3VydmV5Q29uZmlnOiAnL3N1cnZleWNvbmZpZy91c2Vyc3VydmV5L3tpZH0ve3N0YXR1c30ve3BhZ2VkYXRhaWR9J1xyXG4gICAgfSxcclxuICAgIEZpbmFuY2U6IHtcclxuICAgICAgZXhwb3J0RG9jdW1lbnQ6ICcvaW50ZWdyYXRlZC9leHBvcnREb2N1bWVudHMvJyxcclxuICAgICAgdXBsb2FkRG9jdW1lbnQ6ICdkb2N1bWVudC91cGxvYWQnLFxyXG4gICAgICBnZXRVbmlxdWVJZDogJy91bmlxdWVJZExvZ2ljLydcclxuICAgIH0sXHJcbiAgICBBdHRhY2htZW50czoge1xyXG4gICAgICBjcmVhdGVBdHRhY2htZW50OiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS1hdHRhY2htZW50L2NyZWF0ZSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==
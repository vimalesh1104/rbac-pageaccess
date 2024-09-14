import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { MaskPipe } from './ssnMask.pipe';
import * as i0 from "@angular/core";
export class SharedPipesModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS9waXBlL3NoYXJlZC1waXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUTFDLE1BQU0sT0FBTyxpQkFBaUI7d0dBQWpCLGlCQUFpQjt5R0FBakIsaUJBQWlCLGlCQUpiLFFBQVEsRUFBRSxVQUFVLGFBRHpCLFlBQVksYUFFWixRQUFRLEVBQUUsVUFBVTt5R0FHbkIsaUJBQWlCLGFBRmpCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxZQUh2QixZQUFZOzs0RkFLWCxpQkFBaUI7a0JBTjdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbHRlclBpcGUgfSBmcm9tICcuL2ZpbHRlci5waXBlJztcclxuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICcuL3Nzbk1hc2sucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW01hc2tQaXBlLCBGaWx0ZXJQaXBlXSxcclxuICBleHBvcnRzOiBbTWFza1BpcGUsIEZpbHRlclBpcGVdLFxyXG4gIHByb3ZpZGVyczogW01hc2tQaXBlLCBGaWx0ZXJQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkUGlwZXNNb2R1bGUge31cclxuIl19
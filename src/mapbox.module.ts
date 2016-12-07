/*
 *
 * Mapbox module
 *
 * https://angular.io/docs/ts/latest/guide/ngmodule.html
 *
 */
import { NgModule, ModuleWithProviders }          from '@angular/core';
import { MapBoxComponent }                        from './components/mapbox.component';
import { MapBoxMarkerDirective }                  from './components/mapboxMarker.component';
import { MapBoxMarkerDirectionComponent }         from './components/mapboxMarkerDirection.component';
import { MapBoxService }                          from './services/mapbox.service';
/*
 *
 * @NgModule
 *
 * The @NgModule decorator defines the metadata for the module.
 * 
 * We'll take an intuitive approach to understanding the metadata and fill in details as we go.
 *
 */
@NgModule({
    exports: [
        MapBoxComponent,
        MapBoxMarkerDirective,
        MapBoxMarkerDirectionComponent
    ], 
    declarations: [
        MapBoxComponent,
        MapBoxMarkerDirective,
        MapBoxMarkerDirectionComponent
    ]
})
export class MapBoxModule {
    static forRoot(config: String): ModuleWithProviders {
        return {
            ngModule: MapBoxModule,
            providers: [
                { provide: 'MAPBOX_KEY', useValue: config }
            ]
        };
    }
 }
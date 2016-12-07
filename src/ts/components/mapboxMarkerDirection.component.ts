/*
*
* Mapbox Marker Directive component
*
*/
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MapBoxService } from '../services/mapbox.service';

@Component({
	selector: 'mapbox-marker-direction',
  	template: `
      <a (click)="action()">
        <ng-content></ng-content>
      </a>
    `,
    inputs: ['direction'],
	providers: [MapBoxService]
})

export class MapBoxMarkerDirectionComponent {
    direction: String = "next";

	constructor(@Inject(MapBoxService) private _mapBoxService: MapBoxService) { }

    action() {
        if(this.direction === "next") {
            this._mapBoxService.nextMarker();
        } else {
            this._mapBoxService.prevMarker();
        }
    }
 }
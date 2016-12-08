/*
*
* Mapbox component
*
*/
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MapBoxService } from '../services/mapbox.service';

@Component({
	selector: 'mapbox',
  	template: `
      <div style="position: relative; overflow: hidden;">
        <div [attr.id]="'map' + index" style="min-height: 500px;"></div>
        <ng-content></ng-content>
      </div>
    `,
    inputs: ['style', 'center', 'zoom', 'hash', 'index'],
	providers: [MapBoxService]
})

export class MapBoxComponent implements OnInit {
	@Output() state = new EventEmitter();

    style: String = 'mapbox://styles/mapbox/streets-v9';
    center: Object = [-5.646973, 52.087483];
    zoom: number = 6;
    hash: Boolean = false;
		public index: number = 0;

	constructor(@Inject(MapBoxService) private _mapBoxService: MapBoxService) { }

    ngOnInit() {
		var _self = this;

		setTimeout(function() {
			_self._mapBoxService.Map({
				container: 'map' + _self.index,
				style: _self.style,
				center: _self.center, 
				zoom: _self.zoom, 
				hash: _self.hash
			});

			_self.state.emit("Loaded");
		}, 100);
    }
 }
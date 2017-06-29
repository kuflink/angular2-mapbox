/*
*
* Mapbox component
*
*/
import { Component, OnInit, Inject, Output, Input, EventEmitter } from '@angular/core';
import { MapBoxService } from '../services/mapbox.service';
import { MapOptions } from '../interfaces';

@Component({
	selector: 'mapbox',
	template: `
      <div style="position: relative; overflow: hidden;">
        <div [attr.id]="'map' + index" style="min-height: 500px;"></div>
        <ng-content></ng-content>
      </div>
    `,
	providers: [MapBoxService]
})

export class MapBoxComponent implements OnInit {
	@Output() state = new EventEmitter();
	@Input('options') mapOptions: MapOptions = this.defaultOptions();



	constructor( @Inject(MapBoxService) private _mapBoxService: MapBoxService) { }

	ngOnInit() {
		setTimeout(() => {
			this._mapBoxService.Map(this.mapOptions);

			this.state.emit("Loaded");
		}, 100);
	}

	private defaultOptions(): MapOptions {
		return {
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [-5.646973, 52.087483],
			zoom: 6,
			hash: false,
			interactive: true,
			index: 0,
			bearingSnap: 7,
			pitchWithRotate: true,
			logoPosition: 'bottom-left',
			classes: [],
			attributionControl: true,
			failIfMajorPerformanceCaveat: false,
			preserveDrawingBuffer: false,
			refreshExpiredTiles: true,
			maxBounds: undefined,
			scrollZoom: true,
			boxZoom: true,
			dragRotate: true,
			dragPan: true,
			keyboard: true,
			doubleClickZoom: true,
			touchZoomRotate: true,
			trackResize: true,
			bearing: 0,
			pitch: 0,
			renderWorldCopies: true
		}
	}
}
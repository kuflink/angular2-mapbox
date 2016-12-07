/*
*
* Mapbox Marker component
*
*/
import { Directive, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';

import { MapBoxService } from '../services/mapbox.service';

@Directive({
	selector: 'mapbox-marker',
	inputs: ['image', 'width', 'height', 'coordinates', 'click', 'data', 'flyTo']
})

export class MapBoxMarkerDirective implements OnInit {
		image: String;
		width: number = 60;
		height: number = 60;
		coordinates: Object;
		popup: String;
		map: Object;
		data: Object;
		@Output() click = new EventEmitter();

		constructor(@Inject(MapBoxService) private _mapBoxService: MapBoxService) {}

		ngOnInit() {

			var _self = this;
			var el = document.createElement('div');

			el.className = 'marker';
			el.style.backgroundImage = 'url(' + this.image + ')';
			el.style.backgroundRepeat = 'no-repeat';
			el.style.width = this.width + 'px';	
			el.style.height = this.height + 'px';

			this._mapBoxService.Marker(
				el, // element
				{offset: [-this.width / 2, -this.height / 2]}, // options
				this.coordinates // coordinates
			);  

			el.addEventListener("click", function() {

				if(_self.flyTo) {
					_self._mapBoxService.flyTo(_self.coordinates, _self.flyTo);
				}
					
				_self.click.emit({
					data: _self.data,
					coordinates: _self.coordinates
				});
			});
		}
 }
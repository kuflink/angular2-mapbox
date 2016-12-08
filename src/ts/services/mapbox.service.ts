/// <reference path="../../../node_modules/@types/mapbox/index.d.ts" />
import { Injectable, Inject } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Injectable()
export class MapBoxService {
    accessToken: String;
		public map: Object;

  	constructor (@Inject('MAPBOX_KEY') _config: String) {
      if(_config) this.accessToken = _config;
    }

    Map(options: Object) {
			mapboxgl.accessToken = this.accessToken;

			this.map = new mapboxgl.Map(options);

			return true; 
    }

    Marker(el: any, options: Object, coordinates: Object, index: number) {
			var _self = this;

			setTimeout(function() {
				new mapboxgl.Marker(el, options)
					.setLngLat(coordinates)
					.addTo(_self.map);
			}, 100);
			
    }

	flyTo(coordinates: Object, zoom: number) {
		var _self = this;

		setTimeout(function() {
			console.log(_self.map);
			_self.map.flyTo({ center: coordinates, zoom: 16 });
		},100);
	}

	prevMarker() {
		console.log(this.map);
	}

	nextMarker() {
		console.log(this.map);
	}
}
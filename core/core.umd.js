(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.mapbox = global.mapbox || {}, global.mapbox.core = global.mapbox.core || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.MapBoxService = class MapBoxService {
    constructor(_config) {
        if (_config)
            this.accessToken = _config;
    }
    Map(options) {
        mapboxgl.accessToken = this.accessToken;
        this.map = new mapboxgl.Map(options);
        return true;
    }
    Marker(el, options, coordinates) {
        var _self = this;
        setTimeout(function () {
            new mapboxgl.Marker(el, options)
                .setLngLat(coordinates)
                .addTo(_self.map);
        }, 100);
    }
    flyTo(coordinates, zoom) {
        var _self = this;
        setTimeout(function () {
            _self.map.flyTo({ center: coordinates, zoom: zoom });
        }, 100);
    }
    prevMarker() {
        console.log(this.map);
    }
    nextMarker() {
        console.log(this.map);
    }
};
exports.MapBoxService = __decorate$1([
    _angular_core.Injectable(),
    __param$1(0, _angular_core.Inject('MAPBOX_KEY')),
    __metadata$1("design:paramtypes", [String])
], exports.MapBoxService);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
*
* Mapbox component
*
*/
exports.MapBoxComponent = class MapBoxComponent {
    constructor(_mapBoxService) {
        this._mapBoxService = _mapBoxService;
        this.state = new _angular_core.EventEmitter();
        this.style = 'mapbox://styles/mapbox/streets-v9';
        this.center = [-5.646973, 52.087483];
        this.zoom = 6;
        this.hash = false;
        this.index = 0;
    }
    ngOnInit() {
        var _self = this;
        setTimeout(function () {
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
};
__decorate([
    _angular_core.Output(),
    __metadata("design:type", Object)
], exports.MapBoxComponent.prototype, "state", void 0);
exports.MapBoxComponent = __decorate([
    _angular_core.Component({
        selector: 'mapbox',
        template: `
      <div style="position: relative; overflow: hidden;">
        <div [attr.id]="'map' + index" style="min-height: 500px;"></div>
        <ng-content></ng-content>
      </div>
    `,
        inputs: ['style', 'center', 'zoom', 'hash', 'index'],
        providers: [exports.MapBoxService]
    }),
    __param(0, _angular_core.Inject(exports.MapBoxService)),
    __metadata("design:paramtypes", [exports.MapBoxService])
], exports.MapBoxComponent);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
*
* Mapbox Marker component
*
*/
exports.MapBoxMarkerDirective = class MapBoxMarkerDirective {
    constructor(_mapBoxService) {
        this._mapBoxService = _mapBoxService;
        this.width = 60;
        this.height = 60;
        this.click = new _angular_core.EventEmitter();
    }
    ngOnInit() {
        var _self = this;
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + this.image + ')';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.width = this.width + 'px';
        el.style.height = this.height + 'px';
        this._mapBoxService.Marker(el, // element
        { offset: [-this.width / 2, -this.height / 2] }, // options
        this.coordinates // coordinates
        );
        el.addEventListener("click", function () {
            if (_self.flyTo) {
                _self._mapBoxService.flyTo(_self.coordinates, _self.flyTo);
            }
            _self.click.emit({
                data: _self.data,
                coordinates: _self.coordinates
            });
        });
    }
};
__decorate$2([
    _angular_core.Output(),
    __metadata$2("design:type", Object)
], exports.MapBoxMarkerDirective.prototype, "click", void 0);
exports.MapBoxMarkerDirective = __decorate$2([
    _angular_core.Directive({
        selector: 'mapbox-marker',
        inputs: ['image', 'width', 'height', 'coordinates', 'click', 'data', 'flyTo']
    }),
    __param$2(0, _angular_core.Inject(exports.MapBoxService)),
    __metadata$2("design:paramtypes", [exports.MapBoxService])
], exports.MapBoxMarkerDirective);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
*
* Mapbox Marker Directive component
*
*/
let MapBoxMarkerDirectionComponent = class MapBoxMarkerDirectionComponent {
    constructor(_mapBoxService) {
        this._mapBoxService = _mapBoxService;
        this.direction = "next";
    }
    action() {
        if (this.direction === "next") {
            this._mapBoxService.nextMarker();
        }
        else {
            this._mapBoxService.prevMarker();
        }
    }
};
MapBoxMarkerDirectionComponent = __decorate$4([
    _angular_core.Component({
        selector: 'mapbox-marker-direction',
        template: `
      <a (click)="action()">
        <ng-content></ng-content>
      </a>
    `,
        inputs: ['direction'],
        providers: [exports.MapBoxService]
    }),
    __param$3(0, _angular_core.Inject(exports.MapBoxService)),
    __metadata$4("design:paramtypes", [exports.MapBoxService])
], MapBoxMarkerDirectionComponent);

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 *
 * Mapbox module
 *
 * https://angular.io/docs/ts/latest/guide/ngmodule.html
 *
 */
/*
 *
 * @NgModule
 *
 * The @NgModule decorator defines the metadata for the module.
 *
 * We'll take an intuitive approach to understanding the metadata and fill in details as we go.
 *
 */
exports.MapBoxModule = MapBoxModule_1 = class MapBoxModule {
    static forRoot(config) {
        return {
            ngModule: MapBoxModule_1,
            providers: [
                { provide: 'MAPBOX_KEY', useValue: config }
            ]
        };
    }
};
exports.MapBoxModule = MapBoxModule_1 = __decorate$3([
    _angular_core.NgModule({
        exports: [
            exports.MapBoxComponent,
            exports.MapBoxMarkerDirective,
            MapBoxMarkerDirectionComponent
        ],
        declarations: [
            exports.MapBoxComponent,
            exports.MapBoxMarkerDirective,
            MapBoxMarkerDirectionComponent
        ]
    }),
    __metadata$3("design:paramtypes", [])
], exports.MapBoxModule);
var MapBoxModule_1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.umd.js.map

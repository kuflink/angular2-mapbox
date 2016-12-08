# angular2-mapbox

[![Join the chat at https://gitter.im/kuflink/angular2-mapbox](https://badges.gitter.im/kuflink/angular2-mapbox.svg)](https://gitter.im/kuflink/angular2-mapbox?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular2 components for [mapbox-gl](https://www.npmjs.com/package/mapbox-gl). This project is currently in development state. Please do not use this in production.

## Install

```bash
npm install --save angular2-mapbox
```

Inside your @NgModule, add the MapBoxModule along with your API key for Mapbox ([you can grab one here](https://www.mapbox.com/studio/account/tokens/)):

```javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { MapBoxModule }  from 'angular2-mapbox/core';

@NgModule({
  imports: [ 
    BrowserModule, 
    MapBoxModule.forRoot("REPLACE_WITH_YOUR_API_KEY")
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Now added the map for [mapbox-gl](https://www.npmjs.com/package/mapbox-gl) and angular2-mapbox in your **system.config.js**

```javascript
(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      ...
      'mapbox-gl': 'npm:mapbox-gl',
      'angular2-mapbox/core': 'npm:angular2-mapbox/core/core.umd.js'
    },
    ...
})(this);
```

## Usage

Now you can start using the angular2 mapbox components.

### mapbox[_style, center, zoom, hash, index_]

```html
<mapbox [center]="[-5.646973, 52.087483]"></mapbox>
```

* style: string, defaultsTo = **'mapbox://styles/mapbox/streets-v9'**
* center: array, defaultsTo = **[-5.646973, 52.087483]**
* zoom: number, defaultsTo = **6**
* hash: boolean, defaultsTo = **false**
* index: number, defaultsTo = **0** (NOTE: Must be used if multiple maps are displayed)

### mapbox-marker[_image, width, height, coordinates, click, data, flyTo_]

```html
<mapbox [center]="[-5.646973, 52.087483]">
    <mapbox-marker
        *ngFor="let marker of map.markers"
        flyTo="16"
        [image]="marker.image"
        [coordinates]="marker.coordinates"
        [popup]="marker.popup"
        [data]="marker.data"
        (click)="markerClicked($event)">
    </mapbox-marker>
</mapbox>
```

* image: string
* width: number = defaultsTo = **60**
* height: number = defaultsTo = **60**
* coordinates: array 
* click: function
* data: [object, string]
* flyTo: number (If present, when clicked the marker is flown to)
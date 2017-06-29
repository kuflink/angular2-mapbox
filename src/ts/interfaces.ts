export interface MapOptions {
    style: string;
	center: object;
	hash: boolean;
	index: number;
	zoom?: number;
	interactive?: boolean;
	bearingSnap?: number;
	pitchWithRotate?: boolean;
	logoPosition?: string;
	classes?: string[];
	attributionControl?: boolean;
	failIfMajorPerformanceCaveat?: boolean;
	preserveDrawingBuffer?: boolean;
	refreshExpiredTiles?: boolean;
	maxBounds?: object;
	scrollZoom?: (boolean | object);
	boxZoom?: boolean;
	dragRotate?: boolean;
	dragPan?: boolean;
	keyboard?: boolean;
	doubleClickZoom?: boolean;
	touchZoomRotate?: (boolean | object);
	trackResize?: boolean;
	bearing?: number;
	pitch?: number;
	renderWorldCopies?: boolean;
}
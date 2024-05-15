export type GeoJsonTileStyleLayerPaintFill = {
  'fill-color': string | string[] | null
  'fill-opacity'?: string | number | null
}

export type GeoJsonTileStyleLayerPaintLine = {
  'line-color'?: string | string[] | null
  'line-opacity'?: string | number | null
}

export type GeoJsonTileStyleLayer = {
  id: string
  type: 'fill' | 'line' | 'symbol' | 'circle' | 'heatmap' | 'fill-extrusion' | 'raster' | 'hillshade' | 'background'
  paint: GeoJsonTileStyleLayerPaintLine | GeoJsonTileStyleLayerPaintFill
  filter?: string | string[] | [string, string[]]
  layout?: {
    visibility: 'visible' | 'none'
  }
  source: string
  maxzoom?: number
  'source-layer': string
}

export type GeoJsonTileStyleSource = Record<
  string,
  {
    url: string
    type: 'vector' | 'raster' | 'raster-dem' | 'geojson' | 'video' | 'image' | 'canvas'
  }
>

export type GeoJsonTileStyle = {
  id: string
  name: string
  center: [number, number]
  layers: GeoJsonTileStyleLayer[]
  sources: GeoJsonTileStyleSource
  zoom?: number
  pitch?: number
  bearing?: 0
  version?: 8
  metadata?: Record<string, string | number>
}

export type LayerDataMeta = {
  severity: string
  fillColor: string | null
  fillOpacity?: number
  lineColor: string | null
}

export type LayerData = {
  sourceLayer: string
  meta: LayerDataMeta[]
}

export type AdvisoryTileStyleType = 'excluded_rpa' | 'recreational' | 'reoc'

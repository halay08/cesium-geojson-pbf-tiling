import * as path from 'path'
import * as fs from 'fs'
import { GeoJsonTileStyle, AdvisoryTileStyleType, GeoJsonTileStyleLayer, LayerData } from '../types'
import { excludedRpaDataLayers, recreationalDataLayers, reocDataLayers } from './tileStyle/layers'

function getStyleJsonPath(tileSetId: AdvisoryTileStyleType) {
  return `${tileSetId}_style.json`
}

function getTileJsonPath(tileSetId: AdvisoryTileStyleType) {
  return `${tileSetId}_tile.json`
}

function getBaseStyle(tileSetId: AdvisoryTileStyleType, name?: string): GeoJsonTileStyle {
  return {
    id: tileSetId,
    name: name || 'Flight Advisory',
    zoom: 1,
    pitch: 0,
    center: [133.4542110535, -27.151391493450003],
    layers: [],
    bearing: 0,
    sources: {
      [tileSetId]: {
        url: `/${getTileJsonPath(tileSetId)}`,
        type: 'vector',
      },
    },
    version: 8,
  }
}

function getTileJson(tileSetId: AdvisoryTileStyleType) {
  const accessToken = 'pk.eyJ1IjoiY3VybyIsImEiOiJja29qcDljMTcwNng2MnZzMnVsbHN1a3JkIn0.Cb7YAdt4sIKqb00BQ645hA'
  return {
    tilejson: '2.0.0',
    name: tileSetId,
    type: 'baselayer',
    scale: '1.000000',
    // https://gist.github.com/graydon/11198540
    bounds: [113.338953078, -43.6345972634, 153.569469029, -10.6681857235],
    format: 'pbf',
    legend: '',
    maxzoom: 24,
    minzoom: 0,
    profile: 'mercator',
    generator: 'generator',
    version: '1',
    attribution: ' ',
    description: '',
    format_arguments: '',
    crs: 'EPSG:4326',
    center: [133.4542110535, -27.151391493450003],
    tiles: [
      `https://api.mapbox.com/v4/curo.${tileSetId}/{z}/{x}/{y}.vector.pbf?sku=101i8kmos7hzu&access_token=${accessToken}`,
    ],
  }
}

const sources: Record<AdvisoryTileStyleType, LayerData[]> = {
  excluded_rpa: excludedRpaDataLayers,
  recreational: recreationalDataLayers,
  reoc: reocDataLayers,
}
Object.keys(sources).forEach((tileSetId: AdvisoryTileStyleType) => {
  const style = getBaseStyle(tileSetId)

  // Create style layers
  const layers: GeoJsonTileStyleLayer[] = sources[tileSetId].reduce((acc, item) => {
    const layers = item.meta.map((meta) => {
      const baseLayer: Partial<GeoJsonTileStyleLayer> = {
        filter: ['all', ['==', 'severity', meta.severity]],
        layout: {
          visibility: 'visible',
        },
        source: tileSetId,
        maxzoom: 24,
        'source-layer': item.sourceLayer,
      }

      const items: GeoJsonTileStyleLayer[] = []

      if (meta.fillColor) {
        const fillLayer: GeoJsonTileStyleLayer = {
          id: `${item.sourceLayer}-${meta.severity.toLowerCase()}-fill`,
          type: 'fill',
          filter: ['all', ['==', 'severity', meta.severity]],
          paint: {
            'fill-color': meta.fillColor,
            'fill-opacity': 0.08,
          },
          ...baseLayer,
        } as GeoJsonTileStyleLayer
        items.push(fillLayer)
      }

      if (meta.lineColor) {
        const lineLayer: GeoJsonTileStyleLayer = {
          id: `${item.sourceLayer}-${meta.severity.toLowerCase()}-line`,
          type: 'line',
          filter: ['all', ['==', 'severity', meta.severity]],
          paint: {
            'line-color': meta.lineColor,
          },
          ...baseLayer,
        } as GeoJsonTileStyleLayer
        items.push(lineLayer)
      }

      return items
    })

    acc.push(...layers.flat())
    return acc
  }, [] as GeoJsonTileStyleLayer[])

  const currentDir = path.dirname(__filename)
  const styleJsonPath = path.join(currentDir, '..', getStyleJsonPath(tileSetId))
  const tileJsonPath = path.join(currentDir, '..', getTileJsonPath(tileSetId))
  fs.writeFileSync(styleJsonPath, JSON.stringify(style))
  fs.writeFileSync(tileJsonPath, JSON.stringify(getTileJson(tileSetId)))
  console.log(`Wrote style JSON to ${getStyleJsonPath(tileSetId)} and tile JSON to ${getTileJsonPath(tileSetId)}}`)
})

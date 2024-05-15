import { LayerData } from '../../../types'

const layers: LayerData[] = [
  {
    sourceLayer: 'airspaces',
    meta: [
      {
        severity: 'BLOCK',
        fillColor: '#ff1919',
        fillOpacity: 0.1,
        lineColor: '#ff1919',
      },
      {
        severity: 'ADVISE',
        fillColor: '#ffbe0b',
        fillOpacity: 0.1,
        lineColor: '#ffbe0b',
      },
    ],
  },
  {
    sourceLayer: 'controlled_aerodromes',
    meta: [
      {
        severity: 'BLOCK',
        fillColor: '#ff1919',
        fillOpacity: 0.1,
        lineColor: '#ff1919',
      },
      {
        severity: 'NO_ACTION',
        fillColor: '#b4b4b4',
        fillOpacity: 0.1,
        lineColor: '#b4b4b4',
      },
    ],
  },
  {
    sourceLayer: 'national_parks',
    meta: [
      {
        severity: 'BLOCK',
        fillColor: '#ff1919',
        fillOpacity: 0.1,
        lineColor: '#ff1919',
      },
    ],
  },
  {
    sourceLayer: 'heliports',
    meta: [
      {
        severity: 'BLOCK',
        fillColor: '#ff1919',
        fillOpacity: 0.1,
        lineColor: '#ff1919',
      },
    ],
  },
  {
    sourceLayer: 'power_lines',
    meta: [
      {
        severity: 'ADVISE',
        fillColor: '#ffbe0b',
        fillOpacity: 0.1,
        lineColor: '#ffbe0b',
      },
    ],
  },
  {
    sourceLayer: 'uncontrolled_aerodromes',
    meta: [
      {
        severity: 'ADVISE',
        fillColor: '#ffbe0b',
        fillOpacity: 0.1,
        lineColor: '#ffbe0b',
      },
      {
        severity: 'NO_ACTION',
        fillColor: '#b4b4b4',
        fillOpacity: 0.1,
        lineColor: '#b4b4b4',
      },
    ],
  },
]

export { layers as recreationalDataLayers }

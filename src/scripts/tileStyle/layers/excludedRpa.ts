import { LayerData } from '../../../types'
import { adviseStyleMetaData, blockStyleMetaData, noActionStyleMetaData } from '../util'

const layers: LayerData[] = [
  {
    sourceLayer: 'airspaces',
    meta: [blockStyleMetaData, adviseStyleMetaData],
  },
  {
    sourceLayer: 'controlled_aerodromes',
    meta: [blockStyleMetaData, noActionStyleMetaData],
  },
  {
    sourceLayer: 'heliports',
    meta: [adviseStyleMetaData],
  },
  {
    sourceLayer: 'national_parks',
    meta: [blockStyleMetaData],
  },
  {
    sourceLayer: 'power_lines',
    meta: [adviseStyleMetaData],
  },
  {
    sourceLayer: 'uncontrolled_aerodromes',
    meta: [adviseStyleMetaData, noActionStyleMetaData],
  },
]

export { layers as excludedRpaDataLayers }

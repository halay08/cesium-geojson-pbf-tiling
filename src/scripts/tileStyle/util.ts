import { LayerDataMeta } from '../../types'
import { DEFAULT_FILL_OPACITY } from './constants'

export const adviseStyleMetaData: LayerDataMeta = {
  severity: 'ADVISE',
  fillColor: '#ffbe0b',
  fillOpacity: DEFAULT_FILL_OPACITY,
  lineColor: '#ffbe0b',
}

export const blockStyleMetaData: LayerDataMeta = {
  severity: 'BLOCK',
  fillColor: '#ff1919',
  fillOpacity: DEFAULT_FILL_OPACITY,
  lineColor: '#ff1919',
}

export const noActionStyleMetaData: LayerDataMeta = {
  severity: 'NO_ACTION',
  fillColor: '#b4b4b4',
  fillOpacity: DEFAULT_FILL_OPACITY,
  lineColor: '#b4b4b4',
}

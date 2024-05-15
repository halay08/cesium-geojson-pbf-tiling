import { ArcGisMapServerImageryProvider, ImageryLayer, Viewer } from 'cesium'
import './index.css'
import MVTImageryProvider from 'mvt-imagery-provider'

const viewer = new Viewer('cesiumContainer', {
  baseLayer: ImageryLayer.fromProviderAsync(
    ArcGisMapServerImageryProvider.fromUrl(
      'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
      {
        enablePickFeatures: false,
      },
    ),
    {},
  ),
  baseLayerPicker: false,
  animation: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  selectionIndicator: true,
  timeline: false,
  navigationHelpButton: false,
  shouldAnimate: true,
  useBrowserRecommendedResolution: false,
  orderIndependentTranslucency: false,
})

// MVTImageryProvider.fromUrl('/excluded_rpa_style.json').then((provider) => {
//   viewer.imageryLayers.addImageryProvider(provider as any)
// })
// MVTImageryProvider.fromUrl('/recreational_style.json').then((provider) => {
//   viewer.imageryLayers.addImageryProvider(provider as any)
// })
MVTImageryProvider.fromUrl('/reoc_style.json').then((provider) => {
  viewer.imageryLayers.addImageryProvider(provider as any)
})

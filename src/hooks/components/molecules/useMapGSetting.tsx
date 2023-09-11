// dependencies
import { useId } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

// components
import { env } from '../../../api/env/debug'

export function useMapGSetting () {
  const idGoogleMaps = useId()

  const { isLoaded } = useJsApiLoader({
    id: idGoogleMaps,
    googleMapsApiKey: env.google_maps_accessToken
  })

  return {
    // state
    isLoaded
    // methods
    // functions
  }
}

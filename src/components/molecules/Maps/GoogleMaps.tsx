// dependencies
import { GoogleMap } from '@react-google-maps/api'

// components
import { MarkerGoogleMap } from '../..'
import { useMapGSetting } from '../../../hooks'

// styled
import { WrapperGoogleMaps } from '.'

export function GoogleMaps ({ lat = 10.96, lng = -74.81 }: { lat?: number, lng?: number }) {
  const { isLoaded } = useMapGSetting()

  if (!isLoaded) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <WrapperGoogleMaps>
      <GoogleMap
        center={{
          lat,
          lng
        }}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        zoom={12}
      >
        <MarkerGoogleMap lat={10.998356} lng={-74.772735}/>
        <MarkerGoogleMap lat={10.993330} lng={-74.790024}/>
        <MarkerGoogleMap lat={10.987868} lng={-74.788741}/>
        <MarkerGoogleMap lat={11.023341} lng={-74.800607}/>
        <MarkerGoogleMap lat={11.014953} lng={-74.827376}/>
      </GoogleMap>
    </WrapperGoogleMaps>
  )
}

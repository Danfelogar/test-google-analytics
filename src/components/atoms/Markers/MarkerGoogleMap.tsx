// dependencies
import { Marker } from '@react-google-maps/api'

export function MarkerGoogleMap ({ lat, lng }: { lat: number, lng: number }) {
  return (
    <Marker position={{ lat, lng }}/>
  )
}

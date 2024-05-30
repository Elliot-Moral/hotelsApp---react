import React from 'react'

//## esto es una libreria.
import { Map, Marker} from 'pigeon-maps';


const MapHotel = ({lat, lon}) => {
  return (
    //## +lat convieter el estring a un number.

      <Map center={[+lat, +lon]} width={'100%'} height={370}>
          <Marker width={50}m anchor={[+lat, +lon]} color='#1278a3'/>
      </Map>
  )
}

export default MapHotel
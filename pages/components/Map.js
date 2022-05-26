import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2lkZmFtZWxvbCIsImEiOiJjbDNrMXRkZnEwZWE0M2RwaXd0bHB4dmpoIn0.wJ7Pb0kUi0L_2keX0oAR6A'

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 3,
      center: [-99.29011, 39.39172],
    })

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
      console.log('ran')
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
          props.pickupCoordinates,
          props.dropoffCoordinates
        ],{
          padding:60
        });
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <Wrapper id="map"></Wrapper>
}

const Wrapper = tw.div`
flex-1	h-1/2
`

export default Map

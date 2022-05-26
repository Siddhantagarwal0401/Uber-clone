import React from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
  const router = useRouter()

  const {pickup,dropOff} = router.query
  console.log(dropOff)

  const [pickupCoordinates,setPickupCoordinates] = useState() 
  const [dropoffCoordinates,setDropoffCoordinates] = useState()

  const getPickupCoordinates = (pickup) => {
  
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:'pk.eyJ1Ijoic2lkZmFtZWxvbCIsImEiOiJjbDNrMXRkZnEwZWE0M2RwaXd0bHB4dmpoIn0.wJ7Pb0kUi0L_2keX0oAR6A',
          limit:1
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.features[0].center)
        setPickupCoordinates(data.features[0].center)
      })
  }

  const getDropOffCoordinates = (dropOff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:'pk.eyJ1Ijoic2lkZmFtZWxvbCIsImEiOiJjbDNrMXRkZnEwZWE0M2RwaXd0bHB4dmpoIn0.wJ7Pb0kUi0L_2keX0oAR6A',
          limit:1
        })
    )
      .then(response => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center)
      })
  }

  useEffect(() => {
    getPickupCoordinates(pickup)
    getDropOffCoordinates(dropOff)
  }, [pickup, dropOff])

  return (
    <Wrapper>
      <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates}/>
      <RideContainer>
        <RideSelector/>
        <ConfirmButtonContainer>
          <ConfirmButton>
            Confirm UberX
          </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
  flex h-screen flex-col
`
const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`


const ConfirmButtonContainer = tw.div`
  border-t-2
`
const ConfirmButton = tw.div`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl py-4
`
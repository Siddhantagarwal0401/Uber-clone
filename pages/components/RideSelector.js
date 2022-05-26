import React from 'react'
import tw from 'tailwind-styled-components'
import {carList} from '../data/carList'

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride or swiper up for more</Title>
      <CarList>
          { carList.map((car,index) => {
             return <Car key={index}>
              <CarImage src={car.imgUrl}></CarImage>
              <CarDetails>
                <Service>{car.service}</Service>
                  <Time>5 mins away</Time>
                
              </CarDetails>
              <Price>${10 * car.multiplier}</Price>
            </Car>
          })}
        
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col  
`
const Title = tw.div`
    text-gray-500 text-center text-xs  border-b 
`
const CarList = tw.div`
    overflow-y-scroll
`
const Car = tw.div`
    flex p-4 items-center
`

const CarImage = tw.img`
    h-14 mr-2
`

const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
    text-xs text-blue-500
`
const Price = tw.div`
    text-sm
`

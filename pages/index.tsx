import type { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import Map from './components/Map'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"></UberLogo>
          <Profile>
            <Name>Rafeh Quazi</Name>
            <UserImage src="https://lh3.googleusercontent.com/ogw/ADea4I75TdgjbNi9O1SMYl9jwJScxweaZFqZbhNTAGYv0g=s32-c-mo" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to</InputButton>
      </ActionItems>
    </Wrapper>
    //lol
  )
}

export default Home

const ActionItems = tw.div`
  flex-1 p-2 h-1/2
`
const Wrapper = tw.div`
  flex flex-col h-screen
`
const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
  h-20
`
const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-grey-200 p-px
`
const ActionButtons = tw.div`
  flex
`
const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify- rounded-lg cursor-pointer	transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
  h-3/5
`
const InputButton = tw.div`
  h-20  bg-gray-200 text-2xl p-4 flex items-center mt-8  
`

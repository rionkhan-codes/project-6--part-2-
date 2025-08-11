import React from 'react'
import { Banner } from '../components/Banner'
import { Connected } from '../components/Connected'
import { Work } from '../components/Work'
import { OneTool } from '../components/OneTool'
import { Price } from '../components/Price'
import { Users } from '../components/Users'
import { GetStarted } from '../components/GetStarted'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
    <Banner/>
    <Connected/>
    <Work/>
    <OneTool/>
    <Price/>
    <Users/>
    <GetStarted/>
    <Footer/>
    </>
  )
}

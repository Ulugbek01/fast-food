import React from 'react'
import Header from '../Header';
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import { Container } from './style';

const key = 'AIzaSyB9f7IV4xjGQ91-TGKvonZYYGhF9N2cboM';
export const Katalog = () => {

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: key,
    id: 'main'
  })

  return (
    <div>
      <Header title='katalog'/>
      <Container>
        {isLoaded &&
        <GoogleMap
          id='main'
          mapContainerStyle={{
            width: '100%',
            height: '100vh',
          }}
          zoom={4}
          center={{lat: 41.311081, lng: 69.240562}}
        >
          <Marker position={{ lat: 41.311081, lng:  69.240562 }} />
          <Marker position={{ lat: 40.12341, lng:  67.82842 }} />
          <Marker position={{ lat: 39.652451, lng:  66.970139 }} />
          <Marker position={{ lat: 40.78206, lng: 72.34424 }} />
          <Marker position={{ lat: 41.55175, lng: 60.63146 }} />
          <Marker position={{ lat: 38.86056, lng: 65.78905 }} />
          <Marker position={{ lat: 40.103922, lng: 65.368833 }} />
          <Marker position={{ lat: 40.52861, lng: 70.9425 }} />
          <Marker position={{ lat: 41.005773, lng: 71.643603 }} />
          <Marker position={{ lat: 39.75, lng:  67.8333 }} />
          <Marker position={{ lat: 42.1007, lng: 63.62852 }} />
        </GoogleMap>
        }
      </Container>
    </div>
  )
}

export default Katalog;
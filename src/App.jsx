import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'
import AllComp from './Components/AllComp';

// FETCING DATA FROM API 
const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  return (
    <>
      {/* <Suspense fallback={<p>Waiting For Data...</p>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense> */}
      <AllComp></AllComp>
    </>
  )
}

export default App

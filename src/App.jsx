import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  const fetchTrendingData = async()=>{
    try {
      const data = await axios.get('/trending/all/week')
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }
  // const fetchTrendingData = async()=>{
    
  //   const resp = await fetch("https://api.themoviedb.org/3/trending/all/week",{
  //     method: "GET",
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  //     }
  //   })
  //   const data = await resp.json();
  //   console.log(data);
  // }

  useEffect(() => {
    
    fetchTrendingData()
  }, [])
  
  return (
    <main className='pb-14 lg-pb-0'>
      <Header/>
      <div className="pt-16">
          <Outlet/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}

export default App

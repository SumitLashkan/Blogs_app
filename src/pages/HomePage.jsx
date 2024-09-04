import React from 'react'
import Pagination from '../components/Pagination'
import Header from "../components/Header"
import Blogs from "../components/Blogs"



const HomePage = () => {
  return (
    <div>
        <Header/>
        <div>
        <Blogs/>
        <Pagination/>
        </div>
       
    </div>
  )
}

export default HomePage

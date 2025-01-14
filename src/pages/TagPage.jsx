import React from 'react'
import {  useNavigate , useLocation } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {

    const navigation = useNavigate();
    const location =  useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div className='my-20 flex justify-center items-center gap-5 '>
        <button  className="border-2 border-gray-300 py-1 px-4 rounded-md"
        onClick ={() => navigation(-1)}> Back</button>
        <h2 className='font-bold text-2xl '>
            Blogs Tagged <span>{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage

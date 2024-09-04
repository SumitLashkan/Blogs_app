import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div >
       <Header/>
       <div className='flex justify-center items-center gap-5  my-20'>
           <button  className="border-2 border-gray-300 py-1 px-4 rounded-md"
            onClick={()=>navigation(-1)}>Back</button>
           <h2 className='font-bold text-2xl'>Blogs on <span>{category}</span></h2>
       </div>
       <Blogs />
       <Pagination/>
    </div>
  )
}

export default CategoryPage

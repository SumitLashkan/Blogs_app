import React, { useCallback, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const BllogDetails = ({post}) => {
  
  return (
    <div>
       <div key={post.id} className="w-11/12 max-w-2xl mx-auto">
       <NavLink to ={`/blog/${post.id}`}>
       <p className="font-bold text-lg hover:-translate-y-1  hover:underline duration-300 ">{post.title}</p>
       </NavLink>  
            <p className="text-sm my-1">
              By <span className="italic">{post.author}</span> on{" "}
           <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}> 
             <span className="font-semibold underline cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ">{post.category}</span>
             </NavLink>
            </p>
            <p className="text-sm">Posted On {post.date}</p>
            <p className="mt-4 mb-2">{post.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
              {post.tags.map((tag, index) => (
              <NavLink to ={`/tags/${tag.replaceAll(" ","-")}`}>
              <span
                  key={index}
                  className="text-xs font-semibold underline text-blue-700 cursor-pointer hover:translate-y-1 hover:scale-105 duration-300 ">{`#${tag}`}</span>
              </NavLink>
              ))}
            </div>
          </div>
    </div>
  )
}

export default BllogDetails

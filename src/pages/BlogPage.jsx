import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {  AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import BlogDetails from '../components/BllogDetails';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog , setBlog] = useState(null);
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading , loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);


    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is :");
        console.log(url);
        try{
            const res = await fetch(url);
            const data = await res.json();
           

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id ");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
      if(blogId) {
        fetchRelatedBlogs();
      }
    }, [location.pathname]);

  return (
    <div className="flex flex-col gap-y-10 my-20">
       <Header/>
       <div className='w-11/12 flex justify-center'>
         <button className=' border-2 border-gray-300 py-1 px-4 rounded-md'
          onClick={() => navigation(-1)}>
           Back
         </button>
       </div>
       {
        loading ? (<p className="min-h-[80vh] w-full flex justify-center items-center font-bold text-3xl">Loading</p>) :
        blog ? (<div>
            <BlogDetails post ={blog}/>
            <h2 className='font-bold text-2xl  flex justify-center mt-5 '>Related Blogs</h2>
            {
              relatedBlogs.map((post) => (
                <div>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
        </div>) :
        (<div>
           <p>No blog Found</p>
        </div>)
       }
    </div>
  )
}

export default BlogPage

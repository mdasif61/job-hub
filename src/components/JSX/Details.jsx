import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams} from 'react-router-dom';
import '../Css/Details.css';

const Details = () => {
    const [details,setDetails]=useState({})
    const jobs=useLoaderData();
    const {id}=useParams();

    useEffect(()=>{
       const exist=jobs.find(job=>job.id==id);
       if(exist){

           setDetails(exist)
       }
    },[])

    return (
        <div className='my-10'>
            <div className='h-[250px] banner flex justify-between mb-16'>
            <img src='/src/assets/All Images/Vector.png' alt="" />
                <div className='flex items-center justify-center text-3xl font-bold'>
                <h1>Job Details</h1>
                </div>
            <img src='/src/assets/All Images/Vector-1.png' alt="" />
            </div>
            <div className='flex'>
                <div className='w-[50%]'>
                    <h1><span className='font-bold'>Job Description : </span> {details.jobDesc}</h1>
                    <h1><span className='font-bold'>Job Responsibility : </span> {details.jobRes}</h1>
                    <h1><span className='font-bold'>Educational Requirements : <br/></span>{details.education}</h1>
                    <h1><span className='font-bold'>Experiences : <br/></span>{details.experiences}</h1>
                </div>
                <div className='w-[50%]'>
ghh
                </div>
            </div>
        </div>
    );
};

export default Details;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams} from 'react-router-dom';

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
        <div>
            <div className='h-[250px] bg-gray-200'>
                <h1>Job Details</h1>
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
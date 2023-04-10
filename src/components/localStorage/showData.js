// import { getJob } from "./storedData";

// const showData=async()=>{
//     const jobs=await fetch('featuredJob.json');
//     const data=await jobs.json()
    
//     let newJob=[];
//     const storedJob=getJob();
//     for(const id in storedJob){
//         const exist=data.find(da=>da.id==id);
//         if(exist){
//             const newAdded=storedJob[id];
//             exist[id]=newAdded;
//             newJob.push(exist)
//         }
//     }
//     return newJob;
// }

// export default showData;
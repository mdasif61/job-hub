const getJob=()=>{
    let storedJob={};
    const jobStore=localStorage.getItem("job");
    if(jobStore){
        storedJob=JSON.parse(jobStore)
    }
    return storedJob;
}

const addToStorage=(id)=>{
    let storedJob=getJob();
    const jobId=storedJob[id]
    if(!jobId){
       storedJob[id]=1;
    }else{
        const times=jobId+1;
        storedJob[id]=times;
    }
    localStorage.setItem("job",JSON.stringify(storedJob))
}

export {
    addToStorage,
    getJob
}
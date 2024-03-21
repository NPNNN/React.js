import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    /*const [data,setData]= useState([])
    useEffect (() => {
      fetch('https://api.github.com/users/NPNNN')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setData(data);
      })
    },[])*/
    return(
        <div className="text-center m-4 bg-green-600 text-white text-3xl">
            <div className="bg-green-700">Github id:{data.id}</div>
            <img  src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NPNNN')
    return response.json()
}
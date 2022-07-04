import React, { useState, useEffect } from "react";

function Datos() {
  const URL = "https://www.eporner.com/api/v2/video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json";


  useEffect(() => {
    fetchApi()
  }, []);

  const [totalVideos, setVideos] = useState([]);
  
  const fetchApi = async () => {
    const respuesta = await fetch(URL)
    const respuestaJSON = await respuesta.json();
    setVideos(respuestaJSON.videos);
    console.log(respuestaJSON)
  }
  


  

  return <div>

    {
        !totalVideos?"cargando datos":totalVideos.map(  v => {return (   <div>

            <h1>{v.title}</h1>
            <img src={v.default_thumb.src} alt="" />
      
        </div>
        
        ) })
    }



  </div>;
}

export default Datos;

import React from 'react'
import { GalleryData } from './galleryData';
import { useEffect, useState } from 'react';
import "../pages/gallery.css"

import { set } from 'firebase/database';


const Gallery = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.title))])
  },[])
 
  const gallery_filter =(itemData)  =>{
  const filterData = GalleryData.filter((item)=>item.title == itemData)
setData(filterData)
  }

  return (
    <div className='gallery'>
      <div className='galleryWrapper'>
        <div className='filterItem'>
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }

          </ul>
        </div>
        <div className='galleryContainer'>
          {
            data.map((item)=> <div key={item.id}  className='galleryItem'>< img src={item.image} key={item.id}/></div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery
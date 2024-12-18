import {useEffect, useState} from 'react';
import axios from 'axios';
import GalleryItems from '../GalleryItems/GalleryItems';



function GalleryList () {

    useEffect(()=>{
    fetchGalleryItems    
    },[]);

const [galleryItems, setGalleryItems] = useState([]);

function fetchGalleryItems() {
    axios.get('/api/gallery').then(function(response){
        console.log('back from GET:', response.data);
        setGalleryItems(response.data);
    }).catch(function(err){
        console.log(err);
        alert('error getting GalleryItems')
    })
}

    return (
        <div>
            <h1>GalleryList</h1>
           {
            galleryItems.map((galleryItems, index)=>(
                <GalleryItems key={index} galleryItems={galleryItems}/>
            ))
           }
        </div>

    );
}

export default GalleryList
import {useState} from 'react';

function GalleryItems (galleryItems) {

    const [showing, setShowing] = useState(true);


    return (
        <div>
            <h1>{galleryItems.galleryItems.title}</h1>
            <div onClick={()=>{setShowing(!showing)}}>
            <img src={galleryItems.galleryItems.url}/>
            <p>{galleryItems.galleryItems.description}</p>
            <p>{JSON.stringify(galleryItems)}</p>
            </div>
        </div>

    );
}

export default GalleryItems
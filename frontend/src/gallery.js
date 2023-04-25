import React from 'react'
import "./index.css"

const Gallery = ({data}) => {
    return (
        <div className="row">
        {data.map((image) =><div key={image.id}>
        <div className="col-md-3">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="250" width="500" alt={image.title}/>
        </div>
        </div>)}
        </div>
    )
}

export default Gallery

import React, { useState } from "react";

const ImageSlider = (props) => {
    const images = [
        "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1677178628425-84a64dc416b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
    ];

    const [img, setImg] = useState(0);


    const nextImg = () => {
    setImg((prevIndex) => (prevIndex + 1) % images.length);
}

const prevImg = () => {
    setImg((prevIndex) => (prevIndex - 1 + images.length) % images.length);
}

    return (
        <div>
            <img src={images[img]} alt="images" style={{width: 500, height: 500}} />
            <br />
            <button type="button" onClick={prevImg}>Previous Image</button>
            <button type="button" onClick={nextImg}>Next Image</button>
        </div>
    )
}

export default ImageSlider;

import React, { useState } from "react";

const FuncSlider = () => {
    const img = [{index:0}, {
        images: [
            "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1677178628425-84a64dc416b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
        ]
    }];

    const [image, setImage] = useState(0);

   let prevImg = () => {
        if(image.index >= 1){
            setImage(image-1);
        }
        else{
            setImage(image)
        }
    }

  let nextImg = () => {
        if(image.index.length-1>image.index){
            setImage(image+1)
        }
        else{
            setImage(image)
        }
    }
    return (
        <div>
                <img src={image} alt="images" style={{width:200, height: 200}} />

                <br/>

                <button type="submit" onClick={prevImg}>Previous</button>
                <button type="submit" onClick={nextImg}>Next</button>
        </div>
    )
}

export default FuncSlider;
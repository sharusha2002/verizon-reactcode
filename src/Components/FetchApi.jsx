import React, { useState } from 'react';

export const FetchApi = ()  => {
    const[data, setData] = useState(null);
    const [search, setSearch] = useState("");
    

    // async function ApiFetch(){
    //     const restapi = await fetch('https://freetestapi.com/api/v1/weathers');
    //     const result = await restapi.json();
    //     console.log(result);
    //     let op="";
    //     result.forEach((data) => {
    //         op+=`
    //         <h1>Id: ${data.id}, City: ${data.city}, Country: ${data.country}, Forecast: ${data.forecast.temperature}</h1>
            
    //         <br/>
           
        
    //         `;
    //     });
    //     document.getElementById("output").innerHTML = op;
       
    // }

   let Search = async (e) => {
    const restapi = await fetch('https://freetestapi.com/api/v1/weathers');
    const result = await restapi.json();
    console.log(result);
    console.log(result[e.target.value]);

//    document.getElementById("output").innerHTML = result;
        result.forEach(cityTofind => {
            if(cityTofind.city === e.target.value){
                    setData(cityTofind);
            }
            else{
                console("Data not found")
            }
        })
   }
    return(
        <div>
            <input type="text" />
            <button type="search" onClick={Search}>Search</button>
         {/* <button onClick={() => ApiFetch()}>Click here</button> */}
        <div id="output">
         {/* {data} */}
        </div>
        </div>
    )
}


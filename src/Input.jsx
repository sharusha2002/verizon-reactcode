import React from 'react';
import { useParams } from 'react-router-dom';
export const Input = ()  => {
    const {id} = useParams();
    return(
        <div>
            <h1>Hello</h1>
            <h1>Data for engineer with id - {id} :</h1>
        </div>
    )
}
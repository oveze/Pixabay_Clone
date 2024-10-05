import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";
import { json } from "react-router-dom";

const PixabayState = (props) => {
    const [imageData,setImageData] = useState([]) 
    const [query,setquery] = useState('london');
    const api_key = "46298866-7d299584adeb21c61b9946292";
    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(
                `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
            );
            const data = await api.json()
            setImageData(data.hits)
            console.log(data.hits)
        };
        fetchData()
    }, [query]);
    const fetchImagesByCategory = async (cat) => {
        const api = await fetch(
            `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
        );
        const data = await api.json()
        setImageData(data.hits)
        console.log(data.hits)
    };
    

    return (
        <PixabayContext.Provider value={{imageData , fetchImagesByCategory , setquery}}>
            {props.children}
        </PixabayContext.Provider>
    );
};

export default PixabayState;

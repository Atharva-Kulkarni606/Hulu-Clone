import React from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import { useState } from 'react'
import axios from './axios'
import { useEffect } from 'react'
import FlipMove from 'react-flip-move'

function Results({ selectedOption  }) {
    const  [movies, setMovies] = useState([]);

    useEffect(() => {
        // Run this code once this components loads/mounts
        async function fetchData() {
            const request = await axios.get(selectedOption);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption])

    return (
        <div className = "results">
            <FlipMove>
            {   
                movies.map((movie) => {
                    return <VideoCard key = {movie.id} movie = {movie}/>
                })
            }
            </FlipMove>
        </div>
    );
}


export default Results

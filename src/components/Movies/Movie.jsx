import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helper/ap-helpers';
import MovieItem from "../Movies/MovieItem";
const Movie = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));
    }, [])

    return (
        <Box margin={'auto'} marginTop={4}>
            <Typography
                variant="h4"
                padding={2}
                width="40%"
                margin={"auto"}
                bgcolor={"#900C3F"}
                color="#FFFFFF"
                textAlign="center">All Movies</Typography>
            <Box width={'100%'} margin="auto" marginTop={5} display={'flex'} justifyContent="center"
                flexWrap={"wrap"}>
                {movies && movies.map((movie, index) => <MovieItem
                    id={movie._id}
                    title={movie.title}
                    posterUrl={movie.posterUrl}
                    releaseDate={movie.releaseDate}
                    key={index} />)}
            </Box>
        </Box >
    )
}

export default Movie
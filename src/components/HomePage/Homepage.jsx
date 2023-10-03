import Carusel from "../../../Crousel"
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from "@mui/material";
import MovieItem from "../Movies/MovieItem";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helper/ap-helpers";
const Homepage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));
    }, [])
    console.log(movies);

    return (
        <Box width={"100%"} height={"100%"} margin={"auto"} >
            <Box>
                <Carusel />
            </Box>
            <Box padding={5} margin="auto">
                <Typography variant="h4" textAlign={'center'} color={"red"}>
                    Latest Jobs
                </Typography>
            </Box>
            <Box display={"flex"} margin="auto" width="80%" justifyContent={"center"} flexWrap="wrap">
                {movies && movies.slice(0, 8).map((movie, index) => <MovieItem id={movie.id} title={movie.title}
                    posterUrl={movie.posterUrl} releaseDate={movie.releaseDate}
                    key={index} />)}
            </Box>
            <Box display={"flex"} padding={5} margin="auto">
                <Button LinkComponent={Link} to="/movies" variant="outline"
                    sx={{ margin: 'auto', color: '#2b2d42' }}>
                    View All Jobs
                </Button>
            </Box>
        </Box >




    )
}

export default Homepage
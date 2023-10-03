import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux'
import { adminActions, userActions } from '../store'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'

import { getAllMovies } from '../api-helper/ap-helpers';
import { Route, Routes } from "react-router-dom";
// const dummyArray = ["Selfie", "Pathan", "Kick", "Anupam"];
const Header = () => {
    const [theme, settheme] = useState(false);
    const darkTheme = createTheme({
        palette: {
            mode: theme ? 'dark' : 'light',
        },
    });
    const handleChange = (event) => {
        settheme(event.target.checked);
    }
    const dispatch = useDispatch();
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [value, setvalue] = useState(0);
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        getAllMovies().then((data) => {
            setmovies(data.movies);
        }).catch((err) => {
            console.log(err)
        });
    }, [])
    const logout = (isAdmin) => {
        dispatch(isAdmin ? adminActions.logout() : userActions.logout());
    }
    return (
        <>

            <CssBaseline />
            <AppBar position="sticky" sx={{ bgcolor: "#193ffc" }} >
                <Toolbar>
                    <Box width={"50%"}> 
                        <img height="40" src="https://www.lets-code.co.in/images/logo2.png" />
                    
                    </Box>
                    <Box sx={{
              display: { xs: "none", md: "flex" }
            }}>
                    <Tab LinkComponent={Link} to='/auth' label="Home" />
                    </Box>

                    
                    <Box display={"flex"}>
                        <Tabs textColor='inherit'  value={value} onChange={(e, val) => { setvalue(val) }}>

                            <Tab LinkComponent={Link} to='/movies' label="All Jobs" />

                            {!isAdminLoggedIn && !isUserLoggedIn && <>

                                <Tab LinkComponent={Link} to='/auth' color={"white"} label="Auth" />
                                <Tab LinkComponent={Link} to='/admin' label="Admin" />
                            </>
                            }

                            {isUserLoggedIn && (
                                <>
                                    <Tab LinkComponent={Link} to='/user' label="Profile" />
                                    <Tab onClick={() => logout(false)} LinkComponent={Link} to='/' label="Logout" />
                                </>
                            )}
                            {isAdminLoggedIn && (
                                <>
                                    <Tab LinkComponent={Link} to='/add' label="Add Movie" />
                                    <Tab LinkComponent={Link} to='/user-admin' label="Profile" />
                                    <Tab onClick={() => logout(true)} LinkComponent={Link} to='/' label="Logout" />
                                </>
                            )}

                        </Tabs>

                    </Box>
                </Toolbar>

            </AppBar>
            </>
    )
}
export default Header
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useState } from "react";

const Home = () => {

    const [search, setSearch] = useState('');

    return (
        <Box
            sx={{
                display: "flex",
                margin: 3,
                borderRadius: 2,
                flexGrow: 1,
                height: "95vh",
            }}
            flexDirection="column"
        >
            <Box
                sx={{
                    display: "flex",
                    borderRadius: 2,
                    flexGrow: 1,
                    backgroundColor: "secondary.light",
                    height: "8%",
                }}
            >

                <Grid container spacing={1} sx={{ margin: 1, height: 68 }}>
                    <Grid item xs={2}>
                        <Typography variant="h5" align="center" mt="9px">
                            Je recherche ...
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            id="outlined-basic"
                            value={search}
                            label="...une ville, un code postal"
                            variant="outlined"
                            sx={{ display: "flex" }}
                            onChange={() => {setSearch(search)}}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    mt: "2%",
                    borderRadius: 2,
                    flexGrow: 1,
                    height: "90%",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "purple",
                        borderRadius: 2,
                        width: "50%",
                        mr: "1%",
                    }}
                >
                    <Typography variant="h4" align="center" mt="9px">
                        Villes de métropoles
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            margin: "4%",
                            flexGrow: 1,
                            height: "10%",
                            backgroundColor: "green",
                        }}
                    >
                        <Typography>Coucou</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            margin: "4%",
                            flexGrow: 1,
                            height: "10%",
                        }}
                    >
                        <Grid container spacing={0}>
                            <Grid
                                item
                                xs={6}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexGrow: 1,
                                        backgroundColor: "green",
                                        mr: "5%",
                                        height: "100%",
                                    }}
                                >
                                </Box>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexGrow: 1,
                                        backgroundColor: "green",
                                        ml: "5%",
                                        height: "100%",
                                    }}
                                >
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundColor: "pink",
                        borderRadius: 2,
                        width: "50%",
                        ml: "1%",
                    }}
                >
                    <Typography variant="h4" align="center" mt="9px">
                        Villes d'outre-mer
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;

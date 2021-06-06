import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getContrastRatio } from '@material-ui/core';
import Background from '../../images/workout.jpg'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Getstart() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    // backgroundImage: "url(" + Background + ")", backgroundSize: "100vw"

    return (
        <div style={{ textAlign: "center", alignItems: "center", width: "100%", height: "100%", backgroundColor: "#dbf6e9", backgroundImage:"url(" + Background + ")", backgroundSize:"cover", backgroundPosition:"center" }}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <React.Fragment>
                <Typography variant="h6" gutterBottom style={{ fontFamily: "'Courier New', 'Consolas', 'Monaco'", fontWeight: "bold", paddingTop: "50px" }}>
                    Welcome To Fitness++!
            </Typography>
                <Typography variant="h6" gutterBottom style={{ fontFamily: "'Courier New', 'Consolas', 'Monaco'", fontWeight: "bold" }}>

                    Let me know about your health infos,
            </Typography>
                <Typography variant="h6" gutterBottom style={{ fontFamily: "'Courier New', 'Consolas', 'Monaco'", fontWeight: "bold" }}>

                    Have the best health buddy!
            </Typography>

                <Grid container spacing={3} className="grid" style={{ width: "500px", height: "600px", marginLeft: "auto", marginRight: "auto", textAlign: "left", marginTop: "10px" }}>
                    <Grid item sm={6} >
                        <TextField style={{ width: "182px" }}
                            required
                            id="height-feet"
                            name="height-feet"
                            label="height-feet"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField style={{ width: "182px" }}
                            required
                            id="height-inches"
                            name="height-inches"
                            label="height-inches"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <FormControl required style={{ width: "182px" }}>
                            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Different Identity">Different identity</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            required style={{ width: "182px" }}
                            id="Current Weight"
                            name="Current Weight"
                            label="Current Weight"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required style={{ width: "182px" }}
                            id="streetAddress"
                            name=" streetAddress"
                            label="streetAddress"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            required style={{ width: "182px" }}
                            id="fullAddress"
                            name="fullAddress"
                            label="fullAddress"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            required style={{ width: "182px" }}
                            id="zip"
                            name="zip"
                            label="zip"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <form noValidate>
                            <TextField
                                style={{ width: "182px" }}
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue={today}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                        />
                    </Grid> */}
                    <Grid item xs={8}>
                    </Grid>
                    <Grid item xs={4} >
                            <Button variant="contained" style={{ color:"white", backgroundColor: "#f76b8a", fontSize:"12px"}}>Submit</Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    );
}

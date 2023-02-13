import * as React from 'react';
import {FormGroup, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, Typography} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Login(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    return(
        <Grid container alignItems="center" className="ml-2 mt-4 d-flex justify-content-center">
        <Paper elevation={0}>
            <Grid container alignItems="center" className="ml-2 mt-4">
                <Grid item xs={6} sm={9}>
                    <Typography variant="h6">Masuk</Typography>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Link href="register">
                    <Typography color="secondary">Daftar</Typography>
                    </Link>
                </Grid>
            </Grid>
            <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                    type="text"
                    label="Email"
                    color="secondary"
                />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    color="secondary"
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
            </FormGroup>
              <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <Button variant="contained">Login</Button>
                </FormControl>
            </FormGroup>
            </Paper>
            </Grid>
    )
}
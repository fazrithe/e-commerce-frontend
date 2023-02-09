import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const classes = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "#b43fd4",
      fontFamily: "Roboto"
    }
  };

export default function FlashSale(){
  return(
    <>
        <Grid item xs={6} sm={3}>
            <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
   </>
  )
}
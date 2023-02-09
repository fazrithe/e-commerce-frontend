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

export default function CategoryHome(){
  return(
    <>
    <Grid item xs={12} sm={6}>
    <Paper style={classes.paper}>
      <h4>Kategori Pilihan</h4>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/makanan.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Makanan
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/pakaian.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Pakaian
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/elektronik.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Elektronik
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
    </Paper>
  </Grid>
  </>
  )
}
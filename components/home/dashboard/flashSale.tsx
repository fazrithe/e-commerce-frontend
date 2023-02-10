import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { color } from "@mui/system";

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
        <Grid container alignItems="center" className="ml-2 mt-4">
          <Grid item xs={6} sm={2}>
            <Typography gutterBottom variant="h6" component="div">
              Harga promo hari ini
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography gutterBottom component="div" color="secondary">
              Berakhir dalam
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography gutterBottom component="div" color="secondary" padding={2}>
              <Chip label="1" size="small" sx={{bgcolor:'red', color:'white'}} className="mr-2 ml-2"></Chip>:<Chip label="1" size="small" sx={{bgcolor:'red', color:'white'}} className="mr-2 ml-2"></Chip>:<Chip label="1" size="small" sx={{bgcolor:'red', color:'white'}} className="mr-2 ml-2"></Chip>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography gutterBottom component="div" color="secondary">
              Lihat Semua
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/kemejapria.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography>Kemeja Lengan Panjang</Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/kemejapria.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography>Kemeja Lengan Panjang</Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/kemejapria.jpg"
                  alt="green iguana"
                />
                 <CardContent>
                  <Typography>Kemeja Lengan Panjang</Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/kemejapria.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography>Kemeja Lengan Panjang</Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/kemejapria.jpg"
                  alt="green iguana"
                />
               <CardContent>
                  <Typography>Kemeja Lengan Panjang</Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={6} sm={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/products/kemejapria.jpg"
                  alt="green iguana"
                />
                 <CardContent>
                  <Typography>Kemeja Lengan Panjang</Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <Chip label="26%" size="small" color="secondary" className="mr-2"></Chip>
                    Rp. 70.000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
   </>
  )
}
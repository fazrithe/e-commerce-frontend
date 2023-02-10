import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import CategoryHome from "@/components/home/dashboard/categoryHome";
import TabService from "@/components/home/dashboard/tabService";
import FlashSale from "@/components/home/dashboard/flashSale";
import CardHome from "@/components/home/dashboard/cardHome";
import Products from "@/components/home/dashboard/products";

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#b43fd4",
    fontFamily: "Roboto"
  },

  labelSale: {
    color: "#b43fd4"
  }
};
export default function Home() {
  return (
      <div>
        <Container fixed>
        <div style={classes.root}>
            <Grid container spacing={1} className="mt-4">
              {/*This item will be 12 units on extra small screens */}
              {/*But will be 6 units on small screens */}
              <CategoryHome />
              <Grid item xs={12} sm={6}>
                <Paper>
                    <TabService />
                </Paper>
              </Grid>
              <Grid container spacing={1} className="mt-4 ml-2">
              <h4 style={classes.labelSale}>Flash Sale</h4>
              </Grid>
              <Grid container spacing={1} className="mt-2">
                <FlashSale />
              </Grid>
              <Grid container spacing={1} className="mt-4">
                <CardHome />
              </Grid>
              <Grid container spacing={1} className="mt-2">
                <Products />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
  )
}

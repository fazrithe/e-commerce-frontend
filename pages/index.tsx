import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import CategoryHome from "@/components/home/dashboard/categoryHome";

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
export default function Home() {
  return (
      <div>
        <Container fixed>
        <div style={classes.root}>
            <Grid container spacing={3} className="mt-4">
              {/*This item will be 12 units on extra small screens */}
              {/*But will be 6 units on small screens */}
              <CategoryHome />
              <Grid item xs={12} sm={6}>
                <Paper style={classes.paper}>xs=12 sm=6</Paper>
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
              <Grid item xs={6} sm={3}>
                <Paper style={classes.paper}>xs=6 sm=3</Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
  )
}

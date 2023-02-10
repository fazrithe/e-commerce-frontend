import * as React from 'react';
import { Breadcrumbs, Container, Link, Typography, Stack } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default function SingleProduct(props){
    const product = props?.product;
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={handleClick}
        >
          Aksesoris
        </Link>,
        <Typography key="3" color="text.primary">
          {product}
        </Typography>,
      ];
    
    return(
        <div>
            <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>  
            </Container></div>
    );
}
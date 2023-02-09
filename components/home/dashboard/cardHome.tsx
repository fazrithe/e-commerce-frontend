import Grid from "@mui/material/Grid"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from "next/image";

const classes = {
    root: {
      flexGrow: 1
    },
    label: {
      padding: 20,
      textAlign: "center",
      color: "#ffffff",
      fontFamily: "Roboto"
    }
  };

export default function CardHome(){
  return(
    <>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    variant="outlined"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <Image
                        src="/discount.jpg"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                    />
                    </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs2',
                    fontWeight: 'xl2',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    }}
                >
                    Flash
                </CardOverflow>

            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    variant="outlined"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <Image
                        src="/discount.jpg"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                    />
                    </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs2',
                    fontWeight: 'xl2',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    }}
                >
                    Flash
                </CardOverflow>

            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    variant="outlined"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <Image
                        src="/discount.jpg"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                    />
                    </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs2',
                    fontWeight: 'xl2',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    }}
                >
                    Flash
                </CardOverflow>

            </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
            <Card  orientation="horizontal"
                    variant="outlined"
                    sx={{bgcolor: '#C69EFF' }}>
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <Image
                        src="/discount.jpg"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                    />
                    </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ px: 2, bgcolor: 'primary' }}>
                    <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    Special Discount
                    </Typography>
                </CardContent>
                <Divider />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs2',
                    fontWeight: 'xl2',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    }}
                >
                    Flash
                </CardOverflow>

            </Card>
        </Grid>
   </>
  )
}
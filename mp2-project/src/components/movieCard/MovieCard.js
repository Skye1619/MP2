import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper, styled } from '@mui/material';

export default function MovieCard({movieTitle, movieOverview, backgroundImg, posterImg, releaseDate}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (

    
      <Grid 
          item xs={3}
          className="TrendMovie">
        <h2></h2>    
        <Card >
           <CardMedia
             sx={{ height: 150 }}
             image={backgroundImg}
             title=""
           />
         <CardContent>
           <Typography gutterBottom variant="h6" component="div">
               {movieTitle}
           </Typography>
           <Typography variant="body2" color="text.secondary">
               {movieOverview}
           </Typography>
           <Typography variant="p" color="text.secondary">
               {releaseDate}
           </Typography>
        
         </CardContent>
        </Card>
      </Grid>
      
    
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MediaCard({title,overview, posterpath}) {
  return (
    <Card>
    
      <CardActionArea> 
      <CardMedia
        sx={{ height: 350 }}
        image= {`https://image.tmdb.org/t/p/w500/${posterpath}`}
        title= {title}
      />
      
      <CardContent>
        <Typography noWrap gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography noWrap variant="body2" color="text.secondary">
        {overview} 
        </Typography>
       
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './list.module.css'

export function MultiActionAreaCard({clin}) {
  return (
    <Card sx={{ maxWidth: 370, margin: "20px 20px"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={clin.photo}
          alt="дурка"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {clin.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {clin.place}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={styles.btn_more}>
          <Link to={`${clin._id}`}>
          Подробнее
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

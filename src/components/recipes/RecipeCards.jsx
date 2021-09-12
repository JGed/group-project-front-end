import * as React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
const RecipeCards = ({ recipe }) => {
    return (
            <Card sx={{ width: 350, height: 300 }}>
                <CardActionArea>
                    <Link className='router-card' to={`/recipe/${recipe.id}`}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://next.material-ui.com/static/images/cards/paella.jpg"
                            alt="Shrimp and Chorizo Paella"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Shrimp and Chorizo Paella
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish
                                and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the
                                mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
    );
};

export default RecipeCards;

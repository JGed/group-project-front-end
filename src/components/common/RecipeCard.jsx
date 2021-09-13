import { Card, CardActionArea, CardMedia, CardContent, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
const RecipeCard = ({ recipe }) => {
    return (
                                <Card sx={{ width: 350, height: 310 }}>
                                    <CardActionArea>
                                        <Link
                                            className="router-card"
                                            to={`/recipe/${recipe.id}`}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="150"
                                                image={recipe.photoURL}
                                                alt={recipe.name}
                                            />
                                            <CardContent>
                                                <Typography
                                                    variant="h5"
                                                    component="div"
                                                    noWrap
                                                >
                                                    {recipe.name}
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                    color="text.secondary"
                                                    noWrap
                                                >
                                                    {recipe.category}
                                                </Typography>
                                                <Divider />
                                                <Typography 
                                                    variant='body2'
                                                    color='text.secondary'
                                                >
                                                    {recipe.directions}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </CardActionArea>
                                </Card>
    );
}

export default RecipeCard;
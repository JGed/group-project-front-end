import {
    Card,
    CardActionArea,
    CardMedia,
    Divider,
    CardContent,
    Typography,
    Grid,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
const RecipeCard = ({ recipe }) => {
    return (
        <Card sx={{ width: 350, height: 250 }}>
            <CardActionArea sx={{height: '100%'}}>
                <Link className="router-card" to={`/recipe/${recipe.id}`}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={recipe.photoURL}
                        alt={recipe.name}
                    />
                    <CardContent>
                        <Grid container>
                            <Grid item xs={9}>
                                <Typography variant="h6" component="div" noWrap>
                                    {recipe.name}
                                </Typography>
                                <Divider />
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    noWrap
                                >
                                    {recipe.category}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                container
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <VisibilityIcon />
                                <Typography variant="h6">
                                    &nbsp;{recipe.views}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
};

export default RecipeCard;

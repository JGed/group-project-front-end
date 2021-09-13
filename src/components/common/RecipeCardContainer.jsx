import { Grid } from '@material-ui/core';
const RecipeCardContainer = ({ children }) => {
    return (
        <Grid
            item
            container
            xs={12}
            md={6}
            lg={4}
            xl={3}
            sx={{ mb: 4, justifyContent: 'center' }}
        >
            {children}
        </Grid>
    );
};

export default RecipeCardContainer;

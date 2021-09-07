import { useState } from 'react';
import { Box, TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import createMyRecipe from '../requests/createMyRecipe';

const CreateRecipe = ({ closeModal, sessionToken }) => {
    const [recipe, setRecipe] = useState({
        name: '',
        directions: '',
        servings: '',
        cookTime: '',
        photoURL: '',
        category: '',
        isPublic: false
    });
    const [message, setMessage] = useState('');
    const handleChange = field => e => {
        console.log(field, e.target.value)
        console.log(field, e.target.checked)
        setRecipe({
            ...recipe,
            [field]: e.target.value || e.target.checked
        })
        console.log(recipe)
    }

    const handleCreateRecipeClick = async (e) => {
        e.preventDefault();
        try {
            const { status, json } = await createMyRecipe(recipe, sessionToken);
            setMessage(json.message);
            console.log('status: ', status);
            console.log('json: ', json);
        }
        catch(error) {
            setMessage('Recipe cannot be created at this time.  Please try again later.')
            console.log(error);
        }
    };
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800',
                height: '800',
                maxWidth: '100%',
                maxHeight: '100%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
        >
            <Box
                component="form"
                onSubmit={handleCreateRecipeClick}
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        width: '800',
                        maxWidth: '100%',
                    },
                    textAlign: 'center',
                }}
                noValidate
                autocomplete="off"
            >
                <div>
                    <TextField
                        label="name"
                        value={recipe.name}
                        onChange={handleChange('name')}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="directions"
                        value={recipe.directions}
                        onChange={handleChange('directions')}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="category"
                        value={recipe.category}
                        onChange={handleChange('category')}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="servings"
                        value={recipe.servings}
                        onChange={handleChange('servings')}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="cook time"
                        value={recipe.cookTime}
                        onChange={handleChange('cookTime')}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="photo url"
                        value={recipe.photoURL}
                        onChange={handleChange('photoURL')}
                        fullWidth
                    />
                </div>
                <div>
                    <FormControlLabel
                    label='Public'
                    control={<Switch
                        name='isPublic'
                        checked={recipe.isPublic}
                        onChange={handleChange('isPublic')} 
                        />}
                    />
                </div>
                <div>
                    <Button variant='contained' fullWidth type='submit'>Create Recipe</Button>
                    <Button variant='contained' fullWidth type='button' onClick={closeModal}>Close</Button>
                </div>
                {message}
            </Box>
        </Box>
    );
};

export default CreateRecipe;

import { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import createMyRecipe from '../requests/createMyRecipe';

const CreateRecipe = ({ closeModal, sessionToken }) => {
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        servings: '',
        cookTime: '',
        photoURL: '',
        category: ''
    });
    const [message, setMessage] = useState('');

    const handleCreateRecipeClick = async (e) => {
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
                        onChange={(e) => setRecipe(curr => {
                            return {
                                ...curr, 
                                name: e.target.value
                            }
                        })}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="description"
                        value={recipe.directions}
                        onChange={(e) => setRecipe(curr => {
                            return {
                                ...curr, 
                                directions: e.target.value
                            }
                        })}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="category"
                        value={recipe.category}
                        onChange={(e) => setRecipe(curr => {
                            return {
                                ...curr, 
                                category: e.target.value
                            }
                        })}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="servings"
                        value={recipe.servings}
                        onChange={(e) => setRecipe(curr => {
                            return {
                                ...curr, 
                                servings: e.target.value
                            }
                        })}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="cook time"
                        value={recipe.cookTime}
                        onChange={(e) => setRecipe(curr => {
                            return {
                                ...curr, 
                                cookTime: e.target.value
                            }
                        })}
                        fullWidth
                    />
                </div>
                <div>
                    <TextField
                        label="photo url"
                        value={recipe.photoURL}
                        onChange={(e) => setRecipe(curr => {
                            return {
                                ...curr, 
                                photoURL: e.target.value
                            }
                        })}
                        fullWidth
                    />
                </div>
                <div>
                    <Button variant='contained' fullWidth onClick={handleCreateRecipeClick}>Create Recipe</Button>
                    <Button variant='contained' fullWidth onClick={closeModal}>Close</Button>
                </div>
                {message}
            </Box>
        </Box>
    );
};

export default CreateRecipe;

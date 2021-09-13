import { Modal, Box, Button,Container,  Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Timer = ({ recipe }) => {
    const [mins, setMins] = useState(recipe.cookTime);
    const [seconds, setSeconds] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const [finished, setFinished] = useState(false);

    const handleClick = (e) => setIsRunning((curr) => !curr);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds((curr) => {
                    if (curr > 0) return curr - 1;
                    if (curr === 0) {
                        if (mins === 0) {
                            setIsRunning(false);
                            setFinished(true);
                            return 0;
                        } else {
                            setMins((currMins) => currMins - 1);
                            return 59;
                        }
                    }
                });
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    });
    useEffect(() => {
        if (finished) {
            const message = new SpeechSynthesisUtterance();
            message.text = `Your ${recipe.name} is finished.`;
            window.speechSynthesis.speak(message);
        }
    }, [finished, recipe]);

    return (
        <Container>
            <Typography variant='h3'>
                Time remaining: {mins} : {seconds.toString().padStart(2, '0')}
            </Typography>
            <Box>
                <Button variant='contained' color='secondary' onClick={handleClick}>
                    {isRunning ? 'Stop' : 'Start'}
                </Button>
            </Box>
            <Modal open={finished} onClose={() => setFinished(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        height: 300,
                        bgcolor: 'neutral.light',
                        border: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">
                        Your {recipe.name} is finished.
                    </Typography>
                </Box>
            </Modal>
            </Container>
    );
};

export default Timer;

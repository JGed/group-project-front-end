export const BoxContainerSx = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    bgcolor: 'neutral.light',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const BoxFormSx = {
    '& .MuiTextField-root': {
        m: 2,
        width: '40ch',
        maxWidth: '100%',
    },
    textAlign: 'center',
};
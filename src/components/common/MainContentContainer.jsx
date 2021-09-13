import { Container, Box } from '@material-ui/core';
// This is a reusable container for storying the main content of the page.
// This container will always resize so that the header + this + footer
// always take at least the full screen height.
const MainContentContainer = ({ children, noPadding }) => {
    return (
        noPadding ? 
        <Box
            sx={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            {children}
        </Box>
        :(
        <Container
            maxWidth="xl"
            sx={{
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                py: 3
            }}
        >
            {children}
        </Container>
        )
    );
};

export default MainContentContainer;

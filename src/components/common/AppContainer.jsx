import { Box } from '@material-ui/core'
const AppContainer = ({ children }) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: 'neutral.light',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {children}
        </Box>
    );
};
export default AppContainer;

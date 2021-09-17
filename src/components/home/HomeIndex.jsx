import { useState, useEffect } from 'react';
import { useSession } from '../../context/sessionContext';
import fetchPublicRecipes from '../../requests/fetchPublicRecipes';
import HeroSection from './HeroSection';
import HotRecipes from './HotRecipes';
import MainContentContainer from '../common/MainContentContainer';

const HomeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const { sessionToken } = useSession();
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const { status, json } = await fetchPublicRecipes(sessionToken);
                if (status === 200) {
                    if (mounted) {
                        setRecipes(json);
                        setMessage('');
                        setError(false);
                    }
                }
                if (status === 403) {
                    if (mounted) {
                        setMessage(json.message);
                        setError(true);
                    }
                }
                if (status === 404) {
                    if (mounted) {
                        setMessage(json.message);
                        setError(true);
                    }
                }
            } catch (err) {
                if (mounted) {
                    setMessage(
                        'Uh-oh something on our end went wrong. Try refreshing to view this page'
                    );
                    setError(true);
                }
            }
            return () => { mounted = false };
        })();
    }, [sessionToken]);
    return (
        <MainContentContainer noPadding>
            <HeroSection />
            <HotRecipes recipes={recipes} />
        </MainContentContainer>
    );
};
export default HomeIndex;

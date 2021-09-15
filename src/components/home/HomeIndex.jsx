import { useState, useEffect, useRef } from "react";
import { useSession } from "../../context/sessionContext";
import fetchPublicRecipes from "../../requests/fetchPublicRecipes";
import HeroSection from "./HeroSection";
import HotRecipes from "./HotRecipes";
import MainContentContainer from "../common/MainContentContainer";

const HomeIndex = (props) => {
  const unmounted = useRef(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const { sessionToken } = useSession();
  useEffect(() => {
    (async () => {
      try {
        const { status, json } = await fetchPublicRecipes(sessionToken);
        if (status === 200) {
        if(unmounted) return;
          setRecipes(json);
          setMessage("");
          setError(false);
        }
        if (status === 403) {
        if(unmounted) return;
          setMessage(json.message);
          setError(true);
        }
        if (status === 404) {
        if(unmounted) return;
          setMessage(json.message);
          setError(true);
        }
      } catch (err) {
        if(unmounted) return;
        setMessage(
          "Uh-oh something on our end went wrong. Try refreshing to view this page"
        );
        setError(true);
      }
      return () => unmounted.current = true;
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

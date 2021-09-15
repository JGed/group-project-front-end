import { useState, useEffect } from "react";
import { useSession } from "../../context/sessionContext";
import fetchPublicRecipes from "../../requests/fetchPublicRecipes";
import HeroSection from "./HeroSection";
import HotRecipes from "./HotRecipes";
import MainContentContainer from "../common/MainContentContainer";

const HomeIndex = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const { sessionToken } = useSession();
  useEffect(() => {
    (async () => {
      try {
        const { status, json } = await fetchPublicRecipes(sessionToken);
        console.log(json);
        if (status === 200) {
          setRecipes(json);
          setMessage("");
          setError(false);
        }
        if (status === 403) {
          setMessage(json.message);
          setError(true);
        }
        if (status === 404) {
          setMessage(json.message);
          setError(true);
        }
      } catch (err) {
        setMessage(
          "Uh-oh something on our end went wrong. Try refreshing to view this page"
        );
        setError(true);
        console.log(err);
      }
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

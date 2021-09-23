import { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { useSession } from "../../context/sessionContext";

const imageUploadURL = "https://api.cloudinary.com/v1_1/pripley/image/upload";

const ImageUpload = (props) => {
  const [photoUrl, setPhotoUrl] = useState("#");
  const { sessionToken } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/recipe/cloudsign", {
      method: "GET",
      headers: {
        Authorization: sessionToken,
      },
    });

    const { signature, timestamp } = await response.json();

    const file = document.getElementById("photoUrl").files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "clickncook_recipe_pic");
    formData.append("api_key", "987862281172347");
    formData.append("signature", signature);
    formData.append("timestamp", timestamp);

    const results = await (
      await fetch(imageUploadURL, {
        method: "POST",
        body: formData,
      })
    ).json();

    console.log(results);
  };

  return (
    <>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="photoUrl" multiple type="file"  sx={{ m: 1 }} color="info"/>
        <Button component="span" type="submit" color="secondary" onClick={handleSubmit}>
          Upload Image
        </Button>              
      </label>
    </>
  );
};

export default ImageUpload;

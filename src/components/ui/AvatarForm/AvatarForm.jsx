import React, { useState } from "react";
import {
  AvatarFormWrap,
  AvatarWrap,
  ChosePhoto,
  UploadInput,
  UploadButtonsWrap,
  UploadPhoto,
  Cancel,
} from "./styled";
const AvatarForm = ({ uploadPhoto, avatar }) => {
  const [isChoseFile, setIsChoseFile] = useState(false);
  const [imageUrl, setFileUrl] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const handleChosePhoto = (e) => {
    const { value } = e.target;
    if (value.length !== 0) {
      setIsChoseFile(true);
      const image = e.target.files[0];
      if (image.type === "image/jpeg") {
        const imageUrl = URL.createObjectURL(image);
        setImageFile(image);
        setFileUrl(imageUrl);
      } else {
        setIsChoseFile(false);
      }
    } else {
      setIsChoseFile(false);
    }
  };

  const handelCancel = () => {
    setFileUrl(null);
    setImageFile(null);
    setIsChoseFile(false);
  };

  const uploadAvatar = async () => {
    uploadPhoto({ imageFile });
    setIsChoseFile(false);
  };

  return (
    <AvatarFormWrap>
      <AvatarWrap avatarUrl={imageUrl || avatar} />

      {isChoseFile ? (
        <>
          <ChosePhoto for="fileInput">{imageFile.name}</ChosePhoto>
          <UploadButtonsWrap>
            <UploadPhoto onClick={uploadAvatar}>Upload Photo</UploadPhoto>
            <Cancel onClick={handelCancel}>Cancel</Cancel>
          </UploadButtonsWrap>
        </>
      ) : (
        <ChosePhoto for="fileInput">Choose Photo</ChosePhoto>
      )}
      <UploadInput type="file" id="fileInput" onChange={handleChosePhoto} />
    </AvatarFormWrap>
  );
};
export default AvatarForm;

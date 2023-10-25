import React from "react";
import { useRef, useState } from "react";
import "./AddPhoto.css";
import SideImage from "../../components/Side_image/SideImage";
import image from "../../assets/images/add_photo.png";
import Navigation from "../../components/Navigation/navigation";
import Body from "../../components/Body/body";
import Button from "../../components/Button/button";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { render } from "@testing-library/react";

function AddPhoto() {
  const [profileImg, setProfileImg] = useState(null);
  
  function imageToBase64(imageFile, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const base64Image = event.target.result;
      callback(base64Image);
    };
    reader.readAsDataURL(imageFile)
  }
  const uploadImage = () =>{
    if (profileImg) {
      imageToBase64(profileImg, (base64Image) => {

        localStorage.setItem("profileImage", base64Image)
      })
    }
    
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        setProfileImg(event.target.files[0]);
 
    }
  };
  return (
    <div>
      <div className="side-bg">
        <SideImage image={image} />
      </div>

      <Navigation>
        <Link to="/register">
          <FaArrowLeft /> <span>Back</span>
        </Link>
        <span>
          <b>Step 1</b> of 4
        </span>
        <Link to="/register">
          <span>Exit</span>
        </Link>
      </Navigation>

      <Body>
        <p className="form-head1">
          <b>Add Photo</b>
        </p>
        <p>Add a photo so other members know who you are</p>

        <input type="file" id="profile-input" onChange={onImageChange} />

        <div className="profile-div">
          {!profileImg ? (
            <label className="profile-label" htmlFor="profile-input">
              <div className="defalut-profile-img-div">
                <BsFillPersonFill className="profile-defalut-logo" />
              </div>
            </label>
          ) : (
            <label htmlFor="profile-input" className="profile-label">
              <img
                className="profile-logo"
                src={URL.createObjectURL(profileImg)}
                alt="user-profile-img"
              />
            </label>
          )}
        </div>

        <Button fuc={uploadImage} content={"Upload a photo"} />

        <Link to="/interests">
          <p className="skip-tag">Skip</p>
        </Link>
      </Body>
    </div>
  );
}

export default AddPhoto;

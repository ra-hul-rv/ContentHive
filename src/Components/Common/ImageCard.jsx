import PropTypes from "prop-types";
import { useState } from "react";
import "./image-card.scss";
import imgHolders from "../../assets/images/noimage.jpg";

const ImageCard = ({ name, imgURL }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageUrl = `https://test.create.diagnal.com/images/${imgURL}`;

  const handleImageError = (e) => {
    e.target.src = imgHolders;
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="image-card">
      {isLoading && <div className="skeleton-loader"></div>}
      <img
        src={imageUrl}
        alt={name}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      <div className="image-name">{name}</div>
    </div>
  );
};

ImageCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};

export default ImageCard;

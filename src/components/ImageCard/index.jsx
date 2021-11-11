import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Skeleton from '../Skeleton';


const Card = styled.div`
  background-image: url(${(props) => props.photo});
  background-size: cover;
  border-radius: 6px;
  display: flex;
  height: 90px;
  justify-content: center;
  padding: 8px;
  width: 90px;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #FFF;
  font-size: 16px;
`;

const ImageCard = ({ photo, title }) => {

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImgLoaded(true);
  }, [photo]);

  return (
    <>
      {imgLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ): (
      <Skeleton width="90px" height="90px" />
      )}
      
    </>
    );
};

export default ImageCard;
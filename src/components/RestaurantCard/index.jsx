import React, { useState } from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";
import ReactStars from "react-rating-stars-component";
import defaultPhoto from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';


const RestaurantCard = ({restaurant, onClick}) => {

  const [imgLoaded, setImgLoaded] = useState(false);


  return (
    
    <Restaurant onClick={onClick} >
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" size={25} />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl(): defaultPhoto}
      imgLoaded={imgLoaded}
      alt="Imagem do restaurante" 
      onLoad={() => setImgLoaded(true)} />
      {!imgLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
    
  );
}

export default RestaurantCard;
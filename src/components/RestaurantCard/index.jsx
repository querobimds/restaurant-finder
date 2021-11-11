import React from "react";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from "./styles";
import ReactStars from "react-rating-stars-component";
import defaultPhoto from '../../assets/restaurante-fake.png';


const RestaurantCard = ({restaurant, onClick}) => (
  <Restaurant onClick={onClick} >
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" size={25} />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl(): defaultPhoto} alt="Imagem do restaurante" />
  </Restaurant> 
);

export default RestaurantCard;
import React, {useState} from 'react';
import TextField, {Input} from '@material/react-text-field';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';
import {Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel} from './styles';
import { Card, RestaurantCard, Modal, Map} from '../../components';
import logo from '../../assets/logo.svg';
import defaultPhoto from '../../assets/restaurante-fake.png';



const Home = () => {

  const [inputValue, setInputValue] = useState();
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  };

  function handleKeyPress(e){
    if(e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId){
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
  <Wrapper>
    <Container>
      <Search>
        <Logo src={logo} alt="Logo do restaurante" />
        <TextField
          label="Pesquisar restaurantes"
          outlined
          trailingIcon={<MaterialIcon role="button" icon="search"/>}
        >
          <Input 
          value={inputValue}
          onKeyPress={handleKeyPress}
          onChange={(e) => setInputValue(e.target.value)}
          />
        </TextField>
        <CarouselTitle>Na Sua Área</CarouselTitle>
        <Carousel {...settings}>
          {restaurants.map((restaurant) => (
            <Card 
              key={restaurant.place_id}
              photo={restaurant.photos ? restaurant.photos[0].getUrl : defaultPhoto}
              title={restaurant.name}
            />
          ))}
        </Carousel>
      </Search>
      {restaurants.map((restaurant) => (
        <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} /> ))
        }
    </Container>
    <Map query={query} placeId={placeId} />
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
      <p>{restaurantSelected?.name}</p>
      <p>{restaurantSelected?.formatted_phone_number}</p>
      <p>{restaurantSelected?.formatted_address}</p>
    </Modal>
  </Wrapper>
  
  );
};

export default Home;
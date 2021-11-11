import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: auto;
  width: 360px;
`;

export const Search = styled.section`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const Logo = styled.img`
  align-self: center;
  margin-bottom: 15px;
  width: 150px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 40px;
  }
`;

export const CarouselTitle = styled.h1`
  color: ${(props) => props.theme.colors.title};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;

export const MapArea = styled.section`
  background-color: black;
  flex: 1;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.title};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  letter-spacing: 0.15px;
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;
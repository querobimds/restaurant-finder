import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #FFF;
  border-left: 5px solid transparent;
  transition: .3s ease;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.title};
  font-weight: bold;
  font-size: 1.5em;
  line-height: 29px;
  margin: 8px 0;
  
`;

export const Address = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 1em;
line-height: 19px;
margin: 8px 0;
`;

export const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;

`;

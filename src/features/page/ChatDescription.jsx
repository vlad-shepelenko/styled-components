import styled from "styled-components";
import React, { useContext } from "react";
import { furnitureItems } from "../../data/page";
import { star } from "../../assets";
import { UserContext } from "../../components/page/Page";
import { ThemeContext } from "../../App";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ darkTheme }) => (darkTheme === false ? "rgb(255, 255, 255)" : "rgb(0,19,41)")};
  border-radius: 10px;
  height: 575px;
  width: 300px;
`;

const Name = styled.div`
  font-family: "Gilroy-Medium";
  font-style: normal;
  text-align: center;

  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.height};
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const Ellipse = styled.div`
  width: 100px;
  height: 100px;
  top: 20px;
  left: 100px;
  border-radius: 100px;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(165, 206, 255)" : "rgb(0, 52, 116)"};

  img {
    width: 90px;
    height: 90px;
    margin-top: 5px;
    margin-left: 5px;
  }
`;

const Text = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.height};
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const DivHead = styled.span`
  margin: 0 15px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.height};
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const Rating = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;
  width: 46px;
  height: 10px;
  left: 127px;
  top: 171px;
`;

const Img = styled.img`
  height: 10px;
  width: 10px;
`;

const Item = styled.ul`
  display: block;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 15px;

  li {
    margin-bottom: 16px;
    height: 40px;
    flex-wrap: wrap;
  }

  li img {
    margin-left: 15px;
    height: 40px;
    width: 40px;
  }
`;

const AvatarDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 5px;
`;

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
`;

const FurnitureName = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const FurnitureTime = styled.span`
  display: flex;
  margin-left: auto;
  margin-right: 15px;
  align-items: center;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const FurnitureCountry = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(152, 155, 161)" : "rgb(203, 203, 203)")};
`;

const Line = styled.div`
  width: 215px;
  height: 0px;
  border: 1px solid
    ${({ darkTheme }) => (darkTheme === false ? "rgb(209, 230, 255)" : "rgb(0, 32, 71)")};
`;

const FurnitureNameDiv = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  gap: 5px;
`;

const ItemDiv = styled.div`
  display: flex;
  gap: 15px;
`;

const LineDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: 8px;
`;

const ChatDescription = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [user, , name, , position] = useContext(UserContext);
  return (
    <React.Fragment>
      <Div darkTheme={darkTheme}>
        <AvatarDiv>
          <Ellipse darkTheme={darkTheme}>
            <img src={user} alt="avatar" />
          </Ellipse>
        </AvatarDiv>
        <InformationDiv>
          <Name darkTheme={darkTheme} weight="bold" size="14px" height="17px">
            {name}
          </Name>
          <Name darkTheme={darkTheme} weight="normal" size="8px" height="9px">
            {position}
          </Name>
          <Rating>
            <Img src={star} alt="start" />
            <Text darkTheme={darkTheme} weight="bold" size="6px" height="7px">
              4.7 (Rating)
            </Text>
          </Rating>
        </InformationDiv>
        <TableHead>
          <DivHead darkTheme={darkTheme} weight="bold" size="14px" height="17px">
            Lorem ipsum
          </DivHead>
          <DivHead darkTheme={darkTheme} weight="normal" size="10px" height="12px">
            See all
          </DivHead>
        </TableHead>
        <Item darkTheme={darkTheme}>
          {furnitureItems.map((item) => (
            <li key={item.id}>
              <ItemDiv>
                <img src={item.photo} alt={item.name} />
                <FurnitureNameDiv>
                  <FurnitureName darkTheme={darkTheme}>{item.name}</FurnitureName>
                  <FurnitureCountry darkTheme={darkTheme}>{item.country}</FurnitureCountry>
                </FurnitureNameDiv>
                <FurnitureTime darkTheme={darkTheme}>{item.time}</FurnitureTime>
              </ItemDiv>
              <LineDiv>
                <Line darkTheme={darkTheme} />
              </LineDiv>
            </li>
          ))}
        </Item>
      </Div>
    </React.Fragment>
  );
};

export default ChatDescription;

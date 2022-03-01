import styled from "styled-components";
import React, { useContext, useState } from "react";
import { menuItems } from "../../data/page";
import { darkLogo, logo, numberOrders } from "../../assets";
import { ThemeContext } from "../../App";

const Div = styled.div`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(85, 87, 88)" : "rgb(191, 219, 253)")};
`;

const DivMenu = styled.div`
  width: 180px;
  display: grid;
  border-radius: 10px 0 0 10px;
  grid-template: 85px repeat(7, 50px) calc(681px - 85px - 50px * 7) / 180px;
  background: ${({ darkTheme }) => (darkTheme === false ? "rgb(255, 255, 255)" : "rgb(0, 19, 41)")};

  div span {
    margin: auto 0;
  }

  .notActive {
    background: ${({ darkTheme }) =>
      darkTheme === false ? "rgb(255, 255, 255)" : "rgb(0, 19, 41)"};
  }

  .active {
    background: rgb(29, 117, 221);
  }
`;

const MenuItem = styled.div`
  display: grid;
  grid-template: 50px / 5px 25px 16px 20px 73px 41px;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(85, 87, 88)" : "rgb(191, 219, 253)")};
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: rgb(29, 117, 221);
`;

const NumberOrders = styled.img`
  display: flex;
  margin-top: 21px;
  width: 15px;
  height: 15px;
`;
const Img = styled.img`
  margin: auto;
  width: 16px;
  height: 16px;
`;

const LogoDiv = styled.div`
  display: grid;
  grid-template: 40px / 40px 15px 65px;
  margin: auto;
  text-align: center;
`;

const LogoLabel = styled.span`
  font-family: "Gilroy-Medium";
  line-height: 40px;
  text-align: center;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(85, 87, 88)" : "rgb(191, 219, 253)")};
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
`;

const CheckboxWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  margin-left: 30px;
`;

const CheckboxLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 85px;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  background-color: rgb(190, 190, 190);
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 3px;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const Checkbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 20px;
  &:checked + ${CheckboxLabel} {
    background-color: rgb(29, 117, 221);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Menu = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(4);
  return (
    <>
      <DivMenu darkTheme={darkTheme}>
        <LogoDiv>
          <Div>
            <LogoImg src={darkTheme === false ? logo : darkLogo} alt="Logo" />
          </Div>
          <Div />
          <LogoLabel darkTheme={darkTheme}>Logo</LogoLabel>
        </LogoDiv>
        {menuItems.map((item) => (
          <MenuItem darkTheme={darkTheme} key={item.id} onClick={() => setIsActive(item.id)}>
            {item.id === isActive ? <Div className="active" /> : <Div className="notActive" />}
            <Div />
            <Img src={darkTheme === false ? item.itemLogo : item.darkLogo} alt={item.itemName} />
            <Div />
            <span>{item.itemName} </span>
            {item.id === 3 ? <NumberOrders src={numberOrders} alt="numberOrders" /> : <Div />}
          </MenuItem>
        ))}
        <Div darkTheme={darkTheme}>
          <CheckboxWrapper>
            Dark Theme:
            <Checkbox
              id="checkbox"
              type="checkbox"
              onChange={() => {
                darkTheme === false ? setDarkTheme(true) : setDarkTheme(false);
              }}
            />
            <CheckboxLabel htmlFor="checkbox" />
          </CheckboxWrapper>
        </Div>
      </DivMenu>
    </>
  );
};

export default Menu;

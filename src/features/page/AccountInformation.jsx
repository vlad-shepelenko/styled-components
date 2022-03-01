import styled from "styled-components";
import React, { useContext } from "react";
import { avatar, bell, darkBell, darkPlus, plus } from "../../assets";
import { ThemeContext } from "../../App";

const Div = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
  height: 85px;
`;

const ChatLabel = styled.span`
  margin-right: auto;
  margin-left: 39px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.87)"};
`;

const ChatButton = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgba(255, 255, 255, 0.87)" : "rgb(0, 19, 41)"};
  background: rgb(29, 117, 221);

  img {
    width: 16px;
    margin-top: -0.5px;
  }

  span {
    font-family: "Gilroy-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;

const ButDiv = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  align-items: center;
  width: 35px;
`;

const User = styled.span`
  margin-right: 23px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.87)"};
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const Bell = styled.img`
  align-items: center;
  width: 24px;
`;

const AccountInformation = () => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Div>
        <ChatLabel darkTheme={darkTheme}>Chat</ChatLabel>
        <ChatButton darkTheme={darkTheme}>
          <ButDiv>
            <ButtonDiv>
              <img src={darkTheme === false ? plus : darkPlus} alt="plus" />
            </ButtonDiv>
            <ButtonDiv>
              <span>Chat</span>
            </ButtonDiv>
          </ButDiv>
        </ChatButton>
        <div>
          <Bell src={darkTheme === false ? bell : darkBell} alt="bell" height="24px" width="24px" />
        </div>
        <Avatar src={avatar} alt="avatar" />
        <User darkTheme={darkTheme}>Leslie Alexander</User>
      </Div>
    </React.Fragment>
  );
};

export default AccountInformation;

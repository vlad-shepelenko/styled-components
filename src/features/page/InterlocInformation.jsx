import styled from "styled-components";
import React, { useContext } from "react";
import { darkMore, more } from "../../assets";
import { UserContext } from "../../components/page/Page";
import { ThemeContext } from "../../App";

const Div = styled.div`
  display: flex;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgba(255, 255, 255, 0.85)" : "rgb(0, 19, 41)"};
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 460px;
`;

const Interloc = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
  height: 30px;
`;

const InterlocName = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(85, 87, 88)" : "rgb(203, 203, 203)")};
`;

const InterlocPosition = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(85, 87, 88)" : "rgb(203, 203, 203)")};
`;

const Avatar = styled.img`
  height: 30px;
  width: 30px;
`;

const More = styled.img`
  height: 24px;
  width: 24px;
`;

const InterInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const InterlocInformation = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [user, , name, , position] = useContext(UserContext);
  return (
    <React.Fragment>
      <Div darkTheme={darkTheme}>
        <Interloc darkTheme={darkTheme}>
          <Avatar src={user} alt="photo" />
          <InterInformation>
            <InterlocName darkTheme={darkTheme}>{name}</InterlocName>
            <InterlocPosition darkTheme={darkTheme}>{position}</InterlocPosition>
          </InterInformation>
        </Interloc>
        <More src={darkTheme === false ? more : darkMore} alt="more" />
      </Div>
    </React.Fragment>
  );
};

export default InterlocInformation;

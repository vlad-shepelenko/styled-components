import styled from "styled-components";
import React, { useState, createContext, useContext } from "react";
import { ThemeContext } from "../../App";
import {
  AccountInformation,
  ChatDescription,
  ChatWindow,
  Inbox,
  InterlocInformation,
  Menu,
} from "../../features/page";
import { leslie } from "../../assets";
import { rgb } from "polished";

const MainWindow = styled.div`
  display: flex;
  background: ${(props) => (props.darktheme === false ? rgb(209, 230, 255) : rgb(0, 32, 71))};
  height: 681px;
  width: 1271px;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  column-gap: 1%;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Window = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5%;
`;

export const UserContext = createContext();

const Page = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [user, setUser] = useState(leslie);
  const [name, setName] = useState("Leslie Alexander");
  const [position, setPosition] = useState("Web designer");

  return (
    <MainWindow darktheme={darkTheme}>
      <Menu />
      <Content>
        <UserContext.Provider value={[user, setUser, name, setName, position, setPosition]}>
          <AccountInformation />
          <Window>
            <Inbox />
            <Chat>
              <InterlocInformation />
              <ChatWindow />
            </Chat>
            <ChatDescription />
          </Window>
        </UserContext.Provider>
      </Content>
    </MainWindow>
  );
};

export default Page;

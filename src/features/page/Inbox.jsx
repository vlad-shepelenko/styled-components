import styled from "styled-components";
import React, { useContext, useState } from "react";
import { conversationItems } from "../../data/page";
import { darkSettings, search, setting } from "../../assets";
import { UserContext } from "../../components/page/Page";
import { ThemeContext } from "../../App";

const Div = styled.div`
  display: flex;
  height: 87.5%;
  width: 23%;
  justify-content: flex-start;
  margin-left: 2.8%;
  gap: 5px;
  flex-wrap: wrap;
`;

const Label = styled.div`
  margin-left: 9px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const Messages = styled.div`
  display: flex;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(165, 206, 255);" : "rgb(0, 52, 116)"};
  width: 45px;
  height: 16px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

const NotificationCount = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(29, 117, 221);" : "rgb(47, 131, 228)")};
`;

const Settings = styled.img`
  height: 16px;
  width: 16px;
`;

const Search = styled.input.attrs({
  type: "text",
})`
  margin-top: 23px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 500;
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(152, 155, 161)" : "rgb(203, 203, 203)")};
  border: none;
  border-radius: 100px;
  width: 100%;
  height: 40px;
  padding-left: 46px;
  background: url(${search}) no-repeat center left 20px
    ${({ darkTheme }) => (darkTheme === false ? "rgba(255, 255, 255, 0.85)" : "rgb(0, 19, 41)")};
  background-size: 16px 16px;
`;

const Correspondence = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 480px;
  flex-direction: column;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgba(255, 255, 255, 0.85)" : "rgb(0, 19, 41)"};
  border-radius: 10px;
`;

const UnreadMessage = styled.div`
  position: absolute;
  margin-top: 28px;
  margin-left: 14px;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background: rgb(29, 117, 221);
`;

const Conversation = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  height: 80px;
  column-gap: 10px;
  flex-wrap: wrap;

  :nth-child(${(props) => props.active}) {
    background: linear-gradient(90deg, #1d75dd 0%, #085ec4 100%);
    color: ${({ darkTheme }) => (darkTheme === false ? "rgb(255, 255, 255)" : "rgb(0, 19, 41)")};
  }
`;

const CentredMessage = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 29px;
  width: 82%;
  height: 50px;
  flex-wrap: wrap;
  column-gap: 10px;
`;

const Interlocutor = styled.span`
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 500;
  margin-right: auto;
  font-size: 14px;
  line-height: 16px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const LastMessageTime = styled.div`
  margin-top: 3%;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const Position = styled.span`
  display: flex;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const LastMessage = styled.div`
  display: flex;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  align-items: flex-end;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const Line = styled.div`
  align-self: flex-end;
  width: 100%;
  height: 1px;
  border-radius: 10px;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(209, 230, 255);" : "rgb(0, 32, 71)"};
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
`;

const InboxDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

const SettingsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const Interloc = styled.div`
  display: flex;
  width: 79%;
  justify-content: end;
  flex-wrap: wrap;
`;

const Pos = styled.div`
  margin-right: auto;
  width: 82%;
`;

const Inbox = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [user, setUser, , setName, , setPosition] = useContext(UserContext);
  const activeID = conversationItems.find((item) => item.avatar === user);
  const [isAactive, setIsAactive] = useState(activeID.id + 1);
  return (
    <React.Fragment>
      <Div>
        <InboxDiv>
          <Label darkTheme={darkTheme}>Inbox</Label>
          <Messages darkTheme={darkTheme}>
            <NotificationCount darkTheme={darkTheme}>2 New</NotificationCount>
          </Messages>
          <SettingsDiv>
            <Settings src={darkTheme === false ? setting : darkSettings} alt="settings" />
          </SettingsDiv>
        </InboxDiv>
        <Search darkTheme={darkTheme} placeholder="Search..." />
        <Correspondence darkTheme={darkTheme}>
          <UnreadMessage />
          {conversationItems.map((item) => (
            <Conversation
              darkTheme={darkTheme}
              active={isAactive}
              key={item.id}
              onClick={() => {
                setIsAactive(item.id + 1);
                setUser(item.avatar);
                setName(item.interlocutor);
                setPosition(item.position);
              }}
            >
              <CentredMessage>
                <Avatar src={item.avatar} alt={item.avatar} />
                <Interloc>
                  <Interlocutor darkTheme={darkTheme}>{item.interlocutor}</Interlocutor>
                  <LastMessageTime darkTheme={darkTheme}>{item.lastMessageTime}</LastMessageTime>
                  <Pos>
                    <Position darkTheme={darkTheme}>{item.position}</Position>
                  </Pos>
                </Interloc>
                <LastMessage darkTheme={darkTheme}>{item.lastMessageContent}</LastMessage>
              </CentredMessage>
              <Line darkTheme={darkTheme} />
            </Conversation>
          ))}
        </Correspondence>
      </Div>
    </React.Fragment>
  );
};

export default Inbox;

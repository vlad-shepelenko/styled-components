import styled, { keyframes } from "styled-components";
import React, { useContext, useState } from "react";
import {
  airplane,
  audio,
  darkAirplane,
  darkAudio,
  darkPaperclip,
  darkPlay,
  darkSmile,
  marvin,
  paperclip,
  play,
  smile,
} from "../../assets";
import { UserContext } from "../../components/page/Page";
import { ThemeContext } from "../../App";

const rotate = keyframes`
  from {
    width: 40px;
  }

  to {
    width: 233px;
  }
`;

const Audio = styled.div`
  align-items: center;
  animation-timing-function: linear;
  animation: ${(props) => props.anim} 15s linear 1;
  width: 48px;
  height: 48px;
  border-radius: 360px;
  bottom: 0px;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgba(165, 206, 255, 0.8)" : "rgba(0, 52, 116, 0.8)"};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgba(255, 255, 255, 0.85)" : "rgb(0, 19, 41)"};
  border-radius: 10px;
  height: 480px;
  width: 460px;
`;

const Line = styled.div`
  width: 150px;
  height: 1px;
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(152, 155, 161);" : "rgb(203, 203, 203)"};
`;

const ConversationDate = styled.span`
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(152, 155, 161);" : "rgb(203, 203, 203)")};
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
`;

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 15px;
`;

const InterlocMessage = styled.div`
  display: flex;
  width: 370px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid rgb(29, 117, 221);
  background: ${({ darkTheme }) =>
    darkTheme === false ? "rgba(255, 255, 255, 0.85)" : "rgb(0, 19, 41)"};
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const YourMessage = styled.div`
  display: flex;
  width: 370px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ darkTheme }) => (darkTheme === false ? "rgb(209, 230, 255)" : "rgb(0, 32, 71)")};
`;

const MessageContent = styled.div`
  width: 350px;
  height: 40px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 14px;
  color: ${({ darkTheme }) =>
    darkTheme === false ? "rgb(85, 87, 88)" : "rgba(255, 255, 255, 0.85)"};
`;

const MessageTime = styled.div`
  display: flex;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  justify-content: ${(props) => props.cont};
  color: ${({ darkTheme }) => (darkTheme === false ? "rgb(152, 155, 161);" : "rgb(203, 203, 203)")};
`;

const MessageInput = styled.input.attrs({
  type: "text",
})`
  width: 430px;
  height: 35px;
  border: 1px solid
    ${({ darkTheme }) => (darkTheme === false ? "rgb(152, 155, 161)" : "rgb(203,203,230)")};
  border-radius: 3px;
  background: url(${({ darkTheme }) => (darkTheme === false ? paperclip : darkPaperclip)}),
    url(${({ darkTheme }) => (darkTheme === false ? smile : darkSmile)}),
    url(${({ darkTheme }) => (darkTheme === false ? airplane : darkAirplane)});
  background-position: center right 67px, center right 40px, center right 5px;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-size: 17px 17px, 17px 17px, 25px 25px;
  text-indent: 15px;
  font-family: "Gilroy-Medium";
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
`;

const AudioMessage = styled.span`
  display: flex;
  width: 233px;
  height: 48px;
  border-radius: 100px;
  border: 1px solid rgb(29, 117, 221);
`;

const PlayButton = styled.button`
  margin-top: 12px;
  margin-left: 10px;
  justify-content: start;
  border: none;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  background: url(${({ darkTheme }) => (darkTheme === false ? play : darkPlay)});
  background-size: 25px 25px;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 21px;
`;

const MessageDiv = styled.div`
  display: flex;
  margin-top: 21px;
  gap: 15px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const YourMessageDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const YourMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TimeCode = styled.img`
  width: 165px;
  height: 28px;
  margin-left: 35px;
`;

const AudioMessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 21px;
`;

const MessageInputDiv = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;
  margin-bottom: 15px;
`;

const YourAvatar = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 15px;
  margin-right: 15px;
`;

const ChatWindow = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [animation, setAnimation] = useState(null);
  const [user] = useContext(UserContext);
  return (
    <React.Fragment>
      <Div darkTheme={darkTheme}>
        <DateDiv>
          <Line darkTheme={darkTheme} />
          <ConversationDate darkTheme={darkTheme}>August 21</ConversationDate>
          <Line darkTheme={darkTheme} />
        </DateDiv>
        <MessageDiv>
          <Avatar src={user} alt="avatar" />
          <Message>
            <InterlocMessage darkTheme={darkTheme}>
              <MessageContent darkTheme={darkTheme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin
                turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam
                consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.
              </MessageContent>
            </InterlocMessage>
            <MessageTime darkTheme={darkTheme} cont="flex-start">
              10:15 pm
            </MessageTime>
          </Message>
        </MessageDiv>
        <YourMessageDiv>
          <YourMessageContent>
            <YourMessage darkTheme={darkTheme}>
              <MessageContent darkTheme={darkTheme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin
                turpis eu hac. Tortor dolor eu at bibendum suspendisse.
              </MessageContent>
            </YourMessage>
            <MessageTime darkTheme={darkTheme} cont="flex-end">
              12:15 pm
            </MessageTime>
          </YourMessageContent>
          <YourAvatar src={marvin} alt="avatar" />
        </YourMessageDiv>
        <DateDiv>
          <Line darkTheme={darkTheme} />
          <ConversationDate darkTheme={darkTheme}>August 22</ConversationDate>
          <Line darkTheme={darkTheme} />
        </DateDiv>
        <AudioMessageDiv>
          <Avatar src={user} alt="avatar" />
          <Message>
            <AudioMessage>
              <Audio darkTheme={darkTheme} anim={animation}>
                <PlayButton
                  darkTheme={darkTheme}
                  onClick={() => (animation === null ? setAnimation(rotate) : setAnimation(null))}
                >
                  <TimeCode src={darkTheme === false ? audio : darkAudio} alt="audio" />
                </PlayButton>
              </Audio>
            </AudioMessage>
          </Message>
        </AudioMessageDiv>
        <MessageInputDiv>
          <MessageInput darkTheme={darkTheme} placeholder="Write a message.." />
        </MessageInputDiv>
      </Div>
    </React.Fragment>
  );
};

export default ChatWindow;

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import { lightTheme } from "./Themes";
function Contact() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Conatainer>
        <LogoComponent theme="light" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Wrapper>
          <form action="">
            <div>
              {" "}
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Lastname" />
            </div>

            <input type="email" placeholder="Email" />
            <div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </Wrapper>
      </Conatainer>
    </ThemeProvider>
  );
}

export default Contact;

const Conatainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

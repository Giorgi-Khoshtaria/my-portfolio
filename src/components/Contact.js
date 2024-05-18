import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import emailjs from "emailjs-com";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import { lightTheme } from "./Themes";

const slideIn = keyframes`
  from {
    transform: translateY(100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 769px) {
    padding-top: 50px;
  }
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 70vh;
  border: 2px solid ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  backdrop-filter: blur(4px);
  animation: ${slideIn} 1s ease-out;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 200px;
  @media (max-width: 1250px) {
    gap: 50px;
  }
  @media (max-width: 769px) {
    gap: 16px;
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: transparent;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  border-radius: 5px;
  margin-top: 5px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: transparent;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  border-radius: 5px;
  resize: none;
  margin-top: 5px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
  }
`;

const Button = styled.button`
  padding: 12px 32px;
  border: none;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_c6rj13b", "template_fq3paxd", e.target, "8u05hBp6SAYKpHdDG").then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again later.");
      }
    );

    setFormData({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <LogoComponent theme="light" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <Label>Lastname</Label>
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                  required
                />
              </div>
            </InputGroup>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <Label>Message</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="10"
                placeholder="Message"
                required
              />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;

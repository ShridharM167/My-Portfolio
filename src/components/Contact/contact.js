import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
padding: 60px 20px;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right bottom, rgb(234, 230, 255), rgb(255, 235, 229));
  border-top: 4px solid #626ee3;
  padding: 32px;
  border-radius: 10px;
  margin-top: 28px;
  gap: 12px;
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }

`

const ContactButton = styled.input`
cursor: pointer; 
background-color: #1a73e8;
color: #fff;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
-webkit-box-align: center;
align-items: center;
border: 1px solid transparent;
border-radius: 4px;
display: inline-flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
flex-flow: row nowrap;
font-family: "Google Sans",Arial,Helvetica,sans-serif;
font-size: 14px;
font-weight: 500;
justify-content: center;
letter-spacing: .5px;
line-height: 14px;
margin: 15px 0 0 0;
max-width: fit-content;
min-height: 40px;
min-width: 150px;
overflow: hidden;
padding: 12px 24px 12px 24px;
text-align: center;
text-decoration: none;
vertical-align: middle;

&:hover {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  background-color: #185abc;
}

  @media (max-width: 640px) {
      font-size: 14px;
  } 

`;


const ContactMe = () => {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vt9idyd', 'template_rhgxnj6', form.current, 'TY6u3dKV6kTTBCGfa')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Your questions and opportunities are just a message away.</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactInput placeholder="Email" name="from_email" required />
          <ContactInput placeholder="Name" name="from_name" required/>
          <ContactInput placeholder="Subject" name="subject" required/>
          <ContactInputMessage placeholder="Message" rows="4" name="message"  required/>
          <div style={{width:"100%",display: "flex",justifyContent: "end"}}>
            <ContactButton type="submit" value="Send" />
          </div>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default ContactMe;
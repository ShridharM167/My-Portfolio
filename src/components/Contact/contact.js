import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar, CircularProgress, Alert } from "@mui/material";
import contactMeImg from '../../images/contactMe.webp';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 32px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    width: 350px;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-width: 500px;
  background: linear-gradient(to right bottom, rgb(234, 230, 255), rgb(255, 235, 229));
  border-top: 4px solid #626ee3;
  padding: 32px;
  border-radius: 10px;
  gap: 12px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme, error }) => (error ? "#e74c3c" : theme.text_secondary)};
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  border: 1px solid ${({ theme, error }) => (error ? "#e74c3c" : theme.text_secondary)};
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  resize: none;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff7700;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
  &:hover {
    background-color: #ff5003;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: #e74c3c;
  margin-top: -8px;
`;



const ContactMe = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
    loading: false,
    success: false,
    error: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value, error: "" }));
  }, []);

  const validateForm = () => {
    const { from_email, from_name, subject, message } = formState;
    if (!from_name) return "Please provide a Name";
    if (!from_email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(from_email))
      return "Please provide a valid email";
    if (!subject) return "Please provide a Subject";
    if (!message) return "Please provide a Message";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setFormState((prev) => ({ ...prev, error }));
      return;
    }

    setFormState((prev) => ({ ...prev, loading: true }));
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_CONTACT_EMAIL_SERVICE_ID,
        process.env.REACT_APP_CONTACT_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_CONTACT_EMAIL_PUBLIC_KEY
      );

      setSnackbar({
        open: true,
        message: "Email sent successfully!",
        severity: "success",
      });
      form.current.reset();
      setFormState({
        from_email: "",
        from_name: "",
        subject: "",
        message: "",
        loading: false,
        error: "",
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Failed to send email. Please try again.",
        severity: "error",
      });
    } finally {
      setFormState((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>
          Reach out with your thoughts, questions, or opportunities — I'd love
          💙 to hear from you.
        </Desc>
        <ContactWrapper>
          <ImageContainer>
            <img src={contactMeImg} alt="Contact Me" />
          </ImageContainer>
          <ContactForm ref={form} onSubmit={handleSubmit} autoComplete="on">
            <Input
              type="text"
              id="name"
              placeholder="Full Name"
              name="from_name"
              autoComplete="name"
              onChange={handleChange}
            />
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="from_email"
              autoComplete="email"
              onChange={handleChange}
            />
            <Input
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              autoComplete="subject"
              onChange={handleChange}
            />
            <TextArea
              id="message"
              placeholder="Message"
              rows="4"
              name="message"
              autoComplete="message"
              onChange={handleChange}
            />
            {formState.error && <ErrorText>{formState.error}</ErrorText>}
            <Button type="submit" disabled={formState.loading}>
              {formState.loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Send"
              )}
            </Button>
          </ContactForm>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={5000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
          >
            <Alert
              severity={snackbar.severity}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </ContactWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContactMe;

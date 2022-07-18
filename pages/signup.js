import { theme, size, media, appear } from "../constants";
import styled from "styled-components";
import { useState, useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import { Logo } from "../components/Logo/Logo";
import Head from "next/head";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { TextDivider } from "../components/TextDivider/TextDivider";
import { Button } from "../components/Button/Button";
import { useAuth } from "../context/auth";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > span {
    border-left: 1px solid ${theme.colors.black};
    ${media.lg} {
      padding-left: 20px;
    }
    padding-left: 10px;
    ${media.lg} {
      margin-left: 20px;
    }
    margin-left: 10px;
    color: ${theme.colors.black};
  }
`;

const LoginContainer = styled.div`
  animation: ${appear} 0.5s linear forwards;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 0;
  ${media.lg} {
    background-image: radial-gradient(
      125% 60% at top left,
      ${theme.colors.white} 82%,
      ${theme.colors.greenLime} 82%,
      ${theme.colors.green700} 160%
    );
  }
  background-image: radial-gradient(
    150% 45% at top left,
    ${theme.colors.white} 82%,
    ${theme.colors.greenLime} 82%,
    ${theme.colors.green700} 160%
  );
`;

const LoginForm = styled.form`
  background-color: ${theme.colors.white};
  box-shadow: 0 3px 14px ${theme.colors.black}2;
  border-radius: 10px;
  ${media.md} {
    width: ${size.form.width};
  }
  width: ${size.form.width_sm};
  ${media.lg} {
    padding: 40px 30px;
  }
  padding: 30px;
  position: static;
  z-index: 100;
`;

const InputField = styled.div`
  position: relative;
  ${media.lg} {
    margin-bottom: 25px;
  }
  margin-bottom: 20px;
`;

const InputText = styled.input`
  outline: none;
  padding: 10px 17px;
  width: 100%;
  font-size: 15px;
  border: 1px solid ${theme.colors.green700};
  border-radius: 10px;
  &:focus {
    border: 1px solid ${theme.colors.greenLime};
  }
  ::placeholder {
    color: ${theme.colors.gray};
  }
`;

const InputLabel = styled.label`
  user-select: none;
  font-size: 14px;
  position: absolute;
  top: -8px;
  left: 11px;
  background-color: ${theme.colors.white};
  padding: 0 6px;
  color: ${theme.colors.green700};
`;

const LoginButtonWrapper = styled.div`
  ${media.lg} {
    margin-bottom: 25px;
  }
  margin-bottom: 20px;
`;

const LoginOptionWrapper = styled.div`
  color: ${theme.colors.gray};
  & a {
    font-weight: 600;
    cursor: pointer;
    color: ${theme.colors.green700};
  }
`;

const Copyright = styled.span`
  position: fixed;
  bottom: 20px;
  margin: 0 auto;
  ${media.lg} {
    font-size: 15px;
  }
  font-size: 14px;
  color: ${theme.colors.white};
`;

export default function Login() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { push } = useRouter();

  const { user, signup } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const emailLabelRef = useRef();
  const passwordLabelRef = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signup(data.email, data.password);
      push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    !isSSR && (
      <>
        <Head>
          <title>Signup - BKEnglish</title>
          <meta name="description" content="Signup - BKEnglish" />
          <link rel="icon" href="/./image/icons.jpg" />
        </Head>
        <LoginContainer onSubmit={handleSignup}>
          <LogoWrapper>
            <Logo />
            <span>Signup</span>
          </LogoWrapper>
          <LoginForm autoComplete="off">
            <InputField>
              <InputLabel ref={emailLabelRef}>Email</InputLabel>
              <InputText
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
                ref={emailRef}
                type="email"
                placeholder="Input email"
                required
              />
            </InputField>
            <InputField>
              <InputLabel ref={passwordLabelRef}>Password</InputLabel>
              <InputText
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
                ref={passwordRef}
                type="password"
                placeholder="Input password"
                required
              />
            </InputField>
            <LoginButtonWrapper>
              <Button
                type="submit"
                onClick={() => {
                  if (emailRef.current.value === "") {
                    emailLabelRef.current.innerText = "Email is required";
                    emailLabelRef.current.style.color = theme.colors.red700;
                  } else {
                    emailLabelRef.current.innerText = "Email";
                    emailLabelRef.current.style.color = theme.colors.green700;
                  }
                  if (passwordRef.current.value === "") {
                    passwordLabelRef.current.innerText = "Password is required";
                    passwordLabelRef.current.style.color = theme.colors.red700;
                  } else {
                    passwordLabelRef.current.innerText = "Password";
                    passwordLabelRef.current.style.color =
                      theme.colors.green700;
                  }
                }}
              >
                <span>Sign up</span>
              </Button>
            </LoginButtonWrapper>
            <LoginOptionWrapper>
              <span>
                Or <a onClick={() => push("/login")}>Log in</a> with your
                registered account, Google or Facebook.
              </span>
            </LoginOptionWrapper>
          </LoginForm>
          <Copyright>&copy; 2022 BKEnglish. All rights reserved.</Copyright>
        </LoginContainer>
      </>
    )
  );
}

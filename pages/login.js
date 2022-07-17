import { theme, size, media, appear } from "../constants";
import styled from "styled-components";
import { AuthContext } from "./_app";
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > h1 {
  }
  & > span {
    border-left: 1px solid ${theme.colors.black};
    padding-left: 20px;
    margin-left: 20px;
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
      ${theme.colors.greenLime} 82%,
      ${theme.colors.white} 82%
    );
  }
  background-image: radial-gradient(
    150% 45% at top left,
    ${theme.colors.greenLime} 82%,
    ${theme.colors.white} 82%
  );
`;

const LoginForm = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 3px 14px ${theme.colors.black}2;
  border-radius: 10px;
  ${media.md} {
    width: ${size.form.width};
  }
  width: ${size.form.width_sm};
  padding: 40px 30px;
  position: static;
  z-index: 100;
`;

const InputField = styled.div`
  position: relative;
  margin-bottom: 30px;
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

const SocialLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  & > button {
    width: 50% !important;
    background-color: ${theme.colors.greenLime} !important;
    & > * {
      color: ${theme.colors.green700} !important;
    }
  }
  & > button:first-child {
    margin-right: 15px;
  }
  & > button:last-child {
    margin-left: 15px;
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
  color: ${theme.colors.green700};
`;

export default function Login() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const contextValue = useContext(AuthContext);
  const logIn = (isLogin) => contextValue.authenticate(isLogin);
  const { push, pathname } = useRouter();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const usernameLabelRef = useRef();
  const passwordLabelRef = useRef();

  return (
    !isSSR && (
      <>
        <Head>
          <title>Login - BKEnglish</title>
          <meta name="description" content="Login - BKEnglish" />
          <link rel="icon" href="/image/icons.jpg" />
        </Head>
        <LoginContainer>
          <LogoWrapper>
            <Logo />
            <span>Login</span>
          </LogoWrapper>
          <LoginForm>
            <InputField>
              <InputLabel ref={usernameLabelRef}>Username</InputLabel>
              <InputText
                ref={usernameRef}
                type="text"
                placeholder="Input username"
                required
              />
            </InputField>
            <InputField>
              <InputLabel ref={passwordLabelRef}>Password</InputLabel>
              <InputText
                ref={passwordRef}
                type="text"
                placeholder="Input password"
                required
              />
            </InputField>
            <div style={{ marginBottom: 30 }}>
              <Button
                style={{ marginBottom: 30 }}
                onClick={() => {
                  if (
                    (usernameRef.current.value === "a" ||
                      usernameRef.current.value === "A") &&
                    (passwordRef.current.value === "a" ||
                      passwordRef.current.value === "A")
                  ) {
                    logIn(true);
                    push(`/`);
                  } else {
                    if (usernameRef.current.value === "") {
                      usernameLabelRef.current.innerText =
                        "Username is required";
                      usernameLabelRef.current.style.color =
                        theme.colors.red700;
                    } else {
                      usernameLabelRef.current.innerText = "Username";
                      usernameLabelRef.current.style.color =
                        theme.colors.green700;
                    }
                    if (passwordRef.current.value === "") {
                      passwordLabelRef.current.innerText =
                        "Password is required";
                      passwordLabelRef.current.style.color =
                        theme.colors.red700;
                    } else {
                      passwordLabelRef.current.innerText = "Password";
                      passwordLabelRef.current.style.color =
                        theme.colors.green700;
                    }
                  }
                }}
              >
                <span>Login</span>
              </Button>
            </div>
            <div style={{ marginBottom: 30 }}>
              <TextDivider margin="0 0 30px 0">
                <span>or login with...</span>
              </TextDivider>
            </div>
            <SocialLoginWrapper>
              <Button>
                <FontAwesomeIcon icon={faGoogle} />
              </Button>
              <Button>
                <FontAwesomeIcon icon={faFacebookF} />
              </Button>
            </SocialLoginWrapper>
          </LoginForm>
          <Copyright>&copy; 2022 BKEnglish. All rights reserved.</Copyright>
        </LoginContainer>
      </>
    )
  );
}

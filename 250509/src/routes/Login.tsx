import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { FirebaseError } from "firebase/app";
import {
  Container,
  Title,
  Form,
  Input,
  Error,
  Switcher,
} from "../components/auth-components";
import GithubBtn from "../components/GithubBtn";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 구조분해할당
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    // 예외조항처리
    if (isLoading || email === "" || password === "") return;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      // 이 e객체는 파이어베이스 에러의 객체야- 파이어베이스에러 안에는 코드랑 메세지가 있으니까
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={onSubmit}>
        <Input
          value={email}
          onChange={onChange}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <Input
          value={password}
          onChange={onChange}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "Log In"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?
        <Link to="/create-account">Create One &rarr;</Link>
      </Switcher>
      <GithubBtn />
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../Firebase";
import {
  Container,
  Title,
  Form,
  Input,
  Error,
  Switcher,
} from "../components/auth-components";

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
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
      setName(value);
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
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      setIsLoading(true);
      // 인자값 어스 넣어줘야함
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // ㅇㅇ님 환영합니다 이런거 쓰는용도
      await updateProfile(credentials.user, {
        displayName: name,
      });

      navigate("/");
    } catch (e) {
      console.log(e);
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
      <Title>Join</Title>
      <Form onSubmit={onSubmit}>
        <Input
          value={name}
          onChange={onChange}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
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
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Already have an account?
        <Link to="/login">Login &rarr;</Link>
      </Switcher>
    </Container>
  );
};

export default CreateAccount;

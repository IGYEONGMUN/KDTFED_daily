import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 25px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1.4rem;
  &:focus {
    outline: none;
  }
  &[type="submit"] {
    opacity: 1;
    transition: opacity 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  color: var(--accent-color);
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
`;

export const Switcher = styled.span`
  margin-bottom: 18px;
  a {
    color: royalblue;
  }
`;

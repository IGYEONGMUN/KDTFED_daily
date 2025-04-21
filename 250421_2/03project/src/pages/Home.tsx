import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Title = styled.h1`
  font-size: 32px;
`;

const ListGroup = styled.ul`
  display: flex;
  gap: 10px;
`;

const ListItem = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // has와 get함수 이용해서 서치파람스 가져오셈
  // console.log(readSearchParams.get("geo"));

  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "0422",
    });
  }, 3000);
  return (
    <div>
      <Title>Users List</Title>
      <ListGroup>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </ListItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;

import AddJoke from "../Components/AddJoke";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function AddJokePage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function sendJoke(joke) {
    const newJoke = { ...joke, categories: joke.categories.split(" ") };

    const response = await fetch("/api/jokes", {
      method: "POST",
      body: JSON.stringify(newJoke),
    });

    if (response.status !== 201) {
      setError(true);
    }

    router.push("/");
  }

  return (
    <StyledDiv>
      <StyledH1>Give that Bad Shit!</StyledH1>
      {error && <h2>ERROR!</h2>}
      <AddJoke onSubmit={sendJoke} />
      <StyledLink href="/">Cancel</StyledLink>
    </StyledDiv>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
  color: darkcyan;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: lightcyan;
  color: black;
  border-radius: 10px;
  padding: 0.5em;
  text-align: center;

  :hover {
    color: darkcyan;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  min-width: 90vw;
  padding: 1em;
`;

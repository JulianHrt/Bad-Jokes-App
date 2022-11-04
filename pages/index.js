import Head from "next/head";
import styled from "styled-components";

import JokeCard from "../Components/JokeCard";
import Link from "next/link";

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JokeCard />
      <StyledLink href="/AddJokePage">Add your Bad Joke here!</StyledLink>
    </StyledDiv>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: lightcyan;
  color: black;
  border-radius: 10px;
  padding: 0.5em;
  text-align: center;
  box-shadow: 0 0.5px 2px 1px grey;

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

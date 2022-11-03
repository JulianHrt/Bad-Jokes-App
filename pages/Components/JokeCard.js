import useSWR from "swr";
import { fetcher } from "../api/jokes";
import styled from "styled-components";

export default function JokeCard() {
  const { data, error } = useSWR("/api/jokes/", fetcher);

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  console.log(data);

  return (
    <>
      <StyledH1>BAD JOKES</StyledH1>
      <StyledUlCard>
        {data.map((joke) => {
          return (
            <Styledli key={joke.id}>
              <p>{joke.text}</p>
              <StylePAuthor>"{joke.author}"</StylePAuthor>
              <StyledUlCategories>
                {joke.categories.map((categorie) => {
                  return <StyledliCategories>{categorie}</StyledliCategories>;
                })}
              </StyledUlCategories>
            </Styledli>
          );
        })}
      </StyledUlCard>
    </>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
  color: darkcyan;
`;

const StyledUlCard = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

const Styledli = styled.li`
  background-color: lightcyan;
  border-radius: 10px;
  min-width: 90vw;
  padding: 1em;

  & p {
    font-weight: bold;
    text-align: center;
  }
`;

const StylePAuthor = styled.p`
  font-style: italic;
`;

const StyledUlCategories = styled.ul`
  list-style: none;
  display: flex;
  justify-items: flex-start;
  gap: 0.5rem;
`;

const StyledliCategories = styled.li`
  background-color: black;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: white;
`;

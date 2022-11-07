import useSWR from "swr";
import { fetcher } from "../helpers/api";
import styled from "styled-components";
import Link from "next/link";

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
              <StylePAuthor>{joke.author}</StylePAuthor>

              <StyledUlCategories>
                {joke.categories.map((categorie) => {
                  return (
                    <StyledliCategories key={joke.id + categorie}>
                      {categorie}
                    </StyledliCategories>
                  );
                })}
                <StyledLink href={`/jokes/${joke.id}/edit`}>
                  📝 click here to edit Joke
                </StyledLink>
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
  box-shadow: 0 0.5px 2px 1px grey;

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
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  margin-top: 2.5em;
`;

const StyledliCategories = styled.li`
  background-color: black;
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: white;
  justify-items: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: darkcyan;
  color: white;
  border-radius: 10px;
  padding: 0.75em;
  font-size: 0.6em;
  text-align: center;
  box-shadow: 0 0.5px 2px 1px grey;

  :hover {
    color: yellow;
  }
`;

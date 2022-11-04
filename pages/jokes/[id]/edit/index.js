import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import Router, { useRouter } from "next/router";
import AddJoke from "../../../../Components/AddJoke";
import styled from "styled-components";

export default function Edit() {
  const { query } = useRouter();
  const { id } = query;

  const { data, error, mutate } = useSWR(`/api/jokes/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  async function handleSubmit(joke) {
    const newJoke = { ...joke, categories: joke.categories.split(",") };
    await fetch(`/api/jokes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newJoke),
    });
    mutate();
    Router.push("/");
  }

  async function deleteJoke() {
    await fetch(`/api/jokes/${id}`, {
      method: "DELETE",
    });

    Router.push("/");
  }

  console.log(data);
  return (
    <StyledDiv>
      <StyledH1>{data.text}</StyledH1>
      <AddJoke onSubmit={handleSubmit} input={data}></AddJoke>
      <StyledButton type="Button" onClick={deleteJoke}>
        Delete
      </StyledButton>
    </StyledDiv>
  );
}

const StyledButton = styled.button`
  border: 0;
  background-color: lightcyan;
  color: black;
  border-radius: 10px;
  padding: 0.5em;
  text-align: center;
  min-width: 90vw;
  box-shadow: 0 0.5px 2px 1px grey;

  :hover {
    color: darkcyan;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
  color: darkcyan;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  min-width: 90vw;
  padding: 1em;
`;

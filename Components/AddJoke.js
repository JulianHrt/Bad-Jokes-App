import styled from "styled-components";

export default function AddJoke({ onSubmit, input }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    onSubmit(data);
    event.target.reset();

    return data;
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label for="text">
          Joke:
          <input
            type="text"
            name="text"
            id="text"
            defaultValue={input === undefined ? "" : input.text}
          ></input>
        </label>
        <label for="author">
          Author:
          <input
            type="text"
            name="author"
            id="author"
            defaultValue={input === undefined ? "" : input.author}
          ></input>
        </label>
        <label for="categories">
          categories:
          <input
            type="text"
            name="categories"
            id="categories"
            defaultValue={input === undefined ? "" : input.categories}
          ></input>
        </label>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  margin: 1em;

  & input {
    margin: 0.5em;
  }
`;

const StyledButton = styled.button`
  border: 0;
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

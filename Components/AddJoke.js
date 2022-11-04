import styled from "styled-components";

export default function AddJoke({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    onSubmit(data);
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label for="text">
          Joke:
          <input type="text" name="text" id="text"></input>
        </label>
        <label for="author">
          Author:
          <input type="text" name="author" id="author"></input>
        </label>
        <label for="categories">
          categories:
          <input type="text" name="categories" id="categories"></input>
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

  :hover {
    color: darkcyan;
  }
`;

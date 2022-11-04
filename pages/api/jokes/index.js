import { getAllJokes, createJoke } from "../../../helpers/db.js";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const allJokes = await getAllJokes();
    response.status(200).json(allJokes);
  } else if (request.method === "POST") {
    const joke = JSON.parse(request.body);
    const createdJoke = await createJoke(joke);
    response.status(201).json(createdJoke);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET", "POST"])
      .send("only GET at this Endpoint possible");
  }
}

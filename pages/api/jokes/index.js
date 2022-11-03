import data from "../../../db.json";

export default function handler(request, response) {
  if (request.method === "GET") {
    const allJokes = data;
    response.status(200).json(allJokes);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET"])
      .send("only GET at this Endpoint possible");
  }
}

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export { fetcher };

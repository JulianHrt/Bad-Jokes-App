import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://JulianHirt:${process.env.MONGODB_PASSWORD}@cluster0.v6evwly.mongodb.net/?retryWrites=true&w=majority`;

const jokeSchema = new Schema({
  id: String,
  text: String,
  author: String,
  categories: Array,
});

const Joke = models.Joke || model("Joke", jokeSchema); // hier models.Joke

async function connectWithMongoDB() {
  await mongoose.connect(URI);
}

async function getAllJokes() {
  await connectWithMongoDB();

  const jokes = await Joke.find({}, { _id: false, __v: false });

  return jokes;
}

async function createJoke(joke) {
  await connectWithMongoDB();

  const createdJoke = await Joke.create({
    ...joke,
    id: crypto.randomUUID(), // id statt _id, facade pattern
  });

  return {
    ...createdJoke.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

export { getAllJokes, createJoke };

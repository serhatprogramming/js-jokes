import { useState } from "react";

import HeartIcon from "@mui/icons-material/Favorite";

import "./App.css";

const jokesArray = [
  {
    joke: "Why did the JavaScript developer quit his job? Because he didn't get arrays!",
    likes: 0,
  },
  {
    joke: "Why do JavaScript developers prefer promises over callbacks? Because they don't like to be kept waiting!",
    likes: 0,
  },
  {
    joke: "What's the object-oriented way to become wealthy in JavaScript? Inheritance!",
    likes: 0,
  },
  {
    joke: "Why did the JavaScript function go to therapy? It had too many anonymous functions calling it!",
    likes: 0,
  },
  {
    joke: "What's a programmer's favorite hangout place? Foo Bar!",
    likes: 0,
  },
  {
    joke: "Why did the JavaScript developer go broke? Because he lost his prototypes!",
    likes: 0,
  },
  {
    joke: "Why did the function and the array go to couples therapy? They had trouble understanding each other's scope!",
    likes: 0,
  },
  {
    joke: "Why do JavaScript programmers prefer the dark mode? Because they like to code with reduced light pollution!",
    likes: 0,
  },
  {
    joke: "What's a JavaScript developer's favorite dance move? The Callback!",
    likes: 0,
  },
  {
    joke: "Why did the JavaScript code go to rehab? Because it had too many dependencies!",
    likes: 0,
  },
];

const App = () => {
  const [currentJoke, setCurrentJoke] = useState(jokesArray[0]);
  const [jokes, setJokes] = useState(jokesArray);
  const [mostLiked, setMostLiked] = useState(jokesArray[0]);

  const handleNextJoke = () => {
    const index = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[index]);
  };

  const handleLikes = () => {
    const updatedJokes = jokes.map((joke) =>
      joke.joke === currentJoke.joke ? { ...joke, likes: joke.likes + 1 } : joke
    );
    setJokes(updatedJokes);
    setCurrentJoke({ ...currentJoke, likes: currentJoke.likes + 1 });
    const updatedMostLiked = updatedJokes.reduce((acc, joke) => {
      return joke.likes > acc.likes ? joke : acc;
    });
    setMostLiked(updatedMostLiked);
  };

  return (
    <div className="joke-container">
      <h2>JavaScript Jokes</h2>
      <p>{currentJoke.joke}</p>
      <div className="joke-actions">
        <div className="like-container">
          <HeartIcon
            onClick={handleLikes}
            fontSize="large"
            className="heart-icon"
          />{" "}
          <p>{currentJoke.likes}</p>
        </div>
        <button className="app-button" onClick={handleNextJoke}>
          Next Joke
        </button>
      </div>
      <div className="most-liked">
        <h2>Most Liked JS Joke</h2>
        <p>
          {mostLiked.joke}{" "}
          <strong style={{ color: "red" }}>
            with {mostLiked.likes} likes.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default App;

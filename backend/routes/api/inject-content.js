import { addMovie, addMovies } from "../../controllers/firebase.js";
import express from "express";
import { validationResult } from "express-validator";
import { validateMovie, validateMovies } from "../../middleware/movieMiddleware.js";
const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.send("This is Inject Content route");
});

router.post("/movie", validateMovie(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const movie = req.body;
    await addMovie(movie);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }

  res.status(201).json({ message: "Movie injected successfully" });
});

router.post("/movies", validateMovies(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await addMovies(req.body);

  res.status(201).json({ message: "Movies injected successfully" });
});

export { router as injectContent };

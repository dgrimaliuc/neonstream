import { body } from "express-validator";

export function validateMovie(languages = ["ru", "en"]) {
  return [
    // body(`*.genre`).isArray().withMessage("Genre is required and must be an array"),
    body(`*.tallImage`).isURL().withMessage("Image is required and must be a URL"),
    body(`*.wideImage`).isString().withMessage("Image is required, can be empty"),
    body(`*.video`).isObject().withMessage("Video is required"),
    body(`*.video.hls`).isURL().withMessage("Video HLS is required and must be a URL"),
    body(`*.year`)
      .isDate({ format: "yyyy" })
      .withMessage("Invalid release date format, expected yyyy"),

    ...languages.map(lang => [
      body(`*.${lang}.title`).notEmpty().withMessage("Title is required"),
      body(`*.${lang}.description`).notEmpty().withMessage("Description is required"),
      body(`*.${lang}.genre`).notEmpty().withMessage("Genre is required"),
    ]),
  ];
}

export function validateMovies(languages = ["ru", "en"]) {
  return [
    ...languages.map(lang => [
      body(`.`).isArray().withMessage("Invalid body format, array expected"),
      ...validateMovie(),
    ]),
  ];
}

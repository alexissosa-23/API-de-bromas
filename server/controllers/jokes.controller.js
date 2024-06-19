const Joke = require('../models/jokes.model');

module.exports = {
  getAllJokes: (req, res) => {
    Joke.find()
      .then(allJokes => res.json({ jokes: allJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  getJokeById: (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then(joke => res.json({ joke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  createJoke: (req, res) => {
    Joke.create(req.body)
      .then(newJoke => res.json({ joke: newJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  updateJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  deleteJoke: (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  }
}

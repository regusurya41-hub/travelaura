import { Destination } from "../models/Destination.model.js";
import { destinationSeed } from "../services/destinationSeed.js";

async function list(req, res) {
  const { mood } = req.query;
  const filter = mood ? { mood } : {};

  const destinations =
    Destination.db.readyState === 1
      ? await Destination.find(filter).lean()
      : destinationSeed.filter((destination) => !mood || destination.mood === mood);

  res.json({ destinations });
}

async function detail(req, res, next) {
  const { id } = req.params;
  const destination =
    Destination.db.readyState === 1
      ? await Destination.findOne({ id }).lean()
      : destinationSeed.find((item) => item.id === id);

  if (!destination) {
    const error = new Error("Destination not found");
    error.status = 404;
    return next(error);
  }

  return res.json({ destination });
}

export const destinationController = { list, detail };

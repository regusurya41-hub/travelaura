import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";
import { env } from "../config/env.js";

function sign(user) {
  return jwt.sign({ sub: user._id?.toString() || user.email, email: user.email, name: user.name }, env.JWT_SECRET, { expiresIn: "7d" });
}

async function signup(req, res) {
  const { name, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 12);

  if (User.db.readyState !== 1) {
    const user = { name, email };
    return res.status(201).json({ user, token: sign(user) });
  }

  const user = await User.create({ name, email, passwordHash });
  return res.status(201).json({ user: { name: user.name, email: user.email }, token: sign(user) });
}

async function login(req, res) {
  const { email, password } = req.body;

  if (User.db.readyState !== 1) {
    const user = { name: "Demo Traveler", email };
    return res.json({ user, token: sign(user) });
  }

  const user = await User.findOne({ email });
  const valid = user ? await bcrypt.compare(password, user.passwordHash) : false;

  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  return res.json({ user: { name: user.name, email: user.email }, token: sign(user) });
}

export const authController = { signup, login };

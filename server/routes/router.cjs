const express = require("express");
const { medicaments, drones, users } = require("../../src/mock/mockData.cjs");
const Web3 = require("web3");

const router = express.Router();

router.get("/hello", async (_req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

router.get("/drones", async (_req, res) => {
  res.status(200).json(drones);
});

router.get("/drones/loaded", async (_req, res) => {
  res.status(200).json(drones);
});

router.get("/drones/available", async (_req, res) => {
  const _loadedDrones = drones.filter((drone) => drone.state === "IDLE");

  res.status(200).json(_loadedDrones);
});

router.get("/medications", async (_req, res) => {
  res.status(200).json(medicaments);
});

router.get("/audit_logs", async (_req, res) => {
  res.status(200).json([]);
});

router.get("/audit_logs/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  res.status(200).json([]);
});

router.get("/cors_config", async (req, res) => {
  

  try {
    res.status(200).json({account: ""});
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).send("Error during authentication");
  }
});

module.exports = router;

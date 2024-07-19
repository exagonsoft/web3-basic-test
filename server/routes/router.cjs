const express = require('express');
const {medicaments, drones, users} = require('../../src/mock/mockData.cjs')

const router = express.Router();

router.get('/hello', async (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

router.get('/drones', async (_req, res) => {

  res.status(200).json(drones);
});

router.get('/drones/loaded', async (_req, res) => {

  res.status(200).json(drones);
});

router.get('/drones/available', async (_req, res) => {

  const _loadedDrones = drones.filter((drone) => drone.state === "IDLE");

  res.status(200).json(_loadedDrones);
});

router.get('/medications', async (_req, res) => {

  res.status(200).json(medicaments);
});

router.get('/audit_logs', async (_req, res) => {

  res.status(200).json([]);
});

router.get('/audit_logs/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  res.status(200).json([]);
});

module.exports = router;

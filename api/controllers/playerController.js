import playerService from "../services/playerService.js";
import { ObjectId } from "mongodb";

const getAllPlayers = async (req, res) => {
  try {
    const players = await playerService.getAll();
    res.status(200).json({ players });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao buscar jogadores." });
  }
};

const getOnePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await playerService.getOne(id);
    res.status(200).json({ player });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Erro ao buscar jogador." });
  }
};

const createPlayer = async (req, res) => {
  try {
    const { name, position, teamId, birthDate } = req.body;
    const newPlayer = await playerService.create(
      name,
      position,
      teamId,
      birthDate
    );
    res.status(201).json({ player: newPlayer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar jogador." });
  }
};

const deletePlayer = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await playerService.delete(id); 
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao excluir o jogador." });
  }
};

const updatePlayer = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { name, position, teamId, birthDate } = req.body;
      const player = await playerService.update(
        id,
        name,
        position,
        teamId,
        birthDate
      );
      res.status(200).json({ player });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { getAllPlayers, getOnePlayer, createPlayer, deletePlayer, updatePlayer };

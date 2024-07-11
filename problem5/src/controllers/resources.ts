import { Request, Response } from 'express';
import Resource from '../models/resource';

export const createResource = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const resource = await Resource.create({ name, description });
    res.status(201).json(resource);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const listResources = async (req: Request, res: Response) => {
  try {
    const where: any = {};
    const { name } = req.query;

    if (name) {
      where.name = name;
    }

    const resources = await Resource.findAll({where});
    res.status(200).json(resources);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getResource = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findByPk(id);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const resource = await Resource.findByPk(id);
    if (resource) {
      resource.name = name;
      resource.description = description;
      await resource.save();
      res.status(200).json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findByPk(id);
    if (resource) {
      await resource.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

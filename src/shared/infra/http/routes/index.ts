import express, { Router, Request, Response } from "express";

const routes = Router();

routes.get('/health', (_request: Request, response: Response) => {
  response.json({ message: "Hello Dev! I am Alive!" });
});

export default routes;

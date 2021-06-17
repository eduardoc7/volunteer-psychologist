import express from 'express';
import { router } from './routes';
import 'reflect-metadata';
import cors from 'cors';
import "./database";

const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("servidor rodando: http://localhost:3333"));

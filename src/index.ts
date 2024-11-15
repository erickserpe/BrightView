import "reflect-metadata";
import express from "express";
import { router as userRoutes } from "./routes/userRoutes";

const app = express();
app.use(express.json());

// Usando rotas de usuário
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

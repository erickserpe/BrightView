"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Usando rotas de usuário
app.use("/api", userRoutes_1.router);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
//# sourceMappingURL=index.js.map
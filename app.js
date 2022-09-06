const express = require("express");
const app = express();

app.get("/primeira-rota", (request,response) => {
    return response.json({
        message: "Acessou a primeira-rota testando NODEMON"
    })
});

app.listen(3000, () => console.log("Servidor está rodando na porta 3000!"))


// PAREI NO MINUTO 42 do vídeo
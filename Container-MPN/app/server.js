import express from 'express';

const app = express();

app.get("/",(req,res) => {
    res.send("Olá, seja bem vindo!");
})


app.listen(8000, () => {
    console.log(`Servidor rodando em http://localhost:8000`);
  });
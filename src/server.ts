import express, { response, request } from 'express';
import routes from './routes';

const app = express();
// Middleawer que possibilita javascript entender JSON
app.use(express.json());

// Middleawer de rotas
app.use(routes);

// Servidor rodando na porta 3333
app.listen(3333, () => {
  console.log('Servidor está ativo');
});

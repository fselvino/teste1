import { Router } from 'express';

// Tipagem dos campos de usuario
interface Usuario {
  name: string;
  email: string;
}
const routes = Router();
const Usuarios: Usuario[] = [];

// Rota modelo
routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = { name, email };

  Usuarios.push(user);
  return response.json(Usuarios);
});

export default routes;

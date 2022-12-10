import express,{ Express,Request,Response } from "express";
import { CreateRouteUseCase } from "../../app/create-route.use-case";
import { ListAllRoutesUseCase } from "../../app/list-all-route.use-case";
import { RouteInMemoryRepository } from "../../infra/db/route-in-memory.repository";

const PORT = process.env.PORT || 3000;
const app: Express = express();
app.use(express.json());


const routeRepo =  new RouteInMemoryRepository();

app.post('/routes',async (request : Request,response : Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(request.body);
  response.status(201).json(output);
})

app.get('/routes',async (_,response: Response) => {
  const listAllUseCase = new ListAllRoutesUseCase(routeRepo);
  const routes = await listAllUseCase.execute();
  response.json(routes);
})


app.listen(PORT,() => console.info(`Server running in port : ${PORT} 🔥🚀`));
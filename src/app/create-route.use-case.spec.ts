import { Route, RouteProps } from "../domain/route.entity";
import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case";

describe("CreateRouteUseCase Tests", () => {
  test("Should create a new route", async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const route : RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
      points: [
        { lat: 1, lng: 1 },
        { lat: 1, lng: 2 }
      ]
    }
    const result = await createUseCase.execute(route)
    expect(result).toStrictEqual({
      id : repository.items[0].id,
      ...route
    });
    expect(repository.items).toHaveLength(1);
  })
})
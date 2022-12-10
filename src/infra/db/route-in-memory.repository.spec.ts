import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository"

describe("RouteinMemoryRepository Test", () => {
  test("Should insert a new route",async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
    }
    const route = new Route(routeProps);
    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  })
})
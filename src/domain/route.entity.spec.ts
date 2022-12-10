import { LatLng, Route, RouteProps } from "./route.entity"

describe("Route Test", () => {
  test("Should be able create a new route without points", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
    }
    const route = new Route(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: []
    });
  })
  test("Should be able create a new route with points", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
      points: [
        { lat: 78, lng: 25 },
        { lat: 74, lng: 24 }
      ]
    }
    const route = new Route(routeProps);
    expect(route.props).toStrictEqual(routeProps);
  })
  test("Should be able update title", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
      points: [
        { lat: 78, lng: 25 },
        { lat: 74, lng: 24 }
      ]
    }
    const route = new Route(routeProps);
    const newTitle = "route house";
    route.updateTitle(newTitle);
    expect(route.props.title).toBe(`${newTitle.charAt(0).toUpperCase()}${newTitle.slice(1)}`);
  })
  test("Should be able update position", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
      points: [
        { lat: 78, lng: 25 },
        { lat: 74, lng: 24 }
      ]
    }
    const startPosition : LatLng = {lat : 10,lng: 20};
    const endPosition : LatLng = {lat : 10,lng:23};
    const route = new Route(routeProps);
    route.updatePosition(startPosition,endPosition);
    expect(route.props.startPosition).toBe(startPosition)
    expect(route.props.endPosition).toBe(endPosition)
  })
  test("Should be able update points", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 23, lng: 23 },
      points: [
        { lat: 78, lng: 25 },
        { lat: 74, lng: 24 }
      ]
    }
    const points : LatLng[] = [{lat : 10,lng: 20},{lat : 10,lng:23}];
    const route = new Route(routeProps);
    route.updatePoints(points);

    expect(route.points).toHaveLength(2)
  })
  })
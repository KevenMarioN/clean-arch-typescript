import { Route } from "../../domain/route.entity";
import { RouteRepositoryInterface } from "../../domain/route.repository";


export class RouteInMemoryRepository implements RouteRepositoryInterface {
  public items : Route[] = [];
  
  async insert(route : Route) : Promise<void>{
    this.items.push(route);
  }
  async findAll(): Promise<Route[]> {
    return this.items
  }
}
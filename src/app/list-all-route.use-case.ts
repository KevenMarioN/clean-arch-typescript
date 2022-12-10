import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";



type ListAllRoutesOutput = {
  id : string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[]
}[];

export class ListAllRoutesUseCase {
  constructor(private routeRepo : RouteRepositoryInterface){}
  async execute() : Promise<ListAllRoutesOutput> {
      const route = await this.routeRepo.findAll();
      return route.map(route => route.toJSON());
  }
}
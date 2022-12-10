import crypto from 'crypto'
export type LatLng = {
  lat: number;
  lng: number;
}

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[]
}

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>
  constructor(props: RouteProps, id ?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      points: props.points || []
    };
  }

  updateTitle(title: string) {
    if (title.length > 15) {
      throw new Error("title excepted limit of 15");
    }
    title = title.replace(/[0-9]/g, '');
    this.title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    if (startPosition === endPosition) {
      throw new Error("startPosition is equal endPosition");
    }
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }
  updatePoints(points : LatLng[]){
    if(points.length === 0){
      throw new Error("Points is nullable");
    }
    this.Points = points;
  }

  public get points(){
    return this.props.points;
  }
  private set title(value: string) {
    this.props.title = value;
  }
  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }
  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }
  private set Points(value: LatLng[]) {
    this.props.points = value;
  }

  public toJSON(){
    return {
      id: this.id,
      ...this.props
    };
  }
}

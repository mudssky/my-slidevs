export type Position = [number, number]
export type PolygonCoords = Position[][]
export type MultiPolygonCoords = Position[][][]
export type FeatureGeometry =
  | { type: 'Polygon'; coordinates: PolygonCoords }
  | { type: 'MultiPolygon'; coordinates: MultiPolygonCoords }
export interface Feature {
  geometry: FeatureGeometry
}

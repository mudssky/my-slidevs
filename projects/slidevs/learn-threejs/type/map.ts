export type Position = [number, number]
export type PolygonCoords = Position[][]
export type MultiPolygonCoords = Position[][][]
export type FeatureGeometry =
  | { type: 'Polygon'; coordinates: PolygonCoords }
  | { type: 'MultiPolygon'; coordinates: MultiPolygonCoords }
export interface Feature {
  type: string
  properties: Properties
  geometry: FeatureGeometry
}

export interface Properties {
  adcode: number | string
  name: string
  center?: number[]
  centroid?: number[]
  childrenNum?: number
  level?: string
  parent?: Parent
  subFeatureIndex?: number
  acroutes?: number[]
  adchar?: string
}
export interface Parent {
  adcode: number
}

/**
 * 仅使用到的最小 FeatureCollection 结构。项目中的 china-full.json 满足该结构。
 */
export interface FeatureCollection {
  type: 'FeatureCollection'
  features: Feature[]
}

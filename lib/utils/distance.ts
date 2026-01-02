
export interface BoundingBox {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

export function getBoundingBox(
  lat: number,
  lng: number,
  radiusKm: number
): BoundingBox {
  // Latitude: 1 degree ≈ 111 km (constant worldwide)
  const latDelta = radiusKm / 111;

  // Longitude: 1 degree varies by latitude, shrinking toward the poles
  // At the user's latitude, calculate how many degrees equal the radius
  const lngDelta = radiusKm / (111 * Math.cos(lat * (Math.PI / 180)));

  return {
    minLat: lat - latDelta,
    maxLat: lat + latDelta,
    minLng: lng - lngDelta,
    maxLng: lng + lngDelta,
  };
}

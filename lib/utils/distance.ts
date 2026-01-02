
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
/**
 * Check if a point is within a given radius of another point.
 */
export function isWithinRadius(
  userLat: number,
  userLng: number,
  targetLat: number,
  targetLng: number,
  radiusKm: number
): boolean {
  const distance = calculateDistance(userLat, userLng, targetLat, targetLng);
  return distance <= radiusKm;
}

/**
 * Filter venues by distance from a user's location.
 */
export function filterVenuesByDistance<
  T extends { address?: { lat?: number | null; lng?: number | null } | null }
>(
  venues: T[],
  userLat: number,
  userLng: number,
  radiusKm: number
): (T & { distance: number })[] {
  const results: (T & { distance: number })[] = [];
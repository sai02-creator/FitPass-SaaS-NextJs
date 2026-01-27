// lib/utils/distance.ts

type Coords = { lat: number; lng: number };

function isNumber(x: unknown): x is number {
  return typeof x === "number" && Number.isFinite(x);
}

function getVenueCoords(session: any): Coords | null {
  const v = session?.venue;
  const a = v?.address;

  // Support both:
  // - venue.address.lat / lng
  // - venue.address.geo.lat / lng
  const lat = a?.lat ?? a?.geo?.lat;
  const lng = a?.lng ?? a?.geo?.lng;

  if (isNumber(lat) && isNumber(lng)) {
    return { lat, lng };
  }

  return null;
}

export function getBoundingBox(
  lat: number,
  lng: number,
  radiusKm: number
): { minLat: number; maxLat: number; minLng: number; maxLng: number } {
  const R = 6371; // Earth radius in km
  const rad = radiusKm / R;

  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;

  const minLat = latRad - rad;
  const maxLat = latRad + rad;

  const deltaLng = Math.asin(
    Math.sin(rad) / Math.max(Math.cos(latRad), 1e-12)
  );

  const minLng = lngRad - deltaLng;
  const maxLng = lngRad + deltaLng;

  return {
    minLat: (minLat * 180) / Math.PI,
    maxLat: (maxLat * 180) / Math.PI,
    minLng: (minLng * 180) / Math.PI,
    maxLng: (maxLng * 180) / Math.PI,
  };
}

function haversineKm(a: Coords, b: Coords): number {
  const R = 6371; // km

  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;

  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const s1 = Math.sin(dLat / 2);
  const s2 = Math.sin(dLng / 2);

  const h = s1 * s1 + Math.cos(lat1) * Math.cos(lat2) * s2 * s2;

  return 2 * R * Math.asin(Math.sqrt(h));
}

/**
 * Filters sessions within radiusKm and adds distance/distanceKm to each.
 *
 * ✅ Returns BOTH:
 * - distance (what your UI types expect)
 * - distanceKm (handy if other code uses it)
 */
export function filterSessionsByDistance<T extends Record<string, any>>(
  sessions: T[],
  userLat: number,
  userLng: number,
  radiusKm: number
): (T & { distance: number; distanceKm: number })[] {
  const user = { lat: userLat, lng: userLng };

  const withDistance = sessions.map((s) => {
    const venueCoords = getVenueCoords(s);
    const distanceKm = venueCoords ? haversineKm(user, venueCoords) : Infinity;

    return {
      ...s,
      distance: distanceKm, // ✅ REQUIRED by your UI
      distanceKm, // optional but useful
    };
  });

  return withDistance
    .filter((s) => s.distanceKm <= radiusKm)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

/**
 * Formats distance for UI.
 */
export function formatDistance(km: number): string {
  if (!Number.isFinite(km)) return "";

  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }

  if (km < 10) {
    return `${km.toFixed(1)} km`;
  }

  return `${Math.round(km)} km`;
}
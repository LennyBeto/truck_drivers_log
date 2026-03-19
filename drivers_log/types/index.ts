// ─── Duty Status ─────────────────────────────────────────────────────────────
export type DutyStatus = "OFF" | "SB" | "D" | "ON";

// ─── ELD Log Segment ─────────────────────────────────────────────────────────
export interface LogSegment {
  status: DutyStatus;
  start: number; // decimal hours 0–24
  end: number;
}

// ─── Daily Log ───────────────────────────────────────────────────────────────
export interface DayLog {
  day: number;
  segments: LogSegment[];
  total_hours: Record<DutyStatus, number>;
}

// ─── Trip Stop ───────────────────────────────────────────────────────────────
export type StopType =
  | "pickup"
  | "dropoff"
  | "fuel"
  | "rest_break"
  | "required_rest";

export interface TripStop {
  type: StopType;
  day: number;
  hour: number;
  duration_hrs?: number;
}

// ─── Route Data ──────────────────────────────────────────────────────────────
export interface GeoJSONGeometry {
  type: "LineString";
  coordinates: [number, number][]; // [lon, lat] pairs
}

export interface RouteData {
  total_miles: number;
  total_duration_hrs: number;
  geometry: GeoJSONGeometry;
  origin: [number, number];
  pickup: [number, number];
  dropoff: [number, number];
}

// ─── Trip Summary ─────────────────────────────────────────────────────────────
export interface TripSummary {
  total_miles: number;
  total_days: number;
  stops_count: number;
}

// ─── Full API Response ────────────────────────────────────────────────────────
export interface TripPlanResponse {
  route: RouteData;
  logs: DayLog[];
  stops: TripStop[];
  summary: TripSummary;
}

// ─── Form Values ─────────────────────────────────────────────────────────────
export interface TripFormValues {
  current_location: string;
  pickup_location: string;
  dropoff_location: string;
  cycle_hours_used: number;
}

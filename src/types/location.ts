export interface LocationState {
  loaded: boolean;
  lng: number;
  lat: number;
  error?: boolean;
  errorMessage?: string;
}

export interface Location {
  coordinates?: { mapX: number; mapY: number };
  error?: { code: number; message: string };
}

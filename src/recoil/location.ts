import { atom } from "recoil";

interface LocationState {
  coordinates?: { mapX: number; mapY: number };
  error?: { code: number; message: string };
}

export const locationState = atom<LocationState>({
  key: "location",
  default: {},
});

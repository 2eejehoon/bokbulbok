import { atom } from "recoil";
import { LocationType } from "@/types/location";

export const locationState = atom<LocationType>({
  key: "locationState",
  default: { loaded: false },
});

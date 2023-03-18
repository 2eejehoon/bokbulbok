import { atom } from "recoil";
import { LocationType } from "@/type/location";

export const locationState = atom<LocationType>({
  key: "locationState",
  default: { loaded: false },
});

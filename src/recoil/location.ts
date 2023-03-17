import { atom } from "recoil";
import { Location } from "@/type/location";

export const locationState = atom<Location>({
  key: "location",
  default: {},
});

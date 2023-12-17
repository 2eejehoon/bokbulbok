export const LENGTH_TO_TEXT = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
} as const;
export type Length = keyof typeof LENGTH_TO_TEXT;
export const convertLengthToText = (length?: Length) => {
  return length ? LENGTH_TO_TEXT[length] : "zero";
};
export const convertBrToSpace = (text?: string) => {
  return text?.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n");
};
export const convertRangeToQuery = (range: number) => {
  return range * 1000;
};

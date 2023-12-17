import { Category } from "@/utils/category";

export interface PlaceData {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: Category;
  contentid: string;
  contenttypeid: string;
  cpyrhtDivCd: string;
  createdtime: string;
  dist: string;
  firstimage: string;
  firstimage2: string;
  mapx: string;
  mapy: string;
  mlevel: string;
  modifiedtime: string;
  sigungucode: string;
  tel: string;
  title: string;
  zipcode?: string;
}

export interface PlaceCommonData extends PlaceData {
  homepage: string;
  overview: string;
  telname: string;
}

export interface PlaceIntroData {
  chkcreditcardfood: string;
  contentid: string;
  contenttypeid: string;
  discountinfofood: string;
  firstmenu: string;
  infocenterfood: string;
  kidsfacility: string;
  lcnsno: string;
  opendatefood: string;
  opentimefood: string;
  packing: string;
  parkingfood: string;
  reservationfood: string;
  restdatefood: string;
  scalefood: string;
  seat: string;
  smoking: string;
  treatmenu: string;
}

export interface PlaceImageData {
  contentid: string;
  cpyrhtDivCd: string;
  imgname: string;
  originimgurl: string;
  serialnum: string;
  smallimageurl: string;
}

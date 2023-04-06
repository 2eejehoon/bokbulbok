export interface PlaceDataType {
  addr1: string;
  addr2: string;
  areacode: string;
  booktour: string;
  cat1: string;
  cat2: string;
  cat3: string;
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
}

export interface PlaceCommonDataType extends PlaceDataType {
  homepage: string;
  overview: string;
  telname: string;
  zipcode: string;
}

export interface PlaceIntroDataType {
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

export type PlaceImageItemType = {
  contentid: string;
  cpyrhtDivCd: string;
  imgname: string;
  originimgurl: string;
  serialnum: string;
  smallimageurl: string;
};

export interface PlaceImageDataType {
  item: PlaceImageItemType[];
}

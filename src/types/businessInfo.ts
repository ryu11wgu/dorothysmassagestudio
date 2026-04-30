export type BusinessHour = {
  id: number;
  day: string;
  hours: string;
  displayOrder: number;
};

export type BusinessInfo = {
  id: number;
  name: string;
  phoneDisplay: string;
  phoneHref: string;
  addressLines: string[];
  homeIntroTitle: string;
  homeIntroParagraphs: string[];
  businessHours: BusinessHour[];
};

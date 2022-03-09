export type Film = {
  contentType: string;
  id: number;
  imageUrl: string;
  jumpAddress: string;
  title: string;
};

export type DetailFilm = {
  id: string;
  introduction: string;
  title: string;
};

export type LikeList = {
  areaNameList: string[];
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  name: string;
  score: number;
  year: number;
  id: string;
};

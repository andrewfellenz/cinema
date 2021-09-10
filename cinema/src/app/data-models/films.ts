export enum rating {
  G = "G",
  PG = "PG",
  PG13 = "PG-13",
  R = "R",
}

export interface Films {
  title: string;
  rating: rating;
  genre: string;
  runTime: number;
  director: string;
  star: string;
  description: string;
}

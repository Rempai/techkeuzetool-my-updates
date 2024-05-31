// src/data/categories/types.ts

export type Source = {
  name: string;
  url: string;
};

export type Category = {
  name: string;
  description: string;
  color: string;
  children?: Array<Category>;
  sources?: Array<Source>;
  info?: string;
  icon?: string;
  iconColor?: string;
  image?: string;
};

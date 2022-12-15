export type Comic = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  price: number;
  stock: number;
  characters: characters;
};

type characters = {
  available: number;
  returned: number;
  collectionURI: string;
  items: items[];
};

type items = {
  resourceURI: string;
  name: string;
  role?: string;
};

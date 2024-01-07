export interface IPainting {
  author: string;
  created: string;
  id: number;
  imageUrl: string;
  location: string;
  name: string;
}

export interface IPaintingWithId {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

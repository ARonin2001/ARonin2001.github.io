// export interface IPainting {
//   author: string;
//   created: string;
//   id: number;
//   imageUrl: string;
//   location: string;
//   name: string;
// }

export interface IPainting {
  author: number | string;
  created: string;
  id: number;
  imageUrl: string;
  location: number | string;
  name: string;
}

export interface IPaintingWithId {
  authorId: number | string;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number | string;
  name: string;
}

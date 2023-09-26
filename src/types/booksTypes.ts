export interface IBook {
    author: string;
    createdAt: string;
    description: string;
    genre: string;
    publication_date: string;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

export interface IComment {
  bookId: string;
  comment: string;
  createdAt: string;
  name: string;
  updatedAt: string;
}

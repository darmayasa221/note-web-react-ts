export interface INote {
  title: string;
  body: string;
  tags: Array<string>;
}

export interface INewNote extends INote {
  id: string;
  createdAt: string;
  updatedAt: string;
}

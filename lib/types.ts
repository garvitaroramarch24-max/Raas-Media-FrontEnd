export interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  _id: string;
  image: string;
  alt?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  /** Empty when no image was set */
  image?: string;
}

export interface GalleryItem {
  _id: string;
  /** Empty when no image was set */
  image?: string;
  alt?: string;
}

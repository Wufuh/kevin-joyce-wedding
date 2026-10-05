import type { UiKey } from "../i18n/utils";

/** Add a photo by appending one entry. Copy and alt live with the image. */
export type GalleryPhoto = {
  src: ImageMetadata;
  altKey: UiKey;
  captionKey: UiKey;
  /** CSS object-position so faces stay in the crop. */
  objectPosition?: string;
};

export const galleryPhotos: GalleryPhoto[] = [];

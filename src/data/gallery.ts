import type { UiKey } from "../i18n/utils";
import gallery01 from "../assets/gallery-01.jpg";
import gallery02 from "../assets/gallery-02.jpg";
import gallery03 from "../assets/gallery-03.jpg";
import gallery04 from "../assets/gallery-04.jpg";
import gallery05 from "../assets/gallery-05.jpg";

/** Add a photo by appending one entry. Copy and alt live with the image. */
export type GalleryPhoto = {
  src: ImageMetadata;
  altKey: UiKey;
  captionKey: UiKey;
  /** CSS object-position so faces stay in the crop. */
  objectPosition?: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: gallery01,
    altKey: "photos.gallery01Alt",
    captionKey: "photos.gallery01Caption",
  },
  {
    src: gallery02,
    altKey: "photos.gallery02Alt",
    captionKey: "photos.gallery02Caption",
  },
  {
    src: gallery03,
    altKey: "photos.gallery03Alt",
    captionKey: "photos.gallery03Caption",
  },
  {
    src: gallery04,
    altKey: "photos.gallery04Alt",
    captionKey: "photos.gallery04Caption",
  },
  {
    src: gallery05,
    altKey: "photos.gallery05Alt",
    captionKey: "photos.gallery05Caption",
  },
];

import type { UiKey } from "../i18n/utils";
import photo01 from "../assets/photo-01.jpg";
import photo02 from "../assets/photo-02.jpg";
import photo03 from "../assets/photo-03.jpg";
import photo04 from "../assets/photo-04.jpg";
import photo05 from "../assets/photo-05.jpg";
import photo06 from "../assets/photo-06.jpg";
import photo07 from "../assets/photo-07.jpg";
// Shared with Our Story; keep the file.
import finale from "../assets/finale.jpg";

/**
 * Add a photo by importing it above and appending one entry below.
 * Caption and alt keys live in src/i18n/ui.ts (photos.photoNNCaption / photos.photoNNAlt).
 * Images render uncropped at their natural aspect ratio.
 */
export type GalleryPhoto = {
  src: ImageMetadata;
  altKey: UiKey;
  captionKey: UiKey;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: photo01, altKey: "photos.photo01Alt", captionKey: "photos.photo01Caption" },
  { src: photo02, altKey: "photos.photo02Alt", captionKey: "photos.photo02Caption" },
  { src: photo03, altKey: "photos.photo03Alt", captionKey: "photos.photo03Caption" },
  { src: photo04, altKey: "photos.photo04Alt", captionKey: "photos.photo04Caption" },
  { src: photo05, altKey: "photos.photo05Alt", captionKey: "photos.photo05Caption" },
  { src: photo06, altKey: "photos.photo06Alt", captionKey: "photos.photo06Caption" },
  { src: photo07, altKey: "photos.photo07Alt", captionKey: "photos.photo07Caption" },
  { src: finale, altKey: "photos.photo08Alt", captionKey: "photos.photo08Caption" },
];

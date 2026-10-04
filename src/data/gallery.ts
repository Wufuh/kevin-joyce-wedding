import type { UiKey } from "../i18n/utils";
import metOnline from "../assets/met-online.jpg";
import firstDate from "../assets/first-date.jpg";
import official from "../assets/official.jpg";
import kobe from "../assets/kobe.jpg";
import kobeFamily from "../assets/kobe-family.jpg";
import proposalYes from "../assets/proposal-yes.jpg";
import finale from "../assets/finale.jpg";
import splash from "../assets/splash.jpg";

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
    src: metOnline,
    altKey: "photos.metAlt",
    captionKey: "photos.metCaption",
    objectPosition: "center 28%",
  },
  {
    src: firstDate,
    altKey: "photos.firstDateAlt",
    captionKey: "photos.firstDateCaption",
    objectPosition: "center 32%",
  },
  {
    src: official,
    altKey: "photos.officialAlt",
    captionKey: "photos.officialCaption",
    objectPosition: "center 40%",
  },
  {
    src: kobe,
    altKey: "photos.kobeAlt",
    captionKey: "photos.kobeCaption",
    objectPosition: "center 52%",
  },
  {
    src: kobeFamily,
    altKey: "photos.kobeFamilyAlt",
    captionKey: "photos.kobeFamilyCaption",
    objectPosition: "center 35%",
  },
  {
    src: proposalYes,
    altKey: "photos.yesAlt",
    captionKey: "photos.yesCaption",
    objectPosition: "28% 42%",
  },
  {
    src: finale,
    altKey: "photos.finaleAlt",
    captionKey: "photos.finaleCaption",
    objectPosition: "center 72%",
  },
  {
    src: splash,
    altKey: "photos.splashAlt",
    captionKey: "photos.splashCaption",
    objectPosition: "center 35%",
  },
];

// @flow
import { ImageGalleryImageInfoSimple } from './ImageGalleryImageInfoSimple';

/**
 * Details associated with a given gallery.
 */
export type ImageGalleryDetails = {

  /** Unique id for the gallery. */
  +id?: number,

  /** Unique name for the gallery */
  +name?: string,

  /** Optional description of what the gallery contains. */
  +description?: string,

  /** Number of images in the gallery id */
  +nbImages?: number,

  /** Time at which the gallery was created, ruby time string.
      (e.g. 2018-03-04T11:56:26.792Z) */
  +createdAt?: string,

  /** List of images contained in the gallery. */
  +imageInfos: Array<ImageGalleryImageInfoSimple>;

};

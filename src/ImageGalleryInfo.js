// @flow

/**
 * Information for a given given gallery.
 */
export type ImageGalleryInfo = {

  /** Unique id for the gallery. */
  +id?: number,

  /** Unique name for the gallery */
  +name?: string,

  /** Number of images in the gallery id */
  +nbImages?: number,

};

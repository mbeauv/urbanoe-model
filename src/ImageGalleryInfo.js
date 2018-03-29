// @flow

/**
 * Information for a given given gallery.
 */
export type ImageGalleryInfo = {

  /** Unique id for the gallery. */
  +id: number,

  /** Unique name for the gallery */
  +name: string,

  /** Description of the content of the gallery. */
  +description?: string,

  /** Number of images in the gallery id */
  +nbImages?: number,

};

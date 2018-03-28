// @flow

/**
 * Information on a gallery image.
 */
export type ImageGalleryImageInfoVersion = {

  /**
   * Name of the version of the image (usually something like "thumb",
   * "square", etc.)
   */
  +name: string,

  /** URL of the image */
  +url: string,

}
// @flow

import type { ImageGalleryImageInfoVersion } from './ImageGalleryImageInfoVersion';

/**
 * Information on a gallery image.
 */
export type ImageGalleryImageInfo = {

  /** Unique identifier for the image info. */
  +id: number,

  /** Label associated to the image. Does not have to be unique. */
  +label?: string,

  /** List of all versions of this image. */
  +versions: Array<ImageGalleryImageInfoVersion>,

}

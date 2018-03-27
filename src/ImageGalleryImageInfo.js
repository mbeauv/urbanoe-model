// @flow

import type { ImageGalleryImageInfoVersion } from './ImageGalleryImageInfoVersion';

/**
 * Information on a gallery image.
 */
export type ImageGalleryImageInfo = {

  /** Unique identifier for the image info. */
  +id: number,

  /** Name associated to the image. */
  +name?: string,

  /** List of all versions of this image. */
  +versions: Array<ImageGalleryImageInfoVersion>,

}

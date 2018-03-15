// @flow

import type { GalleryImageInfoVersion } from './GalleryImageInfoVersion';

/**
 * Information on a gallery image.
 */
export type GalleryImageInfo = {

  /** Unique identifier for the image info. */
  +id: number,

  /** Label associated to the image. Does not have to be unique. */
  +label?: string,

  /** List of all versions of this image. */
  +versions: Array<GalleryImageInfoVersion>,

}

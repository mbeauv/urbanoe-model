// @flow

import type { ImageGalleryImageInfoVersion } from './ImageGalleryImageInfoVersion';

/**
 * This is all the information about a given image info structure.
 */
export type ImageGalleryImageInfoDetails = {

  /** Unique identifier for the image info. */
  +id: number,

  /** Descriptive information about the image info. */
  +label: string,

  /** Unique identifier of the gallery to which image info belongs. */
  +galleryId: number,

  /** Name of the gallery to which the image info belongs to. */
  +galleryName: string,

  /** A description of the image info. */
  +description: string,

  /** Creation time of the image.  This is a Ruby formatted time string. */
  +createdAt: string,

  /** All of the versions of the image that exist. */
  +version: Array<ImageGalleryImageInfoVersion>

}

// @flow

/**
 * The LoginInfo class contains information returned from the login operation.
 */
export type LoginInfo = {

  /** Token associated with the user. */
  +authToken: string,

  /** Unique identifier with the user. */
  +endUserId: number,

};

// @flow

/**
 * Used to filter issues based on issue types and statuses.
 */
export type CityIssuesFilterData = {
  +statuses: {
    +fixed: bool,
    +notFixed: bool,
  },
  +types: {
    +pothole: bool,
    +graffiti: bool,
    +lostPet: bool,
    +garbageCan: bool,
    +brokenLight: bool,
    +other: bool,
  }
};

/**
 * Helper function that creates an `emtpy` file (a filter that returns
 * no issues).
 */
export function createEmptyFilter() : CityIssuesFilterData {
  return {
    statuses: {
      fixed: false,
      notFixed: false,
    },
    types: {
      pothole: false,
      graffiti: false,
      lostPet: false,
      garbageCan: false,
      brokenLight: false,
      other: false,
    },
  };
}

/**
 * Helper function that creates a default filter that returns issues that
 * meet the default criteria.  At the present time the default filter returns
 * ALL issues that have status `notFixed`.
 */
export function createDefaultFilter() : CityIssuesFilterData {
  return {
    statuses: {
      fixed: false,
      notFixed: true,
    },
    types: {
      pothole: true,
      graffiti: true,
      lostPet: true,
      garbageCan: true,
      brokenLight: true,
      other: true,
    },
  };
}

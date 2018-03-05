import { createDefaultFilter, createEmptyFilter } from '../CityIssuesFilterData';

describe('CityIssuesFilterData', () => {
  describe('createDefaultFilter', () => {
    it('works', () => {
      expect(createDefaultFilter()).toEqual({
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
      });
    });
  });

  describe('createEmptyFilter', () => {
    it('works', () => {
      expect(createEmptyFilter()).toEqual({
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
      });
    });
  });
});

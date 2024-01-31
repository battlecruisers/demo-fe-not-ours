import { atom } from 'recoil';
import { AccommodationApplicableDefault } from '../feature/accommodation/accommodation.types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const defaultValue: AccommodationApplicableDefault = {
  applicable: false,
};

export const accommodationApplicableState = atom({
  key: 'accommodationApplicable',
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

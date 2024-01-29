import { atom } from 'recoil';
import { AccommodationSortDefault } from '../feature/accommodation/accommodation.types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const defaultValue: AccommodationSortDefault = {
  sort: '',
};

export const accommodationSortState = atom({
  key: 'accommodationSort',
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

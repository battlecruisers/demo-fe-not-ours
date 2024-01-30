import { atom } from 'recoil';
import { AccommodationPriceDefault } from '../feature/accommodation/accommodation.types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const defaultValue: AccommodationPriceDefault = {
  priceRange: [0, 500000],
};

export const accommodationPriceState = atom({
  key: 'accommodationPrice',
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

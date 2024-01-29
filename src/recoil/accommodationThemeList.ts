import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { AccommodationThemeDefault } from '../feature/accommodation/accommodation.types';

const { persistAtom } = recoilPersist();

const defaultValue: AccommodationThemeDefault = {
  theme: [],
};

export const accommodationThemeState = atom({
  key: 'accommodationTheme',
  default: defaultValue,
  effects_UNSTABLE: [persistAtom],
});

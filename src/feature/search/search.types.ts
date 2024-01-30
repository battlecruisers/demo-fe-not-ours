import { AccommodationProps } from '../accommodation/accommodation.types';

export interface AccommodationSearchParams {
  startDate: Date;
  endDate: Date;
  guest: number;
  name: string;
  theme: string[];
  sort: string;
  applicable: boolean;
}

export interface AccommodationSearchResultParams {
  accommodations: AccommodationProps[];
}

export interface AccommodationSetSearchResultParams {
  setAccommodations: React.Dispatch<React.SetStateAction<AccommodationProps[]>>;
}

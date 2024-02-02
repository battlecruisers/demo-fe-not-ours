import { useState } from 'react';
import { AccommodationProps } from '../feature/accommodation/accommodation.types';
import { AccommodationLayout } from '../feature/accommodation/styles/accommodationLayout';
import AccommmodationSearchResult from '../feature/search/components/AccommmodationSearchResult';
import AccommodationSearch from '../feature/search/components/AccommodationSearch';
import AccommodationSearchNav from '../components/accommodation/AccommodationSearchNav';

const Search = () => {
  const [accommodations, setAccommodations] = useState<AccommodationProps[]>(
    [],
  );
  return (
    <AccommodationLayout>
      <AccommmodationSearchResult setAccommodations={setAccommodations} />
      <AccommodationSearchNav />
      <AccommodationSearch accommodations={accommodations} />
    </AccommodationLayout>
  );
};

export default Search;

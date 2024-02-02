import { useQuery } from '@tanstack/react-query';
import { getAllAccommodationSearchData } from '../api';
import { AccommodationSearchParams } from '../search.types';

export const useAccommodationsSearchQuery = ({
  startDate,
  endDate,
  guest,
  name,
  theme,
  sort,
  applicable,
  minPrice,
  maxPrice,
}: AccommodationSearchParams) => {
  return useQuery({
    queryKey: ['useAccommodationsSearchQuery'],
    queryFn: () =>
      getAllAccommodationSearchData({
        startDate,
        endDate,
        guest,
        name,
        theme,
        sort,
        applicable,
        minPrice,
        maxPrice,
      }),
  });
};

// export const useDebounce = (inputValue: string) => {
//   const [debouncedValue, setDebouncedValue] = useState(inputValue);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setDebouncedValue(inputValue);
//   //   }, delay);

//   //   return () => {
//   //     clearTimeout(timer);
//   //   };
//   // }, [inputValue, delay]);

//   return debouncedValue;
// };

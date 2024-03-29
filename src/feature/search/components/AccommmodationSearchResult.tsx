import * as style from '../styles/AccommodationSearchResult';
import { useRecoilValue } from 'recoil';
import { accommodationDateState } from '../../../recoil/accommodationDate';
import { accommodationMemberState } from '../../../recoil/accommodationMember';
import { useAccommodationsSearchQuery } from '../hooks/search.hooks';
import { useState, useEffect } from 'react';
import { AccommodationSetSearchResultParams } from '../search.types';
import { Loading, LoadingWrapper } from '../../../styles/loading';
import { useNavigate } from 'react-router-dom';
import { accommodationThemeState } from '../../../recoil/accommodationThemeList';
import { accommodationSortState } from '../../../recoil/accommodationSort';
import { accommodationApplicableState } from '../../../recoil/accommodationApplicable';
import { accommodationPriceState } from '../../../recoil/accommodationPrice';

const AccommmodationSearchResult = ({
  setAccommodations,
}: AccommodationSetSearchResultParams) => {
  const { startDate, endDate } = useRecoilValue(accommodationDateState);
  const { guest } = useRecoilValue(accommodationMemberState);
  const { themeList } = useRecoilValue(accommodationThemeState);
  const { sort } = useRecoilValue(accommodationSortState);
  const { applicable } = useRecoilValue(accommodationApplicableState);
  const { priceRange } = useRecoilValue(accommodationPriceState);
  const [inputValue, setInputValue] = useState('');

  /*
  searchParam State 추가
  */
  const [searchParams, setSearchParams] = useState({
    startDate,
    endDate,
    guest,
    name: inputValue,
    theme: themeList.join(','),
    sort,
    applicable,
    minPrice: priceRange![0],
    maxPrice: priceRange![1],
  });

  const { data, status, isLoading } =
    useAccommodationsSearchQuery(searchParams);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const prevSearchValue = getSessionValue('searchResult');
  //   const prevAccommodationValue = getSessionValue('accommodations');
  //   const prevHistoryIdx = getSessionValue('historyIdx');
  //   setSessionValue('historyPage', 'search');
  //   if (
  //     prevHistoryIdx === window.history.state.idx &&
  //     prevSearchValue &&
  //     prevAccommodationValue.length
  //   ) {
  //     setInputValue(prevSearchValue);
  //     setAccommodations(prevAccommodationValue);
  //   }
  // }, []);

  const handleSearch = async () => {
    if (!inputValue) return;

    // Update search parameters
    setSearchParams({
      startDate,
      endDate,
      guest,
      name: inputValue,
      theme: themeList.join(','),
      sort,
      applicable,
      minPrice: priceRange![0],
      maxPrice: priceRange![1],
    });

    // if (data?.data?.content && status === 'success') {
    //   setSessionValue('searchResult', inputValue);
    //   setSessionValue('accommodations', data?.data.content);
    //   setSessionValue('historyIdx', window.history.state.idx);
    setAccommodations(data?.data?.content);
    // }
  };
  useEffect(() => {
    if (status === 'error') {
      window.alert('사용 중 문제가 발생했습니다. 메인에서 다시 시도해주세요.');
      navigate('/');
    }
  }, [status]);

  // const handleEnterpress = async (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     if (!inputValue) return;

  //     if (data?.data?.content && status === 'success') {
  //       setSessionValue('searchResult', inputValue);
  //       setSessionValue('accommodations', data?.data.content);
  //       setSessionValue('historyIdx', window.history.state.idx);
  //       setAccommodations(data?.data?.content);
  //     }
  //   }
  // };

  const handleInputValue = () => {
    setInputValue('');
  };

  return isLoading ? (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ) : (
    <style.AccommodationSearchInputBox>
      <style.AccommodationSearchIcon />
      <style.AccommodationSearchInput
        placeholder="숙소를 검색하세요"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        // onKeyUp={handleEnterpress}
      />
      {inputValue ? (
        <style.AccommodationSearchCloseIcon onClick={handleInputValue} />
      ) : null}
      <style.SearchButton onClick={handleSearch}>검색</style.SearchButton>
    </style.AccommodationSearchInputBox>
  );
};

export default AccommmodationSearchResult;

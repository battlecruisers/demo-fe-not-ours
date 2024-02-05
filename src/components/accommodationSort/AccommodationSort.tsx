import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from '../accommodationMember/accommodationMember.styles';
import { useState } from 'react';
import { accommodationSortState } from '../../recoil/accommodationSort';
import { SortTypeMap } from './AccommodationSortType';

interface SortProps {
  isSortShow: boolean;
  setIsSortShow: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
}

const AccommodationSort = ({ isSortShow, setIsSortShow, sort }: SortProps) => {
  const setAccommodationSortState = useSetRecoilState(accommodationSortState);
  const [selectedSort, setSelectedSort] = useState(sort);

  const sortOptions = SortTypeMap;

  const handleOptionToggle = (option: string) => {
    setSelectedSort(option);
  };

  const handleThemeApply = () => {
    setIsSortShow(false);
    setAccommodationSortState({ sort: selectedSort });
  };

  return (
    <style.SortLayout $isSortShow={isSortShow}>
      <style.MemberContainer>
        <style.MemberContentBox>
          <style.MemberContentInfoBox>
            <span>정렬 조건을 선택해주세요.</span>
            <style.MemberContentInfoCloseIcon
              onClick={() => setIsSortShow((prev) => !prev)}
            />
          </style.MemberContentInfoBox>
          <style.MemberContentPeopleContainer>
            <ul>
              {Object.entries(sortOptions).map(([key, value], index) => (
                <li key={index}>
                  <input
                    type="radio"
                    id={`radio_${index}`}
                    name="sortOption"
                    value={key}
                    checked={selectedSort === key}
                    onChange={() => handleOptionToggle(key)}
                  />
                  <label htmlFor={`radio_${index}`}>{value}</label>
                </li>
              ))}
            </ul>
          </style.MemberContentPeopleContainer>
        </style.MemberContentBox>
        <style.MemberNav>
          <style.MemberButton
            onClick={handleThemeApply}
          >{`정렬 기준 적용하기`}</style.MemberButton>
        </style.MemberNav>
      </style.MemberContainer>
    </style.SortLayout>
  );
};

export default AccommodationSort;

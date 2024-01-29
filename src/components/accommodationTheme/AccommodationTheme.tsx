import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from '../accommodationMember/accommodationMember.styles';
import { useState } from 'react';
import { accommodationThemeState } from '../../recoil/accommodationThemeList';

interface ThemeProps {
  isThemeShow: boolean;
  setIsThemeShow: React.Dispatch<React.SetStateAction<boolean>>;
  themeList: string[];
}

const AccommodationTheme = ({
  isThemeShow,
  setIsThemeShow,
  themeList,
}: ThemeProps) => {
  const setAccommodationThemeState = useSetRecoilState(accommodationThemeState);
  const [selectedThemeList, setSelectedThemeList] = useState(themeList);

  const handleThemeApply = () => {
    setIsThemeShow(false);
    setAccommodationThemeState({ themeList: selectedThemeList });
  };

  const handleOptionToggle = (option: string) => {
    const isSelected = selectedThemeList.includes(option);

    if (isSelected) {
      setSelectedThemeList(prevOptions =>
        prevOptions.filter(prevOption => prevOption !== option),
      );
    } else {
      setSelectedThemeList(prevOptions => [...prevOptions, option]);
    }
  };

  return (
    <style.ThemeLayout $isThemeShow={isThemeShow}>
      <style.MemberContainer>
        <style.MemberContentBox>
          <style.MemberContentInfoBox>
            <span>검색 조건에 추가하고 싶은 테마를 선택해주세요.</span>
            <style.MemberContentInfoCloseIcon
              onClick={() => setIsThemeShow(prev => !prev)}
            />
          </style.MemberContentInfoBox>
          <style.MemberContentPeopleContainer>
            <ul>
              {themeOptions.map((option, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`checkbox_${index}`}
                    checked={selectedThemeList.includes(option)}
                    onChange={() => handleOptionToggle(option)}
                  />
                  <label htmlFor={`checkbox_${index}`}>{option}</label>
                </li>
              ))}
            </ul>
          </style.MemberContentPeopleContainer>
        </style.MemberContentBox>
        <style.MemberNav>
          <style.MemberButton
            onClick={handleThemeApply}
          >{`테마 적용하기`}</style.MemberButton>
        </style.MemberNav>
      </style.MemberContainer>
    </style.ThemeLayout>
  );
};

const themeOptions = ['객실 내 PC', '수영장', '욕조']; // Replace with your actual theme options

export default AccommodationTheme;

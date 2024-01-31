import { IoPeople } from 'react-icons/io5';
import * as style from '../../feature/accommodation/styles/accommodationInfo.ts';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import AccommodationTheme from '../accommodationTheme/AccommodationTheme.tsx';
import { accommodationThemeState } from '../../recoil/accommodationThemeList.ts';

const AccommodationInfoTheme = () => {
  const [isThemeShow, setIsThemeShow] = useState<boolean>(false);
  const { themeList } = useRecoilValue(accommodationThemeState);
  console.log(themeList);
  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsThemeShow(prev => !prev);
        }}
      >
        <IoPeople />
        <style.AccommodationInfoMemberParagraph>
          테마 선정
        </style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
      <AccommodationTheme
        isThemeShow={isThemeShow}
        setIsThemeShow={setIsThemeShow}
        themeList={themeList}
      />
    </>
  );
};

export default AccommodationInfoTheme;

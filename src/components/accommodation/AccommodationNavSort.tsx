import { useState } from 'react';
import * as style from '../../feature/accommodation/styles/accommodationInfo.ts';
import { useRecoilValue } from 'recoil';
import { accommodationSortState } from '../../recoil/accommodationSort';
import { IoPeople } from 'react-icons/io5';
import AccommodationSort from '../accommodationSort/AccommodationSort';

const AccommodationInfoSort = () => {
  const [isSortShow, setIsSortShow] = useState<boolean>(false);
  const { sort } = useRecoilValue(accommodationSortState);

  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsSortShow(prev => !prev);
        }}
      >
        <IoPeople />
        <style.AccommodationInfoMemberParagraph>
          정렬 조건 설정
        </style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
      <AccommodationSort
        isSortShow={isSortShow}
        setIsSortShow={setIsSortShow}
        sort={sort}
      />
    </>
  );
};

export default AccommodationInfoSort;

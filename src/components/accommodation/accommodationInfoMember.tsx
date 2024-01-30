import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as style from '../../feature/accommodation/styles/accommodationInfo';
import { accommodationMemberState } from '../../recoil/accommodationMember';
import { IoPeople } from 'react-icons/io5';
import AccommodationMember from '../accommodationMember/AccommodationMember';

export const AccommodationInfoMember = () => {
  const [isMemberShow, setIsMemberShow] = useState<boolean>(false);
  const { guest } = useRecoilValue(accommodationMemberState);

  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsMemberShow(prev => !prev);
        }}
      >
        <IoPeople />
        <style.AccommodationInfoMemberParagraph>
          인원 {guest}
        </style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
      <AccommodationMember
        isMemberShow={isMemberShow}
        setIsMemberShow={setIsMemberShow}
        memberNumber={guest}
      />
    </>
  );
};

import { IoPeople } from 'react-icons/io5';
import * as style from '../../feature/accommodation/styles/accommodationInfo.ts';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import AccommodationPrice from '../accommodationPrice/AccommodationPrice.tsx';
import { accommodationPriceState } from '../../recoil/accommodationPrice.ts';

const AccommodationInfoPrice = () => {
  const [isPriceShow, setIsPriceShow] = useState<boolean>(false);
  const { priceRange } = useRecoilValue(accommodationPriceState);
  return (
    <>
      <style.AccommodationInfoMemberBox
        onClick={() => {
          setIsPriceShow(prev => !prev);
        }}
      >
        <IoPeople />
        <style.AccommodationInfoMemberParagraph>
          가격 설정
        </style.AccommodationInfoMemberParagraph>
      </style.AccommodationInfoMemberBox>
      <AccommodationPrice
        isPriceShow={isPriceShow}
        setIsPriceShow={setIsPriceShow}
        priceRange={priceRange}
      />
    </>
  );
};

export default AccommodationInfoPrice;

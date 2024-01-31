import 'react-datepicker/dist/react-datepicker.css';
import * as style from '../accommodationMember/accommodationMember.styles';
import { useState } from 'react';
import { PriceProps } from './accommodationPrice.type';
import { useSetRecoilState } from 'recoil';
import { accommodationPriceState } from '../../recoil/accommodationPrice';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

function valuetext(value: number) {
  return `${value}만원`;
}

const AccommodationPrice = ({
  isPriceShow,
  setIsPriceShow,
  priceRange,
}: PriceProps) => {
  const maxPriceConst = 500000;

  const setAccommodationPriceState = useSetRecoilState(accommodationPriceState);

  const [selectedPriceRange, setSelectedPriceRange] =
    useState<number[]>(priceRange);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setSelectedPriceRange(newValue as number[]);
  };

  const handlePriceApply = () => {
    setIsPriceShow(false);
    setAccommodationPriceState({ priceRange: selectedPriceRange });
  };

  return (
    <style.PriceLayout $isPriceShow={isPriceShow}>
      <style.MemberContainer>
        <style.MemberContentBox>
          <style.MemberContentInfoBox>
            <span>최대 가격과 최소 가격을 설정해주세요.</span>
            <style.MemberContentInfoCloseIcon
              onClick={() => setIsPriceShow(prev => !prev)}
            />
          </style.MemberContentInfoBox>
          <style.MemberContentPeopleContainer>
            <Box sx={{ width: 1000 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={selectedPriceRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={maxPriceConst}
                step={10000}
              />
            </Box>
          </style.MemberContentPeopleContainer>
        </style.MemberContentBox>
        <style.MemberNav>
          <style.MemberButton
            onClick={handlePriceApply}
          >{`가격 설정 적용`}</style.MemberButton>
        </style.MemberNav>
      </style.MemberContainer>
    </style.PriceLayout>
  );
};

export default AccommodationPrice;

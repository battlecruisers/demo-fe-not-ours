import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { accommodationApplicableState } from '../../recoil/accommodationApplicable';
import styled from 'styled-components';

const AccommodationInfoApplicable = () => {
  const [isApplicable, setIsApplicable] = useState<boolean>(false);
  const setAccommodationApplicableState = useSetRecoilState(
    accommodationApplicableState,
  );

  const handleApplicableApply = () => {
    setIsApplicable(prev => !prev);
    setAccommodationApplicableState({ applicable: isApplicable });
  };

  const ApplicableButton = styled.button<{ $isApplicable: boolean }>`
    width: 90%;
    max-width: 750px;
    height: 75%;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.sm};
    border-radius: 5px;
    cursor: pointer;
    position: relative;

    background-color: ${({ theme, $isApplicable }) =>
      $isApplicable ? theme.color.lightGreen : theme.color.blue};
    color: ${({ theme, $isApplicable }) =>
      $isApplicable ? theme.color.darkGreen : theme.color.white};

    &:hover {
      background-color: ${({ theme }) => theme.color.lightBlue};
    }

    &::after {
      content: '${({ $isApplicable }) => ($isApplicable ? '✓' : '')}';
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      font-size: 1.2em;
      color: ${({ theme }) => theme.color.darkGreen}; // Color for the checkmark
      opacity: ${({ $isApplicable }) => ($isApplicable ? '1' : '0')};
    }
  `;

  return (
    <>
      <ApplicableButton
        $isApplicable={isApplicable}
        onClick={handleApplicableApply}
      >
        쿠폰 적용
      </ApplicableButton>
    </>
  );
};

export default AccommodationInfoApplicable;

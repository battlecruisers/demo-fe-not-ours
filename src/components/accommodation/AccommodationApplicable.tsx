import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { accommodationApplicableState } from '../../recoil/accommodationApplicable';
import styled from 'styled-components';

import { FaCheck } from 'react-icons/fa';

const AccommodationInfoApplicable = () => {
  const [isApplicable, setIsApplicable] = useState<boolean>(false);
  const setAccommodationApplicableState = useSetRecoilState(
    accommodationApplicableState,
  );

  const handleApplicableApply = () => {
    setIsApplicable(prev => !prev);
    setAccommodationApplicableState({ applicable: isApplicable });
  };

  const CheckIcon = styled(FaCheck)<{ $isApplicable: boolean }>`
    display: ${({ $isApplicable }) => ($isApplicable ? 'block' : 'none')};
    color: mainPink;
  `;

  const ApplicableButton = styled.div<{ $isApplicable: boolean }>`
    height: 2rem;

    padding-left: 1rem;
    border: 1px solid #e7497a;
    border-radius: ${({ theme }) => theme.box.radius};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    // 글자색 변경
    color: ${({ $isApplicable, theme }) => theme.color.mainPink};
    cursor: pointer;

    // 배경색 변경
    background-color: 'transparent' > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;
  return (
    <>
      <ApplicableButton
        $isApplicable={isApplicable}
        onClick={handleApplicableApply}
      >
        <CheckIcon $isApplicable={isApplicable} />
        쿠폰 적용
      </ApplicableButton>
    </>
  );
};

export default AccommodationInfoApplicable;

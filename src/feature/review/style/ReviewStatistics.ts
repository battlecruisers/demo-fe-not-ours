import styled from 'styled-components';

export const TotalCount = styled.div`
  display: flex;
  font-family: sans-serif;
  margin-bottom: 1.5rem;
`;

export const RateWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: space-between;
`;

export const TotalRateCont = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
`;

export const TotalRateBox = styled.div`
  color: gray;
  font-size: 17px;
`;

export const TotalRate = styled.strong`
  font-size: 40px;
  color: black;
`;

export const OtherRateCont = styled.div``;

export const IndRateBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  font-family: sans-serif;
  font-size: 13px;
  color: #616161;
  &: nth-child(n + 2) {
    margin-top: 0.3rem;
  }
`;

export const RateBar = styled.div<{ avg?: number }>`
  position: relative;
  background-color: #e6e6e6;
  width: 4.3rem;
  height: 6px;
  margin: 0 0.3rem;
  border-radius: 0.4rem;
  overflow: hidden;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 0.4rem;
    background-color: #fdbd00;
    width: calc(${({ avg }) => avg}%);
  }
`;

export const IndRateAvg = styled.div<{ avg?: number }>`
  color: black;
  font-weight: bold;
`;

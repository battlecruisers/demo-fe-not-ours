import styled from 'styled-components';
export const Wrapper = styled.div`
  padding: 3rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (width < 750px) {
    gap: 2rem;

    margin-top: 1rem;
  }
`;

export const StaticHead = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const NoReviews = styled.p`
  padding: 2rem;
  font-size: 20px;
  text-align: center;
  color: gray;
`;

export const ReviewArea = styled.div``;
export const ReviewStatistics = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.1rem;
  margin-bottom: 1rem;
`;

export const ReviewContainer = styled.div`
  font-family: sans-serif;
`;

export const SlideItemWrapper = styled.div`
  padding: 0.3rem;
  border-radius: 1rem;
`;

export const ReviewBox = styled.div`
  padding: 1rem;
  border-radius: 0.7rem;
  border: 1px solid #e5e5e5;
`;

export const TotalRate = styled.div`
  display: flex;
`;

export const TextInfo = styled.div`
  display: flex;
  padding: 0.7rem 0rem;
  justify-content: space-between;
  font-size: 13px;
  color: gray;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 0.7em;
  padding-top: 1rem;
  font-size: 14px;
`;

export const ReviewContent = styled.div`
  flex: 1;
  overflow: hidden;
  line-height: 1.4;
  max-height: 5rem;
`;

export const RoomImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const AllReviews = styled.div`
  width: 100%;
  height: 2.5rem;
  margin-top: 1.5rem;
  border: 1px solid #d1d1d1;
  border-radius: 0.3rem;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

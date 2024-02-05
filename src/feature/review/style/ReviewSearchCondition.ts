import styled from 'styled-components';

export const RoomSelector = styled.select`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
  font-family: sans-serif;
  width: 100%;
  padding: 0.5rem;
  height: 2.4rem;
  border: 1px solid #0152cc;
  border-radius: 4px;
  font-size: 14px;
  color: #0152cc;
  cursor: pointer;
`;

export const SearchConditionSelectors = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #e6e6e6;
`;

export const SortSelector = styled.select`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  font-size: 0.9rem;
  font-weight: normal;
  color: #0152cc;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAxNTJDQyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxMkwzIDZoMTB6Ii8+PC9zdmc+);
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: 0.1rem;
  padding-right: 1rem;
`;

export const PhotoSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: sans-serif;
  font-size: 14px;
  color: gray;
  cursor: pointer;
`;

import { useEffect, useState } from 'react';
import * as style from '../style/ReviewSearchCondition';
import { useParams, useSearchParams } from 'react-router-dom';
import instance from '../../../api/instance';

const SearchConditionSelectors = ({
  onChange,
}: SearchConditionSelectorsParam) => {
  const { accommodationId } = useParams();
  const [searchParam] = useSearchParams();
  const roomId = searchParam.get('roomId');
  const [roomNames, setRoomNames] = useState<RoomName[]>();
  const [photoOnly, setPhotoOnly] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('createdDate,ASC');
  const [roomOptionId, setRoomOptionId] = useState<string | null>(roomId);

  const getRoomNames = async () => {
    const data = (
      await instance.get(
        `http://localhost:8080/accommodations/${accommodationId}/room-names`,
      )
    ).data.data;
    setRoomNames(data);
  };

  const clickPhotoOnly = () => {
    setPhotoOnly(current => !current);
  };

  const selectSort = event => {
    setSort(event.target.value);
  };

  const selectRoom = event => {
    setRoomOptionId(event.target.value);
  };

  useEffect(() => {
    getRoomNames();
  }, []);

  useEffect(() => {
    onChange(current => {
      const newData = { ...current };
      newData.hasPhoto = photoOnly;
      return newData;
    });
  }, [photoOnly]);

  useEffect(() => {
    onChange(current => {
      const newData = { ...current };
      newData.sort = sort;
      return newData;
    });
  }, [sort]);

  useEffect(() => {
    onChange(current => {
      const newData = { ...current };
      newData.roomId = roomOptionId;
      return newData;
    });
  }, [roomOptionId]);

  return (
    <div>
      <style.RoomSelector onChange={selectRoom}>
        <option value="">객실 전체</option>
        {/* <span>객실 전체</span>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.602 6.94l.905.863-5.255 5.504-5.254-5.504.904-.864 4.35 4.558z"
            fill="#0152cc"
          ></path>
        </svg> */}
        {roomNames?.map(roomName => (
          <option
            key={roomName.id}
            value={roomName.id}
            selected={roomName.id + '' == roomOptionId ? true : false}
          >
            {roomName.name}
          </option>
        ))}
      </style.RoomSelector>
      <style.SearchConditionSelectors>
        <style.SortSelector onChange={selectSort}>
          <option value="createdDate,ASC">최신순</option>
          <option value="totalRate,ASC">평점 낮은순</option>
          <option value="totalRate,DESC">평점 높은순</option>
        </style.SortSelector>
        <style.PhotoSelector onClick={clickPhotoOnly}>
          <span>포토후기만 보기</span>
          {photoOnly ? (
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cg fill='none' fill-rule='evenodd'%3e %3crect width='24' height='24' fill='%230152CC' rx='2'/%3e %3cpath fill='white' d='M18.297 6L19.696 7.399 9.6 17.496 4 11.896 5.4 10.496 9.6 14.696z'/%3e %3c/g%3e%3c/svg%3e"
              alt="체크표시"
              width="18px"
              data-status="selected"
              data-testid="check-mark"
            ></img>
          ) : (
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath fill='white' d='M2 0h20a2 2 0 012 2v20a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e %3cpath fill='%23CCC' d='M22 0a2 2 0 012 2v20a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h20zm0 1H2a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V2a1 1 0 00-1-1z'/%3e %3cpath fill='%23CCC' d='M18.297 6L19.696 7.399 9.6 17.496 4 11.896 5.4 10.496 9.6 14.696z'/%3e %3c/g%3e%3c/svg%3e"
              alt="체크표시"
              width="18px"
              data-status="unselected"
              data-testid="check-mark"
            ></img>
          )}
        </style.PhotoSelector>
      </style.SearchConditionSelectors>
    </div>
  );
};

export default SearchConditionSelectors;

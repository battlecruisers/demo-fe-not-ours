import AccommodationNav from '../components/accommodation/AccommodationNav.tsx';
import AccommodationInfo from '../feature/accommodationInformation/components/AccommodationInfo';
import AccommodationRoomList from '../feature/accommodationInformation/components/AccommodationRoomList';
import AccommodationReviewList from '../feature/review/components/AccommodationReviewList.tsx';
import { NavWrapper } from '../feature/accommodationInformation/styles/accommodationInfo.ts';

const AccommodationInformation = () => {
  return (
    <>
      <AccommodationInfo />
      <NavWrapper>
        <AccommodationNav />
      </NavWrapper>
      <AccommodationRoomList />
      <AccommodationReviewList />
    </>
  );
};

export default AccommodationInformation;

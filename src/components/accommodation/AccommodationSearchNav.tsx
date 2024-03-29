import { useLocation } from 'react-router-dom';
import * as style from '../../feature/accommodation/styles/accommodationInfo';
import AccommodationNavCalender from './AccommodationNavCalendar';
import AccommodationNavMember from './AccommodationNavMember';
import AccommodationNavRegion from './AccommodationNavRegion';
import AccommodationNavTheme from './AccommodationNavTheme';
import AccommodationNavSort from './AccommodationNavSort';
import AccommodationInfoApplicable from './AccommodationApplicable';
import AccommodationNavPrice from './AccommodationNavPrice';

const AccommodationSearchNav = () => {
  const { pathname } = useLocation();
  const entireFlag =
    pathname.split('/').length < 3 &&
    pathname.split('/')[1].includes('accommodation')
      ? true
      : false;
  return (
    <style.AccommodationInfoBox>
      <AccommodationNavCalender />
      <AccommodationNavMember />
      {entireFlag ? <AccommodationNavRegion /> : null}
      <AccommodationNavPrice />
      <AccommodationNavTheme />
      <AccommodationNavSort />
      <AccommodationInfoApplicable />
    </style.AccommodationInfoBox>
  );
};

export default AccommodationSearchNav;

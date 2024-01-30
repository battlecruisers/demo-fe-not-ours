import { useEffect, useState } from 'react';
import * as style from '../../accommodationInformation/styles/accommodationReviewList';
import instance from '../../../api/instance';
import { useParams } from 'react-router-dom';
import AccommodationReviewItem from './AccommodationReviewItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AccommodationReviewList = () => {
  const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '50px',
    slidesToShow: 2,
    swipeToSlide: true,
  };
  const [loading, setLoading] = useState(true);
  const [reviewInfo, setReviewInfo] = useState<ReviewInfoProps>();
  const { accommodationId, roomOptionId = '' } = useParams();
  const getReviews = async () => {
    const data: ReviewInfoProps = (
      await instance.get(
        `http://localhost:8080/places/${accommodationId}/review?roomId=${roomOptionId}`,
      )
    ).data.data;
    setReviewInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    getReviews();
  }, []);

  settings.slidesToShow = reviewInfo?.totalCount === 1 ? 1 : 2;

  return (
    <style.Wrapper>
      <style.StaticHead>후기</style.StaticHead>
      {!reviewInfo ? (
        <style.NoReviews>등록된 후기가 없습니다.</style.NoReviews>
      ) : (
        <style.ReviewArea>
          {roomOptionId ? null : (
            <style.ReviewStatistics>
              <svg width="20" height="20" viewBox="0 0 14 14">
                <path
                  d="M7.12095 11.3897C7.04568 11.3481 6.95432 11.3481 6.87905 11.3897L3.0935 13.4823C3.05697 13.5025 3.01324 13.4717 3.01996 13.4305L3.74674 8.975C3.75951 8.89669 3.73435 8.81696 3.67894 8.76016L0.586662 5.59082C0.558242 5.56169 0.574668 5.51262 0.614898 5.50648L4.87464 4.85565C4.95705 4.84305 5.02777 4.79021 5.06319 4.71474L6.95474 0.684808C6.97273 0.646468 7.02727 0.646467 7.04526 0.684808L8.93681 4.71474C8.97223 4.79021 9.04295 4.84305 9.12536 4.85565L13.3851 5.50648C13.4253 5.51262 13.4418 5.56169 13.4133 5.59082L10.3211 8.76016C10.2656 8.81696 10.2405 8.89669 10.2533 8.975L10.98 13.4305C10.9868 13.4717 10.943 13.5025 10.9065 13.4823L7.12095 11.3897Z"
                  fill="#fdbd00"
                  stroke="#E7AC00"
                  stroke-width="0.5"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <h3>{reviewInfo?.totalRateAvg.toFixed(2)}</h3>
              <span>{`(${reviewInfo?.totalCount})`}</span>
            </style.ReviewStatistics>
          )}
          <style.ReviewContainer>
            <Slider {...settings}>
              {loading
                ? null
                : reviewInfo?.reviews.map(review => (
                    <AccommodationReviewItem
                      key={review.id}
                      id={review.id}
                      totalRate={review.totalRate}
                      creationDate={review.creationDate}
                      roomName={review.roomName}
                      writer={review.writer}
                      content={review.content}
                      roomImageUrls={review.roomImageUrls}
                    ></AccommodationReviewItem>
                  ))}
            </Slider>
          </style.ReviewContainer>
          <style.AllReviews>{`${reviewInfo?.totalCount}개 후기 전체 보기`}</style.AllReviews>
        </style.ReviewArea>
      )}
    </style.Wrapper>
  );
};
export default AccommodationReviewList;

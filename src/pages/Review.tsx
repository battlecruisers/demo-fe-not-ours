import instance from '../api/instance';
import ReviewItem from '../feature/review/components/ReviewItem';
import ReviewStatistics from '../feature/review/components/ReviewStatistics';
import * as style from '../feature/review/style/Review';
import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'react-router-dom';
import SearchConditionSelectors from '../feature/review/components/SearchConditionSelectors';

const Review = () => {
  const { accommodationId } = useParams();
  const [searchParam] = useSearchParams();
  const roomId = searchParam.get('roomId');

  const [loading, setLoading] = useState(true);
  const [reviewStatics, setReviewStatics] = useState<ReviewStatisticsProps>();
  const [reviews, setReviews] = useState<ReviewProps[]>();
  const [searchConditions, setSearchConditions] =
    useState<ReviewSearchCondition>({
      accommodationId: accommodationId,
      roomId: roomId,
      page: 1,
      hasPhoto: false,
      sort: 'createdDate,ASC',
    });

  const initReviewData = async () => {
    const data: ReviewStatisticsProps = (
      await instance.get(
        `http://localhost:8080/accommodations/${accommodationId}/review-statistics?${
          roomId ? `roomId=${roomId}` : ''
        }`,
      )
    ).data.data;
    setReviewStatics(data);
    setLoading(false);
  };

  const getReviews = async () => {
    const data = (
      await instance.get(
        `http://localhost:8080/accommodations/${
          searchConditions.accommodationId
        }/reviews?${
          searchConditions.roomId ? `&roomId=${searchConditions.roomId}` : ''
        }&page=${searchConditions.page}&photo=${
          searchConditions.hasPhoto
        }&sort=${searchConditions.sort}`,
      )
    ).data.data.content;
    setReviews(data);
  };

  useEffect(() => {
    initReviewData();
  }, []);

  useEffect(() => {
    getReviews();
  }, [searchConditions]);

  return (
    <div>
      {loading || !reviewStatics ? (
        <style.NoReviews>등록된 후기가 없습니다.</style.NoReviews>
      ) : (
        <style.Wrapper>
          <ReviewStatistics
            totalCount={reviewStatics.totalCount}
            totalRateAvg={reviewStatics.totalRateAvg}
            kindnessRateAvg={reviewStatics.kindnessRateAvg}
            cleanlinessRateAvg={reviewStatics.cleanlinessRateAvg}
            convenienceRateAvg={reviewStatics.convenienceRateAvg}
            locationRateAvg={reviewStatics.locationRateAvg}
          ></ReviewStatistics>
          <SearchConditionSelectors
            onChange={setSearchConditions}
          ></SearchConditionSelectors>
          {reviews?.length === 0 ? (
            <style.NoReviews>등록된 후기가 없습니다.</style.NoReviews>
          ) : (
            reviews?.map(item => (
              <ReviewItem
                key={item.id}
                id={item.id}
                totalRate={item.totalRate}
                writer={item.writer}
                creationDate={item.creationDate}
                roomName={item.roomName}
                content={item.content}
                roomImageUrls={item.roomImageUrls}
              ></ReviewItem>
            ))
          )}
        </style.Wrapper>
      )}
    </div>
  );
};

export default Review;

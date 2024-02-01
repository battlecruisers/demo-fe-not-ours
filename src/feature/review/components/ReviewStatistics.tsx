import * as style from '../style/ReviewStatistics';

const ReviewStatistics = ({
  totalCount,
  totalRateAvg,
  kindnessRateAvg,
  cleanlinessRateAvg,
  convenienceRateAvg,
  locationRateAvg,
}: ReviewStatisticsParam) => {
  return (
    <div>
      <style.TotalCount>
        <h3>후기</h3>
        <span>&nbsp;{`(${totalCount})`}</span>
      </style.TotalCount>
      <style.RateWrapper>
        <style.TotalRateCont>
          <svg width="30" height="30" viewBox="0 0 14 14">
            <path
              d="M7.12095 11.3897C7.04568 11.3481 6.95432 11.3481 6.87905 11.3897L3.0935 13.4823C3.05697 13.5025 3.01324 13.4717 3.01996 13.4305L3.74674 8.975C3.75951 8.89669 3.73435 8.81696 3.67894 8.76016L0.586662 5.59082C0.558242 5.56169 0.574668 5.51262 0.614898 5.50648L4.87464 4.85565C4.95705 4.84305 5.02777 4.79021 5.06319 4.71474L6.95474 0.684808C6.97273 0.646468 7.02727 0.646467 7.04526 0.684808L8.93681 4.71474C8.97223 4.79021 9.04295 4.84305 9.12536 4.85565L13.3851 5.50648C13.4253 5.51262 13.4418 5.56169 13.4133 5.59082L10.3211 8.76016C10.2656 8.81696 10.2405 8.89669 10.2533 8.975L10.98 13.4305C10.9868 13.4717 10.943 13.5025 10.9065 13.4823L7.12095 11.3897Z"
              fill="#fdbd00"
              stroke="#E7AC00"
              stroke-width="0.5"
              stroke-linejoin="round"
            ></path>
          </svg>
          <style.TotalRateBox>
            <style.TotalRate>{totalRateAvg}</style.TotalRate>
            /5
          </style.TotalRateBox>
        </style.TotalRateCont>
        <style.OtherRateCont>
          <style.IndRateBox>
            <div>친절도</div>
            <style.RateBar avg={kindnessRateAvg * 20}></style.RateBar>
            <style.IndRateAvg>{kindnessRateAvg.toFixed(1)}</style.IndRateAvg>
          </style.IndRateBox>
          <style.IndRateBox>
            <div>청결도</div>
            <style.RateBar avg={cleanlinessRateAvg * 20}></style.RateBar>
            <style.IndRateAvg>{cleanlinessRateAvg.toFixed(1)}</style.IndRateAvg>
          </style.IndRateBox>
          <style.IndRateBox>
            <div>편의성</div>
            <style.RateBar avg={convenienceRateAvg * 20}></style.RateBar>
            <style.IndRateAvg>{convenienceRateAvg.toFixed(1)}</style.IndRateAvg>
          </style.IndRateBox>
          <style.IndRateBox>
            <div>위치</div>
            <style.RateBar avg={locationRateAvg * 20}></style.RateBar>
            <style.IndRateAvg>{locationRateAvg.toFixed(1)}</style.IndRateAvg>
          </style.IndRateBox>
        </style.OtherRateCont>
      </style.RateWrapper>
    </div>
  );
};

export default ReviewStatistics;

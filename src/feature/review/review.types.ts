interface ReviewProps {
  id: number;
  totalRate: number;
  creationDate: Date;
  roomName: string;
  writer: string;
  content: string;
  roomImageUrls: string[];
}

interface ReviewSample {
  totalCount: number;
  totalRateAvg: number;
  reviews: ReviewProps[];
}

interface ReviewStatisticsProps {
  totalCount: number;
  totalRateAvg: number;
  kindnessRateAvg: number;
  cleanlinessRateAvg: number;
  convenienceRateAvg: number;
  locationRateAvg: number;
  reviews: ReviewProps[];
}

interface ReviewStatisticsParam {
  totalCount: number;
  totalRateAvg: number;
  kindnessRateAvg: number;
  cleanlinessRateAvg: number;
  convenienceRateAvg: number;
  locationRateAvg: number;
}

interface ReviewSearchCondition {
  accommodationId: string | undefined;
  roomId: string | null;
  page: number;
  hasPhoto: boolean;
  sort: string;
}

interface SearchConditionSelectorsParam {
  onChange: React.Dispatch<React.SetStateAction<ReviewSearchCondition>>;
}

interface RoomName {
  id: number;
  name: string;
}

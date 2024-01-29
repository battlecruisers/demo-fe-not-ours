interface ReviewProps {
  id: number;
  totalRate: number;
  creationDate: Date;
  roomName: string;
  writer: string;
  content: string;
  roomImageUrls: string[];
}

interface ReviewInfoProps {
  id: number;
  totalCount: number;
  totalRateAvg: number;
  kindnessRateAvg: number;
  cleanlinessRateAvg: number;
  convenienceRateAvg: number;
  locationRateAvg: number;
  reviews: ReviewProps[];
}

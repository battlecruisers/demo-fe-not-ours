export interface AccommodationProps {
  id: number;
  name: string;
  category: string;
  region: string;
  thumbnailImageUrl: string;
  minimumPrice: number;
  maximumPrice: number;
}

export interface AccommodationListParams {
  startDate: Date;
  endDate: Date;
  guest: number;
  region?: string;
}

export interface AccommodationRegionDefault {
  region: string;
}

export interface AccommodationMemberDefault {
  guest: number;
}

export interface AccommodationDateDefault {
  startDate: Date;
  endDate: Date;
}

/**
 * Theme 추가
 */
export interface AccommodationThemeDefault {
  themeList: string[];
}

/**
 * Sort 조건 추가
 */
export interface AccommodationSortDefault {
  sort: string;
}

/**
 * 쿠폰 적용 가능 조건 추가
 */

export interface AccommodationApplicableDefault {
  applicable: boolean;
}

/**
 * 최대 가격 / 최소 가격 조건 추가
 */

export interface AccommodationPriceDefault {
  priceRange: number[];
}

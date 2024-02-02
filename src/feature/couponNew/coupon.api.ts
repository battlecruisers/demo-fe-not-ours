import axios from 'axios';

/**
 * 쿠폰 등록 API
 * @param couponId 쿠폰 아이디
 */
export const insertCoupon = async (couponId: number) => {
  try {
    // API 요청 보내기
    await axios.post(
      'http://localhost:8080/member-coupons', 
      { 
        couponId: couponId 
      },
      {
        withCredentials: true
      }
      );
    console.log('쿠폰 등록 성공');
  } catch (error) {
    // 오류 처리
    console.error('쿠폰 등록 실패:', error);
    throw error; 
  }
};

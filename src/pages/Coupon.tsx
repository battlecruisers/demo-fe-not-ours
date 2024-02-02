
import * as style from '../feature/cart/styles/cart';
import { insertCoupon } from '../feature/couponNew/coupon.api'; 
import { useState } from 'react';

const Coupon = () => {
    const [couponId, setCouponId] = useState('');

    const handleCouponRegistration = async() => {
        try {
            await insertCoupon(parseInt(couponId)); 
            console.log('쿠폰 등록 성공');
            } catch (error) {
            console.error('쿠폰 등록 실패:', error);
        }
    }

  return (
    <style.CartWrapper>
        <div>
        쿠폰 등록 번호: <input type="text" value={couponId} onChange={(e) => setCouponId(e.target.value)} />
        </div>
        <button type="submit"
                onClick={handleCouponRegistration}>쿠폰 등록
        </button>
    </style.CartWrapper>
  )
};

export default Coupon;

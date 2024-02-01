import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// interface Coupon {
//   id: number;
//   name: string;
//   discountRate: string;
//   discountAmount: string;
//   expirationDate: string;
// }

interface Coupon {
  description: string;
  discountLimit: number;
  discountPrice: number;
  discountRate: number;
  id: number;
  isRegistered: boolean;
  isValid: boolean;
  minimumPrice: number;
  name: string;
  region: string;
  roomId: number;
  roomType: string;
  validityStartDate: Date;
  validityEndDate: Date;
}

const Heading1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Heading6 = styled.h6`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 20px;
`;

const CouponTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  width: 90%;
  margin-top: 20px;
  border-collapse: collapse;
  table-layout: fixed;
  border: none;
  margin-left: auto;
  margin-right: auto;
`;

const CheckboxTH = styled.th`
  text-align: center;
  background-color: #f2f2f2;
  width: 5%;
`;

const CouponTH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  text-align: center;
  background-color: #f2f2f2;
  width: 20%;
  border-bottom: none;
  border: none;
`;

const CouponTD = styled.td`
  padding: 8px;
  text-align: left;
  width: 20%;
  text-align: center;
  border: 1px solid #ddd;
  border-bottom: none;
  border: none;
  cursor: pointer;
`;

const CouponTR = styled.tr`
  border: 1px solid #ddd;
`;

interface CouponProps {
  isCouponShow: boolean;
  setIsCouponShow: React.Dispatch<React.SetStateAction<boolean>>;
  onCouponSelect: (id: number) => void;
}

const Coupon = ({ setIsCouponShow, onCouponSelect }: CouponProps) => {
  // const navigate = useNavigate();

  //TODO: 멤버 쿠폰으로 변경
  const url = 'http://localhost:8080/coupons';

  const [couponList, setCouponList] = useState<Coupon[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<number>(-1);

  const handleOptionToggle = (option: number) => {
    setSelectedCoupon(option);
    console.log(selectedCoupon);
  };

  const handleCouponSelect = () => {
    onCouponSelect(selectedCoupon);
    setIsCouponShow(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Coupon[] = (await axios.get(url)).data.data;
        console.log(data);

        setCouponList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(couponList);
  }, []); // 컴포넌트가 마운트될 때만 실행

  //   const coupons = [
  //     {
  //       id: 1,
  //       name: '1월 특가 쿠폰',
  //       discountRate: '10%',
  //       discountAmount: '2000',
  //       expirationDate: '2024-01-25',
  //     },
  //     {
  //       id: 2,
  //       name: '2월 특가 쿠폰',
  //       discountRate: '10%',
  //       discountAmount: '2000',
  //       expirationDate: '2024-01-25',
  //     },
  //     // Add more coupons as needed
  //   ];

  return (
    <>
      <br />
      <br />
      <Heading1>적용 가능 쿠폰 리스트</Heading1>
      <br />

      <Heading6>
        해당 상품에 적용 가능한 쿠폰 입니다. 쿠폰을 선택해주세요.
      </Heading6>
      <CouponTable>
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '45%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <CouponTR>
            <CheckboxTH></CheckboxTH>
            <CouponTH>쿠폰명</CouponTH>
            <CouponTH>할인율</CouponTH>
            <CouponTH>할인금액</CouponTH>
            <CouponTH>유효기간</CouponTH>
          </CouponTR>
        </thead>
        <tbody>
          {couponList.map((coupon, index) => (
            <CouponTR key={coupon.id}>
              <input
                type="radio"
                id={`radio_${index}`}
                name="sortOption"
                value={coupon.id}
                checked={selectedCoupon === coupon.id}
                onChange={() => handleOptionToggle(coupon.id)}
              ></input>
              <CouponTD>{coupon.name}</CouponTD>
              <CouponTD>{coupon.discountRate}</CouponTD>
              <CouponTD>{coupon.discountPrice}</CouponTD>
              {/* <CouponTD>{coupon.validityStartDate.toDateString}</CouponTD> */}
            </CouponTR>
          ))}
        </tbody>
      </CouponTable>
      <button onClick={() => handleCouponSelect()}>쿠폰 적용</button>
    </>
  );
};

export default Coupon;

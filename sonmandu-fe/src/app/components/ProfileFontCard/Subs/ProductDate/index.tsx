import { ProductDateWrapper } from './style';

const ProductDate = ({ date }: { date: string }) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear().toString().substr(2, 2); // 년도의 마지막 두 자리만 가져옴
const month = newDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
const day = newDate.getDate();
const formattedDate = `${year}년 ${month}월 ${day}일`;
  return (
    <ProductDateWrapper>
      <span>{formattedDate} 제작</span>
    </ProductDateWrapper>
  );
};

export default ProductDate;

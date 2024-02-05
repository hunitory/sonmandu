import { ProductDateWrapper } from './style';

const ProductDate = ({ date }: { date: string }) => {
  return (
    <ProductDateWrapper>
      <span>{date} 제작</span>
    </ProductDateWrapper>
  );
};

export default ProductDate;

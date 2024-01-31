import { ProductDateWrapper } from "./style";

interface ProductDateProps {
	date: string;
}

const ProductDate: React.FC<ProductDateProps> = ({ date }) => {
	return (
			<ProductDateWrapper>
				<span>{date} 제작</span>
			</ProductDateWrapper>
	)
}

export default ProductDate;
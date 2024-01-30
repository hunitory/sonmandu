import { ProductDateWrapper } from "./style";

interface ProductDateProps {
	date: string;
}

const ProductDate: React.FC<ProductDateProps> = ({ date }) => {
	return (
			<ProductDateWrapper>
				<span>{date}</span>
			</ProductDateWrapper>
	)
}

export default ProductDate;
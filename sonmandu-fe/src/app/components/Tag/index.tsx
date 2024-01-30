import * as S from './style';

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({tag}) => {
    return (
        <S.TagWrapper>
            <S.TagSpan>{tag}</S.TagSpan>
        </S.TagWrapper>
    )
}

export default Tag;
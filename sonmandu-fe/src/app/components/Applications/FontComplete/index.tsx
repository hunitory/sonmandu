import * as Styled from './style';
import * as Comp from 'components';
import Link from 'next/link';

export default function FontComplete() {
  return (
    <Styled.Wrapper>
      <Styled.StepWrapper>
        <Styled.firstnone>
          <Comp.FontStep value="시작하기" isactive="true"></Comp.FontStep>
        </Styled.firstnone>
        <Comp.FontStep value="파일 업로드" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="손글씨 정보 입력" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="신청완료" isactive="true"></Comp.FontStep>
      </Styled.StepWrapper>
      <Styled.Card>
        <Styled.ContentWrapper>
          <Styled.ContentTitle>
            손글씨 만들기 서비스 신청이 완료되었습니다.
          </Styled.ContentTitle>
          <Styled.ContentTextWrapper>
            <Styled.ContentText>
              <span>제작 기간</span>은 <span>2~3일</span>정도 소요됩니다.
            </Styled.ContentText>
            <Styled.ContentText>
              <span>손글씨 제작 완료 시 </span>회원님의{' '}
              <span>이메일로 알림 메일이 전송</span>됩니다.{' '}
            </Styled.ContentText>
            <Styled.ContentText>
              마이 페이지에서 손글씨 제작 현황을 보실 수 있습니다.
            </Styled.ContentText>
          </Styled.ContentTextWrapper>
        </Styled.ContentWrapper>
        <Styled.ButtonWrapper>
          <Styled.MyPageButton
            type="button"
            disabled={false}
          >
            <Link href={'/profile/1'}>
              <Styled.MyPageButtonText>마이 페이지</Styled.MyPageButtonText>
            </Link>
          </Styled.MyPageButton>
          <Styled.MainPageButton
            type="button"
            disabled={false}
          >
            <Link href={'/'}>
              <Styled.MainPageButtonText>메인 페이지</Styled.MainPageButtonText>
            </Link>
          </Styled.MainPageButton>
        </Styled.ButtonWrapper>
      </Styled.Card>
    </Styled.Wrapper>
  );
}

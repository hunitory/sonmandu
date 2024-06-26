import * as Styled from './style';
import * as Comp from 'components';
import Image from 'next/image';
import { FontStartProps } from 'types';

export default function NextButton(props: FontStartProps) {
  const { onNext, onDownload } = props;
  const TabletURL = '/image/tablet.png';
  const PaperURL = '/image/paper.png';
  const penURL = '/image/pen.png';

  const Caution1 = '/image/caution1.png';
  const Caution2 = '/image/caution2.png';
  const Caution3 = '/image/caution3.png';
  const Caution4 = '/image/caution4.png';

  return (
    <Styled.Wrapper>
      <Styled.StepWrapper>
        <Comp.FontStep value="시작하기" isactive="true"></Comp.FontStep>
        <Comp.FontStep value="파일 업로드" isactive="false"></Comp.FontStep>
        <Comp.FontStep value="손글씨 정보 입력" isactive="false"></Comp.FontStep>
        <Comp.FontStep value="신청완료" isactive="false"></Comp.FontStep>
      </Styled.StepWrapper>
      <Styled.Card>
        <Styled.ContentBox>
          <Styled.TitleWrapper>
            <Styled.Title>시작 전에 확인해주세요!</Styled.Title>
          </Styled.TitleWrapper>

          <Styled.ContentWrapper>
            <Styled.ContentContainer>
              <Styled.ContentTitle>준비물</Styled.ContentTitle>
              <Styled.MaterialContent>
                <p>
                  <span>패드</span>를 이용하고 계신다면,
                </p>
                <p>
                  글자를 적을 수 있는 <span>PDF 템플릿</span>을 제공해 드립니다!
                </p>
              </Styled.MaterialContent>

              <Styled.MaterialWrapper>
                <Styled.MaterialImgWrapper>
                  <Comp.CustomImage src={TabletURL} alt="태블릿" width={90} height={120} />
                </Styled.MaterialImgWrapper>
                <Styled.MaterialImgWrapper>
                  <Comp.CustomImage src={PaperURL} alt="종이" width={90} height={130} />
                </Styled.MaterialImgWrapper>
                <Styled.MaterialImgWrapper>
                  <Comp.CustomImage src={penURL} alt="펜" width={92} height={125} />
                </Styled.MaterialImgWrapper>
              </Styled.MaterialWrapper>
              <Styled.DownloadButtonWrapper>
                <Styled.DownloadButton onClick={onDownload} disabled={false} type="button">
                  <Styled.DownloadButtonText>템플릿 다운로드</Styled.DownloadButtonText>
                </Styled.DownloadButton>
              </Styled.DownloadButtonWrapper>
            </Styled.ContentContainer>

            <Styled.CautionContainer>
              <Styled.ContentTitle>주의사항</Styled.ContentTitle>

              <Styled.CautionWrapper>
                <Styled.CautionContentWrapper>
                  <Comp.CustomImage src={Caution1} alt="얼룩이 있는 경우" width={95} height={155} />
                  <Styled.CautionContentText>얼룩이 있는 경우</Styled.CautionContentText>
                </Styled.CautionContentWrapper>
                <Styled.CautionContentWrapper>
                  <Comp.CustomImage src={Caution2} alt="글 상자에 획이 닿는 경우" width={95} height={155} />
                  <Styled.CautionContentText>글 상자에 획이 닿는 경우</Styled.CautionContentText>
                </Styled.CautionContentWrapper>
                <Styled.CautionContentWrapper>
                  <Comp.CustomImage src={Caution3} alt="획이 겹치거나 닿은 경우" width={95} height={155} />
                  <Styled.CautionContentText>획이 겹치거나 닿은 경우</Styled.CautionContentText>
                </Styled.CautionContentWrapper>
                <Styled.CautionContentWrapper>
                  <Comp.CustomImage src={Caution4} alt="획이 끊어진 경우" width={95} height={155} />
                  <Styled.CautionContentText>획이 끊어진 경우</Styled.CautionContentText>
                </Styled.CautionContentWrapper>
              </Styled.CautionWrapper>
            </Styled.CautionContainer>
          </Styled.ContentWrapper>
        </Styled.ContentBox>
        <Styled.ButtonWrapper>
          <Styled.NextButton onClick={onNext} disabled={false} type="button">
            <Styled.NextButtonText>다음 단계</Styled.NextButtonText>
          </Styled.NextButton>
        </Styled.ButtonWrapper>
      </Styled.Card>
    </Styled.Wrapper>
  );
}

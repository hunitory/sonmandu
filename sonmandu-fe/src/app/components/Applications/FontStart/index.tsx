import * as Styled from './style';
import Image from 'next/image';

interface FontStartProps {
  onNext: () => void;
  onDownload: () => void;
}

export default function FontStart({ onNext, onDownload }: FontStartProps) {
  const TabletURL = '/image/tablet.png';
  const PaperURL = '/image/paper.png';
  const penURL = '/image/pen.png';

  const Caution1 = '/image/Caution1.png';
  const Caution2 = '/image/Caution2.png';
  const Caution3 = '/image/Caution3.png';
  const Caution4 = '/image/Caution4.png';

  return (
    <Styled.Wrapper>
      <Styled.ConTentContainer>
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
                <Image src={TabletURL} alt="태블릿" width={90} height={120} />
              </Styled.MaterialImgWrapper>
              <Styled.MaterialImgWrapper>
                <Image src={PaperURL} alt="종이" width={90} height={130} />
              </Styled.MaterialImgWrapper>
              <Styled.MaterialImgWrapper>
                <Image src={penURL} alt="펜" width={92} height={125} />
              </Styled.MaterialImgWrapper>
            </Styled.MaterialWrapper>
            <Styled.ButtonWrapper>
              <Styled.DownloadButton
                onClick={onDownload}
                disabled={false}
                type="button"
              >
                <Styled.DownloadButtonText>
                  템플릿 다운로드
                </Styled.DownloadButtonText>
              </Styled.DownloadButton>
            </Styled.ButtonWrapper>
          </Styled.ContentContainer>

          <Styled.CautionContainer>
            <Styled.ContentTitle>주의사항</Styled.ContentTitle>

            <Styled.CautionWrapper>
              <Styled.CautionContentWrapper>
                <Image src={Caution1} alt="Caution1" width={95} height={155} />
                <Styled.CautionContentText>
                  얼룩이 있는 경우
                </Styled.CautionContentText>
              </Styled.CautionContentWrapper>
              <Styled.CautionContentWrapper>
                <Image src={Caution2} alt="Caution2" width={95} height={155} />
                <Styled.CautionContentText>
                  글 상자에 닿는 경우
                </Styled.CautionContentText>
              </Styled.CautionContentWrapper>
              <Styled.CautionContentWrapper>
                <Image src={Caution3} alt="Caution3" width={95} height={155} />
                <Styled.CautionContentText>
                  획이 겹치거나 닿은 경우
                </Styled.CautionContentText>
              </Styled.CautionContentWrapper>
              <Styled.CautionContentWrapper>
                <Image src={Caution4} alt="Caution4" width={95} height={155} />
                <Styled.CautionContentText>
                  획이 끊어진 경우
                </Styled.CautionContentText>
              </Styled.CautionContentWrapper>
            </Styled.CautionWrapper>
          </Styled.CautionContainer>
        </Styled.ContentWrapper>
      </Styled.ConTentContainer>
      <Styled.ButtonWrapper>
        <Styled.NextButton onClick={onNext} disabled={false} type="button">
          <Styled.NextButtonText>다음 단계</Styled.NextButtonText>
        </Styled.NextButton>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}

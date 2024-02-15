import * as Styled from './style';
import * as Comp from 'components';

export default function DownLoadTemplateButton() {
  const handleDownload = () => {
    const url = '/sonmandu.pdf'; // public 폴더 내의 파일 경로
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sanmanduTemplate'; // 다운로드될 때 파일 이름 지정
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Styled.DownloadButtonWrapper>
      <Styled.DownloadButton onClick={handleDownload} disabled={false} type="button">
        <Styled.DownloadButtonText>템플릿 다운로드</Styled.DownloadButtonText>
      </Styled.DownloadButton>
    </Styled.DownloadButtonWrapper>
  );
}

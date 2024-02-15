import { BaseButton, BaseHashTags } from 'components';
import styled from 'styled-components';
import { notoSansKr } from 'styles';

export const ProfileFontCardWrapper = styled.div`
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 6px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const UpperWrapper = styled.div`
  width: 100%;
  height: 229px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`;

export const LowerWrapper = styled.div`
  width: 100%;
  height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const LowerSpan = styled.span`
  font-size: 24px;
  font-weight: ${notoSansKr.regular.style.fontWeight};
`;

export const LowerContentsWrapper = styled.div`
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const LowerContentsUp = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 20px;
  padding: 8px 0;
  justify-content: center;
`;

export const LowerContentsDown = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  gap: 4px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
`;
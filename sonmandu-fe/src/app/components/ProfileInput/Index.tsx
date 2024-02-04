'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import * as Comp from '@/components';
import * as S from './style'; 

interface ProfileInputProps {
	infoContent: string;
	infoHead: string;
	labelName: string;
}


function EditContents(props: ProfileInputProps) {
	switch (true) {
		case props.infoHead === '닉네임':
			return (
				<S.EditContentsWrapper>
					<p>길이는 2자 이상 12자 이내로 작성해주세요</p>
					<p>닉네임은 중복이 허용되지 않습니다</p>
				</S.EditContentsWrapper>
			);
		case props.infoHead === '아이디':
			return (
				<S.EditContentsWrapper>
					<p>길이는 8자 이상 20자 이내로 작성해주세요</p>
				</S.EditContentsWrapper>
			);
		case props.infoHead === '이름':
			return (
				<S.EditContentsWrapper>

				</S.EditContentsWrapper>
			);
		case props.infoHead === '이메일':
			return (
				<S.EditContentsWrapper>
					<p>비밀번호를 찾을 시에 사용됩니다</p>
				</S.EditContentsWrapper>
			);
	}
}

function ProfileInput(props: ProfileInputProps) {
  
	const [isEdit, setIsEdit] = useState(false);

	const ref = useRef<HTMLInputElement>(null);
	const [memberInfo, setMemberInfo] = useState<string>(props.infoContent);
	const handleMemberInfoOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberInfo( e.target.value );
  };

	return (
		<Comp.BaseLabelWithInput.Label
			id={`member-info-${props.labelName}`}
			className={`member-info-${props.labelName}`}
		>
			<S.InfoWrapper>
				<S.InfoHead>{props.infoHead}</S.InfoHead>
					{	isEdit ? 
						(
							<S.InfoInputWrapper>
								<S.EditInputWrapper>
									<S.BaseInput
											ref={ref}
											id={props.infoHead}
											type="text"
											value={memberInfo}
											onChange={handleMemberInfoOnChange}
									/>
									<EditContents {...props} />
									<S.StyledButton
										type={'button'}
										onClick={
												() => setIsEdit(!isEdit)
												// 저장하는 api 추가
										}
										disabled={false}
									> 
										<span>저장하기</span>
									</ S.StyledButton>
								</S.EditInputWrapper>
								<S.EditLink>
									<a 
										onClick={() => setIsEdit(!isEdit)
									}>취소하기</a>
								</S.EditLink>
							</S.InfoInputWrapper>
						) :
						(
							<S.InfoInputWrapper>
								<S.InfoSpan>{props.infoContent}</S.InfoSpan>
								<S.EditLink>
									<a 
										onClick={() => setIsEdit(!isEdit)
									}>수정하기</a>
								</S.EditLink>

							</S.InfoInputWrapper>
						)
					}
			</S.InfoWrapper>
		</Comp.BaseLabelWithInput.Label>
	)

}

export default ProfileInput;
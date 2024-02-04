'use client';

import React, { ChangeEvent, useRef, useState, useEffect } from 'react';
import * as Comp from '@/components';
import * as S from './style'; 

interface IsActive {
	nickname: boolean,
	id: boolean,
	name: boolean,
	password: boolean,
	email: boolean
}

interface ProfileInputProps {
	isActive: IsActive,
	activate: React.Dispatch<React.SetStateAction<IsActive>>,
	infoContent: string;
	infoHead: string;
	labelName: string;
}


function EditContents({infoHead, infoContent, labelName}: {infoHead: string, infoContent: string, labelName: string}) {
	switch (true) {
		case infoHead === '닉네임':
			return (
				<S.EditContentsWrapper>
					<p>길이는 2자 이상 12자 이내로 작성해주세요</p>
					<p>닉네임은 중복이 허용되지 않습니다</p>
				</S.EditContentsWrapper>
			);
		case infoHead === '아이디':
			return (
				<S.EditContentsWrapper>
					<p>길이는 8자 이상 20자 이내로 작성해주세요</p>
				</S.EditContentsWrapper>
			);
		case infoHead === '이름':
			return (
				<S.EditContentsWrapper>

				</S.EditContentsWrapper>
			);
		case infoHead === '이메일':
			return (
				<S.EditContentsWrapper>
					<p>비밀번호를 찾을 시에 사용됩니다</p>
				</S.EditContentsWrapper>
			);
	}
}

function ProfileInput({isActive, activate, ...props}: ProfileInputProps) {
  
	const [isEdit, setIsEdit] = useState(false);

	const ref = useRef<HTMLInputElement>(null);
	const [memberInfo, setMemberInfo] = useState<string>(props.infoContent);
	const handleMemberInfoOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberInfo( e.target.value );
  };
  const allActive = {
		nickname: true,
		id: true,
		name: true,
		password: true,
		email: true
	}

	const nonActive = {
		nickname: false,
		id: false,
		name: false,
		password: false,
		email: false
	}

	useEffect(() => {
		console.log(isActive);
	}, [isActive]);

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
									<span
										onClick={() => {
											setIsEdit(!isEdit)
											activate(allActive)
										}
									}>취소하기</span>
								</S.EditLink>
							</S.InfoInputWrapper>
						) :
						(
							<S.InfoInputWrapper>
								<S.InfoSpan>{props.infoContent}</S.InfoSpan>
								<S.EditLink>
									<span
										onClick={() => {
											if (isActive[props.labelName as keyof typeof isActive]) {
												setIsEdit(!isEdit)
												activate(nonActive)
												activate(prev => ({
													...prev,
													[props.labelName] : true
												}))
											}
										}
									}>수정하기</span>
								</S.EditLink>

							</S.InfoInputWrapper>
						)
					}
			</S.InfoWrapper>
		</Comp.BaseLabelWithInput.Label>
	)

}

export default ProfileInput;
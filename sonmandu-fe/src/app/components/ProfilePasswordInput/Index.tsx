'use client';

import React, { ChangeEvent, useRef, useState } from 'react';
import * as Comp from '@/components';
import * as S from './style'; 

interface isActive {
	nickname: boolean,
	id: boolean,
	name: boolean,
	password: boolean,
	email: boolean
}

interface ProfilePasswordInputProps {
	isActive: isActive,
	activate: React.Dispatch<React.SetStateAction<isActive>>,
	password: string
}

function ProfilePasswordInput({isActive, activate, password}: ProfilePasswordInputProps) {
  
	const [isEdit, setIsEdit] = useState(false);

	const ref1 = useRef<HTMLInputElement>(null);
	const ref2 = useRef<HTMLInputElement>(null);
	const ref3 = useRef<HTMLInputElement>(null);

	const [currentPassword, setCurrentPassword] = useState<string>('');
	const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword( e.target.value );
  };
	const [newPassword1, setNewPassword1] = useState<string>('');
	const handleNewPassword1OnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword1( e.target.value );
  };
	const [newPassword2, setNewPassword2] = useState<string>('');
	const handleNewPassword2OnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword2( e.target.value );
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

	return (
		<Comp.BaseLabelWithInput.Label
			id={'member-info-password'}
			className={'member-info-password'}
		>
			<S.InfoWrapper>
				<S.InfoHead>비밀번호</S.InfoHead>
					{	isEdit ? 
						(
							<S.InfoInputWrapper>
								<S.EditInputWrapper>
									<S.PasswordWrapper>
										<S.PasswordDiv>
											<S.EditHeadSpan>현재 비밀번호</S.EditHeadSpan>
											<S.CurrentPasswordInput
													ref={ref1}
													id='currentPassword'
													type="text"
													value={currentPassword}
													onChange={handlePasswordOnChange}
											/>
										</S.PasswordDiv>
										{
											currentPassword.length > 0 && currentPassword.length < 8 && (
												<S.CurrentPasswordMessage>8자리 이상 입력해주세요</S.CurrentPasswordMessage>)
										}
									</S.PasswordWrapper>

									<S.PasswordWrapper>
										<S.PasswordDiv>
											<S.EditHeadSpan>새 비밀번호</S.EditHeadSpan>
												<S.CurrentPasswordInput
														ref={ref2}
														id='newPassword1'
														type="text"
														value={newPassword1}
														onChange={handleNewPassword1OnChange}
												/>
										</S.PasswordDiv>
										{
											newPassword1.length > 0 && newPassword1.length < 8 && (
												<S.NewPasswordMessage1>8자리 이상 입력해주세요</S.NewPasswordMessage1>)
										}
									</S.PasswordWrapper>
									
									<S.PasswordWrapper>
										<S.PasswordDiv>
											<S.EditHeadSpan>새 비밀번호 확인</S.EditHeadSpan>
												<S.CurrentPasswordInput
														ref={ref3}
														id='newPassword2'
														type="text"
														value={newPassword2}
														onChange={handleNewPassword2OnChange}
												/>
										</S.PasswordDiv>
										{
											newPassword2.length > 4 && newPassword1 !== newPassword2 && (
												<S.NewPasswordMessage2>새 비밀번호가 일치하지 않습니다</S.NewPasswordMessage2>
											)
										}
									</S.PasswordWrapper>
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
										onClick={() => {
											setIsEdit(!isEdit)
											activate(allActive)
										}
									}>취소하기</a>
								</S.EditLink>
							</S.InfoInputWrapper>
						) :
						(
							<S.InfoInputWrapper>
								<S.InfoSpan>비밀번호는 8자리이상 20자리 이하입니다</S.InfoSpan>
								<S.EditLink>
									<a 
										onClick={() => {
											if (isActive.password) {
												setIsEdit(!isEdit)
												activate(nonActive)
												activate(prev => ({
													...prev,
													password: true
												}))
											}
										}
									}>수정하기</a>
								</S.EditLink>

							</S.InfoInputWrapper>
						)
					}
			</S.InfoWrapper>
		</Comp.BaseLabelWithInput.Label>
	)

}

export default ProfilePasswordInput;
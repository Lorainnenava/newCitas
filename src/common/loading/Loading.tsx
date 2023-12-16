'use client';
import { FC } from 'react';
import Image from 'next/image';
import { ISize } from '@/types/types';
import styled, { keyframes } from 'styled-components';
import logo from '../../../public/assets/img/main/logo.png';

const animationImg = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
`;

const ImageWithAnimation = styled(Image)`
    animation: ${animationImg} 5s infinite;
`;

const Loading: FC<{ size?: ISize }> = ({ size }) => {
    return (
        <div
            style={{
                width: size?.width || '100%',
                height: size?.height || '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ImageWithAnimation
                src={logo}
                alt="Picture of the author"
                width={150}
                height={150}
            />
        </div>
    );
};
export default Loading;

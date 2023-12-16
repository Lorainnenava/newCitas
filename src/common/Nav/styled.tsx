import styled from 'styled-components';
import img from '../../../public/assets/img/main/logoNav.png';

export const Header = styled.div`
    width: 100%;
    height: 10%;
    background-color: #fafafa;
    display: flex;
    justify-content: space-around;
`;

export const HeaderImagen = styled.div`
    width: 50%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
`;

export const Image = styled.div`
    width: 25%;
    height: 90%;
    background-image: url(${img.src});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
        cursor: pointer;
    }
`;

export const TituloHeader = styled.h1`
    width: 50%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
`;

export const styles = {
    box: {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width: '25%',
        height: '90%',
    },
};

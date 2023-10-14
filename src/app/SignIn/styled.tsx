import styled from 'styled-components';
import img from '../../../public/assets/img/main/imgLogin.jpg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
`;

export const Box1 = styled.div`
    width: 70%;
    height: 80%;
    background-color: white;
    border-radius: 20px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    width: 70%;
    height: 100%;
`;

export const Rows = styled.div`
    width: 100%;
    height: auto;
`;
export const ContenedorForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

export const Contents = styled.div`
    width: 50%;
    height: 98%;
    background-image: url(${img.src});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 20px 0px 0px 20px;
    margin: 7px 7px;
`;

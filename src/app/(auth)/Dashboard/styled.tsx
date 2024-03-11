import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
`;

export const ComponentContainer = styled.div`
    width: auto;
    height: auto;
    padding: 20%;
    background-color: brown;
    box-shadow: 9px 16px 44px rgba(69, 69, 80, 0.16);
`;

export const BoxDashboard = styled.div`
    width: 96%;
    background-color: white;
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

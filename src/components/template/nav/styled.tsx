import styled from 'styled-components';
import { colors } from '../../../utils/colors/colors';

export const Header = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.second};
    display: flex;
    justify-content: space-around;
    border-radius: 0px 20px 0px 0px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    background-color: ${colors.second};
`;

export const BoxNav = styled.div<{ matches?: boolean }>`
    width: 98%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    justify-content: ${({ matches }) =>
        matches === true ? 'space-between' : 'flex-end'};
`;

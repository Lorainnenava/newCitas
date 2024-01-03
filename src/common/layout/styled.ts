import { styled } from 'styled-components';
import { colors } from '../colors/colors';

export const Box = styled.div`
    height: 99%;
    overflow: auto;
    padding: 5px;
    width: 100%;
    margin: auto;
    background-color: ${colors.first};
`;

export const ContainerImage = styled.div`
    width: 96%;
    height: 8.1%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 5px;
`;

export const style = {
    gridLayout: {
        height: '100vh',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey',
        },
    },
    imagen: {
        marginBottom: '10px',
        marginTop: '10px',
    },
    Box: {
        width: '100%',
        height: 'auto',
        padding: '0px',
        margin: '0px',
    },
    Accordion: {
        backgroundColor: `${colors.first}`,
        color: 'white',
    },
    AccordionSummary: {
        backgroundColor: `${colors.first}`,
        borderBottom: ' 1px solid #7191af',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typographyModule: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
    },
    typographySubModule: {
        fontSize: '13px',
        width: '80%',
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
};

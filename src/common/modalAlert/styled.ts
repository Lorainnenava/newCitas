import { Theme } from '@mui/material';
import { TStyle } from './types.d';

export const styleSheet = (theme: Theme) => {
    const style: TStyle = {
        modal: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '5px',
            width: '40%',
            height: '25%',
            padding: '10px',
            backgroundColor: 'white',
            [theme.breakpoints.down('sm')]: {
                width: '70%',
                height: '25%',
            },
            [theme.breakpoints.up('md')]: {
                width: '35%',
                height: '25%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '22%',
                height: '25%',
            },
        },
        title: {
            position: 'relative',
            fontSize: '26px',
            opacity: '0.8',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            flexGrow: 1,
            textAlign: 'center',
            color: '#6f95ff',
        },
        subTitle: {
            display: 'flex',
            flexGrow: 1,
            textAlign: 'center',
            justifyContent: 'center',
            color: 'black',
            [theme.breakpoints.down('sm')]: {
                fontSize: '15px',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '20px',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '20px',
            },
        },
        buttonOptionAccept: {
            backgroundColor: '#6f95ff',
            color: 'white',
            margin: '10px 0px  10px 15px',
            boxShadow: '0px 0px 10px 0px gray',
            '&:hover': {
                backgroundColor: '#6689e9',
            },
        },
        buttonOptionDenied: {
            margin: '10px 0px  10px 15px',
            boxShadow: '0px 0px 10px 0px gray',
        },
        boxHeader: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        boxIcon: {
            width: '95%',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            borderRadius: '5px 0  0 5px',
        },
        boxInfo: {
            backgroundColor: '#ffff',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '0 5px 5px 0',
            [theme.breakpoints.down('sm')]: {
                width: '60%',
                borderRadius: '0 5px 5px 0',
            },
        },
        box: {
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            marginTop: '20px',
        },
        warningIconStyle: {
            color: '#eb9a04',
            marginTop: '5px',
        },
    };
    return style;
};

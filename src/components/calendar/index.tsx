'use client';

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { colors } from '../../utils/colors/colors';

export default function BasicDateCalendar() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div
                style={{
                    backgroundColor: colors.third,
                    width: '90%',
                    borderRadius: '8px',
                    margin: 'auto',
                    marginTop: '15px',
                }}
            >
                <DateCalendar />
            </div>
        </LocalizationProvider>
    );
}

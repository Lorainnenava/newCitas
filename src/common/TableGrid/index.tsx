import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    GridToolbarContainer,
    GridToolbarQuickFilter,
    GridToolbarColumnsButton,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';

export type TToolbar = {
    children?: ReactNode;
};

export const ToolbarList: React.FC<TToolbar> = ({ children }) => {
    const theme = useTheme();
    return (
        <GridToolbarContainer
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px 10px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <GridToolbarColumnsButton
                    sx={{ color: theme.palette.first.main }}
                />
                <GridToolbarDensitySelector
                    sx={{ color: theme.palette.first.main }}
                />
                <Box>{children}</Box>
            </div>
            <div>
                <GridToolbarQuickFilter />
            </div>
        </GridToolbarContainer>
    );
};

export type TCards = {
    tittle: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
    };
    data: any;
    colorIcon?: string;
};

export type TCardWelcome = {
    data: any;
};

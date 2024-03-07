export type TCards = {
    tittle: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
    };
    data: any;
};

export type TCardWelcome = {
    data: any;
};

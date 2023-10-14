export type TStyle = {
    [key: string]: SxProps;
};

export type TModalAlertConfirmation = {
    title: string;
    subTitle: string;
    nameAccept: string;
    nameDecline: string;
    confirmation: string;
    state: boolean;
    onClickAccept: any;
    disabledLoading: boolean;
    handleCloseModal: () => void;
};

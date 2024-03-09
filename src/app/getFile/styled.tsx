import styled from "styled-components";

export const DownloadButton = styled.button<{
    edit?: boolean;
    disabled?: boolean;
}>`
    padding: 10px;
    width: 40px;
    height: 37px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    ${({ disabled }) =>
        disabled &&
        `
    background-color: #f5f6fa;
`}
    &:hover {
        background-color: ${({ disabled }) => !disabled && "#279f85"};
        cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
    }
`;

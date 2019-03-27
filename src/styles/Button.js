import styled from 'styled-components';

export default styled.button`
    ${({
        theme,
        // @ts-ignore
        fill = false,
        color = 'primary'
    }) =>
        color === 'primary'
            ? `
        color: ${theme.font.colors.contrast};
        ${fill ? `background-color: ${theme.colors.primary.main}` : `background-color: transparent`};
        `
            : `
        color: ${theme.font.colors.contrast};
        ${fill ? `background-color: ${theme.colors.secondary.main}` : `background-color: transparent`};
    `};
    padding: 3px 6px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme, color = 'primary' }) =>
            color === 'primary' ? theme.colors.primary.emphasis : theme.colors.secondary.light};
    }

    &:focus,
    &:active {
        outline: none;
    }
`;

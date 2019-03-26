import styled from 'styled-components';

export default styled.button`
    ${({ theme, color = 'primary' }) =>
        color === 'primary'
            ? `
        background-color: ${theme.colors.primary.main}
        color: ${theme.colors.primary.text};
    `
            : `
        background-color: ${theme.colors.secondary.main}
        color: ${theme.colors.secondary.text};`};
    padding: 3px 6px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme, color = 'primary' }) =>
            color === 'primary' ? theme.colors.primary.light : theme.colors.secondary.light};
    }

    &:focus,
    &:active {
        outline: none;
    }
`;

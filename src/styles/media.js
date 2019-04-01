//@ts-nocheck
import { css } from 'styled-components';

/**
 * Sizes in pixels for the breakpoints
 */
const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
};

const toMediaQuery = size => `(min-width: ${size}px)`;

const toMediaTemplate = (pixels, ...args) => css`
    @media screen and ${toMediaQuery(pixels)} {
        ${css(...args)}
    }
`;

const media = {
    desktop: (...args) => toMediaTemplate(sizes.desktop, ...args),
    tablet: (...args) => toMediaTemplate(sizes.tablet, ...args),
    phone: (...args) => toMediaTemplate(sizes.phone, ...args)
};

export default media;

export const isDesktop = () => window.matchMedia(toMediaQuery(sizes.desktop)).matches;
export const isTablet = () => window.matchMedia(toMediaQuery(sizes.tablet)).matches;
export const isPhone = () => window.matchMedia(toMediaQuery(sizes.phone)).matches;

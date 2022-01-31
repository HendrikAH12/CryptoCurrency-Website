import { css } from "styled-components";

export const desktop1 = (props) => {
    return css`
        @media only screen and (max-width: 1650px) {
            ${props}
        }    
    `;
};

export const desktop2 = (props) => {
    return css`
        @media only screen and (max-width: 1285px) {
            ${props}
        }    
    `;
};

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 1000px) {
            ${props}
        }    
    `;
};

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 500px) {
            ${props}
        }
    `;
};
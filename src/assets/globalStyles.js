import styled from 'styled-components';

const CenteredContent = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
        max-width: 740px
    }
    @media (min-width: 990px) {
        max-width: 960px;
    }
    @media (min-width: 1230px) {
        max-width: 1200px;
    }
    @media (max-width: 768px) {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

const StyledButtonA = styled.a`
    cursor: pointer;
    line-height: 50px;
    display: inline-block;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 15px;
    color: #fff;
    text-decoration: none !important;
    text-transform: uppercase;
    background-color: ${props => props.black ? '#0E0E0E' : '#1A18F7'};

    &:hover,
    &:focus {
        background-color: ${props => props.black ? '#282828': '#4b49f9'}
    }
`

const StyledButtonB = styled.button`
    cursor: pointer;
    border: none;
    line-height: 50px;
    display: inline-block;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 15px;
    color: #fff;
    text-decoration: none !important;
    text-transform: uppercase;
    background-color: ${props => props.black ? '#0E0E0E' : '#1A18F7'};

    &:hover,
    &:focus {
        background-color: ${props => props.black ? '#282828': '#4b49f9'}
    }
`

export {
    CenteredContent,
    StyledButtonA,
    StyledButtonB
}
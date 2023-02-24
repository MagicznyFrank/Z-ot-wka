import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #ABD6DFFF;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    color: white;
  box-shadow: -2px -2px 0 grey, 2px -2px 0 grey, -2px 2px 0 grey, 2px 2px 0 grey;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    padding: 10px 0;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'};

`;

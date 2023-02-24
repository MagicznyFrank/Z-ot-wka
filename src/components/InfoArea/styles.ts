import styled from "styled-components";

export const Container = styled.div`
    background-color: #ABD6DFFF;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
    color: white;
  box-shadow: -2px -2px 0 grey, 2px -2px 0 grey, -2px 2px 0 grey, 2px 2px 0 grey;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
  
`;


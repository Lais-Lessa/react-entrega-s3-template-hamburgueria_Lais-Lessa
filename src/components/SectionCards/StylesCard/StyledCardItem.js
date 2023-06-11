import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const StyledCardItem = styled.li`


    width: 300px;
    height: 346px;
    border: 2px solid ${Theme.colors.grey100};
    border-radius: 5px;
    
    &:hover button {
        background-color: ${Theme.colors.primary};
      
    }

    :hover{
        border: 2px solid ${Theme.colors.primary};
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
    

    div:first-child{
        width: 100%;
        height:150px;
        background-color: ${Theme.colors.grey0};
        border: none;
        overflow:hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 177px;
        height: 177px;
        border-radius: 5px;
    }

    div:nth-child(2){
        width: 100%;
        height: 100%;
        display-flex:
        flex-direction: column;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;
    }

    h2{
        font-size: 18px;
        font-weight: 700;
        color: ${Theme.colors.gray600};
        margin-top: 27px;
    }

    span:nth-child(2){
        font-size: 12px;
        font-weight: 400;
        color: ${Theme.colors.grey300};
    }

    span:nth-child(3){
        font-size: 14px;
        font-weight: 600;
        color: ${Theme.colors.primary};
    }

    @media(max-width:768px) {
        min-width:300px;
    }
`;

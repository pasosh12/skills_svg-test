import React from 'react';
import {Icon} from "../../Components/IconComponent/IconComponent";
import {IconType} from "react-icons";
import styled from "styled-components";

type SkillPropsType = {
    icon: IconType,
    title: string,
    size: string,
    color: string,

}
export const Skill: React.FC<SkillPropsType> = props => {
    const {title, icon, size, color} = props

    return (
        <SkillStyled>
            <Icon icon={icon} size={size} color={color}/>
            <TitleStyled>{title}</TitleStyled>
        </SkillStyled>

    );
};

const SkillStyled = styled.div`
    max-width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    //& > svg {
    //    transition: transform 0.2s ease-in-out;
    //}
    //
    //&:hover svg {
    //    transform: scale(1.1);
    //}

`
const TitleStyled = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
`
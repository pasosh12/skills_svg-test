import React from 'react';
import styled from "styled-components";
import {Skill} from "./Skill/Skill";
import {skills} from "../data/skills_icons";

export const Skills = () => {

    const skillItems = skills.map((s, index) => {
        return <Skill icon={s.icon} title={s.title} size={'90px'} color={s.color} key={index} />
    })
    return (
        <SkillsStyled id={"skills"}>
            <ContainerStyled>
                    <h1>Technologies I’ve been working with recently</h1>
                    <GridContainerStyled>
                          {skillItems}
                    </GridContainerStyled>

            </ContainerStyled>
        </SkillsStyled>
    );
};

const GridContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-items: center;
    flex-wrap: wrap;
    gap: 2.5rem;
    
`


const SkillsStyled = styled.section``
export const ContainerStyled = styled.div`
    max-width: 1194px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
`


import React from 'react'
import styled from 'styled-components'
import './Section.css'
import Wave from './Wave';

const SectionGroup = styled.div`
    background: white; 
    position: relative; 
    z-index: 5;
    overflow: hidden; 
`

const SectionTitleGroup = styled.div`
    z-index: 5;
`

const SectionTitle = styled.h3`
`

const SectionText = styled.div`
    background: #00008B;
    z-index: 5;
`

const WaveBottom = styled.div`
    transform: rotate(180deg);
`

const Section = props => ( 
        <SectionGroup image ={props.image}>
            <img src={require('../images/quadri.jpeg')} id="quadri" alt="quadri"/>
            <svg id="circleRed" xmlns="http://www.w3.org/2000/svg" width="500" height="500">
                <circle fill="#E50000" cx="350.674" cy="351.169" r="346.067"/>
            </svg>
            <Wave />
            <SectionTitleGroup>
                {/*<SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>*/}
                <SectionText className="SectionSkills">
                <p data-text="Brand Identity">Brand Identity</p>
                <p data-text="Front-End">Front-End</p>
                <p data-text="Art Direction">Art Direction</p>
                <p data-text="Strategy">Strategy</p>
                <p data-text="Webdesign">Webdesign</p>
                <p data-text="User Experience">User Experience</p>
                </SectionText>
            </SectionTitleGroup>
            <WaveBottom><Wave /></WaveBottom>
        </SectionGroup>
)

export default Section
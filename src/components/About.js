import React from 'react';
import styled from 'styled-components';
import './About.css';


const About = () => {
    const StyledH1 = styled.h1`
    text-align: center;
    margin: 10px 0px 20px;
    `;

    const StyledH2 = styled.h2`
    text-align: center;
    margin-top: 5px;
    `;

    const StyledP = styled.p`
    text-align: center;
    margin: 10px 0px 40px;
    `;

    return (
        <div className='background_center'>
            <div className='about_picture'>
                <img alt='about_image' src='./images/about3.png' width='100%' height='500px'></img>
            </div>
            <div>
                <StyledH1>Lorem Ipsum</StyledH1>
                <StyledH2>What is Lorem Ipsum?</StyledH2>
                <StyledP><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledP>
            </div>
            <div>
                <StyledH2>Why do we use it?</StyledH2>
                <StyledP>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                     The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                      content here', making it look like readable English. Many desktop publishing packages and 
                      web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                       Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</StyledP>
            </div>
            <div>
                <StyledH2>Where can I get some?</StyledH2>
                <StyledP>There are many variations of passages of Lorem Ipsum available,
                     but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                     If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                     All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                     It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                     The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</StyledP>
            </div>
        </div>
    );
};

export default About;
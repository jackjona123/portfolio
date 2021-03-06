import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Nav} from "../components/nav";
import {useScroll} from "../hooks/useScroll";
import {motion} from "framer-motion";
import {Panels} from "../components/panels";

import {Info} from "../components/about/info";
import {BigText} from "../components/about/bigText";
import {MainSection} from "../components/about/mainSection";
import {Marquee} from "../components/about/marquee";

const AboutStyles = styled(motion.div)`
    padding: 0 4vw;
    padding-bottom: 6vw;
    .hello{
        h1{
            font-size: calc(var(--VW)*3);
            text-align: center;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .name{
        margin: 10vh 0 20vh 0;
        h1{
            font-size: calc(var(--VW)*16);
            line-height: 10vw;
            height: 10vw;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.1vw var(--black);
            text-transform: uppercase;
            :nth-child(3){
                text-align: right;
            }
        }
        h3{
            font-size: calc(var(--VW)*3);
            text-align: center;
            z-index: 5;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .split{
        margin: 5vh 0;
        h1{
            text-transform: uppercase;
            font-size: calc(var(--VW)*3);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*5);
            }
        }
    }
    .contact{
        text-align: right;
        h1{
            font-size: calc(var(--VW)*6);
            text-transform: uppercase;
        }
        a{
            font-size: calc(var(--VW)*10);
            text-transform: uppercase;
            -webkit-text-fill-color: var(--periwinkle);
            -webkit-text-stroke: 0.14vw var(--black);
            &:hover{
                -webkit-text-fill-color: var(--black);
                -webkit-text-stroke: 0.14vw var(--periwinkle);
            }
        }
    }
`

const About = ()=>{
    const {scrollRef} = useScroll();
    return (
        <>
            <Nav/>
            <Panels/>
            <AboutStyles 
            initial={{backgroundColor: "#000000", pointerEvents: "none"}}
            animate={{backgroundColor: "transparent", pointerEvents: "unset"}}
            exit={{opacity: [1, 1, 0], transition:{duration: 2, times: [0, 0.99, 1]}}}
            ref={scrollRef} data-scroll-container >
                <BigText/>
                <div data-scroll-section  className="hello">
                    <h1  data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal">Hi, my name is</h1>
                </div>
                <div data-scroll-section className="name">
                    <h1 data-scroll data-scroll-speed="0.5">Jack</h1>
                    {/*<h3 data-scroll data-scroll-speed="6"></h3>*/}
                    <h1 data-scroll data-scroll-speed="0.5">Jona</h1>
                </div>
                <MainSection/>
                <Marquee/>
                <div data-scroll-section className="split">
                    <h1>Front-End</h1>
                    <h1>Web Developer</h1>
                </div>
                <Info/>
                <div data-scroll-section  className="contact">
                    <h1>Got Some Ideas?</h1>
                    <Link to="contact">Let's Talk.</Link>
                </div>
            </AboutStyles>
        </>
    )
}

export {About}
import React from "react";
import styled from "styled-components";

const BannerStyles = styled.div`
    position: fixed; 
    z-index: 2; 
    transform: translateY(-50%); 
    top: 50%;  
    right: 0;
`

export const Banner = ()=>{
    return(
        <BannerStyles id="Banner">
            <a href="/">
            <svg width="40" height="89" viewBox="0 0 40 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2C0 0.89543 0.895431 0 2 0H38C39.1046 0 40 0.895431 40 2V87C40 88.1046 39.1046 89 38 89H2C0.895431 89 0 88.1046 0 87V2Z" fill="black"/>
            <path d="M34.0031 42.6875L31.375 40.0612V33.625C31.375 32.6281 30.5594 31.8125 29.5625 31.8125H27.75C26.7531 31.8125 25.9375 32.6281 25.9375 33.625V34.6273L22.3125 31.0059C21.8177 30.5383 21.3646 30 20.5 30C19.6354 30 19.1823 30.5383 18.6875 31.0059L6.99688 42.6875C6.43138 43.2766 6 43.7061 6 44.5C6 45.5204 6.783 46.3125 7.8125 46.3125H9.625V57.1875C9.625 58.1844 10.4406 59 11.4375 59H16.875V49.9375C16.875 48.9406 17.6906 48.125 18.6875 48.125H22.3125C23.3094 48.125 24.125 48.9406 24.125 49.9375V59H29.5625C30.5594 59 31.375 58.1844 31.375 57.1875V46.3125H33.1875C34.217 46.3125 35 45.5204 35 44.5C35 43.7061 34.5686 43.2766 34.0031 42.6875Z" fill="white"/>
            </svg>
            </a>
        </BannerStyles>
    )
}
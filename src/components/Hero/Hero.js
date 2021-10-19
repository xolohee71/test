import React from 'react'
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems,
HeroH1, HeroP, HeroBtn } from './HeroElements';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (  
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Best NFT EVER!!!
                    </HeroH1>
                    <HeroP>HOLD NFT TO EARN</HeroP>
                    <Link to='/minting'>
                        <HeroBtn>
                            Mint NFT
                        </HeroBtn>
                    </Link>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;

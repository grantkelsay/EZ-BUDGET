"use client";

import { useState } from 'react'
import { ArrowDownIcon, BanknotesIcon } from '@heroicons/react/24/solid'

interface WelcomeMessageProps {
    setDisplayWelcome: (value: boolean) => void; 
    setDisplayFields: (value: boolean) => void; 
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ setDisplayWelcome, setDisplayFields }) => {

    const [animationClass, setAnimationClass] = useState('');

    const handleButtonClick = () => {
        setAnimationClass('fade-out');
        setTimeout(() => {
            setDisplayFields(true);
            setDisplayWelcome(false);
        }, 500);
    };

    return (
        <div className={`flex flex-col justify-between h-screen w-screen animate-fadeIn overflow-hidden ${animationClass}`}>
            <div className="flex flex-col items-center max-w-full max-h-full justify-center mt-60">
                <h2 className="font-bold text-[#53D2DC] text-[50px]">Ready to create your budget?</h2>
                <p className="font-light text-[#53D2DC]">Click the button below</p>
                <ArrowDownIcon className='h-4 w-4 text-[#53D2DC]'/>
                <button className="flex items-center text-[#53D2DC] bg-[#26648E]
                    p-5 rounded-full mt-5 shadow-md
                    hover:bg-[#53D2DC] hover:text-[#26648E]
                    transition duration-300" 
                    onClick={handleButtonClick}>
                    <BanknotesIcon className="h-5 w-5 mr-1" />
                    <p>Create Budget</p>
                </button>
            </div> 
            <div className="flex justify-center items-center text-center p-10 opacity-60 text-white">
                <p>Created By Grant Kelsay <br />github.com/grantkelsay | linkedin.com/in/grant-kelsay</p>
            </div>
        </div>
    );
};

export default WelcomeMessage;

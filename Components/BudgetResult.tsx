import React from 'react';
import AnimatedNumber from './AnimatedNumber';

interface BudgetResultProps {
    title: string;
    amount: number;
}

const BudgetResult: React.FC<BudgetResultProps> = ({ title, amount }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#53D2DC] rounded-lg py-10 shadow-lg'>
            <p className='text-lg lg:text-[25px] font-bold text-[#26648E]'>{title}</p>
            <AnimatedNumber value={amount} />
        </div>
    );
};

export default BudgetResult;

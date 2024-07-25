import React from 'react'

import BlockHeading from './BlockHeading';
import BudgetResult from './BudgetResult';

interface BudgetDisplayProps {
    monthlyNeeds: number;
    monthlySavings: number;
    monthlyWants: number;
    setMonthlyNeeds: (value: number) => void;
    setMonthlySavings: (value: number) => void;
    setMonthlyWants: (value: number) => void;
}

const BudgetDisplay: React.FC<BudgetDisplayProps> = ({monthlyNeeds, monthlySavings, monthlyWants, setMonthlyNeeds, setMonthlySavings, setMonthlyWants}) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-[#4F8FC0] text-white rounded-lg shadow-lg justify-between items-center animate-fadeIn">

    <BlockHeading label={"YOUR BUDGET"}/>
    
    <div className='p-6 mt-4 lg:mt-16 grid grid-cols-3 gap-4'>

        <BudgetResult title="NEEDS" amount={monthlyNeeds} /> 
        <BudgetResult title="SAVINGS" amount={monthlySavings} />
        <BudgetResult title="WANTS" amount={monthlyWants} />
        
    </div>
</div>
  )
}

export default BudgetDisplay
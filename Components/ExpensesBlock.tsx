import React from 'react'

import BlockHeading from './BlockHeading'

interface ExpensesBlockProps {
    label: string;
    inputsArray: any[];
    spending: any[];
    handleSpendingChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    spendingDesc: any[];
    handleSpendingDescChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExpensesBlock : React.FC<ExpensesBlockProps> = ({
    label,
    inputsArray,
    spending,
    handleSpendingChange,
    spendingDesc,
    handleSpendingDescChange,
}) => {
  return (
    <div className="md:col-span-2 lg:col-span-2 grid gap-2">
        <div className="bg-[#4F8FC0] rounded-lg shadow-lg grid gap-4">

            <BlockHeading label={label}/>
        

            <div className="p-6 grid grid-cols-2 gap-4">

                <div className="bg-[#26648E] rounded-lg p-6 grid gap-2 shadow-lg">
                    <p className='text-white font-bold'>Expenses Total</p>
                    {inputsArray.map((_, index) => (
                        <input key={index} 
                        value={spending[index]}
                        onChange={handleSpendingChange(index)} 
                        className="text-[#2a2a2a] rounded-full pl-3 focus:border-transparent focus:outline-none shadow-md w-full"/>
                    ))}
                </div>

                <div className="bg-[#26648E] rounded-lg p-6 grid gap-2 shadow-lg">
                    <p className='text-white font-bold'>Expense Description</p>
                    {inputsArray.map((_, index) => (
                        <input key={index} 
                        value={spendingDesc[index]}
                        onChange={handleSpendingDescChange(index)} 
                        className="text-[#2a2a2a] rounded-full pl-3 focus:border-transparent focus:outline-none shadow-md w-full"/>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default ExpensesBlock

"use client";

import { useState } from "react";
import InputField from "./InputField";
import BudgetResult from "./BudgetResult";
import BlockHeading from "./BlockHeading";
import ExpensesBlock from "./ExpensesBlock";
import IncomeButtons from "./IncomeButtons";

const Tool = () => {

    const [income, setIncome] = useState(2500);
    const [savings, setSavings] = useState(30);
    const [needs, setNeeds] = useState(50);
    const [wants, setWants] = useState(20);

    const [monthlyNeeds, setMonthlyNeeds] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [monthlyWants, setMonthlyWants] = useState(0);

    const [error, setError] = useState('');

    const [displayFields, setDisplayFields] = useState(true);

    const [needSpending, setNeedSpending] = useState(Array(10).fill(0));
    const [needSpendingDesc, setNeedSpendingDesc] = useState(Array(10).fill("Description"));
    const [wantSpending, setWantSpending] = useState(Array(10).fill(0));
    const [wantSpendingDesc, setWantSpendingDesc] = useState(Array(10).fill("Description"));

    const inputsArray = Array.from({ length: 10 });


    const calculateBudget = () => {
        if ((needs + savings + wants) !== 100) {
            setError('The sum of needs, savings, and wants needs to equal 100%');
        } else {
            setError('');
            setMonthlyNeeds(Math.round(income * (needs / 100)));
            setMonthlySavings(Math.round(income * (savings / 100)));
            setMonthlyWants(Math.round(income * (wants / 100)));
            setDisplayFields(true);
        }
    };

    const clearFields = () => {
        setIncome(0);
        setSavings(0);
        setNeeds(0);
        setWants(0);
        setMonthlyNeeds(0);
        setMonthlySavings(0);
        setMonthlyWants(0);
        setError('');
        setDisplayFields(false);
    };

    const handleNeedsSpendingChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNeedSpending = [...needSpending];
        const newValue = parseInt(e.target.value) || 0; // Handle NaN case
        const oldValue = newNeedSpending[index];

        // Update the state
        newNeedSpending[index] = newValue;
        setNeedSpending(newNeedSpending);

        // Update monthly needs
        setMonthlyNeeds(prevMonthlyNeeds => prevMonthlyNeeds - newValue + oldValue);
    };

    const handleNeedsSpendingDescChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNeedSpendingDesc = [...needSpendingDesc];
        const newVal = e.target.value; // Handle NaN case

        newNeedSpendingDesc[index] = newVal;
        setNeedSpendingDesc(newNeedSpendingDesc);
    }; 

    const handleWantSpendingChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWantSpending = [...wantSpending];
        const newValue = parseInt(e.target.value) || 0; // Handle NaN case
        const oldValue = newWantSpending[index];

        // Update the state
        newWantSpending[index] = newValue;
        setWantSpending(newWantSpending);

        // Update monthly needs
        setMonthlyWants(prevMonthlyWants => prevMonthlyWants - newValue + oldValue);
    };

    const handleWantSpendingDescChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWantSpendingDesc = [...wantSpendingDesc];
        const newVal = e.target.value; // Handle NaN case

        newWantSpendingDesc[index] = newVal;
        setNeedSpendingDesc(newWantSpendingDesc);
    };


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">

        <div className="md:col-span-2 lg:col-span-1 bg-[#4F8FC0] text-white rounded-lg shadow-lg">
            
            <BlockHeading label={"INCOME"}/>

            <div className="p-6">

                <InputField label="Projected monthly income" value={income} onChange={(e) => setIncome(parseInt(e.target.value))} />
                <InputField label={`${needs}% for needs`} value={needs} onChange={(e) => setNeeds(parseInt(e.target.value))} type="range" />
                <InputField label={`${savings}% for savings`} value={savings} onChange={(e) => setSavings(parseInt(e.target.value))} type="range" />
                <InputField label={`${wants}% for wants`} value={wants} onChange={(e) => setWants(parseInt(e.target.value))} type="range" />

                {error && <div className="mt-4 text-red-500 text-[12px]">ERROR: {error}</div>}

                <div className='mt-10 flex gap-2'>
                    <IncomeButtons label={"Create Budget"} onClickEvent={calculateBudget} />
                    <IncomeButtons label={"Clear Fields"}  onClickEvent={clearFields} />
                </div>

            </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-[#4F8FC0] text-white rounded-lg shadow-lg justify-between items-center">

            <BlockHeading label={"YOUR BUDGET"}/>
            
            <div className='p-6 mt-4 lg:mt-16 grid grid-cols-3 gap-4'>

                <BudgetResult title="NEEDS" amount={monthlyNeeds} />
                <BudgetResult title="SAVINGS" amount={monthlySavings} />
                <BudgetResult title="WANTS" amount={monthlyWants} />
                
            </div>
        </div>

        {displayFields && 
            <ExpensesBlock 
                label="NEEDS EXPENSES" 
                inputsArray={inputsArray} 
                spending={needSpending} 
                handleSpendingChange={handleNeedsSpendingChange} 
                spendingDesc={needSpendingDesc} 
                handleSpendingDescChange={handleNeedsSpendingDescChange} 
            />
        }

        {displayFields && 
            <ExpensesBlock 
                label="WANTS EXPENSES" 
                inputsArray={inputsArray} 
                spending={wantSpending} 
                handleSpendingChange={handleWantSpendingChange} 
                spendingDesc={wantSpendingDesc} 
                handleSpendingDescChange={handleWantSpendingDescChange} 
            />
        }

        {displayFields && 
            <div className="md:col-span-1 lg:col-span-1 grid gap-2">
                <div className="bg-[#4F8FC0] rounded-lg shadow-lg grid gap-4">
                    <BlockHeading label={"NOTES"}/>
                    <div className="p-6">
                        <div className="bg-[#26648E] rounded-lg p-6 grid gap-2 shadow-lg">
                            <input type="text" className="rounded-lg h-[21.7rem] "/>
                        </div>
                    </div>
                </div>
            </div>
        }

    </div>
  )
}

export default Tool
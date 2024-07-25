"use client";

import { useState } from 'react'
import Tool from '../Components/Tool'
import Income from '@/Components/Income'
import BudgetDisplay from '@/Components/BudgetDisplay'
import WelcomeMessage from '@/Components/WelcomeMessage';

const HomePage = () => {

  const [income, setIncome] = useState(0);
    const [savings, setSavings] = useState(0);
    const [needs, setNeeds] = useState(0);
    const [wants, setWants] = useState(0);
    const [error, setError] = useState('');
    const [monthlyNeeds, setMonthlyNeeds] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [monthlyWants, setMonthlyWants] = useState(0);
    const [displayFields, setDisplayFields] = useState(false);
    const [displayWelcome, setDisplayWelcome] = useState(true);
    const [displayBudget, setDisplayBudget] = useState(false);

    const [needSpending, setNeedSpending] = useState(Array(10).fill(0));
    const [needSpendingDesc, setNeedSpendingDesc] = useState(Array(10).fill("Description"));
    const [wantSpending, setWantSpending] = useState(Array(10).fill(0));
    const [wantSpendingDesc, setWantSpendingDesc] = useState(Array(10).fill("Description"));

    const inputsArray = Array.from({ length: 10 });


    const handleNeedsSpendingChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNeedSpending = [...needSpending];
        const newValue = parseInt(e.target.value) || 0; // Handle NaN case
        const oldValue = newNeedSpending[index];

        // Update the state
        newNeedSpending[index] = newValue;
        setNeedSpending(newNeedSpending);

        // Update monthly needs
        //setMonthlyNeeds(prevMonthlyNeeds => prevMonthlyNeeds - newValue + oldValue);
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
        //setMonthlyWants(prevMonthlyWants => prevMonthlyWants - newValue + oldValue);
    };

    const handleWantSpendingDescChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWantSpendingDesc = [...wantSpendingDesc];
        const newVal = e.target.value; // Handle NaN case

        newWantSpendingDesc[index] = newVal;
        setNeedSpendingDesc(newWantSpendingDesc);
    };


  return (
    <div className='overflow-hidden bg-[#303c43] min-h-screen min-w-screen'>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">

        {displayWelcome && <WelcomeMessage 
          setDisplayWelcome={setDisplayWelcome} displayWelcome={displayWelcome}
          setDisplayFields={setDisplayFields} displayFields={displayFields}
        />}

        {displayFields && <Income 
          income={income}
          setIncome={setIncome}
          savings={savings}
          setSavings={setSavings}
          needs={needs}
          setNeeds={setNeeds}
          wants={wants}
          setWants={setWants}
          error={error}
          setError={setError}
          monthlyNeeds={monthlyNeeds}
          setMonthlyNeeds={setMonthlyNeeds}
          monthlySavings={monthlySavings}
          setMonthlySavings={setMonthlySavings}
          monthlyWants={monthlyWants}
          setMonthlyWants={setMonthlyWants}
          setDisplayBudget={setDisplayBudget}
        />}

        {displayBudget && <BudgetDisplay 
          monthlyNeeds={monthlyNeeds}
          monthlySavings={monthlySavings}
          monthlyWants={monthlyWants}
          setMonthlyNeeds={setMonthlyNeeds}
          setMonthlySavings={setMonthlySavings}
          setMonthlyWants={setMonthlyWants}
        />}

        <Tool />
      </div>  
    </div>
  )
}

export default HomePage
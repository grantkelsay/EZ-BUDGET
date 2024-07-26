"use client";

import { useState } from 'react';
import Income from '@/Components/Income';
import BudgetDisplay from '@/Components/BudgetDisplay';
import WelcomeMessage from '@/Components/WelcomeMessage';
import ExpensesBlock from '@/Components/ExpensesBlock';
import Nav from '@/Components/Nav';

const HomePage = () => {

	// Define hooks
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

	// Whenever the user enters a need expense, update the monthly needs budget
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

	// Whenever the user enters a need expense, update the monthly needs budget description
    const handleNeedsSpendingDescChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNeedSpendingDesc = [...needSpendingDesc];
        const newVal = e.target.value; // Handle NaN case

        newNeedSpendingDesc[index] = newVal;
        setNeedSpendingDesc(newNeedSpendingDesc);
    }; 

	// Whenever the user enters a wants expense, update the monthly wants budget
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

	// Whenever the user enters a wants expense, update the monthly wants budget description
    const handleWantSpendingDescChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWantSpendingDesc = [...wantSpendingDesc];
        const newVal = e.target.value; // Handle NaN case

        newWantSpendingDesc[index] = newVal;
        setWantSpendingDesc(newWantSpendingDesc);
    };

	return (
		<div className='absolute inset-x-0 top-0 z-50'>

			<Nav />

			<div className='bg-[#303c43] min-h-screen min-w-screen overflow-hidden'>
				<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">

					{/* Display the welcome page */}
					{displayWelcome && <WelcomeMessage 
						setDisplayWelcome={setDisplayWelcome}
						setDisplayFields={setDisplayFields}
					/>}

					{/* Display the income panel to the user */}
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

					{/* Display the budget display with the budget breakdown */}
					{displayBudget && <BudgetDisplay 
						monthlyNeeds={monthlyNeeds}
						monthlySavings={monthlySavings}
						monthlyWants={monthlyWants}
						setMonthlyNeeds={setMonthlyNeeds}
						setMonthlySavings={setMonthlySavings}
						setMonthlyWants={setMonthlyWants}
						/>}

					{/* Display the expenses block */}
					{displayBudget && <ExpensesBlock 
						label="NEEDS EXPENSES" 
						inputsArray={inputsArray} 
						spending={needSpending} 
						handleSpendingChange={handleNeedsSpendingChange} 
						spendingDesc={needSpendingDesc} 
						handleSpendingDescChange={handleNeedsSpendingDescChange} 
						/>}

					{/* Display the expenses block */}
					{displayBudget && <ExpensesBlock 
						label="WANTS EXPENSES" 
						inputsArray={inputsArray} 
						spending={wantSpending} 
						handleSpendingChange={handleWantSpendingChange} 
						spendingDesc={wantSpendingDesc} 
						handleSpendingDescChange={handleWantSpendingDescChange} 
						/>}

				</div>  
			</div>
		</div>
	)
}

export default HomePage
"use client";

import React from 'react';
import BlockHeading from './BlockHeading';
import InputField from './InputField';
import IncomeButtons from './IncomeButtons';

interface IncomeProps {
    income: number;
    setIncome: (value: number) => void;
    needs: number;
    setNeeds: (value: number) => void;
    savings: number;
    setSavings: (value: number) => void;
    wants: number;
    setWants: (value: number) => void;
    error: string;
    monthlyNeeds: number;
    monthlySavings: number;
    monthlyWants: number;
    setError: (value: string) => void;
    setMonthlyNeeds: (value: number) => void;
    setMonthlySavings: (value: number) => void;
    setMonthlyWants: (value: number) => void;
    setDisplayBudget: (value: boolean) => void;
  }

const Income: React.FC<IncomeProps> = ({
    income, setIncome, savings, setSavings, needs, setNeeds, 
    wants, setWants, error, setError, monthlyNeeds, setMonthlyNeeds, monthlySavings, setMonthlySavings, 
    setMonthlyWants, setDisplayBudget
}) => {

  const calculateBudget = () => {
    if ((needs + savings + wants) !== 100) {
      setError('The sum of needs, savings, and wants needs to equal 100%');
    } else {
      setError('');
      setMonthlyNeeds(Math.round(income * (needs / 100)));
      setMonthlySavings(Math.round(income * (savings / 100)));
      setMonthlyWants(Math.round(income * (wants / 100)));
      setDisplayBudget(true);
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
    setDisplayBudget(false);
  };

  return (
    <div className="md:col-span-2 lg:col-span-1 bg-[#4F8FC0] text-white rounded-lg shadow-lg animate-fadeIn">
      <BlockHeading label={"INCOME"}/>
      <div className="p-6">
        <InputField label="Projected monthly income" value={income} onChange={(e) => setIncome(parseInt(e.target.value))} />
        <InputField label={`${needs}% for needs`} value={needs} onChange={(e) => setNeeds(parseInt(e.target.value))} type="range" />
        <InputField label={`${savings}% for savings`} value={savings} onChange={(e) => setSavings(parseInt(e.target.value))} type="range" />
        <InputField label={`${wants}% for wants`} value={wants} onChange={(e) => setWants(parseInt(e.target.value))} type="range" />
        {error && <div className="mt-4 text-red-500 text-[12px]">ERROR: {error}</div>}
        <div className='mt-10 flex gap-2'>
          <IncomeButtons label={"Create Budget"} onClickEvent={calculateBudget} />
          <IncomeButtons label={"Clear Fields"} onClickEvent={clearFields} />
        </div>
      </div>
    </div>
  )
}

export default Income;

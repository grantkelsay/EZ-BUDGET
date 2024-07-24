import React from 'react';

interface InputFieldProps {
    label: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = "text" }) => {
    return (
        <div className='mt-4 space-y-2'>
            <p>{label}</p>
            <input 
                className='text-[#2a2a2a] rounded-full pl-3 focus:border-transparent focus:outline-none shadow-md w-full'
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;

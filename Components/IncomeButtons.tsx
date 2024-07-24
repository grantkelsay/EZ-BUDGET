
interface IncomeButtonsProps {
    label: string;
    onClickEvent: () => void;
}

const IncomeButtons: React.FC<IncomeButtonsProps> = ({label, onClickEvent}) => {
  return (

    <button className='px-2 py-1 rounded-full bg-[#53D2DC] text-white shadow-md hover:bg-green-400 transition duration-200'
        onClick={onClickEvent}
        >
            {label}
    </button>
  )
}

export default IncomeButtons
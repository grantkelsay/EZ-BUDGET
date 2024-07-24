
interface InputFieldProps {
    label: string;
}

const BlockHeading: React.FC<InputFieldProps> = ({ label }) => {

  return (
    <div className='flex flex-col justify-center bg-[#53D2DC] rounded-lg shadow-lg p-6'>
        <h2 className="text-3xl lg:text-[50px] text-[#26648E] font-bold">{label}</h2>
    </div>
  )
}

export default BlockHeading
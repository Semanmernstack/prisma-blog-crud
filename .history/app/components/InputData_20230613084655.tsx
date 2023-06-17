'use client'


interface InputProps {
    type:any,
    value:any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    textarea?:boolean
    id:string
    placeholder?:string
    big?:boolean
}


function InputData({type,value,onChange,name,textarea,id,placeholder,big}:InputProps) {
  return (
    <div className="">
         <input className=" w--full h-24" id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} name={name}/>
    </div>
  )
}

export default InputData
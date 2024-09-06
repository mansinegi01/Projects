import React, { useId } from "react";
function Input(
    { 
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "inr"

    }) {
        const amountInputId = useId()
    return (
        <div className="bg-white text-black p-1 flex m-4 h-1/3 justify-center rounded-lg">

            <div className="w-1/2 p-1">
            <div className=""> <label htmlFor={amountInputId} className=" flex justify-center relative right-[74px] ">{label}</label></div>
                
                <input id={amountInputId} className="relative top-[29px]" type="number"  placeholder="Amount" value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>

            <div className="w-1/2 p-1">
                <div className=""><p className="inline-block">Currency Type</p></div>
                
                <select value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} className="relative top-[29px]" >
                    {currencyOptions.map((Currency)=>(
                        <option value={Currency} key={Currency}>{Currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Input

import useCurrencyInfo from './custom_hooks/useCurrencyInfo'
import Input from './components/Input'
import './App.css'
import { useState } from 'react'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    

  }

  const converted = () => {
    const rate = currencyInfo[to];
        if (rate) {
            setConvertedAmount(amount * rate);
        } else {
            alert("Currency conversion rate not found.");
        }
  }
  return (
    <div className='w-full'>
      <h1 className="  w-full flex justify-center h-[100px] text-gray-500">Currency Converter</h1>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        converted()
      }}>

      <div className="w-[1000px] h-[400px] border-2 border-white flex flex-col rounded-lg">
        <Input label="from" amount={amount} currencyOptions={options} onAmountChange={setAmount} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} />

        <div className="btn flex justify-center items-center">
          <button className='w-[100px] h-[60px] border-2   border-blue-800 bg-blue-800 active:bg-blue-700 absolute flex justify-center items-center rounded-2xl' onClick={swap}>Swap</button>
        </div>

        <Input label='To' amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} />

        <div className="">
          <button type='submit' className='border-2 bg-blue-800 border-blue-800 rounded-xl w-3/4 h-[50px] active:bg-blue-700' >Convert {from} to {to}</button>
        </div>


      </div>
      </form>

      </div>
)

}
      export default App

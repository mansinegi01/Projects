import { useEffect, useState } from "react";

function useCurrencyInfo(Currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[Currency]))
    },[Currency])
    return data
}

export default useCurrencyInfo
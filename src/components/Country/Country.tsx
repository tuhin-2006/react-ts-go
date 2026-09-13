import { useState } from "react"
import type { CountryType } from "../../type"
import './Country.css'

export interface CountryProps {
    country: CountryType
    handleVisitedCountry : (country:CountryType)=>void
    handleVisitedFlag : (flag:string)=>void
}

export default function Country({ country,handleVisitedCountry,handleVisitedFlag}: CountryProps) {


    const [visited,setVisited]= useState<boolean>(false);

    const handleVisited=()=>{
        // setVisited(true);
    //  //1st Way 
        // if(visited===true){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
    //Shortcut Way
        setVisited(!visited)
        handleVisitedCountry(country)
        // handleVisitedFlag(flags)
    }
    return (
        <div className={`country ${visited?'country-visited':''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Population :{country.population.population} </p>
            <p>Capital : {country.capital.capital} </p>
            <button onClick={handleVisited}>{visited?'Visited':'Mark As Visited'}</button>
            <button onClick={()=>handleVisitedFlag(country.flags.flags.png)}>Add Flag as Visited</button> 
        </div>
    )
}
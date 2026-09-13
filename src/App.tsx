import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import type { CountryType } from "./type";

//Step -1 : Create a promise for loading data .
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <Suspense fallback={<div>Nadir Loading ......</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  );
}

export default App;

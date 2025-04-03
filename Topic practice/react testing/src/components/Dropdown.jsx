
import React from "react";
import { useState } from "react";

const data = {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
      WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
      Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
      Haryana: ["Gurugram", "Faridabad", "Panipat"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
      UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    },
  },
  usa: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],

      NewYork: ["New York City", "Buffalo", "Rochester"],
      Texas: ["Houston", "Dallas", "Austin"],
      Florida: ["Miami", "Orlando", "Tampa"],
      Illinois: ["Chicago", "Aurora", "Naperville"],
      Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"],
      Ohio: ["Columbus", "Cleveland", "Cincinnati"],
      Georgia: ["Atlanta", "Savannah", "Augusta"],
      NorthCarolina: ["Charlotte", "Raleigh", "Greensboro"],
      Virginia: ["Richmond", "Virginia Beach", "Norfolk"],
    },
  },
  germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Berlin: ["Berlin", "Potsdam", "Cottbus"],
      NorthRhineWestphalia: ["Cologne", "Düsseldorf", "Dortmund"],
      BadenWurttemberg: ["Stuttgart", "Mannheim", "Karlsruhe"],
      Hesse: ["Frankfurt", "Wiesbaden", "Darmstadt"],
      Saxony: ["Dresden", "Leipzig", "Chemnitz"],
      LowerSaxony: ["Hanover", "Braunschweig", "Oldenburg"],
      RhinelandPalatinate: ["Mainz", "Koblenz", "Trier"],
      Thuringia: ["Erfurt", "Jena", "Gera"],
      SchleswigHolstein: ["Kiel", "Lübeck", "Flensburg"],
    },
  },
};



function Dropdown() {
  const [selectedconutry,setSelctedcountry]=useState('');
  const [selectedstate,setSelctedstate]=useState('');
  const [states,setStates]=useState([]);
  const [districts,setDistricts]=useState([]);



  

  return (
    <>
      <label >Country:</label>
      <select name="country" id="country" >
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="germany">Germany</option>
      </select>

      <label>State:<select
      
        >
          <option value="">Select a state</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>

      <label>
        District:
        <select >
          <option value="">Select a district</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Dropdown;
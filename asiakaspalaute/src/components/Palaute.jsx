import React, {useEffect, useState} from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 


function Palaute(){

const [notes, setNotes] = useState([{
    nimi:'',
    country:'',
    rating:'',
    palaute:''
}])
//haetaan arvot noteRouterin /notes 
useEffect(() => {
    fetch("/notes").then(res => {
        if(res.ok) {
            return res.json()
        }
    }).then(jsonRes => setNotes(jsonRes));
})

   const [index, setIndex] = useState(0);
   const { nimi, country, rating, palaute } = notes[index];  
  const checkNumber = (number) => {
    if (number > notes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return notes.length - 1;
    }
    return number;
  };
  const nextNote = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevNote = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomNote = () => {
    let randomNumber = Math.floor(Math.random() * notes.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }; 

    return(
        <div className="container">
            <h1>Palaute Sivu</h1>
             <article className="containerPilvi">
            <div className="item">
            <h2>{nimi}</h2>
            <h3>{country}</h3>
             <h3>{rating}</h3>
            <p>{palaute}</p>
            <div className='button-container'>
        <button className='prev-btn' onClick={prevNote}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextNote}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomNote}>
        surprise me
      </button> 
            </div>
            
             </article> 
              <div className ="backgroundPalaute">
             </div>
            
        </div>
    );
} 

export default Palaute;
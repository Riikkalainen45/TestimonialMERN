import React, {useState} from "react";
import axios from 'axios';
import {FaStar} from 'react-icons/fa';


function CreateForm(){
    const [star, setStar] = useState('');
    const [hover, setHover] = useState('');
    const[input, setInput] =useState({
        nimi:'',
        country:'',
        rating:'',
        palaute:''
    })

function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput =>{
        return{
            ...prevInput,
            [name]:value
        }
    })
}
function handleClick(event) {
    event.preventDefault();
    
    const newPalaute ={
        nimi: input.nimi,
        country: input.country,
        rating: input.rating,
        palaute: input.palaute
    }
    
    axios.post('http://localhost:3001/create', newPalaute)
}


    return(
        <div className="container">
            <article className="containerForm">
            <h1>Lomake sivu</h1>
            <form>
                 <div className='form-group'>
                    <input onChange={handleChange} 
                    name="country" 
                    value={input.country}
                    autoComplete="off" 
                    className="form-control" 
                    placeholder="Your Country"></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} 
                    name="nimi" 
                    value={input.nimi}
                    autoComplete="off" 
                    className="form-control" 
                    placeholder="nick-name"></input>
                </div>

                  <div className='form-group'>
                      <div className='star'>
                 {[ ...Array(5)].map((star, i) => {
                    const starValue = i + 1;
                    return (
                    <label> 
                    <input onChange={handleChange} 
                    type="radio" 
                    name="star" 
                    value={starValue}
                    onClick={() => setStar(starValue)}
                    autoComplete="off" 
                    className="form-control" 
                    placeholder="Give us stars 1-5?"/>

                      <FaStar className="star"
                color={starValue <= (hover || star) ? "#ffd700" : "#00FFFF"   } 
                size={50}
                onMouseEnter ={()=> setHover (starValue)}
                onMouseLeave ={() =>setHover (null)}
                />
                </label>
            );
        })}
         <p>You are giving us {star} stars.</p>
      </div>
                </div> 


               
                 <div className='form-group'>
                    <input onChange={handleChange} 
                    name="rating" 
                    value={input.rating}
                    autoComplete="off" 
                    className="form-control" 
                    placeholder="Give us stars 1-5?"></input>
                </div> 
                
                <div className='form-group'>
                    <textarea onChange={handleChange} 
                    name="palaute" 
                    value={input.palaute}
                    autoComplete="off" 
                    className="form-control"
                    placeholder="Your feedback!"></textarea>
                </div>
                
                <button onClick={handleClick} className="button">SEND</button>
            </form>
            </article>
        </div>
    );
}
export default CreateForm;
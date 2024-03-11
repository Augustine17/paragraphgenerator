import React, { useState } from 'react'
import './Generator.css'

export const Generator = () => {
    const[length,setLength]=useState(0);
    const [paras, setParas] = useState([]);

    const paragraphs = [
        "The sun peeked over the horizon, painting the sky with hues of orange and pink. Birds chirped merrily, welcoming the new day. A gentle breeze rustled through the leaves, carrying the scent of fresh morning dew.",
        "Lost in thought, she gazed out of the window, watching the world go by. Memories of laughter and tears flooded her mind, like scenes from a movie. She sighed, wondering where the time had gone.",
        "In the heart of the forest, a hidden waterfall cascaded into a crystal-clear pool below. The air was filled with the sound of rushing water and the sweet scent of wildflowers. Sunlight filtered through the canopy, dappling the forest floor with golden light.",
        "The old bookstore was a treasure trove of forgotten tales and ancient wisdom. Dusty shelves lined with leather-bound books stretched as far as the eye could see. The smell of parchment and ink hung heavy in the air.",
        "Amidst the hustle and bustle of the city, a lone street performer played his guitar. His fingers danced across the strings, weaving a melody that spoke to the soul. Passersby stopped to listen, if only for a moment.",
        "High above the clouds, a lone eagle soared, its wings outstretched against the vast expanse of sky. Below, the world seemed small and insignificant, lost in the grandeur of nature. For a fleeting moment, all was right with the world.",
        "As night fell, the stars came out to play, twinkling like diamonds in the velvet sky. The moon cast a soft glow over the landscape, bathing everything in its silvery light. Crickets chirped rhythmically, serenading the night.",
        "On the shores of the lake, a family of ducks paddled lazily in the water. The setting sun painted the scene with warm hues of red and gold, casting long shadows across the sand. It was a moment of perfect tranquility."
      ];


      const handleSubmit = () =>{
         if(length<=0){
            alert("The length is low");
            return;
         }

         if(length>8){
            alert("The length is more");
            return;
         }

         const paras = [];
            for (let i = 0; i < length; i++) {
                paras.push(paragraphs[i]);
            }
            setParas(paras);
      }

      
  return (
   <>
        <div className='form-group'>
            <span className='para'>Paragraphs:</span>
            <input
                type="number"
                id="length"
                name="length"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <button onClick={handleSubmit} className='btn'>GENERATE</button>
        </div>
        <br/>
        <div id='cards'>
            {paras.map((paragraph, index) => (
                <p key={index} className='card'>{paragraph}</p>
            ))}
        </div>
   </>
  )
}

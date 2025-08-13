import React, { useState } from "react";
const data = [
  {
    id : 1,
    title:"Understanding the difference between grid-template and grid-auto",
  },

  {
    id: 2,
    title: "Recrating the github ...",
  }
];

export default function App(){
  const [ query, setQuery ] = useState('');
    const re = new RegExp( `(${query})`, 'gi');

    const highlight = text =>
        query
        ? text
                .split(re)
                .map((part,i)=>
            part.toLowerCase()===
            query.toLowerCase()?(
                <mark key={i}>{part}</mark>
            ):(
              part
        ),
    ):text;


  return (
      <div>
        <input
            value = {query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
        <ul>
            {data
                .map((item) =>(
                    <li key={item.id}>
                        {highlight(item.title)}
                    </li>
                )
            )}
        </ul>
      </div>
  );
}

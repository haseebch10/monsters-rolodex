import React from 'react';


import './card.styles.css.css'

export const Card= props =>(
    <div className="class-container" >
        <img alt= "monster" src= {`https://robohash.org/${props.monster.id}?set=set2& size=180 x180`}/>
          <h1> {props.monster.name}</h1>
   
       </div>

)
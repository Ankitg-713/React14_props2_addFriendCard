import React, { useState } from 'react'
import Card from './Components/Card'


//add 7 on the arrya using useState
function App() {

  const data = [
    {name: "Rahul", profession: "Doctor", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", friends: false},
    {name: "Amit", profession: "Artist", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", friends: false},
    {name: "Suresh", profession: "Designer", image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", friends: false},
    {name: "Mahesh", profession: "Engineer", image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", friends: false}
  ]

  const [realdata, setRealdata] = useState(data);
  const handleFriendsButton = (cardIndex)=>{
    setRealdata((previous)=>{
      return previous.map((item, index)=>{
        if(index == cardIndex){
          return {...item, friends: !item.friends}
        }
        return item
      })
    });
  };

  return (
     <div className='w-full h-screen flex justify-center items-center bg-zinc-300 gap-8'>
      {realdata.map((item, index)=>(
        // <Card key={index} image={item.image} name={item.name} profession={item.profession} />
        <Card key={index} cardIndex={index} handleClick={handleFriendsButton} values={item} />
      ))}
     </div>
  )
}

export default App
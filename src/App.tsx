import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';


interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {

  const [users, SetUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState('');

  function add(){
    const obj = {
      name: name,
      age: age,
      hobby: hobby
    }

    SetUsers([...users, obj])
  }


  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Nome" onChange={e => setName(e.target.value)}/>
        <Input placeholder="Age" type="number" onChange={e => setAge(e.target.valueAsNumber)} />
        <Input placeholder="Hobby" onChange={e => setHobby(e.target.value)}/>
        <button onClick={add}>Adicionar</button>
        <br/>
        <ul>
          {users.map((item) => {
            return <li><Card name={item.name} age={item.age} hobby={item.hobby}/></li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;

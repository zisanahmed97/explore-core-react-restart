
import './App.css'

function App() {
 

  return (
    <>
      <Person></Person>
      <Person></Person>
      <Car></Car>
      <Person></Person>
       <Carlist></Carlist>
      
    </>
  )
}

function Person(){
  const name = "jolil";
  const age= 23;
  return(
    <p>i am a person: {name} {age}</p>
  )
}

function Car(){
  return(
    <div>
      <h3>Audi</h3>
      <p>this is my favorite car</p>
    </div>
  )
}

function Carlist(){
  return(
    <div>
      <ul>
        <li>Audi</li>
        <li>bmw</li>
        <li>mercedes</li>
      </ul>
    </div>
  )
}

export default App

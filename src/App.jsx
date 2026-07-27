
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
    <p className='person'>i am a person: {name} {age}</p>
  )
}

function Car(){
  const carStyle = {
    fontWeight:"bold",
    border:"1px solid green",
    margin:"10px"
  }
  return(
    <div style={carStyle}>
      <h3>Audi</h3>
      <p>this is my favorite car</p>
    </div>
  )
}

function Carlist(){
  return(
    <div>
      <ul style={{
        fontWeight:"bold",
    border:"5px solid white",
    borderRadius:"20px",
    margin:"10px"
      }}>
        <li>Audi</li>
        <li>bmw</li>
        <li>mercedes</li>
      </ul>
    </div>
  )
}

export default App

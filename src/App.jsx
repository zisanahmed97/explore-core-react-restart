
import './App.css'

function App() {
 

  return (
    <>
      <Person></Person>
      <Person></Person>
      <Car></Car>
      <Person></Person>
       <Carlist></Carlist>

       <Developer name="mojumdar" skill="C#"></Developer>
       <Developer name="rana" skill="java"></Developer>
       <Developer name="shabana" skill="React"></Developer>
      
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

function Developer(props){
  return(
    <div>
      <p>name:{props.name}</p>
      <p>skill:{props.skill}</p>
    </div>
  )
}

export default App

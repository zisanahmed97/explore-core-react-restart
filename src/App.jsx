
import './App.css'
import Singer from './Singer';
import ToDo from './ToDo';

function App() {
   const singers = [
    {id:"1" , name:"tahsan", age:"43"},
    {id:"2" , name:"pritom", age:"31"},
    {id: "3", name:"tabbu", age:"33"},
    {id:"4" , name:"james", age:"54"}
   ]

  return (
    <>
      {/* <Person></Person>
      <Person></Person>
      <Car></Car>
      <Person></Person>
       <Carlist></Carlist>

       <Developer name="mojumdar" skill="C#"></Developer>
       <Developer name="rana" skill="java"></Developer>
       <Developer name="shabana" skill="React"></Developer>

       <Player name="tamim" run="5000"></Player>
       <Player name="mushi" run="5000"></Player> */}
{/* 
       <ToDo task="task is react" isDone={true}></ToDo>
       <ToDo task="task is js" isDone={true}></ToDo>
       <ToDo task="task is html" isDone={false}></ToDo>
       <ToDo task="task is c#" isDone={true}></ToDo> */}

       {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
       }
      
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




//props destructuring
function Player({name, run}){
  return(
    <div className='person'>
      <p>Player Name:{name}</p>
      <p>run:{run}</p>
    </div>
  )
}

export default App

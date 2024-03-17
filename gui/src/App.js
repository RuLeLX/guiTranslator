import './styles/App.css'
import {useState, useRef} from "react";
import WindowText from "./components/WindowText";
import getProgram from "./API/getProgram";
import ListFiles from "./components/ListFiles";

function App() {
    const [speed, changeSpeed] = useState(1);
    const view_speed = useRef();

    const MoveScroll = ()=>{
        var value = view_speed.current.value;
        changeSpeed(value);
    }


    const Translating = ()=> {


    }

    return (<div id={"App"}>
            <WindowText id={"program"} label={"Программа"} textContent={""}/>
            <WindowText id={"leksem"} label={"Коды лексем"} textContent={""}/>

        <ListFiles/>

          <div id={"manipulators"}>
            <button id={"run_translator"} onClick={Translating}>Запуск</button>
              <label><input type={"range"} ref={view_speed} min={"1"} max={"10"}
                            defaultValue={"1"} onChange={MoveScroll}></input> {speed}x</label>
          </div>
            </div>);
}

export default App;

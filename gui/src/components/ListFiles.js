import triangle from '../images/triangle.png'
import '../styles/ListFiles.css';
import {useRef, useState} from "react";
import ListProgram from "./ListFiles/Variants";

export default function ListFiles(props) {

    const [showfiles, Show] = useState([
        {transition: "0.2s", opacity: "0"},
        {transition: "0.4s", opacity: "0"},
        {transition: "0.6s", opacity: "0"},
    ]);

    const triangle_in_head = useRef();

    var flag = true;

    const showList = () => {
        var triangle = triangle_in_head.current;

        if (flag){
            triangle.style.transform = "rotate(90deg)";

        }
        else {
            triangle.style.transform = "rotate(0deg)";
        }

        flag = !flag;
    }


    return <div className={"ListFiles"}>
        <div id={"head_list_program"}  onClick={showList}> <img src={triangle} ref={triangle_in_head}></img>
            <label>Выберите программу для трансляции</label>
        </div>
        <ListProgram data={showfiles}/>

    </div>
}
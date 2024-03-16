import FileIcon from '../images/FileIcon.png';
import triangle from '../images/triangle.png'
import '../styles/ListFiles.css';
import {useRef, useState} from "react";
export default function ListFiles(props) {

    const triangle_in_head = useRef();
    const list_program = useRef();

    var flag = true;
    const showList = () => {
        if (flag){
            triangle_in_head.current.style.transform = "rotate(90deg)";
        }
        else {
            triangle_in_head.current.style.transform = "rotate(0deg)";
        }
        flag = !flag;
    }


    return <div className={"ListFiles"}>
        <div id={"head_list_program"}  onClick={showList}> <img src={triangle} ref={triangle_in_head}></img>
            <label>Выберите программу для трансляции</label>
        </div>
        <ul id={"list_program"} ref={list_program}>
            <li><img src={FileIcon}/>Program.cs</li>
            <li><img src={FileIcon}/>main.cs</li>
            <li><img src={FileIcon}/>example.cs</li>
        </ul>


    </div>
}
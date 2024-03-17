import triangle from '../images/triangle.png'
import '../styles/ListFiles.css';
import {useEffect, useRef, useState} from "react";
import FileIcon from "../images/FileIcon.png";

export default function ListFiles() {

    const [showfiles, Show] = useState([
        {transition: "0.4s", opacity: "0"},
        {transition: "0.8s", opacity: "0"},
        {transition: "1.2s", opacity: "0"},
    ]);

    const triangle_in_head = useRef();


    const showList = () => {
        var triangle = triangle_in_head.current;
        triangle.style.transform = "rotate(90deg)";
        Show([
            {transition: "0.4s", opacity: "1"},
            {transition: "0.8s", opacity: "1"},
            {transition: "1.2s", opacity: "1"},
        ]);
    }

    return <div className={"ListFiles"}>
        <div id={"head_list_program"} onClick={showList}><img src={triangle} ref={triangle_in_head}></img>
            <label>Выберите программу для трансляции</label>
        </div>

        {showfiles.map(item =>
            <div className={"FileName"} style={item} onClick={()=>{
                Show([
                    {transition: "1.2s", opacity: "0"},
                    {transition: "0.8s", opacity: "0"},
                    {transition: "0.4s", opacity: "0"},
                ]);
            }}><img src={FileIcon}/>Program.cs</div>)}



    </div>
}
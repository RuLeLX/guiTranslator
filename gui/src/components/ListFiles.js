import triangle from '../images/triangle.png'
import '../styles/ListFiles.css';
import {useEffect, useRef, useState} from "react";
import FileIcon from "../images/FileIcon.png";

export default function ListFiles() {

    const [showfiles, Show] = useState([
        {transition: "0.5s", opacity: "0"},
        {transition: "1s", opacity: "0"},
        {transition: "1.5s", opacity: "0"},
    ]);

    useEffect(()=>{
        console.log("Изменилось состояние!")
    }, [showfiles])

    const triangle_in_head = useRef();
    var flag = true;


    const showList = () => {
        var triangle = triangle_in_head.current;

        if (flag){
            triangle.style.transform = "rotate(90deg)";

                Show([
                    {transition: "0.5s", opacity: "1"},
                    {transition: "1s", opacity: "1"},
                    {transition: "1.5s", opacity: "1"},
                ]);

        }
        else {
            triangle.style.transform = "rotate(0deg)";

            Show([
                {transition: "0.5s", opacity: "0"},
                {transition: "1s", opacity: "0"},
                {transition: "1.5s", opacity: "0"},
            ]);

        }

        flag = !flag;


    }

    return <div className={"ListFiles"}>
        <div id={"head_list_program"} onClick={showList}><img src={triangle} ref={triangle_in_head}></img>
            <label>Выберите программу для трансляции</label>
        </div>


        <div>
            <div className={"FileName"} style={{transition: showfiles[0].transition, opacity: showfiles[0].opacity}}><img
                src={FileIcon}/>Program.cs
            </div>
            <div className={"FileName"} style={{transition: showfiles[1].transition, opacity: showfiles[1].opacity}}><img
                src={FileIcon}/>main.cs
            </div>
            <div className={"FileName"} style={{transition: showfiles[2].transition, opacity: showfiles[2].opacity}}><img
                src={FileIcon}/>example.cs
            </div>
        </div>

    </div>
}
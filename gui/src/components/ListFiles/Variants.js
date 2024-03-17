import FileIcon from '../../images/FileIcon.png';
function ListProgram({data}) {

    return <div>
        <div className={"FileName"} style={`transition: ${data[0].transition}, opacity: ${data[0].opacity}`}><img
            src={FileIcon}/>Program.cs</div>
        <div className={"FileName"} style={`transition: ${data[1].transition}, opacity: ${data[1].opacity}`}><img
            src={FileIcon}/>main.cs</div>
        <div className={"FileName"} style={`transition: ${data[2].transition}, opacity: ${data[2].opacity}`}><img
            src={FileIcon}/>example.cs</div>
    </div>

}

export default ListProgram;
import '../styles/WindowText.css'

export function WindowText({id, label, textContent}) {

    return <div id={id}>
        <p>{label}</p>
        <div className={"Window"}>
            {textContent}
        </div>
    </div>

}

export default WindowText;
//this function getting program in C#
async function getProgram() {
    var data;
    await fetch("http://localhost:8000", "get").
    then((resolve)=>{
        return resolve;
    }).catch((error)=>{data = {
        text: "Oops! Does not exists program))"
    }});

    return data;

}
export default getProgram;
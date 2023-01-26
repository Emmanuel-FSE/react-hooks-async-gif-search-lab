import React,{useState} from "react";

function GifSearch({ passSearch }){
    const [input, setInput] = useState("")
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(){
        passSearch(input.toLocaleLowerCase())
    }
    return(
        <form >
            <div className="input-group mb-3">
                <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                <input onChange={handleChange} defaultValue={input} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
        </form>
    )
}

export default GifSearch;
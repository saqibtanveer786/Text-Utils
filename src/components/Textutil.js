import React from 'react'
import { useState } from 'react'
export default function Textutil(props) {
    const [Text, setText] = useState('Enter some text to analyze')
    const textChangeHandler = (e) =>{
        setText(e.target.value)
    }
    const clickHandler = (e) =>{
        if (e.target.value === 'Enter some text to analyze') {
            setText("")
        }
    }
    const toUpperCaseHandler = () =>{
        setText(Text.toUpperCase())
    }
    const toLowerCaseHandler = () =>{
        setText(Text.toLowerCase())
    }
    const clearText = () =>{
        setText("")
        props.sAlert('Text Cleared', 'danger')
    }
    const copyHandler = () =>{
        document.getElementById('exampleFormControlTextarea1').select()
        navigator.clipboard.writeText(Text)
    }
    const resHandler =() =>{
        let newText = Text.split(/[ ] + /)
        setText(newText.join(" "))
    }
    
    return (
            <>
        <div className="form-group container">
        <h1 className='pt-4' style={props.mode==='dark'?{color: 'white'}: {color: 'black'}}>Text Utils</h1>
            <textarea className="form-control text-dark my-2" id="exampleFormControlTextarea1" rows="10" style={props.mode==='dark'?{backgroundColor: '#c1c0c0'}: {backgroundColor: 'white'}}  onSelect={clickHandler} onChange={textChangeHandler} value={Text} ></textarea>
            <button className='btn btn-primary my-1 mx-2' disabled={Text==='Enter some text to analyze'||Text===""} onClick={toUpperCaseHandler}>To Upper Case</button>
            <button className='btn btn-primary my-1 mx-2' disabled={Text==='Enter some text to analyze'||Text===""} onClick={toLowerCaseHandler}>To Lower Case</button>
            <button className='btn btn-primary my-1 mx-2' disabled={Text==='Enter some text to analyze'||Text===""} onClick={clearText}>Clear All</button>
            <button className='btn btn-primary my-1 mx-2' disabled={Text==='Enter some text to analyze'||Text===""} onClick={copyHandler} >Copy Text</button>
            <button className='btn btn-primary my-1 mx-2' disabled={Text==='Enter some text to analyze'||Text===""} onClick={resHandler} >Remove Extra Spaces</button>
            
        </div>
        <div className='container my-4'>
            <h1 style={props.mode==='dark'?{color: 'white'}: {color: 'black'}}>Text Summary</h1>
            <p style={props.mode==='dark'?{color: 'white'}: {color: 'black'}} >{Text==='Enter some text to analyze'? 0 : Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text==='Enter some text to analyze'? 0 : Text.length} characters</p>
            <p style={props.mode==='dark'?{color: 'white'}: {color: 'black'}}>Readable in approximately {Text !== 'Enter some text to analyze'? Text.split(/\s+/).filter((element1)=>{return element1.length!==0}).length*0.008 : 0} Minutes</p>
            <h3 style={props.mode==='dark'?{color: 'white'}: {color: 'black'}}>Preview</h3>
            <p style={props.mode==='dark'?{color: 'white'}: {color: 'black'}}>{Text==='Enter some text to analyze'? "": Text }</p>
        </div>
        
        </>
    )
}

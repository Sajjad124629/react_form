import React, { useState } from 'react';

const From = (props) => {
    const [text,SetText] = useState('')
    const onclickhandler = () =>{
        //console.log('Clicked')
        let news = text.toUpperCase()
        SetText(news)
    }
    const onchagehandler = (event) =>{
        //console.log(event.target.value)
        SetText(event.target.value)
    }
    const onclickhandlerlow = () =>{
        //console.log('Clicked')
        let news = text.toLowerCase()
        SetText(news)
    }
        const onclickhandlecleare = () =>{
        //console.log('Clicked')
        let news = ''
        SetText(news)
    }
    const onclickhandlecapitalize = () =>{
        //console.log('Clicked')
        let news = text.charAt().toUpperCase()+text.slice(1)
      
        SetText(news)
    }
    const onclickhandlereverse = () =>{
        //console.log('Clicked')
        let news = text.split("").reverse().join("");
      
        SetText(news)
    }
    
    const onclickcopy = () =>{
        let text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    

    return (
        <>
        <div className='container'>

                <div className="mb-3">
                <label  className={`form-label text-${props.mode === 'light'? 'dark':'white'}`}>{props.lable}</label>
                <textarea style={{backgroundColor:props.mode==='light'? 'white':'grey',color:props.mode === 'light'? 'black':'white'}} onChange={onchagehandler} value={text} className="form-control" id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={onclickhandler}>Convert To uppercase</button>
            <button className='btn btn-primary mx-2' onClick={onclickhandlerlow}>Convert To LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={onclickhandlecleare}>Cleare</button>
            <button className='btn btn-primary mx-2' onClick={onclickhandlecapitalize}>Capitalize</button>
            <button className='btn btn-primary mx-2' onClick={onclickhandlereverse}>Reverse</button>
            <button className='btn btn-primary mx-2' onClick={onclickcopy}>Save text</button>
        </div>
        <div className="container">
            <h1 className={` text-${props.mode === 'light'? 'dark':'white'}`} >Text is uppon you</h1>
            <p className={` text-${props.mode === 'light'? 'dark':'white'}`}>{text.split(' ').length} word and {text.length} Charector</p>
            <p className={` text-${props.mode === 'light'? 'dark':'white'}`}>{0.008*text.split(' ').length} Minute Read</p>
            <h1 className={` text-${props.mode === 'light'? 'dark':'white'}`}>Preview</h1>
            <p className={` text-${props.mode === 'light'? 'dark':'white'}`}>{text}</p>
        </div>
        
        </>
    );
};

export default From;
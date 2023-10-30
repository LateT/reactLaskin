import { useState, useEffect } from 'react'
import './App.css'



const NumButton = (props) => {
    return (
        <>
            <button className="num" onClick={() => props.setText((formerTxt) => (formerTxt + props.num))} > {props.num} </button>
        </>
    )
}



const ActionButton = (props) => {
    return (
        <>
            
            
            <button className={(props.action == "=") ? "resultButton" : "num"} onClick={() => {
                if (props.action == "=") {
                    // calculate
                    try {
                        const calc = eval(props.txt);
                        console.log(calc);
                        props.setResult( () => {
                            return calc;
                        })
                    } catch(error) {
                        window.alert(error);
                    }
                } else {
                    // print + - * : and prevent consecutive + - * :
                    const lastChar = props.txt.charAt(props.txt.length - 1);
                    if ( !(lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*') ) {
                        props.setText((formerTxt) => formerTxt + props.action);
                    }
                }
            } }> {props.action}</button>
            
        </>
    )
}

const ResultScreen = (props) => {
    return (
        
        <>
            <div className="resultContainer">
                <div className="calculation">{props.calculation}</div>
                <div className="result">{props.result}</div>
                </div>
        </>
    )
}

const buttonBackspace = (text,setText) => {
    setText( (txt) => {
        return txt.slice(0,txt.length - 1);
    })
}

const buttonNumOrAction = (numOrAction,text,setText) => {
setText( (txt) => {
    return txt + numOrAction;
} )
}

const buttonCalculate = (text,setResult) => {
    try {
        const calc = eval(text);
        console.log(calc);
        setResult( () => {
            return calc;
        } )
    } catch (error) {
        window.alert(error);
    }
    
}

function App() {
    const [text, setText] = useState("");
    const [result,setResult] = useState("");
    useEffect(() => {
        const buttonHandler = (event) => {
            switch(event.key) {
                case "Backspace":
                    buttonBackspace(text,setText);
                    break;
                    case "1": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "2": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "3": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "4": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "5": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "6": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "7": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "8": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "9": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "0": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "+": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "-": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "*": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "/": buttonNumOrAction(event.key,text,setText);
                    break;
                    case "Enter": buttonCalculate(text,setResult);
            }
        }
        document.addEventListener('keydown',buttonHandler);
        return () => {
            document.removeEventListener('keydown',buttonHandler);
        }
    }, [text,setText,result,setResult]);
  return (
      <>
          <div className="container">
              <ResultScreen calculation={text} result={result} />
              <NumButton num={1} setText={setText} />
              <NumButton num={2} setText={setText} />
              <NumButton num={3} setText={setText} />
              <ActionButton action={"/"} setText={setText} txt={text} />
              <NumButton num={4} setText={setText} />
              <NumButton num={5} setText={setText} />
              <NumButton num={6} setText={setText} />
              <ActionButton action={"*"} setText={setText} txt={text} />
              <NumButton num={7} setText={setText} />
              <NumButton num={8} setText={setText} />
              <NumButton num={9} setText={setText} />
              <ActionButton action={"+"} setText={setText} txt={text} />
              <NumButton num={0} setText={setText} />
              <ActionButton action={"="} setText={setText} txt={text} setResult={setResult} />
              <ActionButton action={"-"} setText={setText} txt={text} />
              
              
          </div>
      </>
  )
}

export default App

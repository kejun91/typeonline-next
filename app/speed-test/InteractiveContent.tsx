"use client"

import React, { useState } from "react";
import { splitIntoChunks } from "../../utils/common";

const practiceTexts:{[key:string]:string} = {
    "number":"392.98* 504.48+ 260.78- 411.73+ 715.60+ 24.65- 743.68+ 219.15+ 821.53+ 779.67- 366.11- 415.55- 373.26+ 28.55+ 258.75- 711.56- 419.25+ 660.80- 781.56+ 736.97+ 185.49- 185.46/ 892.79+ 295.70- 732.21+ 255.99+ 849.45- 671.03+ 963.66- 703.01+ 308.49+ 871.94- 629.51- 405.56+ 604.16+ 907.13- 901.95+ 716.63- 495.00+ 509.08+ 86.60- 324.44/ 434.40/ 157.66+ 692.85* 619.37+ 274.15+ 726.87/ 24.05+",
    "word":`It is an ancient Mariner, And he stoppeth one of three. "By thy long grey beard and glittering eye, Now wherefore stopp'st thou me? The bridegroom's doors are opened wide, And I am next of kin; The guests are met, the feast is set: May'st hear the merry din." He holds him with his skinny hand, "There was a ship," quoth he. "Hold off! unhand me, grey-beard loon!" Eftsoons his hand dropt he.`
};

function fetchSampleTextContent(practiceType:string, practiceText:string) {
    if (practiceType === 'number') {
        return <table id="numberTable" width="100%" style={{ backgroundColor: "#ffffff", fontFamily: "Monaco" }}>
            {/* <colgroup char="." align="char" span={8} ></colgroup> */}
            <tbody>
            {splitIntoChunks(practiceText.split(" "), 7).map((row:any,i:any) => {
                return <tr className={i%2 === 1?"":"colouredRow"}>
                    {row.map((cell:any) => {
                        return <td>{cell}</td>;
                    })}
                </tr>;
            })}
            </tbody>
        </table>;
    } else if (practiceType === 'word') {
        return <p id="sampleText">{practiceText}</p>;
    }

    return <></>;
}

function evaluateResult(sampleText:string, userText:string) {
    const sampleArray = sampleText.split(" ");
    const userArray = userText.split(" ");
    
    // 1. Check completion
    const isCompleted = userArray.length >= sampleArray.length;
    
    // 2. Identify mistakes and duplicates
    const mistakes:any = [];
    const correctCounts:any = {};
    const duplicateCounts:any = {};
    
    sampleArray.forEach(item => correctCounts[item] = (correctCounts[item] || 0) + 1);
    
    userArray.forEach(item => {
        if (!correctCounts[item]) {
            mistakes.push(item);
        } else {
            duplicateCounts[item] = (duplicateCounts[item] || 0) + 1;
        }
    });
    
    const duplicates:any = [];
    Object.keys(duplicateCounts).forEach(item => {
        if (duplicateCounts[item] > correctCounts[item]) {
            duplicates.push(item);
        }
    });

    const accuracy = Math.round(100 - (100 * (mistakes.length / userArray.length)));
    const result:JSX.Element[] = [];
    if (mistakes.length === 0) {
        result.push(<>Accuracy: <b>100%</b><br /><br />You made no mistakes.<br /><br /></>);
    } else if (mistakes.length === 1) {
        result.push(<>Accuracy: <b>{accuracy}%</b><br /><br />You made <b>1</b> mistake. Your mistake is shown in <b>bold</b> text.<br /><br /></>);
    } else if (mistakes.length > 1) {
        result.push(<>Accuracy: <b>{accuracy}%</b><br /><br />You made <b>{mistakes.length}</b> mistakes. Your mistakes are shown in <b>bold</b> text.<br /><br /></>);
    } else {
        result.push(<></>);
    }

    if (userArray.length < sampleArray.length) {
        result.push(<><br/>You dis not complete the exercise<br/></>);
    } else if (duplicates.length > 0) {
        result.push(<>You repeated some numbers.<br /><br /></>);
    } 
    
    return {
        result,
        formattedUserInput: userArray.map((item, index) => {
            if (mistakes.includes(item)) {
                return <> <b>{item}</b> </>;
            } else {
                return <> {item} </>;
            }
        })
    };
};

interface Props {
    practiceType:string;
}

export default function InteractiveContent({ practiceType }: Props){
    const practiceText:string = practiceTexts[practiceType];
    const sampleTextContent = fetchSampleTextContent(practiceType, practiceTexts[practiceType]);

    const [result, setResult] = useState<JSX.Element[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [formattedInputValue, setFormattedInputValue] = useState<JSX.Element[]|null>(null);
    const [startTime, setStartTime] = useState<number|null>(null);
    const [wpm, setWpm] = useState<number|null>(null);

    return <>
        <div id="exerciseBox">
            {!startTime && formattedInputValue === null && <p id="instructions">When you are ready to begin the typing speed test, <span id="jsBlurb">click the <strong>Start the clock</strong> button,</span> copy the sample text below, and then click the <strong>Stop the clock</strong> button.<span id="ssBlurb"></span></p>
            }

            {startTime && <p id="instructions">The clock is running...</p>
            }

            {!startTime && formattedInputValue === null && <input type="button" id="startButton" onClick={(event) => {
                setStartTime(new Date().getTime());
                event.preventDefault();
            }} value="Start the clock"></input>}

            {startTime && <input type="button" id="stopButton" onClick={(event) => {
                const { result, formattedUserInput } = evaluateResult(practiceText, inputValue);
                const endTime = new Date().getTime();
                setWpm(Math.ceil((inputValue.length / 5)/(((endTime - startTime) * 0.001) / 60)));
                setResult(result);
                setFormattedInputValue(formattedUserInput);
                setStartTime(null);
                event.preventDefault();
            }} value="Stop the clock"></input>}

            {formattedInputValue !== null && <form id="nextButtonForm">
                <p>
                    <span id="nextButton">
                        <input type="submit" name="submitButton" value="New speed test" onClick={(event) => {
                            setInputValue("");
                            setFormattedInputValue(null);
                            setStartTime(null);
                            setWpm(null);
                            // set texts
                            event.preventDefault();
                        }} />
                    </span>
                </p>
            </form>}

            <form id="textDisplay" name="textDisplay">
                {formattedInputValue !== null && <p className="smaller">
                    <span id="speedWpm">Your speed was: <strong>{wpm}wpm</strong>.</span>
                    <span id="correctionsIntroduced">{result}</span>
                    <span id="correctedCopy">{formattedInputValue}</span>
                </p>}
                
                <div id="container" style={{ userSelect: "none" }}>
                    {sampleTextContent}
                    <br />
                    <span id="customerInput">
                        <textarea rows={5} id="copyTextInputBox" name="copyTextInputBox" style={{ fontSize: "1em", fontWeight: "normal" }} placeholder="type here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={startTime === null}/>
                    </span>
                </div>
            </form>
        </div>
    </>;
};
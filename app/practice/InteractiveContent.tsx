"use client"

import React, { useEffect, useState } from "react";
import { splitIntoChunks } from "../../utils/common";
import { fetchContent } from "../../utils/contents";

function fetchSampleTextContent(practiceType:string, practiceText:string) {
    if (practiceType === 'number') {
        return <table id="numberTable" width="100%" style={{ backgroundColor: "#ffffff", fontFamily: "Monaco" }}>
            {/* <colgroup char="." align="char" span={8} ></colgroup> */}
            <tbody>
            {splitIntoChunks(practiceText.split(" "), 7).map((row:any,i:any) => {
                return <tr key={i} className={i%2 === 1?"":"colouredRow"}>
                    {row.map((cell:any, index:any) => {
                        return <td key={index}>{cell}</td>;
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
    const [practiceText, setPracticeText] = useState("");
    const [sampleTextContent, setSampleTextContent] = useState(<></>);
    const [testChanged, setTestChanged] = useState(false);
    const [result, setResult] = useState<JSX.Element[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [formattedInputValue, setFormattedInputValue] = useState<JSX.Element[]|null>(null);

    useEffect(() => {
        const text = fetchContent(practiceType);
        setPracticeText(text);
        setSampleTextContent(fetchSampleTextContent(practiceType, text));
    },[testChanged]);

    return <>
        <div id="exerciseBox">
            {formattedInputValue === null && <span id="errorButton">
                <button onClick={() => {
                    const { result, formattedUserInput } = evaluateResult(practiceText, inputValue);
                    setResult(result);
                    setFormattedInputValue(formattedUserInput);
                }} >Show mistakes</button>
            </span>}

            {formattedInputValue !== null && <form id="nextButtonForm">
                <p>
                    <span id="nextButton">
                        <input type="submit" name="submitButton" value="next practice text" onClick={(event) => {
                            setInputValue("");
                            setFormattedInputValue(null);
                            setTestChanged(!testChanged);
                            event.preventDefault();
                        }} />
                    </span>
                </p>
            </form>}

            <form id="textDisplay" name="textDisplay">
                {formattedInputValue !== null && <p className="smaller">
                    <span id="correctionsIntroduced">{result}</span>
                    <span id="correctedCopy">{formattedInputValue}</span>
                </p>}
                <p className="smaller" id="instructions">
                    Please copy the text below<span id="clip">, then click the <strong>Show mistakes</strong> button</span>: </p>
                <div id="container" style={{ userSelect: "none" }}>
                    {sampleTextContent}
                    <br />
                    <span id="customerInput">
                        <textarea rows={5} id="copyTextInputBox" name="copyTextInputBox" style={{ fontSize: "1em", fontWeight: "normal" }} placeholder="type here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </span>
                </div>
            </form>
        </div>
    </>;
};
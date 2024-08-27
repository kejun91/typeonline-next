"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import { getFingerHintMessage, isAllowedChar } from "../utils/typing";
import React from "react";

interface ExerciseInteractiveContentProps {
    exerciseTexts: string[];
    layoutType?: string|undefined;
}

export default function InteractiveContent({ exerciseTexts, layoutType = 'US' }: ExerciseInteractiveContentProps){
    const selectExercisesRef = useRef<HTMLSelectElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [selectedExerciseText, setSelectedExerciseText] = useState(exerciseTexts[0]);

    const [startTimestamp, setStartTimestamp] = useState<number|null>(null);

    const [inputSequenceNumber, setInputSequenceNumber] = useState(0);
    const [expectedComingChar, setExpectedComingChar] = useState("");
    const [remainingText, setRemainingText] = useState("");
    const [mistakes, setMistakes] = useState<any[]>([]);
    const [wpm, setWpm] = useState<number|null>(null);
    const [includeRepeatBox, setIncludeRepeatBox] = useState(false);
    const [userErrorHint, setUserErrorHint] = useState("");
    const [userInputText, setUserInputText] = useState("");
    const [userPromptPrefix, setUserPromptPrefix] = useState("");
    const [userPromptKey, setUserPromptKey] = useState("");
    const [typingActivated, setTypingActivated] = useState(false);
    const [startButtonDisabled, setStartButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectExercisesRef.current) {
            selectExercisesRef.current.focus();
        }
    },[]);

    function evaluateInputChar(inputChar:string){
        if (inputChar) {
            if (inputSequenceNumber === 0) {
                setStartTimestamp(new Date().getTime());
            }

            if (inputChar !== expectedComingChar) {
                setMistakes([...mistakes, [inputChar === ' '?'SPACE':inputChar, expectedComingChar === ' '?'SPACE':expectedComingChar]]);
            }

            const nextExpectedChar = selectedExerciseText[inputSequenceNumber + 1];

            setExpectedComingChar(nextExpectedChar);
            setUserErrorHint(getFingerHintMessage(nextExpectedChar, layoutType));
            setInputSequenceNumber(inputSequenceNumber + 1);
            setUserPromptKey(nextExpectedChar === ' '?'SPACE':nextExpectedChar);
            setRemainingText(selectedExerciseText.slice(inputSequenceNumber + 2).substring(0,10));

            if (inputSequenceNumber === selectedExerciseText.length - 1) {
                const endTimestamp = new Date().getTime();
                if (startTimestamp){
                    setWpm(Math.ceil((selectedExerciseText.length / 5)/(((endTimestamp - startTimestamp) * 0.001) / 60)));
                }
                setUserPromptPrefix("Finished. ");
                setUserPromptKey("Well done!");
                setTypingActivated(false);
                setIncludeRepeatBox(true);
            }
        }
    }

    const initializeTypingData = useCallback(() => {
        setStartTimestamp(null);
        setMistakes([]);
        setWpm(null);
        setUserInputText("");
        setInputSequenceNumber(0);
        setIncludeRepeatBox(false);
        setExpectedComingChar(selectedExerciseText[0]);
        setRemainingText(selectedExerciseText.slice(1).substring(0,10));
        setUserPromptPrefix("Please type ...");
        setUserPromptKey(selectedExerciseText[0]);
        setUserErrorHint(getFingerHintMessage(selectedExerciseText[0], layoutType));
        setTypingActivated(false);
    }, [selectedExerciseText, layoutType]);

    useEffect(() => {
        initializeTypingData();
        setStartButtonDisabled(false);
    },[initializeTypingData]);

    useEffect(() => {
        if (inputRef.current && !inputRef.current.disabled) {
            inputRef.current.focus();
        }
    },[typingActivated]);

    return <div id="exerciseBox">
            <form id="theForm" >
                <p>
                    <label htmlFor="possExercises">Choose an Exercise: </label>
                    <select name="exercises" id="possExercises" tabIndex={1} ref={selectExercisesRef} onChange={(event) => {
                        setSelectedExerciseText(exerciseTexts[Number(event.target.value)]);
                    }}>
                        {exerciseTexts.map((t,index) => <option key={index} value={index}>Exercise {index + 1}</option>)}
                    </select>
                    <input type="button" name="tyonSubmitButton" id="tyonSubmitButton" value="Start" tabIndex={2} disabled={startButtonDisabled} onClick={() => {
                        setTypingActivated(true);
                        setStartButtonDisabled(true);
                    }}/>
                </p>
            </form>
            <span id="userPromptPrefix">{userPromptPrefix}</span> 
            <span id="userPromptKey">{userPromptKey}</span>
            <span id="comingTextBlock">{remainingText}</span>
            <br />
            <br />
            <input type="text" name="userInput" id="userInputBox" disabled={!typingActivated} onChange={(event) => {
                setUserInputText(event.target.value);
            }} onKeyDown={(event) => {
                if (isAllowedChar(event.key)) {
                    evaluateInputChar(event.key);
                } 
            }} placeholder="type here" value={userInputText} alt="Text entry box. Type your exercise here." tabIndex={3} ref={inputRef} autoComplete="off" /><br /><br />
            <span id="repeatOptionBox">
                {includeRepeatBox && <input type="button" id="repeatButton" name="repeatButton" value="Repeat" onClick={() => {
                    initializeTypingData();
                    setTypingActivated(true);
                }} onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        initializeTypingData();
                        setTypingActivated(true);
                    }
                }} />}
            </span>
            {userErrorHint && <span id="userErrorHint">{userErrorHint}</span>}
            {includeRepeatBox && <span id="userErrorHint"> ... click <strong>repeat</strong> or select another  exercise.</span>}
            {wpm && <span id="wpm">
                <br /><br />Typing speed: <b>{wpm} wpm</b>&nbsp;
            </span>}
            {wpm && <span id="mistakeWas">
                {!mistakes && <>Accuracy: <b>100%</b><br />You made no mistakes.</>}
                {mistakes.length === 1 && <>
                    Accuracy: <b>{Math.ceil(100 - mistakes.length/(selectedExerciseText.length/100))}&#037;</b><br /><br />You made <b>1</b> mistake. Your mistake was: <b> {mistakes[0][1]}</b> asked, <b>{mistakes[0][0]}</b> typed.
                </>}
                {mistakes.length > 1 && <>
                    Accuracy: <b>{Math.ceil(100 - mistakes.length/(selectedExerciseText.length/100))}&#037;</b><br /><br />You made <b>{mistakes.length}</b> mistakes. Your mistakes were: <br/>
                    {mistakes.map((m,i) => {
                        return <><br/>{i}. <b>{m[1]}</b> asked, <b>{m[0]}</b> typed.</>;
                    })}
                </>}
            </span>}
        </div>;
}
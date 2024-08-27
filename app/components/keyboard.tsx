import React from "react";

const numberRow = {
    "leftAdditionalKeys":[['`','~']],
    "leftMainKeys":[['1','!'],['2','@'],['3','#'],['4','$'],['5','%']],
    "rightMainKeys":[['6','^'],['7','&'],['8','*'],['9','('], ['0', ')']],
    "rightAdditionalKeys":[['-','_'],['=','+']]
};

const topRow = {
    "leftMainKeys":['q','w','e','r','t'],
    "rightMainKeys":['y','u','i','o','p'],
    "rightAdditionalKeys":[['[','{'],[']','}']]
};

const homeRow = {
    "leftMainKeys":['a','s','d','f','g'],
    "rightMainKeys":['h','j','k','l',[';',':']],
    "rightAdditionalKeys":[['\'','"'],['\\','|']]
};

const bottomRow = {
    "leftAdditionalKeys":[],
    "leftMainKeys":['z','x','c','v','b'],
    "rightMainKeys":['n','m',[',','<'],['.','>'],['/','?']]
};

type RowName = 'home'|'top'|'bottom'|'number';

interface KeyboardProps {
    row: RowName|RowName[]|'all';
    shifted: boolean;
    caption: string | undefined;
}

export default function Keyboard({ row, shifted = false, caption = undefined }: KeyboardProps) {
    let leftFingerHints = ['LF','RF','MF','IF','IF'];
    let rightFingerHints = ['IF','IF','MF','RF','LF'];

    if (row === 'all') {
        leftFingerHints = ['LF', ...leftFingerHints];
        rightFingerHints = [...rightFingerHints, 'LF','LF'];
    }

    return <table className="bracket" cellPadding="0" cellSpacing="1" border={0} id="keyboardPic">
        {caption && <caption>{caption}</caption>}
        <thead>
            <tr>
                <th colSpan={leftFingerHints.length}>LEFT HAND</th>
                <th colSpan={rightFingerHints.length}>RIGHT HAND</th>
            </tr>
            <tr>
                {
                    [...leftFingerHints, ...rightFingerHints].map((hint, index) => <th key={index}>{hint}</th>)
                }
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="spacer4"></td>
                <td className="grey">!</td>
                <td className="grey">@</td>
                <td className="grey">#</td>
                <td className="grey">$</td>
                <td className="grey">%</td>
                <td className="blue">^</td>
                <td className="blue">&amp;</td>
                <td className="blue">*</td>
                <td className="blue">(</td>
                <td className="blue">)</td>
                <td className="blue">_</td>
                <td className="blue">+</td>
            </tr>
            <tr>
                <td className="spacer4"></td>
                <td className="grey">Q</td>
                <td className="grey">W</td>
                <td className="grey">E</td>
                <td className="grey">R</td>
                <td className="grey">T</td>
                <td className="blue">Y</td>
                <td className="blue">U</td>
                <td className="blue">I</td>
                <td className="blue">O</td>
                <td className="blue">P</td>
                <td className="blue">&#123;</td>
                <td className="blue">&#125;</td>
            </tr>
            <tr>
                <td className="spacer4"></td>
                <td className="grey">A</td>
                <td className="grey">S</td>
                <td className="grey">D</td>
                <td className="grey">F</td>
                <td className="grey">G</td>
                <td className="blue">H</td>
                <td className="blue">J</td>
                <td className="blue">K</td>
                <td className="blue">L</td>
                <td className="blue">:</td>
                <td className="blue">&quot;</td>
                <td className="blue">|</td>
            </tr>
            <tr>
                <td className="grey">~</td>
                <td className="grey">Z</td>
                <td className="grey">X</td>
                <td className="grey">C</td>
                <td className="grey">V</td>
                <td className="grey">B</td>
                <td className="blue">N</td>
                <td className="blue">M</td>
                <td className="blue">&lt;</td>
                <td className="blue">&gt;</td>
                <td className="blue">?</td>
                <td className="spacer4"></td>
                <td className="spacer4"></td>
            </tr>
        </tbody>
    </table>;
};
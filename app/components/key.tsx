import React from "react";

interface KeyProps {
    side: "left" | "right" | undefined;
    value: string;
}

export default function Key({ side, value }: KeyProps) {
    // const className = "text-center font-bold border border-black px-[5px] " + (side === 'left'?'bg-[#ddaaff]':'bg-[#aacc00]');
    const style:any = {
        textAlign: 'center',
        fontWeight: 'bold',
        borderTop: 'solid 1px #000000',
        borderBottom: 'solid 1px #000000',
        borderLeft: 'solid 1px #000000',
        borderRight: 'solid 1px #000000',
        paddingLeft: '5px',
        paddingRight: '5px',
    };

    style.backgroundColor = side === 'left' ? '#ddaaff' : '#aacc00';
    
    return <span style={style}>{value}</span>;
};
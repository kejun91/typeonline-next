import React from "react";
import Lesson from "../../Lesson";
import { notFound } from "next/navigation";
import { titles } from "../../Titles";

type Props = {
    params: {
        keyboard: string;
        number: string;
    }
}

export default function WithSameLayout({ params }: Props) {
    const isValidKeyboardPage = params.keyboard === 'keyboard' && ['1','2','3','4'].includes(params.number);
    const isValidNumPadPage = params.keyboard === 'number-pad' && ['1','2'].includes(params.number);

    if (isValidKeyboardPage || isValidNumPadPage) {
        return <Lesson 
            pageId={"lessons/" + params.keyboard + "/" + params.number} 
            title={ titles[params.keyboard] + " - lesson " + params.number} 
        />
    } else {
        notFound();
    }
};
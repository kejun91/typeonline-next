import React from "react";
import Lesson from "../../../Lesson";
import { notFound } from "next/navigation";
import { titles } from "../../../Titles";

type Props = {
    params: {
        keyboard: string;
        number: string;
        layout: string;
    }
}

export default function WithDifferentLayout({ params }: Props){
    const isValidKeyboardPage = params.keyboard === 'keyboard' && params.number === '5' && ['uk-mac','uk-pc','us'].includes(params.layout);
    const isValidNumPadPage = params.keyboard === 'number-pad' && ['3','4'].includes(params.number) && ['big-plus','little-plus'].includes(params.layout);

    if (isValidKeyboardPage || isValidNumPadPage) {
        return <Lesson 
            pageId={"lessons/" + params.keyboard + "/" + params.number + "/" + params.layout} 
            title={ titles[params.keyboard] + " - lesson " + params.number} 
            layoutType={params.keyboard === 'keyboard'?params.layout:undefined}
        />
    } else {
        notFound();
    }
};
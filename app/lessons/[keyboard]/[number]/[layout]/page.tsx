import React from "react";
import { notFound } from "next/navigation";
import { titles } from "../../../Titles";
import MainContent from "@/app/MainContent";
import InteractiveContent from "@/app/lessons/InteractiveContent";
import { exerciseTexts } from "@/app/lessons/ExerciseTexts";

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
        const pageId = "lessons/" + params.keyboard + "/" + params.number + "/" + params.layout;
        return <MainContent pageId={pageId} title={titles[params.keyboard] + " - lesson " + params.number} >
            <InteractiveContent exerciseTexts={exerciseTexts[pageId]} 
                layoutType={params.keyboard === 'keyboard'?params.layout:undefined} />
        </MainContent>;
    } else {
        notFound();
    }
};
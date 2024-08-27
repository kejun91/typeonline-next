import React from "react";
import { notFound } from "next/navigation";
import { titles } from "../../Titles";
import MainContent from "@/app/MainContent";
import InteractiveContent from "../../InteractiveContent";
import { exerciseTexts } from "../../ExerciseTexts";

type Props = {
    params: {
        keyboard: string;
        number: string;
    }
}

export default function WithSameLayout({ params }: Props) {
    const isValidKeyboardPage = params.keyboard === 'keyboard' && ['1','2','3','4','5-us','5-uk-mac','5-uk-pc'].includes(params.number);
    const isValidNumPadPage = params.keyboard === 'number-pad' && ['1','2','3-little-plus','3-big-plus','4-little-plus','4-big-plus'].includes(params.number);

    if (isValidKeyboardPage || isValidNumPadPage) {
        const pageId = "lessons/" + params.keyboard + "/" + params.number;

        let layout = 'us';
        if (params.number.includes('uk-mac')) {
            layout = 'uk-mac';
        } else if (params.number.includes('uk-pc')) {
            layout = 'uk-pc';
        }

        return <MainContent pageId={pageId} title={titles[params.keyboard] + " - lesson " + params.number} >
            <InteractiveContent exerciseTexts={exerciseTexts[pageId]} layoutType={layout} />
        </MainContent>;
    } else {
        notFound();
    }
};
export const runtime = 'edge';

import React from "react";
import { notFound } from "next/navigation";
import { titles } from "../../Titles";
import MainContent from "@/app/MainContent";
import InteractiveContent from "../../InteractiveContent";
import { exerciseTexts } from "../../ExerciseTexts";

type Props = {
    params: Promise<{
        keyboard: string;
        number: string;
    }>
}

export default async function WithSameLayout({ params }: Props) {
    const { keyboard, number } = await params;
    const isValidKeyboardPage = keyboard === 'keyboard' && ['1','2','3','4','5-us','5-uk-mac','5-uk-pc'].includes(number);
    const isValidNumPadPage = keyboard === 'number-pad' && ['1','2','3-little-plus','3-big-plus','4-little-plus','4-big-plus'].includes(number);

    if (isValidKeyboardPage || isValidNumPadPage) {
        const pageId = "lessons/" + keyboard + "/" + number;

        let layout = 'us';
        if (number.includes('uk-mac')) {
            layout = 'uk-mac';
        } else if (number.includes('uk-pc')) {
            layout = 'uk-pc';
        }

        return <MainContent pageId={pageId} title={titles[keyboard] + " - lesson " + number} >
            <InteractiveContent exerciseTexts={exerciseTexts[pageId]} layoutType={layout} />
        </MainContent>;
    } else {
        notFound();
    }
};
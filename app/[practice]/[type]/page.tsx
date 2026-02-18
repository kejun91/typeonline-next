export const runtime = 'edge';

import React from "react";
import MainContent from "@/app/MainContent";
import PracticeInteractive from "../PracticeInteractive";
import SpeedTestInteractive from "../SpeedTestInteractive";

type Props = {
    params: Promise<{
        practice:string;
        type:string;
    }>
}

export default async function WithType({ params }: Props){
    const { practice, type } = await params;
    let title = '';
    if (practice === 'practice') {
        title = "Copy practice - with " + type + "s";
    } else if (practice === 'speed-test') {
        title = "Speed test";
    }

    return <MainContent pageId={practice + "/" + type} title={title}>
        {practice === 'practice' && <PracticeInteractive practiceType={type} />}
        {practice === 'speed-test' && <SpeedTestInteractive practiceType={type} />}
    </MainContent>;
};
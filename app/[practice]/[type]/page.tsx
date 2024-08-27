import React from "react";
import MainContent from "@/app/MainContent";
import PracticeInteractive from "../PracticeInteractive";
import SpeedTestInteractive from "../SpeedTestInteractive";

type Props = {
    params:{
        practice:string;
        type:string;
    }
}

export default function WithType({ params }: Props){
    let title = '';
    if (params.practice === 'practice') {
        title = "Copy practice - with " + params.type + "s";
    } else if (params.practice === 'speed-test') {
        title = "Speed test";
    }

    return <MainContent pageId={params.practice + "/" + params.type} title={title}>
        {params.practice === 'practice' && <PracticeInteractive practiceType={params.type} />}
        {params.practice === 'speed-test' && <SpeedTestInteractive practiceType={params.type} />}
    </MainContent>;
};
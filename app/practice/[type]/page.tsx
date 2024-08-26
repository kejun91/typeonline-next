import React from "react";
import MainContent from "@/app/MainContent";
import InteractiveContent from "../InteractiveContent";

type Props = {
    params: { type: string };
}

export default function WithType({ params } : Props) {
    return <MainContent pageId={"practice/" + params.type} title={"Copy practice - with " + params.type + "s"} >
        <InteractiveContent practiceType={params.type} />
    </MainContent>;
};
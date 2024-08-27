import React from "react";
import MainContent from "@/app/MainContent";
import InteractiveContent from "../InteractiveContent";

type Props = {
    params:{type:string;}
}

export default function WithType({ params }: Props){
    return <MainContent pageId={"speed-test/" + params.type} title={"Speed test"}>
        <InteractiveContent practiceType={params.type} />
    </MainContent>
};
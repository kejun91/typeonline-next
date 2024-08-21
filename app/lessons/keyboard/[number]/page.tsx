import React from "react";
import Lesson from "../../Lesson";
import { notFound } from "next/navigation";

type Props = {
    params: {
        number: string;
    }
}

export default ({ params }: Props) => {
    if (!['1','2','3','4'].includes(params.number)){
        notFound();
    } 

    return <>
        <Lesson pageId={"lessons/keyboard/" + params.number} title={"Keyboard - lesson " + params.number} />
    </>;
};
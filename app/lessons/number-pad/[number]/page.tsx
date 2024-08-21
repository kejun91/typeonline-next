import React from "react";
import Lesson from "../../Lesson";
import { notFound } from "next/navigation";

type Props = {
    params: {
        number:string;
    }
}

export default function WithSameLayout({ params }: Props){
    if (!['1','2'].includes(params.number)) {
        notFound();
    }
    return <>
        <Lesson pageId={"lessons/number-pad/" + params.number} title={"Number pad - lesson " + params.number} />
    </>;
};
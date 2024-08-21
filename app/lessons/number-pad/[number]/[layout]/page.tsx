import React from "react";
import Lesson from "../../../Lesson";
import { notFound } from "next/navigation";

type Props = {
    params: {
        number:string;
        layout:string;
    }
}

export default ({ params }: Props) => {
    if (!['3','4'].includes(params.number) || !['big-plus','little-plus'].includes(params.layout)) {
        notFound();
    }
    return <>
        <Lesson pageId={"lessons/number-pad/" + params.number + "/" + params.layout} title={"Number pad - lesson " + params.number} />
    </>;
};
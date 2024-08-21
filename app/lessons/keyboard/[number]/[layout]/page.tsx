import React from "react";
import Lesson from "../../../Lesson";
import { notFound } from "next/navigation";

type Props = {
    params: {
        number: string;
        layout: string;
    }
}

export default function WithDifferentLayout({ params }: Props){
    if (params.number !== '5' || !['uk-mac','uk-pc','us'].includes(params.layout)) {
        notFound();
    }

    return <>
        <Lesson pageId={"lessons/keyboard/5/" + params.layout} title={"Keyboard - lesson 5"} layoutType={params.layout}/>
    </>;
};
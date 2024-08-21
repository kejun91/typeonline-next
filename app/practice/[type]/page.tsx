import React from "react";
import Practice from "../Practice";

type Props = {
    params: { type: string };
}

export default function WithType({ params } : Props) {
    return <Practice pageId={"practice/" + params.type} title={"Copy practice - with " + params.type + "s"} type={params.type} />;
};
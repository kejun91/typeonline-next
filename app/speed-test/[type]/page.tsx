import React from "react";
import SpeedTest from "../SpeedTest";

type Props = {
    params:{type:string;}
}

export default ({ params }: Props) => {
    return <SpeedTest pageId={"speed-test/" + params.type} title={"Speed test"} type={params.type}/>;
};
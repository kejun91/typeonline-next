import React from "react";
import SideNavigation from "../../utils/SideNavigation";
import { speedTestContents } from "./SpeedTestContents";
import InteractiveContent from "./InteractiveContent";

interface SpeedTestProps {
    pageId: string;
    title: string;
    type: string;
}

export default ({ pageId, title, type }: SpeedTestProps) => {
    return <>
        <SideNavigation pageId={pageId} />
        <div id="mainContentBlock">
            <h3>{title}</h3>
            <InteractiveContent practiceType={type} />
            {speedTestContents[pageId]}
        </div>
    </>;
};
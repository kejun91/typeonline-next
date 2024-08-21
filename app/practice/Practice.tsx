import React from "react";
import SideNavigation from "../../utils/SideNavigation";
import { practiceContents } from "./PracticeContents";
import InteractiveContent from "./InteractiveContent";

interface PracticeProps {
    pageId: string;
    title: string;
    type: string;
}

export default ({ pageId, title, type }: PracticeProps) => {
    return <>
        <SideNavigation pageId={pageId} />
        <div id="mainContentBlock">
            <h3>{title}</h3>
            <InteractiveContent practiceType={type} />
            {practiceContents[pageId]}
        </div>
    </>;
};
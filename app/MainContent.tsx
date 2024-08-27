import React, { PropsWithChildren } from "react";
import SideNavigation from "./SideNavigation";
import { staticContents } from "./StaticContent";

interface MainContentProps extends PropsWithChildren {
    pageId: string;
    title: string;
}

export default function MainContent({ pageId, title, children }: MainContentProps){
    return <>
        <SideNavigation pageId={pageId} />
        <div id="mainContentBlock">
            <h3>{title}</h3>
            {children}
            {staticContents[pageId]}
        </div>
    </>;
};
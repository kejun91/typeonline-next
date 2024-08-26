import React from "react";
import SideNavigation from "../SideNavigation";
import InteractiveContent from "./InteractiveContent";
import { exerciseTexts } from "./ExerciseTexts";
import { lessonContents } from "./LessonContents";

interface LessonProps {
    pageId: string;
    title: string;
    layoutType?: string;
}

export default function Lesson({ pageId, title, layoutType }: LessonProps){
    return <>
        <SideNavigation pageId={pageId} />
        <div id="mainContentBlock">
            <h3>{title}</h3>
            <InteractiveContent exerciseTexts={exerciseTexts[pageId]} layoutType={layoutType} />
            {lessonContents[pageId]}
        </div>
    </>;
};
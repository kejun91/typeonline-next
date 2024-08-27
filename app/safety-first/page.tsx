import SideNavigation from "../SideNavigation";
import { staticContents } from "../StaticContent";

export const runtime = 'edge';

export default function SafetyFirstPage() {
    return <>
        <SideNavigation pageId={"safety-first"} />
        <div id="frontMatter">
            {staticContents['/safety-first']}
        </div>
    </>;
}

import SideNavigation from "../SideNavigation";
import { staticContents } from "../StaticContent";

export const runtime = 'edge';

export default function AboutPage() {
    return <>
        <SideNavigation pageId={"about"} />
        <div id="frontMatter">
            {staticContents['/about']}
        </div>
    </>;
}

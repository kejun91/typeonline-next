export const runtime = 'edge';

import Image from 'next/image';
import SideNavigation from "@/utils/SideNavigation";

export default function Home() {
    return (
        <main>
            <SideNavigation pageId={"home"} />
            <div id="frontMatter">
                <h3>We offer:</h3>
                <ul>
                    <li><strong>a structured touch typing course</strong> for motivated individuals looking to develop their keyboard
                        skills.</li>
                    <li><strong>a free resource</strong> to aid supervised keyboarding education in schools, companies, and
                        organizations.
                    </li>
                </ul>
                <ul id="bottom">
                    <li>
                        <a href="http://www.edna.edu.au/" tabIndex={15}>
                            <Image style={{ border: "0px" }} 
                                src="/images/edna_logo.gif"
                                alt="EdNA Online" 
                                height={81} width={84}
                                title="Education Network Australia (EdNA) has determined Typeonline to be a resource useful for teaching and learning." />
                        </a>
                    </li>
                    <li><Image style={{ border: "0px" }} src="/images/ngfl.gif"
                        alt="National Grid for Learning" height={38} width={108}
                        title="Typeonline is part of the National Grid for Learning (NGfL)." /></li>
                    <li><Image height={31} width={88} src="/images/wcag1AA.gif"
                        title="Typeonline conforms to the Web Content Accessibility Guidelines (WCAG) developed by the Web Accessibility Initiative (WAI)."
                        alt="Level AA conformance icon, W3C-WAI Web Content Accessibility Guidelines 1.0" /></li>
                </ul>
                <small>Dublin Core used here.</small>
            </div>
        </main>
    );
}

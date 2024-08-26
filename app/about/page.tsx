import SideNavigation from "../SideNavigation";

export const runtime = 'edge';

export default function AboutPage() {
    return <>
        <SideNavigation pageId={"about"} />
        <div id="frontMatter">
            <p><i>This site was revamped under the domain typeonline.uk on 20th August 2024.</i> <a href="mailto:diphth@gmail.com">Contact</a> for any questions.</p>
            <h3>About us</h3>
            <p>
                Typeonline was designed and implemented by Dave Bartlett, a web developer based in Hampshire, and began as a small
                in-house project intended to do no more than keep the rust from the author&apos;s keyboard skills.</p>
            <p>Discussions with family and friends convinced him that a free online typing tutorial would provide a useful
                resource to a wider audience, and led to revisions of the initial typing practice routine into the full featured
                offering of Typeonline.</p>
            <h3>Academic authority</h3>
            <p>We are proud to say that both Education Network Australia (<a href="http://www.edna.edu.au/">EdNA</a>)
                [edna.edu.au], and the National Grid for Learning (NGfL), have assessed Typeonline and judged our offering to be
                <em>a quality educational resource</em>.
            </p>
            <h3>Copyright statement</h3>
            <p>
                The <a href="/practice/word">copy practice</a> and <a href="/speed-test/word">speed test</a> exercises use exerpts of published works for their sample texts; the copyright of those exerpts belongs to their authors.</p><p>The copyright of all other material on this website belongs to Dave Bartlett. All rights reserved.
            </p>
            <h3>Data protection statement - privacy policy</h3>
            <p>Typeonline is based in the UK and subject to the Data Protection Act.</p>
            <blockquote>
                <p>
                    The Data Protection Act 1998 states that anyone processing personal data must comply with the eight enforceable principles of good practice. These state that data must be:
                </p>
                    <ol><li> fairly and lawfully processed</li>
                        <li> processed for limited purposes</li>
                        <li> adequate, relevant and not excessive</li>
                        <li> accurate</li>
                        <li> not kept longer than necessary</li>
                        <li> processed in accordance with the data subject&apos;s rights</li>
                        <li> secure</li>
                        <li> not transferred to countries without adequate protection.</li>
                    </ol>
            </blockquote>
        </div>
    </>;
}

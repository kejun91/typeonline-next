import SideNavigation from "../SideNavigation";

export const runtime = 'edge';

export default function SafetyFirstPage() {
    return <>
        <SideNavigation pageId={"safety-first"} />
        <div id="frontMatter">
            <h3>Safety first</h3>
            <p>As computer use has increased both at work and home in recent years Repetitive Strain Injury (RSI) has become associated with keyboard use. To reduce your risk of developing <abbr title="Repetitive Strain Injury">RSI</abbr> or other overuse injuries you should follow best practice in posture, technique, workstation set-up,  and take regular breaks.</p>
            <p>Listen to your body. If typing causes you pain, stop. If the pain persists, consult your doctor.</p>
            <ul><li><a href="http://www.nhs.uk/conditions/Repetitive-strain-injury/Pages/Introduction.aspx" tabIndex={1} title="National Health Service (NHS)">Repetitive strain injury (RSI)</a> [nhs.uk]</li>
                <li><a href="http://www.hse.gov.uk/msd/uld/" tabIndex={2} title="Health &amp; Safety Executive">Upper limb disorders (ULDs)</a> [hse.gov.uk]</li></ul>
            <br />
            <h3>Posture &amp; technique</h3>
            <p>
                Sit with your back straight and your feet, either flat on the floor or on a foot rest. You should be  arms length, 12-30 inches (25-75cm), from your computer monitor (VDU). Raise the monitor (VDU) so the your eyes are level with the top of the screen. Make sure the F and J keys of the keyboard are immediately opposite the middle of your body.
            </p>
            <p>
                When typing, keep your elbows close to your body, wrists and forearms level. After striking each key return your fingers to their <em>resting</em> position over the <strong>home row</strong>.</p>
            <ul><li><a href="http://www.osha.gov/SLTC/etools/computerworkstations/positions.html" tabIndex={3} title="US Department of Labor">Good working positions</a> [osha.gov]</li>
                <li><a href="http://www.nhs.uk/Livewell/workplacehealth/Pages/Howtositcorrectly.aspx" tabIndex={4} title="National Health Service (NHS)">How to sit correctly</a> [nhs.uk]</li>
                <li><a href="http://www.alexandertechniqueworldwide.com/" tabIndex={5} title="The International Affiliated Societies of Teachers of the Alexander Technique">The Alexander Technique</a> [alexandertechniqueworldwide.com]</li>
            </ul>
            <br />
            <h3>Take regular breaks</h3>
            <p>
                It is desirable to avoid staying in one position for extended periods. Break up your day by alternating tasks when possible.</p><p>It may help you to use software to remind yourself to take a break from your keyboard.
            </p>

            <ul>
                <li>MS Windows: <a href="http://download.cnet.com/Workrave/3000-2051_4-73765.html" tabIndex={6} title="CNET Downloads">Work Rave</a> [cnet.com]</li>
                <li>Mac OS X: <a href="http://download.cnet.com/Dejal-Time-Out/3000-2129_4-41634.html?tag=mncol;7" tabIndex={7} title="CNET  Downloads">Time out!</a> [cnet.com]</li>
                <li>Linux/X11: <a href="http://www.lcdf.org/~eddietwo/xwrits/" tabIndex={8} title="Little Cambridgeport Design Factory.">Xwrits</a> [lcdf.org]</li>
            </ul>
        </div>
    </>;
}

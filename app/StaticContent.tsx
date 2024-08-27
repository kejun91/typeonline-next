import React from "react";
import Key from "./components/key";

export const staticContents:{[key:string]:JSX.Element} = {
    "lessons/keyboard/1": <>
        <p>The <strong>home row</strong> of the keyboard is the most important to the
            touch-typist.</p><p>When at rest the typist&apos;s fingers are positioned,
                lightly, on the <Key side={"left"} value={"A"} />-<Key side={"left"} value={"S"} />-<Key side={"left"} value={"D"} />-<Key side={"left"} value={"F"} /> keys for the
            <strong>left hand</strong>, and the <Key side={"right"} value={"J"} />-<Key side={"right"} value={"K"} />-<Key side={"right"} value={"L"} />-<Key side={"right"} value={";"} /> keys
            for the <strong>right hand</strong>.</p>
        <ul className="keys">
            <li>The <strong>left index finger</strong> will control the
                <Key side={"left"} value={"F"} /> and <Key side={"left"} value={"G"} /> keys, the <strong>right index
                    finger</strong> will control the <Key side={"right"} value={"J"} /> and <Key side={"right"} value={"H"} />
                keys.</li>
            <li>The <strong>left middle finger</strong> will control the
                <Key side={"left"} value={"D"} /> key, the <strong>right middle
                    finger</strong> will control the <Key side={"right"} value={"K"} /> key.</li>
            <li>The <strong>left ring finger</strong> will control the
                <Key side={"left"} value={"S"} /> key, the <strong>right ring
                    finger</strong> will control the <Key side={"right"} value={"L"} /> key.</li>
            <li>The <strong>left little finger</strong> will control the
                <Key side={"left"} value={"A"} /> key, the <strong>right little
                    finger</strong> will control the <Key side={"right"} value={";"} /> key.</li>
            <li>The <Key side={"right"} value={"spacebar"} /> is controlled by the
                <strong>right thumb</strong>.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>The home row.</caption>
                <thead>
                    <tr><th colSpan={5} id="left">LEFT HAND</th><th colSpan={5} id="right">RIGHT HAND</th></tr>
                    <tr><th headers="left" id="leftLittle">LF</th><th headers="left" id="leftRing">RF</th><th headers="left" id="leftMiddle">MF</th><th headers="left" id="leftIndex1">IF</th><th headers="left" id="leftIndex2">IF</th><th headers="right" id="rightIndex2">IF</th><th headers="right" id="rightIndex1">IF</th><th headers="right" id="rightMiddle">MF</th><th headers="right" id="rightRing">RF</th><th headers="right" id="rightLittle">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="grey" headers="leftLittle">A</td><td className="grey" headers="leftRing">S</td><td className="grey" headers="leftMiddle">D</td><td className="grey" headers="leftIndex1">F</td><td className="grey" headers="leftIndex2">G</td><td className="blue" headers="rightIndex2">H</td><td className="blue" headers="rightIndex1">J</td><td className="blue" headers="rightMiddle">K</td><td className="blue" headers="rightRing">L</td><td className="blue" headers="rightLittle">;</td>
                    </tr>
                </tbody></table>
        </div>
        <br />
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />
        <p>The <Key side={"left"} value={"F"} /> and <Key side={"right"} value={"J"} /> keys often
            have <strong>small raised bumps</strong> on their tops, a
            tactile aid for the typist.</p>
        <p>The locations of all the other keys on the keyboard are learned
            in relation to these <strong>home keys</strong> so the touch-typist must be able
            to find the <strong>home keys</strong> by touch.</p>
        <p>Using the <strong>raised
            bumps</strong> on the <Key side={"left"} value={"F"} /> and <Key side={"right"} value={"J"} />
            keys as a guide, see if you can put your fingers on
            the <strong>home row</strong> correctly, <em>without looking at the keyboard</em>. No
            peeking.</p>
        <p>Make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/keyboard/2":<>
        <p>The third row of the keyboard is a celebrity in our midst. The <Key side={"left"} value={"Q"} />-<Key side={"left"} value={"W"} />-<Key side={"left"} value={"E"} />-<Key side={"left"} value={"R"} />-<Key side={"left"} value={"T"} />-<Key side={"right"} value={"Y"} /> row.</p>
        <p>
            The keys of early typewriters were, sensibly enough, laid out in alphabetical order. The impetus
            for change was not exactly the yearning for blistering speed that has brought us
            together here today, but rather necessity. Early typewriters were mechanical
            and prone to jamming. The QWERTY layout solved that problem by spreading the popular
            keys across the board, inadvertently creating an ideal layout for distributing
            the effort of typing to all ten fingers rather than the traditional hunt and peck method.
            Progress and fate hand in hand once more.</p>
        <ul className="keys">
            <li>The <strong>left index finger</strong> will control the
                <Key side={"left"} value={"R"} /> and <Key side={"left"} value={"T"} /> keys, the <strong>right index
                    finger</strong> will control the <Key side={"right"} value={"Y"} /> and <Key side={"right"} value={"U"} />
                keys.</li>

            <li>The <strong>left middle finger</strong> will control the
                <Key side={"left"} value={"E"} /> key, the <strong>right middle
                    finger</strong> will control the <Key side={"right"} value={"I"} /> key.</li>

            <li>The <strong>left ring finger</strong> will control the
                <Key side={"left"} value={"W"} /> key, the <strong>right ring
                    finger</strong> will control the <Key side={"right"} value={"O"} /> key.</li>
            <li>The <strong>left little finger</strong> will control the
                <Key side={"left"} value={"Q"} /> key, the <strong>right little
                    finger</strong> will control the <Key side={"right"} value={"P"} /> key.</li></ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding={0} cellSpacing={1} border={0}>
                <caption>The QWERTY row.</caption>
                <thead>
                    <tr><th colSpan={5} id="left">LEFT HAND</th><th colSpan={5} id="right">RIGHT HAND</th></tr>
                    <tr><th headers="left" id="leftLittle">LF</th><th headers="left" id="leftRing">RF</th><th headers="left" id="leftMiddle">MF</th><th headers="left" id="leftIndex1">IF</th><th headers="left" id="leftIndex2">IF</th><th headers="right" id="rightIndex2">IF</th><th headers="right" id="rightIndex1">IF</th><th headers="right" id="rightMiddle">MF</th><th headers="right" id="rightRing">RF</th><th headers="right" id="rightLittle">LF</th></tr>
                </thead>
                <tbody><tr>
                    <td className="grey" headers="leftLittle">Q</td><td className="grey" headers="leftRing">W</td><td className="grey" headers="leftMiddle">E</td><td className="grey" headers="leftIndex1">R</td><td className="grey" headers="leftIndex2">T</td><td className="blue" headers="rightIndex2">Y</td><td className="blue" headers="rightIndex1">U</td><td className="blue" headers="rightMiddle">I</td><td className="blue" headers="rightRing">O</td><td className="blue" headers="rightLittle">P</td>
                </tr>
                    <tr>
                        <td className="grey" headers="leftLittle">A</td><td className="grey" headers="leftRing">S</td><td className="grey" headers="leftMiddle">D</td><td className="grey" headers="leftIndex1">F</td><td className="grey" headers="leftIndex2">G</td><td className="blue" headers="rightIndex2">H</td><td className="blue" headers="rightIndex1">J</td><td className="blue" headers="rightMiddle">K</td><td className="blue" headers="rightRing">L</td><td className="blue" headers="rightLittle">;</td>
                    </tr>
                </tbody></table></div>
        <br />
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />

        <p>In our last lesson we learned the locations of the <strong>home row</strong> keys,
            enough in themselves to allow us to type some words without
            looking at the keyboard already.</p>
        <p>The QWERTY row, as well as being the most celebrated on the
            keyboard is also the hardest working. Four of the five vowels,
            <Key side={"left"} value={"E"} />-<Key side={"right"} value={"I"} />-<Key side={"right"} value={"O"} />-<Key side={"right"} value={"U"} /> are to be found in this row. After completing the second
            lesson you should discover that you are already well on the
            way to being a touch typist and your fingers are becoming ever more
            adept at finding the right key without your conscious thought.</p>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level.</p>
        <p>As before, you may find it helpful to <em>quietly</em> say the name of
            the key as you strike it. Don&apos;t let your mistakes cause you to
            lose heart, touch-typing is a skill that can be learned by
            practice.</p>
        <p>Repeat each exercise at least three times, and remember - <a href="/safety-first">take regular breaks</a>.</p>
    </>,
    "lessons/keyboard/3":<>
        <p>The first row of the keyboard, the <Key side={"left"} value={"Z"} />-<Key side={"left"} value={"X"} />-<Key side={"left"} value={"C"} />-<Key side={"left"} value={"V"} />-<Key side={"left"} value={"B"} /> row
            cannot claim the importance in the pursuit of touch typing
            of the <strong>home row</strong>. Nor can it contest the international fame
            or high profile of the hard working <strong>QWERTY row</strong>. But there is one way in which it can surpass them both. Once you have mastered the
            first row <strong>you will have learned all the alpha keys on the keyboard</strong>,
            the most popular punctuation keys, and have completed three lessons of our
            five lesson course. <em>Bravo!</em></p>
        <p>In keeping with the intensive nature of our course, and to keep your
            interest at a fever pitch, we shall introduce capitals in this lesson.
            Your keyboard should have two shift keys, one to the left, one to the right.
            The proficient typist will use the little finger of their inactive hand
            to work one of the shift keys when capitals are needed. </p>
        <p>So, if you are to type a <strong>capital R</strong>, you will strike the <Key side={"left"} value={"R"} /> key with the <strong>index finger of your left hand</strong> whilst depressing the <strong>shift key</strong>
            with the <strong>little finger of your right hand</strong>. A team game for the opposing forces of left and right.</p>
        <ul className="keys">
            <li>The <strong>left index finger</strong> will control the
                <Key side={"left"} value={"V"} /> and <Key side={"left"} value={"B"} /> keys, and the <strong>right index
                    finger</strong> will control the <Key side={"right"} value={"N"} /> and <Key side={"right"} value={"M"} />
                keys.</li>
            <li>The <strong>left middle finger</strong> will control the
                <Key side={"left"} value={"C"} /> key, and the <strong>right middle
                    finger</strong> will control the <Key side={"right"} value={","} /> key.</li>
            <li>The <strong>left ring finger</strong> will control the
                <Key side={"left"} value={"X"} /> key, and the <strong>right ring
                    finger</strong> will control the <Key side={"right"} value={"."} /> key.</li>
            <li>The <strong>left little finger</strong> will control the
                <Key side={"left"} value={"Z"} /> key, and the <strong>right little
                    finger</strong> will control the <Key side={"right"} value={"/"} /> key.</li>
            <li>The <Key side="left" value={"left shift key"} /> is controlled by the
                <strong>left little finger</strong> and the <Key side={"right"} value={"right shift key"} /> is controlled by the <strong>right little finger</strong></li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <thead>
                    <tr><th colSpan={5} id="left">LEFT HAND</th><th colSpan={5} id="right">RIGHT HAND</th></tr>
                    <tr><th headers="left" id="leftLittle">LF</th><th headers="left" id="leftRing">RF</th><th headers="left" id="leftMiddle">MF</th><th headers="left" id="leftIndex1">IF</th><th headers="left" id="leftIndex2">IF</th><th headers="right" id="rightIndex2">IF</th><th headers="right" id="rightIndex1">IF</th><th headers="right" id="rightMiddle">MF</th><th headers="right" id="rightRing">RF</th><th headers="right" id="rightLittle">LF</th></tr>
                </thead>
                <tbody><tr>
                    <td className="grey" headers="leftLittle">Q</td><td className="grey" headers="leftRing">W</td><td className="grey" headers="leftMiddle">E</td><td className="grey" headers="leftIndex1">R</td><td className="grey" headers="leftIndex2">T</td><td className="blue" headers="rightIndex2">Y</td><td className="blue" headers="rightIndex1">U</td><td className="blue" headers="rightMiddle">I</td><td className="blue" headers="rightRing">O</td><td className="blue" headers="rightLittle">P</td>
                </tr>
                    <tr>
                        <td className="grey" headers="leftLittle">A</td><td className="grey" headers="leftRing">S</td><td className="grey" headers="leftMiddle">D</td><td className="grey" headers="leftIndex1">F</td><td className="grey" headers="leftIndex2">G</td><td className="blue" headers="rightIndex2">H</td><td className="blue" headers="rightIndex1">J</td><td className="blue" headers="rightMiddle">K</td><td className="blue" headers="rightRing">L</td><td className="blue" headers="rightLittle">;</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle">Z</td><td className="grey" headers="leftRing">X</td><td className="grey" headers="leftMiddle">C</td><td className="grey" headers="leftIndex1">V</td><td className="grey" headers="leftIndex2">B</td><td className="blue" headers="rightIndex2">N</td><td className="blue" headers="rightIndex1">M</td><td className="blue" headers="rightRing">,</td><td className="blue" headers="rightLittle">.</td><td className="blue" headers="rightLittle">/</td>
                    </tr>
                </tbody></table></div>
        <br />
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />
        <p>Some people find the downward stretching for the new finger positions
            awkward at first but it soon passes.</p>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
        <p>Once again, you may find it helpful to <em>quietly</em> say the name of
            the key as you strike it. Don&apos;t let your mistakes cause you to
            lose heart, touch-typing is a skill that can be learned by
            practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/keyboard/4":<>
        <p>In our first three lessons we covered the first three rows of the keyboard.
            This being our fourth lesson, we shall, in keeping with custom, cover the fourth
            row. The <strong>number row</strong>.</p>
        <ul className="keys">
            <li>The <strong>left index finger</strong> will control the
                <Key side={"left"} value={"4"} /> and <Key side={"left"} value={"5"} /> keys,  the <strong>right index
                    finger</strong> will control the <Key side={"right"} value={"6"} /> and <Key side={"right"} value={"7"} />
                keys.</li>
            <li>The <strong>left middle finger</strong> will control the
                <Key side={"left"} value={"3"} /> key, the <strong>right middle
                    finger</strong> will control the <Key side={"right"} value={"8"} /> key.</li>
            <li>The <strong>left ring finger</strong> will control the
                <Key side={"left"} value={"2"} /> key, the <strong>right ring
                    finger</strong> will control the <Key side={"right"} value={"9"} /> key.</li>
            <li>The <strong>left little finger</strong> will control the
                <Key side={"left"} value={"1"} /> key, the <strong>right little
                    finger</strong> will control the <Key side={"right"} value={"0"} /> key.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0} id="keyboardPic">
                <caption>The number row.</caption>
                <thead>
                    <tr><th colSpan={5} id="left">LEFT HAND</th><th colSpan={5} id="right">RIGHT HAND</th></tr>
                    <tr><th headers="left" id="leftLittle">LF</th><th headers="left" id="leftRing">RF</th><th headers="left" id="leftMiddle">MF</th><th headers="left" id="leftIndex1">IF</th><th headers="left" id="leftIndex2">IF</th><th headers="right" id="rightIndex2">IF</th><th headers="right" id="rightIndex1">IF</th><th headers="right" id="rightMiddle">MF</th><th headers="right" id="rightRing">RF</th><th headers="right" id="rightLittle">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="grey" headers="leftLittle">1</td><td className="grey" headers="leftRing">2</td><td className="grey" headers="leftMiddle">3</td><td className="grey" headers="leftIndex1">4</td><td className="grey" headers="leftIndex2">5</td><td className="blue" headers="rightIndex2">6</td><td className="blue" headers="rightIndex1">7</td><td className="blue" headers="rightMiddle">8</td><td className="blue" headers="rightRing">9</td><td className="blue" headers="rightLittle">0</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle">Q</td><td className="grey" headers="leftRing">W</td><td className="grey" headers="leftMiddle">E</td><td className="grey" headers="leftIndex1">R</td><td className="grey" headers="leftIndex2">T</td><td className="blue" headers="rightIndex2">Y</td><td className="blue" headers="rightIndex1">U</td><td className="blue" headers="rightMiddle">I</td><td className="blue" headers="rightRing">O</td><td className="blue" headers="rightLittle">P</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle">A</td><td className="grey" headers="leftRing">S</td><td className="grey" headers="leftMiddle">D</td><td className="grey" headers="leftIndex1">F</td><td className="grey" headers="leftIndex2">G</td><td className="blue" headers="rightIndex2">H</td><td className="blue" headers="rightIndex1">J</td><td className="blue" headers="rightMiddle">K</td><td className="blue" headers="rightRing">L</td><td className="blue" headers="rightLittle">;</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle">Z</td><td className="grey" headers="leftRing">X</td><td className="grey" headers="leftMiddle">C</td><td className="grey" headers="leftIndex1">V</td><td className="grey" headers="leftIndex2">B</td><td className="blue" headers="rightIndex2">N</td><td className="blue" headers="rightIndex1">M</td><td className="blue" headers="rightRing">,</td><td className="blue" headers="rightLittle">.</td><td className="blue" headers="rightLittle">/</td>
                    </tr>
                </tbody></table></div>
        <br />
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />

        <p><strong>The number row</strong> presents a unique challenge to the typist. It
            is the furthest from the typist&apos;s fingers&apos; resting position, the <strong>home row</strong>.
            These exercises will try to accustom you to the <em>range</em>
            of movement your fingers must achieve when dealing with a mixture of alpha-numeric
            keystrokes.</p>
        <p>We shall also, in this lesson, build on our use of the shift keys and capital
            letters introduced in the last lesson. To test your geography, and because we
            felt the pun too fine to overlook we shall make extensive use of capital cities, in our practice
            of capital letters.</p>
        <p>While your fingers hone their skills you can also dream a little as
            names of far flung places evoke memory and imagination. What wonders these
            places may hold, what customs its people practice, and what mysteries you might
            there unravel.</p>
        <p>When you are ready to begin the lesson select an exercise
            and strike the key requested. Try not to look at the
            keyboard, it will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
        <p>As before, you may find it helpful to <em>quietly</em> say the name of
            the key as you strike it. Don&apos;t let your mistakes cause you to
            lose heart, touch-typing is a skill that can be learned by
            practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/keyboard/5/uk-mac":<>
        <h4><a href="/lessons/keyboard/5/uk-pc">UK PC Keyboard</a>&nbsp;| UK Apple Mac Keyboard&nbsp;| <a href="/lessons/keyboard/5/us">US Keyboard</a></h4>
        <p><strong>Different keyboards</strong> touch typing assumes that all keyboards have the same layout. There is clearly no point in learning to touch type if you cannot expect the keyboards to be laid out in a uniform manner. However, while the QWERTY layout is widely used around the world and almost exclusively in the English speaking world, there <em>are</em> slight variations which are relevant to this lesson, so look at the menu above and click on your keyboard type.</p>
        <p>This is the last lesson in our touch typing course. We hope you have found learning to type with Typeonline enjoyable.
            You should by now have learned to be comfortable with touch typing. Hands on the keyboard, eyes
            on the screen. Both your accuracy and your speed will improve with practice.
        </p>
        <p>
            The exercises in this lesson focus on character keys. It will be of particular
            use to those involved in computer programming and we have used snippets of computer
            code for some of the exercises.</p>
        <p>There are a small number of new keys to learn in this lesson. They are operated by the two <strong>little fingers</strong> so they may feel themselves overworked today.</p>
        <ul className="keys">
            <li>The <strong>left little finger</strong> will control the
                <Key side={"left"} value={"`"} /> key, the <strong>right little
                    finger</strong> will control the <Key side={"right"} value={"-"} />, <Key side={"right"} value={"="} />, <Key side={"right"} value={"["} />, <Key side={"right"} value={"]"} />, <Key side={"right"} value={"'"} />, and <Key side={"right"} value={"\\"} /> keys.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Lowercase - the shift key is NOT held down.</caption>
                <thead>
                    <tr><th colSpan={6} id="leftLower">LEFT HAND</th><th colSpan={7} id="rightlower">RIGHT HAND</th></tr>
                    <tr><th headers="leftLower" id="leftLittle2lower">LF</th><th headers="leftLower" id="leftLittlelower">LF</th><th headers="leftLower" id="leftRinglower">RF</th>
                        <th headers="leftLower" id="leftMiddlelower">MF</th><th headers="leftLower" id="leftIndex1lower">IF</th><th headers="leftlower" id="leftIndex2lower">IF</th><th headers="rightlower" id="rightIndex2lower">IF</th><th headers="rightlower" id="rightIndex1lower">IF</th><th headers="right" id="rightMiddlelower">MF</th><th headers="rightlower" id="rightRinglower">RF</th><th headers="rightlower" id="rightLittlelower">LF</th><th headers="rightlower" id="rightLittle2lower">LF</th><th headers="rightlower" id="rightLittle3lower">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="spacer4" headers="leftLittle2lower"></td><td className="grey" headers="leftLittlelower">1</td><td className="grey" headers="leftRinglower">2</td><td className="grey" headers="leftMiddlelower">3</td><td className="grey" headers="leftIndex1lower">4</td><td className="grey" headers="leftIndex2lower">5</td><td className="blue" headers="rightIndex2lower">6</td><td className="blue" headers="rightIndex1lower">7</td><td className="blue" headers="rightMiddlelower">8</td><td className="blue" headers="rightRinglower">9</td><td className="blue" headers="rightLittlelower">0</td><td className="blue" headers="rightLittle2lower">-</td><td className="blue" headers="rightLittle3lower">=</td>
                    </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2lower"></td><td className="grey" headers="leftLittlelower">q</td><td className="grey" headers="leftRinglower">w</td><td className="grey" headers="leftMiddlelower">e</td><td className="grey" headers="leftIndex1lower">r</td><td className="grey" headers="leftIndex2lower">t</td><td className="blue" headers="rightIndex2lower">y</td><td className="blue" headers="rightIndex1lower">u</td><td className="blue" headers="rightMiddlelower">i</td><td className="blue" headers="rightRinglower">o</td><td className="blue" headers="rightLittlelower">p</td><td className="blue" headers="rightLittle2lower">[</td><td className="blue" headers="rightLittle3lower">]</td>
                    </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2lower"></td><td className="grey" headers="leftLittlelower">a</td><td className="grey" headers="leftRinglower">s</td><td className="grey" headers="leftMiddlelower">d</td><td className="grey" headers="leftIndex1lower">f</td><td className="grey" headers="leftIndex2lower">g</td><td className="blue" headers="rightIndex2lower">h</td><td className="blue" headers="rightIndex1lower">j</td><td className="blue" headers="rightMiddlelower">k</td><td className="blue" headers="rightRinglower">l</td><td className="blue" headers="rightLittlelower">;</td><td className="blue" headers="rightLittle2lower">&apos;</td><td className="blue" headers="rightLittle3lower">\</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle2lower">`</td><td className="grey" headers="leftLittlelower">z</td><td className="grey" headers="leftRinglower">x</td><td className="grey" headers="leftMiddlelower">c</td><td className="grey" headers="leftIndex1lower">v</td><td className="grey" headers="leftIndex2lower">b</td><td className="blue" headers="rightIndex2">n</td><td className="blue" headers="rightIndex1lower">m</td><td className="blue" headers="rightMiddlelower">,</td><td className="blue" headers="rightRinglower">.</td><td className="blue" headers="rightLittlelower">/</td><td className="spacer4" headers="rightLittle2lower"></td><td className="spacer4" headers="rightLittle3lower"></td>
                    </tr></tbody>
            </table><br />
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0} id="keyboardPic">
                <caption>UPPERCASE -  the shift key IS held down.</caption>
                <thead>
                    <tr><th colSpan={6} id="left">LEFT HAND</th><th colSpan={7} id="right">RIGHT HAND</th></tr>
                    <tr><th headers="left" id="leftLittle2">LF</th><th headers="left" id="leftLittle">LF</th><th headers="left" id="leftRing">RF</th>
                        <th headers="left" id="leftMiddle">MF</th><th headers="left" id="leftIndex1">IF</th><th headers="left" id="leftIndex2">IF</th><th headers="right" id="rightIndex2">IF</th><th headers="right" id="rightIndex1">IF</th><th headers="right" id="rightMiddle">MF</th><th headers="right" id="rightRing">RF</th><th headers="right" id="rightLittle">LF</th><th headers="right" id="rightLittle2">LF</th><th headers="right" id="rightLittle3">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="spacer4" headers="leftLittle2"></td><td className="grey" headers="leftLittle">!</td><td className="grey" headers="leftRing">@</td><td className="grey" headers="leftMiddle">£</td><td className="grey" headers="leftIndex1">$</td><td className="grey" headers="leftIndex2">%</td><td className="blue" headers="rightIndex2">^</td><td className="blue" headers="rightIndex1">&amp;</td><td className="blue" headers="rightMiddle">*</td><td className="blue" headers="rightRing">(</td><td className="blue" headers="rightLittle">)</td><td className="blue" headers="rightLittle2">_</td><td className="blue" headers="rightLittle3">+</td>
                    </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2"></td><td className="grey" headers="leftLittle">Q</td><td className="grey" headers="leftRing">W</td><td className="grey" headers="leftMiddle">E</td><td className="grey" headers="leftIndex1">R</td><td className="grey" headers="leftIndex2">T</td><td className="blue" headers="rightIndex2">Y</td><td className="blue" headers="rightIndex1">U</td><td className="blue" headers="rightMiddle">I</td><td className="blue" headers="rightRing">O</td><td className="blue" headers="rightLittle">P</td><td className="blue" headers="rightLittle2">&#123;</td><td className="blue" headers="rightLittle3">&#125;</td>
                    </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2"></td><td className="grey" headers="leftLittle">A</td><td className="grey" headers="leftRing">S</td><td className="grey" headers="leftMiddle">D</td><td className="grey" headers="leftIndex1">F</td><td className="grey" headers="leftIndex2">G</td><td className="blue" headers="rightIndex2">H</td><td className="blue" headers="rightIndex1">J</td><td className="blue" headers="rightMiddle">K</td><td className="blue" headers="rightRing">L</td><td className="blue" headers="rightLittle">:</td><td className="blue" headers="rightLittle2">&quot;</td><td className="blue" headers="rightLittle3">|</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle2">~</td><td className="grey" headers="leftLittle">Z</td><td className="grey" headers="leftRing">X</td><td className="grey" headers="leftMiddle">C</td><td className="grey" headers="leftIndex1">V</td><td className="grey" headers="leftIndex2">B</td><td className="blue" headers="rightIndex2">N</td><td className="blue" headers="rightIndex1">M</td><td className="blue" headers="rightMiddle">&lt;</td><td className="blue" headers="rightRing">&gt;</td><td className="blue" headers="rightLittle">?</td><td className="spacer4" headers="rightLittle2"></td><td className="spacer4" headers="rightLittle3"></td>
                    </tr></tbody>
            </table><br />
        </div>
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />

        <p>When you are ready to begin the lesson, select an exercise
            and strike the key requested. Try not to look at the
            keyboard, it will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
        <p>As always, you may find it helpful to <em>quietly</em> say the name of
            the key as you strike it. Don&apos;t let your mistakes cause you to
            lose heart, touch-typing is a skill that can be learned by
            practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/keyboard/5/uk-pc":<>
        <h4>UK PC Keyboard&nbsp;| <a href="/lessons/keyboard/5/uk-mac">UK Apple Mac Keyboard</a>&nbsp;| <a href="/lessons/keyboard/5/us">US Keyboard</a></h4>
        <p><strong>Different keyboards</strong> touch-typing assumes that all keyboards have the same layout. There is clearly no point in training yourself to touch-type if you cannot expect the keyboards to be laid out in a uniform manner. However, while the <abbr>QWERTY</abbr> layout is widely used around the world and almost exclusively in the English speaking world, there <em>are</em> slight variations which are relevant to this lesson, so look at the menu above and click on your keyboard type.</p>
        <p>This is the last lesson in our touch-typing course. We hope you have found it enjoyable.
            You should by now be comfortable with touch-typing. Hands on the keyboard, eyes
            on the screen. Both your accuracy and your speed will improve with practice.
        </p>
        <p>
            The exercises in this lesson focus on character keys. It will be of particular
            use to those involved in computer programming and we have used snippets of computer
            code for some of the exercises.</p>
        <div className="keyboard">
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Lowercase - the shift key is NOT held down.</caption>
                <thead>
                    <tr><th colSpan={6} id="leftLower">LEFT HAND</th><th colSpan={7} id="rightlower">RIGHT HAND</th></tr>
                    <tr><th headers="leftLower" id="leftLittle2lower">LF</th><th headers="leftLower" id="leftLittlelower">LF</th><th headers="leftLower" id="leftRinglower">RF</th>
                        <th headers="leftLower" id="leftMiddlelower">MF</th><th headers="leftLower" id="leftIndex1lower">IF</th><th headers="leftlower" id="leftIndex2lower">IF</th><th headers="rightlower" id="rightIndex2lower">IF</th><th headers="rightlower" id="rightIndex1lower">IF</th><th headers="right" id="rightMiddlelower">MF</th><th headers="rightlower" id="rightRinglower">RF</th><th headers="rightlower" id="rightLittlelower">LF</th><th headers="rightlower" id="rightLittle2lower">LF</th><th headers="rightlower" id="rightLittle3lower">LF</th></tr>
                </thead>
                <tbody><tr>
                    <td className="spacer4" headers="leftLittle2lower"></td><td className="grey" headers="leftLittlelower">1</td><td className="grey" headers="leftRinglower">2</td><td className="grey" headers="leftMiddlelower">3</td><td className="grey" headers="leftIndex1lower">4</td><td className="grey" headers="leftIndex2lower">5</td><td className="blue" headers="rightIndex2lower">6</td><td className="blue" headers="rightIndex1lower">7</td><td className="blue" headers="rightMiddlelower">8</td><td className="blue" headers="rightRinglower">9</td><td className="blue" headers="rightLittlelower">0</td><td className="blue" headers="rightLittle2lower">-</td><td className="blue" headers="rightLittle3lower">=</td>
                </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2lower"></td><td className="grey" headers="leftLittlelower">q</td><td className="grey" headers="leftRinglower">w</td><td className="grey" headers="leftMiddlelower">e</td><td className="grey" headers="leftIndex1lower">r</td><td className="grey" headers="leftIndex2lower">t</td><td className="blue" headers="rightIndex2lower">y</td><td className="blue" headers="rightIndex1lower">u</td><td className="blue" headers="rightMiddlelower">i</td><td className="blue" headers="rightRinglower">o</td><td className="blue" headers="rightLittlelower">p</td><td className="blue" headers="rightLittle2lower">[</td><td className="blue" headers="rightLittle3lower">]</td>
                    </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2lower"></td><td className="grey" headers="leftLittlelower">a</td><td className="grey" headers="leftRinglower">s</td><td className="grey" headers="leftMiddlelower">d</td><td className="grey" headers="leftIndex1lower">f</td><td className="grey" headers="leftIndex2lower">g</td><td className="blue" headers="rightIndex2lower">h</td><td className="blue" headers="rightIndex1lower">j</td><td className="blue" headers="rightMiddlelower">k</td><td className="blue" headers="rightRinglower">l</td><td className="blue" headers="rightLittlelower">;</td><td className="blue" headers="rightLittle2lower">&apos;</td><td className="blue" headers="rightLittle3lower">#</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle2lower">\</td><td className="grey" headers="leftLittlelower">z</td><td className="grey" headers="leftRinglower">x</td><td className="grey" headers="leftMiddlelower">c</td><td className="grey" headers="leftIndex1lower">v</td><td className="grey" headers="leftIndex2lower">b</td><td className="blue" headers="rightIndex2lower">n</td><td className="blue" headers="rightIndex1lower">m</td><td className="blue" headers="rightMiddlelower">,</td><td className="blue" headers="rightRinglower">.</td><td className="blue" headers="rightLittlelower">/</td><td className="spacer4" headers="rightLittle2lower"></td><td className="spacer4" headers="rightLittle3lower"></td>
                    </tr></tbody>
            </table><br />
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0} id="keyboardPic">
                <caption>UPPERCASE -  the shift key IS held down.</caption>
                <thead>
                    <tr><th colSpan={6} id="left">LEFT HAND</th><th colSpan={7} id="right">RIGHT HAND</th></tr>
                    <tr><th headers="left" id="leftLittle2">LF</th><th headers="left" id="leftLittle">LF</th><th headers="left" id="leftRing">RF</th>
                        <th headers="left" id="leftMiddle">MF</th><th headers="left" id="leftIndex1">IF</th><th headers="left" id="leftIndex2">IF</th><th headers="right" id="rightIndex2">IF</th><th headers="right" id="rightIndex1">IF</th><th headers="right" id="rightMiddle">MF</th><th headers="right" id="rightRing">RF</th><th headers="right" id="rightLittle">LF</th><th headers="right" id="rightLittle2">LF</th><th headers="right" id="rightLittle3">LF</th></tr>
                </thead>
                <tbody><tr>
                    <td className="spacer4" headers="leftLittle2"></td><td className="grey" headers="leftLittle">!</td><td className="grey" headers="leftRing">&quot;</td><td className="grey" headers="leftMiddle">£</td><td className="grey" headers="leftIndex1">$</td><td className="grey" headers="leftIndex2">%</td><td className="blue" headers="rightIndex2">^</td><td className="blue" headers="rightIndex1">&amp;</td><td className="blue" headers="rightMiddle">*</td><td className="blue" headers="rightRing">(</td><td className="blue" headers="rightLittle">)</td><td className="blue" headers="rightLittle2">_</td><td className="blue" headers="rightLittle3">+</td>
                </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2"></td><td className="grey" headers="leftLittle">Q</td><td className="grey" headers="leftRing">W</td><td className="grey" headers="leftMiddle">E</td><td className="grey" headers="leftIndex1">R</td><td className="grey" headers="leftIndex2">T</td><td className="blue" headers="rightIndex2">Y</td><td className="blue" headers="rightIndex1">U</td><td className="blue" headers="rightMiddle">I</td><td className="blue" headers="rightRing">O</td><td className="blue" headers="rightLittle">P</td><td className="blue" headers="rightLittle2">&#123;</td><td className="blue" headers="rightLittle3">&#125;</td>
                    </tr>
                    <tr>
                        <td className="spacer4" headers="leftLittle2"></td><td className="grey" headers="leftLittle">A</td><td className="grey" headers="leftRing">S</td><td className="grey" headers="leftMiddle">D</td><td className="grey" headers="leftIndex1">F</td><td className="grey" headers="leftIndex2">G</td><td className="blue" headers="rightIndex2">H</td><td className="blue" headers="rightIndex1">J</td><td className="blue" headers="rightMiddle">K</td><td className="blue" headers="rightRing">L</td><td className="blue" headers="rightLittle">:</td><td className="blue" headers="rightLittle2">@</td><td className="blue" headers="rightLittle3">~</td>
                    </tr>
                    <tr>
                        <td className="grey" headers="leftLittle2">|</td><td className="grey" headers="leftLittle">Z</td><td className="grey" headers="leftRing">X</td><td className="grey" headers="leftMiddle">C</td><td className="grey" headers="leftIndex1">V</td><td className="grey" headers="leftIndex2">B</td><td className="blue" headers="rightIndex2">N</td><td className="blue" headers="rightIndex1">M</td><td className="blue" headers="rightMiddle">&lt;</td><td className="blue" headers="rightRing">&gt;</td><td className="blue" headers="rightLittle">?</td><td className="spacer4" headers="rightLittle2"></td><td className="spacer4" headers="rightLittle3"></td>
                    </tr></tbody>
            </table><br />
        </div>
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />

        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin the lesson, select an exercise
            and strike the key requested. Try not to look at the
            keyboard, it will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>

        <p>As always, you may find it helpful to <em>quietly</em> say the name of
            the key as you strike it. Don&apos;t let your mistakes cause you to
            lose heart, touch-typing is a skill that can be learned by
            practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/keyboard/5/us":<>
        <h4><a href="/lessons/keyboard/5/uk-pc">UK PC Keyboard</a>&nbsp;| <a href="/lessons/keyboard/5/uk-mac">UK Apple Mac Keyboard</a>&nbsp;| US Keyboard</h4>
        <p><strong>Different keyboards</strong> touch-typing assumes that all keyboards have the same layout. There is clearly no point in training yourself to touch-type if you cannot expect the keyboards to be laid out in a uniform manner. However, while the QWERTY layout is widely used around the world and almost exclusively in the English speaking world, there <em>are</em> slight variations which are relevant to this lesson, so look at the menu above and click on your keyboard type.</p>
        <p>This is the last lesson in our touch-typing course. We hope you have found it enjoyable.
            You should by now be comfortable with touch-typing. Hands on the keyboard, eyes
            on the screen. Both your accuracy and your speed will improve with practice.
        </p>
        <p>
            The exercises in this lesson focus on character keys. It will be of particular
            use to those involved in computer programming and we have used snippets of computer
            code for some of the exercises.</p>
        <div className="keyboard">
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Lowercase - the shift key is NOT held down.</caption>
                <thead>
                <tr><th colSpan={6}>LEFT HAND</th><th colSpan={7}>RIGHT HAND</th></tr><tr><th>LF</th><th>LF</th><th>RF</th>
                    <th>MF</th><th>IF</th><th>IF</th><th>IF</th><th>IF</th><th>MF</th><th>RF</th><th>LF</th><th>LF</th><th>LF</th></tr>
                    </thead>
                <tbody>
                <tr>
                    <td className="spacer4"></td><td className="grey">1</td><td className="grey">2</td><td className="grey">3</td><td className="grey">4</td><td className="grey">5</td><td className="blue">6</td><td className="blue">7</td><td className="blue">8</td><td className="blue">9</td><td className="blue">0</td><td className="blue">-</td><td className="blue">=</td>
                </tr>
                <tr>
                    <td className="spacer4"></td><td className="grey">q</td><td className="grey">w</td><td className="grey">e</td><td className="grey">r</td><td className="grey">t</td><td className="blue">y</td><td className="blue">u</td><td className="blue">i</td><td className="blue">o</td><td className="blue">p</td><td className="blue">[</td><td className="blue">]</td>
                </tr>
                <tr>
                    <td className="spacer4"></td><td className="grey">a</td><td className="grey">s</td><td className="grey">d</td><td className="grey">f</td><td className="grey">g</td><td className="blue">h</td><td className="blue">j</td><td className="blue">k</td><td className="blue">l</td><td className="blue">;</td><td className="blue">&apos;</td><td className="blue">\</td>
                </tr>
                <tr>
                    <td className="grey">`</td><td className="grey">z</td><td className="grey">x</td><td className="grey">c</td><td className="grey">v</td><td className="grey">b</td><td className="blue">n</td><td className="blue">m</td><td className="blue">,</td><td className="blue">.</td><td className="blue">/</td><td className="spacer4"></td><td className="spacer4"></td>
                </tr>
                </tbody>
            </table><br />
            <table className="bracket" cellPadding="0" cellSpacing="1" border={0} id="keyboardPic">
                <caption>UPPERCASE -  the shift key IS held down.</caption>
                <thead>
                <tr><th colSpan={6}>LEFT HAND</th><th colSpan={7}>RIGHT HAND</th></tr><tr><th>LF</th><th>LF</th><th>RF</th>
                    <th>MF</th><th>IF</th><th>IF</th><th>IF</th><th>IF</th><th>MF</th><th>RF</th><th>LF</th><th>LF</th><th>LF</th></tr>
                </thead>
                <tbody>
                <tr>
                    <td className="spacer4"></td><td className="grey">!</td><td className="grey">@</td><td className="grey">#</td><td className="grey">$</td><td className="grey">%</td><td className="blue">^</td><td className="blue">&amp;</td><td className="blue">*</td><td className="blue">(</td><td className="blue">)</td><td className="blue">_</td><td className="blue">+</td>
                </tr>
                <tr>
                    <td className="spacer4"></td><td className="grey">Q</td><td className="grey">W</td><td className="grey">E</td><td className="grey">R</td><td className="grey">T</td><td className="blue">Y</td><td className="blue">U</td><td className="blue">I</td><td className="blue">O</td><td className="blue">P</td><td className="blue">&#123;</td><td className="blue">&#125;</td>
                </tr>
                <tr>
                    <td className="spacer4"></td><td className="grey">A</td><td className="grey">S</td><td className="grey">D</td><td className="grey">F</td><td className="grey">G</td><td className="blue">H</td><td className="blue">J</td><td className="blue">K</td><td className="blue">L</td><td className="blue">:</td><td className="blue">&quot;</td><td className="blue">|</td>
                </tr>
                <tr>
                    <td className="grey">~</td><td className="grey">Z</td><td className="grey">X</td><td className="grey">C</td><td className="grey">V</td><td className="grey">B</td><td className="blue">N</td><td className="blue">M</td><td className="blue">&lt;</td><td className="blue">&gt;</td><td className="blue">?</td><td className="spacer4"></td><td className="spacer4"></td>
                </tr>
                </tbody>
            </table><br />
        </div>
        <label htmlFor="keyboardPic">LF = little finger,
            RF = ring finger,
            MF = middle finger,
            IF = index finger</label>
        <br />
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin the lesson, select an exercise
            and strike the key requested. Try not to look at the
            keyboard, it will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>As always, you may find it helpful to <em>quietly</em> say the name of
            the key as you strike it. Don&apos;t let your mistakes cause you to
            lose heart, touch-typing is a skill that can be learned by
            practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/number-pad/1":<>
        <p>The <strong>number pad</strong> keys are arranged in four columns and five rows. In our first lesson we will cover the <Key side={"left"} value={"4"} />-<Key side={"right"} value={"5"} />-<Key side={"left"} value={"6"} />-<Key side={"right"} value={"+"} /> row.</p>
        <p>When at rest the fingers of the typist&apos;s <strong>right hand</strong> are positioned,
            lightly, on the <Key side={"left"} value={"4"} />-<Key side={"right"} value={"5"} />-<Key side={"left"} value={"6"} />-<Key side={"right"} value={"+"} /> keys.</p>
        <ul className="keys">
            <li>The <strong>right index
                finger</strong> will control the <Key side={"left"} value={"4"} />
                key.</li>
            <li>The <strong>right middle
                finger</strong> will control the <Key side={"right"} value={"5"} /> key.</li>
            <li>The <strong>right ring
                finger</strong> will control the <Key side={"left"} value={"6"} /> key.</li>
            <li>The <strong>right little
                finger</strong> will control the <Key side={"right"} value={"+"} /> key.</li>
            <li>The <Key side={"right"} value={"0"} /> is controlled by the
                <strong>right thumb</strong>.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Numberpad</caption>
                <thead>
                    <tr>
                        <th id="index-finger">IF</th><th id="middle-finger">MF</th><th id="ring-finger">RF</th><th id="little-finger">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="index-finger" className="grey">4</td><td headers="middle-finger" className="blue">5</td><td headers="ring-finger" className="grey">6</td><td className="blue">+</td></tr>
                </tbody>
            </table>
        </div>
        <br />
        <label htmlFor="keyboardPic">IF = index finger,
            MF = middle finger,
            RF = ring finger,
            LF = little finger</label>
        <br />
        <p>The <Key side={"right"} value={"5"} /> key often
            has a <strong>small raised bump</strong> on its top, a
            tactile aid for the typist.</p>
        <p>The locations of all the other keys on the number pad are learned
            in relation to this <strong>home key</strong> so the touch-typist must be able
            to locate the <strong>home key</strong> by touch.</p>
        <p>Using the <strong>raised
            bump</strong> on the <Key side={"right"} value={"5"} />
            key as a guide, see if you can correctly place your fingers on
            the  <Key side={"left"} value={"4"} />-<Key side={"right"} value={"5"} />-<Key side={"left"} value={"6"} />-<Key side={"right"} value={"+"} /> keys <em>without looking at the keyboard</em>. No
            peeking.</p>
        <p>Before you start the exercises make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/number-pad/2":<>
        <p>In our second lesson we will cover the <Key side={"left"} value={"1"} />-<Key side={"right"} value={"2"} />-<Key side={"left"} value={"3"} /> row and the <Key side={"left"} value={"."} /> key.</p>
        <ul className="keys">
            <li>The <strong>right index
                finger</strong> will control the <Key side={"left"} value={"1"} />
                key.</li>
            <li>The <strong>right middle
                finger</strong> will control the <Key side={"right"} value={"2"} /> key.</li>
            <li>The <strong>right ring
                finger</strong> will control the <Key side={"left"} value={"3"} /> and <Key side={"left"} value={"."} /> keys.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Numberpad</caption>
                <thead>
                    <tr>
                        <th id="index-finger">IF</th><th id="middle-finger">MF</th><th id="ring-finger">RF</th><th id="little-finger">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="index-finger" className="grey">4</td><td headers="middle-finger" className="blue">5</td><td headers="ring-finger" className="grey">6</td><td className="blue">+</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">1</td><td headers="middle-finger" className="blue">2</td><td headers="ring-finger" className="grey">3</td><td className="spacer4"></td></tr>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="spacer4"></td><td headers="ring-finger" className="grey">.</td><td className="spacer4"></td></tr>
                </tbody>
            </table>
        </div>
        <br />
        <label htmlFor="keyboardPic">IF = index finger,
            MF = middle finger,
            RF = ring finger,
            LF = little finger</label>
        <br />
        <p>Before you start the exercises make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/number-pad/3/big-plus":<>
        <h4>Big Plus(+) Key Layout&nbsp;| <a href="/lessons/number-pad/3/little-plus">Regular Size Plus(+) Key Layout</a></h4>
        <p><strong>Different keyboards</strong> touch-typing assumes that all number pads have the same layout. There is clearly no point in training yourself to touch type if you cannot expect the number pads to be laid out in a uniform manner. However, while the layout of the number keys is constant, there <em>are</em> slight variations in the position of the operator keys which are relevant to this lesson, so look at the menu above and click on your number pad type.</p>
        <p>In our third lesson we will cover the <Key side={"left"} value={"7"} />-<Key side={"right"} value={"8"} />-<Key side={"left"} value={"9"} />-<Key side={"right"} value={"+"} /> row .</p>
        <ul className="keys">
            <li>The <strong>right index
                finger</strong> will control the <Key side={"left"} value={"7"} />
                key.</li>
            <li>The <strong>right middle
                finger</strong> will control the <Key side={"right"} value={"8"} /> key.</li>
            <li>The <strong>right ring
                finger</strong> will control the <Key side={"left"} value={"9"} /> key.</li>
            <li>The <strong>right little
                finger</strong> will control the <Key side={"right"} value={"+"} /> key.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Numberpad has big plus(+) key</caption>
                <thead>
                    <tr>
                        <th id="index-finger">IF</th><th id="middle-finger">MF</th><th id="ring-finger">RF</th><th id="little-finger">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="index-finger" className="grey">7</td><td headers="middle-finger" className="blue">8</td><td headers="ring-finger" className="grey">9</td><td className="blue" rowSpan={2}>+</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">4</td><td headers="middle-finger" className="blue">5</td><td headers="ring-finger" className="grey">6</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">1</td><td headers="middle-finger" className="blue">2</td><td headers="ring-finger" className="grey">3</td><td className="spacer4"></td></tr>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="spacer4"></td><td headers="ring-finger" className="grey">.</td><td className="spacer4"></td></tr>
                </tbody>
            </table>
        </div>
        <br />
        <label htmlFor="keyboardPic">IF = index finger,
            MF = middle finger,
            RF = ring finger,
            LF = little finger</label>
        <br />
        <p>Before you start the exercises make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/number-pad/3/little-plus":<>
        <h4><a href="/lessons/number-pad/3/big-plus">Big Plus(+) Key Layout</a>&nbsp;| Regular Size Plus(+) Key Layout</h4>
        <p><strong>Different keyboards</strong> touch-typing assumes that all number pads have the same layout. There is clearly no point in training yourself to touch type if you cannot expect the number pads to be laid out in a uniform manner. However, while the layout of the number keys is constant, there <em>are</em> slight variations in the position of the operator keys which are relevant to this lesson, so look at the menu above and click on your number pad type.</p>
        <p>In our third lesson we will cover the <Key side={"left"} value={"7"} />-<Key side={"right"} value={"8"} />-<Key side={"left"} value={"9"} />-<Key side={"right"} value={"-"} /> row .</p>
        <ul className="keys">
            <li>The <strong>right index
                finger</strong> will control the <Key side={"left"} value={"7"} />
                key.</li>
            <li>The <strong>right middle
                finger</strong> will control the <Key side={"right"} value={"8"} /> key.</li>
            <li>The <strong>right ring
                finger</strong> will control the <Key side={"left"} value={"9"} /> key.</li>
            <li>The <strong>right little
                finger</strong> will control the <Key side={"right"} value={"-"} /> key.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Numberpad has regular size plus(+) key</caption>
                <thead>
                    <tr>
                        <th id="index-finger">IF</th><th id="middle-finger">MF</th><th id="ring-finger">RF</th><th id="little-finger">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="index-finger" className="grey">7</td><td headers="middle-finger" className="blue">8</td><td headers="ring-finger" className="grey">9</td><td className="blue">-</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">4</td><td headers="middle-finger" className="blue">5</td><td headers="ring-finger" className="grey">6</td><td className="blue">+</td></tr>

                    <tr>
                        <td headers="index-finger" className="grey">1</td><td headers="middle-finger" className="blue">2</td><td headers="ring-finger" className="grey">3</td><td className="spacer4"></td></tr>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="spacer4"></td><td headers="ring-finger" className="grey">.</td><td className="spacer4"></td></tr>
                </tbody>
            </table>
        </div>
        <br />
        <label htmlFor="keyboardPic">IF = index finger,
            MF = middle finger,
            RF = ring finger,
            LF = little finger</label>
        <br />

        <p>Before you start the exercises make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/number-pad/4/big-plus":<>
        <h4>Big Plus(+) Key Layout&nbsp;| <a href="/lessons/number-pad/4/little-plus">Regular Size Plus(+) Key Layout</a></h4>
        <p>In our fourth lesson we will cover the operator keys of the <Key side={"right"} value={"/"} />-<Key side={"left"} value={"*"} />-<Key side={"right"} value={"-"} /> row .</p>
        <ul className="keys">
            <li>The <strong>right middle
                finger</strong> will control the <Key side={"right"} value={"/"} /> key.</li>
            <li>The <strong>right ring
                finger</strong> will control the <Key side={"left"} value={"*"} /> key.</li>
            <li>The <strong>right little
                finger</strong> will control the <Key side={"right"} value={"-"} /> key.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Numberpad has big plus(+) key</caption>
                <thead>
                    <tr>
                        <th id="index-finger">IF</th><th id="middle-finger">MF</th><th id="ring-finger">RF</th><th id="little-finger">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="blue">/</td><td headers="ring-finger" className="grey">*</td><td className="blue">-</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">7</td><td headers="middle-finger" className="blue">8</td><td headers="ring-finger" className="grey">9</td><td className="blue" rowSpan={2}>+</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">4</td><td headers="middle-finger" className="blue">5</td><td headers="ring-finger" className="grey">6</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">1</td><td headers="middle-finger" className="blue">2</td><td headers="ring-finger" className="grey">3</td><td className="spacer4"></td></tr>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="spacer4"></td><td headers="ring-finger" className="grey">.</td><td className="spacer4"></td></tr>
                </tbody>
            </table>
        </div>
        <br />
        <label htmlFor="keyboardPic">IF = index finger,
            MF = middle finger,
            RF = ring finger,
            LF = little finger</label><br />
        <p>Before you start the exercises make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    "lessons/number-pad/4/little-plus":<>
        <h4><a href="/lessons/number-pad/4/big-plus">Big Plus(+) Key Layout</a>&nbsp;| Regular Size Plus(+) Key Layout</h4>
        <p>In our fourth lesson we will cover the operator keys of the <Key side={"right"} value={"="} />-<Key side={"left"} value={"/"} />-<Key side={"right"} value={"*"} /> row .</p>
        <ul className="keys">
            <li>The <strong>right middle
                finger</strong> will control the <Key side={"right"} value={"="} /> key.</li>
            <li>The <strong>right ring
                finger</strong> will control the <Key side={"left"} value={"/"} /> key.</li>
            <li>The <strong>right little
                finger</strong> will control the <Key side={"right"} value={"*"} /> key.</li>
        </ul>
        <br />
        <div className="keyboard">
            <table className="bracket" id="keyboardPic" cellPadding="0" cellSpacing="1" border={0}>
                <caption>Numberpad has regular size plus(+) key</caption>
                <thead>
                    <tr>
                        <th id="index-finger">IF</th><th id="middle-finger">MF</th><th id="ring-finger">RF</th><th id="little-finger">LF</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="blue">=</td><td headers="ring-finger" className="grey">/</td><td className="blue">*</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">7</td><td headers="middle-finger" className="blue">8</td><td headers="ring-finger" className="grey">9</td><td className="blue">-</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">4</td><td headers="middle-finger" className="blue">5</td><td headers="ring-finger" className="grey">6</td><td className="blue">+</td></tr>
                    <tr>
                        <td headers="index-finger" className="grey">1</td><td headers="middle-finger" className="blue">2</td><td headers="ring-finger" className="grey">3</td><td className="spacer4"></td></tr>
                    <tr>
                        <td headers="index-finger" className="spacer4"></td><td headers="middle-finger" className="spacer4"></td><td headers="ring-finger" className="grey">.</td><td className="spacer4"></td></tr>
                </tbody>
            </table>
        </div>
        <br />
        <label htmlFor="keyboardPic">IF = index finger,
            MF = middle finger,
            RF = ring finger,
            LF = little finger</label>
        <br />
        <p>Before you start the exercises make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember - <a href="/safety-first">take regular breaks</a>.</p>
        <p>When you are ready to begin, select an exercise and strike the key requested. Try not to look at the
            keyboard. It will be difficult at first but as the exercise
            progresses you will find it becomes easier and your fingers will
            begin to move without you consciously deciding which finger is
            associated with which key.</p>
        <p>You may find it helpful to <em>quietly</em> say the name of
            the key as you strike it.</p><p>Don&apos;t let your mistakes cause you to
                lose heart, touch typing is a skill that can be learned by
                practice.</p>
        <p>Repeat each exercise at least three times.</p>
    </>,
    'practice/number':<>
        <h4><a href="/practice/word">Practice words</a>&nbsp;|&nbsp;Practice numbers</h4>
        <p>Typing is learned by practice.</p>
        <p>
        Expert typists are not born with an innate affinity for keyboards. They have not taken a magic typing pill. Nor do they rely on enchanted keyboards for their skill. They practice.</p>
        <p>The lessons of the typeonline course should have given you a grounding in touch typing. To improve, there is no substitute for practice.</p>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
    </>,
    'practice/word':<>
        <h4>Practice words&nbsp;|&nbsp;<a href="/practice/number">Practice numbers</a></h4>
        <p>Typing is learned by practice.</p>
        <p>
        Expert typists are not born with an innate affinity for keyboards. They have not taken a magic typing pill. Nor do they rely on enchanted keyboards for their skill. They practice.</p>
        <p>The lessons of the typeonline course should have given you a grounding in touch typing. To improve, there is no substitute for practice.</p>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
    </>,
    "speed-test/number": <>
        <h4><a href="/speed-test/word">Test with words</a>&nbsp;|&nbsp;Test with numbers&nbsp;|&nbsp;<a href="/speed-test/word-number">Words &amp; Numbers</a></h4>
        <p>Before you begin typing make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
    </>,
    "speed-test/word": <>
        <h4>Test with words&nbsp;|&nbsp;<a href="/speed-test/number">Test with numbers</a>&nbsp;|&nbsp;<a href="/speed-test/word-number">Words &amp; Numbers</a></h4>
        <h3>Is typing speed our goal?</h3>
        <p>Increased typing speed is the major attraction non-typists see in learning to touch type. While learning to touch type will almost always result in a perceptible increase in typing speed it is just one factor contributing to a marked increase in <em>productivity</em>.</p>
        <h3>Speed &amp; accuracy</h3>
        <p>Given that touch typing is an automatic skill it is logical to associate an expert typist with fast typing but a better description might be <em>accurate</em> typing. The principal benefit of touch typing, for the student typist, is that data input via a keyboard no longer requires conscious thought, or, visual confirmation.</p>
        <ul id="typingBenefits"><li>While composing a letter or essay it is no longer necessary for the writer to interrupt their train of thought to scan the keyboard for the location of a particular key, or, to correct a typing mistake.</li>
            <li>A touch typist copying from a source text doesn&apos;t need to divide their attention between the source, screen and keyboard as an untrained typist would but can turn their full attention to the source text, confident that their touch typing skill will translate thought into data input without error.</li></ul>
        <p>These are attainable benefits resulting from constant practice. The end result can be demonstrated as an impressive display of typing speed, where the typist&apos;s fingers keep pace with thought, but the underlying demonstration is one of reliable accuracy that typing practice has elevated to speed.</p>
        <h3>Measuring typing skill</h3>
        <p>Typing tests measure two things, speed and mistakes, so when you take our typing speed test, do not look only at your speed, look also at the number of your mistakes and concentrate on reducing your mistakes in future tests rather than increasing your typing speed. The end result will be increased <em>productivity</em>.</p>
        <h3>What is WPM?</h3>
        <p>WPM is an abbreviation of Words-Per-Minute. Confusingly this does not literally mean whole words, as one might find in a dictionary, but rather word-units.</p>
        <p>For speed to be comparable, it must be measured in standard units. In the case of typing speed if we used actual words for the WPM measurement then typing speed test results would not be comparable unless everyone used the same texts for their respective typing speed tests - which would give us the additional factor of memorisation so, the word-units we use are artificial.</p>
        <p>One word-unit is five keystrokes. Thus, <em>&quot;typed&quot;</em> is one word-unit, <em>&quot;type on it&quot;</em> is two word-units (spaces count as keystrokes too).</p>
        <h3>Typing technique</h3>
        <p>Before you begin the typing speed test make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
    </>,
    "speed-test/word-number": <>
    <h4><a href="/speed-test/word">Test with words</a>&nbsp;|&nbsp;<a href="/speed-test/number">Test with numbers</a>&nbsp;|&nbsp;Words &amp; Numbers</h4>
        <h3>Is typing speed our focus?</h3>
        <p>Increased typing speed is the major attraction non-typists see in learning to touch type. While learning to touch type will almost always result in a perceptible increase in typing speed it is just one factor contributing to a marked increase in <em>productivity</em>.</p>
        <h3>Speed &amp; accuracy</h3>
        <p>Given that touch typing is an automatic skill it is logical to associate an expert typist with fast typing but a better description might be <em>accurate</em> typing. The principal benefit of touch typing, for the student typist, is that data input via a keyboard no longer requires conscious thought, or, visual confirmation.</p>
        <ul id="typingBenefits"><li>While composing a letter or essay it is no longer necessary for the writer to interrupt their train of thought to scan the keyboard for the location of a particular key, or, to correct a typing mistake.</li>
            <li>A touch typist copying from a source text doesn&apos;t need to divide their attention between the source, screen and keyboard as an untrained typist would but can turn their full attention to the source text, confident that their touch typing skill will translate thought into data input without error.</li></ul>
        <p>These are attainable benefits resulting from constant practice. The end result can be demonstrated as an impressive display of typing speed, where the typist&apos;s fingers keep pace with thought, but the underlying demonstration is one of reliable accuracy that typing practice has elevated to speed.</p>
        <h3>Measuring typing skill</h3>
        <p>Typing tests measure two things, speed and mistakes, so when you take our typing speed test, do not look only at your speed, look also at the number of your mistakes and concentrate on reducing your mistakes in future tests rather than increasing your typing speed. The end result will be increased <em>productivity</em>.</p>
        <h3>What is WPM?</h3>
        <p>WPM is an abbreviation of Words-Per-Minute. Confusingly this does not literally mean whole words, as one might find in a dictionary, but rather word-units.</p>
        <p>For speed to be comparable, it must be measured in standard units. In the case of typing speed if we used actual words for the WPM measurement then typing speed test results would not be comparable unless everyone used the same texts for their respective typing speed tests - which would give us the additional factor of memorisation so, the word-units we use are artificial.</p>
        <p>One word-unit is five keystrokes. Thus, <em>&quot;typed&quot;</em> is one word-unit, <em>&quot;type on it&quot;</em> is two word-units (spaces count as keystrokes too).</p>
        <h3>Typing technique</h3>
        <p>Before you begin the typing speed test make sure you are sitting up straight, your feet flat on the floor. Keep your elbows close to your body, your wrists straight and your forearms level, and remember to <a href="/safety-first">take regular breaks</a>.</p>
    </>
};
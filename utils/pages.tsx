export const pages = [
    {
        id: "safety-first",
        title: "Safety first"
    },
    {
        id: "typing-lessons",
        title: "Keyboard lessons",
        children: [
            {
                id: "lessons/keyboard/1",
                title: "Lesson 1"
            },
            {
                id: "lessons/keyboard/2",
                title: "Lesson 2"
            },
            {
                id: "lessons/keyboard/3",
                title: "Lesson 3"
            },
            {
                id: "lessons/keyboard/4",
                title: "Lesson 4"
            },
            {
                id: "lessons/keyboard/5",
                title: "Lesson 5",
                children:[
                    {
                        id:"lessons/keyboard/5/uk-mac",
                        title: "Lesson 5 - UK Mac layout"
                    },
                    {
                        id:"lessons/keyboard/5/uk-pc",
                        title: "Lesson 5 - UK PC layout"
                    },
                    {
                        id:"lessons/keyboard/5/us",
                        title: "Lesson 5 - US & International layout"
                    }
                ]
            }
        ]
    },
    {
        id: "lessons/number-pad",
        title: "Number pad lessons",
        children:[
            {
                id: "lessons/number-pad/1",
                title: "Lesson 1"
            },
            {
                id: "lessons/number-pad/2",
                title: "Lesson 2"
            },
            {
                id: "lessons/number-pad/3",
                title: "Lesson 3",
                children:[
                    {
                        id:"lessons/number-pad/3/big-plus",
                        title: "Lesson 3 - big plus(+) key layout"
                    },
                    {
                        id:"lessons/number-pad/3/little-plus",
                        title: "Lesson 3 - regular size plus(+) key layout"
                    }
                ]
            },
            {
                id: "numpad-lesson-4",
                title: "Lesson 4",
                children:[
                    {
                        id:"lessons/number-pad/4/big-plus",
                        title: "Lesson 4 - big plus(+) key layout"
                    },
                    {
                        id:"lessons/number-pad/4/little-plus",
                        title: "Lesson 4 - regular size plus(+) key layout"
                    }
                ]
            }
        ]
    },
    {
        id: "practice",
        title: "Practices",
        children:[
            {
                id: "practice/word",
                title: "Practice with words"
            },
            {
                id: "practice/number",
                title: "Practice with numbers"
            }
        ]
    },
    {
        id: "speed-test",
        title: "Speed test",
        children:[
            {
                id: "speed-test/word",
                title: "Test with words"
            },
            {
                id: "speed-test/number",
                title: "Test with numbers"
            },
            {
                id: "speed-test/word-number",
                title: "Test with words and numbers"
            }
        ]
    },
    {
        id: "about",
        title: "About us"
    }
];
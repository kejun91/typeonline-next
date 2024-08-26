const pages = [
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
        id: "safety-first",
        title: "Safety first"
    },
    {
        id: "about",
        title: "About us"
    }
];

interface SideNavigationProps {
    pageId:string;
}

export default ({ pageId }: SideNavigationProps) => {
    const isSiteMap = pageId === 'site-map';
    const navItems:any[] = [];
    pages.forEach(p => {
        if (p.children) {
            let matchedPage = p.children.find(c => c.id === pageId || c.children?.find(cc => cc.id === pageId));

            if (matchedPage) {
                let childNavItems:any[] = [];
                p.children.forEach(c => {
                    if (c.children) {
                        if (c.children.find(cc => cc.id === pageId)) {
                            childNavItems.push(<li>{c.title}</li>);
                        } else {
                            const href = c.children?.[0].id;
                            childNavItems.push(<li><a href={"/" + href} tabIndex={navItems.length + 1} >{c.title}</a></li>);
                        }
                    } else {
                        if (c.id === pageId) {
                            childNavItems.push(<li>{c.title}</li>);
                        } else {
                            const href = c.id;
                            childNavItems.push(<li><a href={"/" + href} tabIndex={navItems.length + 1} >{c.title}</a></li>);
                        }
                    }
                });
                navItems.push(<li key={p.id}>{p.title}<ul>{childNavItems}</ul></li>);
            } else {
                navItems.push(<li key={p.id}><a href={"/" + p.children[0].id} tabIndex={navItems.length + 1} >{p.title}</a></li>);
            }
        } else {
            if (p.id === pageId) {
                navItems.push(<li key={p.id}>{p.title}</li>);
            } else {
                navItems.push(<li key={p.id}><a href={p.id === 'home'?'/':("/" + p.id)} tabIndex={navItems.length + 1} >{p.title}</a></li>);
            }
        }
    });
    
    return <>{!isSiteMap && <div id="sideMenu">
        <ul>
            {navItems}
        </ul>
    </div>}</>;
}
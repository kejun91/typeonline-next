import { pages } from "./pages";

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
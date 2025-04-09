import Logo from './logo'

export function GlobalFooter() {
    return (
        <footer className="global-footer">
            <div className="global-footer__container">
                <div className="branding">
                    <Logo></Logo>
                </div>
                <div className="some">
                    <ul className="some__list">
                        <li className="list__item">Github</li>
                        <li className="list__item">LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

import { useNavigate } from "react-router-dom";
import { ASPIRE_LOGO, ICON_SOURCE } from "../../helpers/constants/imageConstants";
import { NavItemType } from "../../types/navMenuTypes";
import { useState } from "react";
import { getCurrentNav } from "../../helpers/seervices";

const SideNavBar = () => {
    const navigateTo = useNavigate();
    const [activeNavItem, setActiveNavItem] = useState<string | number>(getCurrentNav())

    const navMenuItems: NavItemType[] = [
        {
            id: 1,
            label: 'Home',
            iconSrc: ICON_SOURCE.homeIcon,
            path: '/'
        },
        {
            id: 2,
            label: 'Cards',
            iconSrc: ICON_SOURCE.cardsIcon,
            path: '/cards'
        },
        {
            id: 3,
            label: 'Payments',
            iconSrc: ICON_SOURCE.paymentsIcon,
            path: '/payments'
        },
        {
            id: 4,
            label: 'Credit',
            iconSrc: ICON_SOURCE.creditIcon,
            path: '/credit'
        },
        {
            id: 5,
            label: 'Settings',
            iconSrc: ICON_SOURCE.settignsIcon,
            path: '/settings'
        }
    ]

    const handleNavItemClick = (id: string | number, path: string) => {
        navigateTo(path);
        setActiveNavItem(id);
    }

    return (
        <div className="side-navbar">
            <div className="logo-container">
                <img className="aspire-logo" src={ASPIRE_LOGO} alt='aspire logo' />
                <p className="description">
                    Trusted way of banking for 3,000+ SMEs and startups in Singapore
                </p>
            </div>

            <div className="nav-container">
                {navMenuItems.map((navItem: NavItemType) => {
                    return <div key={navItem.id} className={`nav-item ${activeNavItem === navItem.id ? "active-nav" : ''}`} onClick={() => handleNavItemClick(navItem.id, navItem.path)}>
                        <img src={navItem.iconSrc} alt={navItem.label} />
                        <span>{navItem.label}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SideNavBar;
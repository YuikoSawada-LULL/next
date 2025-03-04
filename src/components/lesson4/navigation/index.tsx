import React from "react";
import Link from "next/link";

type NavigationProps = {
    children: React.ReactNode;
};

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
    return <ul>{children}</ul>;
};

type NavigationItemProps = {
    children: React.ReactNode;
    href: string;
    current?: boolean;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({ children, href,current }) => {
    return (
        <li className={`${current && "is-current"}`}>
            <Link href={href}>{children} {current && "⇒"}</Link>
        </li>
    );
};
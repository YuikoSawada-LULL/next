'use client';

import React from "react";
import {Navigation, NavigationItem} from "@/components/lesson4/navigation";
import { usePathname } from 'next/navigation'


export const Lesson4Navigation: React.FC = () => {
    const pathname = usePathname();

    const navList = [
        {text: 'Top', href: '/lesson4/lesson4-2'},
        {text: 'about', href: '/lesson4/lesson4-2/about'},
        {text: 'news', href: '/lesson4/lesson4-2/news'},
        {text: 'service', href: '/lesson4/lesson4-2/service'},
    ]

    return (
    <Navigation>
        {navList.map((item) =>(
            <NavigationItem 
            key={item.href}
            href={item.href} 
            current={pathname === item.href}
            >
            {item.text}
            </NavigationItem>
        ))}
    </Navigation>

    // mapを使って綺麗なコードにした記述は上記の通り
    // <Navigation>
    //     <NavigationItem href="/lesson4/lesson4-2" current={pathname === '/lesson4/lesson4-2'}>Top</NavigationItem>
    //     <NavigationItem href="/lesson4/lesson4-2/about" current={pathname === '/lesson4/lesson4-2/about'}>about</NavigationItem>
    //     <NavigationItem href="/lesson4/lesson4-2/news" current={pathname === '/lesson4/lesson4-2/news'}>news</NavigationItem>
    //     <NavigationItem href="/lesson4/lesson4-2/service" current={pathname === '/lesson4/lesson4-2/service'}>service</NavigationItem>
    // </Navigation>
    );
};
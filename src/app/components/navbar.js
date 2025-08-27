"use client";
import {menubar} from 'primereact/menubar';

export default function Navbar() {
    const items=[
        {label:'Dahsboard',icon:'pi pi-fw pi-home',url:'/'},
        {label: 'Books',icon:'pi pi-fw pi-book',url:'/books'},
        {label: 'categories',icon:'pi pi-fw pi-list',url:'/categories'},
        {label:'login',icon:'pi pi-fw pi-user',url:'/login'}
    ];
    const start=<img alt="logo" src="/logo.png" height="40" className="mr-2" />;
    const end =<span className="font-bold">LawBooks</span>;

    return <Menubar model={items} start={start} end={end} />;
}
import { lazy, LazyExoticComponent } from 'react';
import {CatalogoPropiedades} from '../pages/CatalogoPropiedades';
import {Inicio} from '../pages/Inicio';

type JSXComponent = () => JSX.Element;

interface Route{
    to:string;
    path:string;
    Component:LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}

const GestionUsuarioLazy = lazy(()=> import('../pages/GestionUsuarios'));

export const routes:Route[] = [
    {
        to:'/inicio',
        path:'/inicio',
        Component: Inicio,
        name: 'Inico'
    },
    {
        to: '/gestion-usuarios',
        path: '/gestion-usuarios/',
        Component: GestionUsuarioLazy,
        name: 'Gestión de usuarios'
    },
    {
        to: '/propiedades',
        path: '/propiedades/',
        Component: CatalogoPropiedades,
        name: 'Propiedades'
    }
]
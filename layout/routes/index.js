import { lazy } from 'react';

const HomePage = lazy(() => import('../../containers/HomePage'));
const AboutPage = lazy(() => import('../../containers/AboutPage'));
const LoginPage = lazy(() => import('../../containers/LoginPage'));
const SignupPage = lazy(() => import('../../containers/SignupPage'));
const FeaturePage = lazy(() => import('../../containers/FeaturePage'));
const NotesPage = lazy(() => import('../../containers/notes/NotesList'));
const NotesCreate = lazy(() => import('../../containers/notes/NotesCreate'));
const NotesEdit = lazy(() => import('../../containers/notes/NotesEdit'));


const routes = [
    {
        path: '/auth/register',
        component: SignupPage,
        title: 'Register',
        needsAuth: false,
    },
    {
        path: '/auth/login',
        component: LoginPage,
        title: 'Login',
        needsAuth: false,
    },
    {
        path: '/about',
        component: AboutPage,
        title: 'About',
        needsAuth: true,
    },
    {
        path: '/feature',
        component: FeaturePage,
        title: 'Feature',
        needsAuth: true,
    }, {
        path: '/notes/edit/:id',
        component: NotesEdit,
        title: 'Edit Note',
        needsAuth: true
    },
    {
        path: '/notes/create-note',
        component: NotesCreate,
        title: 'Create Note',
        needsAuth: true
    },
    {
        path: '/notes',
        component: NotesPage,
        title: 'Notes',
        needsAuth: true,
    },
    {
        path: '/',
        component: HomePage,
        title: 'Home',
        needsAuth: false,
    },
]

export default routes;
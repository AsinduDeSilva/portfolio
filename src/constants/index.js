import { bootstrap, c, clothifyStore1, css, figma, html, java, js, mongodb, mui, mysql, node, postgresql, postman, react, reactrouter, realWeather, redux, spring, studentManagementSystem, tailwindcss, ts, vite } from "../assets";

export const skillIcons = {
    frameworks: [
        {
            id: 'skillIcon1',
            name: 'Spring',
            icon: spring,
        },
        {
            id: 'skillIcon2',
            name: 'Node.js',
            icon: node,
        },
        {
            id: 'skillIcon3',
            name: 'React.js',
            icon: react,
        },
        {
            id: 'skillIcon4',
            name: 'Vite.js',
            icon: vite,
        },
        {
            id: 'skillIcon5',
            name: 'Redux',
            icon: redux,
        },
        {
            id: 'skillIcon6',
            name: 'React Router',
            icon: reactrouter,
        },
        {
            id: 'skillIcon7',
            name: 'Tailwind CSS',
            icon: tailwindcss,
        },
        {
            id: 'skillIcon8',
            name: 'Material UI',
            icon: mui,
        },
        {
            id: 'skillIcon9',
            name: 'Bootstrap',
            icon: bootstrap,
        },
    ],
    
    languages: [
        {
            id: 'skillIcon10',
            name: 'Java',
            icon: java,
        },
        {
            id: 'skillIcon11',
            name: 'Typescript',
            icon: ts,
        },
        {
            id: 'skillIcon12',
            name: 'Javascript',
            icon: js,
        },
        {
            id: 'skillIcon13',
            name: 'C',
            icon: c,
        },
        {
            id: 'skillIcon14',
            name: 'HTML5',
            icon: html,
        },
        {
            id: 'skillIcon15',
            name: 'CSS3',
            icon: css,
        }
    ],

    databases: [
        {
            id: 'skillIcon16',
            name: 'MongoDB',
            icon: mongodb,
        },
        {
            id: 'skillIcon17',
            name: 'MySQL',
            icon: mysql,
        },
        {
            id: 'skillIcon18',
            name: 'PostgreSQL',
            icon: postgresql,
        },
    ],

    tools: [
        {
            id: 'skillIcon19',
            name: 'Figma',
            icon: figma,
        },
        {
            id: 'skillIcon20',
            name: 'Postman',
            icon: postman,
        },
    ]    
}

export const projects = [
    {
        id: 'Project1',
        title: 'Clothify Store - E-Commerce Application',
        image: clothifyStore1,
        links: [
            {
                name: 'Frontend',
                link: 'https://github.com/AsinduDeSilva/Clothify-Store-React'
            },
            {
                name: 'Backend',
                link: 'https://github.com/AsinduDeSilva/Clothify-Store-Backend'
            },
        ]
    },
    {
        id: 'Project2',
        title: 'Real Weather - Real-Time Weather Application',
        image: realWeather,
        links: [
            {
                name: 'Visit',
                link: 'https://asindudesilva.github.io/RealWeather/'
            },
        ]
    },
    {
        id: 'Project3',
        title: 'Student Management System',
        image: studentManagementSystem,
        links: [
            {
                name: 'Project Repo',
                link: 'https://github.com/AsinduDeSilva/StudentManagementSystem/'
            }
        ]
    },
]
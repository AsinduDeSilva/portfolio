import { book, bootstrap, c, clothifyStore1, css, degree, fb, figma, git, github, html, instagram, java, js, laptop, linkedin, mongodb, mui, mysql, node, postgresql, postman, react, reactrouter, realWeather, redux, spring, stackoverflow, studentManagementSystem, tailwindcss, ts, vite } from "../assets";

export const socialMedia = [
    {
        name: 'github',
        icon: github,
        url: 'https://github.com/AsinduDeSilva',
    },
    {
        name: 'linkedin',
        icon: linkedin,
        url: 'https://www.linkedin.com/in/asindu-de-silva',
    },
    {
        name: 'stackoverflow',
        icon: stackoverflow,
        url: 'https://stackoverflow.com/users/21852219/asindu-de-silva',
    },
    {
        name: 'instagram',
        icon: instagram,
        url: 'https://www.instagram.com/asindu_de_silva',
    },
    {
        name: 'facebook',
        icon: fb,
        url: 'https://fb.com/asindu.desilva.7',
    },
]

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
            name: 'Git',
            icon: git,
        },
        {
            id: 'skillIcon20',
            name: 'Postman',
            icon: postman,
        },
        {
            id: 'skillIcon21',
            name: 'Figma',
            icon: figma,
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
                id: 'link1',
                name: 'Frontend',
                url: 'https://github.com/AsinduDeSilva/Clothify-Store-React'
            },
            {
                id: 'link2',
                name: 'Backend',
                url: 'https://github.com/AsinduDeSilva/Clothify-Store-Backend'
            },
        ]
    },
    {
        id: 'Project2',
        title: 'Real Weather - Real-Time Weather Application',
        image: realWeather,
        links: [
            {
                id: 'link3',
                name: 'Visit',
                url: 'https://asindudesilva.github.io/RealWeather/'
            },
        ]
    },
    {
        id: 'Project3',
        title: 'Student Management System',
        image: studentManagementSystem,
        links: [
            {
                id: 'link4',
                name: 'Project Repo',
                url: 'https://github.com/AsinduDeSilva/StudentManagementSystem/'
            }
        ]
    },
]

export const education = [
    {
        id:'edu1',
        name: 'B.Sc. Honours in Computer Science',
        school: 'University of Kelaniya',
        period: '2023 Sep - Present',
        icon: degree,
    },
    {
        id:'edu2',
        name: 'iCET Certified Master',
        school: 'Institute of Computer Engineering Technology',
        period: '2023 Jan - 2023 Sep',
        icon: laptop,
    },
    {
        id:'edu3',
        name: 'G.C.E. Advanced Level',
        school: 'Royal College Panadura',
        period: '2018 - 2021',
        icon: book,
    },
]

export const animationVarients = {
    scroll: {}
}
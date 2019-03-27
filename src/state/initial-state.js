export default {
    isFetching: false,
    message: null,
    error: false,
    name: 'Braden Hitchcock',
    resume: '',
    contact: {
        email: 'hitchcock.braden@gmail.com',
        phone: '(720) 899-1356',
        address: '1234 Street Apt 4 City, ST 00000'
    },
    about: 'This is a brief introduction about who I am, what I am interested in, what I want to be, etc.',
    image: 'assets/images/profile-formal-cropped.jpg',
    banner: 'assets/images/banner.png',
    links: [
        {
            name: 'GitHub',
            icon: {
                type: 'svg',
                content: 'github'
            },
            url: 'https://github.com/bradenhc'
        },
        {
            name: 'LinkedIn',
            icon: {
                type: 'svg',
                content: 'linkedin'
            },
            url: 'https://linkedin.com/in/bradenhitchcock'
        }
    ],
    sections: [
        {
            name: 'Education',
            route: '/education',
            content: [
                {
                    school: 'Oregon State University',
                    degree: 'M.S. Computer Science - Software Innovation',
                    location: 'Corvallis, OR',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/osu.jpg'
                    },
                    gpa: '3.80',
                    startDate: 'September 2018',
                    endDate: 'March 2020',
                    highlights: [
                        'Coursework includes software engineering, software project management, distributed systems, database management systems'
                    ],
                    tags: [],
                    url: 'https://oregonstate.edu/'
                },
                {
                    school: 'Brigham Young University',
                    degree: 'B.S. Computer Science',
                    location: 'Provo, UT',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/byu.png'
                    },
                    gpa: '3.66',
                    startDate: 'September 2012',
                    endDate: 'April 2018',
                    highlights: [
                        'Coursework includes software engineering, distributed systems, networking, ' +
                            'computer security, data structures, operating systems'
                    ],
                    tags: [],
                    url: 'https://byu.edu/'
                }
            ]
        },
        {
            name: 'Experience',
            route: '/experience',
            content: [
                {
                    company: 'Northrop Grumman',
                    position: 'Software Development Intern',
                    location: 'Boulder, CO',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/ng.jpg'
                    },
                    startDate: 'May 2017',
                    endDate: 'January 2019',
                    highlights: [
                        'Assisted in architecting a containerized environment for data processing applications using ' +
                            'Docker and Kubernetes',
                        'Developed a framework in Java and C++ for altering the workflow of distributed data ' +
                            'processing applications at runtime, reducing coupling among system components',
                        'Developed a C++ API for applications running in a modular framework environment, reducing ' +
                            'third-party app code count by 70%',
                        'Designed and implemented front-end user interfaces in Angular and React for various company ' +
                            'projects, assisting the company in moving toward a cloud-centric environment'
                    ],
                    tags: ['java', 'c++', 'node', 'javascript', 'react', 'angular', 'docker', 'kubernetes'],
                    url: 'http://www.northropgrumman.com/'
                }
            ]
        },
        {
            name: 'Projects',
            route: '/projects',
            content: [
                {
                    title: 'Synergen',
                    subtitle: 'Goal-centric Social Networking Platform',
                    icon: {
                        type: 'image',
                        content: ''
                    },
                    highlights: [
                        'Managed, designed, and developed a web application using React/Redux, Node.js/Express, ' +
                            'and MongoDB to facilitate goal-inspired interactions among users'
                    ],
                    tags: ['node', 'javascript', 'react', 'express', 'redux', 'mongo', 'manage'],
                    code: 'https://github.com/synergy-gen',
                    url: 'https://synergen.us/'
                }
            ]
        },
        {
            name: 'Leadership',
            route: '/leadership',
            content: [
                {
                    title: 'Volunteer Representative',
                    organization: 'The Church of Jesus Christ of Latter-day Saints',
                    location: 'Daejeon, South Korea',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/church-of-jesus-christ.png'
                    },
                    startDate: 'July 2013',
                    endDate: 'July 2015',
                    highlights: [
                        'Trained volunteers on improving their teaching, language, learning, and inter-personal ' +
                            'skills',
                        'Gained fluency in Korean, facilitating our objective to assist others in improving ' +
                            'the quality of their lives and acheiving their goals'
                    ],
                    tags: ['service', 'leader', 'korean', 'language', 'social', 'goals'],
                    url: 'https://churchofjesuschrist.org/'
                }
            ]
        },
        {
            name: 'Additional Interests',
            route: '/skills-interests',
            content: []
        }
    ]
};

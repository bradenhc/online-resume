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
                type: 'fontawesome',
                content: 'fab fa-github'
            },
            url: 'https://github.com/bradenhc'
        },
        {
            name: 'LinkedIn',
            icon: {
                type: 'fontawesome',
                content: 'fab fa-linkedin'
            },
            url: 'https://linkedin.com/bradenhitchcock'
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
                        content: ''
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
                        content: ''
                    },
                    gpa: '3.66',
                    startDate: 'September 2012',
                    endDate: 'April 2018',
                    highlights: [
                        'Coursework includes software engineering, distributed systems, networking, computer security, data structures, operating systems'
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
                        content: ''
                    },
                    startDate: 'May 2017',
                    endDate: 'January 2019',
                    highlights: [],
                    tags: [],
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
                    subtitle: 'Goal-centric social networking',
                    icon: {
                        type: 'image',
                        content: ''
                    },
                    highlights: [],
                    tags: [],
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
                    title: '',
                    location: '',
                    icon: {
                        type: 'image',
                        content: ''
                    },
                    startDate: '',
                    endDate: '',
                    highlights: [],
                    tags: [],
                    url: ''
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

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
                    degree: '',
                    location: '',
                    icon: {
                        type: 'image',
                        content: ''
                    },
                    gpa: '',
                    startDate: '',
                    endDate: '',
                    highlights: [],
                    tags: [],
                    url: ''
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

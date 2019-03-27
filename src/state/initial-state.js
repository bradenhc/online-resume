export default {
    isFetching: false,
    message: null,
    error: false,
    name: 'Braden Hitchcock',
    resume: '',
    contact: {
        email: 'hitchcock.braden@gmail.com',
        phone: '(720) 899-1356',
        address: ''
    },
    about:
        'As an aspiring software architect, I am passionate about well-designed systems that ' +
        'provide the highest levels of maintainability, flexibility, and efficiency. I have extensive experience ' +
        'with microservice-oriented systems and implementing highly available ' +
        'architectures. Most recently with my internship at Northrop Grumman, I was able to contribute to cutting ' +
        'edge applications by researching state-of-the-art technologies and incorporating them into our software. ' +
        'My professional experience consists primarily of designing and implementing flexible software systems, including ' +
        'distributed system software architectures, websites, web applications, and online tools.',
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
        },
        {
            name: 'Facebook',
            icon: {
                type: 'svg',
                content: 'facebook'
            },
            url: 'https://www.facebook.com/bradenhc'
        }
    ],
    sections: [
        {
            name: 'Experience',
            route: '/experience',
            content: [
                {
                    company: 'Oregon State University IoT Alliance',
                    position: 'Web Developer/Community Coordinator',
                    location: 'Corvallis, OR',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/osu.jpg'
                    },
                    startDate: 'January 2019',
                    endDate: 'Present',
                    highlights: [
                        'Led redesign of the legacy alliance website, moving away from Drupal to plain PHP to increase ' +
                            'maintainability',
                        'Implemented resource respository for alliance materials, facilitating distribution of ' +
                            'learning resources for students attending events and seminars sponsored by the alliance',
                        'Integrated IoT site with existing EECS Capstone project site, allowing students to create a ' +
                            'profile indicating their participation and efforts in company-sponsored capstone projects'
                    ],
                    tags: ['php', 'iot', 'manage', 'javascript', 'html', 'css'],
                    url: 'http://groups.engr.oregonstate.edu/IOTA'
                },
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
                },
                {
                    company: 'Brigham Young University Alumni Association',
                    position: 'Web Developer',
                    location: 'Provo, UT',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/byu.png'
                    },
                    startDate: 'Janurary 2016',
                    endDate: 'April 2017',
                    highlights: [
                        'Designed and implemented online tools with various web technologies, including' +
                            'PHP, MySQL, and JavaScript, successfully automating reporting responsibilities for ' +
                            'alumni leaders',
                        'Assisted in planning and implementing the upgrade of primary association websites to ' +
                            'use the open source Drupal PHP framework, significantly reducing maintenance overhead'
                    ],
                    tags: ['web', 'javascript', 'php', 'drupal', 'jquery', 'mysql', 'sql', 'coldfusion', 'html', 'css'],
                    url: 'http://alumni.byu.edu/'
                }
            ]
        },
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
            name: 'Honors & Awards',
            route: '/honors-awards',
            content: ['Eagle Scout Award', 'U.S. Government issued secret security clearance']
        }
    ]
};

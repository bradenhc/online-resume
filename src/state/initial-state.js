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
    about: `
        Husband, father, avid coder, and aspiring software architect. I am passionate about well-designed, data-driven
        distributed systems that showcase maintainability, flexibility, and efficiency. I have experience 
        designing and building microservice-based systems and implementing methods that encourage
        scalable software development. My experienced has blessed me with many opportunities to contribute to cutting
        edge applications and research novel technologies in the pursuit of protecting our country and facilitating
        its growth. Along the way I've had the privilege to build distributed data-processing frameworks, web-based 
        applications, websites, and online tools.`,
    image: 'assets/images/profile.jpg',
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
            url: 'https://linkedin.com/in/bradenhc'
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
    defaultRoute: '/experience',
    sections: [
        {
            name: 'Experience',
            route: '/experience',
            content: [
                {
                    title: 'Software Architect Intern',
                    subtitle: 'Viewpoint Construction Software',
                    location: 'Portland, OR',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/viewpoint.png'
                    },
                    startDate: 'June 2019',
                    endDate: 'September 2019',
                    highlights: [
                        'Designed and implemented API management services in Azure Cloud, enabling the company to ' +
                        'expose valuable data through public APIs as part of a larger cloud-platform strategy',
                        'Developed processes and methods for the development, deployment, and integration of services ' +
                        'exposing public APIs, faciliting the transition of legacy applications to microservices ' +
                        'that allow third-party integration',
                        'Assisted the design and discussion of a major decomposition of flagship applications into ' +
                        'microservices connected via Apache Kafka',
                        'Converted and improved a legacy service running on the .NET Framework to a microservice in ' +
                        '.NET Core, furthering the goal of running all logic as microservices in Azure Cloud'
                    ],
                    tags: ['azure', 'api', 'rest', 'c#', '.net core', 'kafka', 'agile', 'scaled agile framework'],
                    url: 'https://viewpoint.com/'
                },
                {
                    title: 'Web Developer/Community Coordinator',
                    subtitle: 'Oregon State University IoT Alliance',
                    location: 'Corvallis, OR',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/osu.jpg'
                    },
                    startDate: 'January 2019',
                    endDate: 'June 2019',
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
                    title: 'Software Development Intern',
                    subtitle: 'Northrop Grumman',
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
                    tags: ['java', 'c++', 'node', 'javascript', 'react', 'angular', 'docker', 'kubernetes', 'agile'],
                    url: 'http://www.northropgrumman.com/'
                },
                {
                    title: 'Web Developer',
                    subtitle: 'Brigham Young University Alumni Association',
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
                    subtitle: 'Oregon State University',
                    title: 'M.S. Computer Science - Software Innovation',
                    location: 'Corvallis, OR',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/osu.jpg'
                    },
                    extra: '3.80 GPA',
                    startDate: 'September 2018',
                    endDate: 'March 2020',
                    highlights: [
                        'Coursework includes software engineering, software project management, distributed systems, database management systems'
                    ],
                    tags: [],
                    url: 'https://oregonstate.edu/'
                },
                {
                    subtitle: 'Brigham Young University',
                    title: 'B.S. Computer Science',
                    location: 'Provo, UT',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/byu.png'
                    },
                    extra: '3.66 GPA',
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
                    url: 'https://synergen.us/'
                },
                {
                    title: 'Online Resume',
                    subtitle: 'This site right here!',
                    icon: {
                        type: 'image',
                        content: 'assets/images/icons/online-resume.png'
                    },
                    highlights: [
                        'Implemented this site in React/Redux, inspired by online resumes built by collegues and ' +
                            'fellow students'
                    ],
                    tags: ['react', 'redux', 'sagas'],
                    url: ''
                }
            ]
        },
        {
            name: 'Leadership',
            route: '/leadership',
            content: [
                {
                    title: 'Volunteer Representative',
                    subtitle: 'The Church of Jesus Christ of Latter-day Saints',
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
            content: [
                {
                    title: 'Eagle Scout Award'
                }
            ]
        }
    ]
};

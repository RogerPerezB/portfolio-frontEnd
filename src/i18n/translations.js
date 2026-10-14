export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      interactiveCv: 'Interactive CV',
      exploreCv: 'Explore Interactive CV',
    },
    hero: {
      status: 'Available for Backend & Software Engineering Roles',
      greeting: "Hi, I'm",
      name: 'Roger Perez Becerra',
      tagline: 'Software Developer · Distributed Systems · Robust APIs',
      bio: "Honours Computer Science graduate from Carleton University with a minor in biology. Passionate about crafting scalable backend systems, robust REST APIs, and automated testing pipelines. Experienced across Java, Python, C++, Node.js, and cloud environments, bridging algorithm design with dependable engineering.",
      coreFocus: 'Core Focus:',
      exploreCvBtn: 'Explore Interactive CV',
      viewProjectsBtn: 'View Featured Projects',
      contactMeBtn: 'Contact Me',
    },
    about: {
      kicker: 'Background & Philosophy',
      title: 'About Me',
      lead: 'I am a Software Developer driven by building reliable backend systems, performant algorithms, and resilient data architectures.',
      p1: 'Graduated with an Honours Bachelor of Computer Science and a minor in biology from Carleton University, I combine deep theoretical foundations with hands-on software engineering. My background bridges systems-level languages (C++, Java) with modern cloud and web stacks (Python, Node.js, Docker, SQL).',
      p2: 'Having completed software development and test automation tenures at Inteloom Inc and Limitless Digital Agency, I have operated across the full lifecycle, designing relational database operations, writing robust APIs, and automating test suites with Selenium and Jasmine to ensure bulletproof delivery.',
      highlight1Title: 'Backend & Data Centric:',
      highlight1Text: 'Focused on clean API contracts, database normalization, and scalable cloud services.',
      highlight2Title: 'Reliability & Testing First:',
      highlight2Text: 'Rigorous unit and automated regression testing instincts honed through professional QA and backend roles.',
      highlight3Title: 'Trilingual Professional:',
      highlight3Text: 'Native / bilingual proficiency in French, English, and Spanish based in the Gatineau/Ottawa region.',
      eduTitle: 'Education',
      eduSchool: 'Carleton University · Ottawa',
      eduDegree: 'B.C.S. Honours in Computer Science, Minor in Biology',
      eduGrad: 'Graduated 02/2026',
      honorsTitle: 'Honors & Distinctions',
      honor1: 'Rookie of the Year: Inteloom Inc',
      honor2: 'Academic Excellence Award: Carleton University',
      honor3: "Dean's List: Heritage College (Science DEC)",
      langTitle: 'Languages',
      langEn: 'English: Native / Bilingual',
      langFr: 'French: Native / Bilingual',
      langEs: 'Spanish: Native / Bilingual',
      langPt: 'Portuguese: Limited',
    },
    experience: {
      kicker: 'Career Path',
      title: 'Work Experience',
      intro: 'Proven track record in software engineering, backend API development, database optimization, and test automation.',
      ctaTitle: 'Looking for detailed job achievements and academic credentials?',
      ctaSubtitle: 'Inspect the complete timeline, awards, and coursework inside the interactive CV viewer.',
      ctaBtn: 'Open Interactive CV',
      items: [
        {
          role: 'Full Stack Software Developer',
          company: 'Limitless Digital Agency',
          period: '05/2023 – 08/2023',
          location: 'Remote',
          description: 'Oversaw end-to-end development lifecycles, translating complex business requirements into high-performance web functionality.',
          bullets: [
            'Architected and implemented core platform features on HighLevel in strict adherence to client technical specifications.',
            'Extensively managed and optimized relational databases and SQL queries to accelerate data operations and retrieval.',
            'Ensured seamless cross-service API integrations, responsive interfaces, and rigorous data integrity.'
          ],
          skills: ['Full-Cycle Development', 'SQL & RDBMS', 'API Integration', 'Data Optimization', 'HighLevel']
        },
        {
          role: 'Junior Software Developer',
          company: 'Inteloom Inc',
          period: '05/2022 – 12/2022',
          location: 'Gatineau, QC',
          award: 'Rookie of the Year Award',
          description: 'Collaborated directly with engineering leadership to diagnose backend bottlenecks, implement critical features, and elevate codebase quality.',
          bullets: [
            'Diagnosed, resolved, and documented critical UI and backend bottlenecks, strengthening system stability across releases.',
            'Engineered new features utilizing Java, Node.js, and standardized REST API communication protocols.',
            'Authored modular unit test suites to prevent regressions and maintain high test coverage standards across sprints.',
            'Awarded Rookie of the Year in recognition of rapid technical learning and proactive execution.'
          ],
          skills: ['Java', 'Node.js', 'REST APIs', 'Unit Testing', 'Backend Troubleshooting', 'Agile']
        },
        {
          role: 'Test Automation Developer',
          company: 'Inteloom Inc',
          period: '05/2021 – 08/2021',
          location: 'Gatineau, QC',
          description: 'Built automated test suites and validation workflows to ensure mission-critical software reliability.',
          bullets: [
            'Engineered scalable, modular end-to-end and regression test scripts using JavaScript, Jasmine, and Selenium.',
            'Streamlined quality assurance pipelines, drastically reducing manual verification overhead and regression escape rates.',
            'Collaborated with development teams to identify edge cases and establish rigorous acceptance criteria.'
          ],
          skills: ['JavaScript', 'Selenium', 'Jasmine', 'Test Automation', 'QA & Regression Testing']
        }
      ]
    },
    skills: {
      kicker: 'Technical Stack',
      title: 'Skills & Expertise',
      intro: 'Organized by domain to showcase backend depth, automated testing rigor, and cross-platform flexibility.',
      allTab: 'All Skills',
      levels: {
        advanced: 'Advanced',
        proficient: 'Proficient',
        working: 'Working Knowledge',
        academic: 'Academic',
        project: 'Project'
      },
      categories: [
        {
          id: 'languages',
          name: 'Languages & Backend Core',
          short: 'Languages',
          desc: 'Foundational languages for systems programming, backend architectures, and database operations.',
          skills: [
            { name: 'C++', level: 'Advanced', note: 'Systems programming, memory management, Qt' },
            { name: 'C#', level: 'Advanced', note: 'Object-oriented application development' },
            { name: 'C', level: 'Advanced', note: 'Low-level computing & memory models' },
            { name: 'Java', level: 'Proficient', note: 'OOP, Spring ecosystem, Enterprise systems' },
            { name: 'Python', level: 'Proficient', note: 'Data structures, scripting, algorithm design' },
            { name: 'JavaScript', level: 'Proficient', note: 'Modern ES6+, Node.js, asynchronous runtimes' },
            { name: 'SQL & PL/SQL', level: 'Proficient', note: 'Complex queries, schema design, optimization' }
          ]
        },
        {
          id: 'frameworks',
          name: 'Frameworks & Runtimes',
          short: 'Frameworks',
          desc: 'Frameworks for building modular services, RESTful endpoints, and responsive client interfaces.',
          skills: [
            { name: 'Spring Boot', level: 'Proficient', note: 'Enterprise REST services, MVC, dependency injection' },
            { name: 'Node.js & Express', level: 'Advanced', note: 'Microservices, REST API protocols, middleware' },
            { name: 'React', level: 'Proficient', note: 'Component architecture, state management, SPA' },
            { name: 'Qt Framework', level: 'Proficient', note: 'Cross-platform native desktop UI & event loops' }
          ]
        },
        {
          id: 'devops',
          name: 'Cloud, Databases & DevOps',
          short: 'DevOps',
          desc: 'Platforms and tools for database management, containerization, and distributed deployments.',
          skills: [
            { name: 'Docker', level: 'Advanced', note: 'Containerization, multi-stage builds, cloud environments' },
            { name: 'Relational Databases', level: 'Advanced', note: 'Oracle DB, PostgreSQL, MySQL, indexing' },
            { name: 'AWS & Cloud', level: 'Working Knowledge', note: 'Cloud infrastructure concepts & storage' },
            { name: 'OpenStack', level: 'Working Knowledge', note: 'Private cloud compute & infrastructure' },
            { name: 'Git & Version Control', level: 'Advanced', note: 'Branching strategies, collaborative workflows' },
            { name: 'DevSecOps & CI/CD', level: 'Proficient', note: 'Continuous integration and pipeline hygiene' }
          ]
        },
        {
          id: 'testing',
          name: 'Automated Testing & QA',
          short: 'Testing',
          desc: 'Methodologies and test runners to guarantee zero-regression software delivery.',
          skills: [
            { name: 'Selenium', level: 'Advanced', note: 'End-to-end browser automation & test suites' },
            { name: 'Jasmine', level: 'Advanced', note: 'Behavior-driven JavaScript test suites' },
            { name: 'JUnit & Mockito', level: 'Proficient', note: 'Java unit testing, mocking, and assertion pipelines' },
            { name: 'Regression Testing', level: 'Advanced', note: 'Automated test suite design & maintenance' },
            { name: 'Debugging & Profiling', level: 'Advanced', note: 'Root-cause analysis across UI and backend' }
          ]
        },
        {
          id: 'specialized',
          name: 'Specialized & Computational',
          short: 'Specialized',
          desc: 'Advanced domains bridging computational algorithms and interdisciplinary science.',
          skills: [
            { name: 'D-Wave Ocean SDK', level: 'Advanced', note: 'Quantum annealing & QUBO trajectory optimization' },
            { name: 'Quantum Annealing & QUBO', level: 'Advanced', note: 'Combinatorial optimization & path planning' },
            { name: 'Computational Biology', level: 'Academic', note: 'Minor in biology, neural networks & biological modeling' },
            { name: 'Robotics', level: 'Project', note: 'Hardware-software integration and control' }
          ]
        }
      ]
    },
    projects: {
      kicker: 'Portfolio & Code',
      title: 'Featured Projects',
      intro: 'A selection of projects demonstrating algorithmic complexity, systems engineering, backend API design, and testing rigor.',
      inspectCode: 'Inspect Source Code',
      items: [
        {
          id: 'quantum-trajectory-dwave',
          title: 'Multi-Agent Trajectory Optimization using D-Wave Quantum Computing',
          kicker: 'Honours Capstone Research Project',
          description: 'Architected and implemented a quantum multi-agent trajectory optimization system utilizing D-Wave quantum annealing hardware to solve collision-free path planning under complex spatiotemporal constraints as an Honours research project at Carleton University.',
          achievementsHeader: 'Key Technical & Quantum Achievements:',
          highlights: [
            'Formulated multi-agent trajectory routing and collision avoidance as a Quadratic Unconstrained Binary Optimization (QUBO) problem.',
            'Executed and benchmarked quantum annealing workflows on real D-Wave QPU hardware using the Ocean SDK.',
            'Engineered penalty functions to strictly enforce safety boundaries, velocity limits, and target arrival synchrony.'
          ],
          tags: ['Python', 'D-Wave Ocean SDK', 'Quantum Annealing', 'QUBO', 'Quantum Computing', 'Trajectory Optimization'],
          githubUrl: 'https://github.com/RogerPerezB/Multi-Agent-Trajectory-Optimization'
        },
        {
          id: 'portfolio-server',
          title: 'Real-Time Developer Telemetry Microservice',
          kicker: 'Backend Architecture & Distributed Systems',
          description: 'Engineered a production-ready asynchronous FastAPI microservice with APScheduler to ingest, cache, and serve real-time developer telemetry metrics (Garmin biometric sleep vitals via Intervals.icu and LeetCode algorithmic activity via GraphQL).',
          achievementsHeader: 'Key Architectural Achievements:',
          highlights: [
            'Architected a clean Layered Architecture (Controllers, Services, Schemas, Core) with async HTTPX connection pooling and in-memory hot caches.',
            'Implemented an intelligent self-terminating polling window (8:00 AM – 1:00 PM Eastern Time) with a deterministic fallback state machine to preserve external API rate limits.',
            'Containerized the entire service with multi-stage Docker and docker-compose for zero-downtime deployment on cloud PaaS (Render).'
          ],
          tags: ['Python', 'FastAPI', 'APScheduler', 'Docker', 'REST APIs', 'System Design'],
          githubUrl: 'https://github.com/RogerPerezB/portfolio_server'
        },
        {
          id: 'portfolio-frontend',
          title: 'Modern Developer Portfolio & Interactive UI',
          kicker: 'Frontend Architecture & UI/UX',
          description: 'Engineered a high-performance, accessible single-page portfolio application in React 19 and Vite featuring dynamic theming, live telemetry widgets, and runtime internationalization.',
          achievementsHeader: 'Key Architectural Achievements:',
          highlights: [
            'Engineered a custom CSS variable design system supporting smooth dark/light mode switching and responsive layouts.',
            'Implemented an in-memory internationalization (i18n) engine with instant bilingual (EN/FR) switching and persistence.',
            'Integrated live telemetry cards consuming backend APIs for real-time LeetCode solves and Garmin sleep vitals.'
          ],
          tags: ['React 19', 'Vite', 'JavaScript (ES6+)', 'CSS3', 'i18n Engine', 'UI/UX'],
          githubUrl: 'https://github.com/RogerPerezB/portfolio-frontEnd'
        },
        {
          id: 'project-in-progress',
          title: 'Upcoming Distributed System Project',
          kicker: 'Under Construction & Active Development',
          description: 'Currently architecting and engineering a new software project. Core service specifications, system schemas, and CI/CD pipelines are actively underway.',
          achievementsHeader: 'Current Development Roadmap:',
          highlights: [
            'Drafting domain model, database architecture, and REST API contract specifications.',
            'Configuring automated testing frameworks, Docker containers, and CI/CD deployment pipelines.',
            'Initial code commits and public repository release coming soon on GitHub.'
          ],
          tags: ['Under Construction', 'Active Development', 'Architecture', 'Roadmap'],
          githubUrl: 'https://github.com/RogerPerezB'
        }
      ]
    },
    contact: {
      kicker: 'Get In Touch',
      title: "Let's Connect",
      intro: 'Whether you are looking to hire a dedicated backend engineer, discuss distributed architectures, or review my credentials, I welcome your message.',
      detailsTitle: 'Contact Details',
      detailsSub: 'Available for full-time, hybrid, and remote software engineering opportunities in the Gatineau/Ottawa area, Montreal, and across Canada.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'Gatineau, QC',
      linkedinBtn: 'LinkedIn Profile',
      githubBtn: 'GitHub Repositories',
      actionTitle: 'Ready to review qualifications?',
      actionDesc: 'Explore my verified employment history, academic honors, and categorized technical stack inside the interactive CV viewer, or launch an email directly.',
      launchCvBtn: 'Launch Interactive CV',
      composeEmailBtn: 'Compose Email Directly',
      statusLabel: 'Current Status:',
      statusValue: 'Open to new opportunities',
      statusDetail: 'Actively interviewing for Junior / Intermediate Software & Backend Developer positions.'
    },
    footer: {
      tagline: 'Roger Perez Becerra · Software & Backend Developer',
      subtext: 'Carleton University Honours Computer Science Graduate · Gatineau, QC',
      navCol: 'Navigation',
      credCol: 'Credentials',
      interactiveCv: 'Interactive CV',
      github: 'GitHub Profile',
      linkedin: 'LinkedIn Profile',
      builtWith: 'Built with React & Vite.',
      trilingual: 'Trilingual: English · Français · Español',
      topBtn: 'Top'
    },
    cvModal: {
      badge: 'Interactive Resume',
      subtitle: 'Software Developer • Honours Computer Science Graduate',
      copyInfo: 'Copy Info',
      copied: 'Copied!',
      downloadPdf: 'Download PDF',
      noticeTitle: 'PDF Download Setup',
      noticeText: 'We are configuring your finalized PDF download together. In the meantime, all verified CV information is fully interactive and searchable below!',
      tabs: {
        all: 'All Sections',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        honors: 'Honors',
        languages: 'Languages'
      },
      searchPlaceholder: 'Filter by keyword (e.g. Java, SQL, Selenium)...',
      summaryTitle: 'Professional Summary',
      summaryText: 'Passionate Computer Science graduate with a relentless drive to solve complex challenges efficiently. Enthusiastic about quantum computing, particularly its applications in communications and algorithm design, and deeply interested in the intersection of biology, machine learning, and neural networks. Experienced in developing agile, scalable code in cloud environments, with a proven record of delivering clean, high-quality solutions through teamwork and hands-on projects, including robotics.',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education',
      skillsTitle: 'Technical Skills Matrix',
      honorsTitle: 'Honors & Accomplishments',
      languagesTitle: 'Language Proficiencies',
      noResults: 'No entries match',
      footerNote: 'References available upon request • Gatineau, QC / Ottawa & Remote',
      closeBtn: 'Close Viewer'
    }
  },

  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      interactiveCv: 'CV interactif',
      exploreCv: 'Consulter le CV interactif',
    },
    hero: {
      status: 'Disponible pour des postes de développeur logiciel & backend',
      greeting: 'Bonjour, je suis',
      name: 'Roger Perez Becerra',
      tagline: "Développeur Logiciel · Systèmes Distribués · Architectures d'API",
      bio: "Diplômé avec distinction (Honours) en informatique de l'Université Carleton avec une mineure en biologie. Passionné par la conception de systèmes backend performants, d'API REST robustes et de pipelines de tests automatisés. Expérimenté avec Java, Python, C++, Node.js et les environnements infonuagiques.",
      coreFocus: 'Technologies clés :',
      exploreCvBtn: 'Consulter le CV interactif',
      viewProjectsBtn: 'Voir les projets en vedette',
      contactMeBtn: 'Me contacter',
    },
    about: {
      kicker: 'Parcours & Philosophie',
      title: 'À propos de moi',
      lead: 'Je suis un développeur logiciel animé par la création de systèmes backend fiables, d’algorithmes performants et d’architectures de données résilientes.',
      p1: "Titulaire d'un baccalauréat spécialisé (Honours) en informatique avec une mineure en biologie de l'Université Carleton, j'allie de solides assises théoriques à une pratique concrète du génie logiciel. Mon expertise relie les langages de bas niveau (C++, Java) aux piles Web et infonuagiques modernes (Python, Node.js, Docker, SQL).",
      p2: "Fort de mes expériences en développement logiciel et en automatisation de tests chez Inteloom Inc et Limitless Digital Agency, j'interviens sur l'ensemble du cycle de vie logiciel : modélisation de bases de données relationnelles, développement d'API REST et automatisation de suites de tests avec Selenium et Jasmine.",
      highlight1Title: 'Orientation Backend & Données :',
      highlight1Text: 'Accent mis sur des contrats d’API rigoureux, la normalisation de bases de données et des services infonuagiques évolutifs.',
      highlight2Title: 'Fiabilité & Priorité aux Tests :',
      highlight2Text: 'Pratique éprouvée des tests unitaires et de régression automatisés, développée à travers des mandats en assurance qualité et backend.',
      highlight3Title: 'Professionnel Trilingue :',
      highlight3Text: 'Maîtrise native / bilingue du français, de l’anglais et de l’espagnol dans la région de Gatineau / Ottawa et Montréal.',
      eduTitle: 'Formation',
      eduSchool: 'Université Carleton · Ottawa',
      eduDegree: 'Baccalauréat spécialisé en informatique, mineure en biologie',
      eduGrad: 'Diplômé en 02/2026',
      honorsTitle: 'Distinctions & Honneurs',
      honor1: 'Employé recrue de l’année : Inteloom Inc',
      honor2: 'Bourse d’excellence académique : Université Carleton',
      honor3: 'Liste d’honneur du doyen : Collège Heritage (DEC Sciences)',
      langTitle: 'Langues',
      langEn: 'Anglais : Langue maternelle / Bilingue',
      langFr: 'Français : Langue maternelle / Bilingue',
      langEs: 'Espagnol : Langue maternelle / Bilingue',
      langPt: 'Portugais : Notions de travail',
    },
    experience: {
      kicker: 'Parcours professionnel',
      title: 'Expérience de travail',
      intro: "Parcours concret en génie logiciel, développement d'API backend, optimisation SQL et automatisation de tests.",
      ctaTitle: 'Vous souhaitez consulter l’ensemble de mes réalisations professionnelles et académiques ?',
      ctaSubtitle: 'Explorez le parcours complet, les distinctions et les cours suivis dans le visualiseur de CV interactif.',
      ctaBtn: 'Ouvrir le CV interactif',
      items: [
        {
          role: 'Développeur logiciel Full Stack',
          company: 'Limitless Digital Agency',
          period: '05/2023 – 08/2023',
          location: 'À distance',
          description: "Supervision du cycle de développement complet et transformation d'exigences d'affaires complexes en fonctionnalités Web performantes.",
          bullets: [
            'Conception et implémentation de fonctionnalités clés sur la plateforme HighLevel en respectant scrupuleusement les spécifications techniques.',
            'Gestion et optimisation approfondies des bases de données relationnelles et requêtes SQL pour accélérer le traitement des données.',
            'Intégration fluide d’API interservices, interfaces réactives et préservation rigoureuse de l’intégrité des données.'
          ],
          skills: ['Développement cycle complet', 'SQL & SGBDR', 'Intégration d’API', 'Optimisation de données', 'Plateforme HighLevel']
        },
        {
          role: 'Développeur logiciel junior',
          company: 'Inteloom Inc',
          period: '05/2022 – 12/2022',
          location: 'Gatineau, QC',
          award: 'Employé recrue de l’année',
          description: "Collaboration étroite avec l'équipe d'ingénierie pour diagnostiquer les goulots d'étranglement backend, livrer de nouvelles fonctionnalités et rehausser la qualité du code.",
          bullets: [
            'Diagnostic, résolution et documentation d’anomalies critiques de l’interface et du backend, renforçant la stabilité applicative.',
            'Développement de nouvelles fonctionnalités en exploitant Java, Node.js et les protocoles standardisés d’API REST.',
            'Rédaction de suites exhaustives de tests unitaires pour prévenir les régressions et assurer une couverture de code élevée.',
            'Récipiendaire du prix « Recrue de l’année » pour l’assimilation technique rapide et la rigueur d’exécution.'
          ],
          skills: ['Java', 'Node.js', 'API REST', 'Tests unitaires', 'Dépannage backend', 'Méthodologie Agile']
        },
        {
          role: 'Développeur en automatisation des tests',
          company: 'Inteloom Inc',
          period: '05/2021 – 08/2021',
          location: 'Gatineau, QC',
          description: "Conception de suites de tests automatisés et de flux de validation garantissant la fiabilité logicielle en production.",
          bullets: [
            'Conception de scripts de tests de bout en bout et de non-régression modulaires et évolutifs avec JavaScript, Jasmine et Selenium.',
            'Optimisation des pipelines d’assurance qualité, réduisant considérablement la charge de vérification manuelle.',
            'Collaboration étroite avec les équipes de développement pour cerner les cas limites et formaliser les critères d’acceptation.'
          ],
          skills: ['JavaScript', 'Selenium', 'Jasmine', 'Automatisation des tests', 'Tests de non-régression']
        }
      ]
    },
    skills: {
      kicker: 'Stack technique',
      title: 'Compétences & Expertise',
      intro: 'Structuré par domaine pour mettre en valeur la maîtrise du backend, la rigueur des tests automatisés et la polyvalence multiplateforme.',
      allTab: 'Toutes les compétences',
      levels: {
        advanced: 'Avancé',
        proficient: 'Maîtrisé',
        working: 'Notions pratiques',
        academic: 'Académique',
        project: 'Projet'
      },
      categories: [
        {
          id: 'languages',
          name: 'Langages & Cœur Backend',
          short: 'Langages',
          desc: 'Langages fondamentaux pour la programmation système, les architectures backend et la manipulation de données.',
          skills: [
            { name: 'C++', level: 'Avancé', note: 'Programmation système, gestion mémoire, Qt' },
            { name: 'C#', level: 'Avancé', note: 'Développement orienté objet et architecture' },
            { name: 'C', level: 'Avancé', note: 'Informatique bas niveau et modèle mémoire' },
            { name: 'Java', level: 'Maîtrisé', note: 'POO, écosystème Spring, systèmes d’entreprise' },
            { name: 'Python', level: 'Maîtrisé', note: 'Structures de données, automatisation, algorithmique' },
            { name: 'JavaScript', level: 'Maîtrisé', note: 'ES6+ moderne, Node.js, exécution asynchrone' },
            { name: 'SQL & PL/SQL', level: 'Maîtrisé', note: 'Requêtes complexes, modélisation de schémas, optimisation' }
          ]
        },
        {
          id: 'frameworks',
          name: 'Frameworks & Environnements',
          short: 'Frameworks',
          desc: 'Frameworks pour la création de services modulaires, de points de terminaison REST et d’interfaces réactives.',
          skills: [
            { name: 'Spring Boot', level: 'Maîtrisé', note: 'Services REST d’entreprise, MVC, injection de dépendances' },
            { name: 'Node.js & Express', level: 'Avancé', note: 'Microservices, protocoles d’API REST, intergiciels' },
            { name: 'React', level: 'Maîtrisé', note: 'Architecture par composants, gestion d’état, SPA' },
            { name: 'Qt Framework', level: 'Maîtrisé', note: 'Interfaces graphiques natives de bureau et boucles d’événements' }
          ]
        },
        {
          id: 'devops',
          name: 'Infonuagique, Bases de données & DevOps',
          short: 'DevOps',
          desc: 'Plateformes et outils pour la gestion des bases de données, la conteneurisation et le déploiement continu.',
          skills: [
            { name: 'Docker', level: 'Avancé', note: 'Conteneurisation, builds multi-étapes, environnements cloud' },
            { name: 'Bases de données relationnelles', level: 'Avancé', note: 'Oracle DB, PostgreSQL, MySQL, indexation' },
            { name: 'AWS & Infonuagique', level: 'Notions pratiques', note: 'Concepts d’infrastructure cloud et stockage' },
            { name: 'OpenStack', level: 'Notions pratiques', note: 'Infrastructures et virtualisation cloud privé' },
            { name: 'Git & Contrôle de version', level: 'Avancé', note: 'Stratégies de branches, travail d’équipe collaboratif' },
            { name: 'DevSecOps & CI/CD', level: 'Maîtrisé', note: 'Intégration continue et hygiène de pipeline' }
          ]
        },
        {
          id: 'testing',
          name: 'Tests automatisés & Assurance qualité',
          short: 'Tests',
          desc: 'Méthodologies et outils de tests pour garantir une livraison logicielle sans régressions.',
          skills: [
            { name: 'Selenium', level: 'Avancé', note: 'Automatisation de navigateurs et suites de tests E2E' },
            { name: 'Jasmine', level: 'Avancé', note: 'Suites de tests JavaScript orientées comportement (BDD)' },
            { name: 'JUnit & Mockito', level: 'Maîtrisé', note: 'Tests unitaires Java, mocks et assertions' },
            { name: 'Tests de non-régression', level: 'Avancé', note: 'Conception et maintenance de suites de tests' },
            { name: 'Débogage & Profilage', level: 'Avancé', note: 'Analyse de cause première UI et backend' }
          ]
        },
        {
          id: 'specialized',
          name: 'Spécialisation & Calcul scientifique',
          short: 'Spécialisé',
          desc: 'Domaines avancés reliant algorithmes informatiques et sciences interdisciplinaires.',
          skills: [
            { name: 'SDK D-Wave Ocean', level: 'Avancé', note: 'Recuit quantique & optimisation de trajectoires QUBO' },
            { name: 'Recuit quantique & QUBO', level: 'Avancé', note: 'Optimisation combinatoire & planification de trajectoires' },
            { name: 'Biologie computationnelle', level: 'Académique', note: 'Mineure en biologie, réseaux de neurones & modélisation' },
            { name: 'Robotique', level: 'Projet', note: 'Intégration et contrôle logiciel-matériel' }
          ]
        }
      ]
    },
    projects: {
      kicker: 'Réalisations & Code',
      title: 'Projets en vedette',
      intro: "Une sélection de projets illustrant la maîtrise de l'algorithmique, de l'ingénierie système, des API backend et de la rigueur des tests.",
      inspectCode: 'Consulter le code source',
      items: [
        {
          id: 'quantum-trajectory-dwave',
          title: 'Optimisation de Trajectoires Multi-Agents par Calcul Quantique D-Wave',
          kicker: 'Projet de recherche spécialisée (Honours)',
          description: 'Conception et implémentation d’un système quantique d’optimisation de trajectoires multi-agents exploitant le recuit quantique D-Wave pour résoudre la planification de trajectoires sans collision sous contraintes spatio-temporelles à l’Université Carleton.',
          achievementsHeader: 'Points saillants techniques et quantiques :',
          highlights: [
            'Modélisation du routage multi-agents et de l’évitement de collisions sous forme de problème binaire quadratique sans contrainte (QUBO).',
            'Exécution et analyse comparative des flux de recuit quantique sur processeur QPU D-Wave réel via le SDK Ocean.',
            'Formulation de fonctions de pénalité pour garantir le respect strict des zones de sécurité, des limites de vitesse et de la synchronisation d’arrivée.'
          ],
          tags: ['Python', 'SDK D-Wave Ocean', 'Recuit quantique', 'QUBO', 'Calcul quantique', 'Optimisation de trajectoires'],
          githubUrl: 'https://github.com/RogerPerezB/Multi-Agent-Trajectory-Optimization'
        },
        {
          id: 'portfolio-server',
          title: 'Microservice de Télémétrie Développeur en Temps Réel',
          kicker: 'Architecture Backend & Systèmes Distribués',
          description: "Conception d'un microservice asynchrone FastAPI avec APScheduler pour ingérer, mettre en cache et servir des métriques de télémétrie en temps réel (données vitales de sommeil Garmin via Intervals.icu et activités algorithmiques LeetCode via GraphQL).",
          achievementsHeader: 'Points saillants d’architecture :',
          highlights: [
            "Architecture en couches rigoureuse (Contrôleurs, Services, Schémas Pydantic, Core) avec mutualisation de connexions HTTPX asynchrones et cache chaud en mémoire.",
            "Mise en œuvre d'une fenêtre de scrutation intelligente auto-terminante (8 h à 13 h, heure de l'Est) avec repli déterministe pour respecter les quotas d'API.",
            "Conteneurisation complète avec Docker et docker-compose pour un déploiement continu et résilient sur PaaS cloud (Render)."
          ],
          tags: ['Python', 'FastAPI', 'APScheduler', 'Docker', 'API REST', 'Architecture système'],
          githubUrl: 'https://github.com/RogerPerezB/portfolio_server'
        },
        {
          id: 'portfolio-frontend',
          title: 'Portfolio Développeur Moderne & Interface UI',
          kicker: 'Architecture Frontend & UI/UX',
          description: "Développement d’une application Web monopage haute performance en React 19 et Vite avec thématisation dynamique, widgets de télémétrie en direct et internationalisation intégrée.",
          achievementsHeader: 'Points saillants d’architecture :',
          highlights: [
            "Conception d’un système de design CSS modulaire avec bascule fluide sombre/clair et adaptabilité mobile complète.",
            "Mise en œuvre d’un moteur d’internationalisation (i18n) avec bascule bilingue instantanée (FR/EN) sans rechargement.",
            "Intégration d’appels API en temps réel reliant l’interface aux microservices de télémétrie Garmin et LeetCode."
          ],
          tags: ['React 19', 'Vite', 'JavaScript (ES6+)', 'CSS3', 'Moteur i18n', 'UI/UX'],
          githubUrl: 'https://github.com/RogerPerezB/portfolio-frontEnd'
        },
        {
          id: 'project-in-progress',
          title: 'Projet Système Distribué en Cours',
          kicker: 'En Construction & Développement Actif',
          description: "Architecture et ingénierie d’un nouveau projet logiciel en cours d’élaboration. Les spécifications de services, schémas système et pipelines CI/CD sont activement en développement.",
          achievementsHeader: 'Feuille de route du développement :',
          highlights: [
            "Élaboration du modèle de domaine, de l’architecture de base de données et des contrats d’API REST.",
            "Mise en place des suites de tests automatisés, conteneurs Docker et flux CI/CD.",
            "Premières livraisons de code et publication du dépôt public bientôt disponibles sur GitHub."
          ],
          tags: ['En construction', 'Développement actif', 'Architecture', 'Feuille de route'],
          githubUrl: 'https://github.com/RogerPerezB'
        }
      ]
    },
    contact: {
      kicker: 'Prendre contact',
      title: 'Discutons ensemble',
      intro: "Que vous souhaitiez recruter un développeur backend rigoureux, échanger sur les architectures distribuées ou consulter mon parcours, je lirai votre message avec grand intérêt.",
      detailsTitle: 'Coordonnées',
      detailsSub: "Disponible pour des opportunités en génie logiciel à temps plein, en mode hybride ou à distance dans la région de Gatineau / Ottawa, à Montréal et partout au Canada.",
      emailLabel: 'Courriel',
      phoneLabel: 'Téléphone',
      locationLabel: 'Emplacement',
      locationValue: 'Gatineau, QC',
      linkedinBtn: 'Profil LinkedIn',
      githubBtn: 'Dépôts GitHub',
      actionTitle: 'Prêt à évaluer mes compétences ?',
      actionDesc: 'Explorez mon parcours professionnel validé, mes distinctions académiques et mes compétences techniques dans le visualiseur de CV interactif, ou écrivez-moi directement.',
      launchCvBtn: 'Ouvrir le CV interactif',
      composeEmailBtn: 'Envoyer un courriel direct',
      statusLabel: 'Statut actuel :',
      statusValue: 'Ouvert à de nouvelles opportunités',
      statusDetail: 'Activement en entrevue pour des postes de développeur logiciel & backend junior / intermédiaire.'
    },
    footer: {
      tagline: 'Roger Perez Becerra · Développeur Logiciel & Backend',
      subtext: "Diplômé spécialisé en informatique de l'Université Carleton · Gatineau, QC",
      navCol: 'Navigation',
      credCol: 'Accès rapide',
      interactiveCv: 'CV interactif',
      github: 'Profil GitHub',
      linkedin: 'Profil LinkedIn',
      builtWith: 'Conçu avec React & Vite.',
      trilingual: 'Trilingue : Français · English · Español',
      topBtn: 'Haut'
    },
    cvModal: {
      badge: 'CV Interactif',
      subtitle: 'Développeur Logiciel • Diplômé avec distinction en informatique',
      copyInfo: 'Copier les infos',
      copied: 'Copié !',
      downloadPdf: 'Télécharger le PDF',
      noticeTitle: 'Configuration du téléchargement PDF',
      noticeText: 'Nous configurons ensemble la version PDF finale téléchargeable. En attendant, toutes les informations vérifiées de mon CV sont accessibles et consultables ci-dessous !',
      tabs: {
        all: 'Toutes les sections',
        experience: 'Expérience',
        education: 'Formation',
        skills: 'Compétences',
        honors: 'Distinctions',
        languages: 'Langues'
      },
      searchPlaceholder: 'Filtrer par mot-clé (ex. : Java, SQL, Selenium)...',
      summaryTitle: 'Sommaire professionnel',
      summaryText: "Diplômé passionné en informatique avec une forte volonté de résoudre efficacement des défis techniques complexes. Enthousiaste à propos de l'informatique quantique, particulièrement ses applications en communication et conception d'algorithmes, et vivement intéressé par l'intersection de la biologie, de l'apprentissage automatique et des réseaux neuronaux. Expérimenté dans le développement agile et évolutif en environnement infonuagique, avec une feuille de route démontrée de solutions logicielles propres et de qualité.",
      experienceTitle: 'Expérience professionnelle',
      educationTitle: 'Formation académique',
      skillsTitle: 'Matrice des compétences techniques',
      honorsTitle: 'Distinctions & Honneurs',
      languagesTitle: 'Compétences linguistiques',
      noResults: 'Aucun résultat ne correspond à',
      footerNote: 'Références disponibles sur demande • Gatineau, QC / Ottawa & Télétravail',
      closeBtn: 'Fermer le visualiseur'
    }
  }
};

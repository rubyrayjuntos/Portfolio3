
import { Project } from './types';

export const FACETS_CONFIG = {
  genres: [
    // Core creative genres
    "Literary Fiction",
    "Speculative Fiction",
    "Romance",
    
    // Interactive & Digital
    "Interactive/Web",
    
    // Visual Arts
    "Concept Art",
    
    // Specialized
    "Tarot",
    "Education",
    "Marketing"
  ],
  styles: [
    // Narrative approaches
    "Character-Driven",
    "Narrative-Driven",
    "Philosophical",
    "Symbolic",
    
    // Aesthetic approaches
    "Expressive",
    "Modern",
    "Atmospheric"
  ],
  technologies: [
    // Frontend Technologies
    "JavaScript",
    "HTML5",
    "CSS3",
    "React",
    "Three.js",
    "WebGL",
    "Python",
    "CrewAI",
    "Pydantic"
  ],
  moods: [
    // Emotional tones
    "Mystical",
    "Romantic",
    "Dramatic",
    "Contemplative",
    "Inspiring",
    
    // Energy levels
    "Energetic",
    "Playful",
    
    // Functional moods
    "Educational",
    "Technical"
  ]
};

export const PROJECTS: Project[] = [
  {
    "id": 2,
    "title": "Asteroids",
    "description": "Classic arcade game modernized for mobile, bringing the timeless gameplay of Asteroids to contemporary mobile devices with enhanced graphics and touch controls.",
    "imageUrl": "/images/projects/asteroids/card-hero.jpg",
    "medium": "code",
    "genre": [
      "Interactive/Web"
    ],
    "style": [
      "Modern",
      "Responsive"
    ],
    "tech": [
      "JavaScript",
      "HTML5"
    ],
    "mood": "Energetic",
    "year": 2025,
    "role": "Game Developer, Mobile Developer, UI/UX Designer",
    "variant": "wide",
    "status": "live",
    "links": {
      "PLAY": "https://rubyrayjuntos.github.io/AstroNova/"
    },
    "pitch": "A modern take on the classic Asteroids arcade game, optimized for mobile devices while preserving the timeless gameplay that made the original so beloved.",
    "challenge": "Adapting the classic keyboard/mouse controls to touch interfaces while maintaining the precise, responsive feel of the original game.",
    "development": "Recreated the core gameplay mechanics using modern web technologies, optimized for mobile performance and touch controls.",
    "outcome": "A faithful recreation of the classic Asteroids experience that works seamlessly on mobile devices.",
    "gallery": [
      {
        "url": "/images/projects/asteroids/asteroids-gameplay-screenshot.jpg",
        "title": "Gameplay Screenshot",
        "description": "In-game screenshot showing the modernized Asteroids gameplay",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/asteroids/asteroids-mobile-interface.jpg",
        "title": "Mobile Interface",
        "description": "Touch-optimized controls and mobile interface design",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/asteroids/asteroids-explosion.png",
        "title": "Asteroids Exploding",
        "description": "Get satisfaction destroying asteroids that get in the way of your laser",
        "dimensions": "800x600"
      },
      {
        "url": "/images/projects/asteroids/asteroids-gameplay.png",
        "title": "Gameplay",
        "description": "Gameplay engineered to feel like the original",
        "dimensions": "800x600"
      },
      {
        "url": "/images/projects/asteroids/asteroids-game-over.png",
        "title": "Game Over",
        "description": "We're sorry, but you lost :(",
        "dimensions": "800x600"
      },
      {
        "url": "/images/projects/asteroids/asteroids-high-score.png",
        "title": "High Score",
        "description": "Scoring system like the original - HIGH SCORE!",
        "dimensions": "800x600"
      },
      {
        "url": "/images/projects/asteroids/asteroids-enhanced-graphics.jpg",
        "title": "Enhanced Graphics",
        "description": "Modern graphics and visual effects while maintaining retro aesthetic",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Game Analysis",
        "description": "Studied the original Asteroids gameplay mechanics and design principles and created a comprehensive technical/functional specification to make development rapid"
      },
      {
        "title": "Mobile Adaptation",
        "description": "Designed touch controls that preserve the original game feel while adapting for mobile players."
      },
      {
        "title": "Technical Implementation",
        "description": "Built the game using HTML5 Canvas and JavaScript for cross-platform compatibility"
      },
      {
        "title": "Performance Optimization",
        "description": "Optimized for smooth gameplay on mobile devices, and thoroughly tested performance from dev start to release."
      },
      {
        "title": "User Testing",
        "description": "Refined controls and gameplay based on user feedback - because in the end, it is the players that matter."
      }
    ],
    "specs": [
      {
        "title": "Game Engine",
        "description": "Custom game engine built with HTML5 Canvas and JavaScript. No library dependancies to worry about."
      },
      {
        "title": "Mobile Optimization",
        "description": "Optimized for touch controls and mobile-first design principles."
      },
      {
        "title": "Graphics",
        "description": "Enhanced graphics while maintaining core retro aesthetic - it was already perfect, I just adapted it for web and mobile."
      },
      {
        "title": "Performance",
        "description": "Smooth 60fps gameplay optimized for mobile hardware"
      }
    ],
    "artifacts": [
      {
        "name": "GitHub Repository",
        "description": "Source code repository with full game implementation",
        "url": "https://github.com/rubyrayjuntos/AstroNova",
        "icon": "⭐"
      },
      {
        "name": "Game Design Document: Technical and Functional Spec",
        "description": "Complete game design specification including mechanics, controls, and gameplay flow. All the thought went into this document so that development took a week.",
        "url": "_data/projects/asteroids/asteroids-specs.md",
        "icon": "🎮"
      },
      {
        "name": "High Level Game Design Document",
        "description": "High level game design specification including mechanics, controls, and gameplay flow",
        "url": "_data/projects/asteroids/game-design.md",
        "icon": "🎮"
      },
      {
        "name": "Technical Architecture",
        "description": "Detailed technical architecture showing game engine structure and optimization",
        "url": "_data/projects/asteroids/technical-architecture.md",
        "icon": "🏗️"
      },
      {
        "name": "Performance Benchmarks",
        "description": "Mobile performance testing results and optimization strategies",
        "url": "_data/projects/asteroids/performance-benchmark-report.md",
        "icon": "⚡"
      },
      {
        "name": "Touch Control Design",
        "description": "Detailed documentation of touch control adaptation from keyboard/mouse input",
        "url": "_data/projects/asteroids/touch-control-design.md",
        "icon": "👆"
      },
      {
        "name": "User Testing Results",
        "description": "User feedback and testing results that informed control refinements",
        "url": "_data/projects/asteroids/user-testing.md",
        "icon": "👥"
      },
      {
        "name": "README and Deployment Guide",
        "description": "Step-by-step instructions for deploying the game to mobile platforms",
        "url": "_data/projects/asteroids/README.md",
        "icon": "🚀"
      }
    ]
  },
  {
    "id": 3,
    "title": "Brand Identity Workflow",
    "description": "A comprehensive AI-powered system for automating brand identity creation and marketing campaign development using multi-agent orchestration.",
    "imageUrl": "/images/projects/brand-identity-workflow/card-hero.jpg",
    "medium": "code",
    "genre": [
      "Interactive/Web",
      "Marketing"
    ],
    "style": [
      "Modern"
    ],
    "tech": [
      "Python",
      "CrewAI",
      "OpenAI API",
      "Pydantic",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "mood": "Technical",
    "year": 2024,
    "role": "Systems Architect, Automation Engineer",
    "variant": "system",
    "status": "live",
    "links": {
      "github": "https://github.com/rubyrayjuntos/brand_identity_workflow"
    },
    "pitch": "The Advanced Multi-Agent System (MAS) is a sophisticated AI-powered workflow designed for comprehensive brand identity management and marketing strategy development. Built on the CrewAI framework, this system implements a hierarchical agent architecture that orchestrates specialized AI agents to deliver structured, production-ready brand assets and marketing strategies.",
    "challenge": "Creating a sophisticated workflow that can generate production-ready brand assets and marketing strategies through intelligent agent coordination while maintaining structured, validated outputs.",
    "development": "Built with CrewAI framework implementing hierarchical agent architecture, Pydantic models for data validation, and multiple deployment options from simple HTML interface to advanced multi-agent system.",
    "outcome": "A comprehensive brand identity automation system that delivers structured, production-ready brand assets and marketing strategies with both simple and advanced implementation options.AI agent types: brand identity, worker agent (logo concept designer), worker agent (color palette specialist), worker agent (visual style guide creator), manager agent (marketing campaign coordinator), worker agent (social media content strategist), worker agent (email marketing strategist), worker agent (social media video producer)",
    "gallery": [
      {
        "url": "/images/projects/brand-identity-workflow/card-hero.jpg",
        "title": "Brand Identity Workflow",
        "description": "You have a marketing team ready to help with a button click",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/brand-identity-workflow/brand-identity-workflow-simple-gui.jpg",
        "title": "Generated Brand Assets",
        "description": "With a few guiding directions you can kick off your branding discussions.",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "System Architecture Design",
        "description": "Designed hierarchical multi-agent system with manager and worker agents for specialized brand identity and marketing tasks"
      },
      {
        "title": "Pydantic Model Implementation",
        "description": "Created comprehensive data models for structured outputs including LogoConcept, ColorPalette, StyleGuide, and MarketingOutput"
      },
      {
        "title": "Agent Development",
        "description": "Implemented specialized agents for logo design, color theory, style guide creation, and marketing strategy development"
      },
      {
        "title": "Simple HTML Interface",
        "description": "Built zero-setup HTML interface for immediate brand identity generation without installation requirements"
      },
      {
        "title": "Advanced Multi-Agent System",
        "description": "Developed full CrewAI-based system with hierarchical delegation and comprehensive workflow orchestration"
      }
    ],
    "specs": [
      {
        "title": "Hierarchical Management",
        "description": "Manager agents coordinate worker agents for specialized tasks, efficient task distribution and execution, clear responsibility separation."
      },
      {
        "title": "Structured Data Flow",
        "description": "Pydantic models ensure consistent, validated outputs, type safety and data integrity enforcement, consistent data structure across all agents."
      },
      {
        "title": "Modular Design",
        "description": "Separate concerns between brand identity and marketing workflows,modular agent and tool design "
      },
      {
        "title": "Extensible Framework",
        "description": "Easy addition of new agents, tools, and output types. Easy addition of new capabilities, scalable workflow management."
      },
      {
        "title": "Deployment Options",
        "description": "Simple HTML file (zero setup), Python package with virtual environment, or advanced multi-agent system with full API integration"
      },
      {
        "title": "Cost Efficiency",
        "description": "~$0.02-0.05 per brand identity generation, with comprehensive outputs including logos, color palettes, style guides, and marketing strategies"
      }
    ],
    "features": [
      "Brand Logo Concept: name, description, rationale, style, use cases, variations.",
      "Brand Color Palette: primary (name, hex, rgb, cmyk, usage, psychology), secondary, accent, neutral, rationale, accessibiltiy notes, additional colors",
      "Brand Style Guide: brand overview, guidelines, color guidelines, typography (Primary and Secondary fonts, font weights and sizes, usage guidelines), imagery style (Photography style, illustration style, icon style, examples), digital guidelines",
      "Brand Identity: brand voice, target audience, industry",
      "Brand Social Media Posts with captions, hastags, visual concepts, call to action, optimal posting time, and engagement tips",
      "Email Campaing Model: campaign type, subject line, preheader, body content, coall to action, cta link, personalization fields, automation triggers.",
      "Email Marketing Strategy: campaigns, design guidelines, personalization strategies, automation workflows, performance metrics",
      "Video script and content: conecpt, duration, aspect ratio, script, production notes, call to action, videos, content themes, production guidelines, platform specific requirements",
      "Brand Brief: industry, target audience, brand values, style preference, desire mood, brand voice, mission, vision, competitors, unique selling proposition, marketing goals, budget considerations, timeline",
      "Workflow Result: brand briefs, brand identity, marketing, metadata"
    ],
    "achievements": [
      "Reduced brand identity creation time from weeks to minutes",
      "Implemented structured data validation ensuring consistent outputs",
      "Created both simple and advanced implementation options",
      "Developed comprehensive agent specialization for quality results",
      "Achieved cost-effective AI-powered brand development",
      "Built extensible framework for future enhancements"
    ],
    "artifacts": [
      {
        "name": "README.md",
        "description": "Comprehensive overview of the multi-agent system architecture and data flows",
        "url": "_data/projects/brand-identity-workflow/README.md",
        "icon": "🏗️"
      },
      {
        "name": "System architecture documentation",
        "description": "The Brand Identity Management System implements a sophisticated **hierarchical multi-agent architecture** using the CrewAI framework. This design enables coordinated execution of complex brand identity and marketing tasks through specialized AI agents working in concert.",
        "url": "_data/projects/brand-identity-workflow/architecture.md",
        "icon": "🔥"
      },
      {
        "name": "Multi-agent system specification",
        "description": "The Brand Identity Management System implements a sophisticated **Multi-Agent System (MAS)** using the CrewAI framework. This system coordinates 8 specialized AI agents to deliver complete brand identity and marketing strategy solutions.",
        "url": "_data/projects/brand-identity-workflow/documents/mas-specification.md",
        "icon": "🪄"
      },
      {
        "name": "API integration and data validation",
        "description": "The Brand Identity Management System integrates with multiple AI APIs and implements comprehensive data validation patterns to ensure structured, reliable outputs. This document details the integration architecture and validation strategies.",
        "url": "_data/projects/brand-identity-workflow/documents/api-integration.md",
        "icon": "💌"
      },
      {
        "name": "Demo system documentation",
        "description": "The Brand Identity Management System includes multiple demo options designed to showcase the system's capabilities at different levels of complexity and technical depth. These demos serve both immediate user validation and comprehensive portfolio presentation needs.",
        "url": "_data/projects/brand-identity-workflow/documents/demo-system.md",
        "icon": "🔮"
      },
      {
        "name": "Technical Specification",
        "description": "The **Brand Identity Management Workflow** is a sophisticated AI-powered system designed for comprehensive brand identity creation and marketing strategy development. Built on the CrewAI framework, this system implements a hierarchical agent architecture that orchestrates specialized AI agents to deliver structured, production-ready brand assets and marketing strategies.",
        "url": "_data/projects/brand-identity-workflow/technical-specs.md",
        "icon": "✨"
      },
      {
        "name": "Functional and Technical Specification",
        "description": "This document outlines the development of an AI agent workflow designed to automate and assist with brand identity management and community engagement. The system will handle core brand elements like logo and color palette decisions, visual style guide creation, and marketing activities such as social media and email campaign management. It will provide both functional and technical specifications, detailing what the system will do from a user's perspective and how it will be built from an engineering perspective, respectively, with brand templates as key outputs. The solution envisions multiple interconnected AI agents, leveraging large language models and integrating with various APIs to achieve a modular and scalable system.",
        "url": "_data/projects/brand-identity-workflow/documents/technical-functional-specs.md",
        "icon": "🚀"
      }
    ]
  },
  {
    "id": 4,
    "title": "Cartas del Deseo",
    "description": "A <em>sensual fusion</em> of <strong>AI mysticism</strong> and <code>component-driven UI</code>, this project transforms tarot into a telenovela. Users receive real-time readings from <strong>Papi Chispa</strong>—a velvet-voiced, Spanglish oracle rendered in dramatic Cartas del Deseo visuals.",
    "imageUrl": "/images/projects/cartas-del-deseo/card-hero.jpg",
    "medium": "code",
    "genre": [
      "Interactive/Web"
    ],
    "style": [],
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "OpenAI API"
    ],
    "mood": "Dramatic",
    "year": 2025,
    "role": "Architect • Front-End Developer • AI Whisperer",
    "variant": "interactive application",
    "status": "Launched 💋",
    "links": {
      "github": "https://github.com/rubyrayjuntos/ViteaTSRE"
    },
    "pitch": "**A seductive, AI-powered tarot experience with a modular dark-mode UI and a soul.**",
    "challenge": "Orchestrating dynamic <strong>AI storytelling</strong> and reusable front-end components within a flexible, JSON-driven structure—without sacrificing poetry or performance.",
    "development": "The system was designed using a <em>content-first</em> approach. A decoupled architecture allowed tarot content and persona voice to live in JSON, while the <strong>Lazy Léon UI system</strong> handled theming, animation, and interactive flow. Integration with <code>GPT-4</code> brought emotional narrative and voice consistency to the experience.",
    "outcome": "The final build is a fully responsive, interactive tarot experience that feels like <em>you’re being seduced by code</em>. Every spread is a scene. Every reading, a confession. <strong>Papi</strong> guides users through ritualized UX, offering spreads like <code>The Pact</code> and <code>Forbidden Flame</code>—each accompanied by dramatic visuals and voice-rich narration.",
    "gallery": [
      {
        "url": "/images/projects/cartas-del-deseo/welcome.webp",
        "title": "🔥 Entrance to Papi Chispa's Velvet Lound",
        "description": "The interface is simple and spontaneous. Ask your question and choose your spread."
      },
      {
        "url": "/images/projects/cartas-del-deseo/first-card-reading.webp",
        "title": "💡 First Card is revealed",
        "description": "Each card draw is unique - the readings and the cards are generated one-of-a-kind experiences."
      },
      {
        "url": "/images/projects/cartas-del-deseo/second-card-reading.webp",
        "title": "💡 The second card is flipped",
        "description": "The Papi Chispa character is consistent and highly insightful."
      },
      {
        "url": "/images/projects/cartas-del-deseo/final-card-reading.webp",
        "title": "💡 The final card is flipped.",
        "description": "Users can chat with Papi Chispa with every card draw. Every reading is a show."
      },
      {
        "url": "/images/projects/cartas-del-deseo/Lips.webp",
        "title": "💡 Telenovela Lips",
        "description": "Lips, lipstick stains, broken mirrors, the iconography has a latinx flair with telenovela drama."
      },
      {
        "url": "/images/projects/cartas-del-deseo/first-card-reading.webp",
        "title": "💡 Cartas del Deseo style is consistent.",
        "description": "The unique style is crafted by Papi Chispa himself."
      }
    ],
    "journey": [
      {
        "title": "📜 Phase 1: The Monolithic repo for the SPA",
        "description": "Started with a raw single-page build to <strong>validate tarot logic</strong> and test GPT behavior. No visuals, just raw flame."
      },
      {
        "title": "🔓 Phase 2: The Great Decoupling",
        "description": "Decoupled data from layout. <code>Spreads, dialogue, and card lore</code> now served by Rest API in JSON files, making the system endlessly expandable."
      },
      {
        "title": "💋 Phase 3: The Voice of Papi",
        "description": "Infused GPT with persona memory. Crafted a tone of <em>desire, ritual, and Spanglish intimacy</em>."
      },
      {
        "title": "🌒 Phase 4: Cartas in Style",
        "description": "Wrapped the experience in <strong>Cartas del Deseo style</strong>—designed by Papi himself. elegant, moody, and oh so clickable."
      },
      {
        "title": "🕯️ Phase 5: Ritual UX",
        "description": "Designed interactive flow with <strong>gesture-driven card reveals</strong>, spread diagrams, and seductive continuation prompts."
      }
    ],
    "specs": [
      {
        "title": "🧠 Data-Driven Architecture",
        "description": "All tarot logic, card metadata, and voice scripts live in <code>external JSON</code>—making it easy to expand or remix spreads without touching code."
      },
      {
        "title": "🧩 Modular & Reusable Components",
        "description": "Styled with a <em>tokenized, component-first UI system</em>. Every button, modal, and card layout is reusable across future mystical tools."
      },
      {
        "title": "🎙️ Real-Time AI Persona",
        "description": "GPT-4 is wired into the soul of Papi—every reading is <strong>generated live</strong> with memory, tone, and emotional fidelity."
      },
      {
        "title": "🌌 Fully Themed Experience",
        "description": "Custom theming through CSS variables and responsive design tokens ensure the experience feels like a <em>neo-mystic app</em> from a parallel dimension."
      }
    ],
    "artifacts": [
      {
        "name": "🏛️ README",
        "description": "A good primer on how the web app is developed",
        "url": "_data/projects/cartas-del-deseo/README_UPDATED.md",
        "icon": "🏛️"
      },
      {
        "name": "🔌 CONTRIBUTING",
        "description": "A Doc for those that want to add to the app",
        "url": "_data/projects/cartas-del-deseo/CONTRIBUTING.md",
        "icon": "🔌"
      },
      {
        "name": "⭐ TODO",
        "description": "Roadmap for future updates",
        "url": "_data/projects/cartas-del-deseo/TODO.md",
        "icon": "⭐"
      }
    ]
  },
  {
    "id": 5,
    "title": "Interactive 3D Gallery Sphere",
    "description": "Experience images in a revolutionary hybrid 2D/3D environment. This project uses React Three Fiber and a Cannon.js physics engine to create an intuitive and engaging alternative to traditional 2D galleries, allowing for unique interactions like Z-axis prioritization and physics-driven exploration.",
    "imageUrl": "/images/projects/interactive-3d-gallery-sphere/card-hero.jpg",
    "medium": "code",
    "genre": [
      "Concept Art",
      "Interactive/Web"
    ],
    "style": [
      "Modern"
    ],
    "tech": [
      "React",
      "React Three Fiber",
      "Three.js",
      "JavaScript",
      "Vite"
    ],
    "mood": "Innovative",
    "year": 2024,
    "role": "Lead Developer, Architect, UI/UX Designer",
    "variant": "featured",
    "status": "in-development",
    "links": {
      "github": "https://github.com/rubyrayjuntos/gallery-sphere"
    },
    "pitch": "A cutting-edge 3D interactive gallery where users can explore a physics-driven sphere, position images with precision, and seamlessly transition between immersive 3D exploration and detailed 2D viewing.",
    "challenge": "The core challenge was solving the inherent conflict between a physics engine (Cannon.js) wanting to control an object's state, and a declarative animation library (Tween.js/react-spring) also wanting to control it, which led to unpredictable visual bugs like an image expanding and then immediately snapping back.",
    "development": "The project was built on React Three Fiber for its declarative 3D capabilities. The breakthrough was a shift to a hybrid 2D/3D model, where a 'click-to-transfer' paradigm was developed, which hands off a selected image from the 3D physics sphere to a dedicated 2D viewport, intelligently pausing physics to ensure smooth, predictable animations.",
    "outcome": "The result is a highly performant and extensible platform for digital galleries. It successfully implements a novel Z-axis prioritization method and offers a uniquely engaging 'Browse' mode, proving the value of hybrid design for practical, complex web applications.",
    "gallery": [
      {
        "url": "/images/projects/interactive-3d-gallery-sphere/gallery-sphere-2Dviewport.jpg",
        "title": "Hybrid 2D/3D Viewport",
        "description": "A view of the main sphere, showcasing the hybrid model with the 2D detail panel active."
      },
      {
        "url": "/images/projects/interactive-3d-gallery-sphere/gallery-sphere-zoom2D.jpg",
        "title": "Detailed Image View",
        "description": "The dedicated 2D view allows for a closer, more detailed examination of the artwork."
      },
      {
        "url": "/images/projects/interactive-3d-gallery-sphere/3D-image-closeup.png",
        "title": "Working with the Image",
        "description": "Users can zoom into details of the image on the 3D sphere, with high detail."
      },
      {
        "url": "/images/projects/interactive-3d-gallery-sphere/z-index-positioning.png",
        "title": "Using z-index",
        "description": "How far away the image is from the sphere (z-index) can be used as a visual categorization or ranking tool."
      }
    ],
    "journey": [
      {
        "title": "High Priority: Core Experience",
        "description": "Implement a multi-catalog system with a switcher UI and enhance image interactions with filtering and tagging."
      },
      {
        "title": "Medium Priority: Visual Polish & UX",
        "description": "Add ambient particle effects, dynamic lighting, and an interactive tutorial system for new users."
      },
      {
        "title": "Future Vision: Advanced Immersion",
        "description": "Explore full VR/AR support, 3D model integration, and AI-powered smart arrangements."
      },
      {
        "title": "Enterprise-Ready: Technical Excellence",
        "description": "Migrate the codebase to TypeScript, implement comprehensive unit and E2E testing, and establish a full CI/CD pipeline."
      }
    ],
    "specs": [
      {
        "title": "Hybrid 2D/3D Viewport",
        "description": "Seamlessly transitions from an immersive 3D sphere to a detailed 2D view, solving common 3D UI problems like occlusion and providing the best of both worlds."
      },
      {
        "title": "Physics-Driven Interaction",
        "description": "Uses the Cannon.js physics engine for realistic sphere rotation, while intelligently overriding physics with animations for precise user control."
      },
      {
        "title": "Innovative Z-Axis Prioritization",
        "description": "A novel UX pattern allowing users to use depth (Z-axis) to organize and prioritize images in 3D space, controlled intuitively with keyboard and mouse combinations."
      },
      {
        "title": "Performant Instanced Rendering",
        "description": "Utilizes THREE.InstancedMesh and texture atlases to efficiently render a large number of images on the sphere, ensuring a smooth experience."
      },
      {
        "title": "Robust State Management",
        "description": "Employs a sophisticated event system and React Context to manage complex state, including focus tracking, physics pausing, and dynamic instance hiding."
      },
      {
        "title": "Declarative 3D with R3F",
        "description": "Built on React Three Fiber, allowing for a clean, maintainable, and component-based architecture for a complex 3D scene."
      }
    ],
    "artifacts": [
      {
        "name": "Comprehensive README on GitHub",
        "description": "The project's README file, including architecture, setup, a detailed feature list, and future roadmap.",
        "url": "_data/projects/interactive-3d-gallery/README.md",
        "icon": "⭐"
      }
    ]
  },
  {
    "id": 6,
    "title": "Nova: Writers Conspiracy",
    "description": "Agentic helpers aid writers in creating novels. It's a cosmic atelier where storytellers conspire with AI to birth entire universes, balancing structure and soul in creative agency.",
    "imageUrl": "/images/projects/nova-writers-conspiracy/card-hero.jpg",
    "medium": "code",
    "genre": [
      "Interactive/Web",
      "Literary Fiction",
      "Education"
    ],
    "style": [
      "Clean",
      "Modern"
    ],
    "tech": [
      "React",
      "Python",
      "Pydantic",
      "CrewAI"
    ],
    "mood": "Inspiring",
    "year": 2024,
    "role": "Lead Developer, AI Prompt Engineer",
    "variant": "featured",
    "status": "development",
    "links": {
      "github": "https://github.com/rubyrayjuntos/nova-writers-conspiracy"
    },
    "pitch": "A cosmic atelier where storytellers conspire with AI to birth entire universes, balancing structure and soul in creative agency.",
    "challenge": "The main challenge was designing and implementing a complex multi-agent system that balances automated generation with deep user control and a seamless collaborative experience. This involved orchestrating various specialized AI agents (Researcher, World Builder, Character Architect, Plot Alchemist, Writer, Editor, Illustrator) and managing their memory, context, and workflows to consistently produce high-quality, coherent narrative content while allowing for real-time user feedback and revisions.",
    "development": "The project followed a structured development process, starting with detailed functional and technical specifications and a system design document. Key architectural components like the MemoryService.ts for marker-indexed context handling and an abstract AgentBase.ts class were scaffolded early on. The development relies on a robust tech stack including React for the frontend, FastAPI for the backend API, and CrewAI for multi-agent orchestration, with asynchronous task queues (Celery/Redis) to manage long-running AI processes.",
    "outcome": "The project successfully established a foundational multi-agent system architecture for collaborative novel writing, with core components for agent management, memory indexing, and user interaction interfaces like the collaboration dashboard and agent chat. It provides a robust framework for generating structured narrative data (world, characters, plot) and manuscript content, offering a path for continuous iterative development and personalized writing assistance.",
    "gallery": [
      {
        "url": "/images/projects/nova-writers-conspiracy/NovaWritersGuild.png",
        "title": "Nova Logo",
        "description": "The cosmic atelier logo blending classical literary elements with cosmic/scientific aesthetics",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/nova-writers-conspiracy/nova-architecture-diagram.png",
        "title": "System Architecture Diagram",
        "description": "Multi-agent system architecture showing the technologies woven together to make this system come alive!",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/nova-writers-conspiracy/nova-workflow.png",
        "title": "System Workflow Diagram",
        "description": "Multi-agent system workflow showing the orchestration of specialized AI agents",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/nova-writers-conspiracy/nova-dashboard-interface.jpg",
        "title": "Collaboration Dashboard",
        "description": "Interactive dashboard for real-time collaboration between writers and AI agents",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/nova-writers-conspiracy/nova-chat-interface.jpg",
        "title": "Agent Chat Interface",
        "description": "Direct interaction with specialized AI agents for narrative development",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Concept Development",
        "description": "Conceived the vision of a cosmic atelier where human creativity and AI collaboration birth entire universes"
      },
      {
        "title": "System Architecture Design",
        "description": "Designed complex multi-agent system with specialized agents for different aspects of novel creation"
      },
      {
        "title": "Technical Foundation",
        "description": "Built core components including MemoryService.ts for context handling and AgentBase.ts for agent management"
      },
      {
        "title": "Frontend Development",
        "description": "Created React-based interface with TypeScript, Tailwind CSS, and real-time collaboration features"
      },
      {
        "title": "Backend Implementation",
        "description": "Developed FastAPI backend with CrewAI orchestration, PostgreSQL database, and Redis caching"
      },
      {
        "title": "AI Integration",
        "description": "Integrated OpenAI GPT-4, Pinecone vector database, and SerperDev for comprehensive AI capabilities"
      }
    ],
    "specs": [
      {
        "title": "Frontend Architecture",
        "description": "React 18 with TypeScript, Tailwind CSS, React Query for state management, Socket.io for real-time features, and React Router for navigation"
      },
      {
        "title": "Backend Technology",
        "description": "FastAPI (Python 3.11+), SQLAlchemy ORM, Alembic for database migrations, Pydantic for data validation, and JWT for authentication"
      },
      {
        "title": "AI - Multi-Agent System",
        "description": "CrewAI for multi-agent orchestration, OpenAI GPT-4 as primary LLM, Pinecone vector database, and SerperDev for web search capabilities"
      },
      {
        "title": "Infrastructure",
        "description": "PostgreSQL for structured data, Redis for caching and task queues, Celery for background tasks, and Docker for containerization"
      },
      {
        "title": "Agent Specialization",
        "description": "7 specialized agents: Researcher, World Builder, Character Architect, Plot Alchemist, Writer, Editor, and Illustrator"
      },
      {
        "title": "User Experience",
        "description": "Clean, modern UI with calming dark-grays and vibrant blue accents, emphasizing typography and readability for focused creative work"
      }
    ],
    "artifacts": [
      {
        "name": "System Architecture (architecture.md)",
        "description": "<ul style='list-style-type: none;'><HR><LI>Comprehensive system architecture with mermaid diagrams</LI><HR><LI>Detailed component breakdown (Frontend, Backend, AI Agents, Data Layer)</LI><HR><LI>Security, scalability, and deployment considerations</LI><HR><LI>Integration points with external services</LI><HR></UL>",
        "url": "_data/projects/nova-writers-conspiracy/architecture.md",
        "icon": "🏗️"
      },
      {
        "name": "Agent Workflow Diagrams (agent-workflows.md)",
        "description": "<ul style='list-style-type: none;'><HR><LI>Visual workflow diagrams for all 8 AI agents</LI><HR><LI>Detailed process flows with mermaid charts</LI><HR><LI>Memory service integration patterns</LI><HR><LI>Quality assurance and error handling workflows</LI><HR></UL>",
        "url": "_data/projects/nova-writers-conspiracy/agent-workflows.md",
        "icon": "🗺️"
      },
      {
        "name": "Memory Service Documentation (memory-service.md)",
        "description": "<ul style='list-style-type: none;'><HR><LI>Marker-indexed context handling system</LI><HR><LI>Complete implementation details with code examples</LI><HR><LI>Agent integration patterns and usage examples</LI><HR><LI>Performance optimization and monitoring strategies</LI><HR></UL>",
        "url": "_data/projects/nova-writers-conspiracy/memory-service.md",
        "icon": "🧠"
      },
      {
        "name": "Deployment Guide (deployment.md)",
        "description": "<ul style='list-style-type: none;'><HR><LI>Step-by-step deployment instructions</LI><HR><LI>Docker, cloud, and Kubernetes configurations</LI><HR><LI>Environment setup and configuration</LI><HR><LI>Monitoring, security, and backup strategies</LI><HR></UL>",
        "url": "_data/projects/nova-writers-conspiracy/deployment.md",
        "icon": "📋"
      },
      {
        "name": "Technical Specifications (technical-specs.md)",
        "description": "<ul style='list-style-type: none;'><HR><LI>Complete API specifications and database schemas</LI><HR><LI>Frontend and backend implementation details</LI><HR><LI>Performance requirements and testing specifications</LI><HR><LI>Security and authentication implementations</LI><HR></UL>",
        "url": "_data/projects/nova-writers-conspiracy/technical-specs.md",
        "icon": "📋"
      },
      {
        "name": "User Guide (user-guide.md)",
        "description": "<ul style='list-style-type: none;'><HR><LI>Comprehensive user interface guide</LI><HR><LI>Step-by-step instructions for all features</LI><HR><LI>Best practices and troubleshooting</LI><HR><LI>Collaboration workflows and tips</LI><HR></UL>",
        "url": "_data/projects/nova-writers-conspiracy/user-guide.md",
        "icon": "📖"
      }
    ]
  },
  {
    "id": 10,
    "title": "The Pageant Tarot",
    "description": "A dramatic reinterpretation of the tarot where archetypes take the stage. Each card captures a performance—a frozen moment of divine theatre that honors tradition while teasing new emotional truths.",
    "imageUrl": "/images/projects/the-pageant-tarot/card-hero.jpg",
    "medium": "art",
    "genre": [
      "Tarot"
    ],
    "style": [
      "Theatrical",
      "Symbolic",
      "Expressive"
    ],
    "tech": [],
    "mood": "Ritual",
    "year": 2024,
    "role": "Artist, Tarot Designer, Symbolic Director",
    "variant": "gallery",
    "status": "in-progress",
    "links": {
      "preview": "#",
      "portfolio": "#"
    },
    "pitch": "What if each tarot card was not a character—but an actor caught mid-performance? The Pageant Tarot invites you to witness the archetypes, not as frozen icons, but as living, breathing roles on the grand stage of the soul.",
    "challenge": "Capturing both the symbolic gravity and performative tension of the archetypes in a single still frame—where story, intention, and myth must all co-exist.",
    "development": "Each image began with study—of traditional tarot meaning, of gesture and theatricality, of costume and silhouette. From there, I sculpted tableaux that vibrate with story, letting each archetype act through light, gaze, and posture.",
    "outcome": "The Pageant Tarot becomes both a deck and a gallery—a performance in 78 acts, inviting viewers to interpret not just meaning, but motion, tension, and character. A tarot for the visual poet, the reader, and the audience within.",
    "gallery": [
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-lovers.jpg",
        "title": "The Lovers",
        "description": "Two become one—but not by merging. This is a choice, a tension, a sacred kiss under hot lights.",
        "hotspots": [
          {
            "x": 52,
            "y": 36,
            "title": "Dual Gaze",
            "description": "Both figures look not at each other but forward—toward fate, suggesting unity as shared direction, not surrender."
          },
          {
            "x": 78,
            "y": 62,
            "title": "Mirrored Hands",
            "description": "Their fingers do not intertwine—they echo. Love as parallel, not possession."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-fool.jpg",
        "title": "The Fool",
        "description": "A moment before flight. Not ignorance—innocence. Not risk—ritual.",
        "hotspots": [
          {
            "x": 45,
            "y": 70,
            "title": "Raised Heel",
            "description": "The gesture of a dancer’s leap, frozen. Suggests potential, motion, and sacred play."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-hermit.jpg",
        "title": "The Hermit",
        "description": "Alone but not lost. A guide withdrawing, carrying the flame inward.",
        "hotspots": [
          {
            "x": 35,
            "y": 50,
            "title": "Lantern Glow",
            "description": "Held low, the light casts upward—revealing the seeker as both source and subject."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-chariot.jpg",
        "title": "The Chariot",
        "description": "Tension in symmetry. Not speed, but sacred control of opposition.",
        "hotspots": [
          {
            "x": 50,
            "y": 60,
            "title": "Arm Tension",
            "description": "Each side of the body pushes and pulls—a performance of balance, not brute force."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-emperor-commands.jpg",
        "title": "The Emperor",
        "description": "Stillness as command. Authority rendered in posture, not voice.",
        "hotspots": [
          {
            "x": 60,
            "y": 45,
            "title": "Upright Spine",
            "description": "Power that does not move. The ruler remains, and thus rules."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-hanged-man.jpg",
        "title": "The Hanged Man",
        "description": "Suspension as insight. The body twisted—but the gaze, serene.",
        "hotspots": [
          {
            "x": 50,
            "y": 30,
            "title": "Inverted Calm",
            "description": "Though upside down, the figure shows no strain—suggesting surrender as strength."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/the-hierophant.jpg",
        "title": "The Hierophant",
        "description": "Ritual and hierarchy. A performance of tradition, cloaked in robes of order.",
        "hotspots": [
          {
            "x": 70,
            "y": 40,
            "title": "Raised Hand",
            "description": "The classic blessing mudra—gesture becomes liturgy."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/high-priestess.jpg",
        "title": "The High Priestess",
        "description": "Stillness, mystery, moonlight on velvet. She knows—but says nothing.",
        "hotspots": [
          {
            "x": 65,
            "y": 55,
            "title": "Veiled Curtain",
            "description": "The threshold behind her glows—a portal, not yet passed."
          }
        ]
      },
      {
        "url": "/images/projects/the-pageant-tarot/images/projects/tarot-deck/strength.jpg",
        "title": "Strength",
        "description": "Not domination—devotion. The lion does not struggle. Neither does she.",
        "hotspots": [
          {
            "x": 55,
            "y": 45,
            "title": "Touch Without Force",
            "description": "Her hand does not grip—it blesses. Strength as calm authority."
          }
        ]
      }
    ],
    "journey": [
      {
        "title": "Stage as Symbol",
        "description": "Each card imagined as a sacred stage—the archetype mid-performance."
      },
      {
        "title": "Gesture as Meaning",
        "description": "Studied hand positions, posture, and symmetry as symbolic language."
      },
      {
        "title": "Light as Revelation",
        "description": "Lighting was treated not as aesthetics, but as metaphysical metaphor."
      }
    ],
    "specs": [
      {
        "title": "Archetype as Performance",
        "description": "Each card captures the energy of the archetype as an actor in mid-role."
      },
      {
        "title": "Symbol-Driven Composition",
        "description": "Gestures, props, lighting—all chosen to embody the card’s core tension."
      },
      {
        "title": "Staged Stillness",
        "description": "Each image is a dramatic pause—a breath between becoming and being."
      }
    ]
  },
  {
    "id": 100,
    "title": "Arcana",
    "description": "Major arcana archetypes as characters in a story as grand as the universe, exploring the timeless wisdom and cosmic drama of the tarot through narrative.",
    "imageUrl": "/images/projects/arcana/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Literary Fiction",
      "Tarot"
    ],
    "style": [
      "Philosophical"
    ],
    "tech": [],
    "mood": "Mystical",
    "year": 2024,
    "role": "Author, World Builder, Archetypal Researcher",
    "variant": "featured",
    "status": "in-progress",
    "pitch": "A cosmic drama where the major arcana come to life as characters in a story that spans the universe, exploring timeless wisdom through epic narrative.",
    "challenge": "Balancing the cosmic scale of the story with intimate character moments, ensuring each arcana character feels both archetypal and uniquely individual while maintaining narrative coherence.",
    "development": "Extensive research into tarot symbolism and archetypal psychology. Deep world-building that connects cosmic forces with personal transformation.",
    "outcome": "A grand narrative that brings the wisdom of the tarot to life through compelling characters and cosmic drama.",
    "gallery": [
      {
        "url": "/images/projects/arcana/arcana-cover-art.jpg",
        "title": "Arcana Cover",
        "description": "Visual representation of the major arcana as cosmic characters",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/arcana/arcana-character-designs.jpg",
        "title": "Arcana Characters",
        "description": "Character designs for the major arcana archetypes",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/arcana/arcana-cosmic-setting.jpg",
        "title": "Cosmic Setting",
        "description": "The vast universe where the arcana drama unfolds",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Tarot Research",
        "description": "<div style='display: flex; gap: 2rem; align-items: start; margin: 2rem 0;'><div style='flex: 0 0 40%;'><img src='images/projects/arcana/tarot-research.png' alt='Character sketch' style='width: 100%; border-radius: 1px;'></div><div style='flex: 1;'>I immersed myself in the world of the Tarot archetypes: <em>somewhat aimless at first.</em></div></div>"
      },
      {
        "title": "Character Development",
        "description": "<div style='display: flex; gap: 2rem; align-items: start; margin: 2rem 0;'><div style='flex: 0 0 40%;'><img src='images/projects/arcana/the-star-festival-of-lights.png' alt='Character sketch' style='width: 100%; border-radius: 1px;'></div><div style='flex: 1;'>But the more time I spent getting to know the cards, and the archetypes, the more I felt a world of characters opening up to me.</div></div>"
      },
      {
        "title": "World Building",
        "description": "<div style='display: flex; flex-direction: column; gap: 1.5rem; margin: 2rem 0;'><div style='text-align: center;'><img src='images/projects/arcana/world-building.png' alt='Character sketch' style='width: 100%; max-width: 400px; border-radius: 10px;'></div><div style='text-align: center;'>I started building out characters and with them the world they inhabitted. The world of Arcana is a place where the major arcana are not just symbols, but characters with their own stories and motivations. Their own place.</div></div>"
      },
      {
        "title": "Philosophical Integration",
        "description": "<div style='display: flex; gap: 2rem; align-items: start; margin: 2rem 0;'><div style='flex: 0 0 40%;'><img src='images/projects/arcana/philosophical-themes.jpg' alt='Character sketch' style='width: 100%; border-radius: 1px;'></div><div style='flex: 1;'>Wove timeless wisdom and philosophical themes throughout the narrative</div></div>"
      }
    ],
    "specs": [
      {
        "title": "Genre",
        "description": "Epic fantasy with strong archetypal and philosophical elements"
      },
      {
        "title": "Character System",
        "description": "22 major arcana characters, each representing universal archetypes and wisdom"
      },
      {
        "title": "World Setting",
        "description": "Cosmic universe that reflects the universal nature of tarot symbolism"
      },
      {
        "title": "Thematic Elements",
        "description": "Transformation, wisdom, cosmic forces, personal growth, and universal truths"
      },
      {
        "title": "Narrative Approach",
        "description": "Epic storytelling that balances cosmic scale with intimate character development"
      },
      {
        "title": "Philosophical Depth",
        "description": "Integration of timeless wisdom and archetypal psychology throughout the story"
      }
    ],
    "excerpts": "<p>The cobblestones of Arcana buzzed with a symphony of life—each merchant's call, each child's laugh, each hoofbeat against the sun-baked stone a note in the city's vibrant melody. Elias, a wanderer with eyes as green as the Emerald Forest, moved through the throng, the straps of his travel-worn pack cutting into his shoulders. The weight wasn't just in the leather and canvas, but in the secrets he carried, secrets as heavy as the gold coin that hung cold against his warm chest.</p><p>The air thrummed with a strange energy, like a lute string plucked by an unseen hand. Elias's gaze was drawn to a stall overflowing with herbs and potions, their scents mingling with the smoke of incense and the sweet perfume of pastries. Behind the stall stood a figure cloaked in the humble garb of a commoner, yet there was a quiet authority in his stance, a wisdom in his eyes that belied the simple clothes. The man, H, lifted his gaze, his eyes a deep sapphire blue that seemed to pierce Elias's very soul.</p><p>A silent conversation passed between them, a recognition that transcended words. It was as if the universe had orchestrated their meeting, a dance of destiny playing out on the crowded streets of Arcana. A spark of curiosity ignited within Elias, a desire to know the man behind the cloak, the soul behind the eyes.</p><p>Just then, a priestess named Ishtar, her head adorned with a wreath of moonflowers, emerged from the shadows of the temple. Her gaze swept across the marketplace, landing on Elias and H with an almost knowing smile. She nodded subtly, a gesture that seemed to bridge the distance between the two men, an invitation to a deeper connection.</p><p>H, sensing the priestess's silent urging, offered Elias a small vial filled with a shimmering liquid. 'For your journey,' he said, his voice a low rumble that resonated with Elias's core.</p><p>Elias accepted the vial, his fingers brushing against H's, a fleeting touch that sent a jolt of electricity through him. He lifted the vial to his lips, the liquid within tasting of starlight and ancient wisdom. It warmed his blood, filling him with a sense of purpose, a yearning for the secrets that awaited him in the heart of Arcana.</p><p>As Elias turned to leave, he couldn't shake the feeling that this was just the beginning, the first note in a symphony of love and destiny, a melody that would change the course of his life forever. The marketplace swirled around him, a blur of color and sound, but all he could see was the sapphire blue of H's eyes, a beacon that promised adventure, passion, and a love that transcended the boundaries of the ordinary.</p>",
    "themesAnalysis": "<h3>Central Themes</h3><p>The story explores themes of universal wisdom, personal transformation, the interconnectedness of all things, and the power of archetypal forces in shaping human experience.</p><h4>Archetypal Wisdom</h4><p>Each major arcana character embodies universal archetypes that resonate across cultures and time periods, representing fundamental aspects of human experience and consciousness.</p><h4>Cosmic Interconnectedness</h4><p>The narrative explores how individual choices and transformations ripple through the cosmic fabric, affecting the balance of universal forces.</p>",
    "process": "I being by definining the characters and the world they inhabit. I then started to build out the world and the characters. I then started to write the story, and as I wrote I would refine the characters and the world. I would then write more, and refine the characters and the world again. I would repeat this process until I was happy with the story and the characters and the world.",
    "inspiration": "My inspiration for this project was the idea of the major arcana as characters in a story as grand as the universe, exploring the timeless wisdom and cosmic drama of the tarot through narrative."
  },
  {
    "id": 101,
    "title": "Echoes of Lumina (Novella)",
    "description": "A science fantasy novella exploring the intersection of quantum consciousness, ancestral memory, and free will in a city born of starlight and whispers",
    "imageUrl": "/images/projects/echoes-of-lumina-novella/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Speculative Fiction"
    ],
    "style": [
      "Expressive",
      "Philosophical",
      "Atmospheric"
    ],
    "tech": [],
    "mood": "Mystical",
    "year": 2024,
    "role": "Author & World Designer",
    "variant": "featured",
    "status": "completed",
    "links": {},
    "pitch": "A haunting exploration of consciousness and destiny in a city where memories crystallize into reality and every choice echoes across quantum dimensions",
    "challenge": "Weaving complex philosophical themes about free will and predetermined fate into an emotionally resonant narrative that remains accessible and compelling",
    "development": "Written over 18 months, combining intensive world-building with character psychology, drawing from quantum physics, consciousness studies, and ancestral wisdom traditions",
    "outcome": "A thought-provoking novella that questions the nature of choice and identity while delivering a deeply moving story about connection and transformation",
    "gallery": [
      {
        "url": "/images/projects/echoes-of-lumina-novella/lumina-cover-art.jpg",
        "title": "Cover Design",
        "description": "Original cover art featuring the crystalline spires of Lumina against the quantum aurora",
        "dimensions": "1200x1800"
      },
      {
        "url": "/images/projects/echoes-of-lumina-novella/lumina-city-concept.jpg",
        "title": "Lumina City Concept",
        "description": "Detailed concept art showing the architecture and energy flows of the mystical city",
        "dimensions": "1600x900"
      },
      {
        "url": "/images/projects/echoes-of-lumina-novella/memory-wells-illustration.jpg",
        "title": "Memory Wells",
        "description": "Artistic interpretation of the luminescent memory repositories that hold ancestral wisdom",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/echoes-of-lumina-novella/character-studies.jpg",
        "title": "Character Design Studies",
        "description": "Visual development of Maya Chen and other key characters from the novella",
        "dimensions": "1400x1000"
      }
    ],
    "journey": [
      {
        "title": "Concept : Initial inspiration from quantum consciousness studies and exploration of free will vs. determinism themes"
      },
      {
        "title": "World Building",
        "description": "Development of Lumina's unique properties, memory wells, and the relationship between consciousness and reality"
      },
      {
        "title": "Character Development",
        "description": "Creating Maya Chen's arc and supporting characters, establishing their connections to ancestral memory"
      },
      {
        "title": "First Draft",
        "description": "Writing the complete narrative while balancing philosophical depth with emotional accessibility"
      },
      {
        "title": "Revision : Refinement",
        "description": "Multiple editing rounds focusing on lyrical prose, thematic consistency, and character authenticity"
      }
    ],
    "specs": [
      {
        "title": "Word Count",
        "description": "32,000 words across 8 chapters, structured for contemplative pacing with lyrical interludes"
      },
      {
        "title": "Narrative Style",
        "description": "Third-person limited perspective with stream-of-consciousness passages and philosophical reflection"
      },
      {
        "title": "World Building",
        "description": "Detailed magic system based on consciousness-reality interaction, complete with rules and limitations"
      },
      {
        "title": "Character Development",
        "description": "Psychologically complex protagonist with supporting cast representing different philosophical approaches"
      }
    ],
    "excerpts": "<H3>Opening Passage</H3>Lumina, a city born of whispers and starlight, hummed with a melody few could discern. Its crystalline spires caught fragments of thought and memory, weaving them into the aurora that danced perpetually across the twilight sky. Here, in this nexus where consciousness met cosmos, Maya Chen stood at the precipice of understanding—or perhaps, of forgetting everything she thought she knew.<blockquote>The first crack appeared not in the sky, but in the silence between her thoughts.</blockquote>The memory wells pulsed with accumulated wisdom of a thousand generations, their luminescent depths calling to something ancient within her genetic code. Each well contained not just information, but lived experience—the weight of choices made and unmade, paths taken and abandoned, dreams crystallized into quantum possibility.<img src='lumina-city-concept.jpg' alt='Lumina Cityscape Illustration><H3>ch3</H3><H4>Character Revelation</H4>Her mentor, a sage with eyes like polished obsidian, often said, <em>The greatest stories are those etched not in ink, but in soul-memory.</em> Maya was beginning to understand that she was not merely reading the story of Lumina—she was living its culmination, her choices rippling backward and forward through the quantum tapestry that bound all consciousness together.<p>The weight of predestination pressed against her chest, even as the spark of free will flickered defiantly in her heart. In Lumina, both could be true simultaneously, existing in quantum superposition until the moment of observation collapsed all possibilities into a single, irrevocable reality.</p>",
    "themesAnalysis": "<H3>Central Themes</H3><p>Echoes of Lumina explores several interconnected philosophical and narrative themes</p><H3>Free Will</H3><p>The central tension between predetermined fate and conscious choice drives the narrative. Lumina exists as a space where quantum mechanics meets consciousness studies—every decision creates branching possibilities, yet some outcomes seem inevitable. Maya's journey questions whether we truly choose our paths or simply discover the choices we were always meant to make.</p><H3>Ancestral Memory </H3><p>Identity -The concept of genetic memory plays a crucial role, with characters accessing accumulated wisdom and trauma from their lineages. This explores how our identities are shaped not just by personal experience, but by the inherited echoes of those who came before us. The memory wells serve as both repository and burden, offering knowledge at the cost of individual autonomy.</p><H3>The Weight of Legacy</H3><p>Each character grapples with the expectations and limitations imposed by their heritage. Maya must navigate between honoring ancestral wisdom and forging her own path, embodying the universal struggle between tradition and personal authenticity.</p><H3>Consciousness as Creative Force</H3><p>In Lumina, thought and reality are intimately connected—consciousness shapes the physical world through crystalline resonance. This serves as a metaphor for the creative process itself, exploring how imagination and intention can manifest tangible change in both fictional worlds and our own reality.</p><p>The novella ultimately suggests that perhaps true freedom lies not in rejecting fate, but in consciously choosing to embrace our role in the larger story of existence.</p>"
  },
  {
    "id": 102,
    "title": "Elyra",
    "description": "Following Elyra as she gains power and enlightenment on a journey that mirrors the fool's path, exploring themes of transformation, wisdom, and spiritual growth.",
    "imageUrl": "/images/projects/elyra/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Literary Fiction"
    ],
    "style": [
      "Symbolic",
      "Philosophical",
      "Character-Driven"
    ],
    "tech": [],
    "mood": "Enlightening",
    "year": 2024,
    "role": "Author, World Builder, Spiritual Researcher",
    "variant": "featured",
    "status": "in-progress",
    "links": {},
    "pitch": "A spiritual journey that mirrors the fool's path, following Elyra's transformation from innocence to wisdom through a series of profound encounters and revelations.",
    "challenge": "Balancing spiritual themes with compelling storytelling, ensuring the philosophical elements enhance rather than overshadow the narrative and character development.",
    "development": "Extensive research into spiritual traditions, the fool's journey, and transformative narratives. Deep character development exploring Elyra's growth and the wisdom she gains.",
    "outcome": "A profound narrative that explores spiritual growth and transformation while maintaining strong storytelling and character development.",
    "gallery": [
      {
        "url": "/images/projects/elyra/card-hero.jpg",
        "title": "Elyra Cover",
        "description": "Visual representation of Elyra's spiritual journey",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/elyra/elyra-fool-path.jpg",
        "title": "The Fool's Path",
        "description": "Visual mapping of Elyra's journey through the fool's path",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/elyra/elyra-key-encounters.jpg",
        "title": "Key Encounters",
        "description": "Illustrations of pivotal moments in Elyra's transformation",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Spiritual Research",
        "description": "Studied the fool's journey, spiritual traditions, and transformative narratives"
      },
      {
        "title": "Character Genesis",
        "description": "Developed Elyra as a character who embodies the innocent seeker"
      },
      {
        "title": "World Building",
        "description": "Created a world that reflects spiritual themes and transformation"
      },
      {
        "title": "Narrative Structure",
        "description": "Crafted a story that mirrors the fool's path while maintaining narrative coherence"
      },
      {
        "title": "Philosophical Integration",
        "description": "Wove spiritual wisdom and philosophical themes throughout the story"
      }
    ],
    "specs": [
      {
        "title": "Genre",
        "description": "Spiritual fantasy with strong philosophical and transformative elements"
      },
      {
        "title": "Narrative Structure",
        "description": "Follows the fool's journey pattern with unique twists and developments"
      },
      {
        "title": "Character Development",
        "description": "Deep exploration of Elyra's transformation from innocence to wisdom"
      },
      {
        "title": "Thematic Elements",
        "description": "Spiritual growth, transformation, wisdom, enlightenment, and the hero's journey"
      },
      {
        "title": "World Setting",
        "description": "Fantasy world that reflects spiritual themes and transformation"
      },
      {
        "title": "Writing Style",
        "description": "Epic, spiritual prose that balances philosophical depth with engaging storytelling"
      }
    ],
    "excerpts": "<p>A spiritual journey that mirrors the fool's path, following Elyra's transformation from innocence to wisdom through a series of profound encounters and revelations.The wind at the Seer's Precipice was a living thing. It did not push or pull; it eddied and flowed, whispering secrets in a language just beyond hearing. For Lyra, it was one voice in a grand chorus—the song of Lumina, clearer and more resonant here than anywhere else in her life. It was a melody of boundless potential, but it offered no specific instructions, no map for her first step. Her conscious mind, still shackled by the caution of her people, screamed that to step forward was to be devoured by the Gloom. Yet, the song promised something else entirely. It promised flight.</p><p>Her Lumin-hare, perched nervously by her feet, suddenly went still. Its ruby eyes, which had been scanning the abyss, locked onto a point far below and to the east. It thumped a hind leg against the mossy stone once, a sharp, definitive signal.</p><p>Following its gaze, Lyra saw it. At first, it was just a flicker of organized light against the vast, swirling mists. Then, it resolved into a shape, rising from the lower currents. It was a trade caravan. A series of long, open-topped skiffs, carved from the dark, resilient wood of the Ironwood trees, were roped together in a line. They were pulled not by beasts, but by a massive, contained crystal housed on the lead skiff, its captive energy pulsing with a rhythmic, turquoise light that pushed back the mists. The caravan moved with a purpose Lyra's people had lost, tracing a path along an invisible current, a highway in the sky.</p><p>This was it. Not a bridge she had to build, but a river she could join. Serendipity.</p><p>The caravan was moving fast, a fleeting opportunity. There was no time for doubt, this was no moment for the old fears to take root. With a final glance back at the rigid spires of her home, she scooped her Lumin-hare into her arms.</p><p>Time to fly, she whispered.</p><p>She didn't hesitate. She ran the few paces to the edge and leaped out into the open sky. </p><p>For a heart-stopping second, there was only the fall. The wind shrieked past her ears, whipping her cloak around her. The Gloom seemed to rise up to meet her, a formless, hungry void. But her eyes were locked on her target: the last skiff in the caravan, piled high with canvas-wrapped bales of what looked like dried Sun-Petal Lilies.</p><p>Her training as an Echo-Weaver, her innate connection to the world's song, took over. She felt the current the caravan was riding, a subtle updraft just beneath her. Without thinking, she angled her body, using her cloak like a rudder, shifting her weight not against the wind, but with it. It was less a fall and more of a guided plummet.</p><p>She hit the bales with a muffled whoomph, sinking deep into the fragrant, spongy cargo. The impact knocked the wind from her, but she was alive. She was aboard. Peeking through a gap in the canvas, she saw the Seer's Precipice already receding into the twilight, a memory shrinking behind her. The immediate terror of the leap was gone, replaced by the thrumming energy of the lead crystal and a new, pressing tension: she was a stowaway, adrift on a current of strangers, hurtling towards a destination she could only hope was part of the song.</p><p>For a long while, she didn't move, her heart hammering against her ribs. The Lumin-hare trembled in her arms, its nose twitching, taking in the scent of a thousand places she had never been. The skiff rocked gently, a counterpoint to the deep, resonant hum of the drive crystal that vibrated through the hull. It was this hum that eventually betrayed her. A young man with a thick leather jerkin and a suspicious frown walked the length of the tow-ropes, checking their tension. As he stepped onto her skiff, the Lumin-hare let out a soft, fearful squeak.</p><p>The man, Roric, froze. His eyes narrowed, scanning the cargo. 'Who's there?'  he called out, his voice low and hard. He placed a hand on the hilt of a long knife at his belt.</p>",
    "themesAnalysis": "<H3>Central Themes</H3><p></p><BR><H3>The Fool's Path / The Leap of Faith</H3><p>This theme explores the journey of an individual who, despite appearing naive or reckless to others, embarks on a transformative quest guided by intuition and an unconventional understanding of the world. Lyra's literal leap from the Precipice embodies this, showcasing her willingness to step into the unknown and trust an unseen path, ultimately leading to profound personal growth and discovery.</p><H3>Belief in Self and Inner Tools</H3><p>This theme highlights the power of self-trust and the realization that true strength and capability often lie within, rather than in external validation or conventional methods. Lyra's ability to 'tune' rather than 'build' and her understanding that her power resides in 'resonance' rather than a physical 'wrench' perfectly illustrates this journey of internal validation and relying on her unique gifts.</p><H3>Tradition Versus Authenticity</H3><p>This theme examines the conflict between adhering to established societal norms, beliefs, and practices, and forging one's own genuine path based on individual truth and unique perception. Lyra's departure from her home Canton, where her perceptions were dismissed, and her embrace of her Echo-Weaver abilities in a world that initially misunderstands them, directly confronts the limitations of rigid tradition against the freedom of authentic self-expression.</p><H3>The Nature of Perception and Reality</H3><p>This theme delves into how individuals interpret the world around them, suggesting that reality itself can be fundamentally different based on one's unique sensory and intuitive abilities. Lyra's 'Song' and her ability to perceive dissonance where others see only mechanical flaws, or to feel the 'hungry hum' of the Gloom, highlights how different modes of perception can reveal deeper truths about the universe.</p><H3>Harmony and Dissonance</H3><p>Beyond a literal musical metaphor, this theme explores the fundamental balance (or imbalance) in the world, not just in sound but in energy, relationships, and the very fabric of existence. Lyra's quest to 'soothe' dissonance, whether in a crystal or potentially in the growing threat of the Gloom, suggests a larger struggle to restore equilibrium to a world falling out of tune.</p><H3>The Call to Adventure and Destiny</H3><p>This theme examines the irresistible pull towards an unknown but fated journey, often initiated by an inner calling that transcends logic or comfort. Lyra's inherent need to follow the 'Song' and her intuitive understanding that she was 'brought here' for a purpose, even when the destination is unclear, speaks to a larger sense of destiny guiding her path.</p>"
  },
  {
    "id": 103,
    "title": "Henri & Ruben",
    "description": "A love story between an American and a Chileno, exploring cultural differences, personal growth, and the universal language of love.",
    "imageUrl": "/images/projects/henri-ruben/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Romance",
      "Literary Fiction"
    ],
    "style": [
      "Expressive",
      "Character-Driven"
    ],
    "tech": [],
    "mood": "Romantic",
    "year": 2024,
    "role": "Author, Character Developer, Cultural Researcher",
    "variant": "wide",
    "status": "in-progress",
    "pitch": "A poignant love story that bridges cultures and continents, exploring how two people from different worlds find common ground in their shared humanity.",
    "challenge": "Balancing authentic cultural representation with universal emotional truths, ensuring both characters feel fully realized and their relationship development feels natural and compelling.",
    "development": "Extensive research into Chilean culture, language, and customs. Deep character development for both protagonists, exploring their individual backgrounds, motivations, and growth arcs.",
    "outcome": "A compelling narrative that celebrates cultural diversity while exploring the universal themes of love, identity, and personal transformation.",
    "gallery": [
      {
        "url": "/images/projects/henri-ruben/card-hero.jpg",
        "title": "Cover Concept",
        "description": "Visual representation of the cross-cultural love story",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/henri-ruben/card-hero1.jpg",
        "title": "Character Sketches",
        "description": "Development sketches of Henri and Ruben",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Concept Development",
        "description": "Conceived the idea of a cross-cultural romance that explores identity and belonging"
      },
      {
        "title": "Cultural Research",
        "description": "Extensive research into Chilean culture, language, customs, and contemporary life"
      },
      {
        "title": "Character Development",
        "description": "Deep exploration of both protagonists' backgrounds, motivations, and personal growth"
      },
      {
        "title": "Story Structure",
        "description": "Crafted narrative arc that balances cultural exploration with emotional development"
      },
      {
        "title": "Writing Process",
        "description": "Ongoing development of the manuscript with focus on authentic dialogue and cultural representation"
      }
    ],
    "specs": [
      {
        "title": "Genre",
        "description": "Contemporary romance with strong literary fiction elements and cross-cultural themes"
      },
      {
        "title": "Narrative Structure",
        "description": "Dual perspective narrative alternating between Henri and Ruben's viewpoints"
      },
      {
        "title": "Cultural Elements",
        "description": "Authentic representation of both American and Chilean cultures, languages, and customs"
      },
      {
        "title": "Character Development",
        "description": "Deep exploration of identity, cultural belonging, and personal transformation"
      },
      {
        "title": "Themes",
        "description": "Love, cultural exchange, personal growth, identity, family, and belonging"
      },
      {
        "title": "Writing Style",
        "description": "Intimate, emotionally resonant prose with realistic dialogue and cultural authenticity"
      }
    ],
    "excerpts": "ch3 - Opening Scene</h3><p>The café buzzed with the familiar sounds of Santiago—the clink of spoons against ceramic cups, the soft murmur of Spanish conversations, and the distant hum of traffic on Avenida Providencia. Henri sat at his usual table by the window, laptop open but forgotten, watching the world outside with the kind of attention that comes from being somewhere new and beautiful.</p><blockquote>'Sometimes the most profound connections happen in the most ordinary moments.'</blockquote><p>That's when Ruben walked in, carrying the weight of his family's expectations and the quiet determination of someone who knows exactly who they are. Their eyes met across the crowded room, and in that instant, Henri understood that his carefully planned research trip was about to become something entirely different.</p><h3>Cultural Exchange</h3><p>The language barrier between them became a bridge rather than a wall. Henri's broken Spanish and Ruben's patient corrections created moments of laughter and intimacy that transcended words. Each misunderstanding was an opportunity to learn, each correction a gentle touch that brought them closer.</p><p>Ruben taught Henri about Chilean history, about the resilience of his people, about the way family and tradition shaped every decision. Henri shared stories of his own family's immigrant journey, of the American dream that had brought his grandparents to New York, of the cultural identity he was still discovering.</p>",
    "themesAnalysis": "<h3>Central Themes</h3><p>Henri & Ruben explores the universal human experience through the lens of cultural exchange and personal transformation:</p><h4>Cultural Identity & Belonging</h4><p>Both characters grapple with questions of identity and belonging. Henri, as an American in Chile, experiences the vulnerability of being an outsider while discovering new aspects of himself. Ruben, though in his home country, faces the challenge of balancing family expectations with his own desires and dreams.</p><h4>The Universal Language of Love</h4><p>Despite their cultural differences, Henri and Ruben discover that love transcends language, nationality, and tradition. Their relationship becomes a testament to the idea that human connection is more fundamental than any cultural barrier.</p><h4>Personal Growth Through Cultural Exchange</h4><p>The story demonstrates how exposure to different cultures can catalyze personal growth and self-discovery. Henri's journey in Chile becomes a metaphor for the transformative power of stepping outside one's comfort zone.</p><h4>Family, Tradition, and Individual Choice</h4><p>Ruben's struggle with family expectations reflects the universal tension between honoring tradition and pursuing personal happiness. The story explores how love can both challenge and strengthen family bonds.</p><p>Ultimately, Henri & Ruben suggests that true love is not about finding someone who fits perfectly into your world, but about creating a new world together—one that honors both individuals' backgrounds while forging something uniquely their own.</p>"
  },
  {
    "id": 104,
    "title": "Tarot Awakened",
    "description": "22 videos in a series that teaches the tarot by following the fool as he meets the major arcana, creating an educational journey through tarot wisdom.",
    "imageUrl": "/images/projects/tarot-awakened/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Education",
      "Tarot",
      "Interactive/Web"
    ],
    "style": [
      "Narrative-Driven",
      "Accessible"
    ],
    "tech": [],
    "mood": "Educational",
    "year": 2024,
    "role": "Content Creator, Educator, Video Producer",
    "variant": "featured",
    "status": "in-progress",
    "links": {
      "series": "#",
      "channel": "#"
    },
    "pitch": "An engaging video series that makes tarot wisdom accessible through storytelling, following the fool's journey through all 22 major arcana.",
    "challenge": "Creating educational content that is both entertaining and informative, making complex tarot concepts accessible to beginners while engaging experienced practitioners.",
    "development": "Developed a narrative approach to tarot education, using the fool's journey as a framework for teaching each major arcana card.",
    "outcome": "A comprehensive video series that makes tarot learning engaging and accessible through storytelling and visual education.",
    "gallery": [
      {
        "url": "/images/projects/tarot-awakened/tarot-awakened-series-cover.jpg",
        "title": "Series Cover",
        "description": "Visual identity for the Tarot Awakened video series",
        "hotspots": [
          {
            "x": 50,
            "y": 30,
            "title": "Series Identity",
            "description": "The visual identity that represents the educational approach and accessibility of the series."
          },
          {
            "x": 75,
            "y": 65,
            "title": "Educational Focus",
            "description": "Design elements that emphasize the educational and accessible nature of the content."
          }
        ]
      },
      {
        "url": "/images/projects/tarot-awakened/tarot-awakened-fool-journey.jpg",
        "title": "The Fool's Journey",
        "description": "Visual mapping of the fool's journey through the major arcana",
        "hotspots": [
          {
            "x": 40,
            "y": 50,
            "title": "Journey Framework",
            "description": "The narrative structure that guides viewers through the major arcana in logical progression."
          },
          {
            "x": 70,
            "y": 40,
            "title": "Visual Mapping",
            "description": "Clear visual representation of how each card connects to the overall journey."
          }
        ]
      },
      {
        "url": "/images/projects/tarot-awakened/tarot-awakened-video-samples.jpg",
        "title": "Video Samples",
        "description": "Screenshots from various episodes in the series",
        "hotspots": [
          {
            "x": 35,
            "y": 45,
            "title": "Episode Style",
            "description": "The consistent visual style and educational approach used across all episodes."
          },
          {
            "x": 65,
            "y": 55,
            "title": "Content Quality",
            "description": "High-quality production values that make learning engaging and professional."
          }
        ]
      },
      {
        "url": "/images/projects/tarot-awakened/tarot-awakened-educational-content.jpg",
        "title": "Educational Content",
        "description": "Examples of educational materials and visual aids",
        "hotspots": [
          {
            "x": 45,
            "y": 35,
            "title": "Learning Materials",
            "description": "Supplementary materials that reinforce the video content and aid in learning."
          },
          {
            "x": 80,
            "y": 70,
            "title": "Visual Aids",
            "description": "Clear visual aids that help viewers understand complex concepts easily."
          }
        ]
      }
    ],
    "journey": [
      {
        "title": "Educational Research",
        "description": "Studied effective methods for teaching tarot and spiritual concepts"
      },
      {
        "title": "Narrative Development",
        "description": "Created the fool's journey framework for teaching the major arcana"
      },
      {
        "title": "Content Planning",
        "description": "Planned 22 episodes covering each major arcana card"
      },
      {
        "title": "Video Production",
        "description": "Developed production techniques for engaging educational content"
      },
      {
        "title": "Series Launch",
        "description": "Launched the series with consistent release schedule and engagement"
      }
    ],
    "specs": [
      {
        "title": "Series Structure",
        "description": "22 episodes covering each major arcana card in the fool's journey order"
      },
      {
        "title": "Educational Approach",
        "description": "Narrative-based learning using the fool's journey as a teaching framework"
      },
      {
        "title": "Content Format",
        "description": "Engaging video content optimized for social media and educational platforms"
      },
      {
        "title": "Visual Design",
        "description": "Consistent visual identity and educational materials across all episodes"
      },
      {
        "title": "Accessibility",
        "description": "Content designed to be accessible to beginners while engaging for experienced practitioners"
      },
      {
        "title": "Engagement Strategy",
        "description": "Interactive elements and community building around the educational content"
      }
    ],
    "process": "<h3>The Educational Content Creation Process</h3><p>The creation of Tarot Awakened involved developing a unique approach to teaching complex spiritual concepts through engaging visual storytelling. Each episode was carefully crafted to make tarot wisdom accessible to everyone.</p><h4>1. Educational Research</h4><p>We began by studying effective methods for teaching tarot and spiritual concepts, identifying the barriers that prevent people from engaging with this ancient wisdom.</p><h4>2. Narrative Framework</h4><p>Next, we developed the fool's journey as a narrative framework that could guide viewers through the major arcana in a logical, engaging progression.</p><h4>3. Visual Storytelling</h4><p>Each episode was designed with compelling visuals, clear explanations, and interactive elements that make learning both enjoyable and memorable.</p>",
    "inspiration": "<h3>Making Wisdom Accessible</h3><p>Inspired by the desire to make tarot's ancient wisdom accessible to modern audiences who might be intimidated by traditional approaches. We drew from educational psychology, visual storytelling techniques, and the universal appeal of narrative learning to create content that speaks to everyone.</p><p>The goal was to bridge the gap between esoteric knowledge and everyday understanding, showing how tarot's archetypal wisdom can enrich our modern lives.</p>"
  },
  {
    "id": 105,
    "title": "Weight of a Name",
    "description": "Prelog backstory of Elias, the lover archetype, exploring the significance of names, identity, and the power of love across time and space.",
    "imageUrl": "/images/projects/weight-of-a-name/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Literary Fiction",
      "Concept Art",
      "Romance"
    ],
    "style": [
      "Expressive",
      "Philosophical",
      "Character-Driven",
      "Atmospheric"
    ],
    "tech": [],
    "mood": "Contemplative",
    "year": 2024,
    "role": "Author, Character Developer, Philosophical Researcher",
    "variant": "tall",
    "status": "in-progress",
    "links": {
      "excerpt": "#",
      "manuscript": "#"
    },
    "pitch": "A deep exploration of the lover archetype through the story of Elias, examining how names carry weight and meaning across generations.",
    "challenge": "Balancing philosophical depth with emotional resonance, creating a character study that feels both universal and deeply personal while exploring complex themes of identity and love.",
    "development": "Extensive research into archetypal psychology and the significance of names across cultures. Deep character development exploring Elias's journey and the evolution of the lover archetype.",
    "outcome": "A profound exploration of identity, love, and the power of names that resonates with readers on both intellectual and emotional levels.",
    "gallery": [
      {
        "url": "/images/projects/weight-of-a-name/weight-of-name-cover-artf.jpg",
        "title": "Cover Concept",
        "description": "Visual representation of the weight and significance of names",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/weight-of-a-name/card-hero1.jpg",
        "title": "Elias Character Study",
        "description": "Development sketches and notes for the protagonist",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Archetypal Research",
        "description": "Studied the lover archetype across mythology, psychology, and literature"
      },
      {
        "title": "Character Genesis",
        "description": "Developed Elias as a complex embodiment of the lover archetype"
      },
      {
        "title": "Philosophical Framework",
        "description": "Explored themes of identity, names, and their significance across cultures"
      },
      {
        "title": "Narrative Structure",
        "description": "Crafted a story that balances philosophical depth with emotional storytelling"
      },
      {
        "title": "Writing Process",
        "description": "Ongoing development focusing on poetic language and philosophical themes"
      }
    ],
    "specs": [
      {
        "title": "Genre",
        "description": "Literary fiction with strong philosophical and archetypal elements"
      },
      {
        "title": "Narrative Approach",
        "description": "Character-driven story with philosophical underpinnings and poetic language"
      },
      {
        "title": "Thematic Elements",
        "description": "Identity, names, love, archetypes, time, memory, and personal transformation"
      },
      {
        "title": "Character Development",
        "description": "Deep exploration of Elias as both individual and archetypal figure"
      },
      {
        "title": "Writing Style",
        "description": "Poetic, introspective prose with philosophical depth and emotional resonance"
      },
      {
        "title": "Cultural Context",
        "description": "Exploration of naming traditions and their significance across different cultures"
      }
    ]
  },
  {
    "id": 106,
    "title": "World Bible",
    "description": "Process use case for building out a world that represents a fruitful IP, exploring systematic world-building methodologies for creating rich, coherent fictional universes.",
    "imageUrl": "/images/projects/world-bible/card-hero.jpg",
    "medium": "writing",
    "genre": [
      "Literary Fiction",
      "Education"
    ],
    "style": [],
    "tech": [],
    "mood": "Mysterious",
    "year": 2024,
    "role": "Lead Writer, World Builder, System Designer",
    "variant": "wide",
    "status": "ongoing",
    "links": {
      "process": "#",
      "examples": "#"
    },
    "pitch": "A comprehensive methodology for building fictional worlds that serve as fertile ground for multiple stories and creative projects.",
    "challenge": "Creating a systematic approach to world-building that ensures consistency, depth, and flexibility for future creative development while maintaining narrative coherence.",
    "development": "Developed a structured methodology for world-building that covers all aspects from geography to culture to magic systems, ensuring comprehensive and coherent world development.",
    "outcome": "A proven world-building system that creates rich, detailed universes suitable for multiple stories and creative projects.",
    "gallery": [
      {
        "url": "/images/projects/world-bible/world-bible-cover-art.jpg",
        "title": "World Bible Cover",
        "description": "Visual representation of the world-building process",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/world-bible/world-bible-maps.jpg",
        "title": "World Maps",
        "description": "Geographic and cultural mapping of the fictional world",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/world-bible/world-bible-cultures.jpg",
        "title": "Cultural Systems",
        "description": "Development of cultural systems and social structures",
        "dimensions": "1200x800"
      },
      {
        "url": "/images/projects/world-bible/world-bible-magic-systems.jpg",
        "title": "Magic Systems",
        "description": "Development of magic systems and supernatural elements",
        "dimensions": "1200x800"
      }
    ],
    "journey": [
      {
        "title": "Methodology Development",
        "description": "Created a systematic approach to comprehensive world-building"
      },
      {
        "title": "Geographic Foundation",
        "description": "Developed techniques for creating coherent geographic and environmental systems"
      },
      {
        "title": "Cultural Development",
        "description": "Created methods for building cultural systems and social structures"
      },
      {
        "title": "Magic System Design",
        "description": "Developed approaches to creating consistent and compelling magic systems"
      },
      {
        "title": "Documentation Process",
        "description": "Created systems for organizing and maintaining world-building documentation"
      }
    ],
    "specs": [
      {
        "title": "World-Building Methodology",
        "description": "Comprehensive system for creating detailed fictional universes"
      },
      {
        "title": "Geographic Systems",
        "description": "Techniques for creating coherent geographic and environmental foundations"
      },
      {
        "title": "Cultural Development",
        "description": "Methods for building cultural systems, social structures, and historical backgrounds"
      },
      {
        "title": "Magic System Design",
        "description": "Approaches to creating consistent and compelling supernatural elements"
      },
      {
        "title": "Documentation Process",
        "description": "Systems for organizing and maintaining comprehensive world-building documentation"
      },
      {
        "title": "IP Development",
        "description": "Strategies for creating worlds that support multiple stories and creative projects"
      }
    ]
  },
  {
    "id": 200,
    "title": "Archetypes at Rest: The Tarot in Ordinary Time",
    "description": "What happens when archetypes are stripped of their 'mystical' costumes and shown as just humans at the bus stop, in a diner, or doing laundry? Are they still divine? Are we?",
    "imageUrl": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/card-hero.jpg",
    "medium": "art",
    "genre": [
      "Concept Art",
      "Tarot"
    ],
    "style": [
      "Modern",
      "Narrative-Driven",
      "Symbolic"
    ],
    "tech": [],
    "mood": "Mystical",
    "year": 2024,
    "role": "Artist",
    "variant": "series",
    "status": "completed",
    "pitch": "What happens when archetypes are stripped of their mystical costumes and shown as just humans at the bus stop, in a diner, or doing laundry? Are they still divine? Are we?",
    "challenge": "The core challenge was to transpose these sacred, powerful archetypes into mundane settings without losing their mythic resonance, creating a delicate balance between the divine and the everyday.",
    "development": "Each piece began with extensive research into the chosen archetypes, followed by location scouting in everyday places. The goal was to find the perfect visual tension—the laundromat for Temperance, the diner for the Hierophant—that would spark a new conversation about these ancient symbols.",
    "outcome": "The result is a collection of images that invite viewers to find the tarot’s wisdom in themselves, not as distant ideals but as everyday truths. Each piece asks: Which card are you playing today?",
    "gallery": [
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/lovers_devil.jpg",
        "title": "The Lovers & The Devil",
        "description": "We begin at a rooftop bar. Golden light pools over two lovers leaning close, hands clasped in a silent vow. And yet — just there — the Devil smiles over his drink, a shadow at the edge of their joy. Notice the warm, seductive glow, but don’t miss the tension.",
        "hotspots": [
          {
            "x": 50,
            "y": 40,
            "title": "A Sacred Vow",
            "description": "Their hands clasp in a perfect heart, a symbol of their pure, intimate connection."
          },
          {
            "x": 85,
            "y": 60,
            "title": "A Quiet Temptation",
            "description": "The Devil’s drink catches the light, a subtle and alluring temptation waiting to be acknowledged."
          }
        ]
      },
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/empress_death.jpg",
        "title": "The Empress & Death",
        "description": "Next we step into a greenhouse — lush and teeming with life. The Empress waters a blossom, her belly full of promise. And yet here too is Death, kneeling calmly among the soil. Their presence together doesn’t contradict, but completes.",
        "hotspots": [
          {
            "x": 45,
            "y": 30,
            "title": "Fertile Creation",
            "description": "The Empress's pregnancy symbolizes creation, growth, and the persistence of life."
          },
          {
            "x": 70,
            "y": 50,
            "title": "A Gentle Partner",
            "description": "Death is not a threat, but a quiet partner in the cycle, tending the soil from which new life will spring."
          }
        ]
      },
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/temperance_angel.jpg",
        "title": "Temperance & The Angel",
        "description": "Now we enter a laundromat at dusk. See the muted neon and rows of washers, yet here stand two angels performing their quiet ritual of balance. One pours water between pitchers, the other cradles a glowing cloth.",
        "hotspots": [
          {
            "x": 30,
            "y": 40,
            "title": "Perfect Harmony",
            "description": "Water flows perfectly between the two pitchers, a symbol of finding equilibrium and harmony in a mundane task."
          },
          {
            "x": 60,
            "y": 80,
            "title": "Open Balance",
            "description": "The neon sign above hums with a quiet instruction, elevating the domestic chore to a sacred act of care."
          }
        ]
      },
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/fool_priestess.jpg",
        "title": "The Fool & The High Priestess",
        "description": "Onward to a subway station — tiled, quiet, and yet alive. The Fool dances, his little dog following along. Across the platform, the High Priestess sits, serene, scroll in hand, among scattered pomegranate seeds.",
        "hotspots": [
          {
            "x": 40,
            "y": 60,
            "title": "Innocent Joy",
            "description": "The Fool's carefree stride represents naive joy and spontaneous energy, unburdened by knowledge."
          },
          {
            "x": 70,
            "y": 40,
            "title": "Quiet Knowledge",
            "description": "Pomegranates, symbols of inner wisdom, spill at her feet, representing knowledge kept silent and protected."
          }
        ]
      },
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/hierophant.jpg",
        "title": "The Hierophant",
        "description": "Here we pause at a roadside diner. The Hierophant sits alone, a burger in hand, the sun setting beyond. Keys are etched into the diner's window, glowing faintly in the sunset.",
        "hotspots": [
          {
            "x": 50,
            "y": 30,
            "title": "Authority at Rest",
            "description": "His burger, a mundane meal, suggests that even ancient authority must participate in the everyday world."
          },
          {
            "x": 80,
            "y": 20,
            "title": "Lingering Symbols",
            "description": "The keys of the Hierophant, etched into the diner window, suggest that tradition endures, even in the most secular places."
          }
        ]
      },
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/emperor_empress.jpg",
        "title": "The Emperor & The Empress",
        "description": "In a modest living room, the Emperor reclines, orb in hand, while the Empress—wearing a polka-dot dress and crown—sweeps the floor. Power is as much care as command.",
        "hotspots": [
          {
            "x": 20,
            "y": 70,
            "title": "Domestic Power",
            "description": "The broom meets the crown, suggesting that care and rule are intertwined. Domesticity is reframed as its own kind of throne room."
          },
          {
            "x": 75,
            "y": 50,
            "title": "Power in Repose",
            "description": "The ram, a symbol of the Emperor's power, sleeps peacefully at his feet, docile yet ever-present."
          },
          {
            "x": 50,
            "y": 85,
            "title": "Domain of the Empress",
            "description": "Traditional tarot card depictions show the empress on a throne and behind her are fields of wheat, a river flowing through the landscape, and mountains. These symbolize the earth and abundance, tying the empress to crops and productivity. Here her domain is relegated to an image on a carpet, but still she tends her domain."
          }
        ]
      },
      {
        "url": "/images/projects/archetypes-at-rest-the-tarot-in-ordinary-time/sun_moon.jpg",
        "title": "The Sun & The Moon",
        "description": "Finally, we arrive at a gas station under a moonlit sky. The Moon greets her dog as the Sun strides back laughing. These opposites are not in conflict but in harmony.",
        "hotspots": [
          {
            "x": 40,
            "y": 60,
            "title": "Quiet Intimacy",
            "description": "The Moon gently strokes the dog, representing a quiet, intuitive tenderness that thrives in darkness."
          },
          {
            "x": 60,
            "y": 30,
            "title": "Radiant Joy",
            "description": "The Sun’s bright, easy smile carries warmth and vitality, a beacon of joy even in the shadow of the night."
          }
        ]
      }
    ],
    "journey": [
      {
        "title": "Temptation vs. Love",
        "description": "Fade-in, slight zoom-in on bar, golden halos shimmer"
      },
      {
        "title": "Cycles of Life & Death",
        "description": "Pan up through greenhouse vines, fade to dusty soil"
      },
      {
        "title": "Balance in the Mundane",
        "description": "Parallax: laundry machines rotate subtly, neon flickers"
      },
      {
        "title": "Innocence & Knowledge",
        "description": "Scroll reveals each pillar (Boaz & Jachin), Fool dances past"
      },
      {
        "title": "Tradition in Decline?",
        "description": "Slow dolly toward diner booth, sun flares through window"
      },
      {
        "title": "Domestic Power & Care",
        "description": "Tilt-down from crown to broom in hand"
      },
      {
        "title": "Harmony of Opposites",
        "description": "Crossfade: gas station lights shift from sunlit to moonlit"
      }
    ],
    "specs": [
      {
        "title": "Mythic Framing",
        "description": "The centrality of the figures and their interaction is often framed like a Renaissance painting, elevating everyday settings to something mythic."
      },
      {
        "title": "Conceptual Tension",
        "description": "The pairings thrive on juxtaposition and irony, recasting traditional conflicts into contemporary choices."
      },
      {
        "title": "Contemporary Symbolism",
        "description": "Timeless archetypes are grounded in today’s world, allowing viewers to find the sacred in the mundane."
      },
      {
        "title": "Narrative Lighting",
        "description": "A warm, glowing palette persists even in dark or ironic scenes, suggesting the universality of archetypes."
      },
      {
        "title": "Interactive Details",
        "description": "Small props and details serve as interactive clues, inviting viewers to read the image and uncover its meaning."
      },
      {
        "title": "Introspective Prompts",
        "description": "The series encourages personal reflection, asking viewers to consider where these archetypes appear in their own lives."
      }
    ]
  },
  {
    "id": 201,
    "title": "Character Design",
    "description": "Process use case for designing characters that have depth, exploring the methodology and techniques for creating compelling, multi-dimensional characters.",
    "imageUrl": "/images/projects/character-design/card-hero.jpg",
    "medium": "art",
    "genre": [
      "Concept Art",
      "Education"
    ],
    "style": [
      "Character-Driven",
      "Expressive",
      "Narrative-Driven"
    ],
    "tech": [],
    "mood": "Inspiring",
    "year": 2024,
    "role": "Character Designer, Process Developer, Art Educator",
    "variant": "wide",
    "status": "ongoing",
    "links": {
      "process": "#",
      "portfolio": "#"
    },
    "pitch": "A comprehensive exploration of character design methodology, demonstrating how to create characters with genuine depth and emotional resonance.",
    "challenge": "Developing a systematic approach to character design that ensures depth and complexity while maintaining visual appeal and clear communication of character traits.",
    "development": "Created a structured methodology for character development, including personality mapping, visual design principles, and iterative refinement processes.",
    "outcome": "A comprehensive character design system that produces compelling, multi-dimensional characters suitable for various media and storytelling contexts.",
    "gallery": [
      {
        "url": "/images/projects/character-design/character-design-process-overview.jpg",
        "title": "Design Process Overview",
        "description": "Visual documentation of the character design methodology",
        "hotspots": [
          {
            "x": 25,
            "y": 40,
            "title": "Personality Mapping",
            "description": "Here, we translate core personality traits into visual language. For example, 'courage' might be represented by strong, angular shapes and a warm color palette."
          },
          {
            "x": 60,
            "y": 70,
            "title": "Iterative Sketching",
            "description": "This phase involves rapid exploration of silhouettes and forms. We focus on capturing the character's essence before committing to details."
          }
        ]
      },
      {
        "url": "/images/projects/character-design/character-design-sketches.jpg",
        "title": "Character Sketches",
        "description": "Initial sketches and exploration of character concepts",
        "hotspots": [
          {
            "x": 30,
            "y": 50,
            "title": "Exploring Silhouettes",
            "description": "Focus on capturing the overall shape and presence before details. The goal is a recognizable and unique form."
          },
          {
            "x": 70,
            "y": 65,
            "title": "Refining Features",
            "description": "Beginning to explore specific costume details and facial features that align with the character's personality."
          }
        ]
      },
      {
        "url": "/images/projects/character-design/character-design-development.jpg",
        "title": "Character Development",
        "description": "Progression from concept to final character design",
        "hotspots": [
          {
            "x": 20,
            "y": 60,
            "title": "Early Version",
            "description": "An initial color palette and design, which was later refined based on feedback to better fit the story's tone."
          },
          {
            "x": 80,
            "y": 55,
            "title": "Final Design",
            "description": "The final, approved design, incorporating stronger thematic elements and a more cohesive color story."
          }
        ]
      },
      {
        "url": "/images/projects/character-design/character-design-expressions.jpg",
        "title": "Expression Studies",
        "description": "Exploration of character emotions and expressions",
        "hotspots": [
          {
            "x": 25,
            "y": 30,
            "title": "Joyful Expression",
            "description": "Defining the specific muscle movements and features that convey the character's happiness authentically."
          },
          {
            "x": 75,
            "y": 60,
            "title": "Angry Expression",
            "description": "Exploring how the character displays anger, ensuring it is consistent with their underlying personality—are they explosive or cold?"
          }
        ]
      }
    ],
    "journey": [
      {
        "title": "The Blueprint",
        "description": "Slow pan across the methodology chart, highlighting key stages from left to right."
      },
      {
        "title": "The First Spark",
        "description": "Slow zoom into the most promising sketches, fading gently between them to show the flow of ideas."
      },
      {
        "title": "The Evolution",
        "description": "Crossfade from early concepts to the refined final design, emphasizing the transformative process."
      },
      {
        "title": "The Soul of the Character",
        "description": "Quick cuts between different expressions, showcasing the character's emotional range and depth."
      }
    ],
    "specs": [
      {
        "title": "Design Methodology",
        "description": "Systematic approach to character development from concept to final design"
      },
      {
        "title": "Personality Integration",
        "description": "Techniques for translating character traits and backstory into visual elements"
      },
      {
        "title": "Visual Communication",
        "description": "Principles for ensuring character designs clearly communicate personality and role"
      },
      {
        "title": "Iterative Process",
        "description": "Structured approach to refining and improving character designs through feedback"
      },
      {
        "title": "Cross-Media Application",
        "description": "Methodology adaptable to various media including illustration, animation, and games"
      },
      {
        "title": "Educational Framework",
        "description": "Comprehensive documentation suitable for teaching character design principles"
      }
    ]
  },
  {
    "id": 203,
    "title": "Graphic Novel",
    "description": "Comic book style graphic novel that follows our everyman as he is pushed deeper underground and out into the stars, exploring themes of transformation and cosmic journey.",
    "imageUrl": "/images/projects/graphic-novel/card-hero.jpg",
    "medium": "art",
    "genre": [
      "Concept Art",
      "Speculative Fiction"
    ],
    "style": [
      "Expressive",
      "Atmospheric"
    ],
    "tech": [],
    "mood": "Inspiring",
    "year": 2024,
    "role": "Artist, Writer, Character Designer, Layout Artist",
    "variant": "wide",
    "status": "in-progress",
    "pitch": "A visual journey from the depths of the underground to the vastness of space, following an ordinary person's extraordinary transformation through stunning sequential art.",
    "challenge": "Creating compelling visual storytelling that balances intimate character moments with epic cosmic scenes, while maintaining narrative coherence and emotional resonance throughout the journey.",
    "development": "Extensive character development and world-building, followed by detailed storyboarding and layout planning. Each page carefully crafted to advance both plot and character development.",
    "outcome": "A visually stunning graphic novel that explores themes of transformation, identity, and the human spirit's capacity for growth and adaptation.",
    "gallery": [
      {
        "url": "/images/projects/graphic-novel/graphic-novel-cover-art.jpg",
        "title": "Cover Art",
        "description": "The striking cover showing the protagonist's journey from underground to stars"
      },
      {
        "url": "/images/projects/graphic-novel/graphic-novel-underground-sequence.jpg",
        "title": "Underground Sequence",
        "description": "Dark, atmospheric panels showing the protagonist's underground journey",
        "hotspots": [
          {
            "x": 35,
            "y": 60,
            "title": "Sense of Claustrophobia",
            "description": "The tight paneling and dark, earthy tones are used to create a feeling of being trapped and confined."
          }
        ]
      },
      {
        "url": "/images/projects/graphic-novel/graphic-novel-transformation-sequence.jpg",
        "title": "Transformation Sequence",
        "description": "Key moments of the protagonist's transformation and growth",
        "hotspots": [
          {
            "x": 50,
            "y": 50,
            "title": "The Catalyst",
            "description": "This central panel uses a brighter, more ethereal color palette to signify the moment of change."
          }
        ]
      },
      {
        "url": "/images/projects/graphic-novel/graphic-novel-cosmic-journey.jpg",
        "title": "Cosmic Journey",
        "description": "Epic space scenes showing the protagonist's journey among the stars",
        "hotspots": [
          {
            "x": 60,
            "y": 40,
            "title": "Vastness of Space",
            "description": "Wide, open panels and a vibrant, star-filled background contrast with the earlier underground scenes to emphasize freedom and scale."
          }
        ]
      }
    ],
    "journey": [
      {
        "title": "The Ascent",
        "description": "Slow vertical pan on the cover, moving from the dark underground elements at the bottom to the bright, star-filled sky at the top."
      },
      {
        "title": "The Depths",
        "description": "A slow zoom into the darkest part of the panels, letting the oppressive atmosphere sink in before revealing the character."
      },
      {
        "title": "The Metamorphosis",
        "description": "A radiating light effect pulses from the central 'catalyst' panel, briefly illuminating the surrounding panels."
      }
    ],
    "specs": [
      {
        "title": "Kinetic Art Style",
        "description": "Dynamic comic book art with expressive characters and atmospheric lighting"
      },
      {
        "title": "Emotional Paneling",
        "description": "Varied panel layouts that enhance storytelling and emotional impact"
      },
      {
        "title": "Chromatic Storytelling",
        "description": "Contrasting dark underground tones with vibrant cosmic colors"
      },
      {
        "title": "Evolving Character Design",
        "description": "Distinctive character designs that evolve throughout the story"
      },
      {
        "title": "Silent Storytelling",
        "description": "Sequential art that advances plot while developing character and theme"
      },
      {
        "title": "Symbolic Resonance",
        "description": "Visual metaphors for transformation, growth, and the human spirit's resilience"
      }
    ]
  },
  {
    "id": 205,
    "title": "Sticker Pack",
    "description": "Designing tarot and astrology sticker packs demands different skills that grand story illustration, focusing on simplicity, recognizability, and digital optimization.",
    "imageUrl": "/images/projects/sticker-pack/card-hero.jpg",
    "medium": "art",
    "genre": [
      "Concept Art",
      "Tarot",
      "Marketing"
    ],
    "style": [
      "Clean"
    ],
    "tech": [],
    "mood": "Playful",
    "year": 2024,
    "role": "Digital Artist, Sticker Designer, Commercial Artist",
    "variant": "wide",
    "status": "ongoing",
    "links": {
      "shop": "#",
      "portfolio": "#"
    },
    "pitch": "Clean, recognizable sticker designs that bring tarot and astrology into everyday digital communication with style and simplicity.",
    "challenge": "Creating designs that are both simple enough for small-scale digital use and rich enough to convey the depth of tarot and astrology symbolism.",
    "development": "Developed a design system that balances simplicity with symbolic richness, optimized for digital platforms and small-scale applications.",
    "outcome": "A collection of versatile sticker designs that make tarot and astrology accessible and stylish for digital communication.",
    "gallery": [
      {
        "url": "/images/projects/sticker-pack/sticker-pack-overview.jpg",
        "title": "Sticker Pack Overview",
        "description": "Complete collection of tarot and astrology stickers",
        "hotspots": [
          {
            "x": 50,
            "y": 40,
            "title": "Complete Collection",
            "description": "The full range of tarot and astrology stickers designed for digital communication."
          },
          {
            "x": 75,
            "y": 60,
            "title": "Design Consistency",
            "description": "Consistent visual style that unifies the entire collection while maintaining individual character."
          }
        ]
      },
      {
        "url": "/images/projects/sticker-pack/sticker-pack-tarot-stickers.jpg",
        "title": "Tarot Stickers",
        "description": "Major arcana designs simplified for sticker format",
        "hotspots": [
          {
            "x": 40,
            "y": 50,
            "title": "Symbol Simplification",
            "description": "Complex tarot symbols reduced to their essential elements while maintaining meaning."
          },
          {
            "x": 70,
            "y": 35,
            "title": "Digital Readability",
            "description": "Designs optimized for small-scale digital use and instant recognition."
          }
        ]
      },
      {
        "url": "/images/projects/sticker-pack/sticker-pack-astrology-stickers.jpg",
        "title": "Astrology Stickers",
        "description": "Zodiac signs and astrological symbols",
        "hotspots": [
          {
            "x": 35,
            "y": 45,
            "title": "Zodiac Collection",
            "description": "All twelve zodiac signs designed with consistent style and clear symbolism."
          },
          {
            "x": 65,
            "y": 55,
            "title": "Astrological Elements",
            "description": "Additional astrological symbols that complement the zodiac collection."
          }
        ]
      },
      {
        "url": "/images/projects/sticker-pack/sticker-pack-digital-applications.jpg",
        "title": "Digital Applications",
        "description": "Stickers in use on various digital platforms",
        "hotspots": [
          {
            "x": 45,
            "y": 40,
            "title": "Platform Integration",
            "description": "Stickers seamlessly integrated into various digital communication platforms."
          },
          {
            "x": 80,
            "y": 70,
            "title": "Usage Examples",
            "description": "Real-world examples of how the stickers enhance digital conversations."
          }
        ]
      }
    ],
    "journey": [
      {
        "title": "Design Research",
        "description": "Studied successful sticker designs and digital art trends"
      },
      {
        "title": "Symbol Simplification",
        "description": "Developed techniques for simplifying complex tarot and astrology symbols"
      },
      {
        "title": "Digital Optimization",
        "description": "Created designs optimized for small-scale digital use"
      },
      {
        "title": "Style Development",
        "description": "Established consistent visual style across all sticker designs"
      },
      {
        "title": "Collection Curation",
        "description": "Curated cohesive collections for different themes and uses"
      }
    ],
    "specs": [
      {
        "title": "Design System",
        "description": "Consistent visual style optimized for digital sticker use"
      },
      {
        "title": "Symbol Simplification",
        "description": "Techniques for reducing complex symbols to simple, recognizable forms"
      },
      {
        "title": "Digital Optimization",
        "description": "Designs optimized for small-scale digital applications"
      },
      {
        "title": "Color Palette",
        "description": "Carefully chosen colors that work well in digital environments"
      },
      {
        "title": "Scalability",
        "description": "Vector-based designs that maintain quality at various sizes"
      },
      {
        "title": "Commercial Application",
        "description": "Designs suitable for commercial use across digital platforms"
      }
    ],
    "process": "<h3>The Sticker Design Process</h3><p>The creation of these sticker designs involved developing a unique approach to simplifying complex spiritual symbols while maintaining their essential meaning and visual appeal. Each design was carefully crafted for digital communication.</p><h4>1. Symbol Research</h4><p>We began by deeply studying the original tarot and astrology symbols, understanding their core meanings and visual elements that make them recognizable and powerful.</p><h4>2. Simplification Process</h4><p>Next, we developed techniques for reducing complex symbols to their essential elements, ensuring they remain meaningful while being simple enough for small-scale digital use.</p><h4>3. Digital Optimization</h4><p>Each design was optimized for digital platforms, considering factors like small size, various backgrounds, and the need for instant recognition.</p>",
    "inspiration": "<h3>Bringing Spirituality to Digital Communication</h3><p>Inspired by the desire to bring the wisdom and beauty of tarot and astrology into everyday digital communication. We wanted to create designs that could make spiritual concepts accessible and stylish for modern digital interactions.</p><p>We drew from successful sticker design trends, digital art principles, and the universal appeal of spiritual symbols to create designs that resonate with contemporary audiences while honoring traditional meanings.</p>"
  }
];

// Translation data for the portfolio
const translations_bk = {
    en: {
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-title': 'Technical Support Specialist & Developer',
        'hero-subtitle': '20+ years supporting enterprise solutions, transitioning into innovative development',
        'hero-cta': 'Get In Touch',
        'about-title': 'About Me',
        'about-text1': 'Technical Support Specialist & Emerging Developer with 20+ years supporting enterprise software solutions across 20+ countries in banking, telecommunications, and government sectors.',
        'about-text2': 'Experienced in JavaScript, React, Node.js, Python, C#, SQL, HTML/CSS with hands-on application support expertise. Skilled in database troubleshooting, system integration, and technical problem-solving.',
        'about-text3': 'Transitioning technical support expertise into development solutions to drive innovation and efficiency.',
        'skills-title': 'Technical Skills',
        'skills-support': 'Technical Support',
        'skills-support-desc': 'Enterprise application support and troubleshooting across multiple platforms and technologies.',
        'skills-web': 'Web Development',
        'skills-web-desc': 'Modern web technologies and frameworks for creating responsive applications.',
        'skills-database': 'Database Management',
        'skills-database-desc': 'SQL database management and system integration expertise.',
        'skills-programming': 'Programming',
        'skills-programming-desc': 'Multiple programming languages and development methodologies.',
        'projects-title': 'Projects & Experience',
        'project1-title': 'Banking Solutions Support',
        'project1-desc': 'Provided technical support for Coretrac banking agent sales management system across multiple countries, ensuring 100% uptime and customer satisfaction.',
        'project2-title': 'Web Development Projects',
        'project2-desc': 'Developed responsive web applications using modern technologies including React, Node.js, and various CSS frameworks for diverse client requirements.',
        'project3-title': 'Infrastructure Management',
        'project3-desc': 'Managed IT infrastructure for 800+ employees across 5 offices, including server maintenance, network setup, and system upgrades.',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Ready to collaborate on your next project or discuss opportunities',
        'contact-email': 'Email',
        'contact-location': 'Location',
        'contact-availability': 'Availability',
        'contact-available': 'Available for freelance projects',
        'footer-text': '© 2025 Portfolio. All rights reserved.'
    },
    es: {
        'nav-about': 'Acerca de',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        'hero-title': 'Especialista en Soporte Técnico y Desarrollador',
        'hero-subtitle': '20+ años apoyando soluciones empresariales, transicionando hacia desarrollo innovador',
        'hero-cta': 'Contáctame',
        'about-title': 'Acerca de Mí',
        'about-text1': 'Especialista en Soporte Técnico y Desarrollador Emergente con 20+ años apoyando soluciones de software empresarial en 20+ países en sectores bancarios, telecomunicaciones y gubernamentales.',
        'about-text2': 'Experimentado en JavaScript, React, Node.js, Python, C#, SQL, HTML/CSS con experiencia práctica en soporte de aplicaciones. Especializado en resolución de problemas de bases de datos, integración de sistemas y resolución técnica.',
        'about-text3': 'Transicionando experiencia en soporte técnico hacia soluciones de desarrollo para impulsar innovación y eficiencia.',
        'skills-title': 'Habilidades Técnicas',
        'skills-support': 'Soporte Técnico',
        'skills-support-desc': 'Soporte y resolución de problemas de aplicaciones empresariales en múltiples plataformas y tecnologías.',
        'skills-web': 'Desarrollo Web',
        'skills-web-desc': 'Tecnologías web modernas y frameworks para crear aplicaciones responsivas.',
        'skills-database': 'Gestión de Bases de Datos',
        'skills-database-desc': 'Experiencia en gestión de bases de datos SQL e integración de sistemas.',
        'skills-programming': 'Programación',
        'skills-programming-desc': 'Múltiples lenguajes de programación y metodologías de desarrollo.',
        'projects-title': 'Proyectos y Experiencia',
        'project1-title': 'Soporte Soluciones Bancarias',
        'project1-desc': 'Proporcioné soporte técnico para el sistema de gestión de ventas de agentes bancarios Coretrac en múltiples países, asegurando 100% de tiempo de actividad y satisfacción del cliente.',
        'project2-title': 'Proyectos de Desarrollo Web',
        'project2-desc': 'Desarrollé aplicaciones web responsivas usando tecnologías modernas incluyendo React, Node.js, y varios frameworks CSS para diversos requisitos de clientes.',
        'project3-title': 'Gestión de Infraestructura',
        'project3-desc': 'Gestioné infraestructura IT para 800+ empleados en 5 oficinas, incluyendo mantenimiento de servidores, configuración de red y actualizaciones de sistema.',
        'contact-title': 'Ponte en Contacto',
        'contact-subtitle': 'Listo para colaborar en tu próximo proyecto o discutir oportunidades',
        'contact-email': 'Email',
        'contact-location': 'Ubicación',
        'contact-availability': 'Disponibilidad',
        'contact-available': 'Disponible para proyectos freelance',
        'footer-text': '© 2025 Portfolio. Todos los derechos reservados.'
    }
};


// Variable para almacenar las traducciones cargadas
let translations = {};
let currentLanguage = 'en';

// Función para cargar traducciones desde archivos JSON
async function loadTranslations() {
    try {
        const [enResponse, esResponse] = await Promise.all([
            fetch('./translations/en.json'),
            fetch('./translations/es.json')
        ]);

        if (!enResponse.ok || !esResponse.ok) {
            throw new Error('Error al cargar los archivos de traducción');
        }

        const enTranslations = await enResponse.json();
        const esTranslations = await esResponse.json();

        translations = {
            en: enTranslations,
            es: esTranslations
        };

        // console.log('Traducciones cargadas exitosamente');
    } catch (error) {
        console.error('Error cargando traducciones:', error);
        // Fallback con traducciones básicas en caso de error
        translations = translations_bk
    }
}

// Función para aplicar traducciones
function applyTranslations(language) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Función para cambiar idioma
async function toggleLanguage() {
    // Asegurarse de que las traducciones estén cargadas
    if (Object.keys(translations).length === 0) {
        await loadTranslations();
    }

    const langToggle = document.querySelector('.lang-toggle');
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    langToggle.textContent = currentLanguage === 'en' ? '🇪🇸' : '🇬🇧';
    
    applyTranslations(currentLanguage);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', async function() {
    await loadTranslations();
    applyTranslations(currentLanguage);
});


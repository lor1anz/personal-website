const translations = {
    en: {
        "page.title": "Pavel Rozhkov | C++ & CUDA Engineer",
        "page.description": "Pavel Rozhkov — software engineer focused on C++, CUDA, high-performance computing, and systems programming.",
        "name": "Pavel Rozhkov",
        "skip": "Skip to content",
        "nav.label": "Main navigation",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.stack": "Stack",
        "nav.cv": "CV",
        "nav.contact": "Contact",
        "language.label": "Interface language",
        "language.english": "Switch to English",
        "language.russian": "Switch to Russian",
        "language.changed": "Language changed to English.",
        "hero.eyebrow": "Software engineer",
        "hero.role": "C++, CUDA & high-performance computing.",
        "hero.description": "Systems programming, parallel computing, and performance optimization. Based in Moscow, Russia.",
        "hero.projects": "Explore projects",
        "hero.cv": "View CV",
        "focus.title": "Engineering focus",
        "focus.language": "Core language",
        "focus.compute": "GPU computing",
        "focus.domain": "Domain",
        "focus.domainValue": "HPC & systems",
        "expertise.title": "What I Do",
        "expertise.systems.title": "C++ & Systems",
        "expertise.systems.description": "Systems programming with attention to memory, concurrency, and clear interfaces.",
        "expertise.gpu.title": "GPU Computing",
        "expertise.gpu.description": "Parallel computing and GPU acceleration for compute-intensive workloads.",
        "expertise.performance.title": "Performance Optimization",
        "expertise.performance.description": "Profiling, bottleneck analysis, and efficient use of compute resources.",
        "projects.title": "Projects",
        "projects.pending": "Project details coming soon",
        "projects.description": "Project descriptions, source links, and technical notes will be added here.",
        "projects.github": "Browse GitHub",
        "stack.title": "Tech Stack",
        "stack.language": "Core language",
        "stack.systems": "Systems programming",
        "stack.compute": "GPU computing",
        "stack.parallel": "Parallel computing",
        "stack.focus": "Engineering focus",
        "stack.performance": "High-performance computing & optimization",
        "cv.title": "CV",
        "cv.experience": "Experience",
        "cv.experiencePending": "Professional experience details will be added here.",
        "cv.education": "Education",
        "cv.educationPending": "Education details will be added here.",
        "cv.download": "Download CV (PDF)",
        "cv.note": "The PDF resume will be available here.",
        "contact.title": "Contact",
        "contact.description": "For questions and engineering conversations, find me on GitHub.",
        "contact.email": "Email",
        "contact.emailPending": "Address to be added",
        "footer.source": "Source code",
        "footer.top": "Back to top"
    },
    ru: {
        "page.title": "Павел Рожков | C++ и CUDA",
        "page.description": "Павел Рожков — инженер-программист. C++, CUDA, высокопроизводительные вычисления и системное программирование.",
        "name": "Павел Рожков",
        "skip": "Перейти к содержимому",
        "nav.label": "Основная навигация",
        "nav.about": "Обо мне",
        "nav.projects": "Проекты",
        "nav.stack": "Стек",
        "nav.cv": "Резюме",
        "nav.contact": "Контакты",
        "language.label": "Язык интерфейса",
        "language.english": "Переключить на английский",
        "language.russian": "Переключить на русский",
        "language.changed": "Язык изменён на русский.",
        "hero.eyebrow": "Инженер-программист",
        "hero.role": "C++, CUDA и высокопроизводительные вычисления.",
        "hero.description": "Системное программирование, параллельные вычисления и оптимизация производительности. Москва, Россия.",
        "hero.projects": "Смотреть проекты",
        "hero.cv": "Смотреть резюме",
        "focus.title": "Специализация",
        "focus.language": "Основной язык",
        "focus.compute": "Вычисления на GPU",
        "focus.domain": "Направление",
        "focus.domainValue": "HPC и системное ПО",
        "expertise.title": "Чем я занимаюсь",
        "expertise.systems.title": "C++ и системное ПО",
        "expertise.systems.description": "Системный код с вниманием к памяти, многопоточности и понятным интерфейсам.",
        "expertise.gpu.title": "Вычисления на GPU",
        "expertise.gpu.description": "Параллельные вычисления и ускорение ресурсоёмких задач на GPU.",
        "expertise.performance.title": "Оптимизация производительности",
        "expertise.performance.description": "Профилирование, поиск узких мест и эффективное использование вычислительных ресурсов.",
        "projects.title": "Проекты",
        "projects.pending": "Информация о проектах появится позже",
        "projects.description": "Здесь будут описания проектов, ссылки на исходный код и технические заметки.",
        "projects.github": "Перейти на GitHub",
        "stack.title": "Технологии",
        "stack.language": "Основной язык",
        "stack.systems": "Системное программирование",
        "stack.compute": "Вычисления на GPU",
        "stack.parallel": "Параллельные вычисления",
        "stack.focus": "Специализация",
        "stack.performance": "Высокопроизводительные вычисления и оптимизация",
        "cv.title": "Резюме",
        "cv.experience": "Опыт работы",
        "cv.experiencePending": "Информация о профессиональном опыте появится здесь позже.",
        "cv.education": "Образование",
        "cv.educationPending": "Информация об образовании появится здесь позже.",
        "cv.download": "Скачать резюме (PDF)",
        "cv.note": "PDF-версия резюме будет доступна здесь позже.",
        "contact.title": "Контакты",
        "contact.description": "Для вопросов и обсуждения инженерных задач — мой профиль на GitHub.",
        "contact.email": "Электронная почта",
        "contact.emailPending": "Адрес будет добавлен позже",
        "footer.source": "Исходный код",
        "footer.top": "Наверх"
    }
};

const languageButtons = document.querySelectorAll("[data-language]");
const languageStatus = document.getElementById("language-status");
const storageKey = "portfolio-language";

function applyLanguage(language, announce = false) {
    const selectedLanguage = language === "ru" ? "ru" : "en";
    const copy = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.title = copy["page.title"];
    document.querySelector('meta[name="description"]').content = copy["page.description"];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = copy[element.dataset.i18n];
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", copy[element.dataset.i18nAriaLabel]);
    });

    languageButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
    });

    if (announce) {
        languageStatus.textContent = copy["language.changed"];
    }
}

let savedLanguage = "en";

try {
    savedLanguage = localStorage.getItem(storageKey) || "en";
} catch {
    // Language switching also works when browser storage is unavailable.
}

applyLanguage(savedLanguage);

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const language = button.dataset.language;
        applyLanguage(language, true);

        try {
            localStorage.setItem(storageKey, language);
        } catch {
            // The selected language remains active for this page visit.
        }
    });
});

document.getElementById("copyright-year").textContent = new Date().getFullYear();

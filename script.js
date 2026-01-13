tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f20d33",
                "background-light": "#f8f5f6",
                "background-dark": "#221013",
            },
            fontFamily: {
                "display": ["Lexend", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
}

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Deadline Logic
    const examDate = new Date("2026-01-25");
    const projectDate = new Date("2026-01-13");
    const now = new Date();

    const examDueElement = document.getElementById("examDue");
    const projectDueElement = document.getElementById("projectDue");

    if (examDueElement) {
        const diffTime = Math.abs(examDate - now);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        examDueElement.innerText = `Due in ${diffDays} days`;
    }

    if (projectDueElement) {
        const diffTime = Math.abs(projectDate - now);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        projectDueElement.innerText = `Due in ${diffDays} days`;
    }
});

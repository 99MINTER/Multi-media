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
    // Exam due in 10 days (Current: 2026-01-13 -> Target: 2026-01-23)
    const examDate = new Date("2026-01-23");
    // Project due today (Target: 2026-01-13)
    const projectDate = new Date("2026-01-13");

    const updateDue = (date) => {
        const today = new Date();
        // Reset time part to ensure clean day comparison
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);

        const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));

        if (diff > 0) return `Due in ${diff} days`;
        if (diff === 0) return "Due Today";
        return "Deadline passed";
    };

    const examDueElement = document.getElementById("examDue");
    const projectDueElement = document.getElementById("projectDue");

    if (examDueElement) {
        examDueElement.textContent = updateDue(examDate);
    }

    if (projectDueElement) {
        projectDueElement.textContent = updateDue(projectDate);
    }
});

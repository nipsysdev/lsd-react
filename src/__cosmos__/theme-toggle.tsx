'use client';

// No default export - this prevents it from appearing in the fixture list
export function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 border rounded text-[rgb(var(--lsd-text))] border-[rgb(var(--lsd-border))]"
    >
      Toggle Theme
    </button>
  );
}

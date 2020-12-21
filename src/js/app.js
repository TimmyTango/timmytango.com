const darkModeToggle = document.getElementById('dark-mode-input');
const defaultToggleState = localStorage.getItem('darkModeEnabled') === 'true';

darkModeToggle.checked = defaultToggleState;
if (defaultToggleState) {
    document.body.classList.add('dark');
}

darkModeToggle.addEventListener('change', () => {
    localStorage.setItem('darkModeEnabled', darkModeToggle.checked.toString());
    document.body.classList.toggle('dark');
});

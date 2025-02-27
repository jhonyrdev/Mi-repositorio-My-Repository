// Seleccionar el elemento de idioma
const languageSelect = document.getElementById('language-select');

// Función para cargar el archivo JSON según el idioma seleccionado
function loadLanguage(language) {
  fetch(`./languages/${language}.json`) // Supongamos que tienes una carpeta "languages" para los archivos JSON
    .then(response => response.json())
    .then(data => {
      // Recorrer todos los elementos que deben cambiar
      document.querySelectorAll('[data-section]').forEach(element => {
        const section = element.getAttribute('data-section');
        const value = element.getAttribute('data-value');
        
        // Verificamos si el archivo JSON tiene la clave correspondiente
        if (data[section] && data[section][value]) {
          // Actualizar el contenido del elemento
          element.textContent = data[section][value];
        }
      });
    })
    .catch(error => {
      console.error('Error al cargar el archivo de idioma:', error);
    });
}

// Detectar el cambio de idioma en el select
languageSelect.addEventListener('change', (e) => {
  const selectedLanguage = e.target.value; // 'es' o 'en'
  loadLanguage(selectedLanguage);
});

// Cargar el idioma predeterminado (por ejemplo, español) al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  loadLanguage('es'); // Por defecto, cargamos el español
});

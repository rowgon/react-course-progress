# CourseProgress Component 🎓

Un componente de React funcional y accesible diseñado para mostrar el avance de un usuario en un curso educativo.

## 🚀 Problema que resuelve
En plataformas de e-learning, el feedback visual es vital para la retención del usuario. Este componente transforma datos crudos en una experiencia visual atractiva que:
- Proporciona mensajes motivacionales dinámicos.
- Asegura la integridad visual mediante lógica de "clamping".
- Cumple con estándares básicos de accesibilidad (ARIA).

## 🛠️ Tecnologías y herramientas
- **React.js**: (Functional Components & Hooks).
- **PropTypes**: Para validación de tipos de datos.
- **CSS-in-JS**: Estilos encapsulados para facilitar la portabilidad.

## 📦 Instalación y Uso

1. Copia el archivo `CourseProgress.jsx` en tu carpeta de componentes.
2. Importalo y úsalo de la siguiente manera:

```javascript
import CourseProgress from './components/CourseProgress';

function App() {
  return (
    <CourseProgress 
      courseName="Master en WordPress y React" 
      completedLessons={5} 
      totalLessons={10} 
    />
  );
}

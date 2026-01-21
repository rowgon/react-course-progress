import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const CourseProgress = ({ courseName, completedLessons, totalLessons }) => {
  
  // LÓGICA 1: "Clamping" (Seguridad de datos)
  // Aseguramos que las lecciones completadas no sean menores a 0 ni mayores al total.
  const safeCompleted = Math.min(Math.max(completedLessons, 0), totalLessons);

  // LÓGICA 2: Cálculo del porcentaje
  // Usamos useMemo para que el cálculo solo se repita si cambian las lecciones.
  const percentage = useMemo(() => {
    return totalLessons > 0 ? Math.round((safeCompleted / totalLessons) * 100) : 0;
  }, [safeCompleted, totalLessons]);

  // LÓGICA 3: Mensaje dinámico (Feedback motivacional)
  const getMessage = () => {
    if (totalLessons === 0) return "Cargando contenido del curso...";
    if (percentage === 0) return "¡Es un gran día para empezar!";
    if (percentage < 50) return "Buen comienzo, ¡sigue así!";
    if (percentage < 100) return "¡Casi lo logras, estás a un paso!";
    return "¡Felicidades! Completaste el curso 🎉";
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{courseName}</h2>
      
      {/* Accesibilidad: Usamos roles para que lectores de pantalla entiendan la barra */}
      <div 
        style={styles.barContainer}
        role="progressbar" 
        aria-valuenow={percentage} 
        aria-valuemin="0" 
        aria-valuemax="100"
      >
        <div style={{ ...styles.barFill, width: `${percentage}%` }} />
      </div>

      <div style={styles.infoRow}>
        <span>{percentage}% completado</span>
        <span>{safeCompleted} de {totalLessons} lecciones</span>
      </div>

      <p style={styles.statusMessage}>{getMessage()}</p>
    </div>
  );
};

// VALIDACIÓN: Definimos qué tipo de datos esperamos
CourseProgress.propTypes = {
  courseName: PropTypes.string.isRequired,
  completedLessons: PropTypes.number,
  totalLessons: PropTypes.number,
};

// VALORES POR DEFECTO: Si no envían datos, el componente no se rompe
CourseProgress.defaultProps = {
  completedLessons: 0,
  totalLessons: 0,
};

// ESTILOS (CSS-in-JS simple)
const styles = {
  card: {
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '350px'
  },
  title: { fontSize: '18px', marginBottom: '15px', color: '#333' },
  barContainer: {
    height: '12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '8px'
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    transition: 'width 0.5s ease-in-out' // Animación suave
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#666'
  },
  statusMessage: {
    marginTop: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#2c3e50'
  }
};

export default CourseProgress;

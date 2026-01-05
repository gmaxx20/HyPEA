
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  currentView: View;
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ currentView, userName }) => {
  const getBreadcrumb = () => {
    switch (currentView) {
      case View.Dashboard: return 'Panel de Control';
      case View.Activities: return 'Mis Actividades';
      case View.CourseInfo: return 'Información del Curso';
      case View.Resources: return 'Biblioteca de Recursos';
      case View.ProceresAI: return 'Próceres AI';
      case View.TeacherPortal: return 'Portal del Profesor';
      default: return 'HyPEA 2026';
    }
  };

  return (
    <header className="h-20 flex items-center justify-between px-8 bg-[#0f1115] border-b border-gray-800 z-10 sticky top-0">
      <div className="flex items-center gap-2 text-gray-400">
        <span className="material-icons-round text-sm">school</span>
        <span className="text-sm font-medium">Historia y Política / {getBreadcrumb()}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full">
          <span className="material-icons-round text-accent-blue text-sm mr-2">person</span>
          <span className="text-sm font-medium text-gray-300">{userName}</span>
        </div>
        <button className="flex items-center px-5 py-2 text-sm font-bold text-black bg-primary hover:bg-yellow-500 rounded-md shadow-neon-gold transition-all active:scale-95">
          <span className="material-icons-round mr-2 text-sm">logout</span>
          Salir
        </button>
      </div>
    </header>
  );
};

export default Header;

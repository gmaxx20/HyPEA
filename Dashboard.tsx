
import React from 'react';
import { View } from '../types';

interface DashboardProps {
  onNavigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-slate-900 to-black p-12 border border-blue-800/30 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center py-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight neon-text">
            Historia y Política de la Educación
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Portal Educativo Integrado - Ciclo Lectivo 2026
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => onNavigate(View.CourseInfo)}
              className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-neon-gold transition-all transform hover:-translate-y-1"
            >
              Comenzar Lectura
            </button>
            <button 
              onClick={() => onNavigate(View.Activities)}
              className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/30 hover:text-blue-200 font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Ver Actividades
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => onNavigate(View.CourseInfo)}>
          <div className="mb-6">
            <span className="material-icons-round text-5xl text-blue-500 group-hover:scale-110 transition-transform">menu_book</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Contenidos Académicos</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
            Ejes temáticos completos, desde el periodo colonial hasta las políticas educativas actuales de la Nación.
          </p>
          <button className="w-full text-left py-2.5 px-4 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-white transition-colors">
            Explorar
          </button>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => onNavigate(View.Activities)}>
          <div className="mb-6">
            <span className="material-icons-round text-5xl text-primary group-hover:scale-110 transition-transform">edit</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Actividades del Curso</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
            Participa en los debates semanales y envía tus trabajos prácticos para seguimiento docente personalizado.
          </p>
          <button className="w-full text-left py-2.5 px-4 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-white transition-colors">
            Participar
          </button>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => onNavigate(View.Resources)}>
          <div className="mb-6">
            <span className="material-icons-round text-5xl text-red-500 group-hover:scale-110 transition-transform">cloud_download</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Repositorio Digital</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
            Descarga leyes, bibliografía obligatoria, PDFs y materiales multimedia complementarios del curso.
          </p>
          <button className="w-full text-left py-2.5 px-4 border border-gray-700 rounded-lg text-sm text-gray-400 hover:text-white transition-colors">
            Acceder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

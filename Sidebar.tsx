
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  user: { name: string; role: string };
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, user }) => {
  const NavItem = ({ view, icon, label, section }: { view: View, icon: string, label: string, section?: string }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-all group ${
        currentView === view 
          ? 'bg-primary/10 text-primary border-l-4 border-primary' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <span className="material-icons-round mr-3 text-lg">{icon}</span>
      {label}
    </button>
  );

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col bg-[#0f1115] border-r border-gray-800 h-full">
      <div className="h-20 flex items-center px-6 border-b border-gray-800 gap-3">
        <span className="material-icons-round text-primary text-3xl">account_balance</span>
        <h1 className="text-xl font-bold text-white tracking-wide">HyPEA <span className="text-primary">2026</span></h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-6">
        <div className="space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">General</div>
          <NavItem view={View.Dashboard} icon="dashboard" label="Dashboard" />
          <NavItem view={View.CourseInfo} icon="info" label="Información del Curso" />
          <NavItem view={View.Activities} icon="assignment" label="Actividades" />
        </div>

        <div className="space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Ejes Académicos</div>
          <NavItem view={View.Dashboard} icon="foundation" label="Eje I: Fundadores" />
          <NavItem view={View.Dashboard} icon="gavel" label="Eje II: Estado" />
          <NavItem view={View.Dashboard} icon="map" label="Eje III: Mapas Actuales" />
        </div>

        <div className="space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Recursos</div>
          <NavItem view={View.Resources} icon="folder_open" label="Biblioteca Digital" />
          <NavItem view={View.ProceresAI} icon="smart_toy" label="Próceres AI" />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-800 space-y-2">
        <button 
          onClick={() => setCurrentView(View.TeacherPortal)}
          className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            currentView === View.TeacherPortal ? 'text-primary' : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="material-icons-round mr-3 text-lg">admin_panel_settings</span>
          Acceso Docente
        </button>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs uppercase">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="text-sm font-medium text-gray-300 truncate">{user.name}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

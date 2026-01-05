
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Activities from './views/Activities';
import CourseInfo from './views/CourseInfo';
import ResourceLibrary from './views/ResourceLibrary';
import AIProceres from './views/AIProceres';
import TeacherPortal from './views/TeacherPortal';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);
  const [user] = useState({ name: 'micciullo maximiliano', role: 'student' });

  const renderView = () => {
    switch (currentView) {
      case View.Dashboard: return <Dashboard onNavigate={setCurrentView} />;
      case View.Activities: return <Activities />;
      case View.CourseInfo: return <CourseInfo />;
      case View.Resources: return <ResourceLibrary />;
      case View.ProceresAI: return <AIProceres />;
      case View.TeacherPortal: return <TeacherPortal />;
      default: return <Dashboard onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-gray-200">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        user={user} 
      />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Header currentView={currentView} userName={user.name} />
        
        <div className="flex-1 overflow-y-auto p-8 bg-gray-950/20">
          <div className="max-w-7xl mx-auto pb-20">
            {renderView()}
          </div>
          
          <footer className="mt-12 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] py-8 border-t border-gray-900">
            © 2026 HyPEA - Sistema Educativo Integrado de Historia. Todos los derechos reservados.
          </footer>
        </div>
      </main>

      {/* Floating Dark Mode Toggle (Visual Only) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-white text-black p-3 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          <span className="material-icons-round">light_mode</span>
        </button>
      </div>
    </div>
  );
};

export default App;

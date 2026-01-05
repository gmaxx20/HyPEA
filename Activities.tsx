
import React, { useState } from 'react';

const Activities: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('');

  const activities = [
    { id: 'TP1', title: 'La Generación del 80', date: '10/05/2026', status: 'Sin entregar', badge: 'TP N°1' },
    { id: 'TP2', title: 'Ley 1420: Debate Histórico', date: '24/05/2026', status: 'En progreso', badge: 'TP N°2' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Heading */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-8 shadow-xl border border-gray-800">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">Panel de Actividades</h2>
          <p className="text-gray-300">Organiza tus entregas y realiza el seguimiento de tu progreso académico.</p>
        </div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Credentials & Progress */}
        <div className="space-y-6">
          <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex items-center">
              <span className="material-icons-round mr-2 text-accent-blue">badge</span>
              <h3 className="text-lg font-semibold text-white">Credenciales</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Nombre Completo</label>
                <div className="w-full px-3 py-2 bg-gray-900/50 border border-gray-800 rounded text-gray-300 text-sm">Micciullo Maximiliano</div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Correo Electrónico</label>
                <div className="w-full px-3 py-2 bg-gray-900/50 border border-gray-800 rounded text-gray-300 text-sm">m.micciullo@university.edu</div>
              </div>
              <div className="pt-2 flex items-center text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Matriculado Activo - Ciclo 2026
              </div>
            </div>
          </div>

          <div className="bg-[#111827] rounded-xl border border-gray-800 p-6 space-y-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Progreso General</h4>
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-300">Asistencia</span>
                <span className="text-primary font-bold">85%</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-300">Trabajos Entregados</span>
                <span className="text-accent-blue font-bold">4/10</span>
              </div>
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent-blue" style={{width: '40%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Tasks & History */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#111827] rounded-xl border border-gray-800">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="material-icons-round mr-2 text-primary">assignment_late</span>
                Pendientes
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-900/40 text-red-400 border border-red-800/50">
                {activities.length} PENDIENTES
              </span>
            </div>
            <div className="divide-y divide-gray-800">
              {activities.map((act) => (
                <div key={act.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/5 transition-colors group">
                  <div className="flex-1">
                    <div className="flex items-center mb-1.5">
                      <span className="text-[10px] font-bold uppercase text-accent-blue border border-accent-blue/30 px-1.5 py-0.5 rounded mr-2 tracking-tighter">
                        {act.badge}
                      </span>
                      <h4 className="font-bold text-gray-100">{act.title}</h4>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 gap-4">
                      <span className="flex items-center"><span className="material-icons-round text-sm mr-1">calendar_today</span> Vence: {act.date}</span>
                      <span className={`${act.status === 'Sin entregar' ? 'text-red-500' : 'text-yellow-500'} font-medium`}>{act.status}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setShowModal(true); setSelectedActivity(act.title); }}
                    className="flex items-center justify-center px-4 py-2 bg-secondary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-900/30"
                  >
                    <span className="material-icons-round mr-2 text-sm">upload_file</span>
                    Entregar
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-lg font-bold text-white flex items-center">
                <span className="material-icons-round mr-2 text-gray-500">history</span>
                Historial de Entregas
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-900/50 text-[10px] uppercase text-gray-500 tracking-widest border-b border-gray-800">
                  <tr>
                    <th className="px-6 py-4">Actividad</th>
                    <th className="px-6 py-4">Fecha</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-sm">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-200">Ensayo Inicial</div>
                      <div className="text-xs text-gray-500">Sarmiento y la Educación</div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">02 Abr 2026</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-900/30 text-green-400 border border-green-800/30 uppercase">
                        Calificado (9)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline text-xs font-bold">Ver Corrección</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-200">Foro de Presentación</div>
                      <div className="text-xs text-gray-500">Participación obligatoria</div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">15 Mar 2026</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-900/30 text-blue-400 border border-blue-800/30 uppercase">
                        Entregado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-500 hover:text-white text-xs font-bold">Ver</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-[#111827] border border-gray-700 rounded-xl w-full max-w-lg p-8 shadow-2xl animate-scaleIn">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-900/30 rounded-full border border-blue-800">
                <span className="material-icons-round text-blue-400">cloud_upload</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Entregar Actividad</h3>
                <p className="text-sm text-gray-400">{selectedActivity}</p>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center hover:border-primary transition-colors cursor-pointer group mb-8">
              <span className="material-icons-round text-5xl text-gray-600 group-hover:text-primary mb-4 transition-colors">description</span>
              <p className="text-sm text-gray-400">Haz clic para seleccionar o arrastra el archivo aquí</p>
              <p className="text-[10px] text-gray-600 mt-2">PDF, DOC, DOCX hasta 10MB</p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 border border-gray-700 text-gray-400 font-bold rounded-lg hover:bg-white/5 transition-all"
              >
                Cancelar
              </button>
              <button className="flex-1 py-3 bg-primary text-black font-bold rounded-lg shadow-lg hover:shadow-neon-gold transition-all">
                Enviar Entrega
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;

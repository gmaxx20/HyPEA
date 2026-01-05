
import React, { useState } from 'react';

const TeacherPortal: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'profesor2026') {
      setIsLogged(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (!isLogged) {
    return (
      <div className="h-[calc(100vh-10rem)] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative bg-[#111827] border border-gray-800 p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-md text-center border-t-4 border-t-primary">
          <span className="material-icons-round text-5xl text-primary mb-6">school</span>
          <h2 className="text-2xl font-bold text-white mb-2">Acceso Docente</h2>
          <p className="text-gray-500 text-sm mb-8">Área restringida para gestión académica</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese clave de acceso"
              className={`w-full bg-gray-950 border rounded-xl px-4 py-4 text-center text-sm focus:ring-primary focus:border-primary ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-800'}`}
            />
            <button className="w-full py-4 bg-primary text-black font-bold rounded-xl shadow-lg hover:shadow-neon-gold transition-all">
              Ingresar
            </button>
            {error && <p className="text-red-500 text-xs font-bold uppercase mt-2">Contraseña Incorrecta</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Panel de Gestión Docente</h2>
        <div className="flex gap-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center border border-gray-700">
            <span className="material-icons-round mr-2 text-sm">download</span> Reportes
          </button>
          <button className="bg-primary text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center">
            <span className="material-icons-round mr-2 text-sm">add</span> Nueva Actividad
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Alumnos Activos', val: '142', icon: 'groups', col: 'blue' },
          { label: 'Entregas Pendientes', val: '28', icon: 'pending_actions', col: 'yellow' },
          { label: 'TPs Entregados Hoy', val: '12', icon: 'today', col: 'red' },
          { label: 'Promedio General', val: '7.8', icon: 'bar_chart', col: 'emerald' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#111827] p-6 rounded-xl border border-gray-800 flex items-center justify-between shadow-lg">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white mt-1">{stat.val}</h3>
            </div>
            <div className={`p-3 bg-${stat.col}-500/10 rounded-lg`}>
              <span className={`material-icons-round text-2xl text-${stat.col === 'yellow' ? 'primary' : stat.col + '-500'}`}>{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden shadow-xl">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="font-bold text-white flex items-center gap-2">
            <span className="material-icons-round text-accent-blue">fact_check</span>
            Corrección de Entregas
          </h3>
          <input 
            type="text" 
            placeholder="Buscar alumno..."
            className="bg-gray-950 border-gray-800 rounded-lg text-xs px-4 py-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-900/50 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800">
              <tr>
                <th className="px-6 py-4">Alumno</th>
                <th className="px-6 py-4">Actividad</th>
                <th className="px-6 py-4">Entrega</th>
                <th className="px-6 py-4 text-center">Estado</th>
                <th className="px-6 py-4 text-center">Nota</th>
                <th className="px-6 py-4 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {[
                { name: 'Juan Pérez', leg: '22104', task: 'TP Revolución', file: 'ensayo.pdf', status: 'Pendiente', sCol: 'text-yellow-500', icon: 'description' },
                { name: 'Maria García', leg: '22105', task: 'TP Revolución', file: 'tp_final.docx', status: 'Calificado', sCol: 'text-green-500', icon: 'description', note: 95 },
                { name: 'Lucas Silva', leg: '22108', task: 'Video Presentación', file: 'link', status: 'Pendiente', sCol: 'text-yellow-500', icon: 'play_circle' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-200">{row.name}</div>
                    <div className="text-[10px] text-gray-500">Leg: {row.leg}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{row.task}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center text-accent-blue hover:underline text-xs">
                      <span className="material-icons-round text-sm mr-1">{row.icon}</span> {row.file}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${row.sCol === 'text-green-500' ? 'bg-green-900/20 border-green-800' : 'bg-yellow-900/20 border-yellow-800'} ${row.sCol}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-white">
                    {row.note || <input type="number" className="w-12 bg-gray-950 border-gray-800 rounded text-center text-xs p-1" />}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-white transition-colors">
                      <span className="material-icons-round">edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;

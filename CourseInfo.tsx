
import React from 'react';

const CourseInfo: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-blue-950 to-blue-900 rounded-xl p-8 border border-blue-900/50 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            <span className="text-primary">Información General</span> del Curso
          </h1>
          <p className="text-blue-200/80 max-w-3xl text-lg">
            Todo lo que necesitas saber sobre el cursado de Historia y Política de la Educación Argentina para el ciclo 2026.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-[#111827] rounded-xl border border-gray-800 p-8 border-l-4 border-l-blue-500">
            <div className="flex items-start mb-6">
              <div className="p-3 bg-blue-900/30 rounded-lg mr-4 border border-blue-800">
                <span className="material-icons-round text-blue-400">psychology</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Objetivos y Metodología</h2>
                <p className="text-sm text-gray-500 mt-1">Enfoque pedagógico y didáctico</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                El curso propone un análisis crítico de los procesos históricos que han configurado el sistema educativo argentino. 
                Se trabajará mediante el <strong>análisis de fuentes primarias</strong>, debates síncronos y asíncronos.
              </p>
              <ul className="list-disc pl-5 space-y-3 marker:text-primary">
                <li>Comprender la evolución de las políticas públicas educativas nacionales.</li>
                <li>Identificar los actores sociales y políticos claves de cada periodo histórico.</li>
                <li>Relacionar los contextos históricos con las prácticas pedagógicas contemporáneas.</li>
              </ul>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['2 Parciales', 'Trabajo Final', 'Participación'].map((tag) => (
                <div key={tag} className="px-4 py-2 bg-gray-900 rounded border border-gray-800 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {tag}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#111827] rounded-xl border border-gray-800 p-8 border-l-4 border-l-primary">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-900/20 rounded-lg mr-4 border border-yellow-800/30">
                  <span className="material-icons-round text-primary">calendar_month</span>
                </div>
                <h2 className="text-xl font-bold text-white">Calendario Académico 2026</h2>
              </div>
              <button className="text-[10px] font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest">Descargar PDF</button>
            </div>
            <div className="space-y-6">
              {[
                { m: 'Mar', d: '12', t: 'Inicio de Clases', s: 'Introducción a la conformación del Estado Nacional.' },
                { m: 'Abr', d: '24', t: 'Primer Parcial', s: 'Modalidad Presencial obligatoria.' },
                { m: 'Jun', d: '15', t: 'Trabajo Práctico N°1', s: 'Ley 1420 y Educación Común.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-12 text-center flex-shrink-0">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase">{item.m}</span>
                    <span className="block text-2xl font-bold text-white">{item.d}</span>
                  </div>
                  <div className="ml-6 flex-1 pb-6 border-b border-gray-800/50 last:border-0">
                    <h4 className="font-bold text-gray-200">{item.t}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-[#111827] rounded-xl border border-gray-800 p-6">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-800 pb-3">Equipo Docente</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-primary flex items-center justify-center text-white font-bold shadow-lg">MM</div>
              <div>
                <p className="font-bold text-white">Lic. Maximiliano Micciullo</p>
                <p className="text-xs text-primary">Profesor Titular</p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <span className="material-icons-round text-gray-600">email</span>
                <span className="hover:text-primary cursor-pointer transition-colors">maxi.mic@hypea.edu.ar</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-icons-round text-gray-600">schedule</span>
                <span>Lun y Mié 14:00 - 18:00hs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-icons-round text-gray-600">location_on</span>
                <span>Pabellón 4 - Oficina 204</span>
              </div>
            </div>
            <button className="w-full mt-8 py-3 bg-secondary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
              Enviar Mensaje
            </button>
          </div>

          <div className="bg-gradient-to-br from-red-900/10 to-red-900/20 rounded-xl border border-red-900/30 p-6">
            <div className="flex items-center gap-3 mb-4 text-red-400">
              <span className="material-icons-round">gavel</span>
              <h3 className="font-bold text-sm uppercase tracking-widest">Reglamento</h3>
            </div>
            <ul className="text-xs text-red-100/60 space-y-3 list-disc pl-4">
              <li>Asistencia mínima del 75% a clases.</li>
              <li>Promedio mínimo de 4 (cuatro) para regularizar.</li>
              <li>Entrega puntual de TPs obligatorios.</li>
            </ul>
            <button className="mt-6 text-[10px] font-bold text-red-400 uppercase tracking-widest flex items-center hover:text-red-300">
              Ver reglamento completo <span className="material-icons-round text-[12px] ml-1">open_in_new</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;


import React from 'react';

const ResourceLibrary: React.FC = () => {
  const categories = [
    { title: 'Marco Legal Educativo', icon: 'gavel', color: 'blue', items: ['Ley 1420', 'Ley 26.206'] },
    { title: 'Biografías Clave', icon: 'history_edu', color: 'primary', items: ['Sarmiento', 'Alberdi'] },
    { title: 'Videoteca', icon: 'play_circle', color: 'red', items: ['Documentales Canal Encuentro'] },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Biblioteca de Recursos</h1>
          <p className="text-gray-500">Legislación, fuentes históricas y material multimedia.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-icons-round text-gray-500 text-sm">search</span>
            </span>
            <input 
              type="text" 
              placeholder="Buscar documentos..." 
              className="w-full md:w-64 bg-gray-900 border-gray-800 rounded-lg pl-10 text-sm text-gray-200 focus:ring-primary focus:border-primary"
            />
          </div>
          <button className="bg-primary text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-neon-gold flex items-center whitespace-nowrap">
            <span className="material-icons-round mr-2 text-sm">cloud_upload</span>
            Subir Aporte
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-[#111827] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all group shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-lg bg-${cat.color}-500/10 border border-${cat.color}-500/20`}>
                <span className={`material-icons-round text-3xl text-${cat.color === 'primary' ? 'primary' : cat.color + '-500'}`}>{cat.icon}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{cat.title.split(' ')[0]}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-6">{cat.title}</h3>
            <div className="space-y-3">
              {cat.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded bg-gray-900/50 border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
                  <span className="text-sm text-gray-400">{item}</span>
                  <span className="material-icons-round text-sm text-blue-500">download</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-lg font-bold text-white">Documentos Recientes</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-900/50 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800">
            <tr>
              <th className="px-6 py-4">Archivo</th>
              <th className="px-6 py-4">Categoría</th>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-sm">
            {[
              { name: 'Resumen_Unitarios_Federales.pdf', cat: 'Apuntes', date: '04 Ene 2026', icon: 'picture_as_pdf', color: 'text-red-500' },
              { name: 'Carta_a_Sarmiento.docx', cat: 'Fuentes', date: '02 Ene 2026', icon: 'article', color: 'text-blue-500' },
              { name: 'Mapa_Virreinato.jpg', cat: 'Mapas', date: '28 Dic 2025', icon: 'image', color: 'text-yellow-500' },
            ].map((file, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <span className={`material-icons-round ${file.color}`}>{file.icon}</span>
                  <span className="font-medium text-gray-300">{file.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-900/20 text-blue-400 border border-blue-900/30">
                    {file.cat}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{file.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary hover:underline font-bold text-xs">Descargar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceLibrary;

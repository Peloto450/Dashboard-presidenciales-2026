import React, { useState, useMemo } from 'react';
import {
  Search,
  TrendingUp,
  Shield,
  Heart,
  BookOpen,
  Zap,
  AlertTriangle,
  Globe,
  ExternalLink,
  Users,
  BarChart3,
  ArrowLeftRight,
  Info,
  User as UserIcon
} from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { DATA, SOURCES } from './data';

const COLORS = {
  peruRed: '#D91023',
  white: '#FFFFFF',
  grayBg: '#F9FAFB',
  textDark: '#111827',
  slate400: '#94A3B8',
  slate900: '#0F172A'
};

const EJE_ICONS: Record<string, React.ReactNode> = {
  "Economía": <TrendingUp size={18} />,
  "Salud": <Heart size={18} />,
  "Seguridad": <Shield size={18} />,
  "Corrupción": <AlertTriangle size={18} />,
  "Educación": <BookOpen size={18} />,
  "Infraestructura": <Zap size={18} />,
  "Medio Ambiente": <Globe size={18} />
};

const getResponsiveFontSize = (text: string, baseClass: string) => {
  if (text.length > 40) return "text-xs md:text-base";
  if (text.length > 30) return "text-sm md:text-lg";
  if (text.length > 20) return "text-base md:text-xl";
  if (text.length > 12) return "text-lg md:text-2xl";
  return baseClass;
};

const CustomSelect = ({ value, onChange, options, placeholder = "Seleccionar", align = "left" }: { value: string, onChange: (v: string) => void, options: string[], placeholder?: string, align?: "left" | "right" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-4 ${align === 'right' ? 'flex-row-reverse text-right' : 'text-left'} group transition-all`}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] bg-white flex items-center justify-center text-slate-300 border border-slate-100 shadow-inner group-hover:bg-red-600 group-hover:text-white transition-all overflow-hidden shrink-0">
          {SOURCES[value]?.logo ? (
            <img src={SOURCES[value].logo} alt={value} className="w-full h-full object-contain p-3" />
          ) : (
            <Users size={value ? 32 : 24} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-black uppercase tracking-tighter leading-tight transition-colors group-hover:text-red-600 truncate ${getResponsiveFontSize(value, "text-2xl md:text-4xl")}`}>
            {value || placeholder}
          </p>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`absolute z-50 mt-4 w-72 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden ${align === 'right' ? 'right-0' : 'left-0'}`}
            >
              <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-slate-50">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all hover:bg-red-50 group ${value === opt ? 'bg-red-50/50' : ''} ${align === 'right' ? 'flex-row-reverse text-right' : 'text-left'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 overflow-hidden border border-slate-100 ${value === opt ? 'bg-red-600 text-white' : 'text-slate-400 group-hover:bg-red-600 group-hover:text-white'}`}>
                      {SOURCES[opt]?.logo ? (
                        <img src={SOURCES[opt].logo} alt={opt} className="w-full h-full object-contain p-1.5" />
                      ) : (
                        <Users size={16} />
                      )}
                    </div>
                    <span className={`flex-1 font-bold text-xs md:text-sm uppercase tracking-wider ${value === opt ? 'text-red-700' : 'text-slate-600'}`}>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  // Resumen state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartidoResumen, setSelectedPartidoResumen] = useState('Todos');
  const [selectedEjeResumen, setSelectedEjeResumen] = useState('Todos');

  // Detalle state
  const [selectedPartidoDetalle, setSelectedPartidoDetalle] = useState('Fuerza Popular');
  const [selectedEjeDetalle, setSelectedEjeDetalle] = useState('Todos');
  const [searchTableTerm, setSearchTableTerm] = useState('');

  // Comparativa state
  const [compareA, setCompareA] = useState('Partido Morado');
  const [compareB, setCompareB] = useState('Fuerza Popular');

  const partidos = useMemo(() => Array.from(new Set(DATA.map(d => d.partido))).sort(), []);
  const ejes = useMemo(() => Array.from(new Set(DATA.map(d => d.eje))).sort(), []);

  const filteredResumen = useMemo(() => {
    return DATA.filter(item => {
      const matchesSearch =
        item.propuesta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.palabra.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPartido = selectedPartidoResumen === 'Todos' || item.partido === selectedPartidoResumen;
      const matchesEje = selectedEjeResumen === 'Todos' || item.eje === selectedEjeResumen;
      return matchesSearch && matchesPartido && matchesEje;
    });
  }, [searchTerm, selectedPartidoResumen, selectedEjeResumen]);

  const detailProposals = useMemo(() => {
    return DATA.filter(item => {
      const matchesPartido = item.partido === selectedPartidoDetalle;
      const matchesEje = selectedEjeDetalle === 'Todos' || item.eje === selectedEjeDetalle;
      const matchesSearch = item.propuesta.toLowerCase().includes(searchTableTerm.toLowerCase());
      return matchesPartido && matchesEje && matchesSearch;
    });
  }, [selectedPartidoDetalle, selectedEjeDetalle, searchTableTerm]);

  const radarData = useMemo(() => {
    return ejes.map(eje => {
      const partyCount = DATA.filter(d => d.partido === selectedPartidoDetalle && d.eje === eje).length;
      return {
        subject: eje,
        A: partyCount,
        fullMark: Math.max(...ejes.map(e => DATA.filter(d => d.partido === selectedPartidoDetalle && d.eje === e).length)) + 1
      };
    });
  }, [selectedPartidoDetalle, ejes, partidos.length]);

  const commonNavClasses = (tab: string) => `px-6 py-2 text-sm font-black rounded-full transition-all uppercase tracking-widest ${activeTab === tab ? 'bg-red-600 text-white shadow-xl shadow-red-100' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'}`;

  return (
    <div className="min-h-screen font-sans selection:bg-red-100 selection:text-red-900" style={{ backgroundColor: COLORS.grayBg, color: COLORS.textDark }}>
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-xl bg-white/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center border-b-4 border-red-800 shadow-lg">
              <span className="text-white font-black text-xl italic">P</span>
            </div>
            <div>
              <span className="font-black text-xl tracking-tighter uppercase block leading-none">Voto Informado</span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.3em]">Elecciones 2026</span>
            </div>
          </div>
          <div className="hidden md:flex gap-2 p-1.5 bg-slate-50 rounded-full border border-slate-100">
            <button onClick={() => setActiveTab('resumen')} className={commonNavClasses('resumen')}>Resumen</button>
            <button onClick={() => setActiveTab('detalle')} className={commonNavClasses('detalle')}>Detalle</button>
            <button onClick={() => setActiveTab('comparar')} className={commonNavClasses('comparar')}>Comparativa</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          {activeTab === 'resumen' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} key="resumen">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-red-600/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Base de Datos</p>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{DATA.length} <span className="text-lg text-slate-400 font-bold">Proyectos</span></h3>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-slate-900/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users size={24} />
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Participantes</p>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{partidos.length} <span className="text-lg text-slate-400 font-bold">Partidos</span></h3>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:border-red-600/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Info size={24} />
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Diversidad</p>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{ejes.length} <span className="text-lg text-slate-400 font-bold">Ejes</span></h3>
                </div>
              </div>

              <div className="bg-white p-4 rounded-[2rem] shadow-xl shadow-slate-200/50 mb-12 border border-white flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Filtrar propuestas por palabra clave..."
                    className="w-full pl-16 pr-8 py-5 bg-slate-100/50 border-none rounded-2xl focus:ring-4 focus:ring-red-600/5 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <select className="bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest outline-none appearance-none cursor-pointer hover:bg-white transition-colors" value={selectedEjeResumen} onChange={(e) => setSelectedEjeResumen(e.target.value)}>
                    <option value="Todos">Todos los Ejes</option>
                    {ejes.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                  <select className="bg-slate-50 border border-slate-100 px-6 py-5 rounded-2xl text-xs font-black uppercase tracking-widest outline-none appearance-none cursor-pointer hover:bg-white transition-colors" value={selectedPartidoResumen} onChange={(e) => setSelectedPartidoResumen(e.target.value)}>
                    <option value="Todos">Todos los Partidos</option>
                    {partidos.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResumen.map(item => (
                  <div key={item.id} className="bg-white rounded-[3rem] border border-slate-50 p-10 hover:shadow-2xl hover:shadow-red-900/5 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors border border-slate-100 overflow-hidden">
                        {SOURCES[item.partido]?.logo ? (
                          <img src={SOURCES[item.partido].logo} alt={item.partido} className="w-full h-full object-contain p-2" />
                        ) : (
                          EJE_ICONS[item.eje]
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block mb-1">{item.eje}</span>
                        <h4 className="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none">{item.partido}</h4>
                      </div>
                    </div>
                    <p className="text-slate-600 font-bold leading-relaxed mb-8 min-h-[100px] text-lg">{item.propuesta}</p>
                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[8px] font-black uppercase tracking-widest">#{item.palabra}</span>
                        <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded-full text-[8px] font-black uppercase tracking-widest">{item.enfoque}</span>
                      </div>
                      <a href={SOURCES[item.partido]?.link} target="_blank" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {activeTab === 'detalle' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} key="detalle" className="space-y-6 md:space-y-8">
              <header className="bg-red-600 p-6 md:p-12 rounded-3xl md:rounded-[3.5rem] text-white shadow-2xl relative z-20">
                <div className="absolute inset-0 rounded-3xl md:rounded-[3.5rem] overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full -mr-10 -mt-10 md:-mr-20 md:-mt-20 blur-3xl"></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic leading-tight mb-1 md:mb-2 text-white">Ficha Técnica</h2>
                    <p className="text-red-100 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">Análisis Detallado y Perfil</p>
                  </div>
                  <div className="flex gap-4 w-full md:w-auto justify-end">
                    <div className="w-full md:w-[32rem] max-w-full">
                      <CustomSelect
                        value={selectedPartidoDetalle}
                        onChange={setSelectedPartidoDetalle}
                        options={partidos}
                        align="right"
                      />
                    </div>
                  </div>
                </div>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[4rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-10">
                  <div className="relative group shrink-0">
                    {/* Contenedor Foto Candidato */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      key={`${selectedPartidoDetalle}-photo`}
                      className="w-48 h-56 rounded-[3.5rem] bg-slate-50 overflow-hidden border-4 border-white shadow-xl relative z-10"
                    >
                      {SOURCES[selectedPartidoDetalle]?.photo ? (
                        <img
                          src={SOURCES[selectedPartidoDetalle].photo}
                          alt={SOURCES[selectedPartidoDetalle]?.candidate}
                          className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100">
                          <UserIcon size={64} className="text-slate-300" />
                        </div>
                      )}
                    </motion.div>

                    {/* Burbuja Logo Partido Overlap */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      key={`${selectedPartidoDetalle}-logo`}
                      className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white shadow-2xl border-4 border-white z-20 flex items-center justify-center p-2"
                    >
                      {SOURCES[selectedPartidoDetalle]?.logo ? (
                        <img src={SOURCES[selectedPartidoDetalle].logo} alt={selectedPartidoDetalle} className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-full h-full bg-red-50 rounded-full" />
                      )}
                    </motion.div>
                  </div>

                  <div className="space-y-4 md:space-y-6 text-center md:text-left flex-1">
                    <div>
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] block mb-2">CANDIDATO PRESIDENCIAL</span>
                      <h3 className={`font-black text-slate-900 tracking-tighter leading-tight uppercase font-serif italic ${getResponsiveFontSize(SOURCES[selectedPartidoDetalle]?.candidate || "Candidato", "text-2xl md:text-4xl")}`}>
                        {SOURCES[selectedPartidoDetalle]?.candidate || "Candidato 2026"}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Propuestas</p>
                        <p className="text-xl md:text-2xl font-black text-slate-900">{DATA.filter(d => d.partido === selectedPartidoDetalle).length}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Eje Prioritario</p>
                        <p className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                          {(() => {
                            const counts = ejes.map(e => ({ eje: e, count: DATA.filter(d => d.partido === selectedPartidoDetalle && d.eje === e).length }));
                            return counts.sort((a, b) => b.count - a.count)[0].eje;
                          })()}
                        </p>
                      </div>
                    </div>
                    <a href={SOURCES[selectedPartidoDetalle]?.link} target="_blank" className="inline-flex items-center gap-2 text-xs font-black text-red-600 uppercase tracking-widest border-b-2 border-red-600/20 pb-1 hover:border-red-600 transition-all">
                      Ver Plan Completo (PDF) <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 text-center">Fuerza Programática por Eje</h4>
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#E2E8F0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 900 }} />
                        <Radar
                          name={selectedPartidoDetalle}
                          dataKey="A"
                          stroke="#D91023"
                          fill="#D91023"
                          fillOpacity={0.4}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[3.5rem] border border-slate-100 overflow-hidden shadow-sm">
                <div className="p-10 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Data Table (Propuestas)</h3>
                  <div className="flex gap-4">
                    <select className="bg-slate-50 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none border border-slate-100" value={selectedEjeDetalle} onChange={(e) => setSelectedEjeDetalle(e.target.value)}>
                      <option value="Todos">Ejes Temáticos</option>
                      {ejes.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                    <input
                      type="text"
                      placeholder="Buscar por palabra..."
                      className="bg-slate-50 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest outline-none border border-slate-100 w-48"
                      value={searchTableTerm}
                      onChange={(e) => setSearchTableTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/50">
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Eje Temático</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Propuesta Resumida</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Prioridad</th>
                        <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Enfoque</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {detailProposals.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                          <td className="px-10 py-6 border-l-2 border-transparent group-hover:border-red-600 transition-all">
                            <div className="flex items-center gap-3">
                              <span className="text-red-600">{EJE_ICONS[p.eje]}</span>
                              <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">{p.eje}</span>
                            </div>
                          </td>
                          <td className="px-10 py-6">
                            <p className="text-sm font-bold text-slate-600 leading-relaxed max-w-2xl">{p.propuesta}</p>
                          </td>
                          <td className="px-10 py-6 text-center">
                            <span className="w-8 h-8 rounded-lg bg-red-50 text-red-600 inline-flex items-center justify-center font-black text-sm">{p.prioridad}</span>
                          </td>
                          <td className="px-10 py-6">
                            <span className="text-[10px] font-black py-1.5 px-3 bg-slate-900 text-white rounded-lg uppercase tracking-widest">{p.enfoque}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'comparar' && (
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} key="comparar" className="space-y-12">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-50 rounded-full text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-red-100 shadow-sm">
                  <ArrowLeftRight size={12} /> Versus 2026
                </div>
                <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter italic uppercase leading-[0.9]">
                  Comparativa <span className="text-red-600">Ideológica</span>
                </h2>
                <p className="text-slate-400 font-bold text-lg leading-relaxed px-10">
                  Selecciona dos fuerzas políticas para visualizar el contraste de sus visiones país.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-11 gap-8 items-center">
                <div className="md:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-xl border border-slate-50 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent opacity-0 group-hover:opacity-5 rounded-[4rem] transition-opacity"></div>
                    <p className="text-[10px] font-black text-red-600 uppercase mb-4 tracking-[0.4em] opacity-40">OPCIÓN A</p>
                    <CustomSelect
                      value={compareA}
                      onChange={setCompareA}
                      options={partidos}
                      align="left"
                    />
                  </div>

                  <div className="bg-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-xl border border-slate-50 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-l from-red-600 to-transparent opacity-0 group-hover:opacity-5 rounded-[4rem] transition-opacity"></div>
                    <p className="text-[10px] font-black text-red-600 uppercase mb-4 tracking-[0.4em] opacity-40 text-right">OPCIÓN B</p>
                    <CustomSelect
                      value={compareB}
                      onChange={setCompareB}
                      options={partidos}
                      align="right"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {ejes.map(eje => {
                  const propsA = DATA.filter(d => d.partido === compareA && d.eje === eje);
                  const propsB = DATA.filter(d => d.partido === compareB && d.eje === eje);
                  if (propsA.length === 0 && propsB.length === 0) return null;

                  return (
                    <div key={eje} className="bg-white rounded-[4rem] overflow-hidden shadow-sm border border-slate-100 group">
                      <div className="bg-slate-900 px-16 py-8 flex items-center gap-8 group-hover:bg-slate-950 transition-colors">
                        <div className="text-red-600 bg-red-600/10 p-4 rounded-2xl shadow-inner">{EJE_ICONS[eje]}</div>
                        <div>
                          <h3 className="text-white font-black uppercase tracking-[0.6em] text-[10px] mb-1">Eje Programático</h3>
                          <span className="text-white text-3xl font-black italic tracking-tighter uppercase font-serif drop-shadow-md">{eje}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-16 hover:bg-slate-50 transition-colors relative">
                          {propsA.length > 0 ? (
                            <div className="space-y-10">
                              {propsA.map((p, idx) => (
                                <div key={idx} className="relative pl-10 border-l-4 border-red-600/10 hover:border-red-600 transition-all py-2">
                                  <p className="text-slate-800 font-black leading-relaxed text-2xl tracking-tighter mb-4 italic">"{p.propuesta}"</p>
                                  <div className="flex gap-2">
                                    <span className="text-[9px] font-black px-4 py-2 bg-white border border-slate-200 text-slate-400 rounded-full uppercase tracking-widest shadow-sm"># {p.palabra}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center py-20 opacity-10">
                              <Info size={60} className="mb-4" />
                              <p className="font-black uppercase tracking-widest text-center">Sin Propuestas</p>
                            </div>
                          )}
                        </div>
                        <div className="p-16 hover:bg-slate-50 transition-colors text-right relative">
                          {propsB.length > 0 ? (
                            <div className="space-y-10">
                              {propsB.map((p, idx) => (
                                <div key={idx} className="relative pr-10 border-r-4 border-red-600/10 hover:border-red-600 transition-all py-2">
                                  <p className="text-slate-800 font-black leading-relaxed text-2xl tracking-tighter mb-4 italic">"{p.propuesta}"</p>
                                  <div className="flex gap-2 justify-end">
                                    <span className="text-[9px] font-black px-4 py-2 bg-white border border-slate-200 text-slate-400 rounded-full uppercase tracking-widest shadow-sm"># {p.palabra}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center py-20 opacity-10">
                              <Info size={60} className="mb-4" />
                              <p className="font-black uppercase tracking-widest text-center">Sin Propuestas</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-slate-900 py-32 mt-32 border-t-8 border-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
          <span className="text-[20rem] font-black text-white absolute -bottom-20 -left-20">PERU</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-12">
            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
          </div>
          <p className="text-[12px] font-black text-slate-400 uppercase tracking-[1em] mb-10">Soberanía • Transparencia • Decisión</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-10"></div>
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-loose max-w-3xl mx-auto opacity-60">
            HERRAMIENTA INDEPENDIENTE DE AUDITORÍA CIUDADANA BASADA EN PLANES DE GOBIERNO OFICIALES REGISTRADOS ANTE LA AUTORIDAD ELECTORAL.<br />
            VOTA INFORMADO. VOTA CONSCIENTE.
          </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;0,800;1,800&family=Playfair+Display:ital,wght@1,900&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }
        .font-serif { font-family: 'Playfair Display', serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { bg: #f1f1f1; }
        ::-webkit-scrollbar-thumb { bg: #D91023; border-radius: 10px; }
        select { border: none; background: transparent; }
      `}} />
    </div>
  );
}

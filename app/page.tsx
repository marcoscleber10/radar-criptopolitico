import React from 'react';
import { AlertTriangle, ShieldCheck, TrendingUp, Info } from 'lucide-react';

const RadarCripto = () => {
  const politicos = [
    { id: 1, nome: "Parlamentar A", score: -45, projeto: "Taxa Transacional (CPMF Cripto)", status: "Perigo" },
    { id: 2, nome: "Parlamentar B", score: 85, projeto: "Segregação Patrimonial", status: "Favorável" },
    { id: 3, nome: "Parlamentar C", score: 12, projeto: "Regulação de Exchanges", status: "Observação" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <header className="mb-12 border-b border-orange-500/30 pb-6">
        <h1 className="text-4xl font-bold text-orange-500">Radar CriptoPolítico 🛰️</h1>
        <p className="text-slate-400 mt-2">Monitoramento e Educação sobre a Liberdade Financeira no Congresso.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {politicos.map((p) => (
          <div key={p.id} className={`p-6 rounded-xl border-2 ${p.score < 0 ? 'border-red-500/50 bg-red-500/5' : 'border-emerald-500/50 bg-emerald-500/5'}`}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{p.nome}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${p.score < 0 ? 'bg-red-500' : 'bg-emerald-500'}`}>
                Score: {p.score}
              </span>
            </div>
            <p className="text-slate-300 text-sm mb-4 flex items-center gap-2">
              {p.score < 0 ? <AlertTriangle size={16} className="text-red-500" /> : <ShieldCheck size={16} className="text-emerald-500" />}
              {p.projeto}
            </p>
            <button className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors font-bold text-slate-950">
              Educar Parlamentar
            </button>
          </div>
        ))}
      </div>

      <section className="mt-12 p-6 bg-slate-900 rounded-2xl border border-slate-800">
        <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-orange-400">
          <Info size={20} /> Glossário Rápido
        </h3>
        <div className="grid gap-4 text-sm text-slate-400">
          <p><strong>Taxa Transacional:</strong> Imposto sobre cada movimentação. Altamente prejudicial à liquidez.</p>
          <p><strong>Segregação Patrimonial:</strong> Proteção que separa seu dinheiro do capital da exchange.</p>
        </div>
      </section>
    </div>
  );
};

export default RadarCripto;

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, ClipboardList, Shield, Euro, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">

      {/* Hero */}
      <div className="text-center pt-2 pb-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">
          Trova la tua<br />
          <span className="text-blue-600">offerta migliore</span>
        </h1>
        <p className="text-slate-500 text-sm">Confronta luce e gas. Gratis, in 2 minuti.</p>
      </div>

      {/* I 2 box di scelta */}
      <div>
        <p className="text-center text-sm text-slate-400 mb-3">Come preferisci procedere?</p>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/bolletta')}
            className="bg-blue-600 hover:bg-blue-500 rounded-2xl p-6 flex flex-col items-center text-center transition-colors">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-base leading-tight mb-1">Carica<br />bolletta</span>
            <span className="text-blue-100 text-xs mb-2">Automatico e veloce</span>
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">✦ Consigliato</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/confronta?percorso=manuale')}
            className="bg-violet-600 hover:bg-violet-500 rounded-2xl p-6 flex flex-col items-center text-center transition-colors">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-base leading-tight mb-1">Compila<br />i campi</span>
            <span className="text-violet-100 text-xs">Guida passo passo</span>
          </motion.button>
        </div>
      </div>

      {/* Vantaggi */}
      <div className="card space-y-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Perché eUtenti</h3>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Gratuito e indipendente</p>
            <p className="text-xs text-slate-500">Nessun costo. Confrontiamo senza interessi di parte.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Euro className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Fino a €500 di risparmio</p>
            <p className="text-xs text-slate-500">Risparmio medio annuo delle famiglie che cambiano offerta.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-violet-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Un operatore ti segue</p>
            <p className="text-xs text-slate-500">Ti contatta entro 24 ore e attiva il contratto per te.</p>
          </div>
        </div>
      </div>

      {/* Come funziona */}
      <div className="card space-y-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Come funziona</h3>
        {[
          { n: '1', titolo: 'Carica o inserisci i dati', desc: 'Foto della bolletta o pochi campi da compilare.' },
          { n: '2', titolo: 'Vedi la tua offerta migliore', desc: 'Analizziamo i consumi e troviamo il risparmio massimo.' },
          { n: '3', titolo: 'Attivi e risparmi', desc: 'Confermi, un operatore si occupa di tutto. Zero pensieri.' },
        ].map((step, i, arr) => (
          <div key={step.n} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{step.n}</div>
              {i < arr.length - 1 && <div className="w-0.5 h-6 bg-slate-200 mt-1" />}
            </div>
            <div className="pt-0.5">
              <p className="text-sm font-semibold text-slate-800">{step.titolo}</p>
              <p className="text-xs text-slate-500">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Home

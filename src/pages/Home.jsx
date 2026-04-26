import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FileImage, ClipboardList, Shield, Euro, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-lg mx-auto px-4 py-2 space-y-4">

      {/* Hero */}
      <div className="text-center pt-1 pb-0">
        <h1 className="text-3xl font-bold text-slate-900 mb-1 leading-tight">
          Trova la tua<br />
          <span className="text-blue-600">offerta migliore</span>
        </h1>
        <p className="text-slate-500 text-base">Confronta luce e gas. Gratis, in 2 minuti.</p>
      </div>

      {/* I 2 box di scelta — identici all'originale, solo più stretti */}
      <div>
        <p className="text-center text-lg text-slate-600 mb-4">Come preferisci procedere?</p>
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            onClick={() => navigate('/bolletta')}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform py-5 px-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600" />
            <div className="relative text-white">
              <FileImage className="w-8 h-8 mx-auto mb-2" strokeWidth={1.5} />
              <h3 className="text-sm font-bold mb-0.5 leading-tight">Carica bolletta</h3>
              <p className="text-xs text-white/90 leading-tight">Automatico e veloce</p>
              <span className="inline-block mt-1.5 bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                ⚡ Consigliato
              </span>
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            onClick={() => navigate('/confronta?percorso=manuale')}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform py-5 px-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600" />
            <div className="relative text-white">
              <ClipboardList className="w-8 h-8 mx-auto mb-2" strokeWidth={1.5} />
              <h3 className="text-sm font-bold mb-0.5 leading-tight">Compila i campi</h3>
              <p className="text-xs text-white/90 leading-tight">Guida passo passo</p>
            </div>
          </motion.button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500">🔒 I tuoi dati sono al sicuro e protetti</p>
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
          <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-purple-600" />
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

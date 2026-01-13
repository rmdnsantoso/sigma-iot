'use client';

import { useState, useEffect } from 'react';

// --- DATA FITUR (SUDAH DIREVISI POIN 4) ---
const features = [
  { 
    id: 1, 
    title: "AUTOMATION CORE", 
    desc: "Eksekusi jadwal bel secara otomatis tanpa intervensi operator. Berjalan mandiri (standalone) setelah konfigurasi.", 
    icon: "⚙️", 
    color: "cyan" 
  },
  { 
    id: 2, 
    title: "INTERNET OF THINGS", 
    desc: "Terhubung ke Cloud via WiFi. Memungkinkan pemantauan status dan update jadwal jarak jauh.", 
    icon: "📡", 
    color: "blue" 
  },
  { 
    id: 3, 
    title: "NTP SYNCHRONIZATION", 
    desc: "Waktu sistem melakukan sinkronisasi otomatis ke NTP Server global. Akurasi waktu atomik.", 
    icon: "⏱️", 
    color: "purple" 
  },
  { 
    id: 4, 
    title: "MOBILE APP CONTROL", // <-- JUDUL BARU
    desc: "Konfigurasi jadwal praktis melalui Aplikasi Android di Smartphone. User-friendly dan aman.", // <-- DESKRIPSI BARU
    icon: "📱", // <-- ICON BARU (HP)
    color: "orange" 
  }
];

export default function Home() {
  // STATE UNTUK MOUSE SPOTLIGHT
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // STATE UNTUK EASTER EGG (REBOOT)
  const [isRebooting, setIsRebooting] = useState(false);
  const [terminalText, setTerminalText] = useState("");

  // Efek Mengikuti Mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Logika Easter Egg (Klik Judul)
  const triggerEasterEgg = () => {
    if (isRebooting) return;
    setIsRebooting(true);
    
    // Urutan Teks Terminal ala Hacker
    const logs = [
      "SYSTEM FAILURE DETECTED...",
      "INITIATING REBOOT SEQUENCE...",
      "> CONNECTING TO ESP8266_CORE...",
      "> SYNCING NTP SERVER... SUCCESS",
      "> LAUNCHING MOBILE CONTROLLER...",
      "SYSTEM ONLINE."
    ];

    let delay = 0;
    setTerminalText("");

    logs.forEach((line, index) => {
      delay += 800;
      setTimeout(() => {
        setTerminalText(prev => prev + line + "\n");
        if (index === logs.length - 1) {
          setTimeout(() => setIsRebooting(false), 1000);
        }
      }, delay);
    });
  };

  return (
    <main className="min-h-screen relative overflow-hidden text-slate-200 selection:bg-cyan-500/30">
      
      {/* --- MOUSE SPOTLIGHT (Senter Neon) --- */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.15), transparent 80%)`
        }}
      ></div>
      
      {/* Background Grid Tetap */}
      <div className="fixed inset-0 z-[-1] bg-cyber-grid opacity-40"></div>


      {/* --- EASTER EGG OVERLAY (Layar Hitam Hacker) --- */}
      {isRebooting && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono p-10 text-green-500 text-xl md:text-2xl">
          <div className="max-w-3xl w-full">
            <pre className="whitespace-pre-wrap cursor-blink leading-relaxed">
              {terminalText}
            </pre>
          </div>
        </div>
      )}


      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-cyan-500/20 px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="text-xl font-bold font-orbitron text-cyan-400 tracking-widest">S.I.G.M.A</div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1 rounded bg-cyan-950/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          SYSTEM V.1.0 ONLINE
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-10 relative z-10">
        <div className="text-center space-y-2 max-w-5xl">
          <p className="text-cyan-500 tracking-[0.5em] text-xs font-bold uppercase mb-4">KKN TEMATIK 56 ITERA</p>
          
          {/* JUDUL INTERAKTIF (KLIK UNTUK EASTER EGG) */}
          <h1 
            onClick={triggerEasterEgg}
            className="cursor-pointer text-[5rem] md:text-[9rem] font-black leading-none font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300 hover:text-cyan-100 active:scale-95 active:animate-glitch"
            title="Click me to Reboot System!"
          >
            S.I.G.M.A
          </h1>
          
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto my-6"></div>
          <h2 className="text-xl md:text-3xl text-cyan-400 font-bold font-mono uppercase tracking-widest">(Sistem IoT Genta Mandiri Akurat)</h2>
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed">
            Inovasi teknologi manajemen waktu sekolah berbasis <span className="text-white font-bold">Edge Computing</span>. Presisi, Terjadwal, dan Terkoneksi.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* SECTION 2: FITUR (SUDAH UPDATE MOBILE APP) */}
      <section className="py-24 px-6 relative border-t border-cyan-900/30 bg-slate-900/20 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div key={item.id} className={`group relative p-8 border-l-2 border-slate-800 bg-gradient-to-br from-slate-900/0 to-slate-900/50 hover:border-${item.color}-500 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-2`}>
              <div className="text-4xl mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</div>
              <h3 className={`text-lg font-bold font-orbitron mb-3 text-${item.color}-400 group-hover:text-white`}>{item.title}</h3>
              <p className="text-slate-400 text-sm font-mono leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TECH SPECS */}
      <section className="py-32 px-6 bg-[#020617] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">SPESIFIKASI <span className="text-cyan-500">TEKNIS</span></h2>
            <p className="text-slate-400 leading-relaxed">Komponen standar industri IoT untuk durabilitas tinggi.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-6 border border-slate-800 bg-slate-900/30 hover:border-cyan-500/50 transition-colors group">
              <h4 className="text-cyan-400 font-bold mb-1">Microcontroller</h4>
              <p className="text-2xl font-bold text-white">ESP8266 (ESP-12F)</p>
              <div className="h-1 w-0 group-hover:w-full bg-cyan-500 transition-all duration-700 mt-4"></div>
            </div>
            <div className="p-6 border border-slate-800 bg-slate-900/30 hover:border-blue-500/50 transition-colors group">
              <h4 className="text-blue-400 font-bold mb-1">Actuator</h4>
              <p className="text-2xl font-bold text-white">Relay Module</p>
              <div className="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-700 mt-4"></div>
            </div>
             <div className="p-6 border border-slate-800 bg-slate-900/30 hover:border-purple-500/50 transition-colors group">
              <h4 className="text-purple-400 font-bold mb-1">Protocol</h4>
              <p className="text-2xl font-bold text-white">NTP & REST API</p>
              <div className="h-1 w-0 group-hover:w-full bg-purple-500 transition-all duration-700 mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800 bg-[#010409] text-center z-10 relative">
        <p className="font-orbitron text-xl font-bold text-slate-700">S.I.G.M.A</p>
        <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">© 2026 Program Kerja Bel Otomatis Sekolah - KKN Tematik 56</p>
        <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">INSTITUT TEKNOLOGI SUMATERA</p>
      </footer>
    </main>
  );
}
'use client';

import { useState, useEffect } from 'react';

const features = [
  { id: 1, title: "AUTOMATION CORE", desc: "Eksekusi jadwal bel secara otomatis tanpa intervensi operator. Berjalan mandiri (standalone) setelah konfigurasi.", icon: "⚙️", color: "cyan" },
  { id: 2, title: "INTERNET OF THINGS", desc: "Terhubung ke Cloud via WiFi. Memungkinkan pemantauan status dan update jadwal jarak jauh.", icon: "📡", color: "blue" },
  { id: 3, title: "NTP SYNCHRONIZATION", desc: "Waktu sistem melakukan sinkronisasi otomatis ke NTP Server global. Akurasi waktu atomik.", icon: "⏱️", color: "purple" },
  { id: 4, title: "MOBILE APP CONTROL", desc: "Konfigurasi jadwal praktis melalui Aplikasi Android di Smartphone. User-friendly dan aman.", icon: "📱", color: "orange" }
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isRebooting, setIsRebooting] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek apakah user pake HP atau Laptop
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Jalankan saat loading awal & saat layar diubah ukurannya
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const triggerEasterEgg = () => {
    if (isRebooting) return;
    setIsRebooting(true);
    
    const logs = [
      "SYSTEM FAILURE DETECTED...",
      "INITIATING REBOOT SEQUENCE...",
      "> CONNECTING TO ESP8266_CORE...",
      "> CHECKING POWER SUPPLY... STABLE (5V)",
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
      
      {/* --- BACKGROUND SYSTEM (Logic: Mobile vs Desktop) --- */}
      
      {/* 1. MOUSE SPOTLIGHT (Hanya terlihat di Desktop/Layar Lebar) */}
      <div 
        className="hidden md:block pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.15), transparent 80%)`
        }}
      ></div>

      {/* 2. AMBIENT BLOBS (Otomatis bergerak, terlihat di SEMUA device supaya tidak hampa) */}
      <div className="fixed top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-[-1] bg-cyber-grid opacity-30"></div>

      {/* EASTER EGG OVERLAY */}
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
          ONLINE
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-10 relative z-10">
        <div className="text-center space-y-2 max-w-5xl">
          <p className="text-cyan-500 tracking-[0.5em] text-xs font-bold uppercase mb-4 animate-pulse">KKN TEMATIK 56 ITERA</p>
          <h1 
            onClick={triggerEasterEgg}
            className="cursor-pointer text-[4.5rem] md:text-[9rem] font-black leading-none font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 active:text-cyan-200 transition-all duration-100"
          >
            S.I.G.M.A
          </h1>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto my-6"></div>
          <h2 className="text-lg md:text-3xl text-cyan-400 font-bold font-mono uppercase tracking-widest">(Sistem IoT Genta Mandiri Akurat)</h2>
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Inovasi teknologi manajemen waktu sekolah berbasis <span className="text-white font-bold">Edge Computing</span>. Presisi, Terjadwal, dan Terkoneksi.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 relative border-t border-cyan-900/30 bg-slate-900/20 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div key={item.id} className={`group relative p-8 border-l-2 border-slate-700/50 bg-gradient-to-br from-slate-900/40 to-slate-900/80 hover:border-${item.color}-500 transition-all duration-300 active:scale-95`}>
              <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</div>
              <h3 className={`text-lg font-bold font-orbitron mb-3 text-${item.color}-400 group-hover:text-white`}>{item.title}</h3>
              <p className="text-slate-400 text-sm font-mono leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH SPECS SECTION */}
      <section className="py-32 px-6 bg-[#020617] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
              SPESIFIKASI <span className="text-cyan-500">TEKNIS</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Dibangun dengan arsitektur hardware yang efisien dan tangguh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Spec Cards with brighter defaults for Mobile */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-cyan-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-cyan-500 text-2xl">⚡</div>
                 <span className="text-[10px] font-mono bg-cyan-900/30 px-2 py-1 rounded text-cyan-300">CORE</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Microcontroller</h4>
              <p className="text-xl font-bold text-white mb-4">ESP8266 (ESP-12F)</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                <li>• CPU: 32-bit RISC @ 80 MHz</li>
                <li>• WiFi: 2.4 GHz 802.11 b/g/n</li>
              </ul>
            </div>

            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-blue-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-blue-500 text-2xl">🔌</div>
                 <span className="text-[10px] font-mono bg-blue-900/30 px-2 py-1 rounded text-blue-300">OUTPUT</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Actuator</h4>
              <p className="text-xl font-bold text-white mb-4">Relay Module</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                <li>• Voltage: AC 250V / 10A</li>
                <li>• Isolation: Optocoupler Protection</li>
              </ul>
            </div>

            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-green-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-green-500 text-2xl">🔋</div>
                 <span className="text-[10px] font-mono bg-green-900/30 px-2 py-1 rounded text-green-300">POWER</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Power Supply</h4>
              <p className="text-xl font-bold text-white mb-4">DC 5V / 12V</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                <li>• Input: Adaptor 12V 2A</li>
                <li>• Regulator: AMS1117 (3.3V Logic)</li>
              </ul>
            </div>

            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-purple-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-purple-500 text-2xl">🌐</div>
                 <span className="text-[10px] font-mono bg-purple-900/30 px-2 py-1 rounded text-purple-300">NETWORK</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Communication</h4>
              <p className="text-xl font-bold text-white mb-4">NTP & REST API</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                <li>• Sync: NTP Pool (Stratum 1)</li>
                <li>• Latency: &lt;100ms Response</li>
              </ul>
            </div>

            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-orange-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-orange-500 text-2xl">💾</div>
                 <span className="text-[10px] font-mono bg-orange-900/30 px-2 py-1 rounded text-orange-300">SOFTWARE</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Firmware Stack</h4>
              <p className="text-xl font-bold text-white mb-4">C++ / Arduino</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                <li>• Libraries: ESP8266WiFi, NTPClient</li>
                <li>• Feature: Watchdog Timer (WDT)</li>
              </ul>
            </div>

            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-red-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-red-500 text-2xl">🛡️</div>
                 <span className="text-[10px] font-mono bg-red-900/30 px-2 py-1 rounded text-red-300">SECURITY</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">System Integrity</h4>
              <p className="text-xl font-bold text-white mb-4">Auto-Reconnect</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                <li>• WiFi Reconnect: Auto (&lt;5s)</li>
                <li>• Uptime: 99.9% Guaranteed</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800 bg-[#010409] text-center z-10 relative">
        <p className="font-orbitron text-xl font-bold text-slate-700">S.I.G.M.A</p>
        <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">©2026 Program Kerja Bel Otomatis Sekolah | KKN Tematik 56 Desa Bandarejo</p>
        <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">INSTITUT TEKNOLOGI SUMATERA</p>
      </footer>
    </main>
  );
}
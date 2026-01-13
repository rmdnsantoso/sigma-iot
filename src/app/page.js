'use client';

import { useState, useEffect } from 'react';

// DATA FITUR
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
    title: "MOBILE APP CONTROL",
    desc: "Konfigurasi jadwal praktis melalui Aplikasi Android di Smartphone. User-friendly dan aman.", 
    icon: "📱", 
    color: "orange" 
  }
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isRebooting, setIsRebooting] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);

    // --- GENERATE PARTIKEL (Agar HP Tidak Hampa) ---
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      delay: Math.random() * 5 + "s",
      duration: Math.random() * 10 + 10 + "s",
      size: Math.random() * 3 + "px"
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerEasterEgg = () => {
    if (isRebooting) return;
    setIsRebooting(true);
    
    // Haptic Feedback (Getar di HP)
    if (navigator.vibrate) navigator.vibrate(200);

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
      
      {/* --- BACKGROUND FX LAYER (PERTAHANKAN UNTUK MOBILE) --- */}
      
      {/* 1. Particles (Debu Digital) - Agar HP Ramai */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle bg-cyan-500/50 blur-[1px]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      {/* 2. Mouse Spotlight (Hanya Desktop) */}
      <div 
        className="hidden md:block pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.1), transparent 80%)`
        }}
      ></div>

      {/* 3. Ambient Blobs (Bola Cahaya Melayang - Agar HP Tidak Gelap) */}
      <div className="fixed top-0 -left-4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      
      {/* 4. Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-cyber-grid opacity-30"></div>


      {/* --- EASTER EGG OVERLAY --- */}
      {isRebooting && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono p-6 text-green-500 text-sm md:text-2xl border-4 border-red-500/50">
          <div className="max-w-3xl w-full">
            <pre className="whitespace-pre-wrap cursor-blink leading-relaxed font-bold">
              {terminalText}
            </pre>
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-cyan-500/20 px-4 md:px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="text-lg md:text-xl font-bold font-orbitron text-cyan-400 tracking-widest">S.I.G.M.A</div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1 rounded bg-cyan-950/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          ONLINE
        </div>
      </nav>

      {/* --- HERO SECTION (POSISI TENGAH + HOVER EFEK KEMBALI) --- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative z-10 -mt-16 md:-mt-20">
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <p className="text-cyan-500 tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-4 animate-pulse">KKN TEMATIK 56 ITERA</p>
          
          {/* JUDUL DENGAN HOVER EFEK */}
          <div className="relative group cursor-pointer" onClick={triggerEasterEgg}>
            <h1 
              className="text-[4rem] md:text-[9rem] font-black leading-none font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 select-none hover:scale-105 hover:text-cyan-100 active:scale-95 active:animate-glitch"
              title="Click to Reboot"
            >
              S.I.G.M.A
            </h1>
          </div>

          <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto my-8"></div>
          
          <h2 className="text-sm md:text-3xl text-cyan-400 font-bold font-mono uppercase tracking-widest px-4">
            (Sistem IoT Genta Mandiri Akurat)
          </h2>
          
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed text-xs md:text-base px-4">
            Inovasi teknologi manajemen waktu sekolah berbasis <span className="text-white font-bold">Edge Computing</span>. Presisi, Terjadwal, dan Terkoneksi.
          </p>
        </div>
        
        {/* Indikator Scroll */}
        <div className="absolute bottom-10 animate-bounce text-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 px-6 relative border-t border-cyan-900/30 bg-slate-900/20 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div key={item.id} className={`group relative p-8 border-l-2 border-slate-700/50 bg-gradient-to-br from-slate-900/40 to-slate-900/80 hover:border-${item.color}-500 transition-all duration-300 active:scale-95 active:bg-slate-800`}>
              <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</div>
              <h3 className={`text-lg font-bold font-orbitron mb-3 text-${item.color}-400 group-hover:text-white`}>{item.title}</h3>
              <p className="text-slate-400 text-sm font-mono leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECH SPECS SECTION (6 BOX) --- */}
      <section className="py-32 px-6 bg-[#020617] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
              SPESIFIKASI <span className="text-cyan-500">TEKNIS</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Dibangun dengan arsitektur hardware yang efisien dan tangguh untuk operasional 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Spec 1 */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-cyan-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-cyan-500 text-2xl">⚡</div>
                 <span className="text-[10px] font-mono bg-cyan-900/30 px-2 py-1 rounded text-cyan-300">CORE</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Microcontroller</h4>
              <p className="text-xl font-bold text-white mb-4">ESP8266 (ESP-12F)</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4 group-hover:text-slate-400">
                <li>• CPU: 32-bit RISC @ 80 MHz</li>
                <li>• WiFi: 2.4 GHz 802.11 b/g/n</li>
                <li>• Memory: 4MB SPI Flash</li>
              </ul>
            </div>

            {/* Spec 2 */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-blue-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-blue-500 text-2xl">🔌</div>
                 <span className="text-[10px] font-mono bg-blue-900/30 px-2 py-1 rounded text-blue-300">OUTPUT</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Actuator</h4>
              <p className="text-xl font-bold text-white mb-4">Relay Module</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4 group-hover:text-slate-400">
                <li>• Voltage: AC 250V / 10A</li>
                <li>• Isolation: Optocoupler Protection</li>
                <li>• Trigger: Active LOW Signal</li>
              </ul>
            </div>

            {/* Spec 3 */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-green-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-green-500 text-2xl">🔋</div>
                 <span className="text-[10px] font-mono bg-green-900/30 px-2 py-1 rounded text-green-300">POWER</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Power Supply</h4>
              <p className="text-xl font-bold text-white mb-4">DC 5V / 12V</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4 group-hover:text-slate-400">
                <li>• Input: Adaptor 12V 2A</li>
                <li>• Regulator: AMS1117 (3.3V Logic)</li>
                <li>• Consumption: ~80mA (Standby)</li>
              </ul>
            </div>

            {/* Spec 4 */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-purple-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-purple-500 text-2xl">🌐</div>
                 <span className="text-[10px] font-mono bg-purple-900/30 px-2 py-1 rounded text-purple-300">NETWORK</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Communication</h4>
              <p className="text-xl font-bold text-white mb-4">NTP & REST API</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4 group-hover:text-slate-400">
                <li>• Sync: NTP Pool (Stratum 1)</li>
                <li>• Data Format: JSON</li>
                <li>• Latency: &lt;100ms Response</li>
              </ul>
            </div>

            {/* Spec 5 */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-orange-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-orange-500 text-2xl">💾</div>
                 <span className="text-[10px] font-mono bg-orange-900/30 px-2 py-1 rounded text-orange-300">SOFTWARE</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">Firmware Stack</h4>
              <p className="text-xl font-bold text-white mb-4">C++ / Arduino</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4 group-hover:text-slate-400">
                <li>• Framework: Arduino Core</li>
                <li>• Libraries: ESP8266WiFi, NTPClient</li>
                <li>• Feature: Watchdog Timer (WDT)</li>
              </ul>
            </div>

            {/* Spec 6 */}
            <div className="p-6 border border-slate-700/50 bg-slate-900/30 hover:border-red-500/50 transition-colors group">
              <div className="flex justify-between mb-4">
                 <div className="text-red-500 text-2xl">🛡️</div>
                 <span className="text-[10px] font-mono bg-red-900/30 px-2 py-1 rounded text-red-300">SECURITY</span>
              </div>
              <h4 className="text-slate-300 font-bold mb-1 font-mono">System Integrity</h4>
              <p className="text-xl font-bold text-white mb-4">Auto-Reconnect</p>
              <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4 group-hover:text-slate-400">
                <li>• WiFi Reconnect: Auto (&lt;5s)</li>
                <li>• OTA: Over-The-Air Update Ready</li>
                <li>• Uptime: 99.9% Guaranteed</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800 bg-[#010409] text-center z-10 relative">
        <p className="font-orbitron text-xl font-bold text-slate-700">S.I.G.M.A</p>
        <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">© 2026 Program Kerja Bel Otomatis Sekolah | KKN Tematik 56 ITERA - Desa Bandarejo</p>
        <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">INSTITUT TEKNOLOGI SUMATERA</p>
      </footer>
    </main>
  );
}
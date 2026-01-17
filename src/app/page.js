'use client';

import { useState, useEffect } from 'react';

// DATA FITUR (Tetap)
const features = [
  { id: 1, title: "JAM ANTI-RESET (RTC)", desc: "Listrik padam? Jangan khawatir. Jam di dalam alat tetap berjalan akurat berkat baterai cadangan.", icon: "🔋", borderClass: "hover:border-cyan-500", textClass: "text-cyan-400" },
  { id: 2, title: "TANPA KUOTA INTERNET", desc: "Alat bekerja mandiri 100%. Tidak butuh WiFi sekolah, tidak butuh pulsa data. Cocok untuk area susah sinyal.", icon: "📡", borderClass: "hover:border-blue-500", textClass: "text-blue-400" },
  { id: 3, title: "SUARA BEL MP3", desc: "Bosan bunyi 'Tet-Tet'? Alat ini bisa memutar lagu Indonesia Raya, Murottal, atau rekaman suara Ibu Guru.", icon: "🎵", borderClass: "hover:border-purple-500", textClass: "text-purple-400" },
  { id: 4, title: "SETTING LEWAT HP", desc: "Cukup sambungkan HP ke WiFi alat (Sinyal Lokal), lalu atur jadwal semudah main HP. Praktis.", icon: "📱", borderClass: "hover:border-orange-500", textClass: "text-orange-400" }
];

// DATA KOMPONEN (HARDCODED CLASS WARNA - Sesuai Request Sebelumnya)
const hardwareSpecs = [
  { 
    id: 1,
    icon: "⏰", tag: "WAKTU", 
    title: "Modul RTC DS3231", sub: "Penyimpan Waktu",
    list: ["• Dilengkapi Baterai Koin (CR2032)", "• Anti-Lupa Waktu (Akurat Tinggi)", "• Tahan Perubahan Suhu"],
    tagStyle: "bg-cyan-900/30 text-cyan-400 border-cyan-500/30",
    iconStyle: "text-cyan-500",
    borderStyle: "border-cyan-500"
  },
  { 
    id: 2,
    icon: "🧠", tag: "OTAK", 
    title: "Microcontroller ESP8266", sub: "Pengendali Utama",
    list: ["• Memancarkan WiFi Sendiri (Hotspot)", "• Hemat Daya Listrik", "• Menghubungkan Alat ke HP"],
    tagStyle: "bg-blue-900/30 text-blue-400 border-blue-500/30",
    iconStyle: "text-blue-500",
    borderStyle: "border-blue-500"
  },
  { 
    id: 3,
    icon: "🔊", tag: "SUARA", 
    title: "DFPlayer Mini MP3", sub: "Pemutar Suara",
    list: ["• Memakai MicroSD Card", "• Format Suara MP3 Jernih", "• Bisa Ganti Lagu/Rekaman"],
    tagStyle: "bg-green-900/30 text-green-400 border-green-500/30",
    iconStyle: "text-green-500",
    borderStyle: "border-green-500"
  },
  { 
    id: 4,
    icon: "🔌", tag: "SAKLAR", 
    title: "Modul Relay 5V", sub: "Pemicu Speaker",
    list: ["• Menyalakan Amplifier Otomatis", "• Aman & Terisolasi", "• Kompatibel dengan Bel Sekolah Lama"],
    tagStyle: "bg-purple-900/30 text-purple-400 border-purple-500/30",
    iconStyle: "text-purple-500",
    borderStyle: "border-purple-500"
  },
  { 
    id: 5,
    icon: "🚀", tag: "EKSPANSI", 
    title: "Slot Hub 12", sub: "Siap Upgrade",
    list: ["• Port Siap Pakai (Future Proof)", "• Bisa Ditambah Layar Running Text", "• Tidak Perlu Ganti Mesin Utama"],
    tagStyle: "bg-orange-900/30 text-orange-400 border-orange-500/30",
    iconStyle: "text-orange-500",
    borderStyle: "border-orange-500"
  },
  { 
    id: 6,
    icon: "⚡", tag: "LISTRIK", 
    title: "Power Supply", sub: "Adaptor 5V/12V",
    list: ["• Konsumsi Listrik Sangat Kecil", "• Aman Dinyalakan 24 Jam Nonstop", "• Komponen Tahan Panas"],
    tagStyle: "bg-red-900/30 text-red-400 border-red-500/30",
    iconStyle: "text-red-500",
    borderStyle: "border-red-500"
  }
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isRebooting, setIsRebooting] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [particles, setParticles] = useState([]);
  const [systemKey, setSystemKey] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);

    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
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
    if (navigator.vibrate) navigator.vibrate(200);

    const logs = [
      "MEMULAI SISTEM SIGMA...",
      "> CEK BATERAI RTC... OK (3V)",
      "> CEK MEMORI MP3... TERBACA",
      "> MENGAKTIFKAN WIFI LOKAL...",
      "> MODUL HUB-12... SIAP (STANDBY)",
      "> ALAT SIAP DIGUNAKAN.",
      "SYSTEM ONLINE."
    ];

    let delay = 0;
    setTerminalText("");
    
    logs.forEach((line, index) => {
      delay += 800;
      setTimeout(() => {
        setTerminalText(prev => prev + line + "\n");
        if (index === logs.length - 1) {
          setTimeout(() => {
            setSystemKey(prev => prev + 1);
            setIsRebooting(false);
          }, 1000);
        }
      }, delay);
    });
  };

  return (
    <main className="min-h-screen relative overflow-hidden text-slate-200 selection:bg-cyan-500/30">
      
      {/* SCANLINES & BACKGROUND FX */}
      <div className="bg-scanlines"></div>
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <div key={p.id} className="particle bg-cyan-500/50 blur-[1px]" style={{ left: p.left, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }}/>
        ))}
      </div>
      <div className="hidden md:block pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.1), transparent 80%)` }}></div>
      <div className="fixed top-0 -left-4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="fixed inset-0 z-[-1] bg-cyber-grid opacity-50"></div>

      {/* EASTER EGG OVERLAY */}
      {isRebooting && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono p-6 text-green-500 text-sm md:text-2xl border-4 border-red-500/50">
          <div className="max-w-3xl w-full">
            <pre className="whitespace-pre-wrap cursor-blink leading-relaxed font-bold">{terminalText}</pre>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div key={systemKey} className="relative z-10">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 glass-panel border-b border-cyan-500/20 px-4 md:px-6 py-4 flex justify-between items-center backdrop-blur-md animate-fade-in">
          <div className="text-lg md:text-xl font-bold font-orbitron text-cyan-400 tracking-widest">S.I.G.M.A</div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1 rounded bg-cyan-950/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            ONLINE MODE
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-32 md:pt-0 md:pb-0 relative">
          <div className="text-center space-y-2 max-w-4xl mx-auto">
            <p className="text-cyan-500 tracking-[0.5em] text-[10px] md:text-xs font-bold uppercase mb-4 animate-pulse animate-fade-in" style={{ animationDelay: '100ms' }}>
              KKN TEMATIK 56 ITERA
            </p>
            
            <div className="relative group cursor-pointer animate-fade-in" style={{ animationDelay: '200ms' }} onClick={triggerEasterEgg}>
              <h1 className="text-[4rem] md:text-[9rem] font-black leading-none font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 select-none hover:scale-105 hover:text-cyan-100 active:scale-95 active:animate-glitch" title="Klik untuk Cek Sistem">
                S.I.G.M.A
              </h1>
            </div>

            <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto my-8 animate-fade-in" style={{ animationDelay: '300ms' }}></div>
            
            <h2 className="text-sm md:text-3xl text-cyan-400 font-bold font-mono uppercase tracking-widest px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              (Sistem IoT Genta Mandiri Akurat)
            </h2>
            
            <p className="text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed text-xs md:text-base px-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
              Bel Sekolah Otomatis yang <span className="text-white font-bold">Canggih, Awet, dan Hemat Listrik</span>. 
              Bekerja mandiri tanpa internet, pengaturan mudah cukup dari Handphone.
            </p>

            {/* --- GAMBAR PCB (HANYA INI YANG BARU) --- */}
            <div className="mt-10 md:mt-16 animate-fade-in relative z-20" style={{ animationDelay: '700ms' }}>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-cyan-500/20 blur-[60px] rounded-full -z-10"></div>
               <img
                 src="/images/pcb-sigma.png" 
                 alt="Mainboard PCB S.I.G.M.A"
                 className="w-[85%] md:w-[50%] max-w-lg mx-auto drop-shadow-[0_20px_35px_rgba(6,182,212,0.25)] animate-float-slow"
               />
            </div>
            {/* ------------------------------------- */}
          </div>
          
          <div className="absolute bottom-10 md:bottom-12 animate-bounce text-cyan-400/80 animate-fade-in z-20" style={{ animationDelay: '1200ms' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 px-6 relative border-t border-cyan-900/30 bg-slate-900/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative p-8 border-l-2 border-slate-700/50 bg-gradient-to-br from-slate-900/40 to-slate-900/80 ${item.borderClass} transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.icon}</div>
                <h3 className={`text-lg font-bold font-orbitron mb-3 ${item.textClass} group-hover:text-white`}>{item.title}</h3>
                <p className="text-slate-400 text-sm font-mono leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH SPECS SECTION */}
        <section className="py-32 px-6 bg-[#020617]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
                KOMPONEN <span className="text-cyan-500">ALAT</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                Dibangun dengan komponen pilihan yang mudah dicari dan terbukti awet untuk pemakaian jangka panjang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareSpecs.map((spec, idx) => (
                <div 
                  key={spec.id}
                  className="group relative p-6 border border-slate-800 bg-slate-900/30 hover:bg-slate-800/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`hud-corner tl ${spec.borderStyle}`}></div>
                  <div className={`hud-corner tr ${spec.borderStyle}`}></div>
                  <div className={`hud-corner bl ${spec.borderStyle}`}></div>
                  <div className={`hud-corner br ${spec.borderStyle}`}></div>

                  <div className="flex justify-between items-start mb-4">
                     <div className={`${spec.iconStyle} text-2xl`}>{spec.icon}</div>
                     <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded border uppercase tracking-widest ${spec.tagStyle}`}>
                       {spec.tag}
                     </span>
                  </div>
                  
                  <h4 className="text-slate-300 font-bold mb-1 font-mono">{spec.title}</h4>
                  <p className="text-xl font-bold text-white mb-4">{spec.sub}</p>
                  <ul className="text-xs text-slate-500 space-y-2 font-mono border-t border-slate-800 pt-4">
                    {spec.list.map((li, i) => <li key={i}>{li}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER (KEMBALI KE VERSI "SAVE" KAMU) */}
        <footer className="py-8 border-t border-slate-800 bg-[#010409] text-center relative animate-fade-in">
          <p className="font-orbitron text-xl font-bold text-slate-700">S.I.G.M.A</p>
          <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">© 2026 Program Kerja Bel Otomatis Sekolah | KKN Tematik 56 ITERA - Desa Bandarejo</p>
          <p className="text-slate-600 text-[10px] mt-2 font-mono uppercase tracking-widest">INSTITUT TEKNOLOGI SUMATERA</p>
        </footer>
      
      </div>
    </main>
  );
}
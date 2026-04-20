import React from "react";
import Alerts from "./components/Alerts";
import BlockchainLogs from "./components/BlockchainLogs";
import Telehealth from "./Telehealth";
import { ShieldCheck, Activity, Database, Stethoscope } from "lucide-react";

function App(): React.ReactElement {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #16213e 100%)'
    }}>
      {/* Premium Header */}
      <header className="text-white shadow-2xl" style={{
        background: 'linear-gradient(90deg, #0a0e14 0%, #1a2f4e 50%, #0d1b2a 100%)',
        borderBottom: '2px solid rgba(6, 182, 212, 0.2)'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
              }}>
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black" style={{
                  background: 'linear-gradient(90deg, #06b6d4 0%, #a855f7 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  IDPS Dashboard
                </h1>
                <p className="text-sm mt-2 font-medium" style={{ color: '#06b6d4' }}>Telehealth Intrusion Detection & Prevention System</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur" style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{
                background: '#10b981',
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.7)'
              }}></div>
              <span className="text-sm font-bold" style={{ color: '#10b981' }}>System Active</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Alerts Card */}
          <div className="group relative rounded-2xl p-1 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1" style={{
            background: 'rgba(239, 68, 68, 0.05)',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <div className="rounded-xl p-6 relative z-10" style={{
              background: 'rgba(20, 25, 40, 0.8)'
            }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl transition-all" style={{
                  background: 'rgba(239, 68, 68, 0.15)'
                }}>
                  <Activity className="w-6 h-6" style={{ color: '#ef4444' }} />
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full" style={{
                  color: '#ef4444',
                  background: 'rgba(239, 68, 68, 0.2)'
                }}>LIVE</span>
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'rgba(239, 68, 68, 0.7)' }}>Active Alerts</p>
              <p className="text-4xl font-black mt-2" style={{ color: '#ef4444' }}>3</p>
              <p className="text-xs mt-3" style={{ color: 'rgba(239, 68, 68, 0.5)' }}>Threats detected this session</p>
            </div>
          </div>

          {/* Blockchain Card */}
          <div className="group relative bg-gradient-to-br from-blue-600/10 to-cyan-600/5 rounded-2xl p-1 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-xl p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 rounded-xl group-hover:from-blue-600/30 group-hover:to-cyan-600/20 transition-all">
                  <Database className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-600/20 px-2 py-1 rounded-full">CHAIN</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-blue-300/70 font-semibold">Blockchain Logs</p>
              <p className="text-4xl font-black text-blue-300 mt-2">2</p>
              <p className="text-xs text-blue-200/50 mt-3">Transactions recorded</p>
            </div>
          </div>

          {/* Appointments Card */}
          <div className="group relative rounded-2xl p-1 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1" style={{
            background: 'rgba(34, 197, 94, 0.05)',
            border: '1px solid rgba(34, 197, 94, 0.2)'
          }}>
            <div className="rounded-xl p-6 relative z-10" style={{
              background: 'rgba(20, 25, 40, 0.8)'
            }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl transition-all" style={{
                  background: 'rgba(34, 197, 94, 0.15)'
                }}>
                  <Stethoscope className="w-6 h-6" style={{ color: '#22c55e' }} />
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full" style={{
                  color: '#22c55e',
                  background: 'rgba(34, 197, 94, 0.2)'
                }}>HEALTH</span>
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'rgba(34, 197, 94, 0.7)' }}>Appointments</p>
              <p className="text-4xl font-black mt-2" style={{ color: '#22c55e' }}>1</p>
              <p className="text-xs mt-3" style={{ color: 'rgba(34, 197, 94, 0.5)' }}>Scheduled sessions</p>
            </div>
          </div>

          {/* Security Score Card */}
          <div className="group relative rounded-2xl p-1 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1" style={{
            background: 'rgba(168, 85, 247, 0.05)',
            border: '1px solid rgba(168, 85, 247, 0.2)'
          }}>
            <div className="rounded-xl p-6 relative z-10" style={{
              background: 'rgba(20, 25, 40, 0.8)'
            }}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl transition-all" style={{
                  background: 'rgba(168, 85, 247, 0.15)'
                }}>
                  <ShieldCheck className="w-6 h-6" style={{ color: '#a855f7' }} />
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full" style={{
                  color: '#a855f7',
                  background: 'rgba(168, 85, 247, 0.2)'
                }}>SECURE</span>
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'rgba(168, 85, 247, 0.7)' }}>Security Score</p>
              <p className="text-4xl font-black mt-2" style={{ color: '#a855f7' }}>98%</p>
              <p className="text-xs mt-3" style={{ color: 'rgba(168, 85, 247, 0.5)' }}>System integrity excellent</p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Security Alerts */}
          <div className="group relative bg-gradient-to-br from-red-600/10 to-red-600/5 rounded-2xl p-1 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/0 transition-all duration-300" />
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur rounded-xl overflow-hidden relative z-10">
              <div className="p-6 border-b border-red-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-red-600/30 to-red-600/10 rounded-xl">
                      <Activity className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-red-300">Security Alerts</h2>
                      <p className="text-xs text-red-200/50 mt-0.5">Real-time intrusion detection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Alerts />
              </div>
            </div>
          </div>

          {/* Blockchain Audit Logs */}
          <div className="group relative bg-gradient-to-br from-blue-600/10 to-cyan-600/5 rounded-2xl p-1 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/0 transition-all duration-300" />
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur rounded-xl overflow-hidden relative z-10">
              <div className="p-6 border-b border-blue-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-blue-600/30 to-cyan-600/10 rounded-xl">
                      <Database className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-blue-300">Blockchain Audit</h2>
                      <p className="text-xs text-blue-200/50 mt-0.5">Immutable transaction records</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <BlockchainLogs />
              </div>
            </div>
          </div>

          {/* Telehealth Appointment - Full Width */}
          <div className="xl:col-span-2 group relative bg-gradient-to-br from-emerald-600/10 to-teal-600/5 rounded-2xl p-1 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/5 group-hover:to-emerald-600/0 transition-all duration-300" />
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur rounded-xl overflow-hidden relative z-10">
              <div className="p-6 border-b border-emerald-500/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-emerald-600/30 to-teal-600/10 rounded-xl">
                    <Stethoscope className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-emerald-300">Telehealth Appointment</h2>
                    <p className="text-xs text-emerald-200/50 mt-0.5">Schedule secure virtual consultations</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <Telehealth />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

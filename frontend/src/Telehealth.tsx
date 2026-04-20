import React, { useState } from "react";
import { Video, Loader2 } from "lucide-react";
import { Toaster, toast } from "sonner";

function Telehealth(): React.ReactElement {
  const [patient, setPatient] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const bookAppointment = async (): Promise<void> => {
    // Validation
    if (!patient.trim() || !doctor.trim() || !time.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/telehealth/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patient,
          doctor,
          time,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Appointment booked successfully!");
        setPatient("");
        setDoctor("");
        setTime("");
      } else {
        toast.error(data.message || "Failed to book appointment");
      }
    } catch (error) {
      toast.error("Error booking appointment. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
              <Video className="w-8 h-8 text-emerald-300" />
            </div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent mb-3">
              Schedule Appointment
            </h2>
            <p className="text-emerald-200/70 text-sm max-w-md mx-auto">
              Book a secure video consultation with your healthcare provider
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-emerald-500/20 p-8 space-y-6">
            <div className="space-y-3">
              <label className="block text-xs font-bold text-emerald-300/80 uppercase tracking-wider">
                Patient Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/30 rounded-xl text-emerald-50 placeholder-emerald-200/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 backdrop-blur"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-emerald-300/80 uppercase tracking-wider">
                Doctor Name
              </label>
              <input
                type="text"
                placeholder="Enter doctor's name"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/30 rounded-xl text-emerald-50 placeholder-emerald-200/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 backdrop-blur"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-emerald-300/80 uppercase tracking-wider">
                Appointment Time
              </label>
              <input
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 bg-slate-900/50 border border-emerald-500/30 rounded-xl text-emerald-50 placeholder-emerald-200/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 backdrop-blur"
              />
            </div>

            <button
              onClick={bookAppointment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/50 hover:shadow-xl hover:shadow-emerald-500/60 transform hover:-translate-y-0.5 uppercase tracking-wider text-sm"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Telehealth;

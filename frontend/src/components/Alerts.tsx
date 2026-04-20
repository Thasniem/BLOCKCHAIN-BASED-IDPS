import React, { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

interface Alert {
  rule: any;
  level: number | string;
  srcip: string;
}

export default function Alerts(): React.ReactElement {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5000/alerts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Alert data:", data);
        setAlerts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching alerts:", err);
        setLoading(false);
      });
  }, []);

  const getSeverityColor = (level: number | string): string => {
    const num = Number(level);

    if (num >= 12)
      return "bg-red-600/30 text-red-200 border border-red-500/50 shadow-lg shadow-red-600/20";

    if (num >= 8)
      return "bg-orange-600/30 text-orange-200 border border-orange-500/50 shadow-lg shadow-orange-600/20";

    if (num >= 5)
      return "bg-yellow-600/30 text-yellow-200 border border-yellow-500/50 shadow-lg shadow-yellow-600/20";

    return "bg-green-600/30 text-green-200 border border-green-500/50 shadow-lg shadow-green-600/20";
  };

  const getSeverityLabel = (level: number | string): string => {
    const num = Number(level);

    if (num >= 12) return "Critical";
    if (num >= 8) return "High";
    if (num >= 5) return "Medium";
    return "Low";
  };

  return (
    <div className="animate-fade-in">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-red-500/30 border-t-red-400 mb-4"></div>
          <span className="text-sm text-red-200/70">Loading alerts...</span>
        </div>
      ) : alerts.length === 0 ? (
        <div className="text-center py-16">
          <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-emerald-500/30">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-lg font-bold text-emerald-300 mb-2">
            System Secure
          </h3>
          <p className="text-emerald-200/60 text-sm">No threats detected</p>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-red-500/20 bg-gradient-to-r from-red-500/5 to-transparent">
                  <th className="px-4 py-4 text-left text-xs font-bold text-red-200/70 uppercase tracking-wider">
                    Rule
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-red-200/70 uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-red-200/70 uppercase tracking-wider">
                    Source IP
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-red-200/70 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-red-500/10">
                {alerts.map((alert, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-red-500/5 transition-all duration-150 animate-slide-up border-l-2 border-l-red-500/0 hover:border-l-red-400"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-red-100">
                        {alert.rule?.description || alert.rule || "Unknown Rule"}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold border ${getSeverityColor(
                          alert.level
                        )}`}
                      >
                        {getSeverityLabel(alert.level)}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-sm text-red-100 font-mono bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20">
                        {alert.srcip || "N/A"}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm text-red-200/70">
                      {new Date().toLocaleTimeString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

interface BlockchainLog {
  txHash: string;
  rule: string;
  timestamp: string;
}

export default function BlockchainLogs(): React.ReactElement {
  const [logs, setLogs] = useState<BlockchainLog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5000/blockchain-events")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching blockchain logs:", err);
        setLoading(false);
      });
  }, []);

  const truncateHash = (hash: string, length: number = 12): string => {
    if (!hash) return "";
    return hash.length > length ? hash.substring(0, length) + "..." : hash;
  };

  return (
    <div className="animate-fade-in">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-500/30 border-t-blue-300 mb-4"></div>
          <span className="text-sm text-blue-200/70">Loading blockchain logs...</span>
        </div>
      ) : logs.length === 0 ? (
        <div className="text-center py-16">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/5 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-blue-500/30">
            <Link2 className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-blue-300 mb-2">No Activity</h3>
          <p className="text-blue-200/60 text-sm">No blockchain transactions recorded</p>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent">
                  <th className="px-4 py-4 text-left text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Transaction Hash
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Alert Rule
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-blue-200/70 uppercase tracking-wider">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-500/10">
                {logs.map((log, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-500/5 transition-all duration-150 animate-slide-up border-l-2 border-l-blue-500/0 hover:border-l-blue-400"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
                        <span className="text-sm font-mono text-blue-100 bg-blue-500/15 px-3 py-1.5 rounded-lg border border-blue-500/20">
                          <span title={log.txHash}>{truncateHash(log.txHash)}</span>
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm font-medium text-blue-100">
                        {log.rule}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-blue-200/70 font-mono">
                      {new Date(log.timestamp).toLocaleString()}
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

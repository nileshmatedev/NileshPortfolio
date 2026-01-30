import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function TestingDashboard() {
  const [testsRun, setTestsRun] = useState(0);
  const [coverage, setCoverage] = useState(0);

  useEffect(() => {
    // Animate counters
    const testInterval = setInterval(() => {
      setTestsRun((prev) => {
        if (prev >= 143) return 143;
        return prev + 3;
      });
    }, 30);

    const coverageInterval = setInterval(() => {
      setCoverage((prev) => {
        if (prev >= 95) return 95;
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(testInterval);
      clearInterval(coverageInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="relative bg-black/60 backdrop-blur-md border border-cyan-400/30 rounded-lg p-4"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-lg blur-xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm text-white/80 flex items-center gap-2" style={{ fontWeight: 500 }}>
            <Zap className="w-4 h-4 text-cyan-400" />
            Live Testing Status
          </h3>
          <motion.div
            className="flex items-center gap-1 text-xs text-green-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            Active
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Tests Passed */}
          <div className="bg-black/40 rounded-lg p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-xs text-white/60" style={{ fontWeight: 400 }}>
                Tests Passed
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-white" style={{ fontWeight: 600 }}>
                {testsRun}
              </span>
              <span className="text-sm text-white/50" style={{ fontWeight: 400 }}>
                / 150
              </span>
            </div>
            <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-teal-400"
                initial={{ width: 0 }}
                animate={{ width: `${(testsRun / 150) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Code Coverage */}
          <div className="bg-black/40 rounded-lg p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-white/60" style={{ fontWeight: 400 }}>
                Coverage
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-white" style={{ fontWeight: 600 }}>
                {coverage}
              </span>
              <span className="text-sm text-white/50" style={{ fontWeight: 400 }}>
                %
              </span>
            </div>
            <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                initial={{ width: 0 }}
                animate={{ width: `${coverage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-3 text-xs text-center text-green-400/80"
          style={{ fontWeight: 400 }}
        >
          ✓ All systems operational
        </motion.div>
      </div>
    </motion.div>
  );
}

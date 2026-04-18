"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const EVENT = {
  subtitle: "Kembang Kempis Sport",
  venue: "Urban Sport Dome",
  date: "10 Mei 2026",
  time: "14:00 - 16:00",
  whatsappNumber: "6285812808632",
  whatsappMessage:
    "Halo KKS, saya ingin konfirmasi kehadiran untuk event 1st Anniversary KKS.",
};

const anniversaryLetters = "ANNIVERSARY".split("");

function buildWhatsAppLink(number: string, message: string) {
  const normalized = number.replace(/[^\d]/g, "");
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.7 } }}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#040816]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.16),transparent_22%),radial-gradient(circle_at_50%_35%,rgba(129,140,248,0.18),transparent_30%),linear-gradient(180deg,#050816_0%,#071230_45%,#040816_100%)]" />

      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1.25, opacity: [0, 0.85, 0] }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35"
      />
      <motion.div
        initial={{ scale: 0.25, opacity: 0 }}
        animate={{ scale: 1.7, opacity: [0, 0.45, 0] }}
        transition={{ duration: 1.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/28"
      />
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 2.15, opacity: [0, 0.16, 0] }}
        transition={{ duration: 2.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      {Array.from({ length: 24 }).map((_, index) => {
        const angle = (index / 24) * Math.PI * 2;
        const distance = 220 + (index % 4) * 24;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.25, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.25, 1, 0.65],
              x,
              y,
            }}
            transition={{
              duration: 1.35,
              delay: 0.55 + index * 0.028,
              ease: "easeOut",
            }}
            className={`absolute left-1/2 top-1/2 rounded-full ${index % 3 === 0 ? "bg-cyan-300" : index % 3 === 1 ? "bg-fuchsia-300" : "bg-violet-300"} shadow-[0_0_18px_rgba(255,255,255,0.45)]`}
            style={{ width: index % 2 === 0 ? 8 : 6, height: index % 2 === 0 ? 8 : 6 }}
          />
        );
      })}

      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotate: index * 45, scaleX: 0.2 }}
          animate={{ opacity: [0, 0.8, 0], scaleX: [0.2, 1, 0.4] }}
          transition={{ duration: 1.1, delay: 0.75 + index * 0.05, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 h-[2px] origin-left rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 blur-[1px]"
          style={{ width: 180, transform: `translate(-50%, -50%) rotate(${index * 45}deg)` }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 24, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-300/20 blur-3xl" />
            <Image
              src="/logo-gradient.png"
              alt="KKS Logo"
              width={180}
              height={180}
              className="relative h-36 w-36 object-contain drop-shadow-[0_0_34px_rgba(34,211,238,0.32)] sm:h-44 sm:w-44"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-7 bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-center text-lg font-semibold tracking-[0.42em] text-transparent sm:text-xl"
          >
            KKS ANNIVERSARY INVITATIONS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.3 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.9 }}
            className="mt-4 h-px w-40 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-fuchsia-400/0"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function GlowParticle({
  size,
  left,
  top,
  delay,
  duration,
  color,
}: {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  color: "cyan" | "pink" | "violet";
}) {
  const particleClass =
    color === "pink"
      ? "bg-fuchsia-300/80"
      : color === "violet"
        ? "bg-violet-300/80"
        : "bg-cyan-300/80";

  return (
    <motion.span
      className={`absolute rounded-full ${particleClass}`}
      style={{ width: size, height: size, left, top, boxShadow: "0 0 16px rgba(255,255,255,0.35)" }}
      animate={{
        opacity: [0.15, 1, 0.2],
        y: [0, -22, 0],
        scale: [0.85, 1.15, 0.85],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function AnimatedConnector() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <svg viewBox="0 0 1400 760" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="connector-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fb7185" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 285 420 C 520 420, 690 398, 840 368 S 1120 328, 1280 348"
          fill="none"
          stroke="url(#connector-gradient)"
          strokeWidth="2.3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.9, delay: 2.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ filter: "drop-shadow(0 0 9px rgba(34,211,238,0.42))" }}
        />

        <motion.circle
          cx="912"
          cy="355"
          r="4"
          fill="#67e8f9"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: [0, 1, 0.65, 1], scale: [0.2, 1.1, 1, 1.1] }}
          transition={{ duration: 1.2, delay: 3.15 }}
          style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.75))" }}
        />
      </svg>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_14%,rgba(34,211,238,0.14),transparent_20%),radial-gradient(circle_at_88%_10%,rgba(244,114,182,0.14),transparent_18%),radial-gradient(circle_at_50%_24%,rgba(129,140,248,0.18),transparent_30%),linear-gradient(180deg,#06102b_0%,#0b1335_42%,#050816_100%)]" />
      <div className="absolute inset-0 opacity-15 [clip-path:polygon(0_0,20%_0,8%_14%,34%_8%,56%_0,100%_0,100%_18%,82%_14%,100%_38%,100%_100%,72%_100%,87%_82%,66%_72%,42%_100%,0_100%,0_76%,14%_86%,0_56%,0_22%)] bg-[linear-gradient(135deg,rgba(59,130,246,0.35),transparent_32%,rgba(168,85,247,0.24)_62%,rgba(244,63,94,0.24)_100%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="absolute left-[-7%] top-[28%] h-36 w-36 rounded-full bg-white/60 blur-3xl sm:h-52 sm:w-52" />
      <div className="absolute right-[-7%] top-[28%] h-36 w-36 rounded-full bg-white/60 blur-3xl sm:h-52 sm:w-52" />
      <div className="absolute left-1/2 top-[16%] h-40 w-[74%] max-w-4xl -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="absolute bottom-[5%] left-1/2 h-60 w-[90%] max-w-5xl -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    </>
  );
}

function FieldBase() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[4%] flex justify-center">
      <div className="relative h-[230px] w-[96%] max-w-6xl opacity-80 sm:h-[290px] lg:h-[340px]">
        <div className="absolute inset-0 rounded-[34px] border border-cyan-300/20" />
        <div className="absolute inset-5 rounded-[28px] border border-cyan-300/18" />
        <div className="absolute left-1/2 top-5 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-cyan-300/18" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 sm:h-24 sm:w-24 lg:h-28 lg:w-28" />
        <div className="absolute bottom-0 left-1/2 h-10 w-24 -translate-x-1/2 rounded-t-full border-x border-t border-cyan-300/20 sm:h-14 sm:w-32 lg:h-16 lg:w-36" />
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-xl transition duration-300 hover:border-white/14 hover:bg-white/[0.06] sm:px-5 sm:py-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.08),transparent_30%)] opacity-80" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
          {icon}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/42">{label}</p>
          <p className="mt-1 text-lg font-semibold leading-snug text-white/92 sm:text-xl">{value}</p>
        </div>
      </div>
    </div>
  );
}

function PremiumInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 2.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[380px] lg:max-w-[395px]"
    >
      <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-cyan-400/12 via-blue-500/6 to-fuchsia-500/12 blur-2xl" />
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/28 p-4 shadow-[0_0_46px_rgba(15,23,42,0.38)] backdrop-blur-2xl sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_24%,transparent_70%,rgba(255,255,255,0.02))]" />
        <div className="absolute left-0 top-0 h-24 w-full bg-gradient-to-r from-cyan-300/10 via-white/5 to-fuchsia-300/10 blur-2xl" />
        <div className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.95)]" />

        <div className="relative rounded-[28px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/40">
                Event Details
              </p>
              <p className="mt-2 text-sm text-white/50">Simple, premium, and ready to join.</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-300">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <InfoRow
              icon={<MapPin className="h-5 w-5" />}
              label="Location"
              value={EVENT.venue}
            />
            <InfoRow
              icon={<CalendarDays className="h-5 w-5 text-fuchsia-300" />}
              label="Date & Time"
              value={`${EVENT.date} • ${EVENT.time}`}
            />
          </div>

          <div className="my-6 h-px bg-gradient-to-r from-cyan-300/0 via-white/16 to-fuchsia-400/0 sm:my-7" />

          <p className="text-center text-lg font-semibold leading-relaxed text-white/78 sm:text-[1.6rem]">
            Celebrating One Year of
            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              Passion, Unity & Football
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function MobilePosterInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 2.62, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-8 w-full max-w-md rounded-[28px] border border-white/10 bg-slate-950/26 p-4 shadow-[0_0_36px_rgba(15,23,42,0.28)] backdrop-blur-2xl lg:hidden"
    >
      <div className="rounded-[22px] border border-white/8 bg-white/[0.035] p-4">
        <div className="space-y-3.5">
          <InfoRow
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value={EVENT.venue}
          />
          <InfoRow
            icon={<CalendarDays className="h-5 w-5 text-fuchsia-300" />}
            label="Date & Time"
            value={`${EVENT.date} • ${EVENT.time}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);
  const [showRundown, setShowRundown] = useState(false);

  const whatsappLink = useMemo(
    () => buildWhatsAppLink(EVENT.whatsappNumber, EVENT.whatsappMessage),
    []
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <AnimatePresence>
        {showSplash ? <SplashScreen onDone={() => setShowSplash(false)} /> : null}
      </AnimatePresence>

      <BackgroundDecor />
      <FieldBase />
      <AnimatedConnector />

      <GlowParticle size={8} left="10%" top="18%" delay={0.4} duration={4.3} color="cyan" />
      <GlowParticle size={6} left="18%" top="34%" delay={0.8} duration={5.1} color="violet" />
      <GlowParticle size={7} left="27%" top="54%" delay={1.1} duration={4.7} color="pink" />
      <GlowParticle size={7} left="82%" top="20%" delay={0.5} duration={4.5} color="cyan" />
      <GlowParticle size={9} left="88%" top="36%" delay={0.9} duration={5.2} color="pink" />
      <GlowParticle size={6} left="74%" top="56%" delay={1.2} duration={4.8} color="violet" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-7 sm:px-7 sm:py-8 lg:px-12 lg:py-10">
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.02, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Image
            src="/logo-gradient.png"
            alt="KKS Logo"
            width={190}
            height={190}
            priority
            className="h-28 w-28 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.24)] sm:h-32 sm:w-32 lg:h-36 lg:w-36"
          />
        </motion.header>

        <section className="relative flex flex-1 items-center justify-center py-4 sm:py-6 lg:py-2">
          <div className="mx-auto hidden w-full max-w-6xl items-center gap-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.15, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.18, duration: 0.7 }}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.34em] text-white/56 backdrop-blur-md"
              >
                Your are invited
              </motion.div>

              <div className="mt-6 sm:mt-8">
                <div className="flex items-center justify-center gap-4 lg:justify-start">
                  <div className="relative leading-none">
                    <span className="bg-gradient-to-b from-cyan-300 via-blue-300 to-blue-500 bg-clip-text text-[5.4rem] font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.24)] sm:text-[7rem] lg:text-[8rem]">
                      1
                    </span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.6, x: -8 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 2.36, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute -right-8 top-4 rounded-full border border-fuchsia-300/28 bg-fuchsia-400/10 px-3 py-1 text-sm font-black italic tracking-[0.18em] text-fuchsia-100 shadow-[0_0_18px_rgba(217,70,239,0.18)] sm:-right-9 sm:top-6 sm:text-base lg:-right-10"
                    >
                      ST
                    </motion.span>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.48, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-400 bg-clip-text text-[2.2rem] font-black uppercase leading-none tracking-tight text-transparent sm:text-[3.6rem] lg:text-[4.7rem] xl:text-[5.2rem]"
                  >
                    ANNIVERSARY
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 2.72, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-1 text-[3.25rem] font-black uppercase leading-[0.92] tracking-tight sm:text-[5.2rem] lg:text-[6.15rem] xl:text-[6.85rem]"
                >
                  <span className="block bg-gradient-to-r from-white via-slate-100 to-rose-100 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.14)]">
                    KKS
                  </span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.95, duration: 0.7 }}
                className="mt-5 text-lg font-medium text-white/74 sm:text-2xl"
              >
                {EVENT.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.05, duration: 0.7 }}
                className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/58 sm:mt-6 sm:text-lg lg:mx-0"
              >
               Rayakan satu tahun penuh semangat, kebersamaan, dan euforia sepak bola yang tak terlupakan.
              </motion.p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
                <motion.a
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 3.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full border border-cyan-300/28 bg-gradient-to-r from-cyan-400/18 via-blue-500/18 to-fuchsia-500/18 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_34px_rgba(34,211,238,0.18)] backdrop-blur-md transition hover:border-cyan-200/38 hover:shadow-[0_0_46px_rgba(34,211,238,0.24)] sm:text-base"
                >
                  Konfirmasi Kehadiran via WhatsApp
                </motion.a>

                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 3.26, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowRundown(true)}
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-7 py-4 text-sm font-semibold text-white/92 shadow-[0_0_24px_rgba(255,255,255,0.06)] backdrop-blur-md transition hover:bg-white/[0.08] sm:text-base"
                >
                  Detail Acara
                </motion.button>
              </div>
            </motion.div>

            <div className="hidden lg:block">
              <PremiumInfoCard />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/28 px-5 pb-5 pt-6 shadow-[0_0_40px_rgba(15,23,42,0.32)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_32%)]" />
              <div className="absolute left-1/2 top-0 h-24 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2, duration: 0.65 }}
                  className="mx-auto inline-flex rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.34em] text-white/56 backdrop-blur-md"
                >
                  Your are invited
                </motion.div>

                <div className="mt-6">
                  <div className="flex items-end justify-center gap-3">
                    <div className="relative leading-none">
                      <span className="bg-gradient-to-b from-cyan-300 via-blue-300 to-blue-500 bg-clip-text text-[5.2rem] font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.24)]">
                        1
                      </span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.6, x: -8 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 2.36, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute -right-8 top-4 rounded-full border border-fuchsia-300/28 bg-fuchsia-400/10 px-3 py-1 text-sm font-black italic tracking-[0.18em] text-fuchsia-100 shadow-[0_0_18px_rgba(217,70,239,0.18)]"
                      >
                        ST
                      </motion.span>
                    </div>
                    <motion.h1
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.48, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-400 bg-clip-text text-[2rem] font-black uppercase leading-none tracking-tight text-transparent"
                    >
                      ANNIVERSARY
                    </motion.h1>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.7, duration: 0.8 }}
                    className="mt-1"
                  >
                    <span className="block bg-gradient-to-r from-white via-slate-100 to-rose-100 bg-clip-text text-[4.3rem] font-black uppercase leading-none tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.14)]">
                      KKS
                    </span>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.9, duration: 0.7 }}
                  className="mt-4 text-xl font-medium text-white/76"
                >
                  {EVENT.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0.4 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 3.02, duration: 0.7 }}
                  className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-fuchsia-400/0"
                />

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.08, duration: 0.7 }}
                  className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/58"
                >
                  Rayakan satu tahun penuh semangat, kebersamaan, dan euforia sepak bola yang tak terlupakan.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 3.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 rounded-[26px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl"
                >
                  <div className="space-y-3.5">
                    <InfoRow
                      icon={<MapPin className="h-5 w-5" />}
                      label="Location"
                      value={EVENT.venue}
                    />
                    <InfoRow
                      icon={<CalendarDays className="h-5 w-5 text-fuchsia-300" />}
                      label="Date & Time"
                      value={`${EVENT.date} • ${EVENT.time}`}
                    />
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.28, duration: 0.7 }}
                  className="mt-6 text-[1.45rem] font-semibold leading-snug text-white/82"
                >
                  Celebrating One Year of
                  <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                    Passion, Unity & Football
                  </span>
                </motion.p>

                <div className="mt-7 flex flex-col gap-3">
                  <motion.a
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.38, duration: 0.75 }}
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center rounded-full border border-cyan-300/28 bg-gradient-to-r from-cyan-400/18 via-blue-500/18 to-fuchsia-500/18 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_32px_rgba(34,211,238,0.18)] backdrop-blur-md"
                  >
                    Konfirmasi Kehadiran via WhatsApp
                  </motion.a>

                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.46, duration: 0.75 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowRundown(true)}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-6 py-4 text-sm font-semibold text-white/92 shadow-[0_0_24px_rgba(255,255,255,0.06)] backdrop-blur-md"
                  >
                    Detail Acara
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
          <AnimatePresence>
        {showRundown ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
            onClick={() => setShowRundown(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-[30px] border border-white/12 bg-slate-950/80 p-5 shadow-[0_0_40px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_24%)]" />
              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/42">
                      Detail Acara
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">Rundown Singkat</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowRundown(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/80 transition hover:bg-white/[0.08]"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { title: "Fun Football", delay: 0.05 },
                    { title: "Doorprize", delay: 0.12 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay, duration: 0.35 }}
                      className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 text-sm font-bold text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.14)]">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-white/50">Highlight acara anniversary KKS</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}

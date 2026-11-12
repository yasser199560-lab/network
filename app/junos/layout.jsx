import Image from 'next/image';

const sections = [
  ['setup', 'Initial setup & commits'],
  ['switching', 'VLANs & switch ports'],
  ['lag', 'LACP & aggregated Ethernet'],
  ['routing', 'IRB gateways & routing'],
  ['verification', 'Verification & troubleshooting'],
  ['recovery', 'Rollback & CLI reference'],
];

export default function JunosLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f3f6f8]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[258px] flex-col bg-[#123c43] text-white lg:flex">
        <a href="#junos-top" className="flex items-center gap-3 px-6 py-6">
          <Image src="/netops-mark.svg" width={40} height={40} alt="" aria-hidden="true" className="rounded-xl" />
          <span className="font-display text-sm font-extrabold tracking-[.14em]">NETOPS<span className="mt-1 block text-[9px] font-medium tracking-[.2em] text-teal-200">JUNOS FIELD GUIDE</span></span>
        </a>

        <div className="mx-5 mt-7 rounded-xl border border-teal-100/15 bg-white/5 px-4 py-3">
          <div className="text-[9px] font-bold tracking-[.2em] text-teal-200">JUNIPER EX</div>
          <div className="mt-1 text-xs font-semibold text-white">Switch configuration</div>
          <div className="mt-2 flex gap-1.5"><span className="rounded bg-white/10 px-2 py-1 font-mono text-[8px] text-teal-100">ELS</span><span className="rounded bg-white/10 px-2 py-1 font-mono text-[8px] text-teal-100">JUNOS CLI</span></div>
        </div>

        <div className="px-7 pb-3 pt-8 text-[9px] font-bold uppercase tracking-[.2em] text-teal-200">IN THIS GUIDE</div>
        <nav className="flex flex-col gap-1 px-3">
          {sections.map(([id, label], index) => (
            <a key={id} href={`#${id}`} className="flex items-center gap-3 rounded-lg px-4 py-3 text-xs text-teal-50 transition hover:bg-white/10 hover:text-white">
              <span className="w-5 font-mono text-[10px] text-teal-300">{String(index + 1).padStart(2, '0')}</span>{label}
            </a>
          ))}
        </nav>

        <div className="mt-auto space-y-3 border-t border-white/10 px-5 py-5">
          <div className="flex items-center gap-2 text-[9px] font-bold tracking-[.16em] text-teal-200"><span className="size-1.5 rounded-full bg-lime-300"/> SINGLE PAGE REFERENCE</div>
          <a href="/" className="block rounded-lg border border-white/15 px-4 py-3 text-xs font-semibold text-white transition hover:bg-white/10">← Cisco IOS field guide</a>
        </div>
      </aside>

      <div className="lg:pl-[258px]">{children}</div>
    </div>
  );
}

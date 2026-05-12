import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Ambient Glow Background with animation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      
      <div className="mx-auto max-w-container-max px-gutter grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit animate-fade-in-up opacity-0">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.8)]" />
            <span className="text-[10px] font-bold text-primary tracking-wider uppercase">v2.4 Released</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface leading-[1.1] animate-fade-in-up opacity-0 delay-100">
            Documentation that feels <span className="text-gradient">fast, clear,</span> and built for developers.
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed animate-fade-in-up opacity-0 delay-200">
            DevDocs helps teams create beautiful, searchable, versioned documentation with a modern developer experience and production-ready interface.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up opacity-0 delay-300">
            <Link 
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-container text-on-primary-container font-bold hover:bg-primary transition-all shadow-[0_0_20px_rgba(77,142,255,0.2)] hover:shadow-[0_0_25px_rgba(77,142,255,0.4)] border border-primary/50 hover:scale-105 active:scale-95"
            >
              Explore Docs
            </Link>
            <a 
              href="https://github.com/pskudarnov/devdocs-portal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface font-bold hover:border-primary/50 hover:bg-surface-container-high transition-all hover:scale-105 active:scale-95"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View GitHub
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-outline-variant/20 animate-fade-in-up opacity-0 delay-500">
            <span className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">Trusted by</span>
            <div className="flex gap-6 opacity-40 grayscale contrast-125">
              <span className="text-xl font-bold text-on-surface tracking-tighter italic">Vercel</span>
              <span className="text-xl font-bold text-on-surface tracking-tighter">Stripe</span>
              <span className="text-xl font-bold text-on-surface tracking-tighter">Linear</span>
            </div>
          </div>
        </div>

        {/* Hero Visual - Mock UI with floating animation */}
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-outline-variant/20 bg-surface-container overflow-hidden shadow-2xl z-10 group hidden lg:block animate-blur-in opacity-0 delay-500">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest opacity-80" />
          
          <div className="animate-float">
            {/* Mock Sidebar */}
            <div className="absolute top-0 left-0 bottom-0 w-48 border-r border-outline-variant/20 bg-surface/50 backdrop-blur-md p-6 flex flex-col gap-4">
              <div className="h-4 w-24 bg-surface-bright rounded-md mb-2" />
              <div className="h-2 w-32 bg-surface-variant rounded-full" />
              <div className="h-2 w-28 bg-surface-variant rounded-full" />
              <div className="h-2 w-20 bg-surface-variant rounded-full" />
              <div className="mt-4 h-2 w-32 bg-surface-variant/50 rounded-full" />
              <div className="h-2 w-24 bg-surface-variant/50 rounded-full" />
            </div>

            {/* Mock Content */}
            <div className="absolute top-12 left-60 right-12 bottom-12 rounded-xl border border-outline-variant/30 bg-[#0d1117] overflow-hidden shadow-2xl transform transition-transform group-hover:scale-[1.02] group-hover:-translate-y-1 duration-700">
              <div className="flex items-center px-4 py-3 border-b border-outline-variant/20 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="ml-4 text-[10px] font-mono text-outline uppercase tracking-widest">config.ts</span>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed text-on-surface-variant">
                <p><span className="text-[#ff7b72]">import</span> {"{ defineConfig }"} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@devdocs/core'</span>;</p>
                <p className="mt-4"><span className="text-[#ff7b72]">export default</span> defineConfig({"{"}</p>
                <p className="pl-4 mt-1"><span className="text-[#79c0ff]">theme</span>: <span className="text-[#a5d6ff]">'dark'</span>,</p>
                <p className="pl-4"><span className="text-[#79c0ff]">features</span>: {"{"}</p>
                <p className="pl-8"><span className="text-[#79c0ff]">search</span>: <span className="text-[#79c0ff]">true</span>,</p>
                <p className="pl-8"><span className="text-[#79c0ff]">mdx</span>: <span className="text-[#79c0ff]">true</span></p>
                <p className="pl-4">{"}"}</p>
                <p>{"}"});</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

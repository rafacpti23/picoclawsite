import React from 'react';
import { Download, Terminal as TerminalIcon, Cpu, Apple, Wind, Monitor } from 'lucide-react';
import Terminal from './Terminal';

interface HeroProps {
    setSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setSection }) => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
                <div className="particle" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
                <div className="particle" style={{ top: '40%', left: '40%', animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-slide-up">
                        <div
                            className="inline-flex items-center space-x-2 bg-brand-900/30 border border-brand-800 rounded-full px-4 py-2 cursor-pointer hover:bg-brand-900/50 transition-colors"
                            onClick={() => setSection('docs')}
                        >
                            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
                            <span className="text-brand-400 text-sm font-mono">v2.0.1 Disponível • 10MB Memory</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                            Assistente AI<br />
                            <span className="gradient-text">Ultra-Leve</span><br />
                            <span className="text-gray-400 text-3xl md:text-4xl font-light">Go-Powered</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                            Escalabilidade extrema com consumo <span className="text-brand-400 font-mono font-bold">100x menor</span>.
                            O motor PicoClaw transforma hardware modesto em um node de IA de alta performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setSection('install')}
                                className="group bg-brand-700 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-900/50 flex items-center justify-center space-x-2 border border-brand-600"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Gratuito</span>
                            </button>
                            <button
                                onClick={() => setSection('terminal')}
                                className="bg-dark-700 hover:bg-dark-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-dark-500 flex items-center justify-center space-x-2"
                            >
                                <TerminalIcon className="w-5 h-5 text-brand-500" />
                                <span>Testar Online</span>
                            </button>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-500 font-mono">
                            <div className="flex items-center space-x-2">
                                <Wind className="w-4 h-4 text-brand-500" />
                                <span>Linux</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Apple className="w-4 h-4 text-brand-500" />
                                <span>macOS</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Monitor className="w-4 h-4 text-brand-500" />
                                <span>Windows</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Cpu className="w-4 h-4 text-brand-500" />
                                <span>ARM64/RISC-V</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-float w-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-brand-800 rounded-2xl blur opacity-30"></div>
                        <Terminal />

                        {/* Floating Stats Cards */}
                        <div className="absolute -top-6 -right-6 glass-panel p-4 rounded-xl border border-brand-900/20 shadow-xl animate-pulse-slow hidden md:block">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-brand-900/50 rounded-lg flex items-center justify-center">
                                    <Cpu className="text-brand-500 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">9.4<span className="text-sm text-gray-400">MB</span></div>
                                    <div className="text-xs text-gray-500">Memória Usada</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl border border-brand-900/20 shadow-xl animate-pulse-slow hidden md:block" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-brand-900/50 rounded-lg flex items-center justify-center">
                                    <Cpu className="text-brand-500 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">0.05<span className="text-sm text-gray-400">s</span></div>
                                    <div className="text-xs text-gray-500">Latency Core</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-brand-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-brand-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

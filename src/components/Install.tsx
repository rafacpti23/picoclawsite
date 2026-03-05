import React, { useState } from 'react';
import { Apple, Monitor, Wind, Check, Copy } from 'lucide-react';

const Install: React.FC = () => {
    const [selectedOS, setSelectedOS] = useState<'linux' | 'macos' | 'windows'>('linux');
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-dark-900 min-h-screen pt-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">Instalação</h2>
                    <p className="text-gray-400">Escolha sua plataforma e comece em segundos</p>
                </div>

                <div className="glass-panel rounded-2xl p-8 border border-brand-900/20">
                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => setSelectedOS('linux')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all ${selectedOS === 'linux' ? 'bg-brand-700 text-white border-brand-600' : 'bg-dark-700 text-gray-400 border-dark-600 hover:border-brand-700'
                                }`}
                        >
                            <Wind className="w-5 h-5" />
                            <span>Linux</span>
                        </button>
                        <button
                            onClick={() => setSelectedOS('macos')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all ${selectedOS === 'macos' ? 'bg-brand-700 text-white border-brand-600' : 'bg-dark-700 text-gray-400 border-dark-600 hover:border-brand-700'
                                }`}
                        >
                            <Apple className="w-5 h-5" />
                            <span>macOS</span>
                        </button>
                        <button
                            onClick={() => setSelectedOS('windows')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all ${selectedOS === 'windows' ? 'bg-brand-700 text-white border-brand-600' : 'bg-dark-700 text-gray-400 border-dark-600 hover:border-brand-700'
                                }`}
                        >
                            <Monitor className="w-5 h-5" />
                            <span>Windows</span>
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="code-block p-6 rounded-xl relative group">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm text-gray-500">
                                    {selectedOS === 'windows' ? 'Comando PowerShell/WSL' : 'Quick Install (Linux/macOS)'}
                                </span>
                                <button
                                    onClick={() => copyToClipboard('curl -fsSL https://picoclaw.net/install.sh | bash')}
                                    className="text-brand-400 hover:text-brand-300 text-sm flex items-center"
                                >
                                    {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                                    {copied ? 'Copiado!' : 'Copiar'}
                                </button>
                            </div>
                            <code className="text-gray-300 font-mono text-sm block">
                                {selectedOS === 'windows'
                                    ? 'C:\\> powershell -Command "iwr https://picoclaw.net/install.ps1 | iex"'
                                    : selectedOS === 'macos'
                                        ? 'brew install picoclaw/tap/picoclaw'
                                        : 'curl -fsSL https://picoclaw.net/install.sh | sudo bash'}
                            </code>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="glass-panel p-6 rounded-xl border border-brand-900/20">
                                <h4 className="text-white font-bold mb-4">Requisitos Mínimos</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> 64MB RAM (512MB recomendado)</li>
                                    <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> x86_64, ARM64 ou RISC-V</li>
                                    <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> {selectedOS === 'windows' ? 'Windows 10+ (WSL2 recomendado)' : 'Linux/macOS Kernel Estável'}</li>
                                    <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Conexão internet</li>
                                </ul>
                            </div>

                            <div className="glass-panel p-6 rounded-xl border border-brand-900/20">
                                <h4 className="text-white font-bold mb-4">Após Instalação</h4>
                                <div className="space-y-2 font-mono text-sm text-gray-400">
                                    <div className="bg-dark-800 p-2 rounded">picoclaw onboard <span className="text-gray-600"># Configurar</span></div>
                                    <div className="bg-dark-800 p-2 rounded">picoclaw agent <span className="text-gray-600"># Iniciar</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Install;

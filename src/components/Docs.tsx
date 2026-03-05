import React, { useState } from 'react';
import { Book, Bug, Github, Copy, Check } from 'lucide-react';

const docsLinks = [
    { id: 'intro', label: 'Introdução' },
    { id: 'install', label: 'Instalação' },
    { id: 'config', label: 'Configuração (JSON/YAML)' },
    { id: 'adapters', label: 'Adaptadores (LLMs)' },
    { id: 'commands', label: 'Comandos CLI' },
    { id: 'cron', label: 'Automação Cron' },
    { id: 'api', label: 'API Reference' },
];

const Docs: React.FC = () => {
    const [activeDoc, setActiveDoc] = useState('intro');
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section className="py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="hidden lg:block glass-panel rounded-2xl p-6 h-fit border border-brand-900/20 sticky top-24">
                        <h3 className="text-lg font-bold mb-4 text-white">Documentação</h3>
                        <nav className="space-y-2">
                            {docsLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => setActiveDoc(link.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeDoc === link.id
                                        ? 'bg-brand-900/30 text-brand-400 border-l-2 border-brand-600'
                                        : 'text-gray-400 hover:bg-dark-700 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-8 pt-6 border-t border-dark-600">
                            <h4 className="text-sm font-semibold text-gray-300 mb-3">Recursos Rápidos</h4>
                            <div className="space-y-2">
                                <a href="#" className="flex items-center text-xs text-gray-500 hover:text-brand-400 transition-colors">
                                    <Book className="w-3 h-3 mr-2" /> Changelog
                                </a>
                                <a href="#" className="flex items-center text-xs text-gray-500 hover:text-brand-400 transition-colors">
                                    <Bug className="w-3 h-3 mr-2" /> Reportar Bug
                                </a>
                                <a href="#" className="flex items-center text-xs text-gray-500 hover:text-brand-400 transition-colors">
                                    <Github className="w-3 h-3 mr-2" /> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="glass-panel rounded-2xl p-8 border border-brand-900/20">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="bg-brand-900/50 text-brand-400 text-xs px-3 py-1 rounded-full border border-brand-800">v2.0.1</span>
                                <span className="text-gray-500 text-sm">Última atualização: 20 Fev 2026</span>
                            </div>

                            <h1 className="text-4xl font-bold mb-6 text-white">Documentação PicoClaw</h1>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Bem-vindo à documentação oficial do PicoClaw. Aqui você encontrará tudo o que precisa para
                                instalar, configurar e dominar o assistente AI mais leve do mundo.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="code-block p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-gray-500 font-mono">Instalação Rápida</span>
                                        <button
                                            className="text-xs text-brand-400 hover:text-brand-300 flex items-center"
                                            onClick={() => copyToClipboard('curl -fsSL https://picoclaw.net/install.sh | bash')}
                                        >
                                            {copied === 'curl -fsSL https://picoclaw.net/install.sh | bash' ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                                            {copied === 'curl -fsSL https://picoclaw.net/install.sh | bash' ? 'Copiado!' : 'Copiar'}
                                        </button>
                                    </div>
                                    <code className="text-sm text-gray-300 font-mono">curl -fsSL https://picoclaw.net/install.sh | bash</code>
                                </div>

                                <div className="code-block p-4 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs text-gray-500 font-mono">Iniciar Agente</span>
                                        <button
                                            className="text-xs text-brand-400 hover:text-brand-300 flex items-center"
                                            onClick={() => copyToClipboard('picoclaw agent -m "Olá, mundo!"')}
                                        >
                                            {copied === 'picoclaw agent -m "Olá, mundo!"' ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                                            {copied === 'picoclaw agent -m "Olá, mundo!"' ? 'Copiado!' : 'Copiar'}
                                        </button>
                                    </div>
                                    <code className="text-sm text-gray-300 font-mono">picoclaw agent -m "Olá, mundo!"</code>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-3 text-white">Requisitos de Sistema</h2>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Sistema: Linux, macOS, Windows (WSL2)</li>
                                        <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Arquitetura: x86_64, ARM64, RISC-V</li>
                                        <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Memória: ≥ 64MB (512MB recomendado)</li>
                                        <li className="flex items-center"><Check className="w-4 h-4 text-brand-500 mr-2" /> Go 1.21+ (para compilação)</li>
                                    </ul>
                                </div>

                                <div className="border-t border-dark-600 pt-6">
                                    <h2 className="text-2xl font-bold mb-3 text-white">Configuração de Adaptadores</h2>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        O PicoClaw suporta múltiplos provedores de forma nativa. Configure o arquivo <code className="text-brand-400">config.yaml</code> ou use o comando onboard.
                                    </p>
                                    <div className="bg-dark-800 p-4 rounded-lg font-mono text-xs text-gray-300 border border-dark-600">
                                        <pre>{`adapters:
  openai:
    key: "sk-..."
    model: "gpt-4o"
  anthropic:
    key: "x-api-..."
    model: "claude-3-5-sonnet"
  deepseek:
    key: "sk-..."
    endpoint: "https://api.deepseek.com"`}</pre>
                                    </div>
                                </div>

                                <div className="border-t border-dark-600 pt-6">
                                    <h2 className="text-2xl font-bold mb-3 text-white">Automação Cron</h2>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        O motor Cron permite agendar tarefas de IA com precisão de segundo.
                                    </p>
                                    <div className="code-block p-4 rounded-lg">
                                        <code className="text-brand-400 text-xs">/cron add "0 0 * * *" "Resuma as notícias do dia" --channel "telegram"</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Docs;

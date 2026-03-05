import React, { useState, useEffect, useRef } from 'react';

interface Line {
    type: 'command' | 'output' | 'error';
    content: string;
}

const Terminal: React.FC = () => {
    const [lines, setLines] = useState<Line[]>([
        { type: 'output', content: 'Bem-vindo ao PicoClaw Terminal v2.0.1' },
        { type: 'output', content: "Digite 'help' para ver os comandos disponíveis." },
        { type: 'output', content: 'Memória simulada: 9.4MB | Status: Online' },
    ]);
    const [input, setInput] = useState('');
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newLines: Line[] = [...lines, { type: 'command', content: input }];
        const cmd = input.toLowerCase().trim();

        if (cmd === 'help') {
            newLines.push({ type: 'output', content: 'Comandos disponíveis: help, status, clear, install, version, memory' });
        } else if (cmd === 'status') {
            newLines.push({ type: 'output', content: '● Online - Latência: 23ms - Uptime: 3d 4h' });
        } else if (cmd === 'clear') {
            setLines([]);
            setInput('');
            return;
        } else if (cmd === 'install') {
            newLines.push({ type: 'output', content: 'Iniciando instalação...' });
            newLines.push({ type: 'output', content: '✓ Arquitetura detectada: x86_64' });
            newLines.push({ type: 'output', content: '✓ Download concluído' });
            newLines.push({ type: 'output', content: '✓ Pronto para usar: picoclaw onboard' });
        } else if (cmd === 'version') {
            newLines.push({ type: 'output', content: 'picoclaw v2.0.1 (stable)' });
        } else if (cmd === 'memory') {
            newLines.push({ type: 'output', content: 'Uso de Memória: 9.4MB RAM' });
        } else {
            newLines.push({ type: 'error', content: `Comando não encontrado: ${cmd}` });
        }

        setLines(newLines);
        setInput('');
    };

    return (
        <div className="glass-panel rounded-2xl border border-brand-900/30 shadow-2xl overflow-hidden flex flex-col h-[500px]">
            <div className="bg-dark-800 px-4 py-3 flex items-center justify-between border-b border-dark-600">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">picoclaw-simulator@browser</span>
                <button onClick={() => setLines([])} className="text-xs text-gray-400 hover:text-white">
                    Limpar
                </button>
            </div>

            <div
                ref={terminalRef}
                className="bg-dark-900 p-6 font-mono text-sm flex-1 overflow-y-auto space-y-2 scrollbar-hide"
            >
                {lines.map((line, idx) => (
                    <div key={idx} className={line.type === 'error' ? 'text-red-400' : ''}>
                        {line.type === 'command' && <span className="text-green-400">$ </span>}
                        <span className={line.type === 'output' ? 'text-gray-400' : 'text-white'}>
                            {line.content}
                        </span>
                    </div>
                ))}
                <div className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">$</span>
                    <form onSubmit={handleCommand} className="flex-1">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full bg-transparent border-none outline-none text-white font-mono text-sm"
                            placeholder="Digite um comando..."
                            autoFocus
                        />
                    </form>
                    <span className="terminal-cursor"></span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;

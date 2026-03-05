import React from 'react';
import { Feather, Cpu, Bot, Clock, Brain, Shield } from 'lucide-react';

const icons = {
    Feather, Cpu, Bot, Clock, Brain, Shield
};

const features = [
    {
        title: 'Ultra-Leve',
        description: 'Menos de 10MB de uso de memória. Rode em hardware de $10 sem comprometer performance.',
        icon: 'Feather',
    },
    {
        title: 'Multi-Arquitetura',
        description: 'Suporte nativo a x86_64, ARM64 e RISC-V. Do Raspberry Pi ao servidor enterprise.',
        icon: 'Cpu',
    },
    {
        title: 'Multi-Plataforma',
        description: 'Integração com Telegram, Discord, QQ, DingTalk e mais. Um comando para conectar tudo.',
        icon: 'Bot',
    },
    {
        title: 'Automação Cron',
        description: 'Lembretes únicos, tarefas recorrentes e expressões cron padrão. Automatize seu workflow.',
        icon: 'Clock',
    },
    {
        title: 'Multi-LLM',
        description: 'Suporte a OpenRouter, Anthropic, OpenAI, DeepSeek, Groq e mais. Troque de modelo livremente.',
        icon: 'Brain',
    },
    {
        title: 'Privacidade Total',
        description: 'Processamento local. Seus dados nunca saem da sua infraestrutura. Código aberto e auditável.',
        icon: 'Shield',
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-24 relative bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Recursos <span className="gradient-text">Avançados</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Tecnologia de ponta em um pacote minimalista. Cada recurso foi otimizado para máxima performance.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => {
                        const IconComponent = icons[feature.icon as keyof typeof icons];
                        return (
                            <div
                                key={idx}
                                className="feature-card glass-panel p-8 rounded-2xl border border-brand-900/20 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-brand-700 to-brand-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-900/30">
                                    <IconComponent className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 mb-4">{feature.description}</p>
                                <div className="flex items-center text-brand-400 text-sm font-medium">
                                    <span>Saiba mais</span>
                                    <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;

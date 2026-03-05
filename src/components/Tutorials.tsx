import React, { useState, useEffect } from 'react';
import { Download, Key, MessagesSquare, Send, Calendar, Zap, Code, Cpu, ShieldCheck, Clock, Book } from 'lucide-react';
import { getTutorials } from '../lib/db';

// O banco de dados inicializa em db.ts e é consumido via useEffect abaixo

const Tutorials: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('basico');
    const [dbTutorials, setDbTutorials] = useState<any[]>([]);

    useEffect(() => {
        setDbTutorials(getTutorials());
    }, []);

    // Helper to map icons
    const getIcon = (iconName: string) => {
        const icons: any = { Download, Key, MessagesSquare, Send, Calendar, Zap, Code, Cpu, ShieldCheck, Book };
        return icons[iconName] || Book;
    };

    const filteredTutorials = dbTutorials.filter(t => {
        const levelMap: any = { 'basico': 'Iniciante', 'intermediario': 'Intermediário', 'avancado': 'Avançado' };
        return t.level === levelMap[activeTab];
    });

    return (
        <section className="py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Tutoriais <span className="gradient-text">Interativos</span></h2>
                    <p className="text-gray-400">Aprenda a dominar o PicoClaw com nossos guias passo a passo</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="glass-panel rounded-xl p-1 flex space-x-1">
                        {(['basico', 'intermediario', 'avancado'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-brand-700 text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {filteredTutorials.map((item, idx) => {
                        const IconComponent = getIcon(item.icon);
                        return (
                            <div key={idx} className="glass-panel rounded-2xl overflow-hidden border border-brand-900/20 hover:border-brand-700/50 transition-all group cursor-pointer">
                                <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative overflow-hidden">
                                    <IconComponent className="w-16 h-16 text-brand-900/30 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-brand-900/20 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className={`text-white text-xs px-2 py-1 rounded ${activeTab === 'basico' ? 'bg-green-600' : activeTab === 'intermediario' ? 'bg-yellow-600' : 'bg-red-600'
                                            }`}>
                                            {item.level}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 flex items-center">
                                            <Clock className="w-3 h-3 mr-1" /> {item.time}
                                        </span>
                                        <button className="text-brand-400 text-sm font-medium hover:text-brand-300 flex items-center">
                                            Começar →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Tutorials;

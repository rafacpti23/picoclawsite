import React from 'react';
import { PlayCircle } from 'lucide-react';

const videos = [
    { title: 'Introdução ao PicoClaw', desc: 'Visão geral completa da plataforma', time: '12:34' },
    { title: 'Bot Telegram na Prática', desc: 'Configuração passo a passo', time: '08:45' },
    { title: 'Testes de Performance', desc: 'Comparativo com outras soluções', time: '15:20' },
];

const Videos: React.FC = () => {
    return (
        <section className="py-24 bg-dark-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Vídeos <span className="gradient-text">Tutoriais</span></h2>
                    <p className="text-gray-400">Assista às implementações em tempo real</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative rounded-2xl overflow-hidden aspect-video mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-dark-800 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-brand-500/50 group-hover:text-brand-400 group-hover:scale-110 transition-all" />
                                </div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">{video.time}</div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{video.title}</h3>
                            <p className="text-sm text-gray-500">{video.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="border border-brand-700 text-brand-400 hover:bg-brand-900/30 px-8 py-3 rounded-xl font-medium transition-all">
                        Ver Todos os Vídeos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Videos;

import React, { useState, useEffect } from 'react';
import { ChartLine, GraduationCap, Video, Book, Star, Database, Settings, ArrowLeft, ShieldAlert, Plus, Trash2, RefreshCw } from 'lucide-react';
import { getTutorials, deleteTutorial, addTutorial } from '../lib/db';

const Admin: React.FC<{ setSection: (section: string) => void; logout: () => void }> = ({ setSection, logout }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [tutorials, setTutorials] = useState<any[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setIsRefreshing(true);
        const data = getTutorials();
        setTutorials(data);
        setTimeout(() => setIsRefreshing(false), 500);
    };

    const handleDelete = (id: number) => {
        if (confirm('Tem certeza que deseja excluir este tutorial?')) {
            deleteTutorial(id);
            loadData();
        }
    };

    const handleAdd = () => {
        const title = prompt('Título do Tutorial:');
        if (title) {
            addTutorial({
                title,
                description: 'Novo tutorial adicionado via Admin',
                level: 'Básico',
                time: '10 min',
                icon: 'Book'
            });
            loadData();
        }
    };

    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: ChartLine },
        { id: 'tutorials', label: 'Tutoriais', icon: GraduationCap },
        { id: 'videos', label: 'Vídeos', icon: Video },
        { id: 'docs', label: 'Docs', icon: Book },
        { id: 'features', label: 'Recursos', icon: Star },
        { id: 'database', label: 'DB SQL', icon: Database },
        { id: 'settings', label: 'Config', icon: Settings },
    ];

    return (
        <section className="min-h-screen bg-dark-900 pt-16">
            <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-64px)]">
                {/* Sidebar Admin */}
                <div className="w-full md:w-64 bg-dark-800 border-r border-dark-600 flex-shrink-0">
                    <div className="p-6 border-b border-dark-600">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center">
                                <ShieldAlert className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">Painel Admin</div>
                                <div className="text-xs text-brand-500 font-mono">Status: Autenticado</div>
                            </div>
                        </div>
                    </div>

                    <nav className="p-4 space-y-1">
                        {sidebarItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-all ${activeTab === item.id
                                    ? 'bg-brand-900/20 border-l-4 border-brand-600 text-brand-400'
                                    : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="p-4 mt-auto border-t border-dark-600">
                        <button
                            onClick={() => setSection('home')}
                            className="w-full px-4 py-2 rounded-lg bg-dark-700 text-gray-300 hover:bg-dark-600 transition-colors text-sm flex items-center justify-center mb-2"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Site
                        </button>
                        <button
                            onClick={logout}
                            className="w-full px-4 py-2 rounded-lg bg-brand-900/20 text-brand-400 hover:bg-brand-900/40 transition-colors text-sm flex items-center justify-center border border-brand-900/30 font-bold"
                        >
                            Sair do Painel
                        </button>
                    </div>
                </div>

                {/* Admin Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {activeTab === 'dashboard' && (
                        <div className="animate-slide-up">
                            <h2 className="text-3xl font-bold mb-8 text-white">Visão Geral</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <div className="glass-panel p-6 rounded-xl border border-brand-900/20">
                                    <div className="text-gray-400 text-sm mb-1">Total de Tutoriais</div>
                                    <div className="text-3xl font-bold text-white">{tutorials.length}</div>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-brand-900/20">
                                    <div className="text-gray-400 text-sm mb-1">Vídeos</div>
                                    <div className="text-3xl font-bold text-white">3</div>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-brand-900/20">
                                    <div className="text-gray-400 text-sm mb-1">Documentos</div>
                                    <div className="text-3xl font-bold text-white">6</div>
                                </div>
                                <div className="glass-panel p-6 rounded-xl border border-brand-900/20">
                                    <div className="text-gray-400 text-sm mb-1">Database</div>
                                    <div className="text-3xl font-bold text-green-400 flex items-center">
                                        SQL <RefreshCw className={`ml-2 w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                                    </div>
                                </div>
                            </div>

                            <div className="glass-panel rounded-xl p-6 border border-brand-900/20">
                                <h3 className="text-xl font-bold mb-4 text-white">Log de Sessão</h3>
                                <div className="space-y-4 font-mono text-xs">
                                    <div className="flex items-center justify-between text-brand-400 border-b border-dark-700 pb-2">
                                        <span>[INFO] Painel Admin acessado por Rafa Martins</span>
                                        <span>Agora</span>
                                    </div>
                                    <div className="flex items-center justify-between text-gray-500 border-b border-dark-700 pb-2">
                                        <span>[DB] Banco de dados SQL.js montado em memória</span>
                                        <span>Há 2min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'tutorials' && (
                        <div className="animate-slide-up">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold text-white">Gerenciar Tutoriais</h2>
                                <button
                                    onClick={handleAdd}
                                    className="bg-brand-700 hover:bg-brand-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all active:scale-95 shadow-lg shadow-brand-900/40"
                                >
                                    <Plus className="w-4 h-4" />
                                    <span>Criar Tutorial Real</span>
                                </button>
                            </div>
                            <div className="glass-panel rounded-xl overflow-hidden border border-brand-900/20 shadow-2xl">
                                <table className="w-full text-left">
                                    <thead className="bg-dark-800 text-gray-400 text-sm border-b border-dark-600">
                                        <tr>
                                            <th className="px-6 py-4">ID</th>
                                            <th className="px-6 py-4">Título</th>
                                            <th className="px-6 py-4">Dificuldade</th>
                                            <th className="px-6 py-4 text-right">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-dark-700 text-gray-300">
                                        {tutorials.map((t) => (
                                            <tr key={t.id} className="hover:bg-brand-900/10 transition-colors group">
                                                <td className="px-6 py-4 font-mono text-xs text-gray-500">{t.id}</td>
                                                <td className="px-6 py-4 font-bold">{t.title}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.level === 'Iniciante' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                                                            t.level === 'Intermediário' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                                                                'bg-brand-500/10 text-brand-500 border border-brand-500/20'
                                                        }`}>
                                                        {t.level}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button
                                                        onClick={() => handleDelete(t.id)}
                                                        className="text-gray-600 hover:text-brand-400 transition-colors p-2 rounded-lg hover:bg-brand-900/20"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {['videos', 'docs', 'features', 'database', 'settings'].includes(activeTab) && (
                        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                            <div className="w-20 h-20 bg-dark-800 rounded-full flex items-center justify-center mb-6 border border-dark-600">
                                <Settings className="w-10 h-10 text-brand-600 animate-spin-slow" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Módulo em Integração</h3>
                            <p className="text-gray-500 max-w-sm">
                                O banco de dados SQL.js está pronto para receber estes dados. Estamos finalizando a interface para CRUD.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Admin;

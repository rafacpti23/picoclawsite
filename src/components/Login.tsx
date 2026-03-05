import React, { useState } from 'react';
import { Lock, User, ShieldCheck, AlertCircle } from 'lucide-react';

interface LoginProps {
    onLogin: (password: string) => void;
    error?: string;
}

const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-900 grid-bg px-4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
                <div className="particle" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-md animate-slide-up">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-700/20 border border-brand-600/30 mb-4">
                        <ShieldCheck className="w-8 h-8 text-brand-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Acesso Restrito</h1>
                    <p className="text-gray-500 mt-2">Painel de Controle PicoClaw BR</p>
                </div>

                <div className="glass-panel p-8 rounded-2xl border border-brand-900/30 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Usuário</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-600" />
                                </div>
                                <input
                                    type="text"
                                    disabled
                                    value="admin"
                                    className="block w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-xl text-gray-500 text-sm focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Chave de Acesso</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-600" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    autoFocus
                                    className="block w-full pl-10 pr-3 py-3 bg-dark-700 border border-brand-900/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/50 focus:border-brand-600 transition-all"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center space-x-2 text-brand-400 text-sm bg-brand-900/20 p-3 rounded-lg border border-brand-900/30">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-brand-600 rounded-xl shadow-lg text-sm font-bold text-white bg-brand-700 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all transform active:scale-[0.98]"
                        >
                            Autenticar
                        </button>
                    </form>
                </div>

                <p className="text-center mt-6 text-gray-600 text-xs">
                    Esqueceu sua chave? Entre em contato com o suporte técnico.
                </p>
            </div>
        </div>
    );
};

export default Login;

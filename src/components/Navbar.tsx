import React, { useState } from 'react';
import { Bot, Menu, X, Github, Settings } from 'lucide-react';

interface NavbarProps {
    currentSection: string;
    setSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, setSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'features', label: 'Recursos' },
        { id: 'tutorials', label: 'Tutoriais' },
        { id: 'videos', label: 'Vídeos' },
        { id: 'docs', label: 'Docs' },
        { id: 'terminal', label: 'Terminal' },
    ];

    return (
        <nav className="fixed w-full z-50 glass-panel border-b border-brand-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => setSection('home')}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg flex items-center justify-center shadow-lg shadow-brand-900/50">
                            <Bot className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">
                            Pico<span className="gradient-text">Claw</span> <span className="text-xs bg-brand-900/30 text-brand-400 px-2 py-1 rounded border border-brand-800">BR</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSection(item.id)}
                                className={`transition-colors text-sm font-medium ${currentSection === item.id ? 'text-brand-400' : 'text-gray-300 hover:text-brand-400'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setSection('admin')}
                            className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-brand-400 transition-colors"
                            title="Painel Admin"
                        >
                            <Settings className="w-4 h-4" />
                            <span className="text-sm">Admin</span>
                        </button>
                        <button
                            onClick={() => setSection('install')}
                            className="bg-brand-700 hover:bg-brand-600 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg shadow-brand-900/50 hover:shadow-brand-900/70 border border-brand-600"
                        >
                            Instalar
                        </button>
                        <button
                            className="md:hidden text-gray-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-panel border-t border-brand-900/20">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setSection(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-brand-400"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setSection('admin');
                                setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-brand-400"
                        >
                            <Settings className="inline w-4 h-4 mr-2" />
                            Painel Admin
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

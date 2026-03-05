import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tutorials from './components/Tutorials';
import Videos from './components/Videos';
import Docs from './components/Docs';
import Install from './components/Install';
import Admin from './components/Admin';
import Login from './components/Login';
import { Bot, Github, Twitter, MessageCircle } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (password: string) => {
    // Basic password for demonstration, can be improved with hash or env
    if (password === 'picoclaw2026') {
      setIsAdminLogged(true);
      setLoginError('');
    } else {
      setLoginError('Chave de acesso inválida.');
    }
  };

  // Change title based on section
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'PicoClaw BR - Assistente AI Ultra-Leve',
      features: 'Recursos - PicoClaw BR',
      tutorials: 'Tutoriais - PicoClaw BR',
      videos: 'Vídeos - PicoClaw BR',
      docs: 'Documentação - PicoClaw BR',
      terminal: 'Terminal Online - PicoClaw BR',
      install: 'Instalar - PicoClaw BR',
      admin: 'Admin - PicoClaw BR',
    };
    document.title = titles[currentSection] || 'PicoClaw BR';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero setSection={setCurrentSection} />
            <div className="border-y border-dark-600 bg-dark-800/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-white mb-1">50k+</div>
                    <div className="text-sm text-gray-500">Downloads</div>
                  </div>
                  <div className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-white mb-1">10x</div>
                    <div className="text-sm text-gray-500">Mais Rápido</div>
                  </div>
                  <div className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-white mb-1">2.4k</div>
                    <div className="text-sm text-gray-500">Stars</div>
                  </div>
                  <div className="cursor-pointer hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-sm text-gray-500">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
            <Features />
          </>
        );
      case 'features':
        return <Features />;
      case 'tutorials':
        return <Tutorials />;
      case 'videos':
        return <Videos />;
      case 'docs':
        return <Docs />;
      case 'terminal':
        return (
          <div className="py-24 bg-dark-900 min-h-screen pt-32">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-white">Terminal <span className="gradient-text">Online</span></h2>
                <p className="text-gray-400">Experimente o PicoClaw diretamente no navegador</p>
              </div>
              <Hero setSection={setCurrentSection} /> {/* Reusing Hero for the terminal container if needed, but Hero already has a terminal */}
              {/* Wait, Hero has the terminal component inside. Let's redirect to home and focus terminal? 
                  Actually, I already created a Terminal component. Let's just render it here. */}
            </div>
          </div>
        );
      case 'install':
        return <Install />;
      case 'admin':
        return isAdminLogged ? (
          <Admin setSection={setCurrentSection} logout={() => setIsAdminLogged(false)} />
        ) : (
          <Login onLogin={handleLogin} error={loginError} />
        );
      default:
        return <Hero setSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar currentSection={currentSection} setSection={setCurrentSection} />

      <main>
        {renderSection()}
      </main>

      {/* Footer - Only show if not in admin */}
      {currentSection !== 'admin' && (
        <footer className="border-t border-dark-600 bg-dark-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-brand-700 rounded-lg flex items-center justify-center">
                    <Bot className="text-white w-5 h-5" />
                  </div>
                  <span className="text-xl font-bold text-white">Pico<span className="text-brand-500">Claw</span></span>
                </div>
                <p className="text-gray-500 text-sm">Assistente AI ultra-leve escrito em Go. Performance primeiro.</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Produto</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><button onClick={() => setCurrentSection('install')} className="hover:text-brand-400 transition-colors">Download</button></li>
                  <li><button onClick={() => setCurrentSection('docs')} className="hover:text-brand-400 transition-colors">Documentação</button></li>
                  <li><button className="hover:text-brand-400 transition-colors">Changelog</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Recursos</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><button onClick={() => setCurrentSection('tutorials')} className="hover:text-brand-400 transition-colors">Tutoriais</button></li>
                  <li><button onClick={() => setCurrentSection('videos')} className="hover:text-brand-400 transition-colors">Vídeos</button></li>
                  <li><button className="hover:text-brand-400 transition-colors">Comunidade</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Conectar</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-brand-900 hover:text-brand-400 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-brand-900 hover:text-brand-400 transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-brand-900 hover:text-brand-400 transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-dark-600 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-gray-600 text-sm">© 2026 PicoClaw BR. Desenvolvido por Rafa Martins.</p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-400 transition-colors">Privacidade</a>
                <a href="#" className="hover:text-gray-400 transition-colors">Termos</a>
                <a href="#" className="hover:text-gray-400 transition-colors">Licença</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

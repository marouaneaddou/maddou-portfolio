import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, FileCode, BookOpen, MessageSquare, User, Code2, Menu, X, Building2 } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import ParticlesBackground from './components/ParticlesBackground';
import { NavItem } from './types';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string): boolean => location.pathname === path;

  const navItems: NavItem[] = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/blog', icon: BookOpen, label: 'Blog' },
    { path: '/experience', icon: Building2, label: 'Experience' },
    { path: '/projects', icon: FileCode, label: 'Projects' },
    { path: '/contact', icon: MessageSquare, label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-yellow to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-black text-xl font-bold">M</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white/10 rounded-br-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Code2 className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-none">m-addou</span>
                  <span className="text-xs text-white/70">Developer</span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8">
              <div className="flex flex-col gap-4">
                {navItems.map(({ path, icon: Icon, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-lg transition-colors ${
                      isActive(path)
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 border-b border-white/10 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-white hover:text-orange-yellow transition-colors group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-yellow to-orange-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-black text-xl font-bold">M</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white/10 rounded-br-lg backdrop-blur-sm border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-3 h-3" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">m-addou</span>
                <span className="text-xs text-white/70">Developer</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive(path)
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-white relative">
        <ParticlesBackground />
        <Navigation />
        <div className="pt-16 pb-4 px-4">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
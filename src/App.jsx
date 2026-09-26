import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Nosotros from './components/Nosotros';
import Proyectos from './components/Proyectos';
import Donar from './components/Donar';
import Participa from './components/Participa';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Nosotros />
        <Proyectos />
        <Donar />
        <Participa />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
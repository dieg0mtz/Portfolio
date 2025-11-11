import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Server, Cloud } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Diego Martínez</h1>
            <div className="flex gap-4">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">Sobre mí</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Habilidades</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Proyectos</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Hola, soy Diego Martínez</h2>
            <p className="text-xl text-slate-600 mb-6">
              Técnico Superior Universitario en Tecnologías de la Información y estudiante de Desarrollo y Gestión de Software
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Especializado en desarrollo Frontend con React y experiencia en diseño e implementación de microservicios escalables.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                Contáctame
              </a>
              <a href="#projects" className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                Ver Proyectos
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Sobre mí</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Frontend Development</h4>
              <p className="text-slate-600">
                Experto en React, creando interfaces de usuario modernas, responsivas y altamente interactivas.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <Server className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Backend & Microservicios</h4>
              <p className="text-slate-600">
                Desarrollo de arquitecturas escalables con Node.js, implementando microservicios robustos.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <Cloud className="w-12 h-12 text-orange-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Cloud Computing</h4>
              <p className="text-slate-600">
                Experiencia en AWS para despliegue y gestión de aplicaciones en la nube.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Stack Tecnológico</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Code on screen"
                className="rounded-xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Microservicios</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">REST APIs</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proyectos Destacados</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web development project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Arquitectura de Microservicios</h4>
                <p className="text-slate-600 mb-4">
                  Sistema escalable utilizando Node.js y AWS, con múltiples servicios independientes comunicándose eficientemente.
                </p>
                <div className="flex gap-2">
                  <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">AWS</span>
                  <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">Docker</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <video
                  className="w-full h-48 object-cover bg-slate-900"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://videos.pexels.com/video-files/7533347/7533347-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Aplicaciones React Modernas</h4>
                <p className="text-slate-600 mb-4">
                  Interfaces de usuario dinámicas y responsivas con React, ofreciendo experiencias fluidas y atractivas.
                </p>
                <div className="flex gap-2">
                  <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 text-center">Contacto</h3>
          <p className="text-lg text-slate-600 mb-12 text-center">
            ¿Interesado en trabajar juntos? No dudes en contactarme
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="tel:6181278683"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>
                  <p className="text-slate-900 font-medium">618-127-8683</p>
                </div>
              </a>

              <a
                href="mailto:diego.martinez@example.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-900 font-medium">diegomtzram803@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/dieg0mtz?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-slate-700 transition-colors">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="text-slate-900 font-medium flex items-center gap-1">
                    Ver repositorios
                    <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-900 font-medium flex items-center gap-1">
                    ir
                    <ExternalLink className="w-4 h-4" />
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 Diego Martínez. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:diego.martinez@example.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

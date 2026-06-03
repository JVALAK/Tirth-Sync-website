const Navbar = () => `
<nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-brand-blue border-b border-white/10 py-4 shadow-xl">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <div class="flex-shrink-0 flex items-center">
        <a href="#home" class="font-heading font-bold text-2xl tracking-tighter uppercase text-white">
          Tirth <span class="text-brand-orange">Sync</span>
        </a>
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="text-sm font-bold uppercase tracking-widest transition-colors text-brand-gray hover:text-white">Home</a>
        <a href="#about" class="text-sm font-bold uppercase tracking-widest transition-colors text-brand-gray hover:text-white">About</a>
        <a href="#services" class="text-sm font-bold uppercase tracking-widest transition-colors text-brand-gray hover:text-white">Services</a>
        <a href="#projects" class="text-sm font-bold uppercase tracking-widest transition-colors text-brand-gray hover:text-white">Projects</a>
        <a href="#industries" class="text-sm font-bold uppercase tracking-widest transition-colors text-brand-gray hover:text-white">Industries</a>
        <a href="#contact" class="text-sm font-bold uppercase tracking-widest transition-colors text-brand-gray hover:text-white">Contact</a>
        <a href="#contact" class="border border-brand-orange px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white transition-colors">
          Get a Quote
        </a>
      </div>
      <div class="md:hidden flex items-center">
        <button id="mobile-menu-btn" class="text-white">
          <i data-lucide="menu" id="menu-icon" class="w-6 h-6"></i>
          <i data-lucide="x" id="close-icon" class="w-6 h-6 hidden"></i>
        </button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="hidden md:hidden bg-brand-blue border-t border-white/10 shadow-xl absolute w-full mt-4">
    <div class="px-4 pt-2 pb-6 space-y-1">
      <a href="#home" class="mobile-link block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-gray hover:text-white hover:bg-white/5 rounded-sm">Home</a>
      <a href="#about" class="mobile-link block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-gray hover:text-white hover:bg-white/5 rounded-sm">About</a>
      <a href="#services" class="mobile-link block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-gray hover:text-white hover:bg-white/5 rounded-sm">Services</a>
      <a href="#projects" class="mobile-link block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-gray hover:text-white hover:bg-white/5 rounded-sm">Projects</a>
      <a href="#industries" class="mobile-link block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-gray hover:text-white hover:bg-white/5 rounded-sm">Industries</a>
      <a href="#contact" class="mobile-link block px-3 py-3 text-base font-bold uppercase tracking-widest text-brand-gray hover:text-white hover:bg-white/5 rounded-sm">Contact</a>
      <div class="pt-4">
        <a href="#contact" class="mobile-link block w-full text-center bg-brand-orange text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs">
          Get a Quote
        </a>
      </div>
    </div>
  </div>
</nav>
`;

const Hero = () => `
<section id="home" class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue border-b border-white/10">
  <div class="absolute inset-0 z-0">
    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Industrial Fabrication" class="w-full h-full object-cover opacity-20" />
    <div class="absolute inset-0 bg-gradient-to-r from-[#0B1221] via-[#0B1221]/90 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] to-transparent opacity-80"></div>
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#475569 1px, transparent 1px); background-size: 40px 40px;"></div>
  </div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <div class="w-full lg:w-3/5">
        <div class="flex items-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-orange"></div>
          <span class="text-xs font-bold tracking-widest text-brand-orange uppercase">Precision Engineering Solutions</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-6">
          Reliable Fabrication & <br class="hidden lg:block"/>
          <span class="text-brand-gray">Mechanical Services</span>
        </h1>
        <p class="text-lg text-brand-gray mb-10 max-w-lg leading-relaxed">
          Delivering precision fabrication, custom engineering services, and industrial job work solutions with quality, reliability, and timely execution.
        </p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#contact" class="inline-flex justify-center items-center bg-brand-orange hover:brightness-110 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-300">
            Get a Quote
          </a>
          <a href="#contact" class="inline-flex justify-center items-center bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
      <div class="w-full lg:w-2/5 flex flex-col gap-4 lg:border-l lg:border-white/5 lg:pl-12">
        <div class="p-6 bg-white/5 border border-white/10 flex items-center justify-between group hover:border-brand-orange/50 transition-colors">
          <div>
            <div class="text-4xl font-bold font-heading text-brand-orange mb-1">50+</div>
            <div class="text-xs font-bold uppercase tracking-widest text-brand-gray">Projects Completed</div>
          </div>
          <i data-lucide="factory" class="w-12 h-12 text-white/20 group-hover:text-brand-orange/50 transition-colors"></i>
        </div>
        <div class="p-6 bg-white/5 border border-white/10 flex items-center justify-between group hover:border-brand-orange/50 transition-colors">
          <div>
            <div class="text-4xl font-bold font-heading text-brand-orange mb-1">0.02mm</div>
            <div class="text-xs font-bold uppercase tracking-widest text-brand-gray">Precision Accuracy</div>
          </div>
          <i data-lucide="target" class="w-12 h-12 text-white/20 group-hover:text-brand-orange/50 transition-colors"></i>
        </div>
        <div class="p-6 bg-brand-orange/10 border border-brand-orange/30">
          <div class="text-sm italic text-white/80 leading-relaxed">
            "Specializing in fabrication, custom components, and structural solutions tailored to industrial requirements."
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const About = () => `
<section id="about" class="py-20 lg:py-28 bg-brand-blue border-b border-white/10 relative">
  <div class="absolute inset-0 bg-gradient-to-b from-[#141E33]/30 to-transparent"></div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="order-2 lg:order-1">
        <div class="grid grid-cols-2 gap-4">
          <div class="h-64 bg-slate-100 rounded-sm overflow-hidden relative group">
            <div class="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <img src="https://lh3.googleusercontent.com/d/1IkQsTzDvfCY0VxWshgfefnBadmq77rg_" alt="Industrial engineering team" class="w-full h-full object-cover" />
          </div>
          <div class="h-64 bg-slate-100 rounded-sm overflow-hidden relative group mt-8">
            <div class="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Metal fabrication welding" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="relative -mt-12 ml-4 mr-12 bg-[#141E33] border border-white/10 p-8 shadow-xl rounded-none z-20">
          <div class="text-4xl font-heading font-bold text-brand-orange mb-2">50+</div>
          <div class="text-white font-bold text-xs uppercase tracking-widest leading-loose">Projects Completed successfully</div>
        </div>
      </div>
      <div class="order-1 lg:order-2">
        <div class="flex items-center gap-3 mb-4">
          <div class="h-px w-8 bg-brand-orange"></div>
          <h4 class="text-brand-orange font-bold tracking-widest uppercase text-xs">About Tirth Sync</h4>
        </div>
        <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-white mb-6 tracking-tight">
          Precision Engineering.<br/> Reliable Fabrication.<br/> <span class="text-brand-gray">Timely Delivery.</span>
        </h2>
        <div class="text-slate-300 text-base leading-relaxed space-y-4 mb-8">
          <p>
            Tirth Sync specializes in fabrication, mechanical engineering, and industrial job work solutions. We deliver custom-engineered solutions tailored to industrial requirements, focusing on precision, quality, and timely project execution.
          </p>
          <p>
            Our engineering team works closely with clients to bring concepts to life, maintaining rigorous quality standards from initial drafting to final assembly.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-6">
          <div class="flex-1 bg-white/5 p-6 border-l-2 border-brand-gray">
            <i data-lucide="target" class="w-6 h-6 text-brand-orange mb-3"></i>
            <h3 class="font-heading font-bold text-white mb-2 uppercase tracking-wide text-sm">Our Mission</h3>
            <p class="text-xs text-brand-gray leading-relaxed">To deliver reliable, high-quality fabrication and engineering solutions that help industries achieve operational excellence.</p>
          </div>
          <div class="flex-1 bg-white/5 p-6 border-l-2 border-brand-orange">
            <i data-lucide="lightbulb" class="w-6 h-6 text-white mb-3"></i>
            <h3 class="font-heading font-bold text-white mb-2 uppercase tracking-wide text-sm">Our Vision</h3>
            <p class="text-xs text-brand-gray leading-relaxed">To become a trusted name in industrial fabrication and mechanical engineering through innovation, precision, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const Services = () => `
<section id="services" class="py-20 lg:py-28 bg-[#141E33] border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="flex items-center justify-center gap-3 mb-4">
        <div class="h-px w-8 bg-brand-orange"></div>
        <h4 class="text-brand-orange font-bold tracking-widest uppercase text-xs">Capabilities</h4>
        <div class="h-px w-8 bg-brand-orange"></div>
      </div>
      <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-white mb-6">Our Services</h2>
      <p class="text-brand-gray text-lg">
        With a commitment to quality workmanship, Tirth Sync supports industries with dependable fabrication services and engineered solutions designed to improve productivity.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Service 1 -->
      <div class="bg-brand-blue border border-white/5 hover:border-brand-orange/50 transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-brand-orange/5">
        <div class="h-48 relative overflow-hidden">
          <div class="absolute inset-0 bg-[#0B1221]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img src="https://lh3.googleusercontent.com/d/1_TK5Tb2bkFgnAa85qqE1JMqxLL65IxJi" alt="Fabrication Services" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
          <div class="absolute top-4 right-4 z-20 bg-[#0B1221] p-3 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
            <i data-lucide="factory" class="w-6 h-6 text-brand-orange transition-colors"></i>
          </div>
        </div>
        <div class="p-8 flex flex-col flex-grow">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-4 tracking-[0.2em]">Service 01</span>
          <h3 class="text-sm font-heading font-bold uppercase mb-4 tracking-wider text-white">Fabrication Services</h3>
          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Industrial & Metal fabrication</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Structural fabrication</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Sheet metal work</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Welding & assembly</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Custom fabrication solutions</span></li>
          </ul>
        </div>
      </div>
      <!-- Service 2 -->
      <div class="bg-brand-blue border border-white/5 hover:border-brand-orange/50 transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-brand-orange/5">
        <div class="h-48 relative overflow-hidden">
          <div class="absolute inset-0 bg-[#0B1221]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img src="https://lh3.googleusercontent.com/d/1ovEgnmaoDPYpcDDvCzyugatTY5Uop5nQ" alt="Mechanical Engineering" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
          <div class="absolute top-4 right-4 z-20 bg-[#0B1221] p-3 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
            <i data-lucide="settings" class="w-6 h-6 text-brand-orange transition-colors"></i>
          </div>
        </div>
        <div class="p-8 flex flex-col flex-grow">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-4 tracking-[0.2em]">Service 02</span>
          <h3 class="text-sm font-heading font-bold uppercase mb-4 tracking-wider text-white">Mechanical Engineering</h3>
          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Machine design support</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Engineering consultancy</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Mechanical drafting & CAD</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Production support</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Equipment development</span></li>
          </ul>
        </div>
      </div>
      <!-- Service 3 -->
      <div class="bg-brand-blue border border-white/5 hover:border-brand-orange/50 transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-brand-orange/5">
        <div class="h-48 relative overflow-hidden">
          <div class="absolute inset-0 bg-[#0B1221]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img src="https://lh3.googleusercontent.com/d/14RBAJaTN_4oN9BQ3j4fdJnSkFZBVQ5vR" alt="Industrial Job Work" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
          <div class="absolute top-4 right-4 z-20 bg-[#0B1221] p-3 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
            <i data-lucide="wrench" class="w-6 h-6 text-brand-orange transition-colors"></i>
          </div>
        </div>
        <div class="p-8 flex flex-col flex-grow">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-4 tracking-[0.2em]">Service 03</span>
          <h3 class="text-sm font-heading font-bold uppercase mb-4 tracking-wider text-white">Industrial Job Work</h3>
          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Precision machining</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Component manufacturing</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Custom parts production</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Assembly operations</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Fabricated component supply</span></li>
          </ul>
        </div>
      </div>
      <!-- Service 4 -->
      <div class="bg-brand-blue border border-white/5 hover:border-brand-orange/50 transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-brand-orange/5">
        <div class="h-48 relative overflow-hidden">
          <div class="absolute inset-0 bg-[#0B1221]/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img src="https://lh3.googleusercontent.com/d/1Q0wabuUWzDi0yMzrwt8f_ToSxFOAtDUg" alt="Custom Solutions" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
          <div class="absolute top-4 right-4 z-20 bg-[#0B1221] p-3 border border-white/10 group-hover:border-brand-orange/50 transition-colors">
            <i data-lucide="lightbulb" class="w-6 h-6 text-brand-orange transition-colors"></i>
          </div>
        </div>
        <div class="p-8 flex flex-col flex-grow">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-4 tracking-[0.2em]">Service 04</span>
          <h3 class="text-sm font-heading font-bold uppercase mb-4 tracking-wider text-white">Custom Solutions</h3>
          <ul class="space-y-3 mb-6 flex-grow">
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Tailor-made industrial solutions</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Prototype development</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Plant support fabrication</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Maintenance fabrication work</span></li>
            <li class="flex items-start text-slate-400 text-xs leading-relaxed"><i data-lucide="chevron-right" class="w-4 h-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0"></i><span>Industrial modification projects</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const Projects = () => `
<section id="projects" class="py-20 lg:py-28 bg-[#141E33] border-t border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div class="max-w-2xl">
        <div class="flex items-center gap-3 mb-4">
          <div class="h-px w-8 bg-brand-orange"></div>
          <h4 class="text-brand-orange font-bold tracking-widest uppercase text-xs">Our Work</h4>
        </div>
        <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">Project Showcase</h2>
      </div>
      <p class="text-brand-gray max-w-md text-right hidden md:block">
        Take a look at some of the key fabrications, structures, and precision engineering projects we've delivered for modern industries.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Project 1 -->
      <div class="group relative overflow-hidden bg-brand-blue border border-white/10 aspect-[4/3] cursor-pointer">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Machine Frames" class="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-2 block tracking-[0.2em]">Fabrication</span>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Machine Frames</h3>
          <div class="h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
      <!-- Project 2 -->
      <div class="group relative overflow-hidden bg-brand-blue border border-white/10 aspect-[4/3] cursor-pointer">
        <img src="https://lh3.googleusercontent.com/d/1UbVwVwuJj2Mm6pQCKWocMymncQk7vWv2" alt="Structural Fabrication" class="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-2 block tracking-[0.2em]">Engineering</span>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Structural Fabrication</h3>
          <div class="h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
      <!-- Project 3 -->
      <div class="group relative overflow-hidden bg-brand-blue border border-white/10 aspect-[4/3] cursor-pointer">
        <img src="https://lh3.googleusercontent.com/d/1yGshla6ur0aBytKKW4f1PNfMjR6QOH5p" alt="Conveyor Systems" class="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-2 block tracking-[0.2em]">Manufacturing</span>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Conveyor Systems</h3>
          <div class="h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
      <!-- Project 4 -->
      <div class="group relative overflow-hidden bg-brand-blue border border-white/10 aspect-[4/3] cursor-pointer">
        <img src="https://lh3.googleusercontent.com/d/1Vvlpf25CPSdNYY1mTMyvHFcli1rIsP63" alt="Industrial Assemblies" class="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-2 block tracking-[0.2em]">Job Work</span>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Industrial Assemblies</h3>
          <div class="h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
      <!-- Project 5 -->
      <div class="group relative overflow-hidden bg-brand-blue border border-white/10 aspect-[4/3] cursor-pointer">
        <img src="https://lh3.googleusercontent.com/d/1FVTxG-PcWRG62B8rxWHZ9LuzCGXTgHTm" alt="Custom Components" class="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-2 block tracking-[0.2em]">Precision</span>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Custom Components</h3>
          <div class="h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
      <!-- Project 6 -->
      <div class="group relative overflow-hidden bg-brand-blue border border-white/10 aspect-[4/3] cursor-pointer">
        <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Welding & Metalwork" class="w-full h-full object-cover opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-90"></div>
        <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span class="text-[10px] font-bold text-brand-orange uppercase mb-2 block tracking-[0.2em]">Fabrication</span>
          <h3 class="text-lg font-heading font-bold text-white mb-2">Welding & Metalwork</h3>
          <div class="h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const WhyChooseUs = () => `
<section class="py-20 lg:py-28 bg-brand-blue text-white border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-4">
        <div class="flex items-center gap-3 mb-4">
          <div class="h-px w-8 bg-brand-orange"></div>
          <h4 class="text-brand-orange font-bold tracking-widest uppercase text-xs">Why Tirth Sync?</h4>
        </div>
        <h2 class="text-3xl lg:text-4xl font-heading font-extrabold mb-6 tracking-tight">
          Engineering <span class="text-brand-gray">Excellence Delivered</span>
        </h2>
        <p class="text-brand-gray text-lg mb-8 leading-relaxed">
          We focus on precision fabrication, quality engineering, and custom industrial solutions to forge long-term client relationships anchored in trust and performance.
        </p>
        <div class="flex gap-4 mb-8 lg:mb-0">
          <div class="w-16 h-1 bg-brand-orange"></div>
          <div class="w-8 h-1 bg-slate-600"></div>
          <div class="w-4 h-1 bg-slate-700"></div>
        </div>
      </div>
      <div class="lg:col-span-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div class="flex items-start p-6 bg-[#141E33] border border-white/5 hover:border-brand-orange/30 transition-colors">
            <div class="text-brand-orange bg-white/5 p-3 rounded-none mr-5">
              <i data-lucide="target" class="w-8 h-8"></i>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-wider font-heading font-bold mb-2 text-white">Precision Manufacturing</h3>
              <p class="text-brand-gray text-xs leading-relaxed">Delivering engineered solutions with high dimensional accuracy and precision.</p>
            </div>
          </div>
          <div class="flex items-start p-6 bg-[#141E33] border border-white/5 hover:border-brand-orange/30 transition-colors">
            <div class="text-brand-orange bg-white/5 p-3 rounded-none mr-5">
              <i data-lucide="shield-check" class="w-8 h-8"></i>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-wider font-heading font-bold mb-2 text-white">Quality Assurance</h3>
              <p class="text-brand-gray text-xs leading-relaxed">Rigorous quality checks at every stage of fabrication and machining.</p>
            </div>
          </div>
          <div class="flex items-start p-6 bg-[#141E33] border border-white/5 hover:border-brand-orange/30 transition-colors">
            <div class="text-brand-orange bg-white/5 p-3 rounded-none mr-5">
              <i data-lucide="users" class="w-8 h-8"></i>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-wider font-heading font-bold mb-2 text-white">Experienced Team</h3>
              <p class="text-brand-gray text-xs leading-relaxed">Skilled professionals with technical expertise in mechanical engineering.</p>
            </div>
          </div>
          <div class="flex items-start p-6 bg-[#141E33] border border-white/5 hover:border-brand-orange/30 transition-colors">
            <div class="text-brand-orange bg-white/5 p-3 rounded-none mr-5">
              <i data-lucide="clock" class="w-8 h-8"></i>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-wider font-heading font-bold mb-2 text-white">On-Time Delivery</h3>
              <p class="text-brand-gray text-xs leading-relaxed">Efficient planning and execution to ensure strict adherence to deadlines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const Industries = () => `
<section id="industries" class="py-20 lg:py-28 bg-[#0B1221] border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-10">
      <div class="flex items-center justify-center gap-3 mb-4">
        <div class="h-px w-8 bg-brand-orange"></div>
        <h4 class="text-brand-orange font-bold tracking-widest uppercase text-xs">Sectors We Serve</h4>
        <div class="h-px w-8 bg-brand-orange"></div>
      </div>
      <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-white mb-8">Industries We Support</h2>
    </div>
    <div class="flex justify-center flex-wrap gap-4 mb-12" id="industry-filters">
      <button data-filter="All" class="filter-btn px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors border border-brand-orange bg-brand-orange text-white">All</button>
      <button data-filter="Manufacturing" class="filter-btn px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 text-brand-gray hover:text-white hover:border-white/30">Manufacturing</button>
      <button data-filter="Automotive" class="filter-btn px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 text-brand-gray hover:text-white hover:border-white/30">Automotive</button>
      <button data-filter="Engineering" class="filter-btn px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 text-brand-gray hover:text-white hover:border-white/30">Engineering</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 transition-all duration-300" id="industry-grid">
      <!-- Industry items injected by JS -->
    </div>
    <div class="mt-20 pt-16 border-t border-white/10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
        <div class="px-4">
          <div class="text-3xl lg:text-4xl font-extrabold font-heading text-brand-gray mb-2">50+</div>
          <div class="text-brand-orange text-xs uppercase tracking-widest font-bold">Projects Completed</div>
        </div>
        <div class="px-4">
          <div class="text-3xl lg:text-4xl font-extrabold font-heading text-brand-gray mb-2">Precision</div>
          <div class="text-brand-orange text-xs uppercase tracking-widest font-bold">Engineering Solutions</div>
        </div>
        <div class="px-4">
          <div class="text-3xl lg:text-4xl font-extrabold font-heading text-brand-gray mb-2">Timely</div>
          <div class="text-brand-orange text-xs uppercase tracking-widest font-bold">Project Delivery</div>
        </div>
        <div class="px-4">
          <div class="text-3xl lg:text-4xl font-extrabold font-heading text-brand-gray mb-2">Trusted</div>
          <div class="text-brand-orange text-xs uppercase tracking-widest font-bold">Industrial Support</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const Contact = () => `
<section id="contact" class="py-20 lg:py-28 bg-brand-blue border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="h-px w-8 bg-brand-orange"></div>
          <h4 class="text-brand-orange font-bold tracking-widest uppercase text-xs">Connect With Us</h4>
        </div>
        <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-white mb-8 tracking-tight">
          Request a Free <span class="text-brand-gray">Consultation</span>
        </h2>
        <div class="bg-[#141E33] p-8 border border-white/5 mb-10">
          <form class="space-y-6" onsubmit="event.preventDefault();">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-2">Name</label>
                <input type="text" id="name" class="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-shadow text-white placeholder-brand-gray text-sm" placeholder="Your Name" />
              </div>
              <div>
                <label for="company" class="block text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-2">Company Name</label>
                <input type="text" id="company" class="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-shadow text-white placeholder-brand-gray text-sm" placeholder="Company Name" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="phone" class="block text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-2">Phone Number</label>
                <input type="tel" id="phone" class="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-shadow text-white placeholder-brand-gray text-sm" placeholder="Phone Number" />
              </div>
              <div>
                <label for="email" class="block text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-2">Email Address</label>
                <input type="email" id="email" class="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-shadow text-white placeholder-brand-gray text-sm" placeholder="Email Address" />
              </div>
            </div>
            <div>
              <label for="service" class="block text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-2">Project Requirement</label>
              <select id="service" class="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-shadow text-brand-gray text-sm">
                <option value="">Select a service</option>
                <option value="fabrication">Fabrication Services</option>
                <option value="mechanical">Mechanical Engineering</option>
                <option value="jobwork">Industrial Job Work</option>
                <option value="custom">Custom Engineering Solutions</option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-2">Message</label>
              <textarea id="message" rows="4" class="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-shadow text-white placeholder-brand-gray text-sm" placeholder="Provide details about your project..."></textarea>
            </div>
            <button type="submit" class="w-full bg-brand-orange hover:brightness-110 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors duration-300">
              Submit Request
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col border-l border-white/5 pl-0 lg:pl-12">
        <div class="bg-white/5 text-white p-8 border border-white/10 mb-8 space-y-8">
          <div>
            <h3 class="text-xl font-heading font-bold mb-4">Contact Information</h3>
            <p class="text-slate-300 text-sm mb-6">Reach out to us directly for any fabrication, mechanical engineering, or industrial job work requirements.</p>
          </div>
          <div class="space-y-6">
            <div class="flex items-start">
              <i data-lucide="map-pin" class="w-5 h-5 text-brand-orange mt-1 mr-4 flex-shrink-0"></i>
              <div>
                <h4 class="font-heading font-semibold text-white mb-1">Company Address</h4>
                <p class="text-slate-300 text-sm leading-relaxed">Mukhi Nagar, Ravaliya Mahudevegon, <br />Harni, Vadodara, Gujarat 390019</p>
              </div>
            </div>
            <div class="flex items-start">
              <i data-lucide="phone" class="w-5 h-5 text-brand-orange mt-1 mr-4 flex-shrink-0"></i>
              <div>
                <h4 class="font-heading font-semibold text-white mb-1">Phone Number</h4>
                <p class="text-slate-300 text-sm">081280 44127</p>
              </div>
            </div>
            <div class="flex items-start">
              <i data-lucide="mail" class="w-5 h-5 text-brand-orange mt-1 mr-4 flex-shrink-0"></i>
              <div>
                <h4 class="font-heading font-semibold text-white mb-1">Email Address</h4>
                <p class="text-slate-300 text-sm">tirthsync@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-grow bg-[#0B1221] overflow-hidden min-h-[300px] border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118086.3769151523!2d73.08866160570881!3d22.316086701198533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8849b22e1dd%3A0xe5a3bbcb7f8d6692!2sHarni%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Tirth Sync Location" class="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const Footer = () => `
<footer class="bg-[#0B1221] pt-16 pb-8 text-white border-t border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12 border-b border-white/5 pb-12">
      <div class="md:col-span-2">
        <div class="flex items-center gap-2 mb-6">
          <div class="w-8 h-8 bg-brand-orange flex items-center justify-center font-bold text-white">TS</div>
          <a href="#home" class="font-heading font-bold text-2xl tracking-tighter uppercase text-white block">Tirth <span class="text-brand-orange">Sync</span></a>
        </div>
        <p class="text-brand-gray text-sm leading-relaxed max-w-sm mb-6">We deliver custom-engineered solutions tailored to industrial requirements, focusing on precision, quality, and timely project execution.</p>
        <div class="flex gap-4">
          <a href="https://www.linkedin.com/company/tirth-sync/" target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-orange hover:bg-brand-orange transition-all">in</a>
        </div>
      </div>
      <div>
        <h3 class="font-heading font-bold uppercase tracking-widest text-xs mb-6 text-brand-orange">Quick Links</h3>
        <ul class="space-y-4 text-sm text-brand-gray">
          <li><a href="#home" class="hover:text-brand-orange transition-colors">Home</a></li>
          <li><a href="#about" class="hover:text-brand-orange transition-colors">About Us</a></li>
          <li><a href="#projects" class="hover:text-brand-orange transition-colors">Projects</a></li>
          <li><a href="#contact" class="hover:text-brand-orange transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-heading font-bold uppercase tracking-widest text-xs mb-6 text-brand-orange">Services</h3>
        <ul class="space-y-4 text-sm text-brand-gray">
          <li><a href="#services" class="hover:text-brand-orange transition-colors">Fabrication</a></li>
          <li><a href="#services" class="hover:text-brand-orange transition-colors">Mechanical Engineering</a></li>
          <li><a href="#services" class="hover:text-brand-orange transition-colors">Industrial Job Work</a></li>
          <li><a href="#services" class="hover:text-brand-orange transition-colors">Custom Solutions</a></li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between items-center text-xs text-brand-gray">
      <p>© 2026 Tirth Sync. All Rights Reserved.</p>
      <div class="mt-4 md:mt-0 flex gap-6">
        <div class="flex flex-col"><span class="text-white/40 mb-1">Email</span><span>tirthsync@gmail.com</span></div>
        <div class="flex flex-col"><span class="text-white/40 mb-1">Location</span><span>Vadodara, Gujarat 390019</span></div>
      </div>
    </div>
  </div>
</footer>
`;

document.getElementById('app-root').innerHTML = Navbar() + Hero() + About() + Services() + Projects() + WhyChooseUs() + Industries() + Contact() + Footer();

// Initialize icons
if (window.lucide) {
    window.lucide.createIcons();
}

// Logic for Navbar Scroll & Mobile Menu
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('py-4', 'shadow-xl', 'border-b', 'border-white/10');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.add('py-6');
        navbar.classList.remove('py-4', 'shadow-xl', 'border-b', 'border-white/10');
    }
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Industries Filtering Logic
const industryData = [
  { name: "Manufacturing", category: "Manufacturing", image: "https://lh3.googleusercontent.com/d/1T99vfSmUvTgCLFkpxwXS0mG4-Ty9yxr5" },
  { name: "Industrial Machinery", category: "Manufacturing", image: "https://lh3.googleusercontent.com/d/1cbndtSC-sSiFcefflwmvSvCG-oghAA8z" },
  { name: "Heavy Equipment", category: "Manufacturing", image: "https://lh3.googleusercontent.com/d/1O4luxcyoM87SINulHlOhtGokkwiGZQSy" },
  { name: "Sheet Metal", category: "Manufacturing", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { name: "Assembly", category: "Automotive", image: "https://lh3.googleusercontent.com/d/1OzKShoXy5_LzMVtDS35tigt2kC67zOC0" },
  { name: "Engineering Plants", category: "Engineering", image: "https://lh3.googleusercontent.com/d/1iXgKs46JJLpiSaMBDt2THdU-iQXQ8vR1" },
  { name: "Construction", category: "Engineering", image: "https://lh3.googleusercontent.com/d/19ZfROvj4xbdI1mEo0Taxgsfg3T5-A6oe" },
  { name: "Process & Chemical", category: "Engineering", image: "https://lh3.googleusercontent.com/d/1MxBaFfl2jc0adzXYQeocJiKkFEzBlW04" }
];

const renderIndustries = (filterStr) => {
    const grid = document.getElementById('industry-grid');
    const filtered = filterStr === 'All' ? industryData : industryData.filter(i => i.category === filterStr);
    grid.innerHTML = filtered.map(ind => `
      <div class="relative group overflow-hidden rounded-sm bg-brand-blue animate-in fade-in duration-500">
        <div class="aspect-[4/3] w-full">
          ${ind.image ? `<img src="${ind.image}" alt="${ind.name}" class="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />` : '<div class="w-full h-full bg-[#1A2642] opacity-60"></div>'}
        </div>
        <div class="absolute inset-0 flex items-center justify-center p-4 text-center">
          <h3 class="text-white font-heading font-medium text-lg lg:text-xl drop-shadow-md group-hover:-translate-y-2 transition-transform duration-300">
            ${ind.name}
          </h3>
        </div>
      </div>
    `).join('');
};

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => {
             b.className = 'filter-btn px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 text-brand-gray hover:text-white hover:border-white/30';
        });
        e.target.className = 'filter-btn px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors border border-brand-orange bg-brand-orange text-white';
        renderIndustries(e.target.dataset.filter);
    });
});

renderIndustries('All');


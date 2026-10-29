import { profile, projects, skills } from "./assets/data/portfolio.js";

function App() {
  return (
    <main className="mx-auto w-[min(100%-2rem,860px)]">
      <header className="topbar sticky top-0 z-50 flex items-center justify-between bg-black/70 py-3 text-sm backdrop-blur-md">
        <a className="brand" href="#home">
          {profile.name.toUpperCase()}
        </a>
        <a className="top-link" href={`mailto:${profile.email}`}>
          Contact Me
        </a>
      </header>
      <section
        id="home"
        className="flex min-h-screen flex-col justify-between py-16 sm:py-24"
      >
        
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_220px] py-20">
          <div>
            <h1 className="text-4xl font-extrabold tracking-[-0.07em]">
              {profile.name}
            </h1>

            <h2 className="mb-3 mt-5 text-xl font-semibold">{profile.role}</h2>

            <p className="max-w-[590px] text-justify text-[15px] leading-8 text-[#b2b3ac]">
              {profile.intro}
            </p>
          </div>

          <img
            src="/images/profile2.jpeg"
            alt={`Foto ${profile.name}`}
            className="mx-auto aspect-square w-48 border border-[#2b2c28] object-cover sm:w-full"
          />
        </div>

        <div
          className="grid grid-cols-3 justify-items-center text-center gap-3 border-y border-[#2b2c28] py-7 sm:gap-6"
          aria-label="Ringkasan"
        >
          <div className="grid content-start gap-2">
            <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
              {profile.experience}
            </strong>
            <span className="text-xs leading-relaxed text-[#92938d]">
              Internship Experience
            </span>
          </div>

          <div className="grid content-start gap-2">
            <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
              {profile.projectsCompleted}
            </strong>
            <span className="text-xs leading-relaxed text-[#92938d]">
              Portfolio Project 
            </span>
          </div>

          <div className="grid content-start gap-2">
            <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
              {profile.technologies.length}
            </strong>
            <span className="text-xs leading-relaxed text-[#92938d]">
              Tech
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2b2c28] py-14 sm:py-16">
        <div className="mb-6">
          <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
            currently under development
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em]">Skills</h2>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <span
              className="flex min-h-12 items-center gap-2.5 rounded border border-[#2b2c28] bg-[#191a17] px-3.5 text-xs text-[#d5d5ce]"
              key={skill}
            >
              <span className="size-[7px] rounded-full bg-[#92938d]" />
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        className="border-b border-[#2b2c28] py-14 sm:py-16"
        id="projects"
      >
        <div className="mb-6">
          <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
            selected works
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em]">Personal Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              className="overflow-hidden rounded border border-[#2b2c28] bg-[#191a17]"
              key={project.title}
            >
              <div className="relative">
                <div className="flex h-40 snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth">
                  {(project.images ?? []).map((image, imageIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${project.title} — gambar ${imageIndex + 1}`}
                      className="h-40 w-full flex-none snap-center object-cover"
                    />
                  ))}
                </div>

                <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-[28px] text-[#191a17]">
                  0{index + 1}
                </span>

                <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.08em] text-white">
                  GESER UNTUK LIHAT →
                </span>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <span className="text-[10px] text-white">
                    {project.status}
                  </span>
                </div>

                <p className="min-h-[42px] text-xs leading-6 text-[#92938d]">
                  {project.description}
                </p>

                <div className="my-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      className="rounded bg-[#252621] px-2 py-1.5 text-[10px] text-[#c3c4bc]"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  className="text-xs text-white"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat repository ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16" id="contact">
        <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
          TERBUKA UNTUK KESEMPATAN
        </p>
        <h2 className="text-3xl font-bold tracking-[-0.05em]">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[#b2b3ac]">
          Saya tertarik dengan kesempatan junior backend developer dan
          kolaborasi proyek.
        </p>
        <a
          className="mt-5 inline-block rounded border border-[#45483b] px-4 py-3 text-sm text-[#92938d]"
          href={`mailto:${profile.email}`}
        >
          {profile.email} 
        </a>
        <a
          className="mt-5 inline-block rounded border border-[#45483b] px-4 py-3 text-sm text-[#92938d]"
          href={`mailto:${profile.email}`}
        >
          {profile.github} 
        </a>
        <a
          className="mt-5 inline-block rounded border border-[#45483b] px-4 py-3 text-sm text-[#92938d]"
          href={`mailto:${profile.email}`}
        >
          {profile.linkedin} 
        </a>
      </section>

      <footer className="flex flex-wrap justify-between gap-4 border-t border-[#2b2c28] py-6 text-[11px] text-[#92938d]">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Dibuat dengan React</span>
      </footer>
    </main>
  );
}

export default App;
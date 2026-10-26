import { profile, projects, skills } from "./assets/data/portfolio.js";

function App() {
  return (
    <main className="mx-auto w-[min(100%-2rem,860px)]">
      <section
        id="home"
        className="grid grid-cols-1 min-h-screen items-center gap-8 py-16 sm:grid-cols-[1fr_220px] sm:py-24"
      >
        <div>
          <h1 className="text-5xl font-extrabold tracking-[-0.07em] sm:text-5xl">
            {profile.name}
          </h1>
          <h2 className="mb-3 mt-5 text-xl font-semibold">{profile.role}</h2>
          <p className="max-w-[590px] text-justify text-[15px] leading-8 text-[#b2b3ac]">
            {profile.intro}
          </p>

          {/* <div className="mt-6 flex flex-wrap gap-6 text-sm text-[#c4f36b]">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div> */}
        </div>

        <img
          src="/images/profile.png"
          alt={`Foto ${profile.name}`}
          className="mx-auto aspect-square w-48 border border-[#2b2c28] object-cover sm:w-full"
        />
      </section>

      <section
        className="grid grid-cols-3 gap-3 border-y border-[#2b2c28] py-7 sm:gap-6"
        aria-label="Ringkasan"
      >
        <div className="grid content-start gap-2">
          <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
            {profile.experience}
          </strong>
          <span className="text-xs leading-relaxed text-[#92938d]">
            Pengalaman magang
          </span>
        </div>
        <div className="grid content-start gap-2">
          <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
            {profile.projectsCompleted}
          </strong>
          <span className="text-xs leading-relaxed text-[#92938d]">
            Proyek portfolio
          </span>
        </div>
        <div className="grid content-start gap-2">
          <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
            {profile.technologies.length}
          </strong>
          <span className="text-xs leading-relaxed text-[#92938d]">
            Teknologi dipelajari
          </span>
        </div>
      </section>

      <section className="border-b border-[#2b2c28] py-14 sm:py-16">
        <div className="mb-6">
          <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#c4f36b]">
            YANG SEDANG SAYA DALAMI
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em]">Keahlian</h2>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <span
              className="flex min-h-12 items-center gap-2.5 rounded border border-[#2b2c28] bg-[#191a17] px-3.5 text-xs text-[#d5d5ce]"
              key={skill}
            >
              <span className="size-[7px] rounded-full bg-[#c4f36b]" />
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
          <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#c4f36b]">
            PILIHAN KARYA
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em]">Proyek</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#b2b3ac]">
            Beberapa proyek latihan dan mandiri untuk mengembangkan kemampuan
            backend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              className="overflow-hidden rounded border border-[#2b2c28] bg-[#191a17]"
              key={project.title}
            >
              <div
                className={`flex h-40 items-end justify-between bg-gradient-to-br p-4 font-mono text-[28px] text-[#c4f36b] ${
                  index % 3 === 0
                    ? "from-[#1b2820] via-[#2d3328] to-[#171916]"
                    : index % 3 === 1
                      ? "from-[#242a32] via-[#20251e] to-[#313426]"
                      : "from-[#302b24] via-[#20221b] to-[#343529]"
                }`}
              >
                <span>0{index + 1}</span>
                <span className="text-[9px] tracking-[0.08em] text-[#d6d8ce]">
                  BACKEND PROJECT
                </span>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold">{project.title}</h3>
                  <span className="text-[10px] text-[#c4f36b]">
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
                  className="text-xs text-[#c4f36b]"
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
        <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#c4f36b]">
          TERBUKA UNTUK KESEMPATAN
        </p>
        <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-[54px]">
          Mari terhubung.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-[#b2b3ac]">
          Saya tertarik dengan kesempatan junior backend developer dan
          kolaborasi proyek.
        </p>
        <a
          className="mt-5 inline-block rounded border border-[#45483b] px-4 py-3 text-sm text-[#c4f36b]"
          href={`mailto:${profile.email}`}
        >
          {profile.email} ↗
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
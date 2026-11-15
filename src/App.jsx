import { profile, projects, skills, contacts } from "./assets/data/portfolio.js";
import Container from "./components/Container.jsx";
import CountUp from "./components/CountUp.jsx";
import { useState } from "react";

const PAGE_SIZE = 4;

function App() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visibleProjects = projects.slice(start, start + PAGE_SIZE);

  const goToPage = (target) => {
    setPage(target);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="fixed inset-x-3 top-3 z-50 mx-3 mt-3 rounded-3xl border border-white/15 bg-white/10 py-3 text-xs text-white shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl backdrop-saturate-150 sm:mx-6">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href={`mailto:${contacts.email}`} className="hidden sm:block">
              {contacts.email}
            </a>

            <a
              href={`mailto:${contacts.email}`}
              className="rounded-full border border-white/20 bg-white/15 px-5 py-2 font-medium transition hover:bg-white/25"
            >
              Email
            </a>

            <a
              href="https://drive.google.com/drive/folders/1atUsj9g-SZIc5rLnxxqLBADeu41RkfOE?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/15 px-5 py-2 font-medium transition hover:bg-white/25"
            >
              CV
            </a>
          </div>

          <nav className="flex items-center gap-2 text-white/80">
            <a className="transition hover:text-white" href={contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true">/</span>
            <a className="transition hover:text-white" href={contacts.github} target="_blank" rel="noreferrer">GitHub</a>
            <span aria-hidden="true">/</span>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>
        </Container>
      </header>

      <section
        id="home"
        className="relative z-30 flex min-h-[calc(100svh+3rem)] flex-col justify-between overflow-hidden rounded-b-[3rem] bg-black py-16 text-white sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_85%,rgba(0,180,216,0.55),transparent_70%),radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(0,180,216,0.25),transparent_70%)]"
        />
        <Container>
          <div className="flex flex-col items-center gap-6 py-31 text-center text-white">
            <div className="relative">
              <img
                src="/profil.png"
                alt={`Foto ${profile.name}`}
                className="size-25 rounded-full object-cover sm:size-30"
              />
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
              {profile.role}
              <br />
              <span className="text-neutral-500">{profile.subRole}</span>
            </h1>

            <a
              href="#profile"
              className="rounded-full bg-white px-6 py-3 text-xs font-medium text-black"
            >
              Show More.
            </a>
          </div>

          <div
            className="grid grid-cols-2 justify-items-center text-center gap-3 border-y border-[#2b2c28] py-7 sm:gap-6"
            aria-label="Ringkasan"
          >
            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                <CountUp to={profile.projectsCompleted} suffix="+" />
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Portfolio Project 
              </span>
            </div>

            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                <CountUp to={profile.technologies.length} suffix="+" />
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Tech
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b py-14 sm:py-16 bg-white relative z-20 -mt-12 rounded-b-[3rem]">
        <Container>
          <div className="mb-6">
            <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
              currently under development
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-[#191a17]">Skills</h2>
          </div>
        </Container>
        <Container size="normal">
          <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-none px-4"
                  aria-hidden={index >= skills.length}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="py-14 sm:py-16 bg-[#efefef] relative z-10 -mt-12"
        id="projects"
      >
        <Container>
          <div className="mb-6">
            <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
              selected works
            </p>
            <h2 className="text-3xl text-black font-bold tracking-[-0.05em]">Personal Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <article key={project.title} className="overflow-hidden rounded bg-white text-black">
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
                    {String(start + index + 1).padStart(2, "0")}
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
                    Lihat repository
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div>
            {/* pagination control */}
            {totalPages > 1 && (
              <nav
                aria-label="Navigasi halaman proyek"
                className="mt-8 flex items-center justify-center gap-2 text-xs"
              >
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-40"
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => goToPage(number)}
                    aria-current={number === page ? "page" : undefined}
                    className={`size-9 rounded-full font-medium transition ${
                      number === page
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black/10"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-40"
                >
                  Next →
                </button>
              </nav>
            )}
          </div>
        </Container>
      </section>

       <section
        id="home"
        className="relative z-30 flex min-h-screen flex-col justify-between overflow-hidden rounded-b-[3rem] bg-black py-16 text-white sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_80%,rgba(0,180,216,0.25),transparent_70%),radial-gradient(ellipse_50%_40%_at_10%_10%,rgba(0,180,216,0.10),transparent_70%),radial-gradient(ellipse_45%_45%_at_0%_0%,rgba(0,180,216,0.25),transparent_70%)]"
        />
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_220px] py-20 text-white" id="profile">
            <div>
              <h1 className="text-4xl font-extrabold tracking-[-0.07em]">
                {profile.name}
              </h1>

              <h2 className="mb-3 mt-5 text-xl font-semibold">{profile.profile}</h2>

              <p className="max-w-[590px] text-justify text-[15px] leading-8 text-[#a3a3a1]">
                {profile.intro}
              </p>
            </div>

            <img
              src="/profil.png"
              alt={`Foto ${profile.name}`}
              className="mx-auto aspect-square w-48 rounded object-cover sm:w-full"
            />
          </div>

          <div
            className="grid grid-cols-2 justify-items-center text-center gap-3 border-y border-[#2b2c28] py-7 sm:gap-6"
            aria-label="Ringkasan"
          >
            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                {profile.experience}
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                academic, personal & internship projects
              </span>
            </div>
            
            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                {profile.workExperience}
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Fullstack Developer Intern at PT. INOVINDO Digital Media
              </span>
            </div>

            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                Bachelor of Computer Science, Informatics Engineering
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Universitas Komputer Indonesia 
              </span>
            </div>

            <div className="grid content-start gap-2">
              <strong className="text-2xl tracking-[-0.06em] sm:text-[28px]">
                Web Developer Certification
              </strong>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Badan Nasional Sertifikasi Profesi (BNSP)
              </span>
              <span className="text-xs leading-relaxed text-[#92938d]">
                Indonesia
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 bg-white rounded-t-[3rem]" id="contact">
        <Container>
          <p className="mb-3 font-mono text-[11px] tracking-[0.08em] text-[#92938d]">
            OPEN TO OPPORTUNITIES
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-black">
            Contact
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#b2b3ac]">
          I'm open to junior full-stack developer and software engineering opportunities, as well as collaborative projects.
          </p>
          <div className="grid grid-cols-1 gap-2 py-3 sm:grid-cols-2">
            <a
              className="flex min-h-12 items-center gap-2.5 rounded-2xl border border-black/5 bg-white/40 px-3.5 text-xs text-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150 transition hover:bg-white/60 hover:text-[#0077b6]"
              href={`mailto:${contacts.email}`}
            >
              <img src="/images/icons/mail.png" alt="" aria-hidden="true" className="size-5 object-contain" />
              <span>fazaabsharcontact@gmail.com</span>
            </a>

            <a
              className="flex min-h-12 items-center gap-2.5 rounded-2xl border border-black/5 bg-white/40 px-3.5 text-xs text-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150 transition hover:bg-white/60 hover:text-[#0077b6]"
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/github.png" alt="" aria-hidden="true" className="size-5 object-contain" />
              <span>fazabsharcontact</span>
            </a>

            <a
              className="flex min-h-12 items-center gap-2.5 rounded-2xl border border-black/5 bg-white/40 px-3.5 text-xs text-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150 transition hover:bg-white/60 hover:text-[#0077b6]"
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/linkedin.png" alt="" aria-hidden="true" className="size-5 object-contain" />
              <span>Faza Abshar</span>
            </a>

            <a
              className="flex min-h-12 items-center gap-2.5 rounded-2xl border border-black/5 bg-white/40 px-3.5 text-xs text-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl backdrop-saturate-150 transition hover:bg-white/60 hover:text-[#0077b6]"
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/icons/whatsapp.png" alt="" aria-hidden="true" className="size-5 object-contain" />
              <span>+62 822-1310-2425</span>
            </a>
          </div>
        </Container>
      </section>

      <footer className="justify-center text-center flex flex-wrap gap-4 py-6 text-[11px] text-[#92938d] bg-white">
        <Container>
          <span>
            © {new Date().getFullYear()} fazaabsharcontact
          </span>
        </Container>
      </footer>
    </main>
  );
}

export default App;
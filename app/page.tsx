"use client";

import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Database,
  GraduationCap,
  Map,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";

const EMAIL = "persepolisescolalivre@gmail.com";

const modules = [
  {
    code: "MOD_01",
    title: "Gestão de ativos",
    text: "Inventário técnico, diagnóstico, classificação e identificação por QR Code.",
    icon: Database,
  },
  {
    code: "MOD_02",
    title: "Circularização",
    text: "Triagem, recondicionamento, reuso, logística reversa e destinação responsável.",
    icon: Recycle,
  },
  {
    code: "MOD_03",
    title: "Inteligência ESG",
    text: "Rastreabilidade, indicadores, dashboard, relatórios e governança.",
    icon: CircuitBoard,
  },
  {
    code: "MOD_04",
    title: "Aprendizagem",
    text: "Laboratórios, formação profissional, projetos reais e banco de talentos.",
    icon: GraduationCap,
  },
  {
    code: "MOD_05",
    title: "Territórios",
    text: "Conexão entre empresas, escolas, comunidades e ecossistemas locais.",
    icon: Map,
  },
];

const method = [
  "Diagnosticar",
  "Circularizar",
  "Formar",
  "Experimentar",
  "Mensurar",
  "Replicar",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    assets: "",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      "Solicitação de Diagnóstico Circular — Persepolis Circular OS"
    );
    const body = encodeURIComponent(
`Olá, equipe Persepolis,

Tenho interesse em solicitar um Diagnóstico Circular.

Nome: ${form.name}
Organização: ${form.company}
Cargo: ${form.role}
E-mail: ${form.email}
Telefone: ${form.phone}
Quantidade aproximada de ativos: ${form.assets}

Principal necessidade:
${form.message}

Gostaria de receber mais informações sobre o Persepolis Circular OS™.`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [form]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <>
      <header className="topbar">
        <div className="wrap nav">
          <a className="brand" href="#inicio" aria-label="Persepolis">
            <span className="brand-symbol">
              <span className="brand-circle" />
              <span className="brand-middle" />
              <span className="brand-base" />
            </span>
            <span>PERSEPOLIS</span>
          </a>

          <button
            className="menu-button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU
          </button>

          <nav className={menuOpen ? "links open" : "links"}>
            <a href="#tese" onClick={() => setMenuOpen(false)}>Tese</a>
            <a href="#sistema" onClick={() => setMenuOpen(false)}>Circular OS</a>
            <a href="#metodo" onClick={() => setMenuOpen(false)}>Método</a>
            <a href="#territorios" onClick={() => setMenuOpen(false)}>Territórios</a>
            <a className="nav-cta" href="#diagnostico" onClick={() => setMenuOpen(false)}>
              Solicitar diagnóstico
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="grid-overlay" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="system-label">PERSEPOLIS CIRCULAR OS™ / SYSTEM ONLINE</div>
              <h1>O FUTURO É UMA INFRAESTRUTURA.</h1>
              <p>
                Transformamos ativos tecnológicos corporativos em aprendizagem,
                trabalho e desenvolvimento territorial por meio de um sistema
                integrado de infraestrutura circular.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#sistema">
                  Conhecer o sistema <ArrowRight size={18} />
                </a>
                <a className="button ghost" href="#diagnostico">
                  Solicitar diagnóstico
                </a>
              </div>
              <div className="microcopy">
                INVENTÁRIO · RASTREABILIDADE · RECONDICIONAMENTO · INDICADORES ESG
              </div>
            </div>

            <aside className="terminal">
              <div className="terminal-head">
                <span>PERSEPOLIS_OS</span>
                <span className="online"><i /> ONLINE</span>
              </div>
              <div className="terminal-row">
                <small>INFRAESTRUTURA</small>
                <strong>CIRCULAR</strong>
              </div>
              <div className="terminal-row">
                <small>CAPACIDADE</small>
                <strong>DETECTADA</strong>
              </div>
              <div className="terminal-row">
                <small>NOVO CICLO</small>
                <strong>INSTALADO</strong>
              </div>
              <div className="terminal-footer">
                <span>STATUS: READY</span>
                <span>V1.0</span>
              </div>
            </aside>
          </div>
          <a href="#tese" className="scroll-cue" aria-label="Rolar">
            <ArrowDown size={18} />
          </a>
        </section>

        <section id="tese">
          <div className="wrap">
            <div className="kicker">01 / DIREITO AO FUTURO</div>
            <h2>O problema não é falta de tecnologia.</h2>
            <p className="intro">
              É desperdício de infraestrutura. Empresas acumulam capacidade
              tecnológica. Territórios seguem sem as condições materiais para
              aprender, trabalhar e criar. A Persepolis conecta essas duas
              realidades.
            </p>

            <div className="comparison">
              <article className="comparison-card muted">
                <span className="card-code">SISTEMA ANTIGO</span>
                <h3>Infraestrutura linear</h3>
                <ol>
                  <li>Comprar</li>
                  <li>Usar</li>
                  <li>Substituir</li>
                  <li>Descartar</li>
                </ol>
              </article>

              <article className="comparison-card active">
                <span className="card-code">NOVO SISTEMA</span>
                <h3>Infraestrutura circular</h3>
                <ol>
                  <li>Inventariar</li>
                  <li>Rastrear</li>
                  <li>Recondicionar</li>
                  <li>Reinserir e medir</li>
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section id="sistema">
          <div className="wrap">
            <div className="kicker">02 / PERSEPOLIS CIRCULAR OS™</div>
            <h2>UM SISTEMA OPERACIONAL PARA NOVOS CICLOS.</h2>
            <p className="intro">
              Ativos, processos, dados, pessoas e territórios conectados em uma
              única arquitetura de operação.
            </p>

            <div className="modules">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <article className="module" key={module.code}>
                    <div className="module-top">
                      <span>{module.code}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3>{module.title}</h3>
                      <p>{module.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="metodo">
          <div className="wrap">
            <div className="kicker">03 / CIRCULAR INNOVATION LAB™</div>
            <h2>DA ESTRATÉGIA À OPERAÇÃO.</h2>
            <p className="intro">
              Uma metodologia replicável que converte capacidade instalada em
              infraestrutura territorial mensurável.
            </p>
            <div className="method">
              {method.map((item, index) => (
                <div className="method-step" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="territorios" className="territories">
          <div className="wrap territory-grid">
            <div>
              <div className="kicker">04 / TERRITÓRIOS DIGITAIS™</div>
              <h2>A INFRAESTRUTURA ENCONTRA O TERRITÓRIO.</h2>
              <p className="intro">
                Empresas, universidades, comunidades e governos compartilham
                uma mesma infraestrutura circular. Cada território se torna um
                laboratório vivo de aprendizagem, trabalho e inovação.
              </p>
              <a className="text-link" href="#diagnostico">
                Implementar um território <ArrowRight size={17} />
              </a>
            </div>

            <div className="proof">
              <div><strong>100+</strong><span>ativos por piloto</span></div>
              <div><strong>5</strong><span>semanas de implementação</span></div>
              <div><strong>30+</strong><span>participantes</span></div>
              <div><strong>1</strong><span>relatório ESG executivo</span></div>
            </div>
          </div>
        </section>

        <section className="company">
          <div className="wrap company-grid">
            <div>
              <div className="kicker">05 / PARA EMPRESAS</div>
              <h2>SUA EMPRESA JÁ POSSUI PARTE DA INFRAESTRUTURA.</h2>
            </div>
            <div className="benefits">
              {[
                "Gestão do ciclo de vida dos ativos",
                "Inventário e rastreabilidade",
                "Segurança e governança",
                "Indicadores ESG verificáveis",
                "Impacto territorial mensurável",
              ].map((item) => (
                <div key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnostico" className="diagnosis">
          <div className="wrap form-grid">
            <div>
              <div className="kicker">SYSTEM READY</div>
              <h2>SOLICITE UM DIAGNÓSTICO CIRCULAR.</h2>
              <p className="intro">
                Preencha os dados. Ao enviar, seu aplicativo de e-mail abrirá
                com uma mensagem pronta para a equipe da Persepolis.
              </p>
              <div className="contact-note">
                <ShieldCheck size={22} />
                <span>{EMAIL}</span>
              </div>
            </div>

            <form className="form" action={mailto}>
              <label>
                Nome
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                />
              </label>
              <label>
                Organização
                <input
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  required
                />
              </label>
              <div className="form-pair">
                <label>
                  Cargo
                  <input
                    value={form.role}
                    onChange={(e) => updateField("role", e.target.value)}
                  />
                </label>
                <label>
                  E-mail
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="form-pair">
                <label>
                  Telefone
                  <input
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </label>
                <label>
                  Quantidade de ativos
                  <input
                    value={form.assets}
                    onChange={(e) => updateField("assets", e.target.value)}
                  />
                </label>
              </div>
              <label>
                Principal necessidade
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />
              </label>
              <a className="button primary submit" href={mailto}>
                Enviar solicitação por e-mail <ArrowRight size={18} />
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer">
          <div>
            <strong>PERSEPOLIS</strong>
            <p>Direito ao Futuro. Infraestrutura circular em operação.</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>E-mail</a>
            <a href="https://instagram.com/persepolisescola" target="_blank">Instagram</a>
            <a href="https://persepolisescola.com.br" target="_blank">Site institucional</a>
          </div>
        </div>
      </footer>
    </>
  );
}

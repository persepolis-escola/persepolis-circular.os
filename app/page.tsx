"use client";

import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircuitBoard,
  Database,
  FileCheck2,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Map,
  Network,
  QrCode,
  Recycle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Timeline,
  Workflow,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const EMAIL = "persepolisescolalivre@gmail.com";

const modules = [
  {
    code: "MOD_01",
    title: "Asset Intelligence",
    text: "Inventário técnico, identificação individual, status, origem, condição e destino de cada ativo.",
    icon: Database,
  },
  {
    code: "MOD_02",
    title: "Circular Operations",
    text: "Triagem, recondicionamento, logística, reuso e destinação técnica com processo documentado.",
    icon: Recycle,
  },
  {
    code: "MOD_03",
    title: "ESG Intelligence",
    text: "Indicadores ambientais, sociais e operacionais consolidados em relatórios e painéis executivos.",
    icon: BarChart3,
  },
  {
    code: "MOD_04",
    title: "Learning Infrastructure",
    text: "Formação técnica aplicada à operação real, com desenvolvimento de competências e inclusão produtiva.",
    icon: GraduationCap,
  },
  {
    code: "MOD_05",
    title: "Territorial Network",
    text: "Conexão entre empresas, escolas, comunidades, laboratórios e ecossistemas locais.",
    icon: Network,
  },
];

const operatingFlow = [
  {
    no: "01",
    title: "Diagnóstico",
    text: "Mapeamento do estoque, riscos, áreas responsáveis, volume, condição dos equipamentos e oportunidades de circularização.",
    icon: ScanLine,
  },
  {
    no: "02",
    title: "Inventário",
    text: "Registro individual com fotografia, marca, modelo, serial, patrimônio, origem, data, estado e identificação por QR Code.",
    icon: QrCode,
  },
  {
    no: "03",
    title: "Triagem",
    text: "Classificação entre reuso imediato, recondicionamento simples, recondicionamento avançado e destinação técnica.",
    icon: Boxes,
  },
  {
    no: "04",
    title: "Segurança",
    text: "Controle de movimentação, cadeia de custódia, procedimentos de sanitização e evidências para governança e LGPD.",
    icon: LockKeyhole,
  },
  {
    no: "05",
    title: "Recondicionamento",
    text: "Recuperação de hardware, software e componentes para prolongar a vida útil e preservar valor tecnológico.",
    icon: CircuitBoard,
  },
  {
    no: "06",
    title: "Impacto",
    text: "Reinserção em novos ciclos, formação técnica, indicadores ESG e relatório executivo para a organização.",
    icon: BarChart3,
  },
];

const referenceIndicators = [
  { value: "400", label: "ativos processados em operação-piloto interna" },
  { value: "8 t", label: "de equipamentos eletrônicos mobilizados" },
  { value: "160 t", label: "de CO₂e estimadas no ciclo de referência" },
  { value: "20", label: "pessoas formadas em atividades técnicas" },
  { value: "100", label: "equipamentos destinados para uso social" },
  { value: "500", label: "pessoas potencialmente alcançadas" },
];

const dashboardData = [
  { label: "ATIVOS PROCESSADOS", value: "400", trend: "+18%" },
  { label: "RECONDICIONADOS", value: "247", trend: "61,8%" },
  { label: "DESTINO DOCUMENTADO", value: "100%", trend: "QR" },
  { label: "MASSA MOBILIZADA", value: "8,0 t", trend: "piloto" },
  { label: "CO₂e ESTIMADO", value: "160 t", trend: "referência" },
  { label: "PESSOAS FORMADAS", value: "20", trend: "operação" },
];

const authority = [
  {
    name: "BNDES Garagem",
    status: "Aceleração",
    text: "Participação em programa de aceleração para negócios de impacto.",
  },
  {
    name: "Instituto Caldeira",
    status: "Ecossistema",
    text: "Atuação no ecossistema de inovação e desenvolvimento de iniciativas de circularidade.",
  },
  {
    name: "Porto Digital",
    status: "Desenvolvimento",
    text: "Participação em jornada de desenvolvimento e validação de negócio.",
  },
  {
    name: "Josapar",
    status: "Piloto",
    text: "Experiência-piloto de circularidade tecnológica com ativos corporativos.",
  },
];

const cases = [
  {
    type: "PILOTO OPERACIONAL",
    title: "Josapar",
    metric: "100 ativos",
    text: "Estruturação de uma jornada de inventário, triagem, segurança da informação, recondicionamento e geração de evidências.",
    note: "Experiência-piloto",
  },
  {
    type: "PROGRAMA TERRITORIAL",
    title: "Caldeira Circular Tech",
    metric: "300 ativos",
    text: "Modelo desenhado para conectar empresas do ecossistema, formação técnica, circularidade e destinação territorial.",
    note: "Modelo em desenvolvimento",
  },
  {
    type: "PRODUTO",
    title: "Territórios Digitais",
    metric: "5 semanas",
    text: "Sprint de implementação territorial com laboratório, formação, operação técnica, indicadores e demoday.",
    note: "Arquitetura replicável",
  },
];

const roadmap = [
  { year: "2026", title: "Circular OS", text: "Produto, rastreabilidade, dashboard e primeiros contratos recorrentes." },
  { year: "2027", title: "Territórios", text: "Expansão de pilotos e rede de laboratórios territoriais." },
  { year: "2028", title: "API ESG", text: "Integração de indicadores, ativos e relatórios com sistemas corporativos." },
  { year: "2029", title: "Marketplace", text: "Rede de serviços, peças, talentos e destinações homologadas." },
  { year: "2030", title: "Rede nacional", text: "Infraestrutura circular conectada em múltiplos territórios." },
];

const deliverables = [
  "inventário individual dos ativos",
  "registro de cadeia de custódia",
  "classificação técnica e evidência de destino",
  "painel de indicadores operacionais",
  "relatório executivo ESG",
  "recomendação de programa recorrente",
];

const faq = [
  {
    q: "A Persepolis é uma empresa de reciclagem?",
    a: "Não. A Persepolis opera infraestrutura circular. A reciclagem é apenas uma possibilidade de destino. A prioridade é preservar valor, prolongar a vida útil, recondicionar e reinserir tecnologia em novos ciclos.",
  },
  {
    q: "Quais equipamentos podem entrar no sistema?",
    a: "Computadores, notebooks, monitores, periféricos e outros ativos de tecnologia da informação podem ser avaliados. O escopo é definido no diagnóstico técnico.",
  },
  {
    q: "Como a segurança dos dados é tratada?",
    a: "A jornada inclui registro de entrada, controle de movimentação, procedimentos de sanitização e documentação das etapas. Requisitos específicos podem ser incorporados ao plano operacional.",
  },
  {
    q: "O que a empresa recebe ao final?",
    a: "Inventário atualizado, evidências de rastreabilidade, classificação dos ativos, indicadores de impacto e relatório executivo adequado para TI, patrimônio, sustentabilidade, compliance e ESG.",
  },
  {
    q: "É possível começar com um piloto?",
    a: "Sim. O piloto é a porta de entrada recomendada para testar a operação, medir resultados e estruturar um programa recorrente com menor risco.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booting, setBooting] = useState(true);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    assets: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      "Solicitação de Avaliação Operacional — Persepolis Circular OS"
    );
    const body = encodeURIComponent(
`Olá, equipe Persepolis,

Tenho interesse em solicitar uma avaliação operacional.

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
      <div className={booting ? "boot-screen visible" : "boot-screen"}>
        <div className="boot-inner">
          <span className="brand-symbol large">
            <span className="brand-circle" />
            <span className="brand-middle" />
            <span className="brand-base" />
          </span>
          <div className="boot-title">PERSEPOLIS CIRCULAR OS™</div>
          <div className="boot-track"><span /></div>
          <div className="boot-meta">
            <span>LOADING CIRCULAR INFRASTRUCTURE</span>
            <span>V4.0</span>
          </div>
        </div>
      </div>

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
            {menuOpen ? "FECHAR" : "MENU"}
          </button>

          <nav className={menuOpen ? "links open" : "links"}>
            <a href="#produto" onClick={() => setMenuOpen(false)}>Produto</a>
            <a href="#dashboard" onClick={() => setMenuOpen(false)}>Dashboard</a>
            <a href="#cases" onClick={() => setMenuOpen(false)}>Cases</a>
            <a href="#roadmap" onClick={() => setMenuOpen(false)}>Roadmap</a>
            <a className="nav-cta" href="#diagnostico" onClick={() => setMenuOpen(false)}>
              Avaliação operacional
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="grid-overlay" />
          <div className="hero-glow one" />
          <div className="hero-glow two" />

          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="system-label">
                <span className="pulse-dot" />
                CIRCULAR INFRASTRUCTURE / SYSTEM ONLINE
              </div>

              <h1>
                TECNOLOGIA NÃO É RESÍDUO.
                <span> É INFRAESTRUTURA.</span>
              </h1>

              <p>
                O Persepolis Circular OS™ transforma ativos tecnológicos corporativos
                em rastreabilidade, aprendizagem, trabalho e desenvolvimento territorial.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#dashboard">
                  Ver o produto <ArrowRight size={18} />
                </a>
                <a className="button ghost" href="#diagnostico">
                  Solicitar avaliação operacional
                </a>
              </div>

              <div className="hero-proof">
                <div><strong>ATIVOS</strong><span>inventário e QR Code</span></div>
                <div><strong>LGPD</strong><span>cadeia de custódia</span></div>
                <div><strong>ESG</strong><span>indicadores e relatório</span></div>
                <div><strong>TERRITÓRIO</strong><span>formação e trabalho</span></div>
              </div>
            </div>

            <aside className="product-shell">
              <div className="product-bar">
                <span>CIRCULAR_OS / OVERVIEW</span>
                <span className="online"><i /> LIVE</span>
              </div>
              <div className="product-nav">
                <span className="active">OVERVIEW</span>
                <span>ASSETS</span>
                <span>IMPACT</span>
                <span>TERRITORIES</span>
              </div>
              <div className="product-dashboard">
                <div className="product-metric large">
                  <small>ATIVOS NO SISTEMA</small>
                  <strong>400</strong>
                  <span>operação-piloto</span>
                </div>
                <div className="product-metric">
                  <small>RASTREADOS</small>
                  <strong>100%</strong>
                  <span>QR + registro</span>
                </div>
                <div className="product-metric">
                  <small>RECONDICIONADOS</small>
                  <strong>247</strong>
                  <span>61,8%</span>
                </div>
                <div className="mini-chart">
                  <div className="chart-head"><span>FLUXO DE ATIVOS</span><span>30 DIAS</span></div>
                  <div className="bars">
                    {[38, 55, 44, 72, 60, 86, 74, 92, 80, 100].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="product-footer">
                <span>LAST SYNC: NOW</span>
                <span>DATA STATUS: VERIFIED</span>
              </div>
            </aside>
          </div>

          <div className="hero-ticker" aria-hidden="true">
            <div>
              <span>ASSET INTELLIGENCE</span><i>•</i>
              <span>CIRCULAR OPERATIONS</span><i>•</i>
              <span>ESG INTELLIGENCE</span><i>•</i>
              <span>TERRITORIAL NETWORK</span><i>•</i>
              <span>ASSET INTELLIGENCE</span><i>•</i>
              <span>CIRCULAR OPERATIONS</span><i>•</i>
            </div>
          </div>

          <a href="#autoridade" className="scroll-cue" aria-label="Rolar">
            <ArrowDown size={18} />
          </a>
        </section>

        <section className="authority-section" id="autoridade">
          <div className="wrap">
            <div className="authority-header">
              <span>TRAJETÓRIA, PROGRAMAS E OPERAÇÕES</span>
              <small>evidências institucionais apresentadas conforme o estágio de cada relação</small>
            </div>
            <div className="authority-grid">
              {authority.map((item) => (
                <article key={item.name}>
                  <span>{item.status}</span>
                  <strong>{item.name}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="category-section">
          <div className="wrap category-grid">
            <div>
              <div className="kicker">01 / A CATEGORIA</div>
              <h2>NÃO É DESCARTE. NÃO É DOAÇÃO. É INFRAESTRUTURA CIRCULAR.</h2>
            </div>
            <div className="category-copy">
              <p>
                Empresas acumulam equipamentos substituídos, estoques sem visibilidade,
                riscos de dados e decisões fragmentadas sobre destino.
              </p>
              <p>
                Territórios precisam de infraestrutura para formar pessoas, criar trabalho
                e ampliar capacidade tecnológica.
              </p>
              <p className="category-highlight">
                O Circular OS conecta essas duas realidades por meio de uma operação
                documentada, mensurável e replicável.
              </p>
            </div>
          </div>

          <div className="wrap pain-grid">
            <article>
              <FileCheck2 size={24} />
              <h3>Baixa rastreabilidade</h3>
              <p>Dados dispersos sobre localização, estado, destino e valor residual.</p>
            </article>
            <article>
              <LockKeyhole size={24} />
              <h3>Risco de dados</h3>
              <p>Ativos sem cadeia de custódia aumentam a exposição operacional.</p>
            </article>
            <article>
              <Boxes size={24} />
              <h3>Estoque improdutivo</h3>
              <p>Equipamentos ocupam espaço e consomem recursos sem gerar valor.</p>
            </article>
            <article>
              <BarChart3 size={24} />
              <h3>ESG sem evidência</h3>
              <p>Ações pontuais não produzem indicadores confiáveis ou aprendizado institucional.</p>
            </article>
          </div>
        </section>

        <section id="produto" className="system-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">02 / O PRODUTO</div>
                <h2>UM SISTEMA OPERACIONAL PARA O CICLO DE VIDA DA TECNOLOGIA.</h2>
              </div>
              <p>
                O Circular OS combina software, método e operação para transformar
                ativos em dados, decisões, evidências e impacto territorial.
              </p>
            </div>

            <div className="modules">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <article className="module" key={module.code}>
                    <div className="module-number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="module-top">
                      <span>{module.code}</span>
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3>{module.title}</h3>
                      <p>{module.text}</p>
                    </div>
                    <div className="module-status">ONLINE</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="architecture-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">03 / ARQUITETURA</div>
                <h2>DA EMPRESA AO IMPACTO, SEM PERDER O RASTRO.</h2>
              </div>
              <p>
                Cada camada produz informações para a seguinte. O resultado não é apenas
                um equipamento recondicionado, mas uma cadeia de valor documentada.
              </p>
            </div>

            <div className="architecture-flow">
              {[
                ["EMPRESA", "ativos, estoque e risco"],
                ["CIRCULAR OS", "inventário e operação"],
                ["DADOS", "rastreabilidade e indicadores"],
                ["ESG", "evidências e governança"],
                ["TERRITÓRIOS", "aprendizagem e trabalho"],
                ["IMPACTO", "valor ambiental e social"],
              ].map(([title, text], index) => (
                <div className="architecture-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                  {index < 5 && <ArrowRight size={18} />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="operation-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">04 / OPERAÇÃO</div>
                <h2>DO ATIVO PARADO À EVIDÊNCIA DE IMPACTO.</h2>
              </div>
              <p>
                Uma jornada técnica com controle, decisão, recuperação de valor,
                aplicação territorial e mensuração.
              </p>
            </div>

            <div className="operation-grid">
              {operatingFlow.map((stage) => {
                const Icon = stage.icon;
                return (
                  <article className="operation-card" key={stage.no}>
                    <div className="operation-head">
                      <span>{stage.no}</span>
                      <Icon size={25} strokeWidth={1.5} />
                    </div>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="dashboard" className="dashboard-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">05 / DASHBOARD</div>
                <h2>O QUE ERA ESTOQUE PASSA A SER INTELIGÊNCIA.</h2>
              </div>
              <p>
                Painéis executivos tornam visíveis o fluxo, a condição, o destino
                e os resultados dos ativos tecnológicos.
              </p>
            </div>

            <div className="dashboard-shell">
              <aside className="dash-sidebar">
                <div className="dash-logo"><Layers3 size={21} /><span>CIRCULAR OS</span></div>
                <nav>
                  <span className="active">Overview</span>
                  <span>Assets</span>
                  <span>Operations</span>
                  <span>Impact</span>
                  <span>Territories</span>
                  <span>Reports</span>
                </nav>
                <div className="dash-status"><i /> SYSTEM ONLINE</div>
              </aside>

              <div className="dash-content">
                <div className="dash-top">
                  <div>
                    <small>ORGANIZATION</small>
                    <strong>OPERAÇÃO DE REFERÊNCIA</strong>
                  </div>
                  <div className="dash-filter">LAST 30 DAYS</div>
                </div>

                <div className="dash-metrics">
                  {dashboardData.map((item) => (
                    <div key={item.label}>
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                      <span>{item.trend}</span>
                    </div>
                  ))}
                </div>

                <div className="dash-lower">
                  <div className="dash-chart-card">
                    <div className="card-title"><span>PROCESSAMENTO POR ETAPA</span><span>ATUALIZADO</span></div>
                    <div className="horizontal-bars">
                      {[
                        ["Inventário", 100],
                        ["Triagem", 86],
                        ["Sanitização", 72],
                        ["Recondicionamento", 62],
                        ["Destinação", 48],
                      ].map(([label, value]) => (
                        <div key={String(label)}>
                          <span>{label}</span>
                          <div><i style={{ width: `${value}%` }} /></div>
                          <b>{value}%</b>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dash-log-card">
                    <div className="card-title"><span>RECENT LOGS</span><span>LIVE</span></div>
                    {[
                      ["ASSET-0247", "Recondicionado", "10:42"],
                      ["ASSET-0246", "Sanitizado", "10:34"],
                      ["ASSET-0245", "Triagem concluída", "10:18"],
                      ["ASSET-0244", "QR associado", "09:57"],
                    ].map(([asset, status, time]) => (
                      <div className="log-row" key={asset}>
                        <span>{asset}</span><strong>{status}</strong><small>{time}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="data-note">
              Os números exibidos são referências da operação-piloto interna e não representam
              um painel público em tempo real.
            </p>
          </div>
        </section>

        <section className="impact-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">06 / DADOS DE REFERÊNCIA</div>
                <h2>RESULTADOS QUE PODEM SER RASTREADOS, COMPARADOS E COMUNICADOS.</h2>
              </div>
              <p>
                Indicadores da operação-piloto interna. Cada contrato terá métricas próprias
                conforme volume, estado dos ativos, território e escopo.
              </p>
            </div>

            <div className="indicator-grid">
              {referenceIndicators.map((item) => (
                <article className="indicator-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="cases-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">07 / CASES E APLICAÇÕES</div>
                <h2>PROVA OPERACIONAL, MODELOS REPLICÁVEIS E APRENDIZADO DE CAMPO.</h2>
              </div>
              <p>
                Cada iniciativa é apresentada conforme seu estágio real: piloto executado,
                modelo em desenvolvimento ou arquitetura replicável.
              </p>
            </div>

            <div className="cases-grid">
              {cases.map((item) => (
                <article key={item.title}>
                  <div className="case-top">
                    <span>{item.type}</span>
                    <small>{item.note}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <strong>{item.metric}</strong>
                  <p>{item.text}</p>
                  <a href="#diagnostico">Ver aplicação <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="deliverables-section">
          <div className="wrap deliverables-grid">
            <div>
              <div className="kicker">08 / ENTREGAS</div>
              <h2>NÃO É UMA AÇÃO ISOLADA. É UMA OPERAÇÃO DOCUMENTADA.</h2>
              <p className="intro">
                A organização recebe dados, evidências e recomendações para transformar
                uma demanda pontual em política de circularidade tecnológica.
              </p>
            </div>

            <div className="deliverables-list">
              {deliverables.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="roadmap-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">09 / ROADMAP</div>
                <h2>DE PRODUTO OPERACIONAL A INFRAESTRUTURA NACIONAL.</h2>
              </div>
              <p>
                A visão de longo prazo é transformar o Circular OS em uma camada
                de inteligência para ativos, impacto e desenvolvimento territorial.
              </p>
            </div>

            <div className="roadmap">
              {roadmap.map((item, index) => (
                <article key={item.year}>
                  <div className="roadmap-node">
                    <span>{item.year}</span>
                    {index < roadmap.length - 1 && <i />}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="company">
          <div className="wrap company-grid">
            <div>
              <div className="kicker">10 / PARA EMPRESAS</div>
              <h2>SUA EMPRESA JÁ POSSUI PARTE DA INFRAESTRUTURA.</h2>
              <p className="intro">
                Nós transformamos patrimônio tecnológico parado em valor operacional,
                ambiental, social e territorial mensurável.
              </p>
            </div>

            <div className="company-side">
              <div className="audience-grid">
                <article><strong>TI</strong><span>ciclo de vida, inventário e segurança</span></article>
                <article><strong>ESG</strong><span>indicadores e impacto verificável</span></article>
                <article><strong>PATRIMÔNIO</strong><span>controle, destino e evidências</span></article>
                <article><strong>RH</strong><span>formação, voluntariado e trabalho</span></article>
              </div>

              <div className="benefit-panel">
                <div className="benefit-head">
                  <TerminalSquare size={24} />
                  <span>BUSINESS CASE</span>
                </div>
                <div className="benefits">
                  {[
                    "gestão do ciclo de vida dos ativos",
                    "inventário e rastreabilidade",
                    "segurança e governança",
                    "indicadores ESG verificáveis",
                    "impacto territorial mensurável",
                  ].map((item) => (
                    <div key={item}>
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="wrap faq-grid">
            <div>
              <div className="kicker">11 / PERGUNTAS FREQUENTES</div>
              <h2>O QUE SUA ORGANIZAÇÃO PRECISA SABER.</h2>
            </div>
            <div className="faq-list">
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>
                    <span>{item.q}</span>
                    <ChevronDown size={19} />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnostico" className="diagnosis">
          <div className="wrap form-grid">
            <div className="diagnosis-copy">
              <div className="kicker">12 / NEXT STEP</div>
              <h2>SOLICITE UMA AVALIAÇÃO OPERACIONAL.</h2>
              <p className="intro">
                A primeira conversa identifica volume, riscos, áreas envolvidas,
                estágio do inventário e possibilidade de piloto.
              </p>
              <div className="contact-note">
                <ShieldCheck size={22} />
                <span>{EMAIL}</span>
              </div>

              <div className="diagnosis-points">
                <div><Workflow size={18} /><span>mapeamento da situação atual</span></div>
                <div><Sparkles size={18} /><span>identificação de oportunidades</span></div>
                <div><BriefcaseBusiness size={18} /><span>recomendação de piloto e escopo</span></div>
              </div>
            </div>

            <form className="form" action={mailto}>
              <div className="form-head">
                <span>OPERATIONAL_ASSESSMENT.EXE</span>
                <span>READY</span>
              </div>

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
                  <input value={form.role} onChange={(e) => updateField("role", e.target.value)} />
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
                  <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
                </label>
                <label>
                  Quantidade de ativos
                  <input value={form.assets} onChange={(e) => updateField("assets", e.target.value)} />
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
                Solicitar avaliação operacional <ArrowRight size={18} />
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap footer">
          <div className="footer-brand">
            <span className="brand-symbol">
              <span className="brand-circle" />
              <span className="brand-middle" />
              <span className="brand-base" />
            </span>
            <div>
              <strong>PERSEPOLIS</strong>
              <p>Direito ao Futuro. Infraestrutura circular em operação.</p>
            </div>
          </div>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>E-mail</a>
            <a href="https://instagram.com/persepolisescola" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://persepolisescola.com.br" target="_blank" rel="noreferrer">Site institucional</a>
          </div>
        </div>
      </footer>
    </>
  );
}


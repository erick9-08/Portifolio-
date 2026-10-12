"use client";

import { useEffect } from "react";
import { initializePortfolio } from "@/lib/portfolio";

export default function Home() {
  useEffect(() => initializePortfolio(), []);

  return (
    <>

    <a className="skip" href="#projetos">Pular para projetos</a>
    {/* Navegação principal */}
    <header>
      <nav aria-label="Navegação principal">
        <div className="nav-left">
          <a className="pill neutral" href="#projetos">Projetos</a>
          <a className="pill blush" href="#sobre">Sobre mim</a>
        </div>
        <a className="brand" href="#inicio" aria-label="Erick início">e<span>↗</span></a>
        <div className="nav-right">
          <a className="pill outline" href="#contato">Contato</a>
          <a className="pill light" href="https://www.linkedin.com/in/erick-sousa-oliveira-a73147305/" target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </nav>
    </header>
    {/* Conteúdo do portfólio */}
    <main>

      {/* Apresentação */}
      <section className="hero" id="inicio">
        <div className="hero-top">
          <span className="eyebrow"><i></i> Em busca de uma oportunidade júnior</span><span className="hand">oi, eu sou o Erick!</span>
        </div>
        <h1>
          POR TRÁS DE<br />UMA BOA IDEIA,<br />UM <span className="highlight">BOM BACK-END.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Java, Python e vontade de construir.<br />Transformando aprendizado em projetos reais.
          </p>
          <a className="pill primary big" href="#projetos">Explore meus projetos <span>↘</span></a><span className="coordinate">SÃO PAULO, BRASIL<br />23° S · 46° O</span>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sticker java">
            JAVA<br /><span>☕</span>
          </div>
          <div className="code-window">
            <div className="window-top">
              <span>● ● ●</span><span>erick / biblioteca</span><span>↗</span>
            </div>
            <pre><span className="syntax-keyword">public class</span> <span className="syntax-method">Biblioteca</span>{" {\n  "}<span className="syntax-keyword">public</span> Emprestimo <span className="syntax-method">emprestar</span>{"(\n      String usuario, String isbn) {\n    "}<span className="syntax-keyword">return</span>{" service.realizarEmprestimo(\n        usuario, isbn);\n  }\n}"}</pre>
            <div className="window-foot">
              <span><i></i> Java · Programação orientada a objetos</span><span>{"{ }"}</span>
            </div>
          </div>
          <div className="sticker python">
            PYTHON<span>→ dados<br />→ possibilidades</span>
          </div>
          <div className="round-sticker">
            APRENDER<br />CONSTRUIR<br />REPETIR ↻
          </div>
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div>
          JAVA ✳ PYTHON ✳ APIS ✳ DADOS ✳ POO ✳ GIT ✳ JAVA ✳ PYTHON ✳ APIS ✳ DADOS ✳ POO ✳ GIT ✳
        </div>
      </div>

      {/* Projetos selecionados */}
      <section className="projects section" id="projetos">
        <div className="section-head">
          <span className="eyebrow">01 / CÓDIGO EM PRÁTICA</span>
          <h2>
            Menos só teoria.<br /><span className="serif">Mais mãos no código.</span>
          </h2>
          <p>
            Projetos de estudo que mostram como penso,<br />organizo e construo minhas soluções.
          </p>
        </div>
        <article className="project feature">
          <div className="project-visual library">
            <div className="mini-label">
              PROJETO JAVA / 01
            </div>
            <div className="book b1">
              JAVA<br /><small>orientação<br />a objetos</small>
            </div>
            <div className="book b2">
              BIBLIO<br />TECA<span>↗</span>
            </div>
            <div className="floating-label">
              livro → empréstimo → devolução
            </div>
            <div className="mini-terminal">
              <span>GET /api/livros/disponiveis</span><br /><b>200</b> application/json
            </div>
          </div>
          <div className="project-content">
            <span className="eyebrow">BACK-END · JAVA</span>
            <h3>
              Uma biblioteca.<br />Muitas regras<br />de negócio.
            </h3>
            <p>
              Gerenciamento de livros, usuários, empréstimos e devoluções. Uma aplicação com modelos, serviços e repositórios separados e uma API HTTP em Java.
            </p>
            <ul>
              <li>
                Rotas GET e POST com respostas JSON
              </li>
              <li>
                Coleções e exceções de negócio
              </li>
              <li>
                Persistência em arquivos de texto
              </li>
            </ul>
            <div className="tags">
              <span>Java</span><span>POO</span><span>HTTP / JSON</span>
            </div>
            <a className="text-link" href="https://github.com/erick9-08/Sistema-de-biblioteca" target="_blank" rel="noopener">Explore o repositório <span>↗</span></a>
          </div>
        </article>
        <div className="project-grid">
          <article className="project secondary">
            <div className="project-visual etl">
              <span className="mini-label">PROJETO PYTHON / 02</span>
              <div className="data-flow">
                <span>CSV<br /><small>extrair</small></span><b>→</b><span>{"{ }"}<br /><small>transformar</small></span><b>→</b><span>CSV<br /><small>carregar</small></span>
              </div>
              <span className="hand">dados com um novo destino.</span>
            </div>
            <div className="project-content">
              <span className="eyebrow">DADOS · PYTHON</span>
              <h3>
                ETL Lab
              </h3>
              <p>
                Extração de listas e arquivos CSV, transformação em mensagens personalizadas e exportação dos resultados com pandas.
              </p>
              <div className="tags">
                <span>Python</span><span>pandas</span><span>ETL</span>
              </div>
              <a className="text-link" href="https://github.com/erick9-08/notebook-completo-em-Python" target="_blank" rel="noopener">Ver código <span>↗</span></a>
            </div>
          </article>
          <article className="project secondary">
            <div className="project-visual web">
              <span className="mini-label">PROJETO WEB / 03</span>
              <div className="browser-drawing">
                <div>
                  ● ● ● <span>erick.dev</span>
                </div>
                <strong>HELLO,<br />WORLD<span>✳</span></strong>
                <div className="fake-bars">
                  <i></i><i></i><i></i>
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="eyebrow">INTERFACE · TYPESCRIPT</span>
              <h3>
                Portfólio em componentes
              </h3>
              <p>
                Uma experiência responsiva em React e Next.js, com seções de projetos, contato e animações usando Framer Motion.
              </p>
              <div className="tags">
                <span>React</span><span>Next.js</span><span>TypeScript</span>
              </div>
              <a className="text-link" href="https://github.com/erick9-08/Portifolio-" target="_blank" rel="noopener">Ver código <span>↗</span></a>
            </div>
          </article>
        </div>
        <a className="pill primary" href="https://github.com/erick9-08" target="_blank" rel="noopener">Todos os repositórios no GitHub ↗</a>
      </section>

      {/* Demonstração da API */}
      <section className="api-section section" id="api">
        <div>
          <span className="eyebrow">02 / POR DENTRO DO PROJETO</span>
          <h2>
            Uma requisição.<br /><span className="serif">Um próximo passo.</span>
          </h2>
          <p>
            Conheça algumas rotas do sistema de biblioteca.<br />Selecione uma para explorar a resposta.
          </p>
          <span className="demo-note">Demonstração ilustrativa com dados de exemplo.<br />Não se conecta a um servidor real.</span>
        </div>
        <div className="api-demo">
          <div className="window-top">
            <span>API EXPLORER</span><span>JAVA / HTTP</span>
          </div>
          <div className="route-buttons" aria-label="Rotas da demonstração">
            <button className="selected" data-route="livros" aria-pressed="true">GET livros</button><button data-route="stats" aria-pressed="false">GET estatísticas</button><button data-route="login" aria-pressed="false">POST login</button>
          </div>
          <div className="endpoint">
            <span id="method">GET</span><code id="endpoint">/api/livros/disponiveis</code>
          </div>
          <pre id="response" aria-live="polite"></pre>
          <div className="window-foot">
            <span>RESPOSTA DE EXEMPLO</span><span className="response-status">200 OK</span>
          </div>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="about section" id="sobre">
        <span className="eyebrow">03 / ALÉM DO COMMIT</span>
        <div className="about-grid">
          <div>
            <h2>
              Curiosidade<br />como ponto<br />de <span className="serif">partida.</span>
            </h2>
            <div className="about-sticker">
              ERICK<br />SOUSA<br />OLIVEIRA <span>✳</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead">
              Estudante de Análise e Desenvolvimento de Sistemas. Desenvolvedor em formação. Sempre procurando entender o que acontece por trás da interface.
            </p>
            <p>
              Estudo na Faculdade Impacta desde 2024 e estou direcionando minha trajetória para back-end, com Java, Python e dados. Aqui, compartilho projetos que fazem parte desse caminho.
            </p>
            <p>
              Na Foundever, minha experiência com atendimento e rotinas administrativas trouxe prática em comunicação, resolução de problemas e organização. Habilidades que também levo para o código.
            </p>
            <div className="about-facts">
              <div>
                <small>FORMAÇÃO</small><strong>ADS · Faculdade Impacta</strong><span>2024 — em andamento</span>
              </div>
              <div>
                <small>IDIOMAS</small><strong>Inglês avançado</strong><span>Fisk · 2016 — 2019</span>
              </div>
            </div>
            <a className="text-link" href="https://www.linkedin.com/in/erick-sousa-oliveira-a73147305/" target="_blank" rel="noopener">Minha trajetória no LinkedIn ↗</a>
          </div>
        </div>
      </section>
      <section className="stack section">
        <span className="eyebrow">04 / CAIXA DE FERRAMENTAS</span>
        <h2>
          O que uso.<br /><span className="serif">O que estou explorando.</span>
        </h2>
        <div className="stack-list">
          <div>
            <span>01</span>
            <h3>
              Back-end
            </h3>
            <p>
              Java · Python · POO · HTTP · JSON
            </p>
            <b>{"{ }"}</b>
          </div>
          <div>
            <span>02</span>
            <h3>
              Dados
            </h3>
            <p>
              SQL · NoSQL · pandas · ETL · CSV
            </p>
            <b>↔</b>
          </div>
          <div>
            <span>03</span>
            <h3>
              Web
            </h3>
            <p>
              HTML · CSS · JavaScript · React · Next.js · TypeScript · Angular
            </p>
            <b>⌘</b>
          </div>
          <div>
            <span>04</span>
            <h3>
              Workflow
            </h3>
            <p>
              Git · GitHub · Organização · Documentação
            </p>
            <b>↗</b>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="contact section" id="contato">
        <span className="eyebrow">05 / VAMOS CONVERSAR</span>
        <h2>
          Seu próximo<br />dev pode estar<br /><span className="serif">bem aqui.</span><span className="contact-star" aria-hidden="true">✳</span>
        </h2>
        <div className="contact-bottom">
          <p>
            Aberto a oportunidades júnior em back-end.<br />Vamos conversar sobre o seu time?
          </p>
          <a className="pill primary big" href="mailto:oliveiraericksousa@gmail.com">Manda um oi <span>↗</span></a>
        </div>
        <div className="contact-links">
          <a href="mailto:oliveiraericksousa@gmail.com">oliveiraericksousa@gmail.com ↗</a><a href="https://www.linkedin.com/in/erick-sousa-oliveira-a73147305/" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://github.com/erick9-08" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </section>
    </main>
    {/* Rodapé */}
    <footer>
      <a className="brand" href="#inicio" aria-label="Voltar ao início">e<span>↗</span></a><span>Erick Sousa Oliveira © 2026</span><a href="#inicio">De volta ao topo ↑</a>
    </footer>
    
  
    </>
  );
}

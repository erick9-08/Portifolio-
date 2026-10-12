// Dados ilustrativos. A demonstração não faz chamadas a um servidor real.
const routes = {
  livros: {
    method: 'GET',
    path: '/api/livros/disponiveis',
    body: [
      {
        titulo: 'Effective Java',
        autor: 'Joshua Bloch',
        ano: 2017,
        isbn: '9780134685991',
        disponivel: true,
        quantidadeEmprestimos: 0,
      },
    ],
  },
  stats: {
    method: 'GET',
    path: '/api/relatorios/stats',
    body: {
      totalLivros: 4,
      livrosDisponiveis: 3,
      livrosEmprestados: 1,
      totalUsuarios: 2,
      emprestimosAtrasados: 0,
    },
  },
  login: {
    method: 'POST',
    path: '/api/auth/login',
    body: {
      nome: 'Usuário de exemplo',
      id: 'u1',
      tipo: 'USUARIO',
    },
  },
};


// Inicialização com cleanup para navegação e React Strict Mode.
export function initializePortfolio() {
  const buttons = [...document.querySelectorAll('[data-route]')];
  const cleanups = [];

  function showRoute(key) {
    const route = routes[key];
    if (!route) return;

    document.querySelector('#method').textContent = route.method;
    document.querySelector('#endpoint').textContent = route.path;
    document.querySelector('#response').textContent = JSON.stringify(route.body, null, 2);

    buttons.forEach((button) => {
      const selected = button.dataset.route === key;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  buttons.forEach((button) => {
    const handleClick = () => showRoute(button.dataset.route);
    button.addEventListener('click', handleClick);
    cleanups.push(() => button.removeEventListener('click', handleClick));
  });

  showRoute('livros');

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let observer;
  const elements = document.querySelectorAll('.project, .about-copy, .stack-list > div');

  if ('IntersectionObserver' in window && !reducedMotion) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach((element) => {
      element.classList.add('reveal', 'pending');
      observer.observe(element);
    });
  }

  return () => {
    cleanups.forEach((cleanup) => cleanup());
    observer?.disconnect();
    elements.forEach((element) => element.classList.remove('pending'));
  };
}

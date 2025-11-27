document.addEventListener('DOMContentLoaded', function() {
    // Elementos das telas principais
    const startButton = document.getElementById('start-btn');
    const backButton = document.getElementById('back-btn');
    const primeiraTela = document.getElementById('primeira-tela');
    const loginTela = document.getElementById('login-tela');
    const opcoesTela = document.getElementById('opcoes-tela');
    const cinemaTela = document.getElementById('cinema-tela');
    const karaokeTela = document.getElementById('karaoke-tela');
    const jogosTela = document.getElementById('jogos-tela');
    const comidasTela = document.getElementById('comidas-tela');
    const pontosTela = document.getElementById('pontos-tela');
    const perfilTela = document.getElementById('perfil-tela');
    
    // Novas telas de detalhes
    const cinemaDetalhesTela = document.getElementById('cinema-detalhes-tela');
    const karaokePlaylistTela = document.getElementById('karaoke-playlist-tela');
    const jogoFliperamaTela = document.getElementById('jogo-fliperama-tela');
    const comidasPedidoTela = document.getElementById('comidas-pedido-tela');
    
    // Elementos de conteúdo dinâmico
    const cinemaGeneroTitulo = document.getElementById('cinema-genero-titulo');
    const cinemaGeneroSubtitulo = document.getElementById('cinema-genero-subtitulo');
    const sessoesContainer = document.getElementById('sessoes-container');
    
    const karaokeEstiloTitulo = document.getElementById('karaoke-estilo-titulo');
    const karaokeEstiloSubtitulo = document.getElementById('karaoke-estilo-subtitulo');
    const playlistContainer = document.getElementById('playlist-container');
    
    const jogosTipoTitulo = document.getElementById('jogos-tipo-titulo');
    const jogosTipoSubtitulo = document.getElementById('jogos-tipo-subtitulo');
    const jogosContainer = document.getElementById('jogos-container');
    
    // Formulários e botões
    const loginForm = document.querySelector('.login-form');
    const opcoesBackBtn = document.getElementById('opcoes-back-btn');
    const opcaoCards = document.querySelectorAll('.opcao-card');
    const categoriaBackBtns = document.querySelectorAll('.categoria-back-btn');
    
    // Variáveis para estado
    let carrinho = [];
    let totalCarrinho = 0;
    let categoriaSelecionada = {
        cinema: '',
        karaoke: '',
        jogos: ''
    };

    // ===== DADOS DOS CONTEÚDOS =====
    
    const filmesPorGenero = {
        acao: {
            titulo: "💥 AÇÃO E AVENTURA",
            subtitulo: "Filmes cheios de adrenalina e emoção",
            filmes: [
                {
                    titulo: "MISSÃO IMPOSSÍVEL",
                    duracao: "2h 28min",
                    classificacao: "14 anos • Ação/Espionagem",
                    descricao: "Ethan Hunt em mais uma missão impossível",
                    horarios: ["14:00", "16:30", "19:00", "21:30"]
                },
                {
                    titulo: "VELOZES E FURIOSOS 10",
                    duracao: "2h 21min",
                    classificacao: "12 anos • Ação/Corrida",
                    descricao: "A família está de volta nas ruas",
                    horarios: ["15:00", "17:30", "20:00", "22:30"]
                }
            ]
        },
        comedia: {
            titulo: "😂 COMÉDIA",
            subtitulo: "Risadas garantidas para toda família",
            filmes: [
                {
                    titulo: "AS BRANQUELAS",
                    duracao: "1h 49min",
                    classificacao: "12 anos • Comédia",
                    descricao: "Dois agentes se disfarçam de socialites",
                    horarios: ["14:00", "16:00", "18:00", "20:00"]
                },
                {
                    titulo: "SE BEBER, NÃO CASE",
                    duracao: "1h 40min",
                    classificacao: "14 anos • Comédia",
                    descricao: "Uma festa de despedida de solteiro épica",
                    horarios: ["15:30", "17:30", "19:30", "21:30"]
                }
            ]
        },
        terror: {
            titulo: "👻 TERROR",
            subtitulo: "Prepare-se para muitos sustos",
            filmes: [
                {
                    titulo: "O CHAMADO",
                    duracao: "1h 55min",
                    classificacao: "16 anos • Terror",
                    descricao: "Uma fita amaldiçoada traz morte em 7 dias",
                    horarios: ["19:00", "21:00", "23:00"]
                },
                {
                    titulo: "INVOCAÇÃO DO MAL",
                    duracao: "1h 52min",
                    classificacao: "14 anos • Terror",
                    descricao: "Baseado em casos reais de paranormal",
                    horarios: ["18:30", "20:30", "22:30"]
                }
            ]
        },
        romance: {
            titulo: "💖 ROMANCE",
            subtitulo: "Histórias de amor inesquecíveis",
            filmes: [
                {
                    titulo: "DIÁRIO DE UMA PAIXÃO",
                    duracao: "2h 03min",
                    classificacao: "12 anos • Romance/Drama",
                    descricao: "Um amor que atravessa décadas",
                    horarios: ["14:00", "16:30", "19:00"]
                },
                {
                    titulo: "A PROPOSTA",
                    duracao: "1h 48min",
                    classificacao: "12 anos • Romance/Comédia",
                    descricao: "Um chefe e sua assistente fingem ser noivos",
                    horarios: ["15:00", "17:30", "20:00"]
                }
            ]
        }
    };

    const musicasPorEstilo = {
        pop: {
            titulo: "🎵 POP INTERNACIONAL",
            subtitulo: "Os maiores sucessos mundiais",
            musicas: [
                {
                    titulo: "Blinding Lights",
                    artista: "The Weeknd",
                    genero: "Pop • 2020",
                    duracao: "3:20",
                    dificuldade: "Médio"
                },
                {
                    titulo: "Levitating",
                    artista: "Dua Lipa",
                    genero: "Pop • 2020",
                    duracao: "3:23",
                    dificuldade: "Fácil"
                }
            ]
        },
        rock: {
            titulo: "🎸 ROCK CLÁSSICO",
            subtitulo: "Os ícones do rock mundial",
            musicas: [
                {
                    titulo: "Bohemian Rhapsody",
                    artista: "Queen",
                    genero: "Rock • 1975",
                    duracao: "5:55",
                    dificuldade: "Difícil"
                },
                {
                    titulo: "Sweet Child O' Mine",
                    artista: "Guns N' Roses",
                    genero: "Rock • 1987",
                    duracao: "5:03",
                    dificuldade: "Médio"
                }
            ]
        },
        mpb: {
            titulo: "🎹 MPB & SAMBA",
            subtitulo: "A essência da música brasileira",
            musicas: [
                {
                    titulo: "Cheia de Manias",
                    artista: "Raça Negra",
                    genero: "Samba • 1990",
                    duracao: "4:15",
                    dificuldade: "Fácil"
                },
                {
                    titulo: "Oceano",
                    artista: "Djavan",
                    genero: "MPB • 1989",
                    duracao: "3:54",
                    dificuldade: "Difícil"
                }
            ]
        },
        sertanejo: {
            titulo: "🎤 SERTANEJO",
            subtitulo: "Os sucessos do country brasileiro",
            musicas: [
                {
                    titulo: "Evidências",
                    artista: "Chitãozinho & Xororó",
                    genero: "Sertanejo • 1990",
                    duracao: "4:40",
                    dificuldade: "Médio"
                },
                {
                    titulo: "Ai Se Eu Te Pego",
                    artista: "Michel Teló",
                    genero: "Sertanejo • 2011",
                    duracao: "2:46",
                    dificuldade: "Fácil"
                }
            ]
        }
    };

    const jogosPorTipo = {
        fliperama: {
            titulo: "🕹️ FLIPERAMA",
            subtitulo: "Os clássicos dos arcades",
            jogos: [
                {
                    titulo: "SPACE INVADERS",
                    descricao: "Clássico dos arcades - 1978",
                    icone: "👾",
                    dificuldade: "Médio",
                    tempo: "5min",
                    jogadores: "1",
                    categoria: "Clássico Atemporal"
                },
                {
                    titulo: "PAC-MAN",
                    descricao: "Come fantasmas - 1980",
                    icone: "🍒",
                    dificuldade: "Fácil",
                    tempo: "3min",
                    jogadores: "1",
                    categoria: "Labirinto"
                }
            ]
        },
        dardos: {
            titulo: "🎯 DARDOS",
            subtitulo: "Precisão e mira",
            jogos: [
                {
                    titulo: "DART CHAMPION",
                    descricao: "Dardos eletrônicos",
                    icone: "🎯",
                    dificuldade: "Fácil",
                    tempo: "3min",
                    jogadores: "1-4",
                    categoria: "Precisão"
                },
                {
                    titulo: "BULLSEYE MASTER",
                    descricao: "Acerto no alvo",
                    icone: "🎯",
                    dificuldade: "Médio",
                    tempo: "5min",
                    jogadores: "1-2",
                    categoria: "Pontaria"
                }
            ]
        },
        sinuca: {
            titulo: "🎱 SINUCA",
            subtitulo: "Estratégia e habilidade",
            jogos: [
                {
                    titulo: "POOL MASTER",
                    descricao: "Sinuca americana",
                    icone: "🎱",
                    dificuldade: "Médio",
                    tempo: "6min",
                    jogadores: "1-2",
                    categoria: "Estratégia"
                },
                {
                    titulo: "8-BALL CHALLENGE",
                    descricao: "Bola 8 profissional",
                    icone: "🎱",
                    dificuldade: "Difícil",
                    tempo: "8min",
                    jogadores: "1-2",
                    categoria: "Habilidade"
                }
            ]
        },
        mesa: {
            titulo: "🎲 JOGOS DE MESA",
            subtitulo: "Tabuleiro e cartas",
            jogos: [
                {
                    titulo: "POKER NIGHT",
                    descricao: "Poker Texas Hold'em",
                    icone: "🃏",
                    dificuldade: "Médio",
                    tempo: "15min",
                    jogadores: "2-6",
                    categoria: "Cartas"
                },
                {
                    titulo: "DAMAS CHINESAS",
                    descricao: "Estratégia clássica",
                    icone: "⚫",
                    dificuldade: "Fácil",
                    tempo: "10min",
                    jogadores: "2-4",
                    categoria: "Tabuleiro"
                }
            ]
        }
    };

    // ===== FUNÇÃO PRINCIPAL DE NAVEGAÇÃO =====
    
    function showScreen(screenId) {
        console.log('Tentando mostrar:', screenId);
        
        // Esconde TODAS as telas
        document.querySelectorAll('div[id$="-tela"]').forEach(screen => {
            screen.style.display = 'none';
            screen.classList.remove('visible');
        });
        
        // Mostra apenas a tela específica
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            if (screenId === 'primeira-tela') {
                targetScreen.style.display = 'flex';
            } else {
                targetScreen.style.display = 'block';
            }
            setTimeout(() => {
                targetScreen.classList.add('visible');
                console.log('Tela mostrada:', screenId);
            }, 50);
        }
    }

    // ===== FUNÇÕES DE NAVEGAÇÃO =====
    
    function mostrarLoginTela() {
        showScreen('login-tela');
    }
    
    function voltarPrimeiraTela() {
        showScreen('primeira-tela');
    }
    
    function mostrarOpcoesTela() {
        showScreen('opcoes-tela');
    }
    
    function voltarLoginTela() {
        showScreen('login-tela');
    }

    function mostrarCinemaTela() {
        showScreen('cinema-tela');
    }
    
    function mostrarKaraokeTela() {
        showScreen('karaoke-tela');
    }
    
    function mostrarJogosTela() {
        showScreen('jogos-tela');
    }
    
    function mostrarComidasTela() {
        showScreen('comidas-tela');
    }

    function mostrarPontosTela() {
        showScreen('pontos-tela');
    }

    function mostrarPerfilTela() {
        showScreen('perfil-tela');
    }

    // ===== FUNÇÕES PARA CARREGAR CONTEÚDO DINÂMICO =====
    
    function carregarFilmesPorGenero(genero) {
        const dados = filmesPorGenero[genero];
        if (!dados) return;
        
        categoriaSelecionada.cinema = genero;
        cinemaGeneroTitulo.textContent = dados.titulo;
        cinemaGeneroSubtitulo.textContent = dados.subtitulo;
        
        sessoesContainer.innerHTML = dados.filmes.map(filme => `
            <div class="sessao-card">
                <div class="filme-info">
                    <div class="filme-poster-detalhe">${genero === 'acao' ? '💥' : genero === 'comedia' ? '😂' : genero === 'terror' ? '👻' : '💖'}</div>
                    <div class="filme-detalhes">
                        <h3>${filme.titulo}</h3>
                        <p>Duração: ${filme.duracao}</p>
                        <p>${filme.classificacao}</p>
                        <p>${filme.descricao}</p>
                    </div>
                </div>
                <div class="horarios">
                    ${filme.horarios.map(horario => 
                        `<button class="horario-btn">${horario}</button>`
                    ).join('')}
                </div>
            </div>
        `).join('');
        
        showScreen('cinema-detalhes-tela');
    }
    
    function carregarMusicasPorEstilo(estilo) {
        const dados = musicasPorEstilo[estilo];
        if (!dados) return;
        
        categoriaSelecionada.karaoke = estilo;
        karaokeEstiloTitulo.textContent = dados.titulo;
        karaokeEstiloSubtitulo.textContent = dados.subtitulo;
        
        playlistContainer.innerHTML = dados.musicas.map(musica => `
            <div class="musica-card">
                <div class="musica-info">
                    <div class="musica-icon">${estilo === 'pop' ? '🎵' : estilo === 'rock' ? '🎸' : estilo === 'mpb' ? '🎹' : '🎤'}</div>
                    <div class="musica-detalhes">
                        <h3>${musica.titulo}</h3>
                        <p>${musica.artista} • ${musica.genero}</p>
                        <p>Duração: ${musica.duracao} • Dificuldade: ${musica.dificuldade}</p>
                    </div>
                </div>
                <button class="cantar-btn">CANTAR</button>
            </div>
        `).join('');
        
        showScreen('karaoke-playlist-tela');
    }
    
    function carregarJogosPorTipo(tipo) {
        const dados = jogosPorTipo[tipo];
        if (!dados) return;
        
        categoriaSelecionada.jogos = tipo;
        jogosTipoTitulo.textContent = dados.titulo;
        jogosTipoSubtitulo.textContent = dados.subtitulo;
        
        jogosContainer.innerHTML = dados.jogos.map(jogo => `
            <div class="jogo-detalhe-card">
                <div class="jogo-icon-grande">${jogo.icone}</div>
                <h3>${jogo.titulo}</h3>
                <p>${jogo.descricao}</p>
                <div class="jogo-info">
                    <p>🎯 Dificuldade: ${jogo.dificuldade}</p>
                    <p>⏱️ Tempo: ${jogo.tempo}</p>
                    <p>👥 ${jogo.jogadores} Jogador(es)</p>
                    <p>⭐ ${jogo.categoria}</p>
                </div>
                <button class="jogar-btn">JOGAR</button>
            </div>
        `).join('');
        
        showScreen('jogo-fliperama-tela');
    }

    function mostrarComidasPedidoTela() {
        showScreen('comidas-pedido-tela');
    }

    // ===== FUNÇÕES DE VOLTAR =====
    
    function voltarOpcoesTela() {
        showScreen('opcoes-tela');
    }
    
    function voltarParaCategoria(telaOrigem) {
        if (telaOrigem === 'cinema') showScreen('cinema-tela');
        else if (telaOrigem === 'karaoke') showScreen('karaoke-tela');
        else if (telaOrigem === 'jogos') showScreen('jogos-tela');
        else if (telaOrigem === 'comidas') showScreen('comidas-tela');
    }

    // ===== FUNÇÕES DO CARRINHO =====
    
    function adicionarAoCarrinho(item, preco) {
        const itemExistente = carrinho.find(i => i.nome === item);
        
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({
                nome: item,
                preco: preco,
                quantidade: 1
            });
        }
        
        atualizarCarrinho();
    }
    
    function atualizarCarrinho() {
        const carrinhoItens = document.querySelector('.carrinho-itens');
        const carrinhoTotal = document.querySelector('.carrinho-total strong');
        
        if (!carrinhoItens || !carrinhoTotal) return;
        
        totalCarrinho = carrinho.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
        
        if (carrinho.length === 0) {
            carrinhoItens.innerHTML = '<p>Nenhum item adicionado</p>';
        } else {
            carrinhoItens.innerHTML = carrinho.map(item => `
                <div class="item-carrinho">
                    ${item.nome} - ${item.quantidade}x - R$ ${(item.preco * item.quantidade).toFixed(2)}
                </div>
            `).join('');
        }
        
        carrinhoTotal.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    }
    
    function finalizarPedido() {
        if (carrinho.length === 0) {
            alert('Adicione itens ao pedido antes de finalizar!');
            return;
        }
        
        alert('Pedido realizado com sucesso! 🎉\nTotal: R$ ' + totalCarrinho.toFixed(2));
        carrinho = [];
        totalCarrinho = 0;
        atualizarCarrinho();
    }

    // ===== PROCESSAR LOGIN =====
    
    function processarLogin(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        if (!email || !senha) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        console.log('Login realizado:', { email: email });
        mostrarOpcoesTela();
    }

    // ===== EVENT LISTENERS PRINCIPAIS =====
    
    // Navegação principal
    if (startButton) {
        startButton.addEventListener('click', mostrarLoginTela);
    }
    
    if (backButton) {
        backButton.addEventListener('click', voltarPrimeiraTela);
    }
    
    if (opcoesBackBtn) {
        opcoesBackBtn.addEventListener('click', voltarLoginTela);
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', processarLogin);
    }
    
    // Cards de opção principal
    opcaoCards.forEach(card => {
        card.addEventListener('click', function() {
            const opcao = this.getAttribute('data-opcao');
            console.log('Opção clicada:', opcao);
            
            if (opcao === 'cinema') mostrarCinemaTela();
            else if (opcao === 'karaoke') mostrarKaraokeTela();
            else if (opcao === 'jogos') mostrarJogosTela();
            else if (opcao === 'comidas') mostrarComidasTela();
            else if (opcao === 'pontos') mostrarPontosTela();
            else if (opcao === 'perfil') mostrarPerfilTela();
        });
    });
    
    // Botões voltar das categorias
    categoriaBackBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const voltarPara = this.getAttribute('data-voltar');
            console.log('Voltando para:', voltarPara);
            
            if (voltarPara === 'opcoes') {
                voltarOpcoesTela();
            } else {
                voltarParaCategoria(voltarPara);
            }
        });
    });
    
    // ===== EVENT DELEGATION PARA ELEMENTOS DINÂMICOS =====
    
    document.addEventListener('click', function(e) {
        console.log('Elemento clicado:', e.target);
        
        // Cinema - navegar para detalhes por gênero
        if (e.target.closest('.filme-card')) {
            const genero = e.target.closest('.filme-card').getAttribute('data-genero');
            console.log('Gênero selecionado:', genero);
            carregarFilmesPorGenero(genero);
        }
        
        // Karaokê - navegar para playlist por estilo
        if (e.target.closest('.karaoke-card')) {
            const estilo = e.target.closest('.karaoke-card').getAttribute('data-estilo');
            console.log('Estilo selecionado:', estilo);
            carregarMusicasPorEstilo(estilo);
        }
        
        // Jogos - navegar para jogos por tipo
        if (e.target.closest('.jogo-card')) {
            const tipo = e.target.closest('.jogo-card').getAttribute('data-tipo');
            console.log('Tipo selecionado:', tipo);
            carregarJogosPorTipo(tipo);
        }
        
        // Comidas - navegar para pedido
        if (e.target.closest('.comida-card')) {
            console.log('Abrindo tela de pedidos');
            mostrarComidasPedidoTela();
        }
        
        // Botões de horário no cinema
        if (e.target.classList.contains('horario-btn')) {
            alert('Sessão reservada com sucesso! 🎬\nHorário: ' + e.target.textContent);
        }
        
        // Botões cantar no karaokê
        if (e.target.classList.contains('cantar-btn')) {
            const musicaCard = e.target.closest('.musica-card');
            if (musicaCard) {
                const musica = musicaCard.querySelector('h3').textContent;
                alert('🎤 Agora cantando: ' + musica + '\nBoa sorte! 🎶');
            }
        }
        
        // Botões jogar no fliperama
        if (e.target.classList.contains('jogar-btn')) {
            const jogoCard = e.target.closest('.jogo-detalhe-card');
            if (jogoCard) {
                const jogo = jogoCard.querySelector('h3').textContent;
                alert('🎮 Iniciando: ' + jogo + '\nDivirta-se! 🕹️');
            }
        }
        
        // Controles de quantidade no pedido
        if (e.target.classList.contains('quantidade-btn')) {
            const parent = e.target.parentElement;
            const quantidadeSpan = parent.querySelector('.quantidade');
            if (quantidadeSpan) {
                let quantidade = parseInt(quantidadeSpan.textContent) || 0;
                
                if (e.target.textContent === '+') {
                    quantidade++;
                } else if (e.target.textContent === '-' && quantidade > 0) {
                    quantidade--;
                }
                
                quantidadeSpan.textContent = quantidade;
            }
        }
        
        // Botão adicionar ao carrinho
        if (e.target.classList.contains('adicionar-btn')) {
            const itemCard = e.target.closest('.item-card');
            if (itemCard) {
                const nome = itemCard.querySelector('h3').textContent;
                const precoTexto = itemCard.querySelector('.item-preco').textContent;
                const preco = parseFloat(precoTexto.replace('R$ ', '').replace(',', '.'));
                const quantidade = parseInt(itemCard.querySelector('.quantidade').textContent) || 0;
                
                if (quantidade > 0) {
                    for (let i = 0; i < quantidade; i++) {
                        adicionarAoCarrinho(nome, preco);
                    }
                    alert(`${quantidade}x ${nome} adicionado(s) ao carrinho! 🛒`);
                    itemCard.querySelector('.quantidade').textContent = '0';
                } else {
                    alert('Selecione a quantidade primeiro!');
                }
            }
        }
        
        // Finalizar pedido
        if (e.target.classList.contains('finalizar-pedido-btn')) {
            finalizarPedido();
        }
        
        // Botões de troca na tela de pontos
        if (e.target.classList.contains('trocar-btn')) {
            if (!e.target.disabled) {
                const premioCard = e.target.closest('.premio-card');
                if (premioCard) {
                    const premio = premioCard.querySelector('h3').textContent;
                    const pontos = premioCard.querySelector('.premio-pontos').textContent;
                    alert(`🎉 Parabéns! Você trocou ${pontos} por: ${premio}`);
                }
            }
        }

        // Botões na tela de perfil
        if (e.target.classList.contains('editar-avatar-btn')) {
            alert('🎨 Funcionalidade de editar avatar em desenvolvimento!');
        }
        
        if (e.target.classList.contains('editar-btn')) {
            alert('✏️ Funcionalidade de editar perfil em desenvolvimento!');
        }
        
        if (e.target.classList.contains('sair-btn')) {
            if (confirm('Tem certeza que deseja sair?')) {
                voltarLoginTela();
            }
        }
    });
    
    // ===== NAVEGAÇÃO POR TECLADO =====
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const telasVisiveis = Array.from(document.querySelectorAll('div[id$="-tela"].visible'));
            if (telasVisiveis.length > 0) {
                const telaAtual = telasVisiveis[0].id;
                
                if (telaAtual === 'login-tela') voltarPrimeiraTela();
                else if (telaAtual === 'opcoes-tela') voltarLoginTela();
                else if (telaAtual.includes('detalhes') || telaAtual.includes('playlist') || telaAtual.includes('fliperama') || telaAtual.includes('pedido')) {
                    const categoria = telaAtual.split('-')[0];
                    voltarParaCategoria(categoria);
                }
                else voltarOpcoesTela();
            }
        }
        
        // Enter na primeira tela vai para tela de login
        if (e.key === 'Enter' && primeiraTela.classList.contains('visible')) {
            mostrarLoginTela();
        }
    });
    
    // ===== INICIALIZAÇÃO =====
    
    // Foco no primeiro campo quando a tela de login abrir
    if (startButton) {
        startButton.addEventListener('click', function() {
            setTimeout(() => {
                const emailInput = document.getElementById('email');
                if (emailInput) {
                    emailInput.focus();
                }
            }, 600);
        });
    }
    
    // Inicializar carrinho vazio
    atualizarCarrinho();
    
    // Mostrar primeira tela inicialmente
    console.log('Iniciando aplicação...');
    showScreen('primeira-tela');
});
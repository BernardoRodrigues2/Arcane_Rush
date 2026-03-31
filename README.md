# 🎮 Arcane Rush

## 1. Identificação do Projeto

**Título do Projeto:** Arcane Rush  
**Desenvolvedor:** Bernardo Rodrigues  

**Logotipo / Banner:**  

<img width="1023" height="244" alt="tituloSite" src="https://github.com/user-attachments/assets/4a0741bc-5122-4fd8-ba3d-475f4ea9ec50" />

---

# 2. Visão Geral do Sistema

## 📌 Descrição
Arcane Rush é um jogo arcade de sobrevivência desenvolvido com HTML5 Canvas, JavaScript e CSS3. O jogador controla um mago que deve sobreviver desviando de fantasmas e coletando grimórios para aumentar sua pontuação.

## 🎯 Objetivo
O objetivo do jogo é sobreviver o máximo possível coletando grimórios e evitando os fantasmas, enquanto a dificuldade aumenta a cada fase.

## 🧙 Tema
O jogo possui temática de magia e fantasia. O jogador assume o papel de um mago que precisa sobreviver a criaturas sobrenaturais enquanto coleta grimórios mágicos.

---

# 🎮 Instruções de Jogabilidade

### Controles
- W ou ↑ → mover para cima  
- S ou ↓ → mover para baixo  
- ENTER → reiniciar jogo  

### Elementos do jogo
- Grimórios → aumentam pontuação  
- Fantasmas → retiram vidas  
- Jogador inicia com 5 vidas  

---

# ⚙️ Especificações Técnicas

- Sistema de fases progressivas  
- Aumento da velocidade dos inimigos por fase  
- Sistema de vidas  
- Sistema de pontuação  
- Sons do jogo  
- Mudança de fundo por fase  
- Tela de vitória  
- Tela de game over  

### Progressão de Fases

- Fase 1 → início  
- Fase 2 → 20 pontos  
- Fase 3 → 40 pontos  
- Fase 4 → 100 pontos  
- Fase 5 → 150 pontos  

Vitória ao atingir **300 pontos**

---

# 📜 Regras de Negócio

RN01 — Dificuldade Progressiva  
A cada fase a velocidade dos fantasmas aumenta.

RN02 — Troca de Cenário  
Cada fase apresenta um fundo diferente.

RN03 — Vitória  
O jogador vence ao atingir 300 pontos com pelo menos 1 vida.

RN04 — Derrota  
O jogador perde quando suas vidas chegam a zero.

RN05 — Sistema de Pontuação  
O jogador ganha pontos ao coletar grimórios.

RN06 — Sistema de Vidas  
O jogador inicia com 5 vidas e perde ao colidir com inimigos.

RN07 — Progressão Automática  
As fases mudam automaticamente conforme a pontuação.

---

# 📋 Requisitos Funcionais

RF01 — Movimentação  
O jogador pode se mover verticalmente.

RF02 — Sistema de Vidas  
O jogador perde vidas ao colidir com fantasmas.

RF03 — Pontuação  
O jogo possui sistema de pontuação.

RF04 — Coletáveis  
Grimórios aumentam a pontuação.

RF05 — Progressão de Fases  
O jogo possui múltiplas fases com dificuldade crescente.

RF06 — Telas  
O jogo possui tela de vitória e game over.

---

# 🧠 Funções do Sistema

### main()
Responsável por iniciar o loop principal do jogo.

### desenha()
Desenha todos os elementos na tela:
- jogador  
- inimigos  
- fundo  
- pontuação  
- vidas  

### atualiza()
Atualiza a lógica do jogo:
- movimentação  
- fases  
- posições  

### colisao()
Verifica colisões entre jogador, inimigos e coletáveis.

### pontuacao()
Atualiza a pontuação ao coletar grimórios.

### ver_fase()
Controla a mudança de fases do jogo.

### game_over()
Verifica se o jogador perdeu todas as vidas.

---

# 👨‍💻 Créditos

**Desenvolvedor:**  
Bernardo Rodrigues  

**Product Owner:**  
Professor Carlos Roberto da Silva Filho  

---

# 🔗 Link de Produção

https://arcane-rush-nu.vercel.app/index.html

---

# 3. Instruções de Instalação e Execução

### 1. Clonar repositório

```
git clone https://github.com/BernardoRodrigues2/Arcane_Rush.git
```

### 2. Entrar na pasta

```
cd Arcane_Rush
```

### 3. Executar

Abrir o arquivo **index.html** no navegador  
ou usar **Live Server** no VS Code

---

# 🛠 Tecnologias Utilizadas

- HTML5 Canvas  
- JavaScript  
- CSS3  

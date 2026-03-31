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

RN04 — Manual De Instruções

Tela Explicativa de como o Usuario joga o jogo.

---

# 📋 Requisitos Funcionais

RF01 — Movimentação  
O jogador pode se mover verticalmente.

RF02 — Sistema de Vidas  
O jogador perde vidas ao colidir com fantasmas.

RF03 — Pontuação  
O jogo possui sistema de pontuação quando o jogador coleta Grimórios.

RF04 — Coletáveis  
Grimórios aumentam a pontuação.

RF05 — Progressão de Fases  
O jogo possui múltiplas fases com dificuldade crescente conforme o jogador ganha pontos.

RF06 — Tela "Sobre"

O jogo possui uma tela "sobre" falando sobre o desenvolvedor e sobre o Product Owner.

---

# 📋 Requisitos Não Funcionais

RNF01 — Tecnologia  
O sistema foi desenvolvido utilizando JavaScript (ES6+), HTML5 Canvas e CSS3, garantindo compatibilidade com navegadores modernos sem necessidade de transpilação adicional.

RNF02 — Portabilidade  
O jogo roda diretamente no navegador utilizando HTML5 Canvas, não sendo necessária instalação de dependências externas.

RNF03 — Usabilidade  
A interface foi projetada para execução em computadores com resolução 1920 x 1080 px, garantindo que todos os elementos do jogo permaneçam visíveis em tela sem cortes.

RNF04 — Desempenho / Comportamento Temporal  
O jogo mantém atualização contínua da tela para garantir fluidez durante a execução.

---
# 📊 Modelagem e Documentação

## Diagrama de Casos de Uso
Representa as interações do jogador com o sistema.

Ator:
- Jogador

Casos de uso:
- Iniciar jogo  
- Mover personagem  
- Coletar grimório  
- Desviar de inimigos  
- Avançar fase  
- Tela de vitória  
- Tela de derrota  

---

## Diagrama de Classes
O sistema possui uma classe base e classes derivadas.

Classe base:
- Obj

Classes:
- Mage (Jogador)
- Fantasma (Inimigo)
- Grimorio (Coletável)

Herança:
- Mage herda de Obj  
- Fantasma herda de Obj  
- Grimorio herda de Obj  

---

## Diagrama de Sequência
Evento de colisão com inimigo:

Jogador move personagem  
→ Sistema verifica colisão  
→ Colisão com fantasma  
→ Vida do jogador diminui  
→ Sistema verifica vidas  
→ Se vida = 0 → game over

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

# ✅ TODO - Calculadora de Plantas para Stardew Valley

Este documento organiza todas as tarefas necessárias para finalizar o projeto da calculadora de melhor plantio em Stardew Valley com base na data atual do jogo.

---

## 📦 Fase 1: Preparação do Projeto

- [x] Criar projeto Vue (`npm create vue@latest`)
- [x] Configurar estrutura de pastas (`components/`, `data/`, etc.)
- [x] Criar arquivo `plants.json` com dados das plantas
- [x] Achar um jeito de fazer o calculo das tea leaves ou decidir ignorar (ignorar)
- [x] Adicionar campo `harvest_quantity` em cada planta (ex: café = 4)

---

## 🧱 Fase 2: Estrutura da Interface

- [ ] Criar componente de formulário com:
  - [ ] Select da estação (Primavera, Verão, Outono)
  - [ ] Dia atual (1–28)
  - [ ] Ano
- [ ] Criar componente de resultados:
  - [ ] Lista com nome da planta, número de colheitas, lucro total e lucro por dia

---

## 🧠 Fase 3: Lógica de Cálculo

- [ ] Criar função `calculateMaxHarvests(plant, daysRemaining)`
- [ ] Criar função `calculateProfitPerDay(plant, daysRemaining)`
- [ ] Criar função `getValidPlants(plantData, station, currentDay)`:
  - [ ] Filtrar por estação
  - [ ] Calcular dias restantes
  - [ ] Excluir plantas que não colhem ao menos 1 vez
- [ ] Ordenar resultado por maior lucro por dia

---

## 💅 Fase 4: Estilização

- [ ] Estilizar formulário e botões
- [ ] Adicionar tabela ou cards visuais para exibir os resultados
- [ ] Destacar a planta com maior custo-benefício (ex: badge "Melhor opção")

---

## ✅ Fase 5: Testes e Validação

- [ ] Testar entradas variadas (ex: dia 5 da primavera, dia 27 do outono)
- [ ] Validar lógica para plantas com e sem regrow
- [ ] Adicionar mensagens de feedback (ex: "Nenhuma planta disponível")

---

## 🚀 Fase 6: Publicação e Portfólio

- [ ] Criar repositório no GitHub
- [ ] Adicionar `README.md` com:
  - [ ] Descrição do projeto
  - [ ] Print da interface
  - [ ] Instruções de instalação
- [ ] Publicar com GitHub Pages, Vercel ou Netlify
- [ ] Adicionar ao portfólio online

---

## 🌱 Melhorias Futuras (Opcional)

- [ ] Adicionar suporte a transição de estações (ex: milho verão + outono)
- [ ] Considerar fertilizantes (reduzem tempo de crescimento)
- [ ] Interface multilíngue (PT/EN)
- [ ] Mostrar imagens das plantas
- [ ] Modo escuro

---

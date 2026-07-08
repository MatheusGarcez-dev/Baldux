export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  stars: 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sinceramente, eu não esperava que fizesse tanta diferença. A gente perdia tempo toda hora com aquela parte da água, e agora o pessoal já sabe exatamente o que fazer.",
    name: "Camila Rocha",
    role: "Dona de sorveteria · BH",
    stars: 5,
  },
  {
    quote:
      "Comprei sem muita expectativa e me surpreendi. Em poucos dias a equipe já estava usando no automático. Menos correria no pico, isso pra mim valeu.",
    name: "Eduardo Martins",
    role: "Proprietário · rede com 3 lojas",
    stars: 5,
  },
  {
    quote:
      "O que mais me agradou foi a simplicidade. Não é nada complicado de explicar pro time. Chegou, colocou e entrou no ritmo da loja.",
    name: "Larissa Ferreira",
    role: "Supervisora de loja",
    stars: 5,
  },
  {
    quote:
      "A gente sofria no fim de semana, que é quando o movimento explode. Depois do Baldux, aquela etapa parou de virar bagunça. Recomendo de verdade.",
    name: "Rafael Teixeira",
    role: "Sócio · sorveteria familiar",
    stars: 5,
  },
  {
    quote:
      "Parece detalhe, mas no dia a dia pesa. A operação ficou mais limpa e organizada. Cliente até comentou que o ambiente tava diferente.",
    name: "Patrícia Alves",
    role: "Gestora · shopping",
    stars: 4,
  },
  {
    quote:
      "Já tinha olhado outras opções e nada encaixava bem. Com o Baldux foi direto ao ponto. A conversa no WhatsApp foi rápida e a instalação simples.",
    name: "Bruno Souza",
    role: "Gerente de unidade",
    stars: 5,
  },
  {
    quote:
      "Meu time é grande e qualquer mudança normalmente vira confusão. Dessa vez não. Em dois dias todo mundo já estava no ritmo novo.",
    name: "Juliana Campos",
    role: "Operações · 2 unidades",
    stars: 5,
  },
  {
    quote:
      "Vale pelo custo-benefício. Não é barato pra jogar no lixo, mas paga em tranquilidade na rotina. Hoje eu indico pra outros donos também.",
    name: "André Lima",
    role: "Proprietário · interior de SP",
    stars: 4,
  },
];

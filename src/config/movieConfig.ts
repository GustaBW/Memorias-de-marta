/**
 * CONFIGURAÇÃO DO FILME - CINEWORLD+
 * 
 * Vídeo oficial do curta-metragem "Memórias de Marta".
 */

export const YOUTUBE_URL: string = "https://youtu.be/qLA-LJTGMvc";
export const YOUTUBE_VIDEO_ID: string = "qLA-LJTGMvc";
export const VIDEO_URL: string = "https://youtu.be/qLA-LJTGMvc";

export interface MovieDetails {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  synopsisParagraphs: string[];
  fullSynopsis: string;
  type: string;
  duration: string;
  releaseYear: number;
  studio: string;
  institution: string;
  sourceMaterial: string;
  country: string;
  ageRating: string;
  audioLanguage: string;
  subtitles: string[];
  genre: string[];
  aspectRatio: string;
  credits: {
    role: string;
    name: string;
  }[];
  awards: string[];
}

export const MOVIE_DATA: MovieDetails = {
  id: "memorias-de-marta",
  title: "MEMÓRIAS DE MARTA",
  subtitle: "“Algumas lembranças nunca desaparecem.”",
  shortDescription:
    "Após perder o pai ainda na infância, Marta vê sua vida mudar completamente. Ao lado da mãe, enfrenta as dificuldades de uma nova realidade em um cortiço e encontra na leitura e na escrita o poder de transformar seu futuro.",
  synopsisParagraphs: [
    "Após perder o pai ainda na infância, Marta vê sua vida mudar completamente. Ao lado da mãe, ela precisa enfrentar a pobreza e as dificuldades de uma nova realidade em um cortiço, onde descobre as duras diferenças entre as pessoas e os desafios de crescer em meio às incertezas.",
    "Entre perdas, medos e novas amizades, Marta encontra na leitura e na escrita uma forma de compreender o mundo e preservar suas lembranças.",
    "Memórias de Marta é uma história emocionante sobre infância, superação e o poder das palavras, mostrando que, mesmo quando a vida nos tira muito, algumas descobertas podem transformar nosso futuro."
  ],
  fullSynopsis:
    "Após perder o pai ainda na infância, Marta vê sua vida mudar completamente. Ao lado da mãe, ela precisa enfrentar a pobreza e as dificuldades de uma nova realidade em um cortiço, onde descobre as duras diferenças entre as pessoas e os desafios de crescer em meio às incertezas.\n\nEntre perdas, medos e novas amizades, Marta encontra na leitura e na escrita uma forma de compreender o mundo e preservar suas lembranças.\n\nMemórias de Marta é uma história emocionante sobre infância, superação e o poder das palavras, mostrando que, mesmo quando a vida nos tira muito, algumas descobertas podem transformar nosso futuro.",
  type: "Curta-metragem",
  duration: "Curta-metragem",
  releaseYear: 2026,
  studio: "CINEWORLD",
  institution: "Instituto Nossa Senhora Auxiliadora",
  sourceMaterial: "Adaptação livre do romance de Júlia Lopes de Almeida (1889)",
  country: "Brasil",
  ageRating: "Livre",
  audioLanguage: "Português (Brasil)",
  subtitles: ["Português [CC]"],
  genre: ["Drama", "Literatura Brasileira", "Adaptação Histórica"],
  aspectRatio: "16:9 Cinema",
  credits: [
    { role: "Produtora", name: "CINEWORLD" },
    { role: "Obra Original", name: "Romance de Júlia Lopes de Almeida (1889)" },
    { role: "Instituição", name: "Instituto Nossa Senhora Auxiliadora" },
    { role: "Protagonista", name: "Marta" },
    { role: "Adaptação & Realização", name: "Equipe CINEWORLD" }
  ],
  awards: [
    "Adaptação Oficial do Clássico Literário",
    "Produção Original Cineworld"
  ]
};

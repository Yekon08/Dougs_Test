import { Category } from "../../interfaces/categories";

export const mockData: Category[] = [
  {
    id: 6,
    group: {
      id: 6,
      name: "Location, Crédit Bail & Investissement",
      color: "m-pink",
    },
    wording: "A Cession d'une immobilisation (avec TVA)",
    description: "Vente d'une immobilisation de l'entreprise.",
  },
  {
    id: 9,
    group: {
      id: 6,
      name: "Location, Crédit Bail & Investissement",
      color: "m-pink",
    },
    wording: "D Location de matériel",
    description:
      "Contrat de location de votre matériel et redevances contrat clinique. Ne pas utiliser pour la location d'un véhicule.",
  },
  {
    id: 12,
    group: {
      id: 2,
      name: "Frais de fonctionnement",
      color: "m-purple",
    },
    wording: "C Interim",
    description:
      "Dépenses de personnel intérimaire ou personnel détaché d'une autre entreprise.",
  },
  {
    id: 15,
    group: {
      id: 2,
      name: "Frais de fonctionnement",
      color: "m-purple",
    },
    wording: "B Honoraires",
    description:
      "Honoraires versés au comptable, AGA, avocat, frais de recrutement, conseil, frais d'acte et de contentieux, huissier, greffe du tribunal de commerce... Cette catégorie ne doit pas être utilisé pour des rétrocessions ou de la sous-traitance",
  },
];

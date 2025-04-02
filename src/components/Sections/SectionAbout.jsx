import { Section } from "../Sections/Section";
import { Title } from "../UI/Title/Title";
import { Div } from "../UI/About/Div";

export function SectionAbout() {
  return (
    <Section className="h-auto mt-[50px] lg:mt-[100px] relative md:mb-4">
      <Title text="En quelques mots" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-12 px-4 relative z-10 pb-20 md:pb-0">
        <Div
          source="noun-globe-823916.png"
          alt="Réseautage numérique"
          title="RÉSEAUTAGE NUMÉRIQUE"
          content="Faire rayonner votre entreprise sur l'ensemble du réseau humain et
            numérique sur les réseaux sociaux au travers de l'ensemble du
            réseau."
        />
        <Div
          source="noun-globe-823916.png"
          alt="Choix stratégique"
          title="CHOIX STRATÉGIQUE"
          content="C'est un formidable levier pour booster votre entreprise et
            structurer l'ensemble des entreprises qui en font partie."
        />
        <Div
          source="noun-globe-823916.png"
          alt="Partenaires Business"
          title="PARTENAIRES BUSINESS"
          content="Rechercher et découvrir les meilleurs partenaires Business, le
            Wbusiness repose sur le contact humain dont l'entraide est la clé."
        />
        <Div
          source="noun-globe-823916.png"
          alt="Événements réguliers"
          title="DES RENDEZ-VOUS ET ÉVÉNEMENTS RÉGULIERS"
          content="Des événements récurrents pour renforcer votre réseau et rencontrer de nouveaux contacts professionnels."
        />
        <Div
          source="noun-globe-823916.png"
          alt="Opportunités stratégiques"
          title="OPPORTUNITÉS STRATÉGIQUES"
          content="Développez votre entreprise en intégrant un réseau solide qui vous offre des opportunités stratégiques."
        />
        <Div
          source="noun-globe-823916.png"
          alt="Développement professionnel"
          title="DÉVELOPPEMENT PROFESSIONNEL"
          content="Profitez d’un réseau qui favorise votre croissance et vous aide à structurer vos projets."
        />
      </div>
    </Section>
  );
}

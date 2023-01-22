import Header from "../../../components/header";
import Head from 'next/head';
import BesoinAvocat from "../../../components/Besoin-avocat";

export default function HomeDroitTravail() {
    return (
        <>
            <Header></Header>

            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>DROIT DU TRAVAIL</h1>
                </div>
                <img className={"brightness-50 h-[25vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"w-full flex justify-center bg-white py-20"}>
                <div className={"w-5/6 text-justify"}>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>Contrat de travail et relations individuelles</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>Relations collectives et restructurations</h2>
                    <p className={"font-regular  text-gray-700 text-lg mb-6"}>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>Contentieux du travail et du licenciement</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>Droit et contentieux de la sécurité sociale</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>Droit pénal du travail</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.</p>
                    <p className={"font-regular text-gray-800 text-xl mb-6"}>Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).</p>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}

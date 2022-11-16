import Image from "next/image";
import Header from "../../../components/header";
import Link from "next/link";

export default function HomeDroitTravail() {
    return (
        <>
            <Header></Header>
            <div className="bg-gray-500	">
                <div>
                    <Image className="w-full" src="/images/Expertise/homme_serieux_juridique.png" width={10000} height={10000} alt="homme-serieux-juridique-couple-chauve"></Image>
                </div>
                <div>
                    <div className="flex py-5">
                        <div className="m-auto flex flex-col">
                            <h2 className="text-white font-bold text-center">DROIT DU TRAVAIL</h2>
                            <p className="text-white">De la rédaction du contrat de travail à sa rupture et ses éventuelles suites judiciaires, le Cabinet Babeau <b>accompagne, conseille</b> et <b>défend</b> les entreprises.</p>
                            <Link href="/contact" className="btn btn-active btn-accent">Premier Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row bg-white">
                <div className="w-1/2">
                    <Image src="/images/Expertise/femme_serieuse_devant_bureau.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>
                <div className="flex flex-col w-1/2 m-auto mx-20">
                    <h4 className="text-red-800 underline font-bold mt-2">Contrat de travail et relations individuelles</h4>
                    <p>
                        C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                    </p>

                    <h4 className="text-red-800 underline font-bold mt-2">Relations collectives et restructurations</h4>
                    <p>
                        Durée du travail, accords d’entreprise, règlement intérieur, élections et relations avec le CSE, plan social et licenciements économiques collectifs, gestion des transferts de contrats, le Cabinet Lexia vous conseille et vous assiste pas à pas dans toutes vos problématiques de relations collectives de travail et notamment en matière de santé et de sécurité au travail (prévention des risques, accord sur la pénibilité…) .
                    </p>

                    <h4 className="text-red-800 underline font-bold mt-2">Contentieux du travail et du licenciement</h4>
                    <p>
                        Le Cabinet Lexia est votre partenaire dans tous les contentieux relatifs au droit du travail. Nos avocats experts vous assistent dans la recherche de solutions amiables aux litiges et défendent vos intérêts devant toutes les juridictions, y compris le tribunal administratif s’il s’agit d’un salarié protégé ou d’un PSE.
                    </p>

                    <h4 className="text-red-800 underline font-bold mt-2">Droit et contentieux de la sécurité sociale</h4>
                    <p>
                        Présent en amont afin de conseiller nos clients et d’éviter toute procédure contentieuse, le Cabinet Lexia a développé une véritable expertise dans le domaine complexe de la sécurité sociale et de l’épargne salariale (participation, intéressement…). Nous assistons et défendons des entreprises devant toutes les juridictions liées au droit de la sécurité sociale (accidents du travail, avantages en nature, frais, rémunérations variables, contrôle URSSAF).
                    </p>

                    <h4 className="text-red-800 underline font-bold mt-2">Droit pénal du travail</h4>
                    <p>
                        Au Cabinet Babeau, nos compétences pluridisciplinaires en matière de droit des affaires et de la sécurité sociale, sont un atout majeur pour nos clients. Elles nous permettent de bénéficier d’une vue d’ensemble des enjeux auxquels sont confrontés l’entreprise ou le dirigeant face à une procédure pénale notamment en matière sociale.

                        Car cela se joue dès le départ, nous assistons et conseillons les dirigeants dès le début de l’enquête de l’Inspection du travail, notamment pour préparer les auditions, et transiger si possible, puis devant le juge d’instruction ou le tribunal correctionnel.
                    </p>
                </div>
            </div>
            <div className="bg-gray-500 text-center py-20">
                <h2 className="text-white font-bold underline mb-5">Ils nous recommandent</h2>
                <div className="flex m-auto justify-center">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="card w-96 bg-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Review 1</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Review 2</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Review 3</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Review 4</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Review 5</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-white shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Review 6</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white text-center py-20">
                <h2 className="font-bold underline mb-5">Ils nous recommandent</h2>
                <div className="flex m-auto justify-center">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        <Image src="/images/Expertise/suez.png" alt="logo-suez" width={100} height={100} className="align-middle"></Image>
                        <Image src="/images/Expertise/orange.png" alt="logo-orange" width={100} height={100} className="align-middle"></Image>
                        <Image src="/images/Expertise/edf.png" alt="logo-edf" width={100} height={100} className="align-middle"></Image>
                        <Image src="/images/Expertise/cite_du_vin.png" alt="logo-cite-du-vin" width={100} height={100} className="align-middle"></Image>
                        <Image src="/images/Expertise/caisse_epargne.png" alt="logo-caisse-epargne" width={100} height={100} className="align-middle"></Image>
                        <Image src="/images/Expertise/bnp_paribas.png" alt="logo-bnp" width={100} height={100} className="align-middle"></Image>
                    </div>
                </div>
            </div>
        </>
    );
}
import Head from "next/head";
import Image from "next/image";
import {Input, Textarea} from "@nextui-org/react";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2';
import Link from "next/link";
import {ParallaxBanner} from "react-scroll-parallax";
export default function Contact() {
    const searchParams = useSearchParams();
    const data = searchParams.get('objet');

    const [Nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [CP, setCP] = useState('');
    const [Email, setEmail] = useState('');
    const [RS, setRS] = useState('');

    //On définis l'était de SelectTypeService en fonction du parametre choisis
    switch (data){
        case 'demande-rendez-vous-cabinet':
            var [SelectTypeService, setSelectTypeService] = useState('Demande de rendez-vous au cabinet');
            break;
        case 'demande-consultation-telephonique':
            var [SelectTypeService, setSelectTypeService] = useState('Demande de consultation téléphonique');
            break;
        case 'question-simple':
            var [SelectTypeService, setSelectTypeService] = useState('Question simple');
            break;
        case 'consultation-ecrite':
            var [SelectTypeService, setSelectTypeService] = useState('Consultation écrite');
            break;
        default:
            var [SelectTypeService, setSelectTypeService] = useState('');
    }

    const [Message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(0);
    const [formValid, setFormValid] = useState(false);

    const escapeHtml = (text) => {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            Nom, Prenom, Telephone, CP, Email, RS, SelectTypeService, Message
        }

        Swal.fire({
            title: 'Envoi de votre email',
            text: 'Veuillez patienter...',
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(res.status === 200){
                setSubmitted(1)
                Swal.fire({
                    icon: 'success',
                    title: 'Succès',
                    text: 'Votre mail a été envoyé avec succès !',
                    confirmButtonColor: '#3b82f6',
                    confirmButtonText: 'Valider',
                });
            }else{
                setSubmitted(2)
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: 'Une erreur est survenue lors de l\'envoi du mail...',
                    cancelButtonColor: '#dc2626',
                    cancelButtonText: 'Annuler',
                });
            }
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Une erreur est survenue lors de l\'envoi du mail...',
                cancelButtonColor: '#dc2626',
                cancelButtonText: 'Annuler',
            });
        })
    }

    useEffect(() => {
        let checkbox = document.getElementById('rgpd_checkbox');
        let buttonSubmit = document.getElementById('ButtonSubmit');

        buttonSubmit.disabled = true;

        checkbox.addEventListener('click', function(element){
            var allFieldsValid = true
            if(checkbox.checked){
                document.querySelectorAll('[required]').forEach(function(currentField){
                    currentField.checkValidity()
                    if(currentField.reportValidity() !== true){
                        currentField.reportValidity()
                        allFieldsValid = false
                    }
                })

                if(allFieldsValid === true){
                    buttonSubmit.disabled = false;
                    buttonSubmit.classList.remove('bg-red-900', 'hover:bg-red-800', 'cursor-no-drop')
                    buttonSubmit.classList.add('bg-blue-500', 'hover:bg-blue-600')
                }else{
                    checkbox.checked = false
                    buttonSubmit.classList.add('cursor-no-drop')
                    buttonSubmit.classList.remove('bg-blue-500', 'hover:bg-blue-600')
                }
            }else{
                if (!document.body.classList.contains('cursor-no-drop')) {
                    buttonSubmit.classList.add('cursor-no-drop');
                }
                if (!document.body.classList.contains('bg-red-900')) {
                    buttonSubmit.classList.add('bg-red-900');
                }
                if (!document.body.classList.contains('hover:bg-red-800')) {
                    buttonSubmit.classList.add('hover:bg-red-800');
                }
                buttonSubmit.classList.remove('bg-blue-500', 'hover:bg-blue-600');
                buttonSubmit.disabled = true;
            }
        });

    })

    return(
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ParallaxBanner layers={[{image: '/images/Contact/banniere.jpg', speed: -30, className: "brightness-50 h-screen w-full object-cover my-auto"}]} className={"relative w-full h-[40vh]"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>DROIT DE LA SÉCURITÉ SOCIALE</h1>
                </div>
                {/**<Image loading={"eager"} className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>*/}
            </ParallaxBanner>
            <div className={"bg-white flex justify-center w-full py-8"}>
                <div className={"w-5/6"}>
                    <div className={"grid grid-cols-2 lg:grid-cols-4 text-center gap-8"}>
                        <div className={"flex flex-col items-center gap-y-5"}>
                            <div className={"text-gray-800"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                </svg>
                            </div>
                            <p className={"text-base text-gray-800 font-bold"}>LOCALISATION</p>
                            <p className={"text-sm text-gray-600"}>2 Rue Claude Boucher, 33300 Bordeaux</p>
                        </div>
                        <div className={"flex flex-col items-center gap-y-5"}>
                            <div className={"text-gray-800"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <p className={"text-base text-gray-800 font-bold"}>EMAIL</p>
                            <p className={"text-sm text-gray-600"}>fl.babeau@gmail.com</p>
                        </div>
                        <div className={"flex flex-col items-center gap-y-5"}>
                            <div className={"text-gray-800"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                </svg>
                            </div>
                            <p className={"text-base text-gray-800 font-bold"}>TELEPHONE</p>
                            <p className={"text-sm text-gray-600"}>05 57 10 28 28</p>
                        </div>
                        <div className={"flex flex-col items-center gap-y-5"}>
                            <div className={"text-gray-800"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <p className={"text-base text-gray-800 font-bold"}>HORAIRES</p>
                            <p className={"text-sm text-gray-600"}>Lun - Ven 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex w-full justify-center bg-gray-800 py-20"}>
                <div className={"flex flex-col lg:flex-row w-4/5 justify-center shadow"}>
                    <div className={"w-full lg:w-1/2 bg-white"}>
                        <form className={"p-6 lg:p-14"}>
                            <h2 className={"text-gray-800 font-semibold text-lg lg:text-2xl uppercase mb-2"}>Demande de contact</h2>
                            <h3 className={"text-gray-600 font-thin text-base lg:text-xl mb-2"}>Merci de remplir les champs ci-dessous</h3>
                            <h3 className={"text-red-600 font-thin text-base lg:text-lg mb-2"}>Les champs contenant "*" sont à remplir obligatoirement !</h3>
                            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-8"}>
                                <div className={"w-full flex flex-col"}>
                                    <Input css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} clearable underlined labelPlaceholder={"Nom*"} type={"text"} onChange={(e) => {setNom(escapeHtml(e.target.value))}} name={"Nom"} id={"Nom"} required={true}/>
                                </div>
                                <div className={"w-full flex flex-col"}>
                                    <Input css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} clearable underlined labelPlaceholder={"Prenom*"} type={"text"} onChange={(e) => {setPrenom(escapeHtml(e.target.value))}} name={"Prenom"} id={"Prenom"} required={true}/>
                                </div>
                                <div className={"w-full flex flex-col"}>
                                    <Input css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} clearable underlined labelPlaceholder={"Téléphone*"} type={"tel"} maxLength={10} onChange={(e) => {setTelephone(escapeHtml(e.target.value))}} name={"Telephone"} id={"Telephone"} required={true}/>
                                </div>
                                <div className={"w-full flex flex-col"}>
                                    <Input css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} clearable underlined type={"number"} labelPlaceholder={"Code postal*"} maxLength={5} onChange={(e) => {setCP(escapeHtml(e.target.value))}} name={"CP"} id={"CP"} required={true}/>
                                </div>
                                <div className={"w-full flex flex-col"}>
                                    <Input css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} clearable underlined labelPlaceholder={"Email*"} type={"email"} onChange={(e) => {setEmail(escapeHtml(e.target.value))}} name={"Email"} id={"Email"} required={true}/>
                                </div>
                                <div className={"w-full flex flex-col"}>
                                    <Input css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} clearable underlined labelPlaceholder={"Raison sociale"} type={"text"}  onChange={(e) => {setRS(escapeHtml(e.target.value))}} name={"RS"} id={"RS"}/>
                                </div>
                            </div>
                            <div className={"flex flex-col justify-center mt-8"}>
                                <label htmlFor={"SelectTypeService"} className={""}>Type de service *</label>
                                <small className={"text-red-500"}></small>
                                <select name={"SelectTypeService"} id={"SelectTypeService"} onChange={(e) => {setSelectTypeService(e.target.value)}} className={"border-b focus:outline-none focus:border-red-900 border-black p-4 w-full py-2"} required={true}>
                                    <option value={""}>Aucun type de service sélectionné</option>
                                    <option value={"Droit du travail"}>Droit du travail</option>
                                    <option value={"Droit de la sécurité sociale"}>Droit de la sécurité sociale</option>
                                    {data === 'demande-rendez-vous-cabinet' ?
                                        <option value={"Demande de rendez-vous au cabinet"} selected={true}>Demande de rendez-vous au cabinet</option>
                                        :
                                        <option value={"Demande de rendez-vous au cabinet"}>Demande de rendez-vous au cabinet</option>
                                    }

                                    {data === 'demande-consultation-telephonique' ?
                                        <option value={"Demande de consultation téléphonique"} selected={true}>Demande de consultation téléphonique</option>
                                        :
                                        <option value={"Demande de consultation téléphonique"}>Demande de consultation téléphonique</option>
                                    }

                                    {data === 'question-simple' ?
                                        <option value={"Question simple"} selected={true}>Question simple</option>
                                        :
                                        <option value={"Question simple"}>Question simple</option>
                                    }
                                    {data === 'consultation-juridique' ?
                                        <option value={"Consultation juridique"} selected={true}>Consultation juridique</option>
                                        :
                                        <option value={"Consultation juridique"}>Consultation juridique</option>
                                    }
                                </select>
                            </div>
                            <div className={"w-full flex flex-col mt-16"}>
                                <Textarea css={{ $$inputBorderColor: "#9ca3af", $$inputHoverBorderColor: "#7f1d1d" }} bordered name={"Message"} id={"Message"} labelPlaceholder={"Message"} onChange={(e) => {setMessage(escapeHtml(e.target.value))}} placeholder={"Message..."} required={true}></Textarea>
                            </div>
                            <div className={"flex flex-col items-center gap-5 my-5"}>
                                <div className={"flex"}>
                                    <input className="form-check-input checked:bg-blue-600 h-4 w-4 border border-gray-300 rounded-md bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="rgpd_checkbox"/>
                                    <label className="form-check-label text-sm inline-block text-gray-800" htmlFor="rgpd_checkbox">
                                        J’accepte la <Link className={"text-blue-500 hover:text-blue-600"} href={"politique-de-confidentialite"}>politique de confidentialité</Link>
                                    </label>
                                </div>
                                <button type={"submit"} id={"ButtonSubmit"} onClick={(e) => {handleSubmit(e)}} className={"cursor-no-drop disabled:hover:bg-gray-300 disabled:shadow-none disabled:text-gray-100 disabled:hover:scale-100 disabled:bg-gray-300 text-white mx-auto py-3 px-8 shadow-lg rounded-md  hover:text-white hover:scale-105 duration-500 uppercase font-bold"}>ENVOYER LE MESSAGE</button>
                            </div>
                        </form>
                    </div>
                    <div className={"w-full bg-white lg:w-1/2 lg:p-8"}>
                        <iframe
                            loading="lazy"
                            className={"w-full lg:h-full lg:rounded-lg lg:shadow"}
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.5811086297035218%2C44.86322475044171%2C-0.5785980820655824%2C44.8645384165023&amp;layer=mapnik&amp;marker=44.863881587219105%2C-0.579853355884552"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

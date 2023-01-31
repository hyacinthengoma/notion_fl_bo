import Header from '../components/header'
import ExtLink from '../components/ext-link'
import {useEffect, useState} from "react";

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import Image from "next/image";

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import Link from "next/link";

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/_ijjk',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ijjk',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/jj-kasper-0b5392166/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:jj@jjsweb.site?subject=Notion blog',
  },
]

function setResult(result:boolean){
  useEffect(() => {
    console.log(result);
  });
}

export default function Contact() {
  const [Nom, setNom] = useState('')
  const [Prenom, setPrenom] = useState('')
  const [Telephone, setTelephone] = useState('')
  const [CP, setCP] = useState('')
  const [Email, setEmail] = useState('')
  const [RS, setRS] = useState('')
  const [SelectTypeService, setSelectTypeService] = useState('')
  const [Message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      Nom, Prenom, Telephone, CP, Email, RS, SelectTypeService, Message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if(res.status === 200){
        setSubmitted(true)
        setNom('')
        setPrenom('')
        setTelephone('')
        setCP('')
        setEmail('')
        setRS('')
        setSelectTypeService('')
        setMessage('')
        setResult(true);
      }else{
        setResult(false);
      }
    })
  }

  useEffect(() => {
    let checkbox = document.getElementById('rgpd_checkbox');
    let buttonSubmit = document.getElementById('ButtonSubmit');

    buttonSubmit.disabled = true;

    checkbox.addEventListener('click', function(element){
      if(checkbox.checked){
        buttonSubmit.disabled = false;
      }else{
        buttonSubmit.disabled = true;
      }
    })
  })

  return (
    <>
      <div className={"relative w-full"}>
        <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
          <h1 className={"text-white text-2xl md:text-4xl font-bold"}>CONTACT</h1>
        </div>
        <Image className={"brightness-50 h-[30vh] w-full object-cover"} src={"/images/Contact/banniere.png"} alt={"image-banniere-contact"} width={"1920"} height={"1080"}/>
      </div>
      <div className={"bg-white flex justify-center w-full py-8"}>
        <div className={"w-5/6"}>
          <div className={"grid grid-cols-2 lg:grid-cols-3 text-center"}>
            <div className={"flex flex-col items-center gap-y-5"}>
              <div className={"text-black"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
              </div>
              <p className={"text-[1rem] text-black font-bold"}>LOCALISATION</p>
              <p className={"text-[1rem]"}>2 Rue Claude Boucher, 33300 Bordeaux</p>
            </div>
            <div className={"flex flex-col items-center gap-y-5"}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <p className={"text-[1rem] text-black font-bold"}>TÉLÉPHONE</p>
              <p className={"text-[1rem]"}>05 57 10 28 24</p>
            </div>
            <div className={"flex flex-col items-center gap-y-5"}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className={"text-[1rem] text-black font-bold"}>HORAIRES</p>
              <p className={"text-[1rem]"}>Lun - Ven 09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex w-full justify-center bg-gray-800 py-20"}>
        <div className={"flex flex-col lg:flex-row w-4/5 justify-center shadow"}>
          <div className={"w-full lg:w-1/2 bg-white"}>
            <form className={"p-14"}>
              <h2 className={"text-black font-semibold text-2xl"}>Demande de contact</h2>
              <h3 className={"text-gray-600 text-xl"}>Merci de remplir les champs ci-dessous</h3>
              <h1 className={"text-white text-2xl md:text-4xl font-bold text-center"}>FORMULAIRE DE CONTACT</h1>
              <div className={"flex flex-col lg:flex-row gap-4 justify-center my-5"}>
                <input type={"text"} className={"border-b border-black focus:outline-none focus:border-red-900 p-4 w-full py-2"} onChange={(e) => {setNom(e.target.value)}} name={"Nom"} id={"Nom"} placeholder={"Nom*"} required={true}/>
                <input type={"text"} className={"border-b border-black focus:outline-none focus:border-red-900 p-4 w-full py-2"} onChange={(e) => {setPrenom(e.target.value)}} name={"Prenom"} id={"Prenom"} placeholder={"Prenom*"} required={true}/>
              </div>
              <div className={"flex flex-col lg:flex-row gap-4 justify-center my-5"}>
                <input type={"text"} className={"border-b border-black focus:outline-none focus:border-red-900 p-4 w-full py-2"} onChange={(e) => {setTelephone(e.target.value)}} name={"Telephone"} id={"Telephone"} placeholder={"Téléphone*"} required={true}/>
                <input type={"text"} className={"border-b border-black focus:outline-none focus:border-red-900 p-4 w-full py-2"} onChange={(e) => {setCP(e.target.value)}} name={"CP"} id={"CP"} placeholder={"Code postal*"} required={true}/>
              </div>
              <div className={"flex flex-col lg:flex-row gap-4 justify-center my-5"}>
                <input type={"text"} className={"border-b border-black focus:outline-none focus:border-red-900 p-4 w-full py-2"} onChange={(e) => {setEmail(e.target.value)}} name={"Email"} id={"Email"} placeholder={"Email*"} required={true}/>
                <input type={"text"} className={"border-b border-black focus:outline-none focus:border-red-900 p-4 w-full py-2"} onChange={(e) => {setRS(e.target.value)}} name={"RS"} id={"RS"} placeholder={"Raison sociale"}/>
              </div>
              <div className={"flex justify-center my-5"}>
                <select name={"SelectTypeService"} id={"SelectTypeService"} onChange={(e) => {setSelectTypeService(e.target.value)}} className={"border-b focus:outline-none focus:border-red-900 border-black p-4 w-full py-2"} required={true}>
                  <option value={""}>Type de service*</option>
                  <option value={"Droit du travail"}>Droit du travail</option>
                  <option value={"Droit de la sécurité sociale"}>Droit de la sécurité sociale</option>
                </select>
              </div>
              <div className={"flex justify-center my-5"}>
                <textarea className={"border border-black h-[17vh] focus:outline-none focus:border-red-900 p-4 w-full py-2"} name={"Message"} id={"Message"} onChange={(e) => {setMessage(e.target.value)}} placeholder={"Message..."}></textarea>
              </div>
              <div className={"flex justify-center my-5"}>
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox" value="" id="rgpd_checkbox"/>
                  <label className="form-check-label text-sm inline-block text-gray-800" htmlFor="rgpd_checkbox">
                    J'accepte que mes données soit collectées afin de traiter ma demande
                  </label>
              </div>
              <div className={"w-full flex justify-center"}>
                <button type={"button"} id={"ButtonSubmit"} onClick={(e) => {handleSubmit(e)}} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-sm hover:bg-red-800 hover:text-white uppercase font-bold disabled:hover:bg-red-900"}>ENVOYER LE MESSAGE</button>
              </div>
            </form>
          </div>
          <div className={"w-full lg:w-1/2"}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.921862125881!2d-0.5822976486370732!3d44.863885481215846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55286b9ee92b21%3A0x1694739e2dc975af!2sCabinet%20Avocat%20Florence%20Babeau!5e0!3m2!1sfr!2sfr!4v1673651475903!5m2!1sfr!2sfr"
                loading="lazy"
                className={"w-full h-96 lg:h-full"}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

import Header from '../components/header'
import ExtLink from '../components/ext-link'
import { useState } from "react";

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

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
    link: 'mailto:jj@jjsweb.site?subject=Notion Blog',
  },
]

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
      }


    })
  }

  return (
    <>
      <Header></Header>
      <div className={"relative w-full"}>
        <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
          <h1 className={"text-white text-2xl md:text-4xl font-bold"}>CONTACT</h1>
        </div>
        <img className={"brightness-50 h-96 w-full object-cover"} src={"/images/Contact/banniere.png"} alt={"image-banniere"}></img>
      </div>
      <div className={"bg-white flex justify-center w-full py-36"}>
        <div className={"w-5/6"}>
          <div className={"grid grid-cols-2 lg:grid-cols-4 text-center"}>
            <div className={"flex flex-col"}>
              <p>ICONE</p>
              <p>LOCALISATION</p>
              <p>RUE</p>
            </div>
            <div className={"flex flex-col"}>
              <p>ICONE</p>
              <p>LOCALISATION</p>
              <p>RUE</p>
            </div>
            <div className={"flex flex-col"}>
              <p>ICONE</p>
              <p>LOCALISATION</p>
              <p>RUE</p>
            </div>
            <div className={"flex flex-col"}>
              <p>ICONE</p>
              <p>LOCALISATION</p>
              <p>RUE</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"relative flex w-full justify-center bg-gray-800 py-20"}>
          <form className={"w-5/6"}>
            <h1 className={"text-white text-2xl md:text-4xl font-bold text-center"}>FORMULAIRE DE CONTACT</h1>
            <div className={"flex flex-col lg:flex-row gap-4 justify-center my-5"}>
              <input type={"text"} className={"border w-full py-2"} onChange={(e) => {setNom(e.target.value)}} name={"Nom"} id={"Nom"} placeholder={"Nom"} required={true}/>
              <input type={"text"} className={"border w-full py-2"} onChange={(e) => {setPrenom(e.target.value)}} name={"Prenom"} id={"Prenom"} placeholder={"Prenom"}/>
            </div>
            <div className={"flex flex-col lg:flex-row gap-4 justify-center my-5"}>
              <input type={"text"} className={"border w-full py-2"} onChange={(e) => {setTelephone(e.target.value)}} name={"Telephone"} id={"Telephone"} placeholder={"Téléphone"}/>
              <input type={"text"} className={"border w-full py-2"} onChange={(e) => {setCP(e.target.value)}} name={"CP"} id={"CP"} placeholder={"Code postal"}/>
            </div>
            <div className={"flex flex-col lg:flex-row gap-4 justify-center my-5"}>
              <input type={"text"} className={"border w-full py-2"} onChange={(e) => {setEmail(e.target.value)}} name={"Email"} id={"Email"} placeholder={"Email"}/>
              <input type={"text"} className={"border w-full py-2"} onChange={(e) => {setRS(e.target.value)}} name={"RS"} id={"RS"} placeholder={"Raison sociale"}/>
            </div>
            <div className={"flex justify-center my-5"}>
              <select name={"SelectTypeService"} id={"SelectTypeService"} onChange={(e) => {setSelectTypeService(e.target.value)}} className={"border w-full py-2"}>
                <option value={""}>Type de service</option>
                <option value={"Droit du travail"}>Droit du travail</option>
                <option value={"Droit social"}>Droit social</option>
                <option value={"Droit de la sécurité sociale"}>Droit de la sécurité sociale</option>
                <option value={"Droit de la famille"}>Droit de la famille</option>
              </select>
            </div>
            <div className={"flex justify-center my-5"}>
              <textarea className={"border w-full py-2"} name={"Message"} id={"Message"} onChange={(e) => {setMessage(e.target.value)}} placeholder={"Message..."}></textarea>
            </div>
            <div className={"w-full flex justify-center"}>
              <Link href={""} type={"submit"} id={"ButtonSubmit"} onClick={(e) => {handleSubmit(e)}} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>ENVOYER LE MESSAGE</Link>
            </div>
          </form>
        </div>
    </>
  )
}

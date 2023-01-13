import ExtLink from './ext-link'
import cabinetStyles from "../styles/cabinet.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
        <div className={"absolute flex justify-center w-full"}>
            <div className={"w-4/6 justify-between transform -translate-y-16"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.921862125881!2d-0.5822976486370732!3d44.863885481215846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55286b9ee92b21%3A0x1694739e2dc975af!2sCabinet%20Avocat%20Florence%20Babeau!5e0!3m2!1sfr!2sfr!4v1673651475903!5m2!1sfr!2sfr"
                    loading="lazy"
                    className={"w-full h-60 rounded-lg shadow-lg"}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      <footer className={"bg-red-900 pt-56"}>
            <div className={"flex w-full justify-center"}>
                <div className={"w-5/6"}>
                    <div className={"flex flex-col lg:flex-row justify-between"}>
                        <div className={"text-white text-left"}>
                            <p className={"text-white text-center font-bold text-2xl underline uppercase"}>contactez-moi</p>
                            <p className={"text-white"}>2 Rue Claude Boucher, 33300 Bordeaux</p>
                            <p className={"text-white"}>XXXXXXXXX</p>
                            <p className={"text-white"}>contact@babeau.fr.</p>
                            <p className={"text-white"}>Lun – Ven 09:00-17:00</p>
                        </div>
                        <div className={"text-white text-left"}>
                            <p className={"text-white text-center font-bold text-2xl underline uppercase"}>pages</p>
                            <ul className={"list-disc"}>
                                <li><Link href={""} className={"text-white hover:text-gray-300"}>Accueil</Link></li>
                                <li><Link href={""} className={"text-white hover:text-gray-300"}>Expertise</Link></li>
                                <li><Link href={""} className={"text-white hover:text-gray-300"}>Honoraires</Link></li>
                                <li><Link href={""} className={"text-white hover:text-gray-300"}>Actualités sociales</Link></li>
                                <li><Link href={""} className={"text-white hover:text-gray-300"}>Florence Babeau</Link></li>
                                <li><Link href={""} className={"text-white hover:text-gray-300"}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className={"text-white text-left"}>
                            <p className={"text-white text-center font-bold text-2xl underline uppercase"}>LEXIQUE JURIDIQUE</p>
                            <p className={"text-white"}>2 Rue Claude Boucher, 33300 Bordeaux</p>
                            <p className={"text-white"}>XXXXXXXXX</p>
                            <p className={"text-white"}>contact@babeau.fr.</p>
                            <p className={"text-white"}>Lun – Ven 09:00-17:00</p>
                        </div>
                    </div>
                </div>
            </div>
          <div className={"bg-red-900 mt-7"}>
              <p className={"text-white"}>Copyright © 2022 | Mentions légales | Politique de confidentialité</p>
          </div>
      </footer>
    </>
  )
}

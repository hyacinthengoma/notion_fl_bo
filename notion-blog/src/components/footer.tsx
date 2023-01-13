import ExtLink from './ext-link'
import cabinetStyles from "../styles/cabinet.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className={cabinetStyles.footer}>
          <Link href="/le-cabinet">
              <Image src="/images/logo-babeau.png" alt="logo-babeau" width={"150"} height="500" className={"mx-20"}></Image>
          </Link>
          <div className={"flex flex-col mx-12 space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:justify-center"}>
              <div className={"text-left"}>
                  <p className={"text-white underline font-bold"}>Mes coordonnés</p>
                  <p className={"text-white"}>2 Rue Claude Boucher, 33300 Bordeaux</p>
                  <p className={"text-white"}>XXXXXXXXX</p>
                  <p className={"text-white"}>contact@babeau.fr</p>
                  <p className={"text-white"}>Lun – Ven 09:00-17:00</p>
              </div>
              <div className={"text-left"}>
                  <p className={"text-white underline font-bold"}>Mon expertises</p>
                  <p className={"text-white"}>Droit du travail</p>
                  <p className={"text-white"}>Droit de la sécurité sociale</p>
              </div>
              <div className={"text-left"}>
                  <p className={"text-white underline font-bold"}>Florence Babeau</p>
                  <p className={"text-white"}>Qui-suis ?</p>
                  <p className={"text-white"}>Mon parcours</p>
              </div>
              <div className={"text-left"}>

              </div>
          </div>

      </footer>
    </>
  )
}

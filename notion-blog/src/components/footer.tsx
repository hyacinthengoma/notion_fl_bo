import ExtLink from './ext-link'
import cabinetStyles from "../styles/cabinet.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className={cabinetStyles.footer}>
        <div className="flex m-5 md:flex-row flex-col">
          <div className="md:mr-auto">
            <Image src="/images/logo.png" alt="logo-babeau" width={200} height={200}></Image>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.9220488957462!2d-0.582292284615339!3d44.863881679098505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55286b9d978481%3A0xe473bfa28edf3f10!2s2%20Rue%20Claude%20Boucher%2C%2033300%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1668597854889!5m2!1sfr!2sfr"
                width="300" height="300" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="md:ml-auto flex flex-col">
            <p className="text-white font-bold">Recevez mes dernières actualités en vous abonnant à ma newsletter</p>
            <div className="flex flex-row gap-5">
              <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs bg-gray-100"/>
              <button className="btn btn-active btn-accent">S'abonner a la newsletter</button>
            </div>
            <p className="text-white">Retrouver-moi sur mes réseaux sociaux</p>
            <div className="flex flex-col">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

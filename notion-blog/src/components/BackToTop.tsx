import {useEffect} from "react";

export default function BackToTop() {
    useEffect(() => {
        let backToTop = document.getElementById('backToTop');

        const navbar = document.getElementById('navbar');

        window.onscroll = function() {
            scrollFunction()
            scrollNavbarFunction()
        };

        function scrollNavbarFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                navbar.classList.add('bg-red-900')
                navbar.classList.remove('bg-red-800/10')
            } else {
                navbar.classList.remove('bg-red-900')
                navbar.classList.add('bg-red-800/10')
            }
        }

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                //backToTop.style.display = "block";
                backToTop.classList.remove('hidden');
                backToTop.classList.add('block')
            } else {
                //backToTop.style.display = "none";
                backToTop.classList.add('hidden');
                backToTop.classList.remove('block')
            }
        }

        backToTop.addEventListener('click', topFunction);

        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            document.body.style.scrollBehavior = "smooth"
            document.documentElement.style.scrollBehavior = "smooth"
        }
    });
    return (
        <>
            <button className={"hidden fixed text-white shadow-xl rounded-l-lg top-3/4 z-50 px-10 py-5 bg-red-900 hover:bg-red-800 shadow right-0 transition-all duration-500"} id={"backToTop"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button>
        </>
    );
}

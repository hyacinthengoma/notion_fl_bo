import Header from "../../../components/header";
import Head from 'next/head';

export default function HomeDroitTravail() {
    return (
        <>
            <Header></Header>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.6.2/dist/flowbite.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
            </Head>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>DROIT DU TRAVAIL</h1>
                </div>
                <img className={"brightness-50 h-[25vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"w-full flex justify-center bg-white py-20"}>
                <div className={"w-4/5"}>
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex justify-between flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                            data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="mr-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                                        data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                                        aria-selected="false">Contrat de travail et relations individuelles
                                </button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button
                                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                                    aria-controls="dashboard" aria-selected="false">Relations collectives et restructurations
                                </button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button
                                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="settings-tab" data-tabs-target="#settings" type="button" role="tab"
                                    aria-controls="settings" aria-selected="false">Contentieux du travail et du licenciement
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                    id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
                                    aria-controls="contacts" aria-selected="false">Droit et contentieux de la sécurité sociale
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                             aria-labelledby="profile-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis arcu. Sed et eros fringilla, ultrices massa in, convallis odio. Maecenas neque magna, scelerisque ac aliquet eu, vehicula et justo. Nullam aliquam purus nec nibh vehicula eleifend. Ut tempor commodo tortor in lacinia. Suspendisse tempus elementum dolor, vitae efficitur massa interdum vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sagittis orci aliquam elit convallis sollicitudin. Phasellus eu sagittis elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non tortor libero.</p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel"
                             aria-labelledby="dashboard-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Donec dictum tempor sodales. In consequat tellus libero, ac pretium neque molestie at. Vestibulum hendrerit porttitor gravida. Vestibulum suscipit, justo sit amet ullamcorper malesuada, sem metus aliquam nisl, faucibus posuere neque libero non magna. Maecenas dolor elit, viverra quis elit ultrices, lacinia ultrices felis. Nam quis ex tincidunt, mattis purus nec, efficitur diam. Vivamus mollis commodo nulla sed pharetra. Curabitur at dui at metus auctor lacinia eu ut erat. Praesent condimentum commodo iaculis. Praesent vel lectus ex. Pellentesque sed odio vel ligula maximus pulvinar. Integer nec placerat massa. Ut vulputate porta libero quis convallis. Sed quis orci at nibh accumsan sagittis.</p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel"
                             aria-labelledby="settings-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Sed pulvinar ut urna consectetur lobortis. Sed consequat orci lorem, quis posuere ex venenatis et. Donec ac orci cursus, commodo risus eu, dignissim sem. Nulla iaculis mi ipsum, eu tristique nisi scelerisque vel. Morbi dictum orci scelerisque tellus porta, vel ullamcorper dolor porta. Nulla facilisi. Praesent dictum egestas dui. Fusce molestie congue lorem eget iaculis. Nulla venenatis nulla a eros sagittis, ac consequat odio mattis. Nulla euismod leo metus, ac feugiat lorem ultricies nec. Maecenas volutpat elementum malesuada. Integer ut urna efficitur, sollicitudin velit eu, consequat orci.</p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel"
                             aria-labelledby="contacts-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Maecenas ut nisi ex. Aliquam vitae velit et nunc auctor sagittis. Duis tempor nulla at lacinia sollicitudin. In iaculis sem ligula, sed mollis purus facilisis quis. Nam nec purus feugiat, sagittis ligula nec, luctus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a condimentum mauris. Integer id enim a erat pellentesque varius ac ut nisl. Vestibulum id interdum purus. Fusce id bibendum odio, a finibus turpis.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

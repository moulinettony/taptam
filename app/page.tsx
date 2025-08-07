import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <section className="flex flex-col md:flex-row container mx-auto items-center">
        <div className="flex flex-col gap-4 lg:w-1/2 py-8 px-4">
          <p className="text-lg text-[#006EFE]">GÉREZ VOTRE FICHE GOOGLE ET VOS AVIS CLIENTS</p>
          <h1 className="lg-text-6xl text-5xl font-bold">Faîtes briller <br />
            votre entreprise !</h1>
          <p className="text-md font-light text-gray-500">Boostez vos avis client et augmentez votre visibilité grâce à notre application</p>
          <Link href="https://card.taptam.com/application" aria-label="Telecharger Taptam" className="max-lg:hidden bg-[#006EFE] hover:bg-blue-600 text-white font-medium py-3 px-20 w-fit cursor-pointer">
            Télécharger TapTam
          </Link>
          <div className="flex gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.taptam" className="" aria-label="Go tp play store">
              <Image
                src="/playstore.svg"
                alt="Feature illustration"
                width={144}
                height={48}
                className="object-contain drop-shadow-xl"
                priority
              />
            </Link>
            <Link href="https://apps.apple.com/ma/app/taptam/id6472043881" className="" aria-label="Go tp play store">
              <Image
                src="/appstore.svg"
                alt="Feature illustration"
                width={144}
                height={48}
                className="object-contain drop-shadow-xl"
                priority
              />
            </Link>
          </div>
        </div>
        <div className="lg-w-1/2 flex justify-center md:order-last">
          <Image
            src="/img1.svg"
            alt="Feature illustration"
            width={500}
            height={400}
            className="object-contain max-lg:hidden w-full"
            priority
          />
          <Image
            src="/img1mobile.svg"
            alt="Feature illustration"
            width={500}
            height={400}
            className="object-contain lg:hidden w-full"
            priority
          />
        </div>
      </section>
      <div className="fixed bottom-0 bg-white p-4 w-screen flex justify-center lg:hidden z-10">
        <Link href="https://card.taptam.com/application" aria-label="Telecharger Taptam" className="bg-[#006EFE] hover:bg-blue-600 text-white font-medium py-3 px-20 w-fit cursor-pointer">
            Télécharger TapTam
          </Link>
      </div>
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Une <span className="text-[#006efe]">visibilité renforcée</span> <br />
            grâce aux fonctionnalités !
          </h2>
          <div className="bg-[#F7F7F7] rounded-2xl lg:flex gap-4 items-center max-w-[1200px] mx-auto mt-8">
            <div className="lg:w-[60%] py-4 px-4 lg:px-12">
              <p className="text-xl text-white bg-[#006efe] rounded-full w-fit px-8 py-2">FONCTIONNALITÉ 1</p>
              <h3 className="mt-10 text-2xl font-semibold text-black uppercase">
                Une application clé en mains et facile d'utilisation
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Avec TapTam, votre carte d'avis est toujours accessible. Payez en une fois seulement, pas de frais mensuels ni de renouvellement annuel. Vous serez toujours prêt pour chaque opportunité !
              </p>
            </div>
            <div className="lg:w-[40%] flex justify-center">
              <Image
                src="/1stimg.webp"
                alt="Feature illustration"
                width={414}
                height={398}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl lg:flex gap-4 items-center max-w-[1200px] mx-auto mt-8 pt-12">
            <div className="lg:w-[40%] flex justify-center">
              <Image
                src="/2ndimg.webp"
                alt="Feature illustration"
                width={414}
                height={338}
                className="object-contain"
                priority
              />
            </div>
            <div className="lg:w-[60%] py-4 px-4 lg:px-12">
              <p className="text-xl text-white bg-[#01aa47] rounded-full w-fit px-8 py-2">FONCTIONNALITÉ 2</p>
              <h3 className="mt-10 text-2xl font-semibold text-black uppercase">
                Un référencement naturel optimisé
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Grâce à notre application, booster votre fiche Google et gagnez la confiance de vos futurs clients. On vous aide à optimiser votre fiche, via des mots-clés générés en fonction de votre secteur d’activité. Profitez de plus de visibilité, de crédibilité : il est temps de prendre la place que vous méritez !
              </p>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl lg:flex gap-4 items-center max-w-[1200px] mx-auto mt-8 pt-10">
            <div className="lg:w-[60%] py-4 px-4 lg:px-12">
              <p className="text-xl text-white bg-[#fd2b25] rounded-full w-fit px-8 py-2">FONCTIONNALITÉ 3</p>
              <h3 className="mt-10 text-2xl font-semibold text-black uppercase">
                Ne laissez PAS un avis sans réponse
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Avec TapTam, chaque retour compte, vos avis clients reçoivent une réponse professionnelle en un clin d'œil. Gagnez du temps, montrez réactivité et faite grandir votre entreprise grâce aux réponses automatiques.
              </p>
            </div>
            <div className="lg:w-[40%] flex justify-center">
              <Image
                src="/3rdimg.webp"
                alt="Feature illustration"
                width={414}
                height={345}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl lg:flex gap-4 items-center max-w-[1200px] mx-auto mt-8">
            <div className="lg:w-[40%] flex justify-center">
              <Image
                src="/4thimg.webp"
                alt="Feature illustration"
                width={414}
                height={398}
                className="object-contain"
                priority
              />
            </div>
            <div className="lg:w-[60%] o py-4 px-4 lg:px-12">
              <p className="text-xl text-white bg-[#febd01] rounded-full w-fit px-8 py-2">FONCTIONNALITÉ 4</p>
              <h3 className="mt-10 text-2xl font-semibold text-black uppercase">
                La première impression sera la bonne
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Faite de votre fiche Google, votre vitrine. Elle devient votre meilleur atout : belle, complète et toujours à jours. L'occasion de faire bonne impression dès la première recherche !
              </p>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl lg:flex gap-4 items-center max-w-[1200px] mx-auto mt-8">
            <div className="lg:w-[60%] py-4 px-4 lg:px-12">
              <p className="text-xl text-white bg-[#212121] rounded-full w-fit px-8 py-2">FONCTIONNALITÉ 5</p>
              <h3 className="mt-10 text-2xl font-semibold text-black uppercase">
                RAPPORT DE PERFORMANCE DÉTAILLÉ
              </h3>
              <p className="mt-6 text-gray-600 leading-relaxed">
                En utilisant TapTam, bénéficiez d’un rapport détaillé : découvrez combien de personnes ont cliqués sur votre fiche, le nombre d’itinéraires demandés, le nombre d’appels effectués, etc. Votre fiche Google n’aura plus de secrets pour vous !
              </p>
            </div>
            <div className="lg:w-[40%] flex justify-center">
              <Image
                src="/5thimg.webp"
                alt="Feature illustration"
                width={355}
                height={398}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Ils sont <span className="text-[#006efe]">convaincus</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-100">
              <Image
                src="/stars.svg"
                alt="5-star rating"
                width={120}
                height={24}
              />
              <h3 className="text-xl text-neutral-500 mt-6">
                Sarah Perez - Propriétaire de restaurant
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Depuis que nous avons adopté TapTam, nous avons constaté une nette augmentation de nos avis Google. La praticité et la durabilité sont la cerise sur la gâteau. Je recommande vivement !
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gray-100">
              <Image
                src="/stars.svg"
                alt="5-star rating"
                width={120}
                height={24}
              />
              <h3 className="text-xl text-neutral-500 mt-6">
                Marie John - Propriétaire d’un salon de beauté
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                TapTam a transformé notre façon d’intéragir avec nos clients. Partager des avis grâce à leurs cartes virtuelles est incroyablement simple. De plus, nous adorons leur approche éco-responsable !
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gray-100">
              <Image
                src="/stars.svg"
                alt="5-star rating"
                width={120}
                height={24}
              />
              <h3 className="text-xl text-neutral-500 mt-6">
                Rose Lexand - Propriétaire de restaurant
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Au départ, j’étais sceptique à l’idée de passer au numérique pour les avis, mais TapTam a été une révélation. C’est une solution conviviale, efficace et parfaitement en phase avec nos valeurs d’entreprise écologiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-[#f2f8ff] py-20">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                <span className="text-[#006efe]">Tout savoir</span> sur <br />
                notre application
              </h2>
              <Image
                src="/faqimg.webp"
                alt="Feature illustration"
                width={518}
                height={252}
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-8 space-y-4 lg:w-1/2">
              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>TapTam, c’est quoi exactement ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  TapTam est une application qui optimise automatiquement votre fiche Google Business. Elle vous aide à attirer plus de clients grâce à une meilleure visibilité sur Google Maps, sans effort de votre part.
                </p>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>Est-ce que c’est compatible avec tous les types de commerces ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Oui, TapTam fonctionne avec tous les commerces de proximité : restaurants, cafés, salons de coiffure, garages, boutiques, etc. Tant que vous avez une fiche Google, TapTam peut vous aider.
                </p>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>Dois-je partager mes identifiants Google pour utiliser TapTam ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  TapTam utilise un accès sécurisé via les droits de gestion, sans que vous ayez à transmettre vos identifiants. Depuis notre plateforme, vous pouvez à tout moment gérer votre fiche Google et désactiver, si vous le souhaitez, la fonctionnalité de réponse automatique aux avis. Nous sommes certifiés par Google, ce qui garantit une gestion sécurisée et transparente.
                </p>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>Que fait TapTam pour améliorer ma fiche Google ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  TapTam automatise l’optimisation de votre fiche pour vous aider à attirer plus de clients. Concrètement, l’application :<br />
                  •⁠  ⁠Améliore votre visibilité locale sur Google<br />
                  •⁠  ⁠Répond automatiquement aux avis clients grâce à l’intelligence artificielle<br />
                  •⁠  ⁠Met à jour vos photos, descriptions et informations clés<br />
                  •⁠  ⁠Vous permet de suivre facilement les statistiques et les performances de votre fiche depuis l’application
                </p>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>Est-ce que TapTam répond automatiquement à tous les avis ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Non, TapTam répond automatiquement aux avis de 4 ou 5 étoiles. Pour les avis négatifs (en dessous de 3 étoiles), une réponse est rédigée par notre IA, mais elle n’est envoyée qu’après votre validation. Cela vous permet de garder le contrôle dans les situations sensibles et d’éviter toute réponse inadaptée à un client insatisfait.
                </p>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>Puis-je résilier mon abonnement facilement ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Oui, bien sûr. Vous pouvez résilier TapTam à tout moment, sans engagement et sans frais cachés. Vous gardez la liberté totale de gérer ou d’arrêter votre abonnement quand vous le souhaitez.
                </p>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex text-xl justify-between items-center font-semibold cursor-pointer list-none">
                  <span>Puis-je tester TapTam gratuitement ?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Oui. Vous pouvez accéder à toutes les fonctionnalités de TapTam pendant une période limitée, sans engagement et sans renseigner aucun moyen de paiement. C’est l’occasion idéale de tester la solution en toute sérénité.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/ctaimg.svg"
          alt="A vibrant abstract background representing innovation and technology"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/10 -z-10"></div>
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="lg:text-4xl text-3xl md:text-4xl font-bold text-white">
            Prêt à faire rayonner <br />
            votre entreprise ?
          </h2>
          <p className="mt-4 font-light text-lg text-gray-200 max-w-2xl mx-auto">
            TapTam vous accompagne pour renforcer votre crédibilité !
          </p>
          <Link href="https://card.taptam.com/application" aria-label="Telecharger Taptam" className="max-lg:hidden bg-white hover:bg-neutral-100 text-[#006EFE] font-medium py-3 px-20 w-fit cursor-pointer mt-4">
            Télécharger TapTam
          </Link>
          <div className="flex gap-4 justify-center mt-4">
            <Link href="https://play.google.com/store/apps/details?id=com.taptam" className="" aria-label="Go tp play store">
              <Image
                src="/playstore.svg"
                alt="Feature illustration"
                width={144}
                height={48}
                className="object-contain drop-shadow-xl"
                priority
              />
            </Link>
            <Link href="https://apps.apple.com/ma/app/taptam/id6472043881" className="" aria-label="Go tp play store">
              <Image
                src="/appstore.svg"
                alt="Feature illustration"
                width={144}
                height={48}
                className="object-contain drop-shadow-xl"
                priority
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

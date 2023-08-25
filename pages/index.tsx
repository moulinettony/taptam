import React from 'react';
import ImageSlider from '../components/imageslider';
import FAQSection from '../components/faq';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const images = [
  'images/popcard.webp',
  'images/popcard.webp',
  'images/popcard.webp',
  'images/popcard.webp',
];

const faqs = [
  {
    question: 'How do a NFC Business card works ?',
    answer: 'A NFC Business card (Near-Field Communication) allows you to share your digital business card just with a single tap. The technology requires additional pieces of hardware. Wcard app supports NFC Sharing. Then you will be able to share your card easily using a QR code, email, or text message in a safer way. Increase your network with a digital business card, all you need is an NFC tag.',
  },
  {
    question: 'How do I make a digital Business Card ?',
    answer: 'First of all you have to sign up for Wcard. Then you’ll be directly directed to your onboarding to make your first digital business card. Once your card is created, you can make more cards and add them by tapping the “+” button on your Cards page on your application Wcard.',
  },
  {
    question: 'Are digital Business cards safe ?',
    answer: 'Of course yes, your digital business card is secure and safe. Wcard uses best practices to protect your user and customer data. Moreover, you can control who receives your card and what information you want to share on your card.',
  },
];

const LandingPage = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <section className="container px-6 mx-auto py-14 justify-center h-screen flex items-center">
        <div className="flex max-lg:flex-col max-lg:gap-10 lg:text-left text-center items-center justify-around">
          <div className="lg:w-1/2">
            <img src="images/product.png" alt="Product" className="mx-auto rounded-lg"/>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-6 text-black lg:px-12">
            <h1 className="lg:text-5xl text-4xl font-bold mb-4">Digital Business Card</h1>
            <p className="lg:text-xl">Create your own NFC business card with latest technologies & share it anywhere</p>
            <a className='text-white text-center px-6 py-3 bg-black' href="">GET YOURS  →</a>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-14 justify-center bg-center flex items-center">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">They Trust Us</h2>
          <div className="flex lg:gap-40 justify-center space-x-8">
            <div className="lg:w-32 lg:h-32 flex justify-center">
              <img src="/images/hilton.svg" alt="Trust Logo 1" />
            </div>
            <div className="lg:w-32 lg:h-32 flex justify-center">
              <img src="/images/marion.svg" alt="Trust Logo 2" />
            </div>
            <div className="lg:w-32 lg:h-32 flex justify-center">
              <img src="/images/marriott.svg" alt="Trust Logo 3" />
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto text-center'>
        <ImageSlider images={images} />
      </section>
      <section className="container px-6 mx-auto justify-center py-14 flex items-center">
        <div className="flex max-lg:flex-col max-lg:gap-10 text-left items-center justify-around">
          <div className="lg:w-1/2 flex flex-col gap-4 text-black lg:px-12">
            <h3 className="lg:text-5xl text-4xl font-bold mb-4">How it works?</h3>
            <p className="lg:text-2xl font-bold"><i>Satisfied customer leaves a positive feedback!</i></p>
            <p className="lg:text-xl">1. ask your client if he’s willing to leave a positive review</p>
            <p className="lg:text-xl">2. Present your Smartap®</p>
            <p className="lg:text-xl">3. Tap your Smartap® on your client’s phone</p>
            <p className="lg:text-xl">4. Your Google review page will open up</p>
            <a className='text-white text-center px-6 py-3 bg-black' href="">GET YOURS  →</a>
          </div>
          <div className="lg:w-1/2 lg:px-12">
            <img src="images/nfc.gif" alt="Product" className="mx-auto rounded-lg"/>
          </div>
        </div>
      </section>
      <section className="container px-6 mx-auto flex-col gap-10 justify-center py-14 flex items-center">
        <h2 className="text-3xl font-semibold mb-8">FAQ</h2>
        <FAQSection faqs={faqs} />
      </section>
      <section className="container px-6 mx-auto py-14">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 max-lg:gap-16">
            <div className="text-center">
              <img src="images/guarantee1.svg" alt="Guarantee Logo 1" className="mx-auto mb-4" />
              <h3 className="text-lg lg:text-2xl mb-6 font-semibold">30 Day Money-Back</h3>
              <p className="lg:text-xl text-gray-500">Not satisfied with your smartap®? Send it back to us and we'll refund your order in full!</p>
            </div>

            <div className="text-center">
              <img src="images/guarantee2.svg" alt="Guarantee Logo 2" className="mx-auto mb-4" />
              <h3 className="text-lg lg:text-2xl mb-6 font-semibold">Worldwide Sales</h3>
              <p className="lg:text-xl text-gray-500">Over 17,000+ smartap® cards sold Worldwide and counting.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;
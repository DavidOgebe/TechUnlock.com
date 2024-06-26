/* eslint-disable @next/next/no-img-element */
import FooterImage from "@/assets/images/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="text-white py-8 bg-sky-500 relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-800 opacity-50"></div>
      <section className="mx-auto z-10 px-4 py-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="z-10 pl-10 mb-6 md:mb-0 md:w-2/5 flex justify-center md:justify-start">
          <img src={FooterImage} alt="Logo" className="w-38" />
        </div>
        <div className="w-full md:w-3/5 flex z-10 flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3 text-center md:text-left">
            <h3 className="font-bold mb-2 text-[#0A3747]">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3 text-center md:text-left">
            <h3 className="font-bold mb-2 text-[#0A3747]">Programs</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Program 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Program 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Program 3
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="font-bold mb-2 text-[#0A3747]">Contacts</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  @techunlockNigeria
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  @Techunlock
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  07037734027
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  09034770558
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto z-10 p-6 bg-darkblue relative">
        <ul className="flex justify-center items-center">
          <li>
            <a href="#" className="hover:underline">
              FAQ’s
            </a>
            <span className="mx-4">|</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="mx-4">|</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <span className="mx-4">|</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
            <span className="mx-4">|</span>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Start Learning
            </a>
            <span className="mx-4">|</span>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

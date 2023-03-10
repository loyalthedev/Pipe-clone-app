import styles from "../style";
import pave from "../../assets/pave.png";
import paveLogo from "../../assets/pave-logo.svg";
import vermaFarms from "../../assets/verma.png";
import vermaLogo from "../../assets/verma.svg";
import loveCircular from "../../assets/love-circular.png";
import loveCircularLogo from "../../assets/love-circular.svg";
import CaseSlider from "../Swiper/Swiper";

const CASE_STUDIES = [
  {
    title: "Watch Sho's Story",
    body: " Pave used Pipe side-by-side with equity to preserve ownership while they grew",
    footer: "Pipe for SaaS",
    image: pave,
    overlay: paveLogo,
  },
  {
    title: "Watch AJ's Story",
    body: "Verma Farms got the funding they needed to complete an acquisition in less than 72 hours",
    footer: "Pipe for D2C",
    image: vermaFarms,
    overlay: vermaLogo,

  },
  {
    title: "Watch Zaires's Story",
    body: " Love Circular 2x'd their revenue and grew their team after each Pipe trade",
    footer: "Pipe for Services",
    image: loveCircular,
    overlay: loveCircularLogo,

  },
]


const Customer = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.paddingX}`}>
      <div className="heading block lg:flex justify-between w-full">
        <div className="text-content">
          <p className="text-xs font-bold text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit my-3">
            CASE STUDIES
          </p>
          <h2 className="text-white font-inter font-light text-2xl lg:text-4xl">
            Loved by industry leaders
          </h2>
          <h2 className="text-tertiary font-inter font-light text-2xl lg:text-4xl">
            See what founders are saying
          </h2>
        </div>
        <button className="button-content bg-secondary text-white font-normal font-inter py-3 px-6 rounded-full h-fit mt-14 text-sm">
          Customer Stories
        </button>
      </div>
      <div className="swiper max-w-6xl">
        <CaseSlider caseStudies={CASE_STUDIES} />
      </div>
    </section>
  );
};

export default Customer;

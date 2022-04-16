import PatikaDev from "../svgs/PatikaDev";
import SmallCard from "../svgs/SmallCard";
import BigCard from "../svgs/BigCard";
import style from "./GeneralInfo.module.css";

const GeneralInfo = () => {
  const styleCard = {
    background: "var(--lineButton-color)",
  };
  return (
    <div className={style.parentDiv}>
      <div className={style.patikaDevDiv}>
        <PatikaDev />
      </div>
      <h1 className={style.header}>YAZILIM PATİKALARI</h1>
      <div className={style.paragraphDiv}>
        <p className={style.paragraph}>
          Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
          eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere
          sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye
          hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8
          haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde
          başarılı olan öğrenciler sponsor şirkette ya da sektörde başka
          şirketlere işe yerleşirler.
        </p>
      </div>
      <div className={style.smallCardDiv}>
        <SmallCard style={styleCard} />
      </div>
      <div className={style.bigCardDiv}>
        <BigCard style={styleCard} />
      </div>
    </div>
  );
};

export default GeneralInfo;

import React, { useState } from "react";
import bgImg from "./images/bgImage.png";
// import FrontCard from "./components/FrontCard";
import cardFront from "./images/cardfront.png";
import cardLogo from "./images/cardLogo.svg";
// import BackCard from "./components/BackCard";
import cardBack from "./images/cardback.png";
// import Form from "./components/Form";
import Thankyou from "./components/Thankyou";

const App = () => {

  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvc, setCvc] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit=(e) => {
    e.preventDefault();
    if (name.length == 0 || cardNo.length!=16 || MM<13 || MM>0 || YY>22){
      setError(true);
    }
  }

  return (
    <main>
      <section>
        <div className="absolute -z-10">
          <img src={bgImg} alt="bg-Img" width={500} />
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <div>
              <div className="relative mt-24 ml-40">
                <img
                  src={cardFront}
                  alt=""
                  width={500}
                  height={300}
                  className="absolute shadow-2xl rounded-lg z-0"
                />
                <div className="absolute">
                  <img src={cardLogo} alt="" className="p-6" />
                  <div className="p-10">
                    <h2 className="mt-6 text-4xl tracking-widest text-white">
                      {cardNo}
                    </h2>

                    <ul className="flex justify-between w-full mt-8 text-white uppercase tracking-widest">
                      <li className="uppercase">{name}</li>
                      <li>{MM}/{YY}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mt-80 ml-72 shadow-2xl rounded-lg">
                <img
                  src={cardBack}
                  alt=""
                  width={500}
                  height={300}
                  className=""
                />
                <h2 className="absolute text-white tracking-widest text-xl -mt-[152px] ml-[400px]">
                  {cvc}
                </h2>
              </div>
            </div>
          </div>

          <div className="w-2/5">
            {!confirmed && (
            <form className="flex flex-col justify-center ml-auto gap-8 max-w-lg lg:h-screen font-semibold">
              <div>
                <label
                  htmlFor="cardholder_name"
                  className="block uppercase tracking-widest mb-2 text-sm text-slate-800"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardholder_name"
                  placeholder="e.g. Jane Appleseed"
                  required
                  className="border-2  block py-3 px-4 outline-none w-full border-slate-300 rounded-xl"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {error ? <label>Name can't be empty</label>: ""}

              <div>
                <label
                  htmlFor="cardnumber"
                  className="block uppercase tracking-wider mt-2 mb-2 text-sm text-slate-800"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardnumber"
                  placeholder="e.g. 1234 5678 9123 0000"
                  required
                  className="border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl"
                  maxLength={19}
                  value={cardNo
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e)=>setCardNo(e.target.value)}
                />
              </div>
              {error ? <label className="bg-red-400">Name can't be empty</label>: ""}

              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="expiry"
                    className="block uppercase tracking-wider mt-2 mb-2 text-sm text-slate-800"
                  >
                    Exp. Date (MM/YY)
                  </label>
                  <div className="flex w-full gap-4">
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM"
                      required
                      className="border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl"
                      maxLength={2}
                      value={MM}
                      onChange={(e)=>setMM(e.target.value)}
                    />
                    <input
                      type="text"
                      id="expiry"
                      placeholder="YY"
                      required
                      className="border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl"
                      maxLength={2}
                      value={YY}
                      onChange={(e)=>setYY(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="cvc"
                    className="block uppercase tracking-wider mt-2 mb-2 text-sm text-slate-800"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    placeholder="e.g. 123"
                    required
                    className="border-2 block py-3 px-4 outline-none w-full border-slate-300 rounded-xl"
                    maxLength={3}
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#220930] py-3 px-6 rounded-md text-white text-lg tracking-wider mt-4"
                onClick={() => setConfirmed(true) || handleSubmit}
              >
                Confirm
              </button>
            </form>
            )}

            {confirmed && <Thankyou setConfirmed={setConfirmed} />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

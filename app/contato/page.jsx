"use client";
import { Headset, Map, MapPin } from "lucide-react";
import Center from "../ui/center";
import { useState, useEffect } from "react";
import Link from "next/link";

const List = [
  {
    icon: <MapPin />,
    title: "Onde estamos",
    desc: (
      <p className="md:pl-12">
        Rua Brás Cubas 160 - Vila Tavares. Campo Limpo Paulista/SP - 13230-078.
      </p>
    ),
  },
  {
    icon: <Headset />,
    title: "Telefones",
    desc: (
      <p className="flex flex-col gap-3 lg:flex-row lg:gap-10 md:pl-12">
        <span className="flex items-center gap-3">(11) 97434-4466</span>
      </p>
    ),
  },
  {
    icon: <Map />,
    title: "Localização",
    desc: (
      <div className="flex flex-col gap-3 rounded-lg mt-5">
        <iframe
          className="w-full min-h-[400px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29337.180465741003!2d-46.832185125683644!3d-23.20129249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cedf228749fb63%3A0x926d241a8c4754d2!2sMap%20Calhas%20e%20Telhas!5e0!3m2!1spt-BR!2sbr!4v1715182976809!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <Link
          target="_blank"
          className="bg-blue-600 rounded-xl text-center text-white px-3 py-2 lg:text-xl"
          href="https://www.google.com/maps/place/Map+Calhas+e+Telhas/@-23.2012925,-46.7966512,17z/data=!3m1!4b1!4m6!3m5!1s0x94cedf228749fb63:0x926d241a8c4754d2!8m2!3d-23.2012925!4d-46.7940763!16s%2Fg%2F11bvt5xr0s?entry=ttu"
        >
          Ir para Google Maps
        </Link>
      </div>
    ),
  },
];

export default function ContactPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contato", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
      setNotification("Dados enviados com sucesso!");
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="pt-44 pb-5">
        <Center>
          <h1 className="text-title uppercase font-bold text-primaryRed">
            Entre em Contato
          </h1>
          <div className="h-[2px] w-full md:w-5/6 bg-primaryRed" />

          <section className="pt-5">
            <ul className="flex flex-col gap-5">
              {List.map((item) => (
                <li className="flex flex-col gap-2" key={item.title}>
                  <div className="flex items-center gap-2">
                    <span className="bg-primaryRed p-2 rounded-full text-white">
                      {item.icon}
                    </span>
                    <h1 className="text-2xl lg:text-3xl uppercase font-bold text-strongDark">
                      {item.title}
                    </h1>
                  </div>
                  <div className="text-lg text-softDark">{item.desc}</div>
                </li>
              ))}
            </ul>
          </section>
        </Center>

        <section className="mt-10">
          <Center>
            <h1 className="text-4xl uppercase text-primaryRed font-bold">
              Contate-nos
            </h1>
            <div className="w-full lg:w-5/6 h-[2px] bg-primaryRed" />
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="lg:grid lg:grid-cols-2 lg:gap-20 w-full">
                <div className="flex flex-col mb-3 lg:mb-0">
                  <label htmlFor="fullname">Nome e Sobrenome</label>
                  <input
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    type="text"
                    id="fullname"
                    placeholder="José Antônio"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    id="email"
                    placeholder="joseantonio@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="h-32"
                  id="message"
                  placeholder="Digite aqui sua mensagem"
                />
              </div>

              <button
                className="w-full my-5 bg-green-700 p-3 rounded-md text-white font-medium text-lg"
                type="submit"
              >
                Enviar
              </button>
            </form>
            <div className="bg-slate-100 flex flex-col rounded-md border-slate-300 border shadow-md">
              {error &&
                error.map((e) => (
                  <div key={e} className="text-red-600 px-5 py-2">
                    {e}
                  </div>
                ))}
            </div>
          </Center>
        </section>
      </div>
      {notification && (
        <div
          className={`fixed bottom-5 right-5 bg-white border border-gray-300 rounded-md shadow-lg p-4 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-green-700">{notification}</p>
        </div>
      )}
    </>
  );
}

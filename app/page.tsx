import Link from "next/link"

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <div className="pl-10 sm:pl-20 md:pl-40 pb-40 sm:pb-56 md:pb-20 pt-20 flex flex-col gap-5 z-[10] max-w-[90%] md:max-w-[48%]">
          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-[2.7vw] text-white font-semibold">
          <q>Live as if you were to die tomorrow.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
              {" "}
              Learn as if you were to live forever.
            </span>
          </q>
            <br/>
            <i className="text text-white text-[20px] sm:text-[24px] md:text-[28px]"> Mahatma Gandhi </i>
          </h1>

          <p className="text-sm text-gray-200 block md:hidden">
            Olá 👋, bem-vindo ao meu website! 🚀
          </p>
          <p className="text-[1vw] text-gray-200 hidden md:block">
            Olá 👋, este é o meu website. Aqui podes descobrir um pouco mais sobre mim e alguns dos meus projetos. Desde já muito obrigado pela visita! 🤗
          </p>

          {/* Buttons: Adjusted for Mobile and Desktop */}
          <div className="flex flex-col md:flex-row gap-5">
            <Link
              href="about-me"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[135px] md:max-w-[15vw]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Sobre mim
            </Link>

            <Link
              href="my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[115px] md:max-w-[15vw]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Portfólio
            </Link>

            <Link
              href="contact-me"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[125px] md:max-w-[15vw]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contactos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

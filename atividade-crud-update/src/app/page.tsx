import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-center">
        
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            Sistema de Produtos
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Clique abaixo para visualizar a lista de produtos.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="/produtos"
            className="flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-6 text-white transition-colors hover:bg-blue-700 md:w-[200px]"
          >
            Ver Produtos
          </Link>
        </div>

      </main>
    </div>
  );
}
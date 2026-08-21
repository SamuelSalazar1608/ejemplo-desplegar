// 'use client' le dice a Next.js que este componente se ejecutará en el navegador (cliente), lo que nos permite usar hooks como useState y useEffect.
'use client';

// Importamos useState (para guardar datos) y useEffect (para ejecutar código al cargar la página) desde la librería React.
import { useState, useEffect } from 'react';

// Definimos el componente principal de nuestra página llamado Home.
export default function Home() {
  // Creamos un estado llamado 'mensaje' para guardar lo que nos responda el backend. 'setMensaje' es la función para actualizarlo. Iniciamos con "Cargando...".
  const [mensaje, setMensaje] = useState("Cargando...");

  // useEffect se ejecuta automáticamente cuando el componente aparece en la pantalla por primera vez (gracias al arreglo vacío [] al final).
  useEffect(() => {
    // Definimos una función asíncrona para pedir (fetch) los datos al backend.
    const obtenerDatos = async () => {
      try {
        // Hacemos la petición a nuestra ruta local de la API que creamos (/api/hello).
        const respuesta = await fetch('/api/hello');
       
        // Convertimos la respuesta que viene del backend a un objeto JavaScript (JSON).
        const datos = await respuesta.json();
       
        // Actualizamos nuestro estado 'mensaje' con el texto que vino del backend.
        setMensaje(datos.mensaje);
      } catch (error) {
        // Si hay un error (como que el servidor esté apagado), mostramos esto.
        setMensaje("Error al conectar con el backend");
      }
    };

    // Ejecutamos la función que acabamos de definir arriba.
    obtenerDatos();
  }, []); // El arreglo vacío significa "solo ejecuta esto una vez al cargar la página".

  // Retornamos el código HTML (JSX) que se mostrará en la pantalla.
  return (
    // Creamos un contenedor centrado con estilos básicos usando Tailwind CSS (que viene integrado con Next.js).
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
     
      {/* Tarjeta blanca para mostrar la información */}
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
       
        {/* Título de la página */}
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Mi Primera App Fullstack</h1>
       
        {/* Mostramos el mensaje que trajimos desde el backend */}
        <p className="text-xl text-gray-800">
          Mensaje del servidor: <span className="font-semibold text-green-600">{mensaje}</span>
        </p>
       
      </div>
    </main>
  );
}

/*import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}*/

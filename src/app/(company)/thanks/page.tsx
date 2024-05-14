export default function Thanks() {
  return (
    <section className="h-[calc(100vh - 3.5rem)] flex h-screen align-middle lg:pt-0">
      <div className="mx-auto my-auto grid max-w-screen-xl px-4 lg:grid-cols-12 lg:gap-8 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Thanks for your request.
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            A representative will be in touch.
          </p>
        </div>
        <div className="lg:col-span-5 lg:mt-0 lg:flex">
          <img src="/static/images/canary_gogg.png" alt="canary" />
        </div>
      </div>
    </section>
  )
}

export default function Company() {
  return (
    <div>
      <section className="mt-14 flex h-[calc(100dvh_-_3.5rem)] from-offsetGray  to-gray-600  align-middle antialiased  dark:bg-gradient-to-b lg:pt-0">
        <div className="mx-auto my-auto grid max-w-screen-xl px-4 lg:grid-cols-12 lg:gap-8 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Cloud Support
              <br />& Hosting.
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Canary Ops provide support for any cloud infrastructure project. We offer
              best-practice consultancy or fully managed DevOps, delivery and hosting in the Cloud.
            </p>
          </div>
          <div className="lg:col-span-5 lg:mt-0 lg:flex">
            <img src="/static/images/canary_gogg.png" alt="canary" />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Managed Cloud Hosting
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Canary Ops can manage your cloud infrastructure, including cloud migration,
                optimisation and 24/7 management of your cloud environment. Following the sidecar
                pattern, we ensure the uptime of your services without interfering.
              </p>
              <ul className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink- h-5 w-5  text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {/* Accredited Kubernetes experts, we can help you adopt container-based workloads
                    and overcome the knowledge barrier. */}
                    Existing infrastructure or migration projects
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0  text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Supported or fully-managed DevOps
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Help you migrate to containerized workloads
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Provide expertise on Kubernetes
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Support with Cloud Costs and Compliance
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                We can support your journey to cloud best-practice.
              </p>
            </div>
            <div className='h-full w-full bg-[url("/static/images/k8s_dark.png")] bg-contain bg-center bg-no-repeat dark:bg-[url("/static/images/k8s.png")]'></div>
          </div>
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
              src="/static/images/linode.png"
            />
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                24/7 Support
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                We provide support for applications and infrastructure deployed to any cloud
                environment. But crucially we aim to improve your monitoring and alerts capability
                so we won't need to.
              </p>
              <ul className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Live downtime support
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Root-cause analysis after any issue
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Security review and advice on testing
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Support with improving alerts and monitoring
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Reviewing ISO Compliance
                  </span>
                </li>
              </ul>
              <p className="font-light lg:text-xl">
                We aim to guide you towards Kubernetes deployments as we believe containerized
                workloads are inherently more robust.
              </p>
            </div>
          </div>
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Azure Specialists
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Microsoft Certified Azure Solution Architects and Administrators.
              </p>
              <ul className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink- h-5 w-5  text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {/* Accredited Kubernetes experts, we can help you adopt container-based workloads
                    and overcome the knowledge barrier. */}
                    Improving and managing existing apps or infrastructure
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0  text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Advice on aligning to the Well Architected Framework
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Improving Governance through Policies and Management Groups
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Azure DevOps Pipelines
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Budgets and Cost Management
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                Incrementally improve your existing infrastructure.
              </p>
            </div>
            <div className='h-full w-full bg-[url("/static/images/azure.svg")] bg-contain bg-center bg-no-repeat dark:bg-[url("/static/images/azure.svg")]'></div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center px-4 py-8 lg:grid lg:grid-cols-4 lg:gap-16 lg:px-6 lg:py-24 xl:gap-24">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-primary-600 dark:text-primary-500">
              Cloud Agnostic
            </p>
            <h2 className="mb-4 mt-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              We recommend Linode for hosting but can support any cloud infrastructure.
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              We are opinionated about cloud-native workloads that leverage standards. We can work
              with you to move towards this from any starting point.
            </p>
            <div className="mt-6 space-y-4 border-t border-gray-200 pt-6 dark:border-gray-700">
              <div>
                <a
                  href="https://landscape.cncf.io/"
                  className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                >
                  Explore Cloud Native Landscape
                  <svg
                    className="ml-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linode.com/docs/guides/kubernetes-use-cases/"
                  className="inline-flex items-center text-base font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
                >
                  See the Advantages of using Kubernetes
                  <svg
                    className="ml-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                className="mb-2 h-10 w-10 text-primary-600 dark:text-primary-500 md:h-12 md:w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">Observable Uptime</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Zero-downtime deployments and best in className observability tools
              </p>
            </div>
            <div>
              <svg
                className="mb-2 h-10 w-10 text-primary-600 dark:text-primary-500 md:h-12 md:w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">Scaling</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">Rules-based scaling</p>
            </div>
            <div>
              <svg
                className="mb-2 h-10 w-10 text-primary-600 dark:text-primary-500 md:h-12 md:w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">Resiliency by design</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Support any deployment strategy
              </p>
            </div>
            <div>
              <svg
                className="mb-2 h-10 w-10 text-primary-600 dark:text-primary-500 md:h-12 md:w-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold dark:text-white">Cloud Costs Management</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Optimized Cloud Costs based on usage
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-24">
          <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Clients
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Whilst we can work with any organsation, we focus on SME businesses that need Hosting,
              DevOps or Cloud Administration Support.
            </p>
          </div>
          <div className="flex flex-col space-y-8 sm:gap-6 md:grid md:grid-cols-4 lg:space-y-0 xl:gap-10">
            <div className="borderp-6 mx-auto flex max-w-lg flex-col rounded-lg bg-white p-2 text-center text-gray-900 shadow dark:border-gray-600 dark:text-white xl:p-8">
              <a
                href="https://www.antleaf.com"
                target="_blank"
                className=" h-24 w-24 bg-[url('/static/images/antleaf.jpg')] bg-contain bg-center bg-no-repeat"
              >
                <span className="hidden">Antleaf</span>
              </a>
            </div>
            <div className="borderp-6 mx-auto flex max-w-lg rounded-lg bg-white p-2 text-center text-gray-900 shadow dark:border-gray-600 dark:text-white xl:p-8 ">
              <a
                href="https://www.holisticfit.club/"
                target="_blank"
                className="h-24 w-24 bg-[url('/static/images/hfc.png')] bg-contain bg-center bg-no-repeat"
              >
                <span className="hidden">HFC</span>
              </a>
            </div>
            <div className="borderp-6 mx-auto flex max-w-lg rounded-lg bg-white p-2 text-center text-gray-900 shadow dark:border-gray-600 dark:text-white xl:p-8 ">
              <a
                href="https://www.omm.agency/"
                target="_blank"
                className="h-24 w-24 bg-[url('/static/images/omm.webp')] bg-contain bg-center bg-no-repeat"
              >
                <span className="hidden">OMM</span>
              </a>
            </div>
            <div className="borderp-6 mx-auto flex max-w-lg rounded-lg bg-white p-2 text-center text-gray-900 shadow dark:border-gray-600 dark:text-white xl:p-8">
              <a
                href="https://www.blitzhiit.co.uk"
                target="_blank"
                className="h-24 w-24 bg-opacity-100 bg-[url('/static/images/blitz.png')] bg-contain bg-center bg-no-repeat p-2"
              >
                <span className="hidden">Blitz</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Need advice about a cloud project? Interested in fortifying your support function? Let
            us know.
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-8"
            name="contact"
          >
            <input type="hidden" name="access_key" value="116ac77d-54dd-4946-b87c-29b9aae45cd1" />
            <input type="hidden" name="redirect" value="https://canaryops.co.uk/thanks" />
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
            >
              Send message
            </button>
            <div className="h-captcha" data-captcha="true"></div>
          </form>
        </div>
      </section>
    </div>
  )
}

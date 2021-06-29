import Link from "next/link";

const Maintainer = () => {
  return (
    <div>
      <div>
        <div className="font-medium">
          <h1 className="text-4xl">Maintainer</h1>
          <h2 className="text-xl mt-2">Maintain and manage projects</h2>
        </div>

        <p className="text-right text-lg mt-3">
          Join us as a{" "}
          <Link href="/join-us/contributor">
            <a className="text-base-green font-bold hover:underline">
              Contributor
            </a>
          </Link>
        </p>
      </div>

      <div className="text-center">
        <div className="flex justify-items-center items-center flex-col">
          <p className="text-xl lg:text-4xl font-semibold text-base-blue my-5">
            Please Choose One below
          </p>
          <img
            src="/octo-teacher.png"
            alt="octo teacaher"
            draggable="false"
            className="w-1/3"
          />
        </div>
        <div className="grid items-center grid-cols-1 gap-1 lg:grid-cols-3 w-full lg:w-8/12 mx-auto mt-10 mb-10">
          <Link href="/join-us/maintainer/new-project">
            <a className="bg-base-teal text-white rounded-lg text-xl py-5 font-medium">
              New Project
            </a>
          </Link>

          <span />

          <Link href="/join-us/maintainer/existing-project">
            <a className="bg-base-teal text-white rounded-lg text-xl py-5 font-medium">
              Existing Project
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Maintainer;

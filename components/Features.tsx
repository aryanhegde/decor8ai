import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-52">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-2 font-bold text-4xl text-gray-600">
            Transform any room with just one photo
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Designing your interior has never been much easier
          </p>
        </div>
      </div>
      {/* STEPS  */}
      <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1 ">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pt-4">
            <span className="text-sm font-medium text-orange-600">Step 1</span>
            <span className="text-xl font-semibold">
              {" "}
              Sign up for an Account
            </span>
            <span className="mt-2 text-zinc-700">
              Choose one of out plans and get started{" "}
              <Link
                href="#pricing"
                className="text-blue-700 underline underline-offset-2"
              >
                plans
              </Link>
            </span>
          </div>
        </li>

        <li className="md:flex-1 ">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pt-4">
            <span className="text-sm font-medium text-orange-600">Step 2</span>
            <span className="text-xl font-semibold"> Upload your Images</span>
            <span className="mt-2 text-zinc-700">
              We&apos;ll process your Image and re-design it according to the
              options you have selected.
            </span>
          </div>
        </li>
        <li className="md:flex-1 ">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pt-4">
            <span className="text-sm font-medium text-orange-600">Step 3</span>
            <span className="text-xl font-semibold"> Use the Image</span>
            <span className="mt-2 text-zinc-700">
              It&apos;s that simple. Get started now and Impress your clients
              with amazing designs.
            </span>
          </div>
        </li>
      </ol>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
            <Image
              src="/file-upload-preview.jpg"
              width={1419}
              height={732}
              alt="Uploading Preview"
              className="rounded-md bg-white p-2  sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

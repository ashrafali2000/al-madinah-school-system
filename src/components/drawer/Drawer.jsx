import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Drawer({ open, drawerHandler }) {
  const navigationList = [
    { link: "/", title: "Secondary" },
    { link: "/about-us", title: "About us" },
    { link: "/how-we-teach", title: "How we teach" },
    { link: "/", title: "Login" },
    { link: "/contact-us", title: "Contact" },
    { link: "/", title: "Register Now" },
    { link: "/", title: "Support" },
  ];
  return (
    <Dialog open={open} onClose={drawerHandler} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-lg duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-20 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={drawerHandler}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-4 shadow-xl">
                <div className="px-4 sm:px-6">
                  <img src="./logo.png" alt="logo" className="h-16 lg:h-20" />
                </div>
                <div className="relative mt-10 flex flex-col gap-2 px-4 sm:px-6">
                  {/* Your content */}
                  {navigationList.map((item, index) => (
                    <Link
                      key={index}
                      className="bg-gray-100 rounded-md  p-2 border transition duration-1000 hover:text-sky-400 hover:border-sky-600"
                      href={item.link}
                      onClick={drawerHandler}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href={"/Enquiry"}
                    onClick={drawerHandler}
                    className="justify-end bg-sky-900 transition duration-1000 border hover:text-gray-800 hover:bg-gray-100 hover:border-sky-600 text-gray-100 text-sm xl:text-base uppercase  py-2  px-4 rounded-md font-bold "
                  >
                    enquire
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

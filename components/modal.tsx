import { Fragment, ReactElement } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  content: ReactElement | null;
  isOpen: boolean;
  onClose: () => void;
  // className?: string;
}

const Modal = ({
  content, isOpen, onClose, // className,
}: Props) => (
  <Transition.Root show={isOpen} as={Fragment}>
    <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={onClose}>
      <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block overflow-hidden relative px-4 pt-5 pb-4 text-left align-bottom bg-white rounded-lg shadow-xl transition-all sm:p-6 sm:my-8 sm:w-full sm:max-w-md sm:align-middle md:max-w-lg lg:max-w-xl">
            {content}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
);

export default Modal;

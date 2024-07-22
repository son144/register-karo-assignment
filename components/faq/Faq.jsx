import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className='sm:mt-8 mt-4 sm:mb-20 mb-10 '>
      <h2 className='text-center text-primary sm:text-4xl text-3xl font-semibold'>Questions in mind?</h2>
      <p className='sm:text-3xl text-2xl text-[#303A42] font-medium text-center mt-1'>Read our FAQ</p>
      <div className='flex justify-center sm:gap-10 gap-5 mt-4'>
        <div className='sm:w-[10%] w-[30%] h-[2px] border-b border-b-[#CBCED8]'></div>
        <div className='sm:w-[10%] w-[30%]  h-[2px] border-b border-b-[#CBCED8]'></div>
      </div>
      <div className='flex sm:flex-row flex-col gap-x-10 sm:gap-y-10 gap-y-5 w-[85%] m-auto  mt-8'>
        <div className='sm:w-[50%] w-[100%] flex flex-col sm:gap-10 gap-5'>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  How can a virtual office benefit my business in India?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>

                  Can I legally register my business using a virtual office address in India?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  How will I receive my business mail and packages with a virtual office?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  Can I use a virtual office address for official correspondence and marketing materials?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  Do virtual office services in India include call answering and forwarding?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
        </div>
        <div className='sm:w-[50%] w-[100%] flex flex-col sm:gap-10 gap-5'>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  How can I cancel my virtual office service if needed?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  Is it possible to upgrade or downgrade my virtual office plan as my business needs change?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>
                  Can I access meeting rooms and conference facilities with a virtual office plan?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>

                  Are there any additional fees or hidden costs associated with virtual office services in India?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
          <div className='  sm:text-lg text-base font-semibold'>
            <Disclosure >
              <DisclosureButton className="group rounded-xl bg-[#F2F5FE] flex justify-between items-center gap-2 w-full py-2 px-4 text-[#303A42]">
                <div className='w-[80%] text-start'>

                  What kind of documentation do I need to provide to set up a virtual office in India?
                </div>
                <FaPlus className="text-sm group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className={"px-4 py-2"}>No</DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq




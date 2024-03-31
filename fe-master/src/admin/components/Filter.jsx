import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';
import dataRuangan from '@/api/admin/ruangan/dataRuangan';
import { Skeleton } from './Skeleton';

export default function Filter() {
  const [selected, setSelected] = useState({ nama_ruangan: 'Berdasarkan Ruangan' })
  const [getRuangan, setRuangan] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try{
        const data = await dataRuangan();
        setRuangan(data.data);
        setLoading(false)
      } catch (error){
        console.log(error);
        setLoading(false)
      }
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton count={1} />
      ) : getRuangan ? (
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative mt-2 flex">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{selected.nama_ruangan}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {getRuangan.map((item) => (
                      <Listbox.Option
                        key={item.id_ruangan}
                        className={({ active }) =>
                          classNames(
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                              >
                                {item.nama_ruangan}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      ) : (
        <p>Data Tidak Tersedia</p>
      )}
    </>
  )
}

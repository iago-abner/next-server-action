import {prismaClient} from '../../prisma-client'
import { AvailableCheckbox } from './AvailableCheckbox'
import { ButtonDelete } from './ButtonDelete'
import { createCar, deleteCar } from './action'

export default async function Cars(){
  let cars = await prismaClient.car.findMany()

  return(
    <div className="flex flex-col m-8 gap-y-4">
      <h1 className='text-2xl font-bold'>Locadora de Veículos</h1>

      <form action={createCar} className="flex flex-col gap-y-2 w-1/2">
        <div className='flex flex-wrap gap-x-2 w-full'>
          <input className='text-black rounded-md placeholder:pl-2' type="text" placeholder="Nome" name='name'/>
          <input  className='text-black rounded-md placeholder:pl-2' type="text" placeholder="Marca" name='brand' />
          <label className="flex gap-x-2 items-center">
          <p>Disponibilidade: </p>
          <input type="checkbox" placeholder="available" name='isAvailable'/>
        </label>
        </div>
        <button type="submit" className="text-black bg-white p-2 w-1/3 justify-center rounded-md">Cadastrar</button>
      </form>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 bg-white rounded-xl">
              <thead className='p-4'>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 ">
                  Id
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Brand
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Is Available
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cars.map(car => (
                  <tr key={car.id}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.id}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{car.brand}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <AvailableCheckbox id={car.id} isAvailable={car.isAvailable} />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <ButtonDelete id={car.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

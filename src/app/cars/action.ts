'use server'
import { prismaClient } from "@/prisma-client"
import { revalidatePath } from "next/cache"

export async function createCar (data: FormData) {
  const car = await prismaClient.car.create({
    data: {
      name: data.get('name') as string,
      brand: data.get('brand') as string,
      isAvailable: data.get('isAvailable') === 'on'
    }
  })

  revalidatePath('/cars')

  return car
}

export async function updateAvailable (id: number, isAvailable: boolean) {
  const car = await prismaClient.car.update({
    where: {
      id,
    },
    data: {
      isAvailable
    }
  })

  revalidatePath('/cars')

  return car
}

export async function deleteCar (id: number) {
  const car = await prismaClient.car.delete({
    where: {
      id,
    }
  })

  revalidatePath('/cars')

  return car
}


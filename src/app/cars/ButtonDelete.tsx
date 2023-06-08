'use client'

import { useTransition } from "react"
import { deleteCar, updateAvailable } from "./action"

export function ButtonDelete ({id }: {id: number}) {
  let [isPending, startTransition] = useTransition()
  return (
    <label>
      {isPending && <p>...</p> }
      <button
        onClick={ () =>
          startTransition(()=> {
            deleteCar(id)
          })
        }
      >excluir</button>
    </label>
    )
}

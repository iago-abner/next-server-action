'use client'

import { useTransition } from "react"
import { updateAvailable } from "./action"

type AvailableCheckboxProps = {
  id: number
  isAvailable: boolean
}

export function AvailableCheckbox ({id, isAvailable}: AvailableCheckboxProps) {
  let [isPending, startTransition] = useTransition()
  return (
    <label>
      {isPending && <p>...</p> }
      <input
        type="checkbox"
        checked={isAvailable}
        onChange={(e) => {
          startTransition(()=> {
            updateAvailable(id, e.target.checked)
          })
        }}
      />
    </label>
    )
}

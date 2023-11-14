"use client";

import React, {useEffect, useState} from 'react'

export default function counter() {
    const [state, setState] = useState(false)
    useEffect(() => {
        setState(true)
    },[]); 

  return (
    <div>counter</div>
  )
}

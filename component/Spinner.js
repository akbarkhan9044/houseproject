'use client';
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#3b82f6",
  };
export default function Spinner({loading}) {
  return (
    <ClipLoader
    color='#3b82f6'
    loading={loading}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"

  />
  )
}

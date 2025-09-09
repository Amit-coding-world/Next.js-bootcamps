"use client"
import {submitAction} from "@/actions/form"
import { useRef } from "react";

export default function Home() {
  let ref=useRef()
  return (
   <div className="mx-auto flex ">
    <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
      <div className="mx-4 my-4">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="text-black bg-amber-800" />
      </div>
      <div className="mx-4 my-4">
        <label htmlFor="add">Address</label>
        <input type="text" name="add" id="add" className="text-black bg-lime-500" />
      </div>
      <div className="mx-4 my-4">
        <button className="border border-amber-100 px-3 rounded-3xl">Submit</button>
      </div>
    </form>
   </div>
  );
}

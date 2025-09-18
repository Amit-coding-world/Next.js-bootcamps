import Image from "next/image";

export default function Home() {
  // console.log("the id is:-",process.env.ID)
  // console.log("the secret:-",process.env.SECRET)
  return (
    <div> 
      this is a home page {process.env.NEXT_PUBLIC_SECRET} AND {process.env.NEXT_PUBLIC_ID}
    </div>

  );
}

import Image from "next/image";

// export default async function Home(props) {
//   console.log(props)
//props have two promises params and searchParams
// localhost:3000/?name="fozia"
// it will be present in searchParams
  export default async function Home({searchParams}) {
  console.log(await searchParams)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <h1 className="text-4xl">Services</h1>
    </div>
  );
}

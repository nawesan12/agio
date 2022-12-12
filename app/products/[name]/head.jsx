export default function Head({ params }) {

  const paramsStrings = params.name.split("/")

  return (
    <>
    <title>{JSON.stringify(paramsStrings.at(-1).replace(/%20/g, " "))} | Agio</title>
    </>
  )
}
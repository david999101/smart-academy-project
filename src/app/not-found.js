import Link from "next/link"


function NotFound() {
  return (
    <div>
        <h1>URL not found</h1>
        <Link href="/"> {"<-"}return to Main page</Link>
        </div>
  )
}

export default NotFound
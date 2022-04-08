import Link from "next/link";
import { Button } from 'reactstrap'

export default function Content() {
  return (
    <div>
      <h1 className="display-4">Online Gaming Platform</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2" />
      <p className="lead">
        <Link href="/"><Button color="primary">Learn More</Button></Link>
      </p>
    </div>
  );
}
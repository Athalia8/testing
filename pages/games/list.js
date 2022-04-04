import Link from "next/link";
import Layout from "../../components/layouts/Layout";

export default function GameList() {
  return (
    <div>
      <Layout title="Game list">
        <div className="text-center">
          <h1>Game list</h1>
          <Link href="/games/detail">
            <button>Update Profile</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}

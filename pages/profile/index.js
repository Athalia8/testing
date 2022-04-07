import Link from "next/link";
import Layout from "../../components/layouts/Layout";

export default function Profile() {
  return (
    <div>
      <Layout title="Profile">
        <div className="text-center">
          <h1 className="text-center">Profile Page</h1>
          <Link href="/profile/update">
            <button>Update Profile</button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}

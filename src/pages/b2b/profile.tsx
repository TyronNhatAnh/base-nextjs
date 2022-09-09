import Profile from "@containers/B2C/Profile";
import WrapperProtectedLayout from "@containers/WrapperProtectedLayout";

export default function ProfilePage() {
  return (
    <>
      <WrapperProtectedLayout>
        <Profile />
      </WrapperProtectedLayout>
    </>
  );
}

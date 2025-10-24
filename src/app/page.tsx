import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { Logout } from "./logout";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-y-6">
      Protected server component
      <div className="max-w-4xl">{JSON.stringify(data, null, 2)}</div>
      <Logout />
    </div>
  );
};

export default Page;

import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();

  return (
    <div>
      <p>Workflows page</p>
    </div>
  );
};

export default Page;

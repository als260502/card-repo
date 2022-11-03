import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/generate");
  }, [router]);

  return (
    <h1 className="w-full h-screen px-2 bg-gray-200 flex items-center justify-center">
      Redirecting to generate...
    </h1>
  );
}

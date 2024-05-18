"use client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const SideNav = () => {
  const router = useRouter();
  const routes = [
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/sign-in",
      label: "Sign In",
    },
    {
      href: "/sign-up",
      label: "Sign Up",
    },
  ];

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return ;
};

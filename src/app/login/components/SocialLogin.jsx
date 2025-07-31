"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  // handle the login
  const handleLogin = (providerName) => {
    signIn(providerName);
  };
  //   handle the redirect
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
      toast.success("you successfully login");
    }
  }, [session?.status]);

  return (
    <div className="flex gap-6">
      <button
        onClick={() => handleLogin("google")}
        className="btn btn-outline "
      >
        <FcGoogle size={28} />
        <span>google</span>
      </button>
      <button onClick={() => handleLogin("github")} className="btn btn-outline">
        <SiGithub size={28} />
        <span>google</span>
      </button>
    </div>
  );
};

export default SocialLogin;

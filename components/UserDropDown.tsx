"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect } from "react";
import { User } from "lucide-react";
import { cacheClean } from "@/Actions/auth";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const UserDropDown = () => {
  const { name, Users } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await Users();
    })();
  }, []);

  const logout = async () => {
    cacheClean()
    router.refresh();
  };

  if (name) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <User />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Orders</DropdownMenuItem>
          <DropdownMenuItem>Address</DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>LogOut</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return <Link href="/LogIn">Login</Link>;
};

export default UserDropDown;

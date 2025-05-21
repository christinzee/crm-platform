"use client";

import * as React from "react";

import { NavMain } from "@/components/NavMain";
import { NavUser } from "@/components/NavUser";
import { NavHeader } from "@/components/NavHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Christin",
    email: "christin@acme.co",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        {/* <SearchForm /> */}
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

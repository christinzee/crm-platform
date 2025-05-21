"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  LayoutDashboard,
  Bell,
  Handshake,
  Users,
  Building,
  CheckSquare,
  Calendar,
  PlusCircleIcon,
  SearchIcon,
  User,
} from "lucide-react";
import { Button } from "./ui/button";

export function NavMain() {
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuButton>
            <SearchIcon className="mr-2" />
            Search
          </SidebarMenuButton>
          <SidebarMenuButton>
            <PlusCircleIcon className="mr-2" />
            Create
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuButton asChild>
            <Link href="/">
              <LayoutDashboard className="mr-2" />
              Dashboard
            </Link>
          </SidebarMenuButton>

          <SidebarMenuButton asChild>
            <Link href="/companies">
              <Building className="mr-2" />
              Companies
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/deals">
              <Handshake className="mr-2" />
              Deals
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/contacts">
              <Users className="mr-2" />
              Contacts
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Productivity</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuButton asChild>
            <Link href="/tasks">
              <CheckSquare className="mr-2" />
              Tasks
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Link href="/calendar">
              <Calendar className="mr-2" />
              Calendar
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ManageOrganizationButton } from "./manage-organization"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  data: any;
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={props.data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ManageOrganizationButton />
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

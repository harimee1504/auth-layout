import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useOrganization, useOrganizationList, useUser } from "@clerk/clerk-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const OrganizationLoading = () => {
  return (
    <SidebarMenuButton
    size="lg"
    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
  >
    <div className="relative flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
      <span
        className="w-full h-full size-4 rounded-md bg-gray-100 animate-pulse"
      />
    </div>
    <div className="relative flex w-[80%] h-[80%] items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
      <span
        className="w-full h-full size-4 rounded-md bg-gray-100 animate-pulse"
      />
    </div>
    <ChevronsUpDown className="ml-auto" />
  </SidebarMenuButton>
  );
}


export function TeamSwitcher() {
  const { isMobile } = useSidebar();
  const { setActive } = useOrganizationList();
  const {organization: activeTeam} = useOrganization();
  const {user} = useUser();
  
  if (!user) return <OrganizationLoading />;
  
  const organizationList = user.organizationMemberships;
  
  React.useEffect(() => {
    if (!activeTeam && organizationList && organizationList.length > 0 && setActive) {
      setActive({ organization: organizationList[0].organization.id });
    }
  }, [activeTeam, organizationList, setActive]);
  
  if (!activeTeam || !organizationList || organizationList.length === 0) {
    return <OrganizationLoading />;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="relative flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Image
                  src={activeTeam?.imageUrl}
                  className="size-4 rounded-md"
                  fill
                  alt={activeTeam?.name}
                />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeTeam?.name}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Organizations
            </DropdownMenuLabel>
            {organizationList.map((org) => (
              <DropdownMenuItem
                key={org.organization.name}
                onClick={() => setActive && setActive({ organization: org.organization.id })}
                className={cn("gap-2 p-2",
                  org.organization.id === activeTeam?.id && "bg-blue-200"
                )}
              >
                <div className="relative flex size-6 items-center justify-center rounded-sm border">
                <Image
                  src={org.organization.imageUrl}
                  className="size-4 rounded-sm"
                  fill
                  alt={org.organization.name}
                />
                </div>
                {org.organization.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add Organization</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

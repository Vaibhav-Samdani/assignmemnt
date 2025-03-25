import { Braces, Calendar, ContactRound, Home, Images, Inbox, Newspaper, Search, Settings, Wrench } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "BLOG",
    url: "/blogs",
    icon: Newspaper,
  },
  {
    title: "TOOLS",
    url: "#",
    icon: Wrench,
  },
  {
    title: "API",
    url: "#",
    icon: Braces,
  },
  {
    title: "GALLERY",
    url: "#",
    icon: Images,
  },
  {
    title: "CONTACT",
    url: "#",
    icon: ContactRound,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="!border-none md:hidden" side="right" >
      <SidebarContent className="bg-slate-950 border-0 outline-0 text-white">
        <SidebarGroup>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="mt-2" href={item.url}>
                      <item.icon size={48} strokeWidth={2.5} />
                      
                      <span className="font-semibold text-xl">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

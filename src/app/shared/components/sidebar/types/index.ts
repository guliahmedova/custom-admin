export interface SidebarLink {
  id: string;
  icon: string;
  label: string;
  children?: SidebarLink[];
}

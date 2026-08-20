export interface UserProp {
  name: string;
  image: string;
  email: string;
  role: "admin"| "dancer" | "company"
}

export interface ProfileDropdownProps {
  user: UserProp;
  onLogout?: () => void;
}

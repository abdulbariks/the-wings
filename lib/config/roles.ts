export const DASHBOARD_ROLES: Record<string, "dancer" | "company" | "admin"> = {
  "dancer-dashboard": "dancer",
  "company-dashboard": "company",
  "admin-dashboard": "admin",
};

export function getDashboardRole(
  pathname: string,
): "dancer" | "company" | "admin" {
  const segments = pathname.split("/").filter(Boolean);
  for (const segment of segments) {
    if (segment in DASHBOARD_ROLES) {
      return DASHBOARD_ROLES[segment];
    }
  }
  return "dancer";
}

declare module "lucide-react" {
  import * as React from "react";
  type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

  export const Layers: React.FC<IconProps>;
  export const Users: React.FC<IconProps>;
  export const Shield: React.FC<IconProps>;

  const icons: { [key: string]: React.FC<IconProps> };
  export default icons;
}
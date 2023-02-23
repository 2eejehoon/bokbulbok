import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

export default function Portal({ children, selector }: PortalProps) {
  const [mount, setMount] = useState(false);

  const element = mount && document.getElementById(selector);

  useEffect(() => {
    setMount((prev) => true);
  }, []);

  return <>{element && children && createPortal(children, element)}</>;
}

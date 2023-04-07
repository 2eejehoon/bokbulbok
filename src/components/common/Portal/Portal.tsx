import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

function Portal({ children, selector }: PortalProps) {
  const [mount, setMount] = useState(false);

  const element = typeof window && mount && document.getElementById(selector);

  useEffect(() => {
    setMount(true);
  }, []);

  return <>{element && children && createPortal(children, element)}</>;
}

export default Portal;

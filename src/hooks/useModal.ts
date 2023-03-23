import { useState, useCallback } from "react";

export default function useModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  return [modalOpen, handleModalOpen, handleModalClose] as const;
}

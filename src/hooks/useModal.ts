import { useState, useCallback } from "react";

type useModalReturnType = [
  modalOpen: boolean,
  handleModalOpen: () => void,
  handleModalClose: () => void
];

export default function useModal(): useModalReturnType {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  return [modalOpen, handleModalOpen, handleModalClose];
}

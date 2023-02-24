import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import Slider from "@/components/Slider/Slider";
import { useState, useCallback } from "react";

export default function DistanceSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = useCallback(() => setModalOpen((prev) => true), []);

  return (
    <>
      <Button type="button" color="black" size="large" onClick={handleClick}>
        1 km 이내
      </Button>
      <Modal size="slider" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Slider />
      </Modal>
    </>
  );
}

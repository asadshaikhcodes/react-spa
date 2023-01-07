import { Modal } from "antd";

const SiteModal = ({ isModalOpen, modalContent, handleCancel }) => {
  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        {modalContent}
      </Modal>
    </>
  );
};

export default SiteModal;

import Modal from "react-bootstrap/Modal";

function DescriptionModal({
  Desc,
  Show,
  Hide,
}: {
  Desc: string;
  Show: boolean;
  Hide: any;
}) {
  //   const [show, setShow] = useState(false);

  return (
    <Modal
      style={{ marginTop: "10vh", marginBottom: "5vh" }}
      show={Show}
      onHide={Hide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Problem Statement Description</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: "auto", maxHeight: "70vh" }}>
        {Desc}
      </Modal.Body>
    </Modal>
  );
}

export default DescriptionModal;

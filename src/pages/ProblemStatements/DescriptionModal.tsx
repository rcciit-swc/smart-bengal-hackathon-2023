import Modal from "react-bootstrap/Modal";
import logo from "../../assets/logo.png";

function DescriptionModal({
  Ps,
  Show,
  Hide,
  OrgName,
}: {
  Ps: any;
  Show: boolean;
  Hide: any;
  OrgName: string;
}) {
  //   const [show, setShow] = useState(false);

  return (
    <Modal size="xl" style={{ marginTop: "5vh" }} show={Show}>
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between px-2 w-100 align-items-center">
          <img src={logo} alt="logo" width={80} />
          <span>Problem Statement Description</span>
          <button id="close" onClick={Hide}>
            close
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: "scroll", maxHeight: "70vh" }}>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column">
            <span className="fw-bold">Problem Statement Description: </span>{" "}
            <span>{Ps.description}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">Problem Statement Number: </span>{" "}
            <span className="d-flex align-items-center gap-1">
              {Ps.psNumber}
              <img
                src="https://img.icons8.com/windows/32/null/clone-figure.png"
                alt="copy"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigator.clipboard.writeText(Ps.psNumber);
                  alert("Copied to clipboard");
                }}
              />
            </span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">Organization: </span>{" "}
            <span>{OrgName}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">Problem Statement Title: </span>{" "}
            <span>{Ps.title}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">Category: </span>{" "}
            <span>{Ps.category}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">Domain Bucket: </span>{" "}
            <span>{Ps.domain}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold">Applicable For: </span>{" "}
            <span>{Ps.applicableFor}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DescriptionModal;

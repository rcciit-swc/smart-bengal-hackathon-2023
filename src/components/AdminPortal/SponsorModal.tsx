import React, { ChangeEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDataContext } from "../../contexts/DataProvider";

function SponsorModal() {
	const [show, setShow] = useState(false);
	const [seletecdFile, setSelectedFile] = useState<File | null>(null);
	const [sponsorCategory, setSponsorCategory] = useState<string>('');
	const { setImageAndCategory } = useDataContext();

	const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		console.log(file);
		setSelectedFile(file || null);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setShow(false);
		setImageAndCategory(seletecdFile, sponsorCategory);
		// clear inputs
		setSelectedFile(null);
		setSponsorCategory('');
	};


	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="light" onClick={handleShow}>
				<img
					src="https://img.icons8.com/ios-filled/108/null/plus-2-math.png"
					alt="addOrg"
				/>
			</Button>

			<Modal show={show} onHide={handleClose} style={{ marginTop: "10vh" }}>
				<Modal.Header closeButton>
					<Modal.Title>Add Sponsors</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Sponsor Category Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Category"
								autoFocus
								value={sponsorCategory}
								onChange={(e) => setSponsorCategory(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Sponsor Logo</Form.Label>
							<Form.Control
								type="file"
								placeholder="Upload Sponsor Logo"
								onChange={handleFileSelect}
							/>
						</Form.Group>
						<Button variant="primary" type="submit" onClick={handleSubmit}>
							Save Changes
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default SponsorModal;

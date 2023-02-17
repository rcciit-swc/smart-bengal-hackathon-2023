import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDataContext } from "../../contexts/DataProvider";

function SponsorModal() {
	const [show, setShow] = useState(false);
	const [seletecdFile, setSelectedFile] = useState<File | null>(null);
	const [categoryList, setCategoryList] = useState<string[]>([]);
	const [uploadSponsor, setUploadSponsor] = useState<{
		category: string,
		name: string
	}>({
		category: '',
		name: ''
	});
	const { setImageAndCategory, getSponsorCategory } = useDataContext();
	const [newCategory, setNewCategory] = useState<boolean>(false);
	const [newOrderNo, setNewOrderNo] = useState<boolean>(false);
	const [orderNo, setOrderNo] = useState<string | number>('Last');

	const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		console.log(file);
		setSelectedFile(file || null);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setShow(false);
		console.log('orderNo', orderNo);
		setImageAndCategory(seletecdFile, uploadSponsor, orderNo);
		// clear inputs
		setSelectedFile(null);
		setUploadSponsor({ category: '', name: '' });
		setNewCategory(false);
		setNewOrderNo(false);
	};

	const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const option = event.target.value;
		if (option === 'Other') {
			setNewCategory(true);
			setUploadSponsor({ category: '', name: uploadSponsor.name });
		}

		else if (option !== '') {
			setUploadSponsor({ category: option, name: uploadSponsor.name });
		}
	}

	const handlePosition = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const option = event.target.value;
		console.log('in handle position', option);
		
		if (option === 'Other') {
			setNewOrderNo(true);
			setOrderNo('');
		}
		else if (option !== '') {
			setOrderNo(option);
		}
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		async function fetchSponsorCategory() {
			const category = await getSponsorCategory();
			// console.log(category);
			setCategoryList([...category]);
		}

		fetchSponsorCategory();
		// eslint-disable-next-line
	}, []);

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
							<Form.Label>Sponsor Category</Form.Label>
							{!newCategory && <Form.Select aria-label="Default select example" onChange={handleCategory}>
								<option value={''}>Open this select menu</option>
								{categoryList && categoryList.map((category: string) => <option value={category}>{category}</option>)}
								{!categoryList && <><option value="Tech Partner">Tech Partner</option>
									<option value="Organizing Partner">Organizing Partner</option></>}
								<option value="Other">Other</option>
							</Form.Select>}
							{newCategory && <><Form.Control
								type="text"
								placeholder="Enter Category"
								autoFocus
								value={uploadSponsor.category}
								onChange={(e) => setUploadSponsor({ category: e.target.value, name: uploadSponsor.name })}
							/><span className="text-decoration-underline" style={{ cursor: 'pointer' }} onClick={() => setNewCategory(false)}>{'Back'}</span></>}
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Sponsor Logo Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Logo Name"
								autoFocus
								value={uploadSponsor.name}
								onChange={(e) => setUploadSponsor({ category: uploadSponsor.category, name: e.target.value })}
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
						<Form.Label>Set Logo Position</Form.Label>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							{!newOrderNo && <Form.Select aria-label="Default select example" onChange={handlePosition}>
								<option value={'Last'}>Last (Default)</option>
								<option value={'First'}>First</option>
								<option value={'Other'}>Set Position</option>
							</Form.Select>}
							{newOrderNo && <Form.Control
								type="text"
								placeholder="Enter Position"
								autoFocus
								value={orderNo}
								onChange={(e) => setOrderNo(parseInt(e.target.value))}
							/>}
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

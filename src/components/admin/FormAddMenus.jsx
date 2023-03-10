import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../url";

const FormAddMenus = () => {
	const [nama_menu, setNama_menu] = useState("");
	const [img, setImg] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [stok, setStok] = useState("");
	const [harga_menu, setHarga_menu] = useState("");
	const [msg, setMsg] = useState("");
	const navigate = useNavigate();

	const saveProduct = async (e) => {
		e.preventDefault();
		try {
			await axios.post(API_URL + "/menu/add", {
				nama_menu: nama_menu,
				img: img,
				deskripsi: deskripsi,
				stok: stok,
				harga_menu: harga_menu,
			});
			navigate("/admin/menus");
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};
	return (
		<>
			<main className="main-wrap">
				<br></br>
				<br></br>
				<Card className="kocak" border="primary" style={{ width: "50rem" }}>
					<Card.Header className="text-center">
						<p class="font-weight-bold">
							<strong>Jura Chicken Menu</strong>
						</p>
					</Card.Header>
					<Card.Body>
						<Form onSubmit={saveProduct}>
							<p className="has-text-centered">{msg}</p>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Nama Menu</Form.Label>
								<Form.Control
									type="text"
									className="input"
									value={nama_menu}
									onChange={(e) => setNama_menu(e.target.value)}
									placeholder="Nama Menu"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Image Menu</Form.Label>
								<Form.Control
									type="text"
									className="input"
									value={img}
									onChange={(e) => setImg(e.target.value)}
									placeholder="Masukan Link"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Deskripsi Menu</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									className="input"
									value={deskripsi}
									onChange={(e) => setDeskripsi(e.target.value)}
									placeholder="Deskripsi Makanan"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Stok Menu</Form.Label>
								<Form.Control
									type="text"
									className="input"
									value={stok}
									onChange={(e) => setStok(e.target.value)}
									placeholder="Masukan Stok Menu"
								/>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Harga Menu</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={harga_menu}
										onChange={(e) => setHarga_menu(e.target.value)}
										placeholder="Masukan Harga Menu"
									/>
								</Form.Group>
							</Form.Group>
							<Button
								variant="primary"
								type="submit"
								className="button is-success"
								class="btn btn-primary">
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<br></br>
				<br></br>
			</main>
		</>
	);
};

export default FormAddMenus;

# Presentation Card

This repository contains the source code of the presentation card.

## The backend

The backend is a simple node fastify with prisma running sqlite to show presentation:

clone the repository
enter backend folder then

- rename the file .env.example to .env
- run yarn install
- run yarn prisma migrate
- run yarn dev

then you good to go to frontend

### API Routes

<details>
    <summary>
        <code>GET</code>
        <code><b>/api/user/:id</b></code>
        <code>Returns data from a user</code>
    </summary>
</details>

<details>
    <summary>
        <code>GET</code>
        <code><b>/api/card/generate</b></code>
        <code>Create a new user in database</code>
    </summary>
</details>

</details>

## Frontend

The frontend is NextJS and Typescript.

### Usage

clone the repository
enter backend folder then

clone the repository then

- run yarn install
- run yarn dev

- make sure the backend are running

access the your browser and type http://localhost:3000

---

Test pages
http://localhost:3000/generate

- page to create new qrcode

http://localhost:3000/qrcode?id=cla1noq6a0000v6ho2g3u6iet&name=Andr%C3%A9%20Souza

- example page thats show qrcode created

http://localhost:3000/card/cla1noq6a0000v6ho2g3u6iet

- page that show presentation card from qrcode scan

<p align="center">
<div style="display:flex; justify-content:space-around; margin-bottom:16px; gap:10px">
  <img alt="Generate page" src="assets/generate.png" width="350" title="hover text">
    <img src="assets/card.png" width="350" alt="Presentation page">
</div>
<div style="display:flex; justify-content:center">
  <img src="assets/qrcode.png" width="350" alt="QRCode page">
</div>

</p>

import React from "react";
import "./Detail.css";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const detail = useLoaderData();
  const { id, name, phone, email, website, username, address, company } =
    detail;
  return (
    <div>
      <h2>
        All about <span className="showName">{name}</span> is available here
      </h2>
      <div className="allInfo">
        <div className="basic-info  common-design">
          <h3>Basic Info</h3>
        <p><span>ID:</span> {id}</p>
        <p><span>Name:</span> {name}</p>
        <p><span>Username:</span> {username}</p>
        <p><span>Website:</span> {website}</p>
        </div>
        <div className="contact common-design">
          <h3>Contact Here</h3>
          <p><span>Phone:</span> {phone}</p>
          <p><span>Email:</span> {email}</p>
        </div>
        <div className="address common-design">
          <h3>Visit Us</h3>
          <p><span>Suite:</span> {address.suite}</p>
          <p><span>Street:</span> {address.street}</p>
          <p><span>City:</span> {address.city}</p>
          <p><span>Zipcode:</span> {address.zipcode}</p>
        </div>
        <div className="company common-design">
          <h3>Our Company</h3>
          <p><span>Name:</span> {company.name}</p>
          <p><span>Catch Phrase:</span> {company.catchPhrase}</p>
          <p><span>BS:</span> {company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

import styled from "styled-components";
import Announcement from "../components/home/announcement";
import React from "react";
import Menu from "./menu";

export default function Home() {
  return (
    <>
      <Announcement />
      {/* <SpecialProducts /> */}
      <Menu/>
    </>
  );
}

import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "30px" }}>Loading</h1>
    </div>
  );
}

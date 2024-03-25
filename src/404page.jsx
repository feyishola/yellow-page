import pagenotfound from "../src/assets/nodatafound.png";

export const PageNotFound = () => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "30vw",
        maxHeight: "10vh",
      }}
    >
      <div sx={{ minWidth: "500px", height: "500px" }}>
        <img width={"100%"} height={"100%"} src={pagenotfound} />
      </div>
    </div>
  );
};

import { message } from "antd";
import Swal from "sweetalert2";

export const service = (payload) => {
  fetch("http://localhost:8080/createFile", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        Swal.fire({
          title: "Successfully Submitted!",
          icon: "success",
          confirmButtonText: "<h6>OK</h6>",
        });
      } else {
        Swal.fire({
          title: data.response
            ? data.response.split(".").reduce((a, c, i) => {
                return a + "\n" + c;
              })
            : "Something went wrong",
          icon: "error",
          width: "80%",
          confirmButtonText: "<h6>OK</h6>",
        });
      }
    })
    .catch((error) => {
      message.error("Error encountered! Server Unreachable.");
    });
};

import Swal from "sweetalert2";

export const modal = (errorMsg, iconName) => {
  Swal.fire({
    title: errorMsg,
    icon: iconName,
    confirmButtonText: "<h6>OK</h6>",
  });
};

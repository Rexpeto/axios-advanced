import { VariantType, useSnackbar } from "notistack";

let useSnackbarRef: any;

export const SnackbarUtilitiesConfig: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarManager = {
  toast(msg: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },

  success(msg: string) {
    this.toast(msg, "success");
  },

  error(msg: string) {
    this.toast(msg, "error");
  },

  info(msg: string) {
    this.toast(msg, "info");
  },

  warning(msg: string) {
    this.toast(msg, "warning");
  },
};

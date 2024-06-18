import moment from "moment";
import "moment/locale/pt-br";

export default function formatDate(date) {
  return moment(date).locale("pt-br").format("LLL");
}

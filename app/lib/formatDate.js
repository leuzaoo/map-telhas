import moment from "moment-timezone";
import "moment/locale/pt-br";

export default function formatDate(date) {
  const brasiliaTimezone = "America/Sao_Paulo";
  return moment(date).tz(brasiliaTimezone).locale("pt-br").format("LLL");
}

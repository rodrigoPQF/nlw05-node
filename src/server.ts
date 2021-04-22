import { http } from "./http"
import "./websocket/client";

http.listen(3333, () => console.log("Aplication is Running on port 3333"));
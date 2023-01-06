import { MyProfile } from "../../db/profile/get/me";
export async function setDataUser(token:string){
  const rp= await MyProfile(token)
  localStorage.setItem('name',rp.name)
}

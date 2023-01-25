import axios from "axios";

// 'http:(IPAddress that expo provides when runing npx expo start):3333'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

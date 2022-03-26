import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/',
  headers: {
    'Content-Type': 'application/json',
  },
})
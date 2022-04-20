import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ3NUFiYjEwYmIxODNFRDhCYjM5RjQ0NDVkNTE2NjA3N2NiYzA3MmIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2MzU0MDExNTgyNDksIm5hbWUiOiJMeWlacmkifQ.qWZ8j7TOdyY_cUst14G9tSnWidfl-Pdmq2tiZQdBopc'
export const client = new Web3Storage({
  token: API_TOKEN
})
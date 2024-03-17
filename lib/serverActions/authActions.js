"use server";

export async function loginActions(){
    const res = await fetch('https://dummyjson.com/products/1', { cache: 'no-store' })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}
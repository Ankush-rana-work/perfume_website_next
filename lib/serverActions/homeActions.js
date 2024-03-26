"use server";

export async function topCategoriesAction(){
    const api_url = process.env.NEXT_PUBLIC_API_BASE_URL+'/api/v1/home/top-category';
    const res = await fetch(api_url, { cache: 'no-store' })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return await res.json()
}


export async function NewArrivalAction(per_page){
  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL+`/api/v1/home/new-arrival?page_no=1&per_page=${per_page}`;
  console.log(api_url);
  const res = await fetch(api_url, { cache: 'no-store' });
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
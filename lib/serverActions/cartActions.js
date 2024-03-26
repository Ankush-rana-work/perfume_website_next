"use server";

export async function addToCartAction(productId) {
    const api_url = process.env.NEXT_PUBLIC_API_BASE_URL + `/api/v1/cart/add`;
    console.log(api_url);
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjUsInVzZXJfZmlyc3RuYW1lIjoiQW5rdXNoIHJhbmEiLCJ1c2VyX2xhc3RuYW1lIjpudWxsfSwiaWF0IjoxNzExNDQyMzc0LCJleHAiOjE3MTQwMzQzNzR9.lHPeGLpVvey-xMZIgSE_2xewC2w7SKnmrLce2DRvb4A`
            },
            body: JSON.stringify({
                "product_id": productId,
                "quantity": 1
            })
        };

        const response = await fetch(api_url, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json()
    } catch (error) {
        console.error('There was a problem with the fetch request:', error);
    }
}

export async function cartListAction(productId) {
    const api_url = process.env.NEXT_PUBLIC_API_BASE_URL + `/api/v1/cart/list`;
    console.log(api_url);
    try {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjUsInVzZXJfZmlyc3RuYW1lIjoiQW5rdXNoIHJhbmEiLCJ1c2VyX2xhc3RuYW1lIjpudWxsfSwiaWF0IjoxNzExNDQyMzc0LCJleHAiOjE3MTQwMzQzNzR9.lHPeGLpVvey-xMZIgSE_2xewC2w7SKnmrLce2DRvb4A`
            }
        };

        const response = await fetch(api_url, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json()
    } catch (error) {
        console.error('There was a problem with the fetch request:', error);
    }
}

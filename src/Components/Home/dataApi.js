const baseUrl=import.meta.env.VITE_API_BASE_URL
const data=import.meta.env.VITE_ENDPOINT_DATA
export const getDataEndpoint = (build) =>
    build.query({
        query: (page) => {
            console.log(baseUrl, data)
            return {
                url:baseUrl+ data + page,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
        },
        invalidatesTags: ['data'],
    });
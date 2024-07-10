export async function fetchProductData(dispatch, setValueData, axios, id) {
    try {
        const { data } = await axios.get("https://66877d2a0bc7155dc017dc35.mockapi.io/goods/goods/" + id);
        dispatch(setValueData(data));
    } catch (error) {
        console.log("ERROR", error);
    }
}

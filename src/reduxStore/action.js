export const FETCH_USER_LIST = 'FETCH_USER_LIST';
export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';

export const fetchUserList = (pageNum, setLoading, setErrorMsg, setPageLimit) => {
    return async (dispatch) => {
        setLoading(true)
        try {
            const resp = await fetch(`https://reqres.in/api/users?page=${pageNum}`)
            const data = await resp?.json()
            setLoading(false);
            if (data) {
                setPageLimit(data.total_pages)
                dispatch({
                    type: FETCH_USER_LIST,
                    payload: data?.data
                })
            }
            else setErrorMsg('Some error occured')
        } catch (err) {
            setLoading(false)
            setErrorMsg(err.message)
        }
    }
}

export const fetchUserDetail = (userId, setSmallSpinner, setErrorMsg) => {
    return async (dispatch) => {
        try {
            setSmallSpinner(true)
            const resp = await fetch(`https://reqres.in/api/users/${userId}`);
            const respData = await resp.json();
            setSmallSpinner(false);
            if (respData) {
                dispatch({
                    type: FETCH_USER_DETAILS,
                    payload: respData.data
                })
            } else {
                setErrorMsg("some error ocurred, try again :)")
            }
        } catch (err) {
            setSmallSpinner(false)
            setErrorMsg(err.message)
        }
    }
}
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Button from './Button';
import Card from "./Card"
import Loader from './Loader';
import { fetchUserList, fetchUserDetail } from './reduxStore/action';
import Header from './Header';

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [smallSpinner, setSmallSpinner] = useState(false);
  const [userId, setUserId] = useState(null)
  const [isActive, setActive] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    if (pageNum)
      dispatch(fetchUserList(pageNum, setLoading, setErrorMsg, setPageLimit));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum])

  useEffect(() => {
    if (userId)
      dispatch(fetchUserDetail(userId, setSmallSpinner, setErrorMsg))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  const userList = useSelector(state => state?.reducer?.userList)
  const userDetail = useSelector(state => state?.reducer?.userDetail)

  return (
    !isLoading ? (
      <>
        <Header />
        <span className='errorMsg'>{errorMsg}</span>
        <Card details={userDetail} smallSpinner={smallSpinner} />
        <div className='btnList'>
          <button type='button'
            disabled={pageNum === 1 ? true : false}
            onClick={() => setPageNum(pageNum - 1)}
            className="arrowBtn"
            style={pageNum === 1 ? { backgroundColor: "gray" } : { backgroundColor: "black" }}
          >
            {"<"}
          </button>
          {userList?.map((item) =>
            <Button
              value={item}
              isActive={isActive}
              setActive={setActive}
              key={item.id}
              setUserId={setUserId}
              userId={userId}
            />
          )}
          <button type='button'
            disabled={pageNum === pageLimit ? true : false}
            onClick={() => setPageNum(pageNum + 1)}
            className="arrowBtn"
            style={pageNum === pageLimit ? { backgroundColor: "gray" } : { backgroundColor: "black" }}
          >
            {">"}
          </button>
        </div>
      </>
    ) : <Loader />
  );
}

export default App;

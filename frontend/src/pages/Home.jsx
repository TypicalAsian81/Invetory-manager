import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
// import '../styles/home.css';
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import LinearProgress from '@mui/material/LinearProgress'
// import useFirebaseMessaging from '@useweb/use-firebase-messaging'
// import CopyToClipboard from '../../lib/components/CopyToClipboard/CopyToClipboard'
// import Text from '../../lib/components/Text/Text'
// import Header from '../../lib/components/_unique/Header/Header'
// import useSnackbar from '../../lib/components/Snackbar/Snackbar'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // const snackbar = useSnackbar()

  // const firebaseMessaging = useFirebaseMessaging({
  //   onMessage: (message) => {
  //     console.log(`Received foreground message`, message)
  //     snackbar.show({
  //       message: message?.notification?.title || message?.data?.title,
  //     })
  //   },
  // })

  // useEffect(() => {
  //   firebaseMessaging.init()
  // }, [])

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'><b>INVENTORY</b></h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    {/* <Box>
      <Header
        title='Firebase Messaging Push Notification Example'
        tutorialLink='how-to-send-push-notifications-with-firebase-and-react'
        repoLink='https://github.com/jeremytenjo/how-to-send-push-notifications-with-firebase-and-react'
      />

      {firebaseMessaging.initializing && (
        <>
          <Text
            text='Initializing Firebase Messaging (enable notifications for this page)'
            sx={{ mb: 2 }}
          />
          <LinearProgress />
        </>
      )}

      {firebaseMessaging.error && (
        <Text text={firebaseMessaging.error.toString()} sx={{ color: 'red' }} />
      )}

      {firebaseMessaging.fcmRegistrationToken && (
        <>
          <Box
            sx={{
              display: 'grid',
              gridAutoFlow: 'column',
              justifyContent: 'start',
              alignItems: 'center',
              mb: 1,
              gridGap: '10px',
            }}
          >
            <Text text='FCM Registration Token:' />
            <CopyToClipboard text={firebaseMessaging.fcmRegistrationToken}>
              <Button>Copy</Button>
            </CopyToClipboard>
          </Box>

          <Text
            text={firebaseMessaging.fcmRegistrationToken}
            sx={{
              width: '100%',
              overflowWrap: 'break-word',
              fontSize: '14px',
              color: 'grey.main',
            }}
          />
        </>
      )}
    </Box> */}
    </div>
  );
};

export default Home;

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { setGameTitle } from './store/game/gameSlice';

function App() {
  const dispatch = useDispatch();

  return (
    <div className='container mx-auto drop-shadow-lg rounded-lg bg-slate-200 p-10'>
      <Formik
        initialValues={{ title: '' }}
        validate={(values) => {
          const errors = {};

          if (!values.title) {
            errors.title = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(setGameTitle(values));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='text' name='title' />
            <ErrorMessage name='title' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

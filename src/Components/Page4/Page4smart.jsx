import ReduxSubmitValidationForm from './Form';

export const submitCallback = formData => {
  console.log('result', formData)
}

function Page4() {
  return (
    <div>
      <h1>submit valid form example</h1>
      <ReduxSubmitValidationForm/>
    </div>
  );
}

export default Page4;